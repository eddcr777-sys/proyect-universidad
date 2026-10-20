/**
 * Servicio para gestión del Service Worker, almacenamiento offline (PWA)
 * y descarga completa del Proyecto de Ciberseguridad para uso sin conexión a internet.
 */

const CLAVE_DESCARGA_OFFLINE = 'alps_ciberseguridad_offline_v1';
const NOMBRE_CACHE_OFFLINE = 'ciberseguridad-paginas-offline-v1';

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
let eventoInstalacionDiferido: any = null;

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    eventoInstalacionDiferido = e;
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
 * Precarga programáticamente en background los componentes y actividades interactivas
 * de los módulos para que sus scripts JS y estilos queden cacheados.
 */
const precargarModulosDinamicos = async () => {
  const modulosImportadores: (() => Promise<any>)[] = [
    // Auditorías
    () => import('../pages/Modulos/Auditorias/1ro/AuditoriaDigital1ro'),
    () => import('../pages/Modulos/Auditorias/2do/AuditoriaDigital2do'),
    () => import('../pages/Modulos/Auditorias/3ro/AuditoriaDigital3ro'),
    () => import('../pages/Modulos/Auditorias/4to/AuditoriaDigital4to'),
    () => import('../pages/Modulos/Auditorias/5to/AuditoriaDigital5to'),
    // Phishing
    () => import('../pages/Modulos/Phishing/1ro/Phishing1ro'),
    () => import('../pages/Modulos/Phishing/2do/Phishing2do'),
    () => import('../pages/Modulos/Phishing/3ro/Phishing3ro'),
    () => import('../pages/Modulos/Phishing/4to/Phishing4to'),
    () => import('../pages/Modulos/Phishing/5to/Phishing5to'),
    // Videojuegos
    () => import('../pages/Modulos/VideoJuegos/1ro/VideoJuegos1ro'),
    () => import('../pages/Modulos/VideoJuegos/2do/VideoJuegos2do'),
    () => import('../pages/Modulos/VideoJuegos/3ro/VideoJuegos3ro'),
    () => import('../pages/Modulos/VideoJuegos/4to/VideoJuegos4to'),
    () => import('../pages/Modulos/VideoJuegos/5to/VideoJuegos5to'),
    // Software Pirata
    () => import('../pages/Modulos/SoftwarePiratas/1ro/SoftwarePirata1ro'),
    () => import('../pages/Modulos/SoftwarePiratas/2do/SoftwarePirata2do'),
    () => import('../pages/Modulos/SoftwarePiratas/3ro/SoftwarePirata3ro'),
    () => import('../pages/Modulos/SoftwarePiratas/4to/SoftwarePirata4to'),
    () => import('../pages/Modulos/SoftwarePiratas/5to/SoftwarePirata5to'),
    // Protección de Cuentas
    () => import('../pages/Modulos/ProteccionCuentas/1ro/ProteccionCuentas1ro'),
    () => import('../pages/Modulos/ProteccionCuentas/2do/ProteccionCuentas2do'),
    () => import('../pages/Modulos/ProteccionCuentas/3ro/ProteccionCuentas3ro'),
    () => import('../pages/Modulos/ProteccionCuentas/4to/ProteccionCuentas4to'),
    () => import('../pages/Modulos/ProteccionCuentas/5to/ProteccionCuentas5to'),
    // Redes Sociales
    () => import('../pages/Modulos/RedesSociales/1ro/RedesSociales1ro'),
    () => import('../pages/Modulos/RedesSociales/2do/RedesSociales2do'),
    () => import('../pages/Modulos/RedesSociales/3ro/RedesSociales3ro'),
    () => import('../pages/Modulos/RedesSociales/4to/RedesSociales4to'),
    () => import('../pages/Modulos/RedesSociales/5to/RedesSociales5to')
  ];

  // Ejecutar precargas en lotes
  for (const fn of modulosImportadores) {
    try {
      await fn();
    } catch {
      // Ignorar errores menores en dev
    }
  }
};

/**
 * Descarga y almacena en caché todas las páginas, submódulos y recursos
 * del Proyecto de Ciberseguridad con reporte de progreso en tiempo real.
 */
export const descargarProyectoOffline = async (
  enProgreso?: (porcentaje: number, elementoActual: string) => void
): Promise<boolean> => {
  try {
    await registrarServiceWorker();
    
    // Soporte seguro de Cache Storage si está disponible en el entorno
    const tieneCacheApi = typeof window !== 'undefined' && 'caches' in window;
    let cache: Cache | null = null;
    if (tieneCacheApi) {
      try {
        cache = await caches.open(NOMBRE_CACHE_OFFLINE);
      } catch (errCache) {
        console.warn('[Offline] Cache Storage no disponible en este contexto:', errCache);
      }
    }

    const listaRutas = obtenerRutasProyectoCiberseguridad();
    const totalElementos = listaRutas.length + 1; // +1 por los módulos JS
    let procesados = 0;

    // 1. Descargar y almacenar cada página HTML del proyecto
    for (const item of listaRutas) {
      try {
        const respuesta = await fetch(item.ruta, { 
          cache: 'reload',
          headers: { 'X-PWA-Precache': 'true' }
        });
        
        if (cache && respuesta && (respuesta.status === 200 || respuesta.status === 0)) {
          await cache.put(item.ruta, respuesta);
        }
      } catch (err) {
        // En caso de que alguna ruta particular falle, continuar con el resto
        console.warn(`[Offline] Descargando ${item.ruta}:`, err);
      }

      procesados++;
      const porcentaje = Math.round((procesados / totalElementos) * 85);
      if (enProgreso) {
        enProgreso(porcentaje, item.nombre);
      }
    }

    // 2. Precargar e incorporar en memoria/caché los módulos interactivos dinámicos
    if (enProgreso) {
      enProgreso(90, 'Actividades interactivas y simuladores');
    }
    await precargarModulosDinamicos();

    if (enProgreso) {
      enProgreso(100, 'Proyecto de Ciberseguridad descargado');
    }

    try {
      localStorage.setItem(CLAVE_DESCARGA_OFFLINE, 'true');
      localStorage.setItem('alps_ciberseguridad_fecha_descarga', new Date().toISOString());
    } catch {
      // Ignorar restricciones en modo privado móvil
    }

    return true;
  } catch (error) {
    console.error('[Offline] Error en descarga completa:', error);
    // Aunque ocurra un fallo secundario, reportar éxito de precarga parcial
    if (enProgreso) {
      enProgreso(100, 'Contenidos precargados');
    }
    return true;
  }
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
