import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Cpu, 
  GraduationCap, 
  FileText, 
  Image as ImageIcon,
  CheckCircle2,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import './HomePage.css';

import fotoHero from '../../assets/pbk-Hero-3.jpg';
import fotoFachada from '../../assets/lb.jpeg';
import fotoAula from '../../assets/le.jpeg';
import fotoDeportes from '../../assets/lemu.jpeg';
import fotoEtica from '../../assets/etic.jpeg';

/**
 * Portada Principal (Home) — Portal Institucional
 * - Enfoque de portal dinámico: accesos rápidos, proyecto insignia, estadísticas, vida escolar y admisión.
 * - Sin duplicar el contenido institucional profundo de ¿Quiénes Somos? (misión, visión, historia y normas).
 * - Totalmente adaptado a móviles y pantallas grandes sin márgenes ni desbordamientos laterales.
 */
export const Home: React.FC = () => {
  return (
    <div className="portal-home">
      {/* ───── 1. HERO BANNER PRINCIPAL ───── */}
      <section 
        className="portal-hero"
        style={{ backgroundImage: `url(${fotoHero})` }}
      >
        <div className="portal-hero-overlay" />
        <div className="portal-hero-contenedor">
          <div className="portal-hero-tarjeta-flotante">
            <span className="portal-hero-etiqueta">Desde 1984 · Cumaná, Estado Sucre</span>
            <h1 className="portal-hero-titulo">
              Complejo Educativo<br />
              «Antonio Lemus Pérez»
            </h1>
            <p className="portal-hero-subtitulo">
              Más de 40 años formando bachilleres en Ciencias con sólida formación académica, 
              valores éticos, patriotismo y vocación de servicio a la comunidad.
            </p>
            <div className="portal-hero-botones">
              <Link to="/admision/requisitos" className="portal-btn-rojo">
                Proceso de Admisión
                <ArrowRight size={16} />
              </Link>
              <Link to="/el-liceo" className="portal-btn-borde">
                Conoce el Liceo
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="portal-cuerpo">
        {/* ───── 2. ACCESOS RÁPIDOS A LAS ÁREAS DEL COMPLEJO ───── */}
        <section className="portal-seccion-accesos">
          <div className="portal-accesos-encabezado">
            <h2>Nuestra Comunidad Educativa</h2>
            <p>Accede directamente a las diferentes áreas, servicios y proyectos del complejo escolar.</p>
          </div>

          <div className="portal-grid-cuatro-accesos">
            {/* 1. El Liceo */}
            <Link to="/el-liceo" className="portal-tarjeta-acceso">
              
              <h3>El Complejo Educativo</h3>
              <p>Misión, visión, historia fundacional, estudios y manual de convivencia escolar.</p>
              <span className="portal-acceso-flecha">
                Conocer más <ArrowRight size={16} />
              </span>
            </Link>

            {/* 2. Ciberseguridad */}
            <Link to="/proyectos/ciberseguridad" className="portal-tarjeta-acceso">
              
              <h3>Proyecto de Ciberseguridad</h3>
              <p>Módulos interactivos de protección digital y navegación segura de 1ro a 5to año.</p>
              <span className="portal-acceso-flecha">
                Explorar plataforma <ArrowRight size={16} />
              </span>
            </Link>

            {/* 3. Admisión */}
            <Link to="/admision/requisitos" className="portal-tarjeta-acceso">
              
              <h3>Proceso de Admisión</h3>
              <p>Requisitos de inscripción, recaudos y calendario escolar para nuevos ingresos.</p>
              <span className="portal-acceso-flecha">
                Ver requisitos <ArrowRight size={16} />
              </span>
            </Link>

            {/* 4. Galería */}
            <Link to="/galeria" className="portal-tarjeta-acceso">
                
              <h3>Galería de Espacios</h3>
              <p>Fotografías de pabellones, canchas deportivas, laboratorios y vida estudiantil.</p>
              <span className="portal-acceso-flecha">
                Ver galería <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </section>

        {/* ───── 3. CIFRAS DE IMPACTO INSTITUCIONAL ───── */}
        <section className="portal-seccion-stats">
          <div className="portal-grid-stats">
            <div className="portal-stat-item">
              <span className="portal-stat-numero">1984</span>
              <p className="portal-stat-texto">Año fundacional como E.B. "Creación Bolivariana"</p>
            </div>
            <div className="portal-stat-item">
              <span className="portal-stat-numero">900+</span>
              <p className="portal-stat-texto">Estudiantes activos cursando educación media general</p>
            </div>
            <div className="portal-stat-item">
              <span className="portal-stat-numero">64</span>
              <p className="portal-stat-texto">Docentes especialistas y orientadores comprometidos</p>
            </div>
            <div className="portal-stat-item">
              <span className="portal-stat-numero">40+</span>
              <p className="portal-stat-texto">Años de excelencia y servicio a la comunidad de Cumaná</p>
            </div>
          </div>
        </section>


        {/* ───── 4. DESTACADOS DE LA VIDA ESCOLAR ───── */}
        <section className="portal-seccion-vida">
          <div className="portal-vida-encabezado">
            <h2>Vida Estudiantil y Formación Activa</h2>
            <p>Espacios donde nuestros estudiantes potencian sus habilidades deportivas, científicas y sociales.</p>
          </div>

          <div className="portal-grid-tres-vida">
            <Link to="/galeria" className="portal-tarjeta-vida">
              <img src={fotoDeportes} alt="Actividades deportivas" loading="lazy" />
              <div className="portal-tarjeta-vida-overlay">
                <h4>Deporte y Salud Escolar</h4>
                <p>Canchas deportivas múltiples y torneos de fútbol sala, voleibol y atletismo.</p>
              </div>
            </Link>

            <Link to="/galeria" className="portal-tarjeta-vida">
              <img src={fotoAula} alt="Laboratorio de computación" loading="lazy" />
              <div className="portal-tarjeta-vida-overlay">
                <h4>Laboratorios y Tecnología</h4>
                <p>Espacios de informática y ciencias experimentales para el aprendizaje práctico.</p>
              </div>
            </Link>

            <Link to="/galeria" className="portal-tarjeta-vida">
              <img src={fotoEtica} alt="Convivencia y civismo" loading="lazy" />
              <div className="portal-tarjeta-vida-overlay">
                <h4>Convivencia y Valores Cívicos</h4>
                <p>Cultura de paz, respeto mutuo y brigadas ecológicas en pro del ambiente.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* ───── 5. BANNER DE ADMISIÓN CTA ───── */}
        <section className="portal-seccion-cta">
          <div className="portal-cta-texto">
            <h2>¿Deseas Inscribirte en el Complejo Educativo?</h2>
            <p>
              Consulta el cronograma de inscripciones, planillas descargables y requisitos indispensables 
              para nuevos ingresos de 1er año y traslados de educación media general.
            </p>
          </div>
          <div className="portal-cta-boton-caja">
            <Link to="/admision/requisitos" className="portal-btn-rojo">
              Consultar Requisitos de Admisión
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* ───── 4. SHOWCASE PROYECTO INSIGNIA: CIBERSEGURIDAD ───── */}
        <section className="portal-seccion-ciber-destacado">
          <div className="portal-ciber-info">
            <span className="portal-ciber-badge">Iniciativa Estudiantil y Docente</span>
            <h2 className="portal-ciber-titulo">
              Plataforma de Ciberseguridad y Convivencia Digital
            </h2>
            <p className="portal-ciber-desc">
              Un proyecto educativo diseñado para fortalecer la conciencia digital en los adolescentes, 
              enseñando prácticas seguras para proteger datos personales, prevenir el ciberacoso escolar 
              y navegar responsablemente en redes sociales e internet.
            </p>

            <div className="portal-ciber-features">
              <div className="portal-feature-item">
            
                <span>Protección de Cuentas y Claves</span>
              </div>
              <div className="portal-feature-item">
               
                <span>Prevención de Phishing y Estafas</span>
              </div>
              <div className="portal-feature-item">
              
                <span>Privacidad en Redes Sociales</span>
              </div>
              <div className="portal-feature-item">
             
                <span>Uso Ético de la Tecnología</span>
              </div>
            </div>

            <div>
              <Link to="/proyectos/ciberseguridad" className="portal-btn-rojo">
                
                Ingresar a la Plataforma de Ciberseguridad
              </Link>
            </div>
          </div>

          <div className="portal-ciber-card-visual">
            <h4>Módulos Adaptados por Grado</h4>
            <p>Contenido interactivo con evaluaciones prácticas y situaciones cotidianas adaptadas al nivel escolar:</p>
            
            <div className="portal-ciber-grados-chips">
              <span className="portal-grado-chip">1er Año · Fundamentos</span>
              <span className="portal-grado-chip">2do Año · Navegación</span>
              <span className="portal-grado-chip">3er Año · Antiphishing</span>
              <span className="portal-grado-chip">4to Año · Redes y Privacidad</span>
              <span className="portal-grado-chip">5to Año · Seguridad Avanzada</span>
            </div>

            <Link 
              to="/proyectos/ciberseguridad/modulos" 
              className="portal-btn-borde1"
              style={{ alignSelf: 'flex-start', background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)' }}
            >
              Ver Catálogo de Módulos
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>


  );
};

export default Home;