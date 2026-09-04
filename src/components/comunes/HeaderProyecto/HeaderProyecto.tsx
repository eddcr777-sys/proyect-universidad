import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgHeroPredeterminado from '../../../assets/pbk-Hero-3.jpg';
import './HeaderProyecto.css';

export interface AccionHero {
  label: string;
  ruta?: string;
  href?: string;
  icono?: React.ReactNode;
}

export interface EnlaceNavegacionProyecto {
  label: string;
  ruta: string;
  icono?: React.ReactNode;
}

export interface HeaderProyectoProps {
  titulo?: string;
  tituloResaltado?: string;
  categoria?: string;
  descripcion?: string | React.ReactNode;
  autores?: string;
  imagenFondo?: string;
  enlacesSubNav?: EnlaceNavegacionProyecto[];
  acciones?: AccionHero[];
  children?: React.ReactNode;
}

/**
 * Componente de encabezado Hero unificado para los proyectos.
 * Incluye la sub-navegación transparente del proyecto y el banner Hero con fondo,
 * superposición oscura, títulos animados y botones de acción.
 */
const HeaderProyecto: React.FC<HeaderProyectoProps> = ({
  titulo,
  tituloResaltado,
  categoria,
  descripcion,
  imagenFondo = imgHeroPredeterminado,
  enlacesSubNav = [],
  acciones = [],
  children,
}) => {
  const location = useLocation();

  const manejarClickAncla = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const elemento = document.getElementById(id);
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="header-proyecto-wrapper">
      {/* Sub-Navegación transparente propia del Proyecto */}
      {enlacesSubNav && enlacesSubNav.length > 0 && (
        <div className="header-proyecto-contenedor">
          <nav className="header-proyecto-subnav" aria-label="Navegación interna del proyecto">
            <div className="contenedor subnav-flex">
              {enlacesSubNav.map((enlace, index) => {
                const esActivo = location.pathname === enlace.ruta;
                return (
                  <Link
                    key={index}
                    to={enlace.ruta}
                    className={`subnav-item ${esActivo ? 'activo' : ''}`}
                  >
                    {enlace.icono}
                    <span>{enlace.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}

      {/* SECCIÓN HERO PORTADA */}
      {(titulo || descripcion || children) && (
        <header
          className="seccion-hero-portada"
          style={{ backgroundImage: `url(${imagenFondo})` }}
        >
          <div className="hero-overlay-oscuro" />

          <div className="contenido-ciber-seccion animacion-entrada hero-zindex">
            {categoria && (
              <span className="badge-categoria-hero">{categoria}</span>
            )}

            {titulo && (
              <h1 className="titulo-ciber-gigante">
                {titulo}{' '}
                {tituloResaltado && (
                  <span className="texto-resaltado-inst">{tituloResaltado}</span>
                )}
              </h1>
            )}

            {descripcion && (
              <div className="descripcion-ciber-destacada">{descripcion}</div>
            )}

            {acciones && acciones.length > 0 && (
              <div className="acciones-ciber-hero">
                {acciones.map((accion, idx) => {
                  if (accion.ruta) {
                    return (
                      <Link
                        key={idx}
                        to={accion.ruta}
                        className="btn-ciber-solido-azul"
                      >
                        <span>{accion.label}</span>
                        {accion.icono}
                      </Link>
                    );
                  }
                  if (accion.href) {
                    return (
                      <a
                        key={idx}
                        href={accion.href}
                        onClick={(e) => manejarClickAncla(e, accion.href!)}
                        className="btn-ciber-solido-azul"
                      >
                        <span>{accion.label}</span>
                        {accion.icono}
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
            )}

            {children}
          </div>
        </header>
      )}
    </div>
  );
};

export default HeaderProyecto;
