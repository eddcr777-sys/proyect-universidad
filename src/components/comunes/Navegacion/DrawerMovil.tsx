import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DrawerMovil.css';

interface Props {
  abierto: boolean;
  cerrar: () => void;
}

const ChevronIcon = ({ abierto }: { abierto: boolean }) => (
  <svg 
    className={`drawer-chevron ${abierto ? 'rotado' : ''}`} 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const DrawerMovil: React.FC<Props> = ({ abierto, cerrar }) => {
  const [secciones, setSecciones] = useState({
    elLiceo: false,
    admision: false,
    ciberseguridad: false,
    guias: false,
    nosotros: false
  });

  const alternarSeccion = (seccion: keyof typeof secciones) => {
    setSecciones(prev => ({ ...prev, [seccion]: !prev[seccion] }));
  };

  return (
    <>
      <div 
        className={`drawer-overlay ${abierto ? 'activo' : ''}`} 
        onClick={cerrar} 
      />

      <aside className={`drawer-panel ${abierto ? 'activo' : ''}`}>
        <div className="drawer-header">
          <span className="drawer-titulo">Navegación Escolar</span>
          <button className="btn-cerrar" onClick={cerrar} aria-label="Cerrar menú">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="drawer-body">
          <Link to="/" className="drawer-item-directo" onClick={cerrar}>
            Inicio
          </Link>

          <Link to="/galeria" className="drawer-item-directo" onClick={cerrar}>
            Galerías
          </Link>

          {/* Sección El Liceo */}
          <div className="menu-seccion">
            <button className={`btn-seccion ${secciones.elLiceo ? 'activo' : ''}`} onClick={() => alternarSeccion('elLiceo')}>
              <span>El Liceo</span>
              <ChevronIcon abierto={secciones.elLiceo} />
            </button>
            {secciones.elLiceo && (
              <div className="sub-menu">
                <Link to="/el-liceo/historia" onClick={cerrar}>Historia</Link>
                <Link to="/el-liceo/mision" onClick={cerrar}>Misión</Link>
                <Link to="/el-liceo/vision" onClick={cerrar}>Visión</Link>
                <Link to="/el-liceo/valores" onClick={cerrar}>Valores</Link>
                <Link to="/proyectos/ciberseguridad/nosotros/sobre-ue#Directivos" onClick={cerrar}>Directivos</Link>
                <Link to="/el-liceo/simbolos" onClick={cerrar}>Símbolos</Link>
                <Link to="/el-liceo/normas" onClick={cerrar}>Normas de Convivencia</Link>
              </div>
            )}
          </div>

          {/* Sección Admisión */}
          <div className="menu-seccion">
            <button className={`btn-seccion ${secciones.admision ? 'activo' : ''}`} onClick={() => alternarSeccion('admision')}>
              <span>Admisión</span>
              <ChevronIcon abierto={secciones.admision} />
            </button>
            {secciones.admision && (
              <div className="sub-menu">
                <Link to="/admision/requisitos" onClick={cerrar}>Requisitos</Link>
              </div>
            )}
          </div>

          {/* Sección Proyectos */}
          <Link to="/proyectos" className="drawer-item-directo" onClick={cerrar}>
            Proyectos Estudiantiles
          </Link>

          {/* Sección Ciberseguridad */}
          <div className="menu-seccion">
            <button className={`btn-seccion ${secciones.ciberseguridad ? 'activo' : ''}`} onClick={() => alternarSeccion('ciberseguridad')}>
              <span>Ciberseguridad</span>
              <ChevronIcon abierto={secciones.ciberseguridad} />
            </button>
            {secciones.ciberseguridad && (
              <div className="sub-menu">
                <Link to="/proyectos/ciberseguridad" onClick={cerrar}>Catálogo por Grado</Link>
                <Link to="/proyectos/ciberseguridad/justificacion" onClick={cerrar}>Justificación</Link>
                <Link to="/proyectos/ciberseguridad/indices" onClick={cerrar}>Acceso e Índices</Link>
              </div>
            )}
          </div>

          {/* Sección Guías */}
          <div className="menu-seccion">
            <button className={`btn-seccion ${secciones.guias ? 'activo' : ''}`} onClick={() => alternarSeccion('guias')}>
              <span>Guías</span>
              <ChevronIcon abierto={secciones.guias} />
            </button>
            {secciones.guias && (
              <div className="sub-menu">
                <Link to="/proyectos/ciberseguridad/guias/docentes" onClick={cerrar}>Guía para Docentes</Link>
                <Link to="/proyectos/ciberseguridad/guias/padres" onClick={cerrar}>Guía para Padres</Link>
              </div>
            )}
          </div>

          {/* Sección Nosotros */}
          <div className="menu-seccion">
            <button className={`btn-seccion ${secciones.nosotros ? 'activo' : ''}`} onClick={() => alternarSeccion('nosotros')}>
              <span>Nosotros</span>
              <ChevronIcon abierto={secciones.nosotros} />
            </button>
            {secciones.nosotros && (
              <div className="sub-menu">
                <Link to="/proyectos/ciberseguridad/nosotros/sobre-ue" onClick={cerrar}>Sobre la U.E.</Link>
                <Link to="/proyectos/ciberseguridad/nosotros/sobre-devs" onClick={cerrar}>Desarrolladores</Link>
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default DrawerMovil;