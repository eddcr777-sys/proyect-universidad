import React from 'react';
import { Eye, Lightbulb, ShieldCheck, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import fotoHorizonte from '../../assets/vision.jpg';
import fotoInnovacion from '../../assets/innoción educativa.jpg';
import fotoEstudiantes from '../../assets/lem.jpeg';
import fotoComunidad from '../../assets/mision_vinculacion_comunitaria.jpg';
import './ElLiceo.css';
import './Mision.css';

export const Vision: React.FC = () => {
  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Nuestra Visión"
        subtitulo="Complejo Educativo 'Antonio Lemus Pérez'"
        descripcion="Hacia dónde caminamos: inspirando el futuro educativo del Estado Sucre."
        acciones={
          <Link to="/" className="boton-hero-principal">
             <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="contenedor-liceo-ancho">
        <div className="encabezado-seccion-liceo">
          <h2 className="titulo-seccion-liceo">Horizonte Institucional</h2>
          <p className="subtitulo-seccion-liceo">
            Nuestra proyección hacia una educación transformadora y de vanguardia en Sucre.
          </p>
        </div>

        {/* --- SECCIÓN CRUZADA DE VISIÓN CON CSS PROPIO --- */}
        <section className="mision-seccion">
          <div className="mision-contenedor">
            {/* Bloque 1: Declaración de Visión */}
            <div className="mision-imagen">
              <img src={fotoHorizonte} alt="Estudiantes proyectando el futuro - Declaración de Visión" loading="lazy" />
            </div>
            <div className="mision-texto">
              <span className="mision-badge">Nuestro Horizonte</span>
              <h2 className="mision-titulo">Declaración de Visión</h2>
              <p className="mision-subtitulo">
                "El Complejo Educativo Antonio Lemus Pérez pretende fomentar un proceso colectivo e integrador, formador de nuevos republicanos (as), socializando y generando relaciones entre la escuela, familia y comunidad, la interculturalidad, práctica del trabajo liberador y contexto histórico, donde el aprendizaje esté en permanente construcción considerando las experiencias que permitan el desarrollo de conocimientos, valores, actitudes, virtudes, habilidades y destrezas del nuevo republicano (a), fomentando la creatividad, convivir, participar, reflexionar para así formar a un ser integral social, solidario, autodidacta donde su participación ante la sociedad sea democrática, protagónica, corresponsable y una conciencia ambientalista para el desarrollo endógeno y sustentable."
              </p>
            </div>

            {/* Bloque 2: Innovación Educativa */}
            <div className="mision-texto">
              <span className="mision-badge">Pilar I</span>
              <h2 className="mision-titulo">Innovación Educativa</h2>
              <p className="mision-subtitulo">
                Integramos tecnologías emergentes y metodologías activas que promueven el pensamiento crítico, la creatividad y la resolución de problemas en contextos reales.
              </p>
            </div>
            <div className="mision-imagen">
              <img src={fotoInnovacion} alt="Tecnología, robótica e innovación educativa" loading="lazy" />
            </div>

            {/* Bloque 3: Compromiso Social */}
            <div className="mision-imagen">
              <img src={fotoEstudiantes} alt="Estudiantes comprometidos social y éticamente" loading="lazy" />
            </div>
            <div className="mision-texto">
              <span className="mision-badge">Pilar II</span>
              <h2 className="mision-titulo">Compromiso Social y Ético</h2>
              <p className="mision-subtitulo">
                Formamos ciudadanos responsables, solidarios y respetuosos de los derechos humanos, con profundo sentido de pertenencia y servicio a la comunidad.
              </p>
            </div>

            {/* Bloque 4: Liderazgo Comunitario */}
            <div className="mision-texto">
              <span className="mision-badge">Pilar III</span>
              <h2 className="mision-titulo">Liderazgo Comunitario</h2>
              <p className="mision-subtitulo">
                Impulsamos el liderazgo juvenil y la participación activa en proyectos socioproductivos, culturales y ambientales que fortalezcan el tejido social de la región.
              </p>
            </div>
            <div className="mision-imagen">
              <img src={fotoComunidad} alt="Liderazgo estudiantil e integración comunitaria" loading="lazy" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Vision;