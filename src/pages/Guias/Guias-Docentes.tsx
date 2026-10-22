import React, { useState } from 'react';
import {
  BookOpen,
  School,
  Award,
  CheckCircle2,
  AlertTriangle,
  Users,
  Shield,
  ShieldAlert,
  ShieldCheck,
  FileText,
  HelpCircle,
  Sparkles,
  Download,
  Target,
  Clock,
  Layers,
  ChevronDown,
  ArrowRight,
  ArrowDown,
  Scale,
  Gavel,
  PlayCircle,
  Server,
  Lock,
  Bookmark
} from 'lucide-react';
import HeaderProyecto from '../../components/comunes/HeaderProyecto/HeaderProyecto';
import imgHeroCiber from '../../assets/photo_2_2026-10-21_23-11-48.jpg';
import './Guias-padres.css';
import './Guias-Docentes.css';

interface EstrategiaAula {
  grado: string;
  moduloTema: string;
  objetivoPedagogico: string;
  actividadSugerida: string;
  evaluacion: string;
}

const ESTRATEGIAS_POR_GRADO: EstrategiaAula[] = [
  {
    grado: "1er Año",
    moduloTema: "Redes Sociales e Identidad Digital",
    objetivoPedagogico: "Fomentar el reconocimiento de la huella digital y el respeto a la privacidad personal en redes y plataformas.",
    actividadSugerida: "Taller 'Mitos vs Realidades de la Red': Análisis colaborativo de capturas simuladas e identificación de sobreexposición de datos.",
    evaluacion: "Creación colectiva de una infografía escolar sobre normas básicas de etiqueta digital (Netiqueta) y privacidad en WhatsApp/Instagram."
  },
  {
    grado: "2do Año",
    moduloTema: "Protección de Cuentas y Contraseñas",
    objetivoPedagogico: "Desarrollar destrezas para la creación de credenciales robustas y la adopción de la autenticación en dos pasos (2FA).",
    actividadSugerida: "Laboratorio práctico de contraseñas: Prueba de tiempo de descifrado con claves comunes vs frases de paso complejas usando diccionarios.",
    evaluacion: "Checklist individual de 'Hardening' (fortalecimiento) de cuentas académicas, correo institucional y redes personales."
  },
  {
    grado: "3er Año",
    moduloTema: "Phishing, Smishing y Ciberdelincuencia",
    objetivoPedagogico: "Identificar técnicas de ingeniería social, correos tramposos, suplantación de identidad y estafas bancarias frecuentes.",
    actividadSugerida: "Simulacro 'Detectives Digitales': Examen de 5 ejemplos de correos y SMS para señalar indicadores de Phishing y remitentes falsos.",
    evaluacion: "Informe de diagnóstico de riesgo y presentación en equipos sobre vectores de ataque comunes en Venezuela."
  },
  {
    grado: "4to Año",
    moduloTema: "Software Pirata, Malware y Responsabilidad Legal",
    objetivoPedagogico: "Comprender los riesgos técnicos y legales asociados a descargas no oficiales, troyanos, mineros de criptomonedas y spyware.",
    actividadSugerida: "Debate guiado: Software Libre vs Software Pirata. Estudio de caso sobre troyanos ocultos en activadores de programas comerciales.",
    evaluacion: "Cuadro comparativo de licencias y guía de alternativas de software libre y seguro aplicables en el liceo y en el hogar."
  },
  {
    grado: "5to Año",
    moduloTema: "Auditorías Digitales y Ciudadanía Ética",
    objetivoPedagogico: "Capacitar en metodologías de autoevaluación cibernética institucional, protección comunitaria y ética profesional en TI.",
    actividadSugerida: "Proyecto Integrador: Auditoría simulada de seguridad en el entorno escolar o familiar y propuesta formal de mitigación.",
    evaluacion: "Defensa oral del informe de auditoría digital con recomendaciones prácticas para la comunidad educativa del C.E. Antonio Lemus Pérez."
  }
];

const RECURSOS_DOCENTES = [
  {
    titulo: "Plan de Clase: Introducción a la Ciberseguridad Escolar",
    formato: "Documento Pedagógico (PDF)",
    peso: "1.4 MB",
    descripcion: "Estructura minuciosa de 45 minutos con dinámicas de inicio, desarrollo y cierre para estudiantes de 1ro y 2do año."
  },
  {
    titulo: "Rúbrica Institucional de Evaluación Digital",
    formato: "Plantilla Excel / PDF",
    peso: "850 KB",
    descripcion: "Criterios estandarizados para calificar presentaciones, diagnósticos, cuestionarios interactivos y talleres prácticos."
  },
  {
    titulo: "Protocolo de Actuación ante Ciberacoso y Filtraciones",
    formato: "Guía Institucional (PDF)",
    peso: "2.1 MB",
    descripcion: "Ruta de atención inmediata para docentes, orientadores y directivos del C.E. Antonio Lemus Pérez con cadena de custodia."
  },
  {
    titulo: "Guía Didáctica de Netiqueta y Convivencia Digital",
    formato: "Manual de Apoyo (PDF)",
    peso: "1.2 MB",
    descripcion: "Normas de interacción sana en grupos de WhatsApp escolares, foros de discusión y aulas de clase."
  }
];

export const GuiasDocentes: React.FC = () => {
  const [gradoSeleccionado, setGradoSeleccionado] = useState<number>(0);
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setFaqAbierta(faqAbierta === idx ? null : idx);
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
    <main className="contenedor-principal">
      {/* Hero Unificado del Proyecto */}
      <HeaderProyecto
        categoria="Portal Pedagógico y Didáctico para el Docente"
        titulo="MANUAL DOCENTE DE"
        tituloResaltado="CIBERSEGURIDAD"
        descripcion="Estrategias metodológicas, articulación curricular escolar, protocolos de actuación inmediata y recursos didácticos para orientar la formación digital en el C.E. Antonio Lemus Pérez."
        imagenFondo={imgHeroCiber}
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Explorar Estrategias por Grado',
            href: '#estrategias-grado',
            icono: <ArrowDown size={18} />,
          },
          {
            label: 'Ver Guía para Padres',
            ruta: '/proyectos/ciberseguridad/guias/padres',
            icono: <ArrowRight size={20} />,
          },
        ]}
      />

      {/* 1. OBJETIVOS PEDAGÓGICOS Y EJES CURRICULARES */}
      <section id="ejes-pedagogicos" className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <Target size={28} /> Ejes Pedagógicos y Articulación Curricular
        </h2>
        <p className="texto-descriptivo">
          El manual de soporte de ciberseguridad está concebido para articularse como un eje transversal en las áreas de Informática, Orientación y Convivencia y Ciencias Sociales del Complejo Educativo Antonio Lemus Pérez.
        </p>

        <div className="cuadricula-2-columnas">
          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Eje Metodológico 01</span>
            <h3 className="titulo-tarjeta flex-centro"><ShieldCheck size={18} /> Enfoque Formativo y Preventivo</h3>
            <p className="texto-pasos">
              <strong>Propósito en el Aula:</strong> Trasladar el aprendizaje desde la memorización teórica hacia la vivencia cotidiana, capacitando a los jóvenes para identificar enlaces fraudulentos, contraseñas frágiles y engaños digitales antes de ser víctimas.
            </p>
            <p className="texto-pasos mt-2">
              <strong>Impacto Escolar:</strong> Los estudiantes adquieren criterio de alerta temprana y se convierten en multiplicadores de buenas prácticas dentro de sus hogares y salones de clase.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Eje Metodológico 02</span>
            <h3 className="titulo-tarjeta flex-centro"><BookOpen size={18} /> Transversalidad y Netiqueta</h3>
            <p className="texto-pasos">
              <strong>Propósito en el Aula:</strong> Vincular la seguridad informática con los derechos humanos en internet, la prevención del acoso escolar y la responsabilidad ciudadana al comunicarse en redes sociales y grupos escolares.
            </p>
            <p className="texto-pasos mt-2">
              <strong>Impacto Escolar:</strong> Disminuye los conflictos escolares generados en plataformas virtuales mediante acuerdos claros de convivencia digital y respeto mutuo.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Eje Metodológico 03</span>
            <h3 className="titulo-tarjeta flex-centro"><Users size={18} /> Autonomía y Evaluación Continua</h3>
            <p className="texto-pasos">
              <strong>Propósito en el Aula:</strong> Promover el autoaprendizaje guiado a través de los módulos interactivos, permitiendo diagnósticos formativos, cuestionarios prácticos y retroalimentación inmediata.
            </p>
            <p className="texto-pasos mt-2">
              <strong>Impacto Escolar:</strong> Cada estudiante avanza según su ritmo, facilitando al profesor el seguimiento del rendimiento individual y grupal sin sobrecarga administrativa.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Eje Metodológico 04</span>
            <h3 className="titulo-tarjeta flex-centro"><Sparkles size={18} /> Articulación Escuela - Familia</h3>
            <p className="texto-pasos">
              <strong>Propósito en el Aula:</strong> Tender un puente pedagógico con los representantes mediante la Guía Familiar de Ciberseguridad, asegurando coherencia entre las normas escolares y el uso doméstico de los dispositivos.
            </p>
            <p className="texto-pasos mt-2">
              <strong>Impacto Escolar:</strong> Fomenta un entorno de apoyo integral donde los padres conocen las mismas recomendaciones de protección digital que se enseñan en el liceo.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ESTRATEGIAS Y MATRIZ POR AÑO ESCOLAR */}
      <section id="estrategias-grado" className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion-azul flex-centro">
          <Layers className="icono-azul" size={28} />
          Estrategias Didácticas y Matriz Curricular por Año Escolar
        </h2>
        <p className="texto-informativo-azul">
          Seleccione el año de bachillerato correspondiente para consultar las orientaciones de clase, actividades prácticas sugeridas y criterios de evaluación aplicables:
        </p>

        {/* Selector de pestañas con estilo cibernético */}
        <div className="pestanas-grados-docente">
          {ESTRATEGIAS_POR_GRADO.map((est, idx) => (
            <button
              key={idx}
              type="button"
              className={`btn-pestana-docente ${gradoSeleccionado === idx ? 'activa' : ''}`}
              onClick={() => setGradoSeleccionado(idx)}
            >
              {est.grado}
            </button>
          ))}
        </div>

        {/* Tarjeta de detalle de estrategia con estilo de aviso premium */}
        <div className="tarjeta-aviso-premium alerta-azul mt-2">
          <div className="cabecera-estrategia">
            <span className="badge-grado-docente">{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].grado}</span>
            <h3 className="titulo-tarjeta">
              Módulo Temático: {ESTRATEGIAS_POR_GRADO[gradoSeleccionado].moduloTema}
            </h3>
          </div>

          <div className="cuadricula-2-columnas mt-2">
            <div className="tarjeta-paso">
              <span className="etiqueta-verde">Objetivo Pedagógico</span>
              <h4 className="flex-centro"><Sparkles size={18} className="icono-azul" /> Propósito Formativo</h4>
              <p className="texto-pasos">{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].objetivoPedagogico}</p>
            </div>

            <div className="tarjeta-paso">
              <span className="etiqueta-rosa">Dinámica de Aula</span>
              <h4 className="flex-centro"><Clock size={18} className="icono-ambar" /> Actividad Práctica Sugerida</h4>
              <p className="texto-pasos">{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].actividadSugerida}</p>
            </div>
          </div>

          <div className="bloque-estrategia-evaluacion mt-2">
            <h4 className="flex-centro"><CheckCircle2 size={18} className="icono-verde" /> Criterio de Evaluación y Entrega:</h4>
            <p className="texto-pasos">{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].evaluacion}</p>
          </div>
        </div>
      </section>

      {/* 3. PROTOCOLO INSTITUCIONAL ANTE INCIDENTES CIBERNÉTICOS */}
      <section id="protocolo-institucional" className="tarjeta-pro border-rojo seccion-espaciada">
        <h2 className="titulo-seccion-roja flex-centro">
          <AlertTriangle className="icono-rojo" size={28} />
          Protocolo Institucional de Atención Rápida para Docentes
        </h2>
        <p className="texto-informativo-rojo">
          Ruta de actuación obligatoria e inmediata ante situaciones de riesgo o incidentes cibernéticos detectados en la institución:
        </p>

        <div className="lista-protocolo">
          <div className="paso-protocolo">
            <span className="numero-critico">1</span>
            <div>
              <strong>Detección Temprana, Calma y Contención:</strong> Identificar el hecho (ciberbullying, filtración de claves, divulgación no autorizada de fotos o suplantación de identidad) sin juzgar ni recriminar al alumno afectado. Brindar seguridad emocional inmediata y garantizar un espacio libre de burlas.
            </div>
          </div>

          <div className="paso-protocolo">
            <span className="numero-critico">2</span>
            <div>
              <strong>Preservación Forense de Evidencias Digitales:</strong> Instruir que bajo ningún concepto se borren los mensajes, chats ni registros. Tomar capturas de pantalla completas donde se aprecien números de teléfono, nombres de usuario, enlaces, fecha, hora y contexto exacto de la agresión.
            </div>
          </div>

          <div className="paso-protocolo">
            <span className="numero-critico">3</span>
            <div>
              <strong>Notificación Confidencial a Instancias Directivas:</strong> Remitir el caso con máxima discreción al Departamento de Orientación y a la Coordinación Pedagógica del C.E. Antonio Lemus Pérez para coordinar la citación de representantes y el acompañamiento psicosocial correspondiente.
            </div>
          </div>

          <div className="paso-protocolo">
            <span className="numero-critico">4</span>
            <div>
              <strong>Intervención Didáctica Restaurativa:</strong> Desarrollar una sesión reflexiva con la sección estudiantil involucrada utilizando los módulos de ciberseguridad del liceo, reforzando la empatía, el marco legal y las consecuencias éticas de las conductas digitales nocivas.
            </div>
          </div>
        </div>
      </section>

      {/* 4. MARCO JURÍDICO Y DEBERES LEGALES DEL DOCENTE EN VENEZUELA */}
      <section id="marco-legal-docente" className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <Scale size={28} /> Marco Jurídico y Deberes Legales del Docente en Venezuela
        </h2>
        <p className="texto-descriptivo">
          Fundamentos legales vigentes que regulan la responsabilidad y el amparo de niños, niñas y adolescentes en entornos escolares y digitales:
        </p>

        <div className="cuadricula-2-columnas">
          <div className="tarjeta-aviso-premium alerta-azul">
            <h4>
              <Gavel className="icono-azul" size={20} /> LOPNNA (Artículos 65 y 68)
            </h4>
            <p>
              <strong>Protección del Honor y la Intimidad:</strong> Garantiza el derecho de los menores a ser protegidos contra la difusión no autorizada de informaciones o imágenes que menoscaben su dignidad o privacidad. El personal docente tiene la obligación de intervenir ante cualquier divulgación que vulnere este principio.
            </p>
            <div className="caja-video-tutorial mt-2">
              <PlayCircle size={16} /> <strong>Referencia legal:</strong> <code>Ley Orgánica para la Protección de Niños, Niñas y Adolescentes</code>
            </div>
          </div>

          <div className="tarjeta-aviso-premium alerta-naranja">
            <h4>
              <Lock className="icono-rojo" size={20} /> Ley Especial contra Delitos Informáticos
            </h4>
            <p>
              <strong>Delitos y Sanciones Claras:</strong> Tipifica y castiga severamente el acceso indebido (Art. 6), el espionaje y violación de privacidad de la data o correspondencia (Art. 20) y la difusión indebida de imágenes íntimas (Art. 22). Los docentes deben instruir que los actos digitales conllevan consecuencias penales reales.
            </p>
            <div className="caja-video-tutorial mt-2">
              <PlayCircle size={16} /> <strong>Referencia legal:</strong> <code>Gaceta Oficial N° 37.313 — Delitos Informáticos en Venezuela</code>
            </div>
          </div>

          <div className="tarjeta-aviso-premium alerta-esmeralda">
            <h4>
              <ShieldCheck className="icono-verde" size={20} /> Deber de Confidencialidad y Custodia
            </h4>
            <p>
              <strong>Manejo Ético de Casos:</strong> Todo docente que reciba una denuncia o evidencia de riesgo digital debe mantener estricta reserva sumaria, evitando reenviar el material o comentarlo en pasillos, entregándolo únicamente a las autoridades designadas del plantel educativo.
            </p>
          </div>

          <div className="tarjeta-aviso-premium alerta-ambar">
            <h4>
              <School className="icono-ambar" size={20} /> Ley Orgánica de Educación (LOE)
            </h4>
            <p>
              <strong>Formación Integral y Convivencia:</strong> Establece el deber del sistema educativo de educar en valores cívicos, uso responsable de las tecnologías de la información y la construcción de un clima de paz y respeto en toda la comunidad escolar.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MATERIALES Y RECURSOS DESCARGABLES PARA EL DOCENTE */}
      <section id="recursos-descargables" className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <Download size={28} /> Materiales y Recursos Didácticos de Apoyo
        </h2>
        <p className="texto-descriptivo">
          Instrumentos pedagógicos, modelos de clase y rúbricas estandarizadas listas para ser implementadas en las sesiones académicas del liceo:
        </p>

        <div className="cuadricula-2-columnas">
          {RECURSOS_DOCENTES.map((rec, idx) => (
            <div key={idx} className="tarjeta-paso">
              <span className="etiqueta-verde">{rec.formato} • {rec.peso}</span>
              <h3 className="titulo-tarjeta flex-centro"><Bookmark size={18} /> {rec.titulo}</h3>
              <p className="texto-pasos">{rec.descripcion}</p>
              <button
                type="button"
                className="btn-descargar-recurso"
                onClick={() => alert(`Descargando material: ${rec.titulo}`)}
              >
                <Download size={16} /> Descargar Instrumento Pedagógico
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PREGUNTAS FRECUENTES DE EDUCADORES */}
      <section id="faq-docentes" className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <HelpCircle size={28} /> Preguntas Frecuentes de Educadores
        </h2>
        <p className="texto-descriptivo">
          Orientaciones concretas para resolver las inquietudes más comunes en la enseñanza de ciberseguridad escolar:
        </p>

        <div className="lista-faq-docentes">
          <div className={`item-faq-docente ${faqAbierta === 0 ? 'activo' : ''}`} onClick={() => toggleFaq(0)}>
            <div className="pregunta-faq-docente">
              <h4>¿Cómo se articula el manual de ciberseguridad con el pensum de bachillerato?</h4>
              <ChevronDown size={20} className="flecha-faq-docente" />
            </div>
            {faqAbierta === 0 && (
              <div className="respuesta-faq-docente">
                <p>
                  El proyecto está diseñado como un eje transversal. Puede integrarse directamente en las clases de Informática y Computación, o abordarse como temas de debate y orientación grupal en las horas de Convivencia y Orientación Vocacional.
                </p>
              </div>
            )}
          </div>

          <div className={`item-faq-docente ${faqAbierta === 1 ? 'activo' : ''}`} onClick={() => toggleFaq(1)}>
            <div className="pregunta-faq-docente">
              <h4>¿Cómo evalúo el progreso del estudiante con estos módulos?</h4>
              <ChevronDown size={20} className="flecha-faq-docente" />
            </div>
            {faqAbierta === 1 && (
              <div className="respuesta-faq-docente">
                <p>
                  Cada módulo cuenta con cuestionarios interactivos de opción múltiple, retos de identificación de amenazas y casos prácticos. Los puntajes y actividades pueden ser ponderados directamente dentro del plan de evaluación académica del docente.
                </p>
              </div>
            )}
          </div>

          <div className={`item-faq-docente ${faqAbierta === 2 ? 'activo' : ''}`} onClick={() => toggleFaq(2)}>
            <div className="pregunta-faq-docente">
              <h4>¿Se requiere ser especialista técnico en Informática para impartir estos temas?</h4>
              <ChevronDown size={20} className="flecha-faq-docente" />
            </div>
            {faqAbierta === 2 && (
              <div className="respuesta-faq-docente">
                <p>
                  No. Todas las guías y lecciones fueron redactadas en lenguaje pedagógico claro y libre de tecnicismos excesivos, con ejemplos didácticos de la vida cotidiana para que cualquier docente pueda liderar la clase con seguridad.
                </p>
              </div>
            )}
          </div>

          <div className={`item-faq-docente ${faqAbierta === 3 ? 'activo' : ''}`} onClick={() => toggleFaq(3)}>
            <div className="pregunta-faq-docente">
              <h4>¿Qué debo hacer si un estudiante me confiesa ser víctima de sextorsión o acoso fuera del liceo?</h4>
              <ChevronDown size={20} className="flecha-faq-docente" />
            </div>
            {faqAbierta === 3 && (
              <div className="respuesta-faq-docente">
                <p>
                  Aplique el Protocolo Institucional: brinde contención emocional inmediata, solicite que no borre las evidencias digitales (mensajes, capturas, audios) y eleve el caso con total confidencialidad a la Dirección y al Departamento de Orientación para notificar a los representantes y activar las rutas legales pertinentes.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GuiasDocentes;
