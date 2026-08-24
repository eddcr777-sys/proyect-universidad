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

      {/* Proyectos Estudiantiles */}
      <Link to="/proyectos" className="nav-link">Proyectos</Link>


      {/* Nosotros */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Nosotros <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/proyectos/ciberseguridad/nosotros/sobre-ue" className="dropdown-item">Sobre la U.E.</Link>
          <Link to="/proyectos/ciberseguridad/nosotros/sobre-devs" className="dropdown-item">Desarrolladores</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavegacionEscritorio;