import React, { useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import HeaderProyecto from '../../components/comunes/HeaderProyecto/HeaderProyecto';
import imgHeroCiber from '../../assets/photo_2_2026-10-21_23-11-48.jpg';
import './Guias-padres.css';

interface EstrategiaAula {
  grado: string;
  moduloTema: string;
  objetivoPedagogico: string;
  actividadSugerida: string;
  evaluacion: string;
}

const ESTRATEGIAS_POR_GRADO: EstrategiaAula[] = [
  {
    grado: '1er Año',
    moduloTema: 'Redes Sociales e Identidad Digital',
    objetivoPedagogico:
      'Reconocer la huella digital y el valor de la privacidad en redes y plataformas.',
    actividadSugerida:
      "Taller 'Mitos vs Realidades': análisis de capturas simuladas e identificación de sobreexposición de datos.",
    evaluacion:
      'Infografía colectiva sobre netiqueta y privacidad en WhatsApp / Instagram.',
  },
  {
    grado: '2do Año',
    moduloTema: 'Protección de Cuentas y Contraseñas',
    objetivoPedagogico:
      'Desarrollar destrezas para crear credenciales robustas y adoptar la autenticación en dos pasos (2FA).',
    actividadSugerida:
      'Laboratorio práctico: comparar tiempo de descifrado entre claves comunes y frases de paso complejas.',
    evaluacion:
      'Checklist individual de fortalecimiento de cuentas académicas, correo institucional y redes personales.',
  },
  {
    grado: '3er Año',
    moduloTema: 'Phishing, Smishing y Ciberdelincuencia',
    objetivoPedagogico:
      'Identificar técnicas de ingeniería social, suplantación de identidad y estafas bancarias.',
    actividadSugerida:
      "Simulacro 'Detectives Digitales': analizar 5 correos y SMS señalando indicadores de fraude.",
    evaluacion:
      'Informe de diagnóstico de riesgo por equipos sobre vectores de ataque comunes en Venezuela.',
  },
  {
    grado: '4to Año',
    moduloTema: 'Software Pirata, Malware y Responsabilidad Legal',
    objetivoPedagogico:
      'Comprender los riesgos técnicos y legales de descargas no oficiales, troyanos y spyware.',
    actividadSugerida:
      'Debate: Software Libre vs Software Pirata, con estudio de caso sobre troyanos en activadores.',
    evaluacion:
      'Cuadro comparativo de licencias y guía de alternativas de software libre y seguro.',
  },
  {
    grado: '5to Año',
    moduloTema: 'Auditorías Digitales y Ciudadanía Ética',
    objetivoPedagogico:
      'Capacitar en autoevaluación cibernética institucional, protección comunitaria y ética profesional en TI.',
    actividadSugerida:
      'Proyecto Integrador: auditoría simulada de seguridad escolar o familiar con propuesta de mitigación.',
    evaluacion:
      'Defensa oral del informe de auditoría con recomendaciones para la comunidad educativa.',
  },
];

const OBJETIVOS_GUIA = [
  {
    titulo: 'Estudiantes que detectan engaños',
    texto:
      'Que reconozcan un phishing, un SMS falso o una estafa de WhatsApp antes de caer.',
  },
  {
    titulo: 'Cuentas académicas blindadas',
    texto:
      'Que usen contraseñas fuertes y 2FA en correo institucional, redes y banca.',
  },
  {
    titulo: 'Un salón con protocolo claro',
    texto:
      'Que sepas qué hacer, a quién avisar y cómo preservar evidencias si surge un caso.',
  },
  {
    titulo: 'Familias alineadas con la escuela',
    texto:
      'Que los representantes manejen las mismas reglas y refuercen lo aprendido en casa.',
  },
];

const PASOS_USO = [
  {
    titulo: 'Ubica tu año escolar',
    detalle:
      'En la sección "Estrategias" selecciona el año que enseñas. Cada grado tiene un módulo asignado con enfoque propio.',
  },
  {
    titulo: 'Toma la actividad propuesta',
    detalle:
      'Cada módulo incluye una dinámica lista para aula con un objetivo claro. Puedes adaptarla a tu estilo y tiempo disponible.',
  },
  {
    titulo: 'Usa el criterio de evaluación',
    detalle:
      'El criterio sugerido puede integrarse a tu planilla de evaluación existente, sin modificar la planificación oficial.',
  },
  {
    titulo: 'Aplica el protocolo si aparece un caso real',
    detalle:
      'Si un incidente ocurre en tu salón, la ruta institucional te indica paso a paso qué hacer y a quién notificar.',
  },
];

const PROTOCOLO = [
  {
    titulo: 'Detección temprana y contención',
    detalle:
      'Identifica el hecho (ciberbullying, filtración de claves, suplantación) sin juzgar al alumno afectado. Brinda seguridad emocional inmediata y garantiza un espacio libre de burlas.',
  },
  {
    titulo: 'Preservación de evidencias',
    detalle:
      'Indica que bajo ningún concepto se borren mensajes o chats. Toma capturas completas donde se aprecien números de teléfono, usuarios, enlaces, fecha y hora exactos.',
  },
  {
    titulo: 'Notificación a instancias directivas',
    detalle:
      'Remite el caso con máxima discreción al Departamento de Orientación y a la Coordinación Pedagógica para coordinar la citación de representantes y el acompañamiento psicosocial.',
  },
  {
    titulo: 'Intervención didáctica restaurativa',
    detalle:
      'Desarrolla una sesión reflexiva con la sección estudiantil involucrada usando los módulos del proyecto, reforzando la empatía, el marco legal y las consecuencias éticas.',
  },
];

const MARCO_LEGAL = [
  {
    titulo: 'LOPNNA — Protección de la Privacidad',
    descripcion:
      'Garantiza el derecho de los menores a ser protegidos contra la difusión no autorizada de informaciones o imágenes que menoscaben su dignidad o privacidad. El personal docente tiene la obligación de intervenir ante cualquier divulgación que vulnere este principio.',
  },
  {
    titulo: 'Ley Especial contra Delitos Informáticos',
    descripcion:
      'Tipifica y castiga el acceso indebido a sistemas, la violación de privacidad de datos y la difusión indebida de imágenes íntimas. Los docentes deben instruir que los actos digitales conllevan consecuencias penales reales.',
  },
  {
    titulo: 'Deber de Confidencialidad',
    descripcion:
      'Todo docente que reciba una denuncia o evidencia de riesgo digital debe mantener estricta reserva, evitando reenviar el material o comentarlo en pasillos, entregándolo únicamente a las autoridades designadas del plantel.',
  },
  {
    titulo: 'Ley Orgánica de Educación (LOE)',
    descripcion:
      'Establece el deber del sistema educativo de formar en valores cívicos, uso responsable de las tecnologías de la información y construir un clima de paz y respeto en toda la comunidad escolar.',
  },
];

const FAQ_DOCENTES = [
  {
    pregunta: '¿Cómo se articula el manual con el pensum de bachillerato?',
    respuesta:
      'El proyecto funciona como eje transversal: puede integrarse en Informática, Convivencia y Orientación, o Ciencias Sociales sin modificar la planificación oficial.',
  },
  {
    pregunta: '¿Cómo evalúo el progreso del estudiante con estos módulos?',
    respuesta:
      'Cada módulo incluye cuestionarios interactivos y retos de identificación de amenazas. Los puntajes pueden ponderarse dentro del plan de evaluación del docente.',
  },
  {
    pregunta: '¿Qué hago si un estudiante reporta sextorsión o ciberacoso fuera del liceo?',
    respuesta:
      'Aplique el Protocolo Institucional: contención emocional, no borrar evidencias digitales, y elevar el caso con total confidencialidad a la Dirección y al Departamento de Orientación.',
  },
];

const SECCIONES_NAV = [
  { id: 'proposito', label: 'Propósito' },
  { id: 'como-usar', label: 'Cómo usar' },
  { id: 'estrategias-grado', label: 'Estrategias' },
  { id: 'protocolo-institucional', label: 'Protocolo' },
  { id: 'marco-legal-docente', label: 'Marco legal' },
  { id: 'faq-docentes', label: 'FAQ' },
];

const GuiasDocentes: React.FC = () => {
  const [gradoSeleccionado, setGradoSeleccionado] = useState<number>(0);
  const [seccionActiva, setSeccionActiva] = useState<string>('proposito');
  const estrategiaActual = ESTRATEGIAS_POR_GRADO[gradoSeleccionado];

  const scrollASeccion = (id: string) => {
    setSeccionActiva(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
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
    <main className="portal-modulo-editorial">
      <HeaderProyecto
        categoria="Portal Pedagógico para el Docente"
        titulo="MANUAL DOCENTE DE"
        tituloResaltado="CIBERSEGURIDAD"
        descripcion="Una guía práctica para que tus estudiantes reconozcan engaños digitales antes de caer, y sepas qué hacer si un caso real aparece en tu salón."
        imagenFondo={imgHeroCiber}
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Ver Estrategia de mi Grado',
            href: '#estrategias-grado',
            icono: <ArrowDown size={16} />,
          },
          {
            label: 'Ver Guía para Padres',
            ruta: '/proyectos/ciberseguridad/guias/padres',
            icono: <ArrowRight size={16} />,
          },
        ]}
      />

      {/* SUB-BARRA DE NAVEGACIÓN POR SECCIONES */}
      <div className="subnav-grados-editorial">
        <div className="contenedor-editorial">
          <div className="subnav-grados-inner">
            <span className="subnav-titulo">Secciones</span>
            <div className="subnav-pestanas">
              {SECCIONES_NAV.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`subnav-pestana-item ${
                    seccionActiva === s.id ? 'activa' : ''
                  }`}
                  onClick={() => scrollASeccion(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CUERPO EDITORIAL */}
      <div className="cuerpo-editorial-fondo">
        <div className="contenedor-editorial">
          <div className="cuerpo-editorial-layout">
            <article className="articulo-editorial-principal">
              {/* 01 — PROPÓSITO */}
              <section id="proposito" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">01 — Propósito</span>
                <h2 className="seccion-titulo-editorial">
                  ¿Para qué sirve esta guía?
                </h2>

                <div className="bloque-lede">
                  <p>
                    Esta guía no busca convertirte en experto en ciberseguridad.
                    Busca darte tres cosas concretas: que tus estudiantes
                    reconozcan un engaño digital antes de caer en él, que sepas
                    cómo enseñarlo en clase sin salir del pensum, y que tengas
                    un protocolo claro si un caso real aparece en tu salón.
                  </p>
                </div>

                <h3 className="subtitulo-editorial-medio">
                  Qué lograrás con tus estudiantes
                </h3>
                <div className="bloque-objetivos">
                  {OBJETIVOS_GUIA.map((obj, idx) => (
                    <div key={idx} className="objetivo-card">
                      <span className="objetivo-card-num">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h4 className="objetivo-card-titulo">{obj.titulo}</h4>
                      <p className="objetivo-card-texto">{obj.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 02 — CÓMO USAR */}
              <section id="como-usar" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">02 — Puesta en marcha</span>
                <h2 className="seccion-titulo-editorial">
                  Cómo usar esta guía en 4 pasos
                </h2>
                <p className="parrafo-editorial">
                  No necesitas capacitación técnica previa. La guía está pensada
                  para que cualquier docente pueda llevarla al aula desde la
                  primera sesión.
                </p>
                <ol className="lista-protocolos-editorial">
                  {PASOS_USO.map((paso, idx) => (
                    <li key={idx} className="item-protocolo-editorial">
                      <span className="protocolo-numero">{idx + 1}</span>
                      <div className="protocolo-texto">
                        <strong>{paso.titulo}.</strong> {paso.detalle}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* 03 — ESTRATEGIAS POR AÑO */}
              <section id="estrategias-grado" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">03 — Contenido por año</span>
                <h2 className="seccion-titulo-editorial">
                  Estrategia didáctica de tu año escolar
                </h2>
                <p className="parrafo-editorial">
                  Selecciona el año que enseñas para ver el módulo asignado, la
                  actividad práctica sugerida y el criterio de evaluación.
                </p>

                <div className="pestanas-grado-inline">
                  {ESTRATEGIAS_POR_GRADO.map((est, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`btn-grado-inline ${
                        gradoSeleccionado === idx ? 'activa' : ''
                      }`}
                      onClick={() => setGradoSeleccionado(idx)}
                    >
                      {est.grado}
                    </button>
                  ))}
                </div>

                <div className="tarjeta-estrategia-activa">
                  <h3 className="subtitulo-editorial-medio" style={{ marginTop: 0 }}>
                    {estrategiaActual.moduloTema}
                  </h3>

                  <div className="bloque-cita-editorial">
                    <h4 className="bloque-cita-titulo">Objetivo pedagógico</h4>
                    <p className="bloque-cita-texto">
                      {estrategiaActual.objetivoPedagogico}
                    </p>
                  </div>

                  <h4 className="subtitulo-editorial-medio">Actividad práctica</h4>
                  <p className="parrafo-editorial">
                    {estrategiaActual.actividadSugerida}
                  </p>

                  <h4 className="subtitulo-editorial-medio">
                    Criterio de evaluación
                  </h4>
                  <p className="parrafo-editorial" style={{ marginBottom: 0 }}>
                    {estrategiaActual.evaluacion}
                  </p>
                </div>
              </section>

              {/* 04 — PROTOCOLO */}
              <section id="protocolo-institucional" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">04 — Si algo pasa</span>
                <h2 className="seccion-titulo-editorial">
                  Protocolo institucional ante un incidente real
                </h2>
                <p className="parrafo-editorial">
                  Si detectas un caso de ciberacoso, filtración de claves o
                  suplantación en tu salón, esta es la ruta obligatoria e
                  inmediata. Aplica en todos los años escolares.
                </p>
                <ol className="lista-protocolos-editorial">
                  {PROTOCOLO.map((paso, idx) => (
                    <li key={idx} className="item-protocolo-editorial">
                      <span className="protocolo-numero">{idx + 1}</span>
                      <div className="protocolo-texto">
                        <strong>{paso.titulo}:</strong> {paso.detalle}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* 05 — MARCO LEGAL */}
              <section id="marco-legal-docente" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">05 — Respaldo legal</span>
                <h2 className="seccion-titulo-editorial">
                  Marco jurídico que respalda tu actuación
                </h2>
                <p className="parrafo-editorial">
                  Cuatro instrumentos legales vigentes en Venezuela que regulan
                  la protección de menores, la responsabilidad docente y las
                  consecuencias penales de los delitos digitales.
                </p>
                <div className="lista-glosario-editorial">
                  {MARCO_LEGAL.map((item, idx) => (
                    <div key={idx} className="termino-editorial-item">
                      <div className="termino-editorial-encabezado">
                        <span className="termino-editorial-nombre">
                          {item.titulo}
                        </span>
                      </div>
                      <p className="termino-editorial-def">{item.descripcion}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 06 — FAQ */}
              <section id="faq-docentes" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">06 — Consultas frecuentes</span>
                <h2 className="seccion-titulo-editorial">
                  Preguntas frecuentes de educadores
                </h2>
                <p className="parrafo-editorial">
                  Las dudas más comunes al momento de implementar el manual en
                  el aula.
                </p>
                <div className="lista-glosario-editorial">
                  {FAQ_DOCENTES.map((faq, idx) => (
                    <div key={idx} className="termino-editorial-item">
                      <div className="termino-editorial-encabezado">
                        <span className="termino-editorial-nombre">
                          {faq.pregunta}
                        </span>
                      </div>
                      <p className="termino-editorial-def">{faq.respuesta}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CIERRE */}
              <div className="caja-cierre-editorial">
                <h3 className="cierre-editorial-titulo">
                  La ciberseguridad se enseña con el ejemplo
                </h3>
                <p className="cierre-editorial-descripcion">
                  Cada sesión que dediques a este tema no solo protege a tus
                  estudiantes: multiplica el mensaje hacia sus familias y su
                  comunidad. Coordina con la Guía Familiar para reforzar las
                  mismas reglas en casa.
                </p>
                <div className="cierre-editorial-botones">
                  <a
                    href="/proyectos/ciberseguridad/guias/padres"
                    className="boton-editorial-enlace1"
                  >
                    Ver Guía para Padres
                  </a>
                  <button
                    type="button"
                    className="boton-editorial-enlace1"
                    onClick={() => scrollASeccion('estrategias-grado')}
                  >
                    Volver a mi estrategia
                  </button>
                </div>
              </div>
            </article>

            {/* FICHA TÉCNICA LATERAL */}
            <aside className="aside-editorial-resumen">
              <div className="card-resumen-editorial">
                <h3 className="card-resumen-titulo">Ficha Técnica</h3>
                <dl className="resumen-lista-definiciones">
                  <div className="resumen-fila">
                    <dt>Dirigido a</dt>
                    <dd>Docentes de bachillerato</dd>
                  </div>
                  <div className="resumen-fila">
                    <dt>Cobertura</dt>
                    <dd>1er a 5to año</dd>
                  </div>
                  <div className="resumen-fila">
                    <dt>Duración por sesión</dt>
                    <dd>45 – 90 minutos</dd>
                  </div>
                  <div className="resumen-fila">
                    <dt>Áreas vinculadas</dt>
                    <dd>Informática · Orientación · Ciencias Sociales</dd>
                  </div>
                  <div className="resumen-fila">
                    <dt>Marco normativo</dt>
                    <dd>LOPNNA · LOE · Ley Delitos Informáticos</dd>
                  </div>
                </dl>
               
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuiasDocentes;