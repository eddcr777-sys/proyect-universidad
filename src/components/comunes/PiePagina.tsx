import React from 'react';
import { Link } from 'react-router-dom';
import './PiePagina.css';

/**
 * Componente de Pie de Página (Footer) idéntico a la referencia de Colegio Los Arcos:
 * - Fondo azul marino profundo (#051833)
 * - 4 columnas verticales separadas por líneas sutiles
 * - Enlaces directos a las anclas de la página unificada
 * - Íconos circulares de redes sociales
 */
const PiePagina: React.FC = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="losarcos-footer">
      <div className="losarcos-footer-contenedor">
        {/* COLUMNA 1: LOGO, EMBLEMA Y COPYRIGHT */}
        <div className="losarcos-columna losarcos-columna-logo">
          <div className="losarcos-logo-caja">
            <h3 className="losarcos-nombre-liceo">
              Complejo Educativo<br />
              Antonio Lemus Pérez
            </h3>
          </div>
          <p className="losarcos-copyright">
            Copyright ©{anioActual}<br />
            C.E. Antonio Lemus Pérez. Todos los derechos reservados.
          </p>
        </div>

        {/* COLUMNA 2: EL COMPLEJO (ANCLAS DE LA PÁGINA UNIFICADA) */}
        <div className="losarcos-columna">
          <h4 className="losarcos-columna-titulo">El complejo</h4>
          <ul className="losarcos-lista-enlaces">
            <li><Link to="/el-liceo#quienes-somos">¿Quiénes somos?</Link></li>
            <li><Link to="/el-liceo#conoce-el-complejo">Conoce el liceo</Link></li>
            <li><Link to="/el-liceo#mision-vision">Misión / Visión</Link></li>
            <li><Link to="/el-liceo#estudios">Estudios y Niveles</Link></li>
            <li><Link to="/el-liceo#razones">Razones de Excelencia</Link></li>
            <li><Link to="/el-liceo#historia">Historia</Link></li>
            <li><Link to="/el-liceo#vida-estudiantil">Vida Estudiantil y Clubes</Link></li>
            <li><Link to="/el-liceo#instalaciones">Instalaciones</Link></li>
            <li><Link to="/el-liceo#manual-convivencia">Manual de convivencia</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: ADMISIÓN Y PROYECTOS */}
        <div className="losarcos-columna">
          <h4 className="losarcos-columna-titulo">Admisión</h4>
          <ul className="losarcos-lista-enlaces">
            <li><Link to="/admision/requisitos">Proceso de admisión</Link></li>
           
          </ul>

          <h4 className="losarcos-columna-titulo" style={{ marginTop: '28px' }}>
            Proyectos
          </h4>
          <ul className="losarcos-lista-enlaces">
            <li><Link to="/proyectos/ciberseguridad">Ciberseguridad y Convivencia</Link></li>
            <li><Link to="/proyectos/ciberseguridad/modulos">Catálogo por Grado</Link></li>
          </ul>
        </div>

        {/* COLUMNA 4: OTROS Y REDES SOCIALES */}
        <div className="losarcos-columna losarcos-columna-redes">
          <h4 className="losarcos-columna-titulo">Otros</h4>
          <ul className="losarcos-lista-enlaces">
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/proyectos/ciberseguridad/guias/docentes">Guías Docentes y Padres</Link></li>
            <li><Link to="/indices">Usuario / Portal</Link></li>
          </ul>

          <div className="losarcos-redes-caja">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="red-social-icono" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="red-social-icono" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="red-social-icono" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="red-social-icono" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PiePagina;