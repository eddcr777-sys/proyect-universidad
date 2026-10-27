import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './CabeceraCiberseguridad.css';

/**
 * Cabecera propia de Ciberseguridad basada en la referencia del usuario.
 * Diseño blanco editorial con altura cómoda, pestañas de texto puro sin iconos,
 * indicador verde activo en el borde inferior y referencia formal al C.E. Antonio Lemus Pérez.
 */
const CabeceraCiberseguridad: React.FC = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  const cerrarMenu = () => setMenuAbierto(false);
  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const enlacesNavegacion = [
    { label: 'Inicio Proyecto', ruta: '/proyectos/ciberseguridad' },
    { label: 'Catálogo por Grado', ruta: '/proyectos/ciberseguridad/modulos' },
    { label: 'Justificación', ruta: '/proyectos/ciberseguridad/justificacion' },
    { label: 'Índices y Temario', ruta: '/proyectos/ciberseguridad/indices' },
    { label: 'Guía Docentes', ruta: '/proyectos/ciberseguridad/guias/docentes' },
    { label: 'Guía Padres', ruta: '/proyectos/ciberseguridad/guias/padres' },
    { label: 'Desarrolladores', ruta: '/proyectos/ciberseguridad/nosotros/sobre-devs' },
  ];

  const esActivo = (ruta: string) => {
    const rutaActual = location.pathname.toLowerCase();
    if (ruta === '/proyectos/ciberseguridad') {
      return rutaActual === '/proyectos/ciberseguridad' || rutaActual === '/proyectos/ciberseguridad/';
    }
    if (ruta === '/proyectos/ciberseguridad/modulos') {
      return (
        rutaActual.startsWith('/proyectos/ciberseguridad/modulos') ||
        rutaActual.startsWith('/proyectos/ciberseguridad/grado') ||
        rutaActual.startsWith('/modulos')
      );
    }
    if (ruta === '/proyectos/ciberseguridad/justificacion') {
      return (
        rutaActual.startsWith('/proyectos/ciberseguridad/justificacion') ||
        rutaActual.startsWith('/justificacion')
      );
    }
    if (ruta === '/proyectos/ciberseguridad/indices') {
      return (
        rutaActual.startsWith('/proyectos/ciberseguridad/indices') ||
        rutaActual.startsWith('/indices')
      );
    }
    if (ruta === '/proyectos/ciberseguridad/guias/docentes') {
      return (
        rutaActual.startsWith('/proyectos/ciberseguridad/guias/docentes') ||
        rutaActual.startsWith('/guias/docentes')
      );
    }
    if (ruta === '/proyectos/ciberseguridad/guias/padres') {
      return (
        rutaActual.startsWith('/proyectos/ciberseguridad/guias/padres') ||
        rutaActual.startsWith('/guias/padres')
      );
    }
    if (ruta === '/proyectos/ciberseguridad/nosotros/sobre-devs') {
      return (
        rutaActual.startsWith('/proyectos/ciberseguridad/nosotros/sobre-devs') ||
        rutaActual.startsWith('/nosotros/sobre-devs')
      );
    }
    return rutaActual.startsWith(ruta.toLowerCase());
  };

  return (
    <header className="cabecera-ciberseguridad" aria-label="Navegación del Proyecto de Ciberseguridad">
      <div className="cabecera-ciber-contenedor">
        {/* Referencia Institucional al Liceo + Nombre de la Plataforma */}
        <Link to="/proyectos/ciberseguridad" className="cabecera-ciber-identidad" onClick={cerrarMenu}>
          <div className="cabecera-ciber-textos">
            <span className="cabecera-ciber-liceo-ref">C.E. ANTONIO LEMUS PÉREZ</span>
            <span className="cabecera-ciber-nombre-proyecto">Ciberseguridad Educativa</span>
          </div>
        </Link>

        {/* Pestañas de Navegación de Escritorio (Estilo Fortinet con indicador inferior) */}
        <nav className="cabecera-ciber-nav-escritorio" aria-label="Navegación principal de ciberseguridad">
          <ul className="cabecera-ciber-lista-links">
            {enlacesNavegacion.map((enlace) => (
              <li key={enlace.ruta} className="cabecera-ciber-item">
                <Link
                  to={enlace.ruta}
                  className={`cabecera-ciber-link ${esActivo(enlace.ruta) ? 'activo' : ''}`}
                >
                  {enlace.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Acciones Extremo Derecho: Retorno al Liceo y Menú Móvil */}
        <div className="cabecera-ciber-acciones-derecha">
          <Link
            to="/el-liceo"
            className="cabecera-ciber-btn-institucional"
            title="Ir a la página institucional del Complejo Educativo"
          >
            <span>Ir al Liceo</span>
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            className="cabecera-ciber-boton-hamburguesa"
            onClick={toggleMenu}
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {menuAbierto && (
        <div className="cabecera-ciber-menu-movil">
          <nav className="cabecera-ciber-nav-movil">
            <ul className="cabecera-ciber-lista-movil">
              {enlacesNavegacion.map((enlace) => (
                <li key={enlace.ruta}>
                  <Link
                    to={enlace.ruta}
                    onClick={cerrarMenu}
                    className={`cabecera-ciber-link-movil ${esActivo(enlace.ruta) ? 'activo' : ''}`}
                  >
                    {enlace.label}
                  </Link>
                </li>
              ))}
              <li className="cabecera-ciber-separador-movil" />
              <li>
                <Link
                  to="/el-liceo"
                  onClick={cerrarMenu}
                  className="cabecera-ciber-link-movil enlace-destacado-liceo"
                >
                  <span>Portal del Liceo</span>
                  <ArrowUpRight size={15} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default CabeceraCiberseguridad;
