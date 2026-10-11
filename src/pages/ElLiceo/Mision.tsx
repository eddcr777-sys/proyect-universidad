import React from 'react';
import { Target, Compass, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import fotoFachada from '../../assets/lb.jpeg';
import fotoAula from '../../assets/le.jpeg';
import fotoEstudiantes from '../../assets/lem.jpeg';
import fotoComunidad from '../../assets/images.jpeg';
import './ElLiceo.css';
import './Mision.css'

export const Mision: React.FC = () => {
  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Nuestra Misión"
        subtitulo="Complejo Educativo 'Antonio Lemus Pérez'"
        descripcion="El propósito fundamental que orienta cada una de nuestras acciones socioeducativas."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="contenedor-liceo-ancho">
        <div className="encabezado-seccion-liceo">

          <h2 className="titulo-seccion-liceo">Propósito Educativo</h2>
          <p className="subtitulo-seccion-liceo">
            Comprometidos con el desarrollo socio-ético y cultural de la juventud sucrense.
          </p>
        </div>

        {/* --- SECCIÓN CRUZADA DE MISIÓN CON CSS PROPIO --- */}
        <section className="mision-seccion">
          <div className="mision-contenedor">
            {/* Bloque 1: Declaración de Misión */}
            <div className="mision-imagen">
              <img src={fotoFachada} alt="Sede del Complejo Educativo Antonio Lemus Pérez" loading="lazy" />
            </div>
            <div className="mision-texto">
              <span className="mision-badge">Nuestra Razón de Ser</span>
              <h2 className="mision-titulo">Declaración de Misión</h2>
              <p className="mision-subtitulo">
                "Promover, incentivar e implementar en el Complejo Educativo Antonio Lemus Pérez en concordancia con los lineamientos del Ministerio del Poder Popular para la Educación, un mayor nivel de desarrollo socio-ético-cultural mediante la formación integral de todos los estudiantes capaces de enfrentar la vida, de construir su propio destino, responsables con su núcleo familiar, solidario social y culturalmente con las comunidades, comprometidos con la patria y con la salvaguarda de los valores sociales de la nación venezolana."
              </p>
            </div>

            {/* Bloque 2: Formación Integral */}
            <div className="mision-texto">
              <span className="mision-badge">Pilar I</span>
              <h2 className="mision-titulo">Formación Integral</h2>
              <p className="mision-subtitulo">
                Desarrollamos competencias científicas, humanísticas y tecnológicas centradas en el desarrollo humano armónico, brindando a nuestros estudiantes las herramientas académicas necesarias para su crecimiento intelectual.
              </p>
            </div>
            <div className="mision-imagen">
              <img src={fotoAula} alt="Formación académica e intelectual" loading="lazy" />
            </div>

            {/* Bloque 3: Orientación Ética */}
            <div className="mision-imagen">
              <img src={fotoEstudiantes} alt="Orientación ética y ciudadanía" loading="lazy" />
            </div>
            <div className="mision-texto">
              <span className="mision-badge">Pilar II</span>
              <h2 className="mision-titulo">Orientación Ética y Ciudadanía</h2>
              <p className="mision-subtitulo">
                Inculcamos principios y valores fundamentales para el ejercicio transparente, tolerante y responsable de la ciudadanía, promoviendo la convivencia armónica y el compromiso con la patria.
              </p>
            </div>

            {/* Bloque 4: Vinculación Comunitaria */}
            <div className="mision-texto">
              <span className="mision-badge">Pilar III</span>
              <h2 className="mision-titulo">Vinculación Comunitaria</h2>
              <p className="mision-subtitulo">
                Integramos activamente a la familia y la comunidad en los procesos de aprendizaje, fomentando proyectos socioproductivos, actividades deportivas y culturales que fortalecen la cohesión social.
              </p>
            </div>
            <div className="mision-imagen">
              <img src={fotoComunidad} alt="Integración escuela, familia y comunidad" loading="lazy" />
            </div>
          </div>
        </section>

    
      </main>
    </div>
  );
};

export default Mision;