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

          <Link to="/justificacion" className="drawer-item-directo" onClick={cerrar}>
            Justificación
          </Link>

          <Link to="/Indices" className="drawer-item-directo" onClick={cerrar}>
            Centro de Acceso
          </Link>

          {/* Sección Módulos */}
          <div className="menu-seccion">
            <button className={`btn-seccion ${secciones.modulos ? 'activo' : ''}`} onClick={() => alternarSeccion('modulos')}>
              <span>Módulos</span>
              <ChevronIcon abierto={secciones.modulos} />
            </button>
            {secciones.modulos && (
              <div className="sub-menu">
                <Link to="/presentacion/1ro" onClick={cerrar}>Presentación por Grado</Link>
                <Link to="/modulos/phishing" onClick={cerrar}>Phishing e Ingeniería Social</Link>
                <Link to="/modulos/auditorias" onClick={cerrar}>Auditoría e Higiene Digital</Link>
                <Link to="/modulos/proteccion-cuentas" onClick={cerrar}>Protección de Cuentas</Link>
                <Link to="/modulos/redes-sociales" onClick={cerrar}>Redes Sociales</Link>
                <Link to="/modulos/videojuegos" onClick={cerrar}>Videojuegos Seguros</Link>
                <Link to="/modulos/software-pirata" onClick={cerrar}>Software Pirata</Link>
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
                <Link to="/guias/docentes" onClick={cerrar}>Guía para Docentes</Link>
                <Link to="/guias/padres" onClick={cerrar}>Guía para Padres</Link>
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