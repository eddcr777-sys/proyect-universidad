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
  Coins,
  Trophy,
  Flag
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { useVideojuegos5to, HABITOS_VIDEOJUEGOS_5TO } from '../../../../hooks/HooksVideoGames/useVideojuegos5to';
import './VideoJuegos5to.css';

export const Videojuegos5to: React.FC = () => {
  const {
    escenarios,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    casosReporte,
    respuestasReporte,
    evaluarReporte,
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
  } = useVideojuegos5to();

  return (
    <main className="pagina-modulo-videojuegos">
      <HeaderModulo
        grado="5to"
        modulo="5: eSports, Compras Digitales y Denuncias"
        titulo="Protege tu inversión y tu comunidad"
        subTitulo="Aprende a cuidar cuentas con valor monetario, evitar estafas en compras digitales y denunciar conductas abusivas."
        categoria="Videojuegos y Seguridad"
        tiempoEstimado="60 min"
        icono={<Trophy size={36} />}
      />

      <div className="contenedor-videojuegos-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Cuentas con Valor Monetario y Compras Digitales</h2>
          </div>
          <p className="texto-lectura-modulo">
            Las cuentas de juegos con <strong>skins legendarias, diamantes o niveles altos</strong> tienen valor económico real. Esto las convierte en objetivo de <strong>ladrones y estafadores</strong>. Además, las compras digitales mal realizadas pueden exponer tus datos bancarios.
          </p>

          <div className="grid-pilares-videojuegos">
            <div className="caja-pilar-videojuegos">
              <Coins className="icono-pilar rojo" size={28} />
              <h3>Compra de Cuentas: Prohibida</h3>
              <p>Comprar o vender cuentas viola los términos de servicio. Es la estafa más común: pierdes el dinero y no recibes la cuenta.</p>
            </div>

            <div className="caja-pilar-videojuegos">
              <ShieldCheck className="icono-pilar verde" size={28} />
              <h3>Compras Seguras</h3>
              <p>Usa métodos de pago oficiales, tarjetas virtuales y supervisión de un adulto. Nunca compartas datos bancarios por mensajes.</p>
            </div>

            <div className="caja-pilar-videojuegos">
              <Flag className="icono-pilar azul" size={28} />
              <h3>Denuncias y Reportes</h3>
              <p>Reporta jugadores tóxicos, hacks, estafas y venta de cuentas. Mantén la comunidad segura y saludable.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: ESCENARIOS DE VALOR MONETARIO */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. Decisiones: Protege tu Inversión</h2>
          </div>
          <p className="subtitulo-bloque">
            Lee cada situación y elige la opción correcta:
          </p>

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

        {/* SECCIÓN 3: LABORATORIO DE REPORTES */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Flag className="icono-bloque-rojo" size={24} />
            <h2>3. ¿Es Reportable o No?</h2>
          </div>
          <p className="subtitulo-bloque">
            Analiza cada caso y decide si es <strong>Reportable</strong> o <strong>No reportable</strong>:
          </p>

          <div className="reportes-lista">
            {casosReporte.map(caso => (
              <div key={caso.id} className="reporte-card">
                <h3 className="reporte-titulo">{caso.titulo}</h3>
                <p className="reporte-descripcion">{caso.descripcion}</p>
                <div className="acciones-decision">
                  <button
                    className={`btn-decision seguro ${respuestasReporte[caso.id] === true ? 'seleccionado' : ''}`}
                    onClick={() => evaluarReporte(caso.id, true)}
                  >
                    <ShieldCheck size={18} /> Reportable
                  </button>
                  <button
                    className={`btn-decision phishing ${respuestasReporte[caso.id] === false ? 'seleccionado' : ''}`}
                    onClick={() => evaluarReporte(caso.id, false)}
                  >
                    <ShieldAlert size={18} /> No reportable
                  </button>
                </div>
                {respuestasReporte[caso.id] !== undefined && (
                  <div className={`feedback-decision ${respuestasReporte[caso.id] === caso.esReportable ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {respuestasReporte[caso.id] === caso.esReportable ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{caso.explicacion}</span>
                    </div>
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
            <h2>4. Checklist de Seguridad en eSports y Compras</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_VIDEOJUEGOS_5TO.map((habito) => (
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
              <strong>Seguridad en eSports: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Proteges tu inversión y contribuyes a una comunidad sana.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para ser un jugador ejemplar.
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
            Mira estos videos para profundizar en seguridad en eSports y compras digitales:
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

export default Videojuegos5to;