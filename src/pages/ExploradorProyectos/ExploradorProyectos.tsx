import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Code, ArrowRight, FolderPlus, Sparkles, BookOpen } from 'lucide-react';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import fotoFachada from '../../assets/lb.jpeg';
import { PROYECTOS_REGISTRADOS, type ProyectoEstudiantil } from '../../config/registroProyectos';
import './ExploradorProyectos.css';

/**
 * Componente que renderiza el catálogo y buscador de todos los proyectos estudiantiles
 * registrados en la plataforma web de la escuela.
 */
const ExploradorProyectos: React.FC = () => {
  return (
    <div className="pagina-explorador">
      <HeroInstitucional
        imagenFondo={fotoFachada}
        altura="compacto"
        cintillo={
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} />
            Showcase de Proyectos Estudiantiles
          </span>
        }
        titulo="Proyectos Educativos e Innovación Escolar"
        descripcion="Explora las iniciativas desarrolladas por los estudiantes y la comunidad docente de nuestra institución. Esta plataforma abierta permite sumar nuevos módulos y conocimientos continuamente."
      />

      <main className="contenedor-explorador cuerpo-explorador">
        <section className="grid-proyectos-registrados">
          {PROYECTOS_REGISTRADOS.map((proyecto: ProyectoEstudiantil) => (
            <article key={proyecto.id} className="tarjeta-proyecto-estudiantil">
              <div className="cabecera-tarjeta-proy">
                <span className="categoria-proy">{proyecto.categoria}</span>
                <span className="badge-fecha">{proyecto.fechaCreacion}</span>
              </div>

              <div className="icono-contenedor-proy">
                {proyecto.icono === 'ShieldCheck' && <ShieldCheck size={36} className="icono-proy ciber" />}
                {proyecto.icono === 'Code' && <Code size={36} className="icono-proy info" />}
              </div>

              <h2 className="titulo-proy">{proyecto.titulo}</h2>
              <p className="descripcion-proy">{proyecto.descripcion}</p>

              <div className="meta-proy">
                <p><strong>Autores:</strong> {proyecto.autores}</p>
                <p><strong>Dirigido a:</strong> {proyecto.gradoOComunidad}</p>
              </div>

              <div className="etiquetas-proy">
                {proyecto.etiquetas.map((tag, idx) => (
                  <span key={idx} className="tag-item">{tag}</span>
                ))}
              </div>

              <Link to={proyecto.rutaBase} className="boton-acceder-proyecto">
                <span>Explorar Proyecto</span>
                <ArrowRight size={18} />
              </Link>
            </article>
          ))}
        </section>

        {/* Sección que invita a nuevos estudiantes a subir sus proyectos */}
        <section className="seccion-sumar-proyecto">
          <div className="caja-sumar-proyecto">
            <div className="icono-sumar-contenedor">
              <FolderPlus size={44} />
            </div>
            <div className="contenido-sumar">
              <h2>¿Quieres crear y publicar tu propio proyecto escolar?</h2>
              <p>
                Esta página web está disponible en <strong>GitHub</strong> como código abierto. Si eres estudiante
                y deseas integrar un proyecto de tu área (Robótica, Química, Historia, Programación, etc.),
                puedes seguir nuestra <strong>Guía de Contribución</strong> para agregar tu carpeta de módulo.
              </p>
              <div className="acciones-sumar">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boton-github"
                >
                  <BookOpen size={18} />
                  <span>Ver Guía en GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExploradorProyectos;
