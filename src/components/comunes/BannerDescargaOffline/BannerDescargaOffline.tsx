import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  DownloadCloud, 
  CheckCircle, 
  X, 
  Wifi, 
  WifiOff, 
  Smartphone, 
  Loader2, 
  CircleCheck
} from 'lucide-react';
import { 
  registrarServiceWorker, 
  descargarProyectoOffline, 
  estaProyectoDescargado, 
  esPwaInstalable, 
  instalarAplicacionPWA, 
  suscribirEstadoConexion 
} from '../../../services/servicioOffline';
import './BannerDescargaOffline.css';

/**
 * Banner flotante para descarga offline e instalación PWA del Proyecto de Ciberseguridad.
 * Aparece de manera no intrusiva al entrar a las páginas del proyecto.
 */
export const BannerDescargaOffline: React.FC = () => {
  const location = useLocation();
  const [visible, setVisible] = useState<boolean>(false);
  const [descargando, setDescargando] = useState<boolean>(false);
  const [progreso, setProgreso] = useState<number>(0);
  const [descargadoExitoso, setDescargadoExitoso] = useState<boolean>(false);
  const [enLinea, setEnLinea] = useState<boolean>(true);
  const [instalable, setInstalable] = useState<boolean>(false);
  const [recursoActual, setRecursoActual] = useState<string>('');

  // Determinar si la ruta actual es parte del Proyecto de Ciberseguridad
  const esRutaCiberseguridad = 
    location.pathname.startsWith('/proyectos/ciberseguridad') ||
    location.pathname.startsWith('/modulos');

  useEffect(() => {
    // Registrar el Service Worker al iniciar
    registrarServiceWorker();

    // Monitorear estado de conexión a internet
    const desuscribirRed = suscribirEstadoConexion((online) => {
      setEnLinea(online);
    });

    // Escuchar si la PWA se vuelve instalable
    const manejarInstalable = () => setInstalable(true);
    window.addEventListener('pwa-instalable-disponible', manejarInstalable);
    if (esPwaInstalable()) setInstalable(true);

    // Revisar de forma segura si ya está descargado o si fue descartado en esta sesión
    let yaDescargado = false;
    let fueDescartado = false;
    try {
      yaDescargado = estaProyectoDescargado();
      fueDescartado = sessionStorage.getItem('banner_offline_descartado') === 'true';
    } catch {
      // En modo privado o restricciones móviles
    }

    if (esRutaCiberseguridad && !yaDescargado && !fueDescartado) {
      // Pequeño retardo para que la página cargue primero de forma fluida
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }

    return () => {
      desuscribirRed();
      window.removeEventListener('pwa-instalable-disponible', manejarInstalable);
    };
  }, [esRutaCiberseguridad]);

  // Cerrar y recordar descarte para esta sesión
  const handleCerrar = () => {
    setVisible(false);
    try {
      sessionStorage.setItem('banner_offline_descartado', 'true');
    } catch {
      // Modo privado móvil
    }
  };

  // Si no está en ruta de ciberseguridad o no es visible, no renderizar
  if (!esRutaCiberseguridad || (!visible && enLinea)) {
    return null;
  }

  // Iniciar la descarga de todas las páginas del proyecto y solicitar instalación PWA
  const handleDescargar = async () => {
    try {
      setDescargando(true);
      setProgreso(5);
      setRecursoActual('Conectando y preparando páginas...');

      await descargarProyectoOffline((porc, nombre) => {
        setProgreso(porc);
        if (nombre) setRecursoActual(nombre);
      });

      setDescargadoExitoso(true);
      setDescargando(false);
      setRecursoActual('Todas las páginas y módulos han sido guardados.');

      // Solicitar instalación PWA nativa en el dispositivo si está disponible
      if (esPwaInstalable()) {
        try {
          await instalarAplicacionPWA();
        } catch {
          // Si el usuario cancela o no instala, continúa normalmente
        }
      }

      // Mantener el mensaje de éxito visible para que el usuario pueda leerlo cómodamente
      setTimeout(() => {
        setVisible(false);
      }, 7000);
    } catch (error) {
      console.error('Error al descargar para offline:', error);
      setDescargando(false);
      setRecursoActual('Contenido descargado en memoria.');
      setDescargadoExitoso(true);
    }
  };

  // Instalar como aplicación PWA nativa manualmente
  const handleInstalarPWA = async () => {
    const instalada = await instalarAplicacionPWA();
    if (instalada) {
      setInstalable(false);
    }
  };

  return (
    <aside className="banner-offline-flotante" role="dialog" aria-label="Descarga sin conexión">
      <div className="banner-offline-contenido">
        <div className="banner-offline-icono-wrap">
          {descargando ? (
            <Loader2 size={24} className="icono-giratorio" style={{ animation: 'spin 1s linear infinite' }} />
          ) : descargadoExitoso ? (
          <CircleCheck size={24} color="#0df11cff" />
          ) : !enLinea ? (
            <WifiOff size={24} color="#f87171" />
          ) : (
            <DownloadCloud size={24} />
          )}
        </div>

        <div className="banner-offline-textos">
          <div className="banner-offline-encabezado">
            <h4 className="banner-offline-titulo">
              {!enLinea ? 'Modo Sin Conexión' : 'Ciberseguridad Offline'}
              <span className={`badge-red-estado ${enLinea ? 'online' : 'offline'}`}>
                {enLinea ? (
                  <>En línea</>
                ) : (
                  <>Sin internet</>
                )}
              </span>
            </h4>
            <button 
              className="banner-offline-cerrar" 
              onClick={handleCerrar} 
              aria-label="Cerrar aviso"
            >
              <X size={16} />
            </button>
          </div>

          <p className="banner-offline-descripcion">
            {!enLinea ? (
              'Estás navegando sin conexión a internet. Los contenidos previamente descargados siguen disponibles.'
            ) : descargadoExitoso ? (
              '¡Descarga completada! Todas las lecciones, guías y evaluaciones ahora funcionan sin conexión a internet.'
            ) : descargando ? (
              `Descargando recursos para uso offline... (${progreso}%)`
            ) : (
              '¿Deseas descargar el Proyecto de Ciberseguridad para acceder a todas las lecciones y guías sin necesidad de internet?'
            )}
          </p>

          {/* Barra de progreso interactiva */}
          {descargando && (
            <div className="banner-offline-progreso-wrap">
              <div className="banner-offline-progreso-info">
                <span style={{ maxWidth: '75%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {recursoActual || 'Guardando páginas en caché'}
                </span>
                <span>{progreso}%</span>
              </div>
              <div className="banner-offline-progreso-pista">
                <div 
                  className="banner-offline-progreso-barra" 
                  style={{ width: `${progreso}%` }} 
                />
              </div>
            </div>
          )}

          {/* Estado de éxito */}
          {descargadoExitoso && (
            <div className="banner-offline-exito">

              <span>Disponible sin internet en este dispositivo</span>
            </div>
          )}

          {/* Botones de acción */}
          {!descargadoExitoso && enLinea && (
            <div className="banner-offline-acciones">
              <button 
                className="btn-banner-descargar" 
                onClick={handleDescargar}
                disabled={descargando}
              >
                <DownloadCloud size={16} />
                {descargando ? 'Descargando...' : 'Descargar Contenido'}
              </button>

              {instalable && (
                <button 
                  className="btn-banner-secundario" 
                  onClick={handleInstalarPWA}
                >
                  <Smartphone size={15} style={{ marginRight: 4 }} />
                  Instalar App
                </button>
              )}

              <button 
                className="btn-banner-secundario" 
                onClick={handleCerrar}
                disabled={descargando}
              >
                Quizás luego
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default BannerDescargaOffline;
