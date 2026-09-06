import React from 'react';
import {
  Gamepad2,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Award,
  Video,
  ListChecks,
  MessagesSquare,
  MessageSquareWarning,
  MessageSquareCode
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { CajaExplicacionDinamica } from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { useVideojuegos4to, HABITOS_VIDEOJUEGOS_4TO } from '../../../../hooks/HooksVideoGames/useVideojuegos4to';
import './VideoJuegos4to.css';

export const Videojuegos4to: React.FC = () => {
  const {
    mensajes,
    respuestasMensaje,
    evaluarMensaje,
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
  } = useVideojuegos4to();

  return (
    <main className="pagina-modulo-videojuegos">
      <HeaderModulo
        grado="4to"
        modulo="4: Phishing en Comunidades Gamer"
        titulo="Discord, Twitch y YouTube: detecta el engaño"
        subTitulo="Aprende a identificar phishing, sorteos falsos y suplantación de streamers en plataformas gamer."
        categoria="Videojuegos y Seguridad"
        tiempoEstimado="55 min"
        icono={<MessagesSquare size={36} />}
      />

      <div className="contenedor-videojuegos-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Phishing en Discord, Twitch y YouTube</h2>
          </div>
          <p className="texto-lectura-modulo">
            Las comunidades gamer son un objetivo favorito de los estafadores. Utilizan <strong>bots falsos</strong>, <strong>canales suplantados</strong> y <strong>sorteos fraudulentos</strong> para robar cuentas y datos personales. Aprender a detectar estos engaños es tu mejor defensa.
          </p>

          <div className="grid-pilares-videojuegos">
            <div className="caja-pilar-videojuegos">
              <MessagesSquare className="icono-pilar rojo" size={28} />
              <h3>Bots Maliciosos en Discord</h3>
              <p>Mensajes automáticos que ofrecen Nitro gratis, skins o premios. Siempre piden hacer clic en enlaces sospechosos.</p>
            </div>

            <div className="caja-pilar-videojuegos">
              <MessageSquareWarning className="icono-pilar azul" size={28} />
              <h3>Suplantación de Streamers</h3>
              <p>Cuentas falsas que imitan a creadores famosos para pedir datos o dinero. Verifica siempre el check de verificación.</p>
            </div>

            <div className="caja-pilar-videojuegos">
              <MessageSquareCode className="icono-pilar verde" size={28} />
              <h3>Sorteos Falsos</h3>
              <p>Prometen premios increíbles a cambio de tu contraseña, correo o datos bancarios. Los sorteos reales nunca piden eso.</p>
            </div>
          </div>

          <div className="conceptos-clave-grid">
            <h3 className="titulo-mini-seccion">Glosario y Términos Clave</h3>
            <div className="lista-conceptos">
              <div className="item-concepto">
                <strong>📖 ¿Qué es un Bot Malicioso en Discord?</strong>
                <p>Una cuenta automatizada manipulada por ciberdelincuentes para enviar mensajes masivos a miembros de servidores.</p>
                <strong>⚙️ ¿Para qué sirve / Qué peligro representa?</strong>
                <p>Spamnea enlaces fraudulentos ofreciendo Nitro gratis para robar los tokens de autenticación de Discord.</p>
              </div>
              <div className="item-concepto">
                <strong>📖 ¿Qué es la Suplantación de Creadores?</strong>
                <p>Perfiles falsos en Twitch, YouTube o TikTok que clonan el nombre, foto y estilo de streamers famosos.</p>
                <strong>⚙️ ¿Para qué sirve / Qué peligro representa?</strong>
                <p>Se ganan la confianza de los fans para solicitar donaciones falsas o enlaces a páginas de robos de cuentas.</p>
              </div>
              <div className="item-concepto">
                <strong>📖 ¿Qué es la Verificación Oficial?</strong>
                <p>La insignia azul o dorada emitida por plataformas (Twitch, Discord, YouTube) para validar la autenticidad del perfil.</p>
                <strong>⚙️ ¿Para qué sirve / Qué función cumple?</strong>
                <p>Garantiza que la persona o bot que se comunica contigo es legítima y no un impostor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LABORATORIO DE MENSAJES */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio: ¿Mensaje Legítimo o Phishing?</h2>
          </div>
          <CajaExplicacionDinamica
            enQueConsiste="Laboratorio de simulación de mensajes de chat en plataformas gamer (Discord, Twitch, Steam)."
            comoInteractuar="Lee cada mensaje, revisa el remitente y haz clic en 'Legítimo' o 'Phishing' según la sospecha de engaño."
            paraQueSirve="Entrenará tu capacidad para detectar enlaces de suplantación e insignias falsas de verificación."
          />

          <div className="mensajes-lista">
            {mensajes.map(msg => (
              <div key={msg.id} className="mensaje-card">
                <div className="mensaje-cabecera">
                  <span className="badge-plataforma">{msg.plataforma}</span>
                  <span className="remitente-texto">De: {msg.remitente}</span>
                </div>
                <p className="mensaje-contenido">"{msg.contenido}"</p>
                <div className="acciones-decision">
                  <button
                    className={`btn-decision seguro ${respuestasMensaje[msg.id] === false ? 'seleccionado' : ''}`}
                    onClick={() => evaluarMensaje(msg.id, false)}
                  >
                    <ShieldCheck size={18} /> Legítimo
                  </button>
                  <button
                    className={`btn-decision phishing ${respuestasMensaje[msg.id] === true ? 'seleccionado' : ''}`}
                    onClick={() => evaluarMensaje(msg.id, true)}
                  >
                    <ShieldAlert size={18} /> Phishing
                  </button>
                </div>
                {respuestasMensaje[msg.id] !== undefined && (
                  <div className={`feedback-decision ${respuestasMensaje[msg.id] === msg.esPhishing ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {respuestasMensaje[msg.id] === msg.esPhishing ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{msg.explicacion}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: ESCENARIOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>3. Decisiones en Comunidades Gamer</h2>
          </div>
          <CajaExplicacionDinamica
            enQueConsiste="Simulación de interacciones sociales en servidores públicos y salas de juego."
            comoInteractuar="Analiza el dilema planteado y selecciona la respuesta que resguarde tu privacidad."
            paraQueSirve="Evita que compartas datos personales o contraseñas en chats grupales o llamadas con desconocidos."
          />

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

        {/* SECCIÓN 4: CHECKLIST */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <ListChecks className="icono-bloque-verde" size={24} />
            <h2>4. Checklist de Seguridad en Comunidades</h2>
          </div>
          <CajaExplicacionDinamica
            enQueConsiste="Lista de comprobación de privacidad en Discord, Steam y plataformas de comunicación gamer."
            comoInteractuar="Haz clic en las casillas correspondientes a las configuraciones de privacidad que ya mantienes activadas."
            paraQueSirve="Asegura que tu perfil no reciba mensajes directos no deseados ni solicitudes de bots peligrosos."
          />

          <div className="lista-habitos-interactiva">
            {HABITOS_VIDEOJUEGOS_4TO.map((habito) => (
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
              <strong>Seguridad en Comunidades: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Detectas phishing y suplantación en comunidades gamer.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para protegerte en Discord, Twitch y YouTube.
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
            Mira estos videos para profundizar en la detección de phishing en plataformas gamer:
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

export default Videojuegos4to;