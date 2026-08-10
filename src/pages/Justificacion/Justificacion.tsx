// src/pages/Justificacion.tsx
import React, { useState } from 'react';
import {
  ShieldCheck,
  Siren,
  Users,
  Package,

  ArrowRight,
  Sparkles,
  ChevronDown,
  Eye,

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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Justificacion.css';

// ============================================================
// DATA (basada en el proyecto real)
// ============================================================

interface FAQItem {
  pregunta: string;
  respuesta: string;
}

const FAQS: FAQItem[] = [
  {
    pregunta: "¿Cuál es el objetivo principal del proyecto?",
    respuesta: "Elaborar una plataforma web para concientizar a los estudiantes del L.B. Antonio Lemus Pérez sobre riesgos digitales, dotándolos de herramientas para identificar, prevenir y mitigar amenazas como phishing, ciberacoso y desinformación."
  },
  {
    pregunta: "¿A quién va dirigida esta plataforma?",
    respuesta: "Está diseñada para los 965 estudiantes de educación media general y técnica del Liceo Bolivariano Antonio Lemus Pérez, así como para sus docentes y representantes, quienes también tienen acceso a contenidos específicos."
  },
  {
    pregunta: "¿Qué problemática aborda?",
    respuesta: "Aborda la vulnerabilidad de los jóvenes ante riesgos digitales, la falta de formación en ciberseguridad y la necesidad de una herramienta permanente y accesible que promueva una cultura preventiva en el uso de Internet."
  },
  {
    pregunta: "¿Cómo accedo a los contenidos de mi grado?",
    respuesta: "Simplemente ingresa tu nombre y selecciona tu año escolar (1ro a 5to) en el formulario de la sección 'Accede a tu grado'. Luego podrás visualizar los módulos interactivos diseñados para tu nivel."
  }
];

// Valores institucionales
const valores = [
  { icono: ShieldCheck, titulo: "Seguridad Integral", descripcion: "Protegemos a nuestros estudiantes en todos los aspectos de su vida digital, desde la privacidad hasta la identidad." },
  { icono: BookOpen, titulo: "Educación Continua", descripcion: "Fomentamos el aprendizaje autónomo y la actualización permanente ante las amenazas emergentes." },
  { icono: HeartHandshake, titulo: "Colaboración Comunitaria", descripcion: "Construimos puentes entre la universidad, el liceo y las familias para un impacto real." },
  { icono: Lightbulb, titulo: "Pensamiento Crítico", descripcion: "Desarrollamos la capacidad de analizar, cuestionar y tomar decisiones informadas en el entorno digital." }
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

  return (
    <div className="justificacion-pagina">

      {/* ============================================================
          SECCIÓN 1: HERO CON FLECHA ANIMADA
          ============================================================ */}
      <section className="hero-densa">
        <div className="hero-fondo-decorativo"></div>
        <div className="contenedor-hero-grid">
          <div className="hero-contenido">
            <div className="insignia-badget-justificacion">
              <Activity size={18} />
              <span>Proyecto Sociotecnológico PNFI</span>
            </div>

            <h1 className="titulo-hero">
              Plataforma Web para la <br />
              <span className="texto-destacado-azul">Concientización sobre Riesgos Digitales</span>
            </h1>

            <p className="descripcion-hero">
              Una herramienta educativa diseñada para estudiantes del L.B. Antonio Lemus Pérez, 
              que promueve la prevención, el pensamiento crítico y la seguridad en el uso de Internet.
            </p>

            <div className="hero-botones-grupo">
              <Link to="/modulos" className="boton-primario">
                Explorar Módulos <ArrowRight size={18} />
              </Link>
              <button onClick={() => scrollToSeccion('diagnostico')} className="boton-secundario">
                Conoce el Proyecto <ChevronDown size={18} />
              </button>
            </div>

            <div className="hero-metricas-rapidas">
              <div className="metrica-mini">
                <School size={20} className="icono-azul" />
                <span>L.B. Antonio Lemus Pérez</span>
              </div>
              <div className="metrica-mini">
                <Users size={20} className="icono-azul" />
                <span>+965 estudiantes</span>
              </div>
              <div className="metrica-mini">
                <ShieldCheck size={20} className="icono-verde" />
                <span>Seguridad Digital</span>
              </div>
            </div>

            
          </div>

          <div className="hero-visual">
            <div className="imagen-principal-wrapper">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
                alt="Seguridad Digital Educativa"
                className="imagen-hero"
              />
              <div className="badge-flotante">
                <Sparkles size={20} />
                <span>2025 - 2026</span>
              </div>
            </div>
          </div>
        </div>
     
      </section>


   
     {/* ============================================================
  SECCIÓN 5: JUSTIFICACIÓN DETALLADA (PILARES + VALORES)
  ============================================================ */}
<section id="justificacion-detalle" className="seccion-bento-pilares">
  <div className="contenedor-bento">
    <div className="encabezado-bento">
      <h2>Justificación del Proyecto</h2>
      <p>Los pilares que sustentan la creación de esta plataforma educativa.</p>
    </div>

    <div className="bento-grid">
      {/* --- Tarjeta grande --- */}
      <div className="bento-card bento-wide azul-bg">
        <div className="bento-contenido">
          <ShieldCheck size={36} className="bento-icono-blanco" />
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
        <div className="bento-decoracion">
          {/* Imagen con placeholder y lazy loading */}
          <img 
            src="https://placehold.co/600x400/0F2C59/FFFFFF?text=Educación+Digital" 
            alt="Educación Digital" 
            loading="lazy"
            className="bento-imagen-placeholder"
          />
        </div>
      </div>

      {/* --- Tarjeta estándar 1 --- */}
      <div className="bento-card bento-standard">
        <div className="bento-imagen-top">
          <img 
            src="https://placehold.co/600x300/0F2C59/FFFFFF?text=Uso+Correcto+de+Internet" 
            alt="Uso correcto de Internet" 
            loading="lazy"
            className="bento-imagen-placeholder"
          />
          <div className="bento-badge"><Siren size={18} /></div>
        </div>
        <div className="bento-contenido text-dark">
          <h3>El Uso Correcto de la Red</h3>
          <p>
            Internet es una herramienta fundamental en la educación actual. Este manual busca sentar 
            bases teóricas y prácticas para que el estudiante comprenda su entorno digital y lo utilice responsablemente.
          </p>
        </div>
      </div>

      {/* --- Tarjeta estándar 2 --- */}
      <div className="bento-card bento-standard gris-bg">
        <div className="bento-imagen-top">
          <img 
            src="https://placehold.co/600x300/0F2C59/FFFFFF?text=Colaboración+Universitaria" 
            alt="Colaboración Universitaria" 
            loading="lazy"
            className="bento-imagen-placeholder"
          />
          <div className="bento-badge bg-azul"><Users size={18} /></div>
        </div>
        <div className="bento-contenido text-dark">
          <h3>Sinergia Institucional con la UPTOS CR</h3>
          <p>
            La estructuración de este material en la plataforma Moodle es posible gracias a la 
            colaboración y conocimientos técnicos aportados por los estudiantes de la UPTOS CR.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ============================================================
          SECCIÓN 6: VALORES INSTITUCIONALES
          ============================================================ */}
      <section className="seccion-valores">
        <div className="contenedor">
          <div className="encabezado-centrado">
            <span className="etiqueta-seccion">Nuestra Filosofía</span>
            <h2 className="titulo-seccion-grande">Valores que nos guían</h2>
            <p className="subtitulo-seccion">Principios que fundamentan cada acción y contenido de este proyecto.</p>
          </div>
          <div className="cuadricula-valores">
            {valores.map((val, idx) => (
              <div key={idx} className="tarjeta-valor">
                <div className="icono-valor"><val.icono size={32} /></div>
                <h3>{val.titulo}</h3>
                <p>{val.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
  

   

      {/* ============================================================
          SECCIÓN 10: CTA HACIA MÓDULOS
          ============================================================ */}
      <section id="registro-estudiante" className="seccion-formulario-estrategico">
        <div className="contenedor-formulario-estrategico">
          <div className="encabezado-seccion-form">
            <GraduationCap size={36} className="icono-grado-hero" />
            <h2>Accede a los Módulos de tu Grado</h2>
            <p>
              Selecciona tu año escolar y explora los módulos interactivos de ciberseguridad diseñados para tu nivel.
            </p>
          </div>
          <Link to="/modulos" className="boton-primario" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            Explorar Módulos <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ============================================================
          SECCIÓN 11: FILOSOFÍA INMERSIVA
          ============================================================ */}
      <section className="seccion-filosofia-inmersiva">
        <div className="filosofia-overlay"></div>
        <div className="contenedor-filosofia-inmersiva">
          <Sparkles className="icono-brillo" size={48} />
          <h2>Propósito Educativo</h2>
          <blockquote>
            "Dejar de reaccionar ante los fallos y comenzar a cuidarnos mediante la prevención y el conocimiento."
          </blockquote>
          <p>
            Nuestra meta es que los estudiantes del L.B. Antonio Lemus Pérez adquieran competencias digitales 
            que les permitan protegerse a sí mismos, fomentando un uso de Internet seguro, crítico y enriquecedor.
          </p>
          <div className="filosofia-badges">
            <span><BadgeCheck size={16} /> Aprendizaje autónomo</span>
            <span><BadgeCheck size={16} /> Actualización constante</span>
            <span><BadgeCheck size={16} /> Comunidad segura</span>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECCIÓN 12: FAQ + DETALLES ADICIONALES
          ============================================================ */}
      <section className="seccion-detalles-faq">
        <div className="contenedor-doble">
          <div className="columna-necesidad">
            <div className="caja-contexto">
              <div className="icono-caja"><Package size={28} /></div>
              <h3>La Necesidad de Crear Bases</h3>
              <p>
                Los jóvenes de hoy son nativos digitales, pero eso no significa que conozcan los mecanismos 
                para proteger su privacidad. Resulta imperativo desde las instituciones educativas proveer un recurso 
                que les otorgue los fundamentos técnicos y teóricos para navegar sin exponerse a riesgos innecesarios.
              </p>
            </div>

            <div className="caja-contexto reverso">
              <div className="icono-caja azul-soft"><Eye size={28} /></div>
              <h3>Un Proyecto de Impacto Real</h3>
              <p>
                La integración de esta plataforma en el entorno Moodle no solo representa la carta de presentación 
                tecnológica de nuestra institución, sino que evidencia el fruto del trabajo comunitario y 
                académico entre el liceo y los estudiantes de la UPTOS CR.
              </p>
            </div>
          </div>

          <div className="columna-faq">
            <div className="encabezado-faq-mini">
              <HelpCircle size={28} className="icono-azul" />
              <h3>Preguntas Frecuentes</h3>
            </div>
            <div className="lista-faq-densa">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className={`item-faq-denso ${faqAbierta === idx ? 'activo' : ''}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="pregunta-faq-densa">
                    <h4>{faq.pregunta}</h4>
                    <ChevronDown size={18} className="icono-flecha-faq" />
                  </div>
                  {faqAbierta === idx && (
                    <div className="respuesta-faq-densa">
                      <p>{faq.respuesta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECCIÓN 13: CTA FINAL CON FLECHA HACIA ARRIBA
          ============================================================ */}
      <section className="seccion-cta-masivo">
        <div className="cta-masivo-contenedor">
          <h2>Inicia tu formación preventiva</h2>
          <p>Descubre las bases del uso correcto de Internet en nuestra plataforma interactiva.</p>
          <button
            onClick={() => scrollToSeccion('registro-estudiante')}
            className="boton-cta-gigante"
          >
            Acceder al Registro por Grado <ArrowRight size={22} />
          </button>
          <div className="cta-enlaces">
            <a href="#diagnostico" className="cta-enlace">Diagnóstico</a>
            <a href="#objetivos" className="cta-enlace">Objetivos</a>
            <a href="#justificacion-detalle" className="cta-enlace">Justificación</a>
          </div>
          {/* Botón para subir */}
          <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ChevronUp size={24} />
            <span>Subir</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Justificacion;