import React from 'react';
import {
  Share2,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Award,
  Video,
  ListChecks,
  Briefcase,
  Lock,
  Globe
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { useRedesSociales5to, HABITOS_REDES_5TO } from '../../../../hooks/HooksRedesSociales/useRedesSociales5to';
import './RedesSociales5to.css';

export const RedesSociales5to: React.FC = () => {
  const {
    perfilesAuditoria,
    respuestasPerfil,
    evaluarPerfil,
    escenarios,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos,
    preguntasQuiz,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  } = useRedesSociales5to();

  return (
    <main className="pagina-modulo-redes-5to">
      <HeaderModulo
        grado="5to"
        modulo="5: Marca Personal y Liderazgo Digital"
        titulo="Redes Sociales como Herramienta Profesional"
        subTitulo="Aprende a construir una marca personal sólida, respetar políticas organizacionales y liderar buenas prácticas digitales."
        categoria="Redes Sociales e Identidad"
        tiempoEstimado="65 min"
        icono={<Briefcase size={36} />}
      />

      <div className="contenedor-redes-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Marca Personal, Políticas y Cumplimiento</h2>
          </div>
          <p className="texto-lectura-modulo">
            Tus redes sociales ya no son solo para amigos: son tu <strong>carta de presentación</strong>. Universidades, becas y empleadores revisan tu huella digital. Además, cuando formas parte de una organización (liceo, trabajo), debes cumplir <strong>políticas de uso</strong> que protegen la imagen institucional y los datos de todos.
          </p>

          <div className="grid-pilares-redes">
            <div className="caja-pilar-redes">
              <Briefcase className="icono-pilar azul" size={28} />
              <h3>Marca Personal Profesional</h3>
              <p>Construye un perfil que destaque tus logros, habilidades y valores. LinkedIn es una herramienta clave para tu futuro.</p>
            </div>

            <div className="caja-pilar-redes">
              <Lock className="icono-pilar rojo" size={28} />
              <h3>Políticas de Uso</h3>
              <p>Las organizaciones regulan qué se puede publicar para evitar fugas de información y daños reputacionales.</p>
            </div>

            <div className="caja-pilar-redes">
              <Globe className="icono-pilar verde" size={28} />
              <h3>Cumplimiento Normativo</h3>
              <p>Normas como ISO 27001 o leyes de protección de datos exigen cuidar la información sensible que se comparte.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: AUDITORÍA DE PERFILES */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. Auditoría de Perfiles: ¿Cumple o No Cumple?</h2>
          </div>
          <p className="subtitulo-bloque">
            Analiza cada perfil y decide si <strong>cumple</strong> con las políticas de uso responsable o <strong>no cumple</strong>:
          </p>

          <div className="perfiles-auditoria-lista">
            {perfilesAuditoria.map(perfil => (
              <div key={perfil.id} className="perfil-card">
                <h3 className="perfil-nombre">{perfil.nombre}</h3>
                <p className="perfil-descripcion">{perfil.descripcion}</p>
                <div className="acciones-decision">
                  <button
                    className={`btn-decision seguro ${respuestasPerfil[perfil.id] === true ? 'seleccionado' : ''}`}
                    onClick={() => evaluarPerfil(perfil.id, true)}
                  >
                    <ShieldCheck size={18} /> Cumple
                  </button>
                  <button
                    className={`btn-decision phishing ${respuestasPerfil[perfil.id] === false ? 'seleccionado' : ''}`}
                    onClick={() => evaluarPerfil(perfil.id, false)}
                  >
                    <ShieldAlert size={18} /> No Cumple
                  </button>
                </div>
                {respuestasPerfil[perfil.id] !== undefined && (
                  <div className={`feedback-decision ${respuestasPerfil[perfil.id] === perfil.cumplePoliticas ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {respuestasPerfil[perfil.id] === perfil.cumplePoliticas ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{perfil.explicacion}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: ESCENARIOS DE PUBLICACIÓN */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>3. Decisiones de Publicación Responsable</h2>
          </div>

          <div className="escenarios-lista">
            {escenarios.map(escenario => (
              <div key={escenario.id} className="escenario-card">
                <h3 className="escenario-titulo">{escenario.titulo}</h3>
                <p className="escenario-descripcion">{escenario.descripcion}</p>
                <div className="opciones-escenario">
                  {escenario.opciones.map((opcion, idx) => (
                    <button
                      key={idx}
                      className={`opcion-escenario-btn ${respuestasEscenario[escenario.id] === idx ? 'seleccionada' : ''}`}
                      onClick={() => responderEscenario(escenario.id, idx)}
                    >
                      {String.fromCharCode(65 + idx)}) {opcion}
                    </button>
                  ))}
                </div>
                {resultadoEscenario[escenario.id] !== undefined && (
                  <div className={`feedback-escenario ${resultadoEscenario[escenario.id] ? 'correcto' : 'incorrecto'}`}>
                    {resultadoEscenario[escenario.id] ? (
                      <><CheckCircle2 size={18} /> ¡Correcto! </>
                    ) : (
                      <><XCircle size={18} /> Atención: </>
                    )}
                    {escenario.explicacion}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 4: CHECKLIST DE LIDERAZGO */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <ListChecks className="icono-bloque-verde" size={24} />
            <h2>4. Checklist de Liderazgo Digital</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las competencias que ya posees:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_REDES_5TO.map((habito) => (
              <div
                key={habito.id}
                className={`item-habito-check ${habitosComprobados[habito.id] ? 'activo' : ''}`}
                onClick={() => toggleHabito(habito.id)}
              >
                <input
                  type="checkbox"
                  checked={!!habitosComprobados[habito.id]}
                  onChange={() => {}}
                  className="checkbox-custom"
                />
                <div className="info-item-habito">
                  <span className="categoria-badge-mini">{habito.categoria}</span>
                  <p className="texto-habito">{habito.texto}</p>
                  <span className="importancia-habito">📌 Por qué es importante: {habito.enfoque}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="resultado-diagnostico-bar">
            <div className="info-porcentaje">
              <strong>Liderazgo Digital: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} competencias)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Eres un líder digital preparado para el futuro.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las competencias para maximizar tu impacto positivo.
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 5: VIDEOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Video className="icono-bloque-amarillo" size={24} />
            <h2>5. Videos para Aprender Más</h2>
          </div>
          <p className="texto-lectura-modulo">
            Mira estos videos para profundizar en marca personal, políticas y auditoría:
          </p>

          <div className="videos-grid">
            {videos.map(video => (
              <div key={video.id} className="video-card">
                <h3 className="video-titulo">{video.titulo}</h3>
                <div className="video-wrapper">
                  <iframe
                    src={video.url}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="video-descripcion">{video.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 6: QUIZ */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-azul" size={24} />
            <h2>6. Evaluación Final</h2>
          </div>
          <p className="texto-lectura-modulo">
            Demuestra lo aprendido.
          </p>

          <div className="quiz-container">
            {preguntasQuiz.map(pregunta => (
              <div key={pregunta.id} className="pregunta-quiz">
                <h3 className="pregunta-titulo">{pregunta.id}. {pregunta.pregunta}</h3>
                <div className="opciones-quiz-modulo">
                  {pregunta.opciones.map((opcion, idx) => (
                    <button
                      key={idx}
                      className={`opcion-quiz-btn ${respuestasQuiz[pregunta.id] === idx ? 'seleccionada' : ''}`}
                      onClick={() => responderPreguntaQuiz(pregunta.id, idx)}
                    >
                      {String.fromCharCode(65 + idx)}) {opcion}
                    </button>
                  ))}
                </div>
                {quizEnviado && respuestasQuiz[pregunta.id] !== undefined && (
                  <div className={`feedback-quiz-item ${respuestasQuiz[pregunta.id] === pregunta.respuestaCorrecta ? 'correcto' : 'incorrecto'}`}>
                    {respuestasQuiz[pregunta.id] === pregunta.respuestaCorrecta ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <XCircle size={18} />
                    )}
                    <span>{pregunta.explicacion}</span>
                  </div>
                )}
              </div>
            ))}

            <div className="acciones-quiz">
              <button
                className="boton-enviar-quiz"
                onClick={enviarQuiz}
                disabled={quizEnviado}
              >
                Enviar respuestas
              </button>
              {puntajeQuiz && (
                <div className="resultado-quiz">
                  <Award size={24} className="icono-premio" />
                  <p>
                    Obtuviste {puntajeQuiz.correctas} de {puntajeQuiz.total} correctas.
                    {puntajeQuiz.correctas === puntajeQuiz.total ? ' 🏆 ¡Perfecto!' : ' ¡Sigue practicando!'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RedesSociales5to;