import React, { useState } from 'react';
import {
  ShieldCheck,
  Siren,
  Users,
  Package,
  ArrowRight,
  ChevronDown,
  HelpCircle,
  CheckCircle2,
  Activity,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  Lightbulb,
  BadgeCheck,
  School,
  ChevronUp,
  SparklesIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HeaderProyecto from '../../components/comunes/HeaderProyecto/HeaderProyecto';
import './Justificacion.css';

interface FAQItem {
  pregunta: string;
  respuesta: string;
}

const FAQS: FAQItem[] = [
  {
    pregunta: '¿Cuál es el objetivo principal del proyecto?',
    respuesta: 'Elaborar una plataforma web para concientizar a los estudiante sobre riesgos digitales, dotándolos de herramientas para identificar, prevenir y mitigar amenazas como phishing, ciberacoso y desinformación.'
  },

  {
    pregunta: '¿Qué problemática aborda?',
    respuesta: 'Aborda la vulnerabilidad de los jóvenes ante riesgos digitales, la falta de formación en ciberseguridad y la necesidad de una herramienta permanente y accesible que promueva una cultura preventiva en el uso de Internet.'
  },
  {
    pregunta: '¿Cómo accedo a los contenidos de mi grado?',
    respuesta: 'Simplemente ingresa tu nombre y selecciona tu año escolar (1ro a 5to) en el formulario de la sección "Accede a tu grado". Luego podrás visualizar los módulos interactivos diseñados para tu nivel.'
  },
];

const valores = [
  { icono: ShieldCheck, titulo: 'Seguridad Integral', descripcion: 'Protegemos a nuestros estudiantes en todos los aspectos de su vida digital, desde la privacidad hasta la identidad.' },
  { icono: BookOpen, titulo: 'Educación Continua', descripcion: 'Fomentamos el aprendizaje autónomo.' },
  { icono: HeartHandshake, titulo: 'Colaboración Comunitaria', descripcion: 'Construimos puentes entre la institución y las familias para un impacto real.' },
  { icono: Lightbulb, titulo: 'Pensamiento Crítico', descripcion: 'Desarrollamos la capacidad de analizar, cuestionar y tomar decisiones informadas en el entorno digital.' },
];

export const Justificacion: React.FC = () => {
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqAbierta(faqAbierta === index ? null : index);
  };

  const scrollToSeccion = (id: string) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const enlacesSubNav = [
    { label: 'Inicio Proyecto', ruta: '/proyectos/ciberseguridad' },
    { label: 'Catálogo por Grado', ruta: '/proyectos/ciberseguridad/modulos' },
    { label: 'Justificación', ruta: '/proyectos/ciberseguridad/justificacion' },
    { label: 'Índices y Temario', ruta: '/proyectos/ciberseguridad/indices' },
    { label: 'Guía Docentes', ruta: '/proyectos/ciberseguridad/guias/docentes' },
    { label: 'Guía Padres', ruta: '/proyectos/ciberseguridad/guias/padres' },
    { label: 'Desarrolladores', ruta: '/proyectos/ciberseguridad/nosotros/sobre-devs' },
  ];

  return (
    <div className="justificacion-pagina">
      {/* Hero Unificado del Proyecto */}
      <HeaderProyecto
        titulo="JUSTIFICACIÓN"
        tituloResaltado=""
        descripcion="Fundamentación académica, diagnóstico de vulnerabilidades digitales e impacto pedagógico en la comunidad del Complejo Educativo Antonio Lemus Pérez."
        imagenFondo="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80"
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Explorar Catálogo por Grado',
            ruta: '/proyectos/ciberseguridad/modulos',
          },
          {
            label: 'Ver Índices y Temario',
            ruta: '/proyectos/ciberseguridad/indices',
            icono: <ArrowRight size={20} />,
          },
          {
            label: 'Conoce el Proyecto',
            href: '#justificacion-detalle',
            icono: <ChevronDown size={18} />,
          },
        ]}
      />

      {/* JUSTIFICACIÓN DETALLADA */}
      <section id="justificacion-detalle" className="seccion-justificacion">
        <div className="contenedor">
          <div className="encabezado-seccion">
            <h2>Justificación del Proyecto</h2>
            <p>Los pilares que sustentan la creación de esta plataforma educativa.</p>
          </div>

          <div className="grid-pilares">
            <article className="pilar-card pilar-ancho">
              <div className="pilar-contenido">
                <ShieldCheck size={32} className="icono-pilar" />
                <h3>Educación Temprana y Cultura Preventiva</h3>
                <p>
                  El enfoque principal es transformar la manera en que los estudiantes enfrentan la tecnología.
                  En lugar de reaccionar ante incidentes, les proporcionamos bases sólidas para prevenir riesgos
                  desde el primer momento en que navegan por Internet.
                </p>
                <ul className="lista-beneficios">
                  <li><CheckCircle2 size={18} /> Formación en ciberseguridad desde bachillerato</li>
                  <li><CheckCircle2 size={18} /> Desarrollo de pensamiento crítico digital</li>
                  <li><CheckCircle2 size={18} /> Reducción de incidentes de seguridad</li>
                </ul>
              </div>
            </article>

            <article className="pilar-card">
              <Siren size={28} className="icono-pilar" />
              <h3>El Uso Correcto de la Red</h3>
              <p>
                Internet es una herramienta fundamental en la educación actual. Este manual busca sentar
                bases teóricas y prácticas para que el estudiante comprenda su entorno digital y lo utilice responsablemente.
              </p>
            </article>


          </div>
        </div>
      </section>

      {/* VALORES INSTITUCIONALES */}
      <section className="seccion-valores">
        <div className="contenedor">
          <div className="encabezado-seccion">
            <span className="etiqueta-seccion">Nuestra Filosofía</span>
            <h2>Valores que nos guían</h2>
            <p>Principios que fundamentan cada acción y contenido de este proyecto.</p>
          </div>
          <div className="grid-valores">
            {valores.map((val, idx) => (
              <div key={idx} className="tarjeta-valor">
                <div className="icono-valor"><val.icono size={28} /></div>
                <h3>{val.titulo}</h3>
                <p>{val.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA MÓDULOS */}
      <section id="registro-estudiante" className="seccion-cta">
        <div className="contenedor">
          <div className="cta-inner">
            <GraduationCap size={36} className="icono-cta" />
            <h2>Accede a los Módulos de tu Grado</h2>
            <p>Selecciona tu año escolar y explora los módulos interactivos de ciberseguridad diseñados para tu nivel.</p>
            <Link to="/proyectos/ciberseguridad/modulos" className="boton-primario">
              Explorar Módulos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="seccion-filosofia">
        <div className="contenedor">
          <div className="filosofia-contenido">
            <h2>Propósito Educativo</h2>
            <blockquote>
              "Dejar de reaccionar ante los fallos y comenzar a cuidarnos mediante la prevención y el conocimiento."
            </blockquote>
            <p>
              Nuestra meta es que los estudiantes adquieran competencias digitales
              que les permitan protegerse a sí mismos, fomentando un uso de Internet seguro, crítico y enriquecedor.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ Y DETALLES */}
      <section className="seccion-faq">
        <div className="contenedor">
          <div className="grid-faq">
            <div className="columna-contexto">
              <div className="caja-contexto">
                <Package size={28} className="icono-contexto" />
                <h3>La Necesidad de Crear Bases</h3>
                <p>
                  Los jóvenes de hoy son nativos digitales, pero eso no significa que conozcan los mecanismos
                  para proteger su privacidad. Resulta imperativo desde las instituciones educativas proveer un recurso
                  que les otorgue los fundamentos técnicos y teóricos para navegar sin exponerse a riesgos innecesarios.
                </p>
              </div>


            </div>

            <div className="columna-faq">
              <div className="encabezado-faq">
                <HelpCircle size={28} className="icono-faq" />
                <h3>Preguntas Frecuentes</h3>
              </div>
              <div className="lista-faq">
                {FAQS.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`item-faq ${faqAbierta === idx ? 'activo' : ''}`}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="pregunta-faq">
                      <h4>{faq.pregunta}</h4>
                      <ChevronDown size={18} className="icono-flecha" />
                    </div>
                    {faqAbierta === idx && (
                      <div className="respuesta-faq">
                        <p>{faq.respuesta}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="seccion-cta-final">
        <div className="contenedor">
          <h2>Inicia tu formación preventiva</h2>
          <p>Descubre las bases del uso correcto de Internet en nuestra plataforma interactiva.</p>
          <button onClick={() => scrollToSeccion('registro-estudiante')} className="boton-cta">
            Acceder al Registro por Grado <ArrowRight size={22} />
          </button>
          <div className="cta-enlaces">
            <a href="#diagnostico">Diagnóstico</a>
            <a href="#objetivos">Objetivos</a>
            <a href="#justificacion-detalle">Justificación</a>
          </div>
          <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ChevronUp size={20} />
            <span>Subir</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Justificacion;