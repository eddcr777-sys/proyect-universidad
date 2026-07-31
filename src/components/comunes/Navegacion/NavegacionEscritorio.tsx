import React from 'react';
import { Link } from 'react-router-dom';
import './NavegacionEscritorio.css';

const NavegacionEscritorio: React.FC = () => {
  return (
    <nav className="nav-desktop" aria-label="Navegación principal">
      <Link to="/" className="nav-link">Inicio</Link>

      {/* Acceder */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Acceder
        </button>
        <div className="dropdown-content">
          <Link to="/Indices" className="dropdown-item">Indices</Link>
        </div>
      </div>

      {/* Módulos */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Módulos
        </button>
        <div className="dropdown-content">
          <Link to="/modulos/auditorias" className="dropdown-item">Auditorías</Link>
          <Link to="/modulos/phishing" className="dropdown-item">Phishing</Link>
          <Link to="/modulos/manual-completo" className="dropdown-item">Manual completo</Link>
          <Link to="/modulos/guia-defensa" className="dropdown-item">Guía de defensa</Link>
        </div>
      </div>

      {/* Guías */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Guías
        </button>
        <div className="dropdown-content">
          <Link to="/guias/docentes" className="dropdown-item">Docentes</Link>
          <Link to="/guias/padres" className="dropdown-item">Padres</Link>
        </div>
      </div>

      {/* Nosotros */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Nosotros
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