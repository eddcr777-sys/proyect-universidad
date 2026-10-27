import React, { useState } from 'react';
import {
  BookOpen, School, CheckCircle2, AlertTriangle, Users, ShieldCheck,
  Sparkles, Target, Clock, Layers, ChevronDown, ArrowRight, ArrowDown,
  Scale, Gavel, Lock, HelpCircle
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
    objetivoPedagogico: "Reconocer la huella digital y el valor de la privacidad en redes y plataformas.",
    actividadSugerida: "Taller 'Mitos vs Realidades': análisis de capturas simuladas e identificación de sobreexposición de datos.",
    evaluacion: "Infografía colectiva sobre netiqueta y privacidad en WhatsApp/Instagram."
  },
  {
    grado: "2do Año",
    moduloTema: "Protección de Cuentas y Contraseñas",
    objetivoPedagogico: "Desarrollar destrezas para crear credenciales robustas y adoptar la autenticación en dos pasos (2FA).",
    actividadSugerida: "Laboratorio práctico: comparar tiempo de descifrado entre claves comunes y frases de paso complejas.",
    evaluacion: "Checklist individual de fortalecimiento de cuentas académicas, correo institucional y redes personales."
  },
  {
    grado: "3er Año",
    moduloTema: "Phishing, Smishing y Ciberdelincuencia",
    objetivoPedagogico: "Identificar técnicas de ingeniería social, suplantación de identidad y estafas bancarias.",
    actividadSugerida: "Simulacro 'Detectives Digitales': analizar 5 correos y SMS señalando indicadores de fraude.",
    evaluacion: "Informe de diagnóstico de riesgo por equipos sobre vectores de ataque comunes en Venezuela."
  },
  {
    grado: "4to Año",
    moduloTema: "Software Pirata, Malware y Responsabilidad Legal",
    objetivoPedagogico: "Comprender los riesgos técnicos y legales de descargas no oficiales, troyanos y spyware.",
    actividadSugerida: "Debate: Software Libre vs Software Pirata, con estudio de caso sobre troyanos en activadores.",
    evaluacion: "Cuadro comparativo de licencias y guía de alternativas de software libre y seguro."
  },
  {
    grado: "5to Año",
    moduloTema: "Auditorías Digitales y Ciudadanía Ética",
    objetivoPedagogico: "Capacitar en autoevaluación cibernética institucional, protección comunitaria y ética profesional en TI.",
    actividadSugerida: "Proyecto Integrador: auditoría simulada de seguridad escolar o familiar con propuesta de mitigación.",
    evaluacion: "Defensa oral del informe de auditoría con recomendaciones para la comunidad educativa."
  }
];

const FAQ_DOCENTES = [
  {
    pregunta: "¿Cómo se articula el manual con el pensum de bachillerato?",
    respuesta: "El proyecto funciona como eje transversal: puede integrarse en Informática, Convivencia y Orientación, o Ciencias Sociales sin modificar la planificación oficial."
  },
  {
    pregunta: "¿Cómo evalúo el progreso del estudiante con estos módulos?",
    respuesta: "Cada módulo incluye cuestionarios interactivos y retos de identificación de amenazas. Los puntajes pueden ponderarse dentro del plan de evaluación del docente."
  },
  {
    pregunta: "¿Qué hago si un estudiante reporta sextorsión o ciberacoso fuera del liceo?",
    respuesta: "Aplique el Protocolo Institucional: contención emocional, no borrar evidencias digitales, y elevar el caso con total confidencialidad a la Dirección y al Departamento de Orientación."
  }
];

