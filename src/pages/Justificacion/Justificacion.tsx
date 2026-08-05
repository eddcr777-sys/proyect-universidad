// src/pages/Justificacion.tsx
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Siren, 
  Users, 
  Package, 
  Brain, 
  ArrowRight,
  Sparkles,
  ChevronDown,
  Eye,
  AlertTriangle,
  HelpCircle,
  Target,
  CheckCircle2,
  Activity,
  GraduationCap
} from 'lucide-react';
import FormularioModulos from '../../components/comunes/Formularios/CampoTexto';
import './Justificacion.css';

interface FAQItem {
  pregunta: string;
  respuesta: string;
}

const FAQS: FAQItem[] = [
  {
    pregunta: "¿Cuál es el objetivo de este manual de soporte?",
    respuesta: "Brindar a los estudiantes las bases necesarias para un uso correcto de internet, enseñándoles a protegerse desde temprana edad mediante la prevención, en lugar de solo reaccionar ante los problemas."
  },
  {
    pregunta: "¿Quiénes impulsan esta iniciativa en el liceo?",
    respuesta: "Es un proyecto colaborativo e institucional desarrollado por los estudiantes de la UPTOS CR en beneficio de la comunidad educativa del L.B. Antonio Lemus Pérez."
  },
  {
    pregunta: "¿Por qué es vital la prevención temprana?",
    respuesta: "Porque al adquirir bases sólidas de ciberseguridad en la etapa de bachillerato, los jóvenes desarrollan un criterio preventivo que los acompañará siempre, reduciendo drásticamente su exposición a riesgos digitales."
  }
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
      
      {/* 1. HERO SECTION */}
      <section className="hero-densa">
        <div className="hero-fondo-decorativo"></div>
        <div className="contenedor-hero-grid">
          
          {/* Columna Izquierda: Texto y CTA */}
          <div className="hero-contenido">
            <div className="insignia-badget-justificacion">
              <Activity size={18} />
              <span>Proyecto Educativo y Tecnológico</span>
            </div>
            
            <h1 className="titulo-hero">
              El uso correcto de internet: prevención desde <span className="texto-destacado-azul">temprana edad.</span>
            </h1>
            
            <p className="descripcion-hero">
              En alianza con los estudiantes de la UPTOS CR, el L.B. Antonio Lemus Pérez presenta este manual de soporte alojado en Moodle. 
              Una iniciativa diseñada para dotar a nuestros jóvenes de las bases teóricas y prácticas para interactuar en la red con total seguridad.
            </p>
            
            <div className="hero-botones-grupo">
              <button onClick={() => scrollToSeccion('registro-estudiante')} className="boton-primario">
                Acceso por Grado <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollToSeccion('pilares')} className="boton-secundario">
                Ver Justificación <ChevronDown size={18} />
              </button>
            </div>

            <div className="hero-metricas-rapidas">
              <div className="metrica-mini">
                <CheckCircle2 size={20} className="icono-verde" />
                <span>Alianza UPTOS CR</span>
              </div>
              <div className="metrica-mini">
                <ShieldCheck size={20} className="icono-azul" />
                <span>Entorno Moodle</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Composición de Imágenes */}
          <div className="hero-visual">
            <div className="imagen-principal-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
                alt="Seguridad Digital Educativa" 
                className="imagen-hero"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. ESTADÍSTICAS O PUNTOS CLAVE */}
      <section className="seccion-estadisticas-superpuestas">
        <div className="contenedor-estadisticas">
          <div className="tarjeta-dato dark-card">
            <AlertTriangle className="icono-dato azul-ciber" size={32} />
            <div className="numero-dato">Prevención</div>
            <p className="etiqueta-dato">Dejar de reaccionar ante la falla y aprender a anticiparla.</p>
          </div>
          <div className="tarjeta-dato light-card">
            <Target className="icono-dato azul" size={32} />
            <div className="numero-dato">Moodle</div>
            <p className="etiqueta-dato">Plataforma educativa para la gestión del aprendizaje.</p>
          </div>
          <div className="tarjeta-dato light-card">
            <Brain className="icono-dato violeta" size={32} />
            <div className="numero-dato">UPTOS CR</div>
            <p className="etiqueta-dato">Sinergia universitaria para el desarrollo de la educación media.</p>
          </div>
        </div>
      </section>

      {/* 3. PILARES (DISEÑO BENTO GRID) */}
      <section id="pilares" className="seccion-bento-pilares">
        <div className="contenedor-bento">
          <div className="encabezado-bento">
            <h2>Justificación del Proyecto</h2>
            <p>Los tres pilares fundamentales que sustentan la creación de este manual de soporte.</p>
          </div>

          <div className="bento-grid">
            
            {/* Bento Item 1: Horizontal Largo */}
            <div className="bento-card bento-wide azul-bg">
              <div className="bento-contenido">
                <ShieldCheck size={36} className="bento-icono-blanco" />
                <h3>Educación Temprana y Cultura Preventiva</h3>
                <p>
                  El enfoque principal de este proyecto es transformar la manera en que los estudiantes enfrentan la tecnología. 
                  En lugar de enseñarles a reaccionar cuando sus datos ya han sido expuestos o sus equipos vulnerados, 
                  les proporcionamos las bases necesarias para prevenir estas fallas desde el primer momento en que navegan por internet.
                </p>
              </div>
              <div className="bento-decoracion">
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" alt="Educación Digital" />
              </div>
            </div>

            {/* Bento Item 2: Vertical */}
            <div className="bento-card bento-standard">
              <div className="bento-imagen-top">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" alt="Uso correcto" />
                <div className="bento-badge"><Siren size={18}/></div>
              </div>
              <div className="bento-contenido text-dark">
                <h3>El Uso Correcto de la Red</h3>
                <p>
                  Internet es una herramienta fundamental en la educación actual. Este manual busca sentar 
                  bases teóricas y prácticas para que el estudiante comprenda su entorno digital y lo utilice responsablemente.
                </p>
              </div>
            </div>

            {/* Bento Item 3: Vertical */}
            <div className="bento-card bento-standard gris-bg">
              <div className="bento-imagen-top">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Colaboración Universitaria" />
                <div className="bento-badge bg-azul"><Users size={18}/></div>
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

      {/* 4. SECCIÓN ESTRATÉGICA: FORMULARIO DE ACCESO Y PRESENTACIÓN POR GRADO */}
      <section id="registro-estudiante" className="seccion-formulario-estrategico">
        <div className="contenedor-formulario-estrategico">
          <div className="encabezado-seccion-form">
            <GraduationCap size={36} className="icono-grado-hero" />
            <h2>Accede a la Presentación de tu Grado</h2>
            <p>
              Ingresa tu nombre y selecciona tu año escolar (1ro a 5to Año) para visualizar la ruta y presentación completa de tus módulos.
            </p>
          </div>

          <FormularioModulos />
        </div>
      </section>

      {/* 5. SECCIÓN FILOSOFÍA TIPO BANNER INMERSIVO */}
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
            que les permitan protegerse a sí mismos, fomentando un uso de internet seguro y enriquecedor.
          </p>
        </div>
      </section>

      {/* 6. TEXTO DETALLADO & FAQ JUNTOS */}
      <section className="seccion-detalles-faq">
        <div className="contenedor-doble">
          
          {/* Columna Izquierda: Necesidad */}
          <div className="columna-necesidad">
            <div className="caja-contexto">
              <div className="icono-caja"><Package size={28} /></div>
              <h3>La Necesidad de Crear Bases</h3>
              <p>
                Los jóvenes de hoy son nativos digitales, pero eso no significa que conozcan los mecanismos 
                para proteger su privacidad. Resulta imperativo desde las instituciones educativas proveer un manual 
                de soporte que les otorgue los fundamentos técnicos y teóricos para navegar sin exponerse a riesgos innecesarios.
              </p>
            </div>

            <div className="caja-contexto reverso">
              <div className="icono-caja azul-soft"><Eye size={28} /></div>
              <h3>Un Proyecto de Impacto Real</h3>
              <p>
                La integración de este manual en el entorno Moodle no solo representa la carta de presentación 
                tecnológica de nuestra institución, sino que evidencia el fruto del trabajo comunitario y 
                académico entre el liceo y los estudiantes de la UPTOS CR.
              </p>
            </div>
          </div>

          {/* Columna Derecha: FAQ */}
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

      {/* 7. CTA FINAL MASIVO CON ESTILO CIBERAZUL MEJORADO */}
      <section className="seccion-cta-masivo">
        <div className="cta-masivo-contenedor">
          <h2>Inicia tu formación preventiva</h2>
          <p>Descubre las bases del uso correcto de internet en nuestra plataforma interactiva.</p>
          <button 
            onClick={() => scrollToSeccion('registro-estudiante')} 
            className="boton-cta-gigante"
          >
            Acceder al Registro por Grado <ArrowRight size={22} />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Justificacion;