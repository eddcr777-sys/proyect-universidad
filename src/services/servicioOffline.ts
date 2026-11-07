/**
 * Servicio para gestión del Service Worker, almacenamiento offline (PWA)
 * y descarga completa del Proyecto de Ciberseguridad para uso sin conexión a internet.
 */

const CLAVE_DESCARGA_OFFLINE = 'alps_ciberseguridad_offline_v1';
const NOMBRE_CACHE_OFFLINE = 'alps-site-v2';
const RECURSOS_ESENCIALES_OFFLINE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/offline-assets.json',
];

interface EventoInstalacionPWA extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Módulos y grados disponibles en el Proyecto de Ciberseguridad
export const MODULOS_CIBERSEGURIDAD = [
  'phishing',
  'proteccion-cuentas',
  'redes-sociales',
  'software-pirata',
  'videojuegos',
  'auditorias'
];

export const GRADOS_CIBERSEGURIDAD = ['1ro', '2do', '3ro', '4to', '5to'];

/**
 * Genera la lista completa y ordenada de todas las páginas del Proyecto de Ciberseguridad.
 * Comienza por la portada, catálogo, justificación, guías y recorre cada módulo y lección.
 */
export const obtenerRutasProyectoCiberseguridad = (): { ruta: string; nombre: string }[] => {
  const lista: { ruta: string; nombre: string }[] = [
    // Núcleo del proyecto
    { ruta: '/proyectos/ciberseguridad', nombre: 'Portada Principal del Proyecto' },
    { ruta: '/proyectos/ciberseguridad/modulos', nombre: 'Catálogo de Grados' },
    { ruta: '/proyectos/ciberseguridad/justificacion', nombre: 'Justificación Pedagógica' },
    { ruta: '/proyectos/ciberseguridad/indices', nombre: 'Índices y Temario' },
    
    // Guías educativas
    { ruta: '/proyectos/ciberseguridad/guias/docentes', nombre: 'Guía para Docentes' },
    { ruta: '/proyectos/ciberseguridad/guias/padres', nombre: 'Guía para Padres y Representantes' },
    { ruta: '/proyectos/ciberseguridad/guias/alumnos', nombre: 'Guía para Alumnos' },
    { ruta: '/proyectos/ciberseguridad/guias/defensa', nombre: 'Guía de Defensa' },
    { ruta: '/proyectos/ciberseguridad/guias/manual-completo', nombre: 'Manual Completo' },
    
    // Institucional y desarrolladores en ciberseguridad
    { ruta: '/proyectos/ciberseguridad/nosotros/sobre-devs', nombre: 'Desarrolladores' },
    { ruta: '/proyectos/ciberseguridad/nosotros/sobre-ue', nombre: 'Sobre la Institución' }
  ];

  // Catálogos por cada grado (1ro a 5to)
  for (const grado of GRADOS_CIBERSEGURIDAD) {
    lista.push({
      ruta: `/proyectos/ciberseguridad/grado/${grado}`,
      nombre: `Catálogo de ${grado} Año`
    });
  }

  // Pre-Lobby (info) y Lección interactiva para cada módulo y cada año
  for (const modulo of MODULOS_CIBERSEGURIDAD) {
    for (const grado of GRADOS_CIBERSEGURIDAD) {
      lista.push({
        ruta: `/proyectos/ciberseguridad/info/${modulo}/${grado}`,
        nombre: `Información: ${modulo} (${grado})`
      });
      lista.push({
        ruta: `/proyectos/ciberseguridad/leccion/${modulo}/${grado}`,
        nombre: `Lección: ${modulo} (${grado})`
      });
    }
  }

  return lista;
};

// Variable para capturar el prompt de instalación PWA nativa
let eventoInstalacionDiferido: EventoInstalacionPWA | null = null;

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    eventoInstalacionDiferido = e as EventoInstalacionPWA;
    window.dispatchEvent(new CustomEvent('pwa-instalable-disponible'));
  });
}