export const GuiasDocentes: React.FC = () => {
  const [gradoSeleccionado, setGradoSeleccionado] = useState<number>(0);
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setFaqAbierta(faqAbierta === idx ? null : idx);

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
      <HeaderProyecto
        categoria="Portal Pedagógico para el Docente"
        titulo="MANUAL DOCENTE DE"
        tituloResaltado="CIBERSEGURIDAD"
        descripcion="Estrategias metodológicas, protocolos de actuación y recursos didácticos para orientar la formación digital en el C.E. Antonio Lemus Pérez."
        imagenFondo={imgHeroCiber}
        enlacesSubNav={enlacesSubNav}
        acciones={[
          { label: 'Explorar Estrategias por Grado', href: '#estrategias-grado', icono: <ArrowDown size={18} /> },
          { label: 'Ver Guía para Padres', ruta: '/proyectos/ciberseguridad/guias/padres', icono: <ArrowRight size={20} /> },
        ]}
      />

      {/* 1. EJES PEDAGÓGICOS */}
      <section id="ejes-pedagogicos" className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <Target size={28} /> Ejes Pedagógicos y Articulación Curricular
        </h2>
        <p className="texto-descriptivo">
          El manual está concebido como eje transversal en las áreas de Informática, Orientación y Convivencia, y Ciencias Sociales del Complejo Educativo Antonio Lemus Pérez.
        </p>

        <div className="cuadricula-2-columnas">
          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Eje 01</span>
            <h3 className="titulo-tarjeta flex-centro"><ShieldCheck size={18} /> Enfoque Formativo y Preventivo</h3>
            <p className="texto-pasos">
              Trasladar el aprendizaje hacia la vivencia cotidiana, capacitando a los jóvenes para identificar enlaces fraudulentos, contraseñas frágiles y engaños digitales antes de ser víctimas. Los estudiantes se convierten en multiplicadores de buenas prácticas en sus hogares y salones.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Eje 02</span>
            <h3 className="titulo-tarjeta flex-centro"><BookOpen size={18} /> Transversalidad y Netiqueta</h3>
            <p className="texto-pasos">
              Vincular la seguridad informática con los derechos humanos en internet, la prevención del acoso escolar y la responsabilidad ciudadana al comunicarse en redes y grupos escolares. Esto reduce los conflictos virtuales mediante acuerdos claros de convivencia.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Eje 03</span>
            <h3 className="titulo-tarjeta flex-centro"><Users size={18} /> Autonomía y Evaluación Continua</h3>
            <p className="texto-pasos">
              Promover el autoaprendizaje guiado a través de módulos interactivos con diagnósticos y retroalimentación inmediata. Cada estudiante avanza según su ritmo, facilitando el seguimiento individual y grupal.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Eje 04</span>
            <h3 className="titulo-tarjeta flex-centro"><Sparkles size={18} /> Articulación Escuela - Familia</h3>
            <p className="texto-pasos">
              Tender un puente pedagógico con los representantes mediante la Guía Familiar, asegurando coherencia entre las normas escolares y el uso doméstico de los dispositivos. Los padres manejan las mismas recomendaciones de protección digital.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ESTRATEGIAS POR GRADO */}
      <section id="estrategias-grado" className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <Layers size={28} /> Estrategias Didácticas por Año Escolar
        </h2>
        <p className="texto-descriptivo">
          Seleccione el año de bachillerato para consultar orientaciones de clase, actividades prácticas y criterios de evaluación:
        </p>

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

        <div className="tarjeta-aviso-premium alerta-azul mt-2">
          <div className="cabecera-estrategia">
            <span className="badge-grado-docente">{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].grado}</span>
            <h3 className="titulo-tarjeta">Módulo: {ESTRATEGIAS_POR_GRADO[gradoSeleccionado].moduloTema}</h3>
          </div>

          <div className="cuadricula-2-columnas mt-2">
            <div className="tarjeta-paso">
              <span className="etiqueta-verde">Objetivo Pedagógico</span>
              <h4 className="flex-centro"><Sparkles size={18} /> Propósito Formativo</h4>
              <p className="texto-pasos">{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].objetivoPedagogico}</p>
            </div>

            <div className="tarjeta-paso">
              <span className="etiqueta-rosa">Dinámica de Aula</span>
              <h4 className="flex-centro"><Clock size={18} /> Actividad Práctica</h4>
              <p className="texto-pasos">{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].actividadSugerida}</p>
            </div>
          </div>

          <div className="bloque-estrategia-evaluacion mt-2">
            <h4 className="flex-centro"><CheckCircle2 size={18} /> Criterio de Evaluación:</h4>
            <p className="texto-pasos">{ESTRATEGIAS_POR_GRADO[gradoSeleccionado].evaluacion}</p>
          </div>
        </div>
      </section>

      {/* 3. PROTOCOLO INSTITUCIONAL */}
      <section id="protocolo-institucional" className="tarjeta-pro border-rojo seccion-espaciada">
        <h2 className="titulo-seccion-roja flex-centro">
          <AlertTriangle size={28} /> Protocolo Institucional de Atención Rápida
        </h2>
        <p className="texto-informativo-rojo">
          Ruta de actuación obligatoria e inmediata ante incidentes cibernéticos detectados en la institución:
        </p>

        <div className="lista-protocolo">
          <div className="paso-protocolo">
            <span className="numero-critico">1</span>
            <div>
              <strong>Detección Temprana y Contención:</strong> Identificar el hecho (ciberbullying, filtración de claves, suplantación) sin juzgar al alumno afectado. Brindar seguridad emocional inmediata y garantizar un espacio libre de burlas.
            </div>
          </div>
          <div className="paso-protocolo">
            <span className="numero-critico">2</span>
            <div>
              <strong>Preservación de Evidencias:</strong> Instruir que bajo ningún concepto se borren mensajes o chats. Tomar capturas completas donde se aprecien números de teléfono, usuarios, enlaces, fecha y hora exactos.
            </div>
          </div>
          <div className="paso-protocolo">
            <span className="numero-critico">3</span>
            <div>
              <strong>Notificación a Instancias Directivas:</strong> Remitir el caso con máxima discreción al Departamento de Orientación y a la Coordinación Pedagógica para coordinar la citación de representantes y el acompañamiento psicosocial.
            </div>
          </div>
          <div className="paso-protocolo">
            <span className="numero-critico">4</span>
            <div>
              <strong>Intervención Didáctica Restaurativa:</strong> Desarrollar una sesión reflexiva con la sección estudiantil involucrada usando los módulos del proyecto, reforzando la empatía, el marco legal y las consecuencias éticas.
            </div>
          </div>
        </div>
      </section>

      {/* 4. MARCO JURÍDICO */}
      <section id="marco-legal-docente" className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <Scale size={28} /> Marco Jurídico y Deberes Legales en Venezuela
        </h2>
        <p className="texto-descriptivo">
          Fundamentos legales vigentes que regulan la responsabilidad y el amparo de niños, niñas y adolescentes en entornos escolares y digitales:
        </p>

        <div className="cuadricula-2-columnas">
          <div className="tarjeta-aviso-premium alerta-azul">
            <h4><Gavel size={20} /> LOPNNA — Protección de la Privacidad</h4>
            <p>
              Garantiza el derecho de los menores a ser protegidos contra la difusión no autorizada de informaciones o imágenes que menoscaben su dignidad o privacidad. El personal docente tiene la obligación de intervenir ante cualquier divulgación que vulnere este principio.
            </p>
          </div>

          <div className="tarjeta-aviso-premium alerta-naranja">
            <h4><Lock size={20} /> Ley Especial contra Delitos Informáticos</h4>
            <p>
              Tipifica y castiga el acceso indebido a sistemas, la violación de privacidad de datos y la difusión indebida de imágenes íntimas. Los docentes deben instruir que los actos digitales conllevan consecuencias penales reales.
            </p>
          </div>

          <div className="tarjeta-aviso-premium alerta-esmeralda">
            <h4><ShieldCheck size={20} /> Deber de Confidencialidad</h4>
            <p>
              Todo docente que reciba una denuncia o evidencia de riesgo digital debe mantener estricta reserva, evitando reenviar el material o comentarlo en pasillos, entregándolo únicamente a las autoridades designadas del plantel.
            </p>
          </div>

          <div className="tarjeta-aviso-premium alerta-ambar">
            <h4><School size={20} /> Ley Orgánica de Educación (LOE)</h4>
            <p>
              Establece el deber del sistema educativo de formar en valores cívicos, uso responsable de las tecnologías de la información y construir un clima de paz y respeto en toda la comunidad escolar.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PREGUNTAS FRECUENTES */}
      <section id="faq-docentes" className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <HelpCircle size={28} /> Preguntas Frecuentes de Educadores
        </h2>
        <p className="texto-descriptivo">
          Orientaciones para resolver las inquietudes más comunes al enseñar ciberseguridad escolar:
        </p>

        <div className="lista-faq-docentes">
          {FAQ_DOCENTES.map((faq, idx) => (
            <div
              key={idx}
              className={`item-faq-docente ${faqAbierta === idx ? 'activo' : ''}`}
              onClick={() => toggleFaq(idx)}
            >
              <div className="pregunta-faq-docente">
                <h4>{faq.pregunta}</h4>
                <ChevronDown size={20} className="flecha-faq-docente" />
              </div>
              {faqAbierta === idx && (
                <div className="respuesta-faq-docente">
                  <p>{faq.respuesta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GuiasDocentes;