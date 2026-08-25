import React from 'react';
import { Calendar, Building, BookOpen, GraduationCap, Award, Monitor, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import fotoFachada from '../../assets/lb.jpeg';
import './ElLiceo.css';
import '../Nosotros/SobreU.E.css';

export const Historia: React.FC = () => {
  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Historia Institucional"
        subtitulo="Liceo Bolivariano 'Antonio Lemus Pérez'"
        descripcion="Más de 40 años de trayectoria formando jóvenes integrales en Cumaná, Estado Sucre."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="contenedor-liceo">
        <div className="encabezado-seccion-liceo">
          <span className="badge-liceo">Reseña Histórica</span>
          <h2 className="titulo-seccion-liceo">Nuestros Orígenes y Trayectoria</h2>
          <p className="subtitulo-seccion-liceo">
            Desde su fundación en 1984 como E.B. "Creación Bolivariana", nuestra institución ha crecido y evolucionado para convertirse en un pilar educativo del Municipio Sucre.
          </p>
        </div>

        <section className="seccion-historia" id="timeline-historia">
          <div className="linea-tiempo">
            {/* 1984 */}
            <div className="evento-timeline">
              <div className="marcador-timeline"><Calendar size={20} /></div>
              <div className="contenido-evento">
                <span className="fecha-etiqueta">Septiembre 1984</span>
                <h3>Fundación: E.B. "Creación Bolivariana"</h3>
                <p>
                  Fundada en septiembre de 1984, funcionó inicialmente durante 5 años en la planta física de la hoy U.E. “José Silverio González”, en el Barrio Bolívar de la Parroquia Altagracia.
                </p>
                <div className="caja-info-destacada">
                  <Building className="icono-caja" />
                  <div>
                    <h4>Inicio de Actividades</h4>
                    <p>Contaba con 22 secciones de séptimo grado y una matrícula inicial de 716 alumnos bajo la dirección de la Prof. Belén Campos de Santos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 1988 */}
            <div className="evento-timeline">
              <div className="marcador-timeline"><GraduationCap size={20} /></div>
              <div className="contenido-evento">
                <span className="fecha-etiqueta">Enero 1988</span>
                <h3>Bautizo Institucional y Sede Propia</h3>
                <p>
                  La institución fue nombrada oficialmente <strong>"Antonio Lemus Pérez"</strong> en homenaje al insigne educador sucrense. Se trasladó a su sede propia con 18 aulas, 6 talleres, 4 laboratorios y áreas deportivas.
                </p>
              </div>
            </div>

            {/* 2006 */}
            <div className="evento-timeline">
              <div className="marcador-timeline"><Award size={20} /></div>
              <div className="contenido-evento">
                <span className="fecha-etiqueta">2006 - 2007</span>
                <h3>Transformación a Liceo Bolivariano</h3>
                <p>
                  Se adopta el nuevo modelo pedagógico basado en Proyectos Socioproductivos y áreas del conocimiento integradas, fortaleciendo el compromiso socio-comunitario.
                </p>
              </div>
            </div>

            {/* Actualidad */}
            <div className="evento-timeline">
              <div className="marcador-timeline"><Monitor size={20} /></div>
              <div className="contenido-evento">
                <span className="fecha-etiqueta">Actualidad</span>
                <h3>Educación del Siglo XXI</h3>
                <p>
                  Inauguración del CBIT "Licda. Zurilka Rijo" e incorporación de proyectos tecnológicos estudiantiles que impulsan la innovación educativa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Historia;
