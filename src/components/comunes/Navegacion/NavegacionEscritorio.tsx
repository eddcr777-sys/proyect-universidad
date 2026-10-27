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

const SubChevron = () => (
  <svg 
    className="sub-chevron" 
    width="12" 
    height="12" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

/**
 * Componente de navegación de escritorio idéntico al estándar de Colegio Los Arcos:
 * - Mayúsculas sans-serif limpias
 * - Enlaces directos a las secciones de la página unificada institucional (/el-liceo#seccion)
 */
const NavegacionEscritorio: React.FC<NavegacionEscritorioProps> = ({ esTransparente = false }) => {
  return (
    <nav className={`nav-desktop ${esTransparente ? 'nav-transparente' : 'nav-solida'}`} aria-label="Navegación principal">
      <Link to="/" className="nav-link">Inicio</Link>

      {/* ── EL COMPLEJO (Capturas Los Arcos) ── */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          El Complejo <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/el-liceo#quienes-somos" className="dropdown-item">
            ¿Quiénes somos?
          </Link>
          <Link to="/el-liceo#conoce-el-complejo" className="dropdown-item">
            Conoce el liceo
          </Link>
          <Link to="/el-liceo#mision-vision" className="dropdown-item">
            Misión / Visión
          </Link>

          {/* Submenú Estudios */}
          <div className="dropdown-item-con-sub">
            <Link to="/el-liceo#estudios" className="dropdown-item">
              <span>Estudios</span>
              <SubChevron />
            </Link>
            <div className="submenu-flotante">
              <Link to="/el-liceo#estudios" className="dropdown-item">
                Educación Media General
              </Link>
              <Link to="/el-liceo#estudios" className="dropdown-item">
                1er a 3er Año (Ciclo Básico)
              </Link>
              <Link to="/el-liceo#estudios" className="dropdown-item">
                4to y 5to Año (Ciencias)
              </Link>
            </div>
          </div>

          <Link to="/el-liceo#historia" className="dropdown-item">
            Historia
          </Link>

          {/* Submenú Manual de convivencia */}
          <div className="dropdown-item-con-sub">
            <Link to="/el-liceo#manual-convivencia" className="dropdown-item">
              <span>Manual de convivencia</span>
              <SubChevron />
            </Link>
            <div className="submenu-flotante">
              <Link to="/el-liceo#manual-convivencia" className="dropdown-item">
                Normas de Convivencia
              </Link>
              <Link to="/el-liceo#manual-convivencia" className="dropdown-item">
                Horarios y Uniformes
              </Link>
              <Link to="/el-liceo#manual-convivencia" className="dropdown-item">
                Deberes y Derechos
              </Link>
            </div>
          </div>

          <Link to="/el-liceo#razones" className="dropdown-item">
            Razones de Excelencia
          </Link>
          <Link to="/el-liceo#vida-estudiantil" className="dropdown-item">
            Vida Estudiantil y Clubes
          </Link>
          <Link to="/el-liceo#instalaciones" className="dropdown-item">
            Instalaciones
          </Link>
        </div>
      </div>

      {/* ── ADMISIÓN ── */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Admisión <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/admision/requisitos" className="dropdown-item">
            Proceso de admisión
          </Link>
      
        </div>
      </div>

      {/* ── PROYECTOS ── */}
      <div className="dropdown">
        <button className="dropbtn" aria-expanded="false" aria-haspopup="true">
          Proyectos <ChevronIcon />
        </button>
        <div className="dropdown-content">
          <Link to="/proyectos/ciberseguridad" className="dropdown-item">
            Ciberseguridad y Convivencia Digital
          </Link>
        </div>
      </div>

      {/* ── GALERÍA ── */}
      <Link to="/galeria" className="nav-link">Galería</Link>
    </nav>
  );
};

export default NavegacionEscritorio;