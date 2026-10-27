import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Home, Building2, UserPlus, Code2, Image as ImageIcon, X } from 'lucide-react';
import './DrawerMovil.css';

interface Props {
  abierto: boolean;
  cerrar: () => void;
}

const ChevronIcon = ({ abierto }: { abierto: boolean }) => (
  <svg 
    className={`drawer-chevron ${abierto ? 'rotado' : ''}`} 
    width="18" 
    height="18" 
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
    proyectos: false
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
          <div className="drawer-logo-caja">
          
            <div className="drawer-textos-header">
              <span className="drawer-titulo">Antonio Lemus Pérez</span>
              <span className="drawer-subtitulo">Complejo Educativo · Cumaná</span>
            </div>
          </div>
          <button className="btn-cerrar" onClick={cerrar} aria-label="Cerrar menú">
            <X size={20} />
          </button>
        </div>

        <nav className="drawer-body">
          <Link to="/" className="drawer-item-directo" onClick={cerrar}>
            <span className="drawer-item-label">
             
              <span>Inicio</span>
            </span>
          </Link>

          {/* Sección El Liceo / El Complejo */}
          <div className="menu-seccion">
            <button className={`btn-seccion ${secciones.elLiceo ? 'activo' : ''}`} onClick={() => alternarSeccion('elLiceo')}>
              <span className="drawer-item-label">
             
                <span>El Complejo</span>
              </span>
              <ChevronIcon abierto={secciones.elLiceo} />
            </button>
            {secciones.elLiceo && (
              <div className="sub-menu">
                <Link to="/el-liceo#quienes-somos" onClick={cerrar}>¿Quiénes somos?</Link>
                <Link to="/el-liceo#conoce-el-complejo" onClick={cerrar}>Conoce el complejo</Link>
                <Link to="/el-liceo#mision-vision" onClick={cerrar}>Misión y Visión</Link>
                <Link to="/el-liceo#estudios" onClick={cerrar}>Estudios y Niveles</Link>
                <Link to="/el-liceo#historia" onClick={cerrar}>Historia Institucional</Link>
                <Link to="/el-liceo#razones" onClick={cerrar}>Pilares de Excelencia</Link>
                <Link to="/el-liceo#vida-estudiantil" onClick={cerrar}>Vida Estudiantil y Clubes</Link>
                <Link to="/el-liceo#instalaciones" onClick={cerrar}>Instalaciones</Link>
                <Link to="/el-liceo#manual-convivencia" onClick={cerrar}>Manual de Convivencia</Link>
              </div>
            )}
          </div>

          {/* Sección Admisión */}
          <div className="menu-seccion">
            <button className={`btn-seccion ${secciones.admision ? 'activo' : ''}`} onClick={() => alternarSeccion('admision')}>
              <span className="drawer-item-label">
             
                <span>Admisión</span>
              </span>
              <ChevronIcon abierto={secciones.admision} />
            </button>
            {secciones.admision && (
              <div className="sub-menu">
                <Link to="/admision/requisitos" onClick={cerrar}>Proceso de Admisión</Link>
         
              </div>
            )}
          </div>

          {/* Sección Proyectos */}
          <div className="menu-seccion">
            <button className={`btn-seccion ${secciones.proyectos ? 'activo' : ''}`} onClick={() => alternarSeccion('proyectos')}>
              <span className="drawer-item-label">
             
                <span>Proyectos</span>
              </span>
              <ChevronIcon abierto={secciones.proyectos} />
            </button>
            {secciones.proyectos && (
              <div className="sub-menu">
                <Link to="/proyectos/ciberseguridad" onClick={cerrar}>Ciberseguridad Escolar</Link>
                <Link to="/proyectos/ciberseguridad/modulos" onClick={cerrar}>Módulos por Grado</Link>
              </div>
            )}
          </div>

          <Link to="/galeria" className="drawer-item-directo" onClick={cerrar}>
            <span className="drawer-item-label">
             
              <span>Galería de Fotos</span>
            </span>
          </Link>
        </nav>

      
      </aside>
    </>
  );
};

export default DrawerMovil;