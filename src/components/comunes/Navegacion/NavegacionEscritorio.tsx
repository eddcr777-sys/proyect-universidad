import React from 'react';
import { Link } from 'react-router-dom';
import './NavegacionEscritorio.css';

interface NavegacionEscritorioProps {
  esTransparente?: boolean;
}

const ChevronIcon = () => (
  <svg 
    className="chevron-icon" 
    width="12" 
    height="12" 
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

/**
 * Componente de navegación de escritorio.
 * Adapta sus estilos si se encuentra sobre una cabecera transparente o sólida.
 */
const NavegacionEscritorio: React.FC<NavegacionEscritorioProps> = ({ esTransparente = false }) => {
  return (
    <nav className={`nav-desktop ${esTransparente ? 'nav-transparente' : 'nav-solida'}`} aria-label="Navegación principal">
      <Link to="/" className="nav-link">Inicio</Link>
      
      {/* Galerías */}
      <Link to="/galeria" className="nav-link">Galerías</Link>

      {/* El Liceo */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          El Liceo <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/el-liceo/historia" className="dropdown-item">Historia</Link>
          <Link to="/el-liceo/mision" className="dropdown-item">Misión</Link>
          <Link to="/el-liceo/vision" className="dropdown-item">Visión</Link>
          <Link to="/el-liceo/valores" className="dropdown-item">Valores</Link>
          <Link to="/proyectos/ciberseguridad/nosotros/sobre-ue#Directivos" className="dropdown-item">Directivos</Link>
          <Link to="/el-liceo/simbolos" className="dropdown-item">Símbolos</Link>
          <Link to="/el-liceo/normas" className="dropdown-item">Normas de Convivencia</Link>
          <Link to="/galeria#instalaciones" className="dropdown-item">Instalaciones</Link>
        </div>
      </div>

      {/* Admisión */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Admisión <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/admision/requisitos" className="dropdown-item">Requisitos</Link>
        </div>
      </div>


      {/* Nosotros */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Nosotros <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/proyectos/ciberseguridad/nosotros/sobre-ue" className="dropdown-item">Sobre la U.E.</Link>

        </div>
      </div>

      {/* Proyectos */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Proyectos <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/proyectos/ciberseguridad" className="dropdown-item">Ciberseguridad</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavegacionEscritorio;