/**
 * Service Worker Oficial del Complejo Educativo Antonio Lemus Pérez.
 * Proyecto de Ciberseguridad y Conciencia Digital.
 * Soporte completo para navegación y aprendizaje sin conexión (Offline).
 *
 * Este archivo permite que la aplicación funcione parcialmente sin internet:
 * - Guarda en caché recursos esenciales.
 * - Intercepta las peticiones del navegador.
 * - Sirve contenido desde caché cuando no hay red.
 * - Actualiza recursos en segundo plano cuando es posible.
 */

// Nombre de la caché utilizada por esta versión del Service Worker.
// Si se cambia la versión, se puede forzar la renovación de la caché.
const NOMBRE_CACHE = 'alps-site-v2';
const CACHE_ANTERIOR = 'alps-ciberseguridad-v1';
const ARCHIVO_RECURSOS_OFFLINE = '/offline-assets.json';

// Lista de rutas y recursos estáticos que se intentarán precachear durante la instalación.
// Estas rutas corresponden a páginas principales del proyecto de ciberseguridad.
const RECURSOS_ESENCIALES = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  ARCHIVO_RECURSOS_OFFLINE,
];

/*
 * EVENTO: install
 * Se ejecuta cuando el Service Worker se instala por primera vez o cuando cambia su versión.
 * Aquí se precachean los recursos esenciales para que la aplicación pueda funcionar offline.
 */
self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(NOMBRE_CACHE).then(async (cache) => {
      const precargar = async (recurso) => {
        try {
          const respuesta = await fetch(recurso, { cache: 'reload' });
          if (respuesta.ok) await cache.put(recurso, respuesta);
        } catch (error) {
          console.warn(`[SW] No se pudo precargar ${recurso}:`, error);
        }
      };

      await Promise.all(RECURSOS_ESENCIALES.map(precargar));

      try {
        const respuestaManifiesto = await fetch(ARCHIVO_RECURSOS_OFFLINE, { cache: 'reload' });
        if (respuestaManifiesto.ok) {
          const recursos = await respuestaManifiesto.json();
          if (Array.isArray(recursos)) {
            for (let inicio = 0; inicio < recursos.length; inicio += 6) {
              const lote = recursos
                .slice(inicio, inicio + 6)
                .filter((recurso) => typeof recurso === 'string' && recurso.startsWith('/'));
              await Promise.all(lote.map(precargar));
            }
          }
        }
      } catch (error) {
        console.warn('[SW] No se pudo leer el manifiesto offline:', error);
      }
    })
  );

  // skipWaiting hace que el nuevo Service Worker se active inmediatamente,
  // sin esperar a que se cierren todas las pestañas antiguas.
  self.skipWaiting();
});

/*
 * EVENTO: activate
 * Se ejecuta cuando el Service Worker toma el control.
 * Aquí se limpian cachés antiguas que ya no corresponden a la versión actual.
 */
self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys().then((claves) => {
      // Se recorren todas las cachés existentes en el navegador.
      return Promise.all(
        claves.map((clave) => {
          if (clave === CACHE_ANTERIOR || (clave.startsWith('alps-site-') && clave !== NOMBRE_CACHE)) {
            return caches.delete(clave);
          }
        })
      );
    }).then(() => self.clients.claim())
    // clients.claim() hace que este Service Worker controle inmediatamente
    // las páginas abiertas, sin necesidad de recargarlas.
  );
});

/*
 * EVENTO: fetch
 * Se ejecuta cada vez que la aplicación realiza una petición de red.
 * Aquí se decide si se responde desde caché, desde la red o con una estrategia mixta.
 */
self.addEventListener('fetch', (evento) => {
  const solicitud = evento.request;

  // Ignorar peticiones que no sean GET o que no usen el esquema HTTP/HTTPS.
  // El Service Worker solo debe gestionar peticiones seguras y de lectura.
  if (solicitud.method !== 'GET' || !solicitud.url.startsWith('http')) {
    return;
  }

  // Se crea un objeto URL para analizar la ruta y los parámetros de la petición.
  const url = new URL(solicitud.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  // Dejar pasar libremente peticiones relacionadas con el desarrollo y HMR de Vite.
  // Esto evita que el Service Worker interfiera con recargas en caliente o archivos internos.
  if (
    url.pathname.startsWith('/@') ||
    url.pathname.includes('node_modules') ||
    url.searchParams.has('t') ||
    url.searchParams.has('v')
  ) {
    return;
  }

  /*
   * CASO 1: Navegación HTML / rutas SPA
   * Si el usuario navega a una página, se intenta primero la red.
   * Si la red falla, se busca la página en caché o se devuelve el index.html.
   */
  if (solicitud.mode === 'navigate') {
    evento.respondWith(
      (async () => {
        const cache = await caches.open(NOMBRE_CACHE);
        try {
          const respuestaRed = await fetch(solicitud);
          if (respuestaRed.ok) {
            await cache.put(solicitud, respuestaRed.clone());
            return respuestaRed;
          }

          if (respuestaRed.status !== 404) return respuestaRed;
          const index = await fetch('/index.html');
          return index.ok ? index : respuestaRed;
        } catch {
          const respuestaCache = await caches.match(solicitud);
          if (respuestaCache) return respuestaCache;

          const indexOffline = await cache.match('/index.html') || await cache.match('/');
          if (indexOffline) return indexOffline;
          return new Response('Modo Offline: Proyecto Ciberseguridad Lemus Pérez', {
            status: 503,
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
          });
        }
      })()
    );
    return;
  }

  /*
   * CASO 2: Recursos estáticos
   * JS, CSS, imágenes, fuentes y otros archivos.
   * Se usa la estrategia "Stale-While-Revalidate":
   * - Se devuelve primero el recurso desde caché si existe.
   * - Mientras tanto, se intenta actualizar desde la red en segundo plano.
   */
  evento.respondWith(
    caches.match(solicitud).then((recursoEnCache) => {
      if (recursoEnCache) {
        // Si el recurso está en caché, se devuelve inmediatamente.
        // Además, se lanza una petición a la red para actualizarlo en segundo plano.
        fetch(solicitud)
          .then((respuestaFresca) => {
            if (respuestaFresca && respuestaFresca.status === 200) {
              caches.open(NOMBRE_CACHE).then((cache) => cache.put(solicitud, respuestaFresca));
            }
          })
          .catch(() => {
            // Si la actualización falla, no se hace nada porque ya se devolvió la copia en caché.
          });
        return recursoEnCache;
      }

      // Si el recurso no estaba en caché, se pide a la red y se guarda una copia.
      return fetch(solicitud)
        .then((respuestaRed) => {
          if (respuestaRed && respuestaRed.status === 200) {
            const copiaRespuesta = respuestaRed.clone();
            caches.open(NOMBRE_CACHE).then((cache) => cache.put(solicitud, copiaRespuesta));
          }
          return respuestaRed;
        })
        .catch(() => {
          if (solicitud.destination === 'image') {
            return new Response(null, { status: 504, statusText: 'Offline' });
          }
          return Response.error();
        });
    })
  );
});

/*
 * EVENTO: message
 * Permite recibir mensajes enviados desde la aplicación.
 * Por ejemplo, la app puede pedir que el Service Worker se active inmediatamente.
 */
self.addEventListener('message', (evento) => {
  if (evento.data && evento.data.type === 'SKIP_WAITING') {
    // Fuerza la activación inmediata del Service Worker.
    self.skipWaiting();
  }
});