/**
 * Registra el Service Worker en navegadores compatibles.
 */
export const registrarServiceWorker = async (): Promise<ServiceWorkerRegistration | null> => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return null;
  }

  try {
    const registro = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
    if (registro.waiting) {
      registro.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    return registro;
  } catch (error) {
    console.warn('[ServiceWorker] Registro SW:', error);
    return null;
  }
};

/**
 * Verifica si el proyecto ya fue marcado como descargado previamente.
 */
export const estaProyectoDescargado = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(CLAVE_DESCARGA_OFFLINE) === 'true';
};

/**
 * Descarga y almacena en caché todas las páginas, submódulos y recursos
 * del Proyecto de Ciberseguridad con reporte de progreso en tiempo real.
 */
export const descargarProyectoOffline = async (
  enProgreso?: (porcentaje: number, elementoActual: string) => void
): Promise<boolean> => {
  await registrarServiceWorker();

  if (typeof window === 'undefined' || !('caches' in window)) {
    throw new Error('Este navegador no permite guardar contenido para usarlo sin conexión.');
  }

  const respuestaManifiesto = await fetch('/offline-assets.json', { cache: 'no-store' });
  if (!respuestaManifiesto.ok) {
    throw new Error('No se pudo obtener la lista de archivos para el modo sin conexión.');
  }

  const recursos = await respuestaManifiesto.json() as unknown;
  if (!Array.isArray(recursos) || !recursos.every((recurso) => typeof recurso === 'string' && recurso.startsWith('/'))) {
    throw new Error('La lista de archivos sin conexión no es válida.');
  }

  const cache = await caches.open(NOMBRE_CACHE_OFFLINE);
  const listaRecursos = Array.from(new Set([...RECURSOS_ESENCIALES_OFFLINE, ...recursos]));

  for (const [indice, recurso] of listaRecursos.entries()) {
    const respuesta = await fetch(recurso, { cache: 'reload' });
    if (!respuesta.ok) {
      throw new Error(`No se pudo guardar ${recurso} para usarlo sin conexión.`);
    }

    await cache.put(recurso, respuesta);
    enProgreso?.(
      Math.round(((indice + 1) / listaRecursos.length) * 100),
      recurso === '/' || recurso === '/index.html' ? 'Aplicación principal' : recurso.split('/').pop() || recurso
    );
  }

  try {
    localStorage.setItem(CLAVE_DESCARGA_OFFLINE, 'true');
    localStorage.setItem('alps_ciberseguridad_fecha_descarga', new Date().toISOString());
  } catch (error) {
    console.warn('[Offline] No se pudo guardar el estado de descarga:', error);
  }
  return true;
};

/**
 * Solicita la instalación de la aplicación PWA en el dispositivo del usuario.
 */
export const instalarAplicacionPWA = async (): Promise<boolean> => {
  if (!eventoInstalacionDiferido) {
    return false;
  }

  try {
    eventoInstalacionDiferido.prompt();
    const eleccion = await eventoInstalacionDiferido.userChoice;
    eventoInstalacionDiferido = null;
    return eleccion.outcome === 'accepted';
  } catch (error) {
    console.warn('[PWA] Error durante la instalación:', error);
    return false;
  }
};

/**
 * Devuelve si el navegador permite la instalación PWA actualmente.
 */
export const esPwaInstalable = (): boolean => {
  return eventoInstalacionDiferido !== null;
};

/**
 * Suscribe un observador al estado de conexión online / offline del navegador.
 */
export const suscribirEstadoConexion = (callback: (estaEnLinea: boolean) => void): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  const manejarOnline = () => callback(true);
  const manejarOffline = () => callback(false);

  window.addEventListener('online', manejarOnline);
  window.addEventListener('offline', manejarOffline);

  callback(navigator.onLine);

  return () => {
    window.removeEventListener('online', manejarOnline);
    window.removeEventListener('offline', manejarOffline);
  };
};
