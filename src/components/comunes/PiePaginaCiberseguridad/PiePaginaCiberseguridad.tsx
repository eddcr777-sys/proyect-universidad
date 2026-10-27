import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight, BookOpen, Layers, Users, ExternalLink } from 'lucide-react';
import './PiePaginaCiberseguridad.css';

/**
 * Pie de página propio y exclusivo del Proyecto de Ciberseguridad.
 * Diseño editorial sobrio (Fortinet / Cloudflare), con referencias al Liceo y UPTOS CR,
 * enlaces a módulos por grado, documentación y rutas para retornar al portal institucional.
 */
const PiePaginaCiberseguridad: React.FC = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="pie-ciberseguridad" aria-label="Pie de página de Ciberseguridad">
      <div className="pie-ciber-contenedor">
        {/* COLUMNA 1: IDENTIDAD & COOPERACIÓN */}
        <div className="pie-ciber-columna pie-ciber-columna-marca">
          <div className="pie-ciber-marca-box">
        
            <div>
              <span className="pie-ciber-institucion">Complejo Educativo Antonio Lemus Pérez</span>
              <h3 className="pie-ciber-titulo-proyecto">Proyecto de Ciberseguridad</h3>
            </div>
          </div>
          <p className="pie-ciber-descripcion">
            Iniciativa sociotecnológica orientada a la concienciación, prevención y mitigación
            de riesgos informáticos en la comunidad educativa del Estado Sucre, desarrollada
            en cooperación con estudiantes de la UPTOS "Clodosbaldo Russián".
          </p>
          
        </div>

        {/* COLUMNA 2: FORMACIÓN POR AÑO ESCOLAR */}
        <div className="pie-ciber-columna">
          <h4 className="pie-ciber-columna-titulo">Catálogo por Grado</h4>
          <ul className="pie-ciber-lista-enlaces">
            <li><Link to="/proyectos/ciberseguridad/grado/1ro">1ro Año — Higiene Digital</Link></li>
            <li><Link to="/proyectos/ciberseguridad/grado/2do">2do Año — Phishing y Estafas</Link></li>
            <li><Link to="/proyectos/ciberseguridad/grado/3ro">3ro Año — Privacidad y Redes</Link></li>
            <li><Link to="/proyectos/ciberseguridad/grado/4to">4to Año — Seguridad en Redes</Link></li>
            <li><Link to="/proyectos/ciberseguridad/grado/5to">5to Año — Defensa Experta</Link></li>
            <li><Link to="/proyectos/ciberseguridad/modulos">Ver Catálogo Completo</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: RECURSOS Y DOCUMENTACIÓN */}
        <div className="pie-ciber-columna">
          <h4 className="pie-ciber-columna-titulo">Recursos Académicos</h4>
          <ul className="pie-ciber-lista-enlaces">
            <li><Link to="/proyectos/ciberseguridad/indices">Temario e Índices de Estudio</Link></li>
            <li><Link to="/proyectos/ciberseguridad/justificacion">Justificación del Proyecto</Link></li>
            <li><Link to="/proyectos/ciberseguridad/guias/docentes">Guía Metodológica Docentes</Link></li>
            <li><Link to="/proyectos/ciberseguridad/guias/padres">Manual Práctico para Padres</Link></li>
            <li><Link to="/proyectos/ciberseguridad/nosotros/sobre-devs">Equipo de Desarrolladores</Link></li>
          </ul>
        </div>

        {/* COLUMNA 4: CONEXIÓN INSTITUCIONAL CON EL LICEO */}
        <div className="pie-ciber-columna pie-ciber-columna-institucional">
          <h4 className="pie-ciber-columna-titulo">Portal Institucional</h4>
          <p className="pie-ciber-subtexto-inst">
            Accede a la información general, historia, normas e inscripciones del liceo.
          </p>
          <ul className="pie-ciber-lista-enlaces">
            <li>
              <Link to="/el-liceo" className="pie-ciber-link-liceo">
                <span>Conoce el C.E. Antonio Lemus Pérez</span>
                <ArrowUpRight size={14} />
              </Link>
            </li>
            <li><Link to="/el-liceo#historia">Historia y Misión</Link></li>
            <li><Link to="/admision/requisitos">Admisión y Requisitos</Link></li>
            <li><Link to="/galeria">Galería Institucional</Link></li>
          </ul>
        </div>
      </div>

      {/* BARRA INFERIOR DE COPYRIGHT */}
      <div className="pie-ciber-barra-inferior">
        <div className="pie-ciber-barra-contenido">
          <p className="pie-ciber-copyright-texto">
            © {anioActual} Complejo Educativo "Antonio Lemus Pérez" & UPTOS "Clodosbaldo Russián". Cumaná, Estado Sucre, Venezuela.
          </p>
          <div className="pie-ciber-enlaces-legales">
            <Link to="/el-liceo#manual-convivencia">Manual de Convivencia</Link>
            <span className="pie-ciber-separador">•</span>
            <Link to="/proyectos/ciberseguridad">Inicio Ciberseguridad</Link>
            <span className="pie-ciber-separador">•</span>
            <Link to="/el-liceo">Portal del Liceo</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PiePaginaCiberseguridad;
