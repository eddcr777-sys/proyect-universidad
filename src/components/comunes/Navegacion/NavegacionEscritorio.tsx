import React from 'react';
import { Link } from 'react-router-dom';
import './NavegacionEscritorio.css';

// SVG simple para la flechita desplegable (Chevron)
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

const NavegacionEscritorio: React.FC = () => {
  return (
    <nav className="nav-desktop" aria-label="Navegación principal">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/justificacion" className="nav-link">Justificación</Link>

      {/* Acceder / Registro */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Acceder <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/Indices" className="dropdown-item">Centro de Acceso Virtual</Link>
          <Link to="/justificacion#registro-estudiante" className="dropdown-item">Registro de Estudiante por Grado</Link>
        </div>
      </div>

      {/* Módulos */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Módulos <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/presentacion/1ro" className="dropdown-item">Presentación por Grado</Link>
          <Link to="/modulos/phishing" className="dropdown-item">Phishing e Ingeniería Social</Link>
          <Link to="/modulos/auditorias" className="dropdown-item">Auditoría e Higiene Digital</Link>
          <Link to="/modulos/proteccion-cuentas" className="dropdown-item">Protección de Cuentas</Link>
          <Link to="/modulos/redes-sociales" className="dropdown-item">Redes Sociales</Link>
          <Link to="/modulos/videojuegos" className="dropdown-item">Videojuegos Seguros</Link>
          <Link to="/modulos/software-pirata" className="dropdown-item">Riesgos de Software Pirata</Link>
        </div>
      </div>

      {/* Guías */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Guías <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/guias/docentes" className="dropdown-item">Guía para Docentes</Link>
          <Link to="/guias/padres" className="dropdown-item">Guía para Padres</Link>
        </div>
      </div>

      {/* Nosotros */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Nosotros <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/nosotros/sobre-ue" className="dropdown-item">Sobre la U.E.</Link>
          <Link to="/nosotros/sobre-devs" className="dropdown-item">Sobre los Desarrolladores</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavegacionEscritorio;