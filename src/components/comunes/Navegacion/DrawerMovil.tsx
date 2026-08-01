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
    modulos: false,
    guias: false,
    nosotros: false
  });

  const alternarSeccion = (seccion: keyof typeof secciones) => {
    setSecciones(prev => ({ ...prev, [seccion]: !prev[seccion] }));
  };

  return (
    <>
      {/* Fondo oscuro traslúcido para cerrar al hacer clic afuera */}
      <div 
        className={`drawer-overlay ${abierto ? 'activo' : ''}`} 
        onClick={cerrar} 
      />

      {/* Menú lateral que se desliza desde la derecha */}
      <aside className={`drawer-panel ${abierto ? 'activo' : ''}`}>
        <div className="drawer-header">
          <span className="drawer-titulo">Navegación</span>
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

          <Link to="/Indices" className="drawer-item-directo" onClick={cerrar}>
            Acceder
          </Link>

          {/* Sección Módulos */}
          <div className="menu-seccion">
            <button className={`btn-seccion ${secciones.modulos ? 'activo' : ''}`} onClick={() => alternarSeccion('modulos')}>
              <span>Módulos</span>
              <ChevronIcon abierto={secciones.modulos} />
            </button>
            {secciones.modulos && (
              <div className="sub-menu">
                <Link to="/modulos/auditorias" onClick={cerrar}>Auditorías</Link>
                <Link to="/modulos/phishing" onClick={cerrar}>Phishing</Link>
                <Link to="/modulos/manual-completo" onClick={cerrar}>Manual completo</Link>
                <Link to="/modulos/guia-defensa" onClick={cerrar}>Guía de defensa</Link>
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
                <Link to="/guias/docentes" onClick={cerrar}>Docentes</Link>
                <Link to="/guias/padres" onClick={cerrar}>Padres</Link>
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
                <Link to="/nosotros/sobre-ue" onClick={cerrar}>Sobre la U.E.</Link>
                <Link to="/nosotros/sobre-devs" onClick={cerrar}>Sobre los Desarrolladores</Link>
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default DrawerMovil;