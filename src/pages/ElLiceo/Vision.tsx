import React from 'react';
import { Eye, Lightbulb, ShieldCheck, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import fotoFachada from '../../assets/lb.jpeg';
import fotoAula from '../../assets/le.jpeg';
import fotoEstudiantes from '../../assets/lem.jpeg';
import fotoComunidad from '../../assets/images.jpeg';
import './ElLiceo.css';
import './Mision.css';

export const Vision: React.FC = () => {
  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Nuestra Visión"
        subtitulo="Liceo Bolivariano 'Antonio Lemus Pérez'"
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
              <img src={fotoFachada} alt="Sede del Liceo Bolivariano Antonio Lemus Pérez" loading="lazy" />
            </div>
            <div className="mision-texto">
              <span className="mision-badge">Nuestro Horizonte</span>
              <h2 className="mision-titulo">Declaración de Visión</h2>
              <p className="mision-subtitulo">
                "Ser una institución educativa de referencia regional y nacional, reconocida por su excelencia académica, innovación pedagógica y formación de ciudadanos íntegros, comprometidos con la transformación social y el desarrollo sostenible de su comunidad."
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
              <img src={fotoAula} alt="Innovación educativa" loading="lazy" />
            </div>

            {/* Bloque 3: Compromiso Social */}
            <div className="mision-imagen">
              <img src={fotoEstudiantes} alt="Compromiso social y ético" loading="lazy" />
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
              <img src={fotoComunidad} alt="Liderazgo comunitario" loading="lazy" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Vision;