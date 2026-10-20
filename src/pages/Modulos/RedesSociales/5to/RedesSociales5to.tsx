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
  Globe,
  ClipboardList,
  AlertCircle
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
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

  /* ── Cálculos auxiliares para el quiz ── */
  const totalPreguntas = preguntasQuiz.length;
  const preguntasRespondidas = Object.keys(respuestasQuiz).length;
  const preguntasFaltantes = totalPreguntas - preguntasRespondidas;
  const quizCompleto = preguntasFaltantes === 0;
  const porcentajeQuiz = totalPreguntas > 0
    ? Math.round((preguntasRespondidas / totalPreguntas) * 100)
    : 0;

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
        {/* ══════════════════════════════════════════════════════════
            SECCIÓN 1: TEORÍA
            ══════════════════════════════════════════════════════════ */}
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
              <p><strong>📖 ¿Qué es?:</strong> Imagen y reputación digital proyectada en redes como LinkedIn.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Destacar habilidades académicas y proyectos para postulaciones universitarias o laborales.</p>
            </div>

            <div className="caja-pilar-redes">
              <Lock className="icono-pilar rojo" size={28} />
              <h3>Políticas de Uso Institucional</h3>
              <p><strong>📖 ¿Qué es?:</strong> Normas que regulan qué datos institucionales se pueden hacer públicos.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Prevenir la filtración de documentos escolares confidenciales o fotos de estudiantes sin consentimiento.</p>
            </div>

            <div className="caja-pilar-redes">
              <Globe className="icono-pilar verde" size={28} />
              <h3>Cumplimiento Normativo (LOPNNA/GDPR)</h3>
              <p><strong>📖 ¿Qué es?:</strong> Leyes que protegen la imagen y los datos personales de menores de edad.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Evitar responsabilidades legales por sobreexposición o difusión ilícita de datos personales.</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECCIÓN 2: AUDITORÍA DE PERFILES — REDISEÑADA
            ══════════════════════════════════════════════════════════ */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. Auditoría de Perfiles: ¿Cumple o No Cumple?</h2>
          </div>

          {/* ── Instrucciones claras del laboratorio ── */}
          <div className="auditoria-instrucciones">
            <div className="auditoria-instrucciones-header">
              <Briefcase size={20} />
              <strong>🎭 Tu rol: Auditor de Marca Personal</strong>
            </div>
            <p className="auditoria-intro">
              Eres el encargado de revisar los perfiles de estudiantes que quieren
              representar al liceo en actividades oficiales. Debes verificar si cada
              perfil <strong>respeta las políticas institucionales</strong> y{' '}
              <strong>protege la imagen pública</strong>.
            </p>

            <div className="auditoria-criterios">
              <p className="auditoria-criterios-titulo">
                📋 Aplica estos 4 criterios a cada perfil:
              </p>
              <ul className="auditoria-criterios-lista">
                <li>
                  <strong>🔒 Datos sensibles:</strong> ¿publica documentos, notas o
                  información interna del liceo?
                </li>
                <li>
                  <strong>👥 Menores identificables:</strong> ¿comparte fotos de
                  compañeros sin consentimiento?
                </li>
                <li>
                  <strong>💬 Lenguaje:</strong> ¿usa un tono respetuoso y profesional?
                </li>
                <li>
                  <strong>🏫 Imagen institucional:</strong> ¿lo que publica representa
                  bien al liceo?
                </li>
              </ul>
            </div>
          </div>

          {/* ── Tarjetas de perfil ── */}
          <div className="perfiles-auditoria-lista">
            {perfilesAuditoria.map((perfil, idx) => {
              const respondido = respuestasPerfil[perfil.id] !== undefined;
              const esCorrecta = respuestasPerfil[perfil.id] === perfil.cumplePoliticas;

              // Valores por defecto si el hook aún no los provee
              const avatar = (perfil as any).avatar ?? '👤';
              const handle = (perfil as any).handle ?? '@usuario';
              const rol = (perfil as any).rol ?? 'Estudiante';
              const portadaColor = (perfil as any).portadaColor ?? '#1e40af';
              const publicaciones: string[] =
                (perfil as any).publicaciones ?? ['Publicación reciente sin contexto.'];
              const categoriaRiesgo = (perfil as any).categoriaRiesgo;

              return (
                <div key={perfil.id} className="perfil-card-v2">
                  {/* Cabecera del caso */}
                  <div className="perfil-caso-header">
                    <span className="perfil-caso-badge">🔍 Caso #{idx + 1}</span>
                    <span className="perfil-caso-instruccion">
                      Audita este perfil y decide si <strong>cumple o no</strong> con
                      las políticas del liceo.
                    </span>
                  </div>

                  {/* Tarjeta estilo red social */}
                  <div className="perfil-social">
                    <div
                      className="perfil-portada"
                      style={{ background: portadaColor }}
                    />

                    <div className="perfil-social-info">
                      <div className="perfil-avatar">{avatar}</div>
                      <div className="perfil-texto">
                        <h3 className="perfil-nombre-social">{perfil.nombre}</h3>
                        <span className="perfil-handle">{handle}</span>
                        <span className="perfil-rol">{rol}</span>
                      </div>
                    </div>

                    <p className="perfil-bio">{perfil.descripcion}</p>

                    {/* Publicaciones simuladas */}
                    <div className="perfil-publicaciones">
                      <p className="perfil-publicaciones-titulo">
                        📝 Últimas publicaciones:
                      </p>
                      <ul className="perfil-publicaciones-lista">
                        {publicaciones.map((pub, i) => (
                          <li key={i} className="perfil-publicacion">
                            <span className="publicacion-avatar">{avatar}</span>
                            <span className="publicacion-texto">{pub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Checklist de auditoría */}
                  <div className="perfil-checklist">
                    <p className="perfil-checklist-titulo">
                      ✅ Antes de decidir, revisa estos criterios:
                    </p>
                    <div className="perfil-checklist-items">
                      <label className="perfil-checklist-item">
                        <input type="checkbox" disabled />
                        <span>¿Comparte datos internos del liceo?</span>
                      </label>
                      <label className="perfil-checklist-item">
                        <input type="checkbox" disabled />
                        <span>¿Etiqueta a compañeros sin permiso?</span>
                      </label>
                      <label className="perfil-checklist-item">
                        <input type="checkbox" disabled />
                        <span>¿Usa lenguaje profesional?</span>
                      </label>
                      <label className="perfil-checklist-item">
                        <input type="checkbox" disabled />
                        <span>¿Representa bien la imagen institucional?</span>
                      </label>
                    </div>
                  </div>

                  {/* Decisión */}
                  <p className="perfil-pregunta-final">
                    🤔 <strong>Según tu análisis, ¿este perfil…?</strong>
                  </p>
                  <div className="acciones-decision">
                    <button
                      className={`btn-decision seguro ${
                        respuestasPerfil[perfil.id] === true ? 'seleccionado' : ''
                      }`}
                      onClick={() => evaluarPerfil(perfil.id, true)}
                    >
                      <ShieldCheck size={18} /> ✅ Cumple la política
                    </button>
                    <button
                      className={`btn-decision phishing ${
                        respuestasPerfil[perfil.id] === false ? 'seleccionado' : ''
                      }`}
                      onClick={() => evaluarPerfil(perfil.id, false)}
                    >
                      <ShieldAlert size={18} /> 🚨 No cumple / Riesgo
                    </button>
                  </div>

                  {/* Feedback enriquecido */}
                  {respondido && (
                    <div
                      className={`feedback-decision ${
                        esCorrecta ? 'acierto' : 'fallo'
                      }`}
                    >
                      <div className="flex-resultado">
                        {esCorrecta ? (
                          <CheckCircle2 size={20} className="icono-acierto" />
                        ) : (
                          <XCircle size={20} className="icono-fallo" />
                        )}
                        <span>
                          <strong>
                            {esCorrecta
                              ? '¡Auditoría correcta!'
                              : 'Auditoría incorrecta.'}
                          </strong>{' '}
                          Este perfil{' '}
                          <strong>
                            {perfil.cumplePoliticas ? 'SÍ cumple' : 'NO cumple'}
                          </strong>{' '}
                          con las políticas.
                        </span>
                      </div>
                      <p className="feedback-detalle">{perfil.explicacion}</p>
                      {categoriaRiesgo && !perfil.cumplePoliticas && (
                        <span className="badge-tipo-phishing">
                          🚩 Riesgo: {categoriaRiesgo}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECCIÓN 3: ESCENARIOS DE PUBLICACIÓN
            ══════════════════════════════════════════════════════════ */}
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

        {/* ══════════════════════════════════════════════════════════
            SECCIÓN 4: CHECKLIST DE LIDERAZGO
            ══════════════════════════════════════════════════════════ */}
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

        {/* ══════════════════════════════════════════════════════════
            SECCIÓN 5: VIDEOS
            ══════════════════════════════════════════════════════════ */}
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

        {/* ══════════════════════════════════════════════════════════
            SECCIÓN 6: QUIZ — REDISEÑADO
            ══════════════════════════════════════════════════════════ */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-azul" size={24} />
            <h2>6. Evaluación Final</h2>
          </div>

          {/* ── Instrucciones claras ── */}
          <div className="quiz-instrucciones">
            <div className="quiz-instrucciones-header">
              <ClipboardList size={22} />
              <strong>¿Cómo funciona esta evaluación?</strong>
            </div>
            <ol className="quiz-instrucciones-lista">
              <li>
                Hay <strong>{totalPreguntas} preguntas</strong> de opción múltiple
                (A, B, C o D).
              </li>
              <li>
                Lee cada pregunta y <strong>haz clic en la opción</strong> que creas
                correcta.
              </li>
              <li>Puedes cambiar tu respuesta antes de enviar.</li>
              <li>
                Cuando hayas respondido <strong>todas</strong>, presiona el botón{' '}
                <strong>"Enviar respuestas"</strong>.
              </li>
              <li>Verás tu puntaje y una explicación de cada pregunta.</li>
            </ol>
          </div>

          {/* ── Barra de progreso del quiz ── */}
          <div className="quiz-progreso">
            <div className="quiz-progreso-header">
              <span className="quiz-progreso-texto">
                📊 Progreso: <strong>{preguntasRespondidas}</strong> de{' '}
                <strong>{totalPreguntas}</strong> preguntas respondidas
              </span>
              {!quizCompleto && !quizEnviado && (
                <span className="quiz-progreso-faltan">
                  Faltan {preguntasFaltantes}
                </span>
              )}
              {quizCompleto && !quizEnviado && (
                <span className="quiz-progreso-listo">✅ ¡Listo para enviar!</span>
              )}
            </div>
            <div className="quiz-barra-fondo">
              <div
                className={`quiz-barra-relleno ${quizCompleto ? 'completo' : ''}`}
                style={{ width: `${porcentajeQuiz}%` }}
              />
            </div>
          </div>

          {/* ── Preguntas ── */}
          <div className="quiz-container">
            {preguntasQuiz.map((pregunta, idx) => {
              const estaRespondida = respuestasQuiz[pregunta.id] !== undefined;
              const esCorrecta =
                quizEnviado &&
                respuestasQuiz[pregunta.id] === pregunta.respuestaCorrecta;

              return (
                <div
                  key={pregunta.id}
                  className={`pregunta-quiz ${estaRespondida ? 'respondida' : ''} ${
                    quizEnviado ? 'evaluada' : ''
                  }`}
                >
                  {/* Encabezado de la pregunta con número y estado */}
                  <div className="pregunta-header">
                    <span className="pregunta-numero-badge">
                      Pregunta {idx + 1} de {totalPreguntas}
                    </span>
                    {!quizEnviado && estaRespondida && (
                      <span className="pregunta-estado respondida-badge">
                        <CheckCircle2 size={14} /> Respondida
                      </span>
                    )}
                    {!quizEnviado && !estaRespondida && (
                      <span className="pregunta-estado pendiente-badge">
                        <AlertCircle size={14} /> Sin responder
                      </span>
                    )}
                    {quizEnviado && esCorrecta && (
                      <span className="pregunta-estado correcta-badge">
                        <CheckCircle2 size={14} /> Correcta
                      </span>
                    )}
                    {quizEnviado && !esCorrecta && (
                      <span className="pregunta-estado incorrecta-badge">
                        <XCircle size={14} /> Incorrecta
                      </span>
                    )}
                  </div>

                  <h3 className="pregunta-titulo">{pregunta.pregunta}</h3>

                  <div className="opciones-quiz-modulo">
                    {pregunta.opciones.map((opcion, idxOpcion) => {
                      const seleccionada = respuestasQuiz[pregunta.id] === idxOpcion;
                      const esLaCorrecta = pregunta.respuestaCorrecta === idxOpcion;

                      // Clases después de enviar: marcamos correcta e incorrecta
                      let claseExtra = '';
                      if (quizEnviado) {
                        if (esLaCorrecta) claseExtra = 'opcion-correcta';
                        else if (seleccionada) claseExtra = 'opcion-incorrecta';
                      } else if (seleccionada) {
                        claseExtra = 'seleccionada';
                      }

                      return (
                        <button
                          key={idxOpcion}
                          className={`opcion-quiz-btn ${claseExtra}`}
                          onClick={() =>
                            !quizEnviado && responderPreguntaQuiz(pregunta.id, idxOpcion)
                          }
                          disabled={quizEnviado}
                        >
                          <span className="opcion-letra">
                            {String.fromCharCode(65 + idxOpcion)}
                          </span>
                          <span className="opcion-texto">{opcion}</span>
                          {quizEnviado && esLaCorrecta && (
                            <CheckCircle2 size={18} className="opcion-icono-correcto" />
                          )}
                          {quizEnviado && seleccionada && !esLaCorrecta && (
                            <XCircle size={18} className="opcion-icono-incorrecto" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explicación solo visible tras enviar */}
                  {quizEnviado && (
                    <div
                      className={`feedback-quiz-item ${esCorrecta ? 'correcto' : 'incorrecto'}`}
                    >
                      {esCorrecta ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                      <span>
                        <strong>
                          {esCorrecta ? '¡Correcto! ' : 'Respuesta correcta: '}
                        </strong>
                        {pregunta.explicacion}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Botón de envío + resultado ── */}
          <div className="acciones-quiz">
            <button
              className="boton-enviar-quiz"
              onClick={enviarQuiz}
              disabled={quizEnviado || !quizCompleto}
              title={
                !quizCompleto
                  ? `Responde todas las preguntas antes de enviar (faltan ${preguntasFaltantes})`
                  : 'Enviar respuestas'
              }
            >
              {quizEnviado
                ? '✅ Respuestas enviadas'
                : !quizCompleto
                ? `Faltan ${preguntasFaltantes} pregunta${preguntasFaltantes !== 1 ? 's' : ''}`
                : '📨 Enviar respuestas'}
            </button>

            {!quizCompleto && !quizEnviado && (
              <p className="quiz-aviso-incompleto">
                <AlertCircle size={16} />
                Debes responder todas las preguntas para enviar tu evaluación.
              </p>
            )}

            {puntajeQuiz && (
              <div
                className={`resultado-quiz ${
                  puntajeQuiz.correctas === puntajeQuiz.total ? 'perfecto' : ''
                }`}
              >
                <Award size={24} className="icono-premio" />
                <div>
                  <p className="resultado-titulo">
                    {puntajeQuiz.correctas === puntajeQuiz.total
                      ? '🏆 ¡Perfecto!'
                      : puntajeQuiz.correctas >= puntajeQuiz.total / 2
                      ? '👍 ¡Buen trabajo!'
                      : '💪 Sigue practicando'}
                  </p>
                  <p className="resultado-detalle">
                    Obtuviste <strong>{puntajeQuiz.correctas}</strong> de{' '}
                    <strong>{puntajeQuiz.total}</strong> respuestas correctas (
                    {Math.round((puntajeQuiz.correctas / puntajeQuiz.total) * 100)}
                    %).
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default RedesSociales5to;