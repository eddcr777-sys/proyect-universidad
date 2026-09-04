import React, { useState } from 'react';
import {
  BookOpen,
  School,
  Award,
  CheckCircle2,
  AlertTriangle,
  Users,
  Shield,
  FileText,
  HelpCircle,
  Sparkles,
  Download,
  Target,
  Clock,
  Layers,
  ChevronDown,
  ExternalLink,
  MessageSquare,
  Bookmark,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import HeaderProyecto from '../../components/comunes/HeaderProyecto/HeaderProyecto';
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
    objetivoPedagogico: "Fomentar el reconocimiento de la huella digital y el respeto a la privacidad personal.",
    actividadSugerida: "Taller 'Mitos vs Realidades de la Red': Análisis colaborativo de capturas simuladas e identificación de sobreexposición de datos.",
    evaluacion: "Creación colectiva de una infografía escolar sobre normas básicas de etiqueta digital (Netiqueta)."
  },
  {
    grado: "2do Año",
    moduloTema: "Protección de Cuentas y Contraseñas",
    objetivoPedagogico: "Desarrollar destrezas para la creación de credenciales robustas y el uso de autenticación de dos factores (2FA).",
    actividadSugerida: "Laboratorio práctico de contraseñas: Prueba de tiempo de descifrado con claves comunes vs frases de paso complejas.",
    evaluacion: "Checklist individual de hardening (fortalecimiento) de cuentas académicas y personales."
  },
  {
    grado: "3er Año",
    moduloTema: "Phishing y Ciberdelincuencia",
    objetivoPedagogico: "Identificar técnicas de ingeniería social, correos/mensajes tramposos y suplantación de identidad.",
    actividadSugerida: "Simulacro 'Detectives Digitales': Examen de 5 ejemplos de correos electrónicos para señalar indicadores de Phishing.",
    evaluacion: "Informe de diagnóstico de riesgo y presentación breve en grupos sobre vectores de ataque comunes."
  },
  {
    grado: "4to Año",
    moduloTema: "Software Pirata y Maliciosos",
    objetivoPedagogico: "Comprender los riesgos técnicos y legales asociados a descargas no oficiales y malware oculto.",
    actividadSugerida: "Debate guiado: Software Libre vs Software Pirata. Estudio de caso sobre troyanos y mineros de criptomonedas.",
    evaluacion: "Ensayo reflexivo o cuadro comparativo de licencias y alternativas open-source seguras."
  },
  {
    grado: "5to Año",
    moduloTema: "Auditorías Digitales y Ciudadanía Proactiva",
    objetivoPedagogico: "Capacitar en metodologías de autoevaluación cibernética institucional y ética profesional en TI.",
    actividadSugerida: "Proyecto Integrador: Auditoría simulada de seguridad en el entorno escolar o familiar y propuesta de mejoras.",
    evaluacion: "Defensa oral del informe de auditoría digital con recomendaciones de mitigación."
  }
];

const RECURSOS_DOCENTES = [
  {
    titulo: "Plan de Clase: Introducción a la Ciberseguridad (PDF)",
    formato: "Documento Pedagógico",
    peso: "1.4 MB",
    descripcion: "Estructura minuciosa de 45 minutos con dinámicas de inicio, desarrollo y cierre para 1ro y 2do año."
  },
  {
    titulo: "Rúbrica Institucional de Evaluación Digital",
    formato: "Plantilla Excel / PDF",
    peso: "850 KB",
    descripcion: "Criterios estandarizados para calificar presentaciones, talleres y participación en la plataforma Moodle."
  },
  {
    titulo: "Protocolo de Actuación ante Ciberacoso o Filtraciones",
    formato: "Guía Institucional",
    peso: "2.1 MB",
    descripcion: "Ruta de atención inmediata para docentes, orientadores y directivos del L.B. Antonio Lemus Pérez."
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
    <main className="guias-docentes-pagina">
      {/* Hero Unificado del Proyecto */}
      <HeaderProyecto
        categoria="Portal Educativo L.B. Antonio Lemus Pérez"
        titulo="GUÍA PEDAGÓGICA Y DIDÁCTICA PARA"
        tituloResaltado="DOCENTES"
        descripcion="Herramientas metodológicas, planes de lección por año escolar y protocolos institucionales diseñados para orientar a los profesores en la enseñanza efectiva de la ciberseguridad y la prevención digital."
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Ver Estrategias por Grado',
            href: '#estrategias-grado',
            icono: <ArrowDown size={18} />,
          },
          {
            label: 'Ver Justificación Sociotecnológica',
            ruta: '/proyectos/ciberseguridad/justificacion',
            icono: <ArrowRight size={20} />,
          },
        ]}
      />

      {/* 2. OBJETIVOS PEDAGÓGICOS E INTEGRACIÓN CON MOODLE */}
      <section className="seccion-objetivos-moodle">
        <div className="contenedor-docente">
          <div className="encabezado-seccion-docente">
            <Target size={32} className="icono-encabezado" />
            <h2>Integración Curricular con Moodle</h2>
            <p>
              El manual de soporte de ciberseguridad está articulado para integrarse directamente como complemento en las asignaturas de Informática, Orientación y Convivencia.
            </p>
          </div>

          <div className="grid-objetivos-docente">
            <div className="tarjeta-objetivo-docente">
              <span className="numero-paso-docente">01</span>
              <h3>Formativo y Preventivo</h3>
              <p>
                Trasladar el aprendizaje desde la teoría hacia la práctica cotidiana, desarrollando en los jóvenes el hábito de cuestionar enlaces, proteger claves e identificar ofertas engañosas.
              </p>
            </div>

            <div className="tarjeta-objetivo-docente">
              <span className="numero-paso-docente">02</span>
              <h3>Transversalidad Académica</h3>
              <p>
                Vincular la ciberseguridad con la ética digital, los derechos humanos en línea, la responsabilidad legal del uso de software y el pensamiento crítico frente a contenidos web.
              </p>
            </div>

            <div className="tarjeta-objetivo-docente">
              <span className="numero-paso-docente">03</span>
              <h3>Autonomía del Estudiante</h3>
              <p>
                Utilizar las lecciones interactivas para fomentar la autoevaluación, permitiendo que cada alumno avance a su ritmo y valide sus conocimientos mediante diagnósticos en Moodle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ESTRATEGIAS Y MATRIZ POR GRADO ESCOLAR */}
      <section id="estrategias-grado" className="seccion-estrategias-grados">
        <div className="contenedor-docente">
          <div className="encabezado-seccion-docente">
            <Layers size={32} className="icono-encabezado" />
            <h2>Estrategias Didácticas por Año Escolar</h2>
            <p>Selecciona el grado escolar para revisar las orientaciones de clase y criterios de evaluación sugeridos.</p>
          </div>

          {/* Selector de pestañas por grado */}
          <div className="pestanas-grados-docente">
            {ESTRATEGIAS_POR_GRADO.map((est, idx) => (
              <button
                key={idx}
                className={`btn-pestana-docente ${gradoSeleccionado === idx ? 'activa' : ''}`}
                onClick={() => setGradoSeleccionado(idx)}
              >
                {est.grado}
              </button>
            ))}
          </div>

          {/* Contenido dinámico del grado seleccionado */}
          <div className="tarjeta-detalle-estrategia">
            <div className="cabecera-estrategia">
              <span className="badge-grado-docente">{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].grado}</span>
              <h3>Módulo Central: {ESTRATEGIAS_POR_GRADO[gradoSeleccionado].moduloTema}</h3>
            </div>

            <div className="cuerpo-estrategia">
              <div className="bloque-estrategia">
                <h4><Sparkles size={18} /> Objetivo Pedagogíco:</h4>
                <p>{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].objetivoPedagogico}</p>
              </div>

              <div className="bloque-estrategia">
                <h4><Clock size={18} /> Actividad de Aula Recomendada:</h4>
                <p>{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].actividadSugerida}</p>
              </div>

              <div className="bloque-estrategia evaluacion">
                <h4><CheckCircle2 size={18} /> Criterio de Evaluación:</h4>
                <p>{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].evaluacion}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROTOCOLO INSTITUCIONAL ANTE INCIDENTES CIBERNÉTICOS ESCOLARES */}
      <section className="seccion-protocolo-institucional">
        <div className="contenedor-docente">
          <div className="caja-protocolo-destacada">
            <div className="encabezado-protocolo">
              <AlertTriangle size={36} className="icono-alerta-protocolo" />
              <div>
                <h2>Protocolo de Atención Rápida para Docentes</h2>
                <p>Pasos de actuación inmediata ante situaciones de riesgo detectadas en el liceo.</p>
              </div>
            </div>

            <div className="pasos-protocolo-grid">
              <div className="paso-protocolo-item">
                <span className="badge-num-paso">1</span>
                <h4>Detección y Contención</h4>
                <p>Identificar el hecho (ciberbullying, filtración de clave o grupo no autorizado) sin juzgar al alumno afectado y resguardar evidencias digitales (capturas).</p>
              </div>

              <div className="paso-protocolo-item">
                <span className="badge-num-paso">2</span>
                <h4>Notificación Interna</h4>
                <p>Informar al Departamento de Orientación y Coordinación Pedagógica del L.B. Antonio Lemus Pérez para coordinar el abordaje psicosocial.</p>
              </div>

              <div className="paso-protocolo-item">
                <span className="badge-num-paso">3</span>
                <h4>Acompañamiento y Taller</h4>
                <p>Realizar una sesión de refuerzo reflexivo con el grupo de clase involucrado utilizando los módulos temáticos de la plataforma.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RECURSOS Y DOCUMENTOS DESCARGABLES PARA EL DOCENTE */}
      <section className="seccion-recursos-docentes">
        <div className="contenedor-docente">
          <div className="encabezado-seccion-docente">
            <FileText size={32} className="icono-encabezado" />
            <h2>Materiales y Recursos de Apoyo</h2>
            <p>Descarga guías, modelos de examen y rúbricas listas para ser aplicadas en tus sesiones académicas.</p>
          </div>

          <div className="grid-recursos-docentes">
            {RECURSOS_DOCENTES.map((rec, idx) => (
              <div key={idx} className="tarjeta-recurso-docente">
                <div className="icono-recurso-wrapper">
                  <Bookmark size={24} />
                </div>
                <div className="info-recurso-docente">
                  <span className="formato-recurso">{rec.formato} • {rec.peso}</span>
                  <h4>{rec.titulo}</h4>
                  <p>{rec.descripcion}</p>
                </div>
                <button type="button" className="btn-descargar-recurso">
                  <Download size={16} /> Ver Documento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PREGUNTAS FRECUENTES PARA PROFESORES */}
      <section className="seccion-faq-docentes">
        <div className="contenedor-docente">
          <div className="encabezado-seccion-docente">
            <HelpCircle size={32} className="icono-encabezado" />
            <h2>Preguntas Frecuentes de Educadores</h2>
          </div>

          <div className="lista-faq-docentes">
            <div className={`item-faq-docente ${faqAbierta === 0 ? 'activo' : ''}`} onClick={() => toggleFaq(0)}>
              <div className="pregunta-faq-docente">
                <h4>¿Cómo evalúo el progreso del estudiante en la plataforma Moodle?</h4>
                <ChevronDown size={18} className="flecha-faq-docente" />
              </div>
              {faqAbierta === 0 && (
                <div className="respuesta-faq-docente">
                  <p>Cada módulo cuenta con cuestionarios interactivos de opción múltiple y casos de estudio. Los resultados se registran en el libro de calificaciones de Moodle para su posterior ponderación.</p>
                </div>
              )}
            </div>

            <div className={`item-faq-docente ${faqAbierta === 1 ? 'activo' : ''}`} onClick={() => toggleFaq(1)}>
              <div className="pregunta-faq-docente">
                <h4>¿Se requiere ser especialista en Informática para impartir estos temas?</h4>
                <ChevronDown size={18} className="flecha-faq-docente" />
              </div>
              {faqAbierta === 1 && (
                <div className="respuesta-faq-docente">
                  <p>No. Las lecciones han sido redactadas en un lenguaje claro, pedagógico y libre de tecnicismos excesivos, permitiendo que cualquier docente o tutor de grupo pueda guiarlas eficientemente.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GuiasDocentes;
