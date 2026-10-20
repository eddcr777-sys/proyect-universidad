/**
 * Service Worker Oficial del Complejo Educativo Antonio Lemus Pérez.
 * Proyecto de Ciberseguridad y Conciencia Digital.
 * Soporte completo para navegación y aprendizaje sin conexión (Offline).
 */

const NOMBRE_CACHE = 'alps-ciberseguridad-v1';
const RECURSOS_ESTATICOS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/proyectos/ciberseguridad',
  '/proyectos/ciberseguridad/modulos',
  '/proyectos/ciberseguridad/justificacion',
  '/proyectos/ciberseguridad/indices',
  '/proyectos/ciberseguridad/guias/docentes',
  '/proyectos/ciberseguridad/guias/padres',
  '/proyectos/ciberseguridad/guias/defensa',
  '/proyectos/ciberseguridad/guias/manual-completo',
  '/proyectos/ciberseguridad/nosotros/sobre-devs',
  '/proyectos/ciberseguridad/nosotros/sobre-ue'
];

// Instalación: precachea recursos esenciales y activa de inmediato
self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(NOMBRE_CACHE).then(async (cache) => {
      try {
        await cache.addAll(RECURSOS_ESTATICOS);
      } catch (err) {
        console.warn('[SW] Algunos recursos iniciales no pudieron precachearse:', err);
      }
    })
  );
  self.skipWaiting();
});

// Activación: toma el control de los clientes y limpia cachés anteriores
self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys().then((claves) => {
      return Promise.all(
        claves.map((clave) => {
          if (clave !== NOMBRE_CACHE && !clave.includes('offline')) {
            return caches.delete(clave);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interceptor de peticiones (Fetch)
self.addEventListener('fetch', (evento) => {
  const solicitud = evento.request;

  // Ignorar peticiones no GET o de esquemas no soportados
  if (solicitud.method !== 'GET' || !solicitud.url.startsWith('http')) {
    return;
  }

  const url = new URL(solicitud.url);

  // Dejar pasar libremente peticiones de desarrollo y HMR de Vite
  if (
    url.pathname.startsWith('/@') ||
    url.pathname.includes('node_modules') ||
    url.searchParams.has('t') ||
    url.searchParams.has('v')
  ) {
    return;
  }

  // 1. Manejo de navegaciones HTML (Rutas SPA)
  if (solicitud.mode === 'navigate') {
    evento.respondWith(
      fetch(solicitud)
        .then((respuestaRed) => {
          // Si la red responde bien, almacenar en caché copia de la página
          if (respuestaRed && respuestaRed.status === 200) {
            const copiaRespuesta = respuestaRed.clone();
            caches.open(NOMBRE_CACHE).then((cache) => cache.put(solicitud, copiaRespuesta));
          }
          return respuestaRed;
        })
        .catch(async () => {
          // Si no hay internet, intentar devolver la ruta desde el caché o el index.html
          const cache = await caches.open(NOMBRE_CACHE);
          const respuestaCache = await cache.match(solicitud);
          if (respuestaCache) return respuestaCache;

          const indexOffline = await cache.match('/index.html') || await cache.match('/');
          if (indexOffline) return indexOffline;

          return new Response('Modo Offline: Proyecto Ciberseguridad Lemus Pérez', {
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
          });
        })
    );
    return;
  }

  // 2. Manejo de recursos estáticos (JS, CSS, imágenes, fuentes)
  evento.respondWith(
    caches.match(solicitud).then((recursoEnCache) => {
      if (recursoEnCache) {
        // Stale-While-Revalidate: devuelve desde caché y actualiza en segundo plano
        fetch(solicitud)
          .then((respuestaFresca) => {
            if (respuestaFresca && respuestaFresca.status === 200) {
              caches.open(NOMBRE_CACHE).then((cache) => cache.put(solicitud, respuestaFresca));
            }
          })
          .catch(() => {});
        return recursoEnCache;
      }

      // Si no estaba en caché, pedir a la red y guardar copia
      return fetch(solicitud)
        .then((respuestaRed) => {
          if (respuestaRed && respuestaRed.status === 200) {
            const copiaRespuesta = respuestaRed.clone();
            caches.open(NOMBRE_CACHE).then((cache) => cache.put(solicitud, copiaRespuesta));
          }
          return respuestaRed;
        })
        .catch(() => {
          // Si falla y es una imagen, devolver fallback si existe
          if (solicitud.destination === 'image') {
            return caches.match('/favicon.svg');
          }
        });
    })
  );
});

// Escuchar mensajes desde la app (ej. forzar activación inmediata)
self.addEventListener('message', (evento) => {
  if (evento.data && evento.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
