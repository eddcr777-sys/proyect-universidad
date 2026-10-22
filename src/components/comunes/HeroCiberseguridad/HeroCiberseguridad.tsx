import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Lock, Sparkles, Terminal } from 'lucide-react';
import imgHeroPredeterminado from '../../../assets/photo_2_2026-10-21_23-11-48.jpg';
import './HeroCiberseguridad.css';

/** Interfaz para acciones/botones del Hero */
export interface AccionHeroCiber {
  label: string;
  ruta?: string;
  href?: string;
  icono?: React.ReactNode;
}

/** Interfaz para enlaces de la sub-navegación del proyecto */
export interface EnlaceSubNavegacionCiber {
  label: string;
  ruta: string;
  icono?: React.ReactNode;
}

/** Propiedades del componente HeroCiberseguridad */
export interface HeroCiberseguridadProps {
  titulo?: string;
  tituloResaltado?: string;
  categoria?: string;
  subtitulo?: string;
  descripcion?: string | React.ReactNode;
  imagenFondo?: string;
  enlacesSubNav?: EnlaceSubNavegacionCiber[];
  acciones?: AccionHeroCiber[] | React.ReactNode;
  children?: React.ReactNode;
  variante?: 'pantalla-completa' | 'compacto' | 'normal';
}

/**
 * Componente Hero de Ciberseguridad.
 * Diseñado específicamente para todas las páginas del módulo de ciberseguridad.
 * Ofrece una estética visual de alto impacto con acentos cibernéticos, tipografía moderna,
 * capas glassmorphism, insignia tech y barra de sub-navegación integrada.
 */
const HeroCiberseguridad: React.FC<HeroCiberseguridadProps> = ({
  titulo,
  tituloResaltado,
  categoria = 'CIBERSEGURIDAD & CONCIENCIA DIGITAL',
  subtitulo,
  descripcion,
  imagenFondo = imgHeroPredeterminado,
  enlacesSubNav = [],
  acciones = [],
  children,
  variante = 'normal',
}) => {
  const location = useLocation();

  /** Manejo de desplazamiento suave para enlaces con ancla (#) */
  const manejarClickAncla = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const idElemento = href.substring(1);
      const elemento = document.getElementById(idElemento);
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  /** Formatear o renderizar los botones de acción de manera flexible */
  const renderizarAcciones = () => {
    if (!acciones) return null;

    if (Array.isArray(acciones)) {
      return (
        <div className="hero-ciber-acciones">
          {acciones.map((accion, indice) => {
            if (accion.ruta) {
              return (
                <Link
                  key={indice}
                  to={accion.ruta}
                  className="boton-ciber-principal"
                >
                  <span>{accion.label}</span>
                  {accion.icono}
                </Link>
              );
            }
            if (accion.href) {
              return (
                <a
                  key={indice}
                  href={accion.href}
                  onClick={(e) => manejarClickAncla(e, accion.href!)}
                  className="boton-ciber-secundario"
                >
                  <span>{accion.label}</span>
                  {accion.icono}
                </a>
              );
            }
            return null;
          })}
        </div>
      );
    }

    return <div className="hero-ciber-acciones">{acciones}</div>;
  };

  return (
    <header className={`hero-ciberseguridad-contenedor variante-${variante}`}>
      {/* Sub-Navegación del Proyecto de Ciberseguridad */}
      {enlacesSubNav && enlacesSubNav.length > 0 && (
        <div className="hero-ciber-subnav-contenedor">
          <nav className="hero-ciber-subnav" aria-label="Navegación interna de Ciberseguridad">
            <div className="hero-ciber-subnav-scroll">
              {enlacesSubNav.map((enlace, indice) => {
                const esActivo = location.pathname === enlace.ruta;
                return (
                  <Link
                    key={indice}
                    to={enlace.ruta}
                    className={`item-subnav-ciber ${esActivo ? 'subnav-activo' : ''}`}
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

      {/* Cuerpo Principal del Hero */}
      <div
        className="hero-ciber-portada"
        style={{ backgroundImage: `url(${imagenFondo})` }}
      >
        {/* Capa de Superposición Institucional */}
        <div className="hero-ciber-capa-overlay" />

        <div className="hero-ciber-contenido">
          {/* Título Principal */}
          {titulo && (
            <h1 className="hero-ciber-titulo">
              {titulo}{' '}
              {tituloResaltado && (
                <span className="texto-resaltado-ciber">{tituloResaltado}</span>
              )}
            </h1>
          )}

          {/* Subtítulo si aplica */}
          {subtitulo && <div className="hero-ciber-subtitulo">{subtitulo}</div>}

          {/* Descripción */}
          {descripcion && (
            <div className="hero-ciber-descripcion">{descripcion}</div>
          )}

          {/* Botones de Acción */}
          {renderizarAcciones()}

          {/* Elementos Adicionales / Hijos */}
          {children && <div className="hero-ciber-extra">{children}</div>}
        </div>
      </div>
    </header>
  );
};

export default HeroCiberseguridad;
