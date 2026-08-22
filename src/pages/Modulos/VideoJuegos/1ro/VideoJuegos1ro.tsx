import React from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Award,
  Video,
  ListChecks,
  Gamepad2,
  Coins,
  Swords
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { useVideojuegos1ro, HABITOS_VIDEOJUEGOS_1RO } from '../../../../hooks/HooksVideoGames/useVideojuegos1ro';
import './VideoJuegos1ro.css';

export const Videojuegos1ro: React.FC = () => {
  const {
    ofertas,
    respuestasOferta,
    evaluarOferta,
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
  } = useVideojuegos1ro();

  return (
    <main className="pagina-modulo-videojuegos">
      <HeaderModulo
        grado="1ro"
        modulo="1: Estafas y Robo de Cuentas en Videojuegos"
        titulo="Protege tus cuentas de juegos"
        subTitulo="Aprende a detectar estafas como generadores de diamantes, links falsos y robo de cuentas en Free Fire, Roblox y más."
        categoria="Videojuegos y Seguridad"
        tiempoEstimado="45 min"
        icono={<Gamepad2 size={36} />}
      />

      <div className="contenedor-videojuegos-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Los Peligros de los Enlaces "Gratis" en Juegos</h2>
          </div>
          <p className="texto-lectura-modulo">
            Los videojuegos como <strong>Free Fire, Roblox, Blood Strike, Clash Royale</strong> y otros son muy populares. Los estafadores lo saben y crean <strong>páginas falsas</strong> que prometen diamantes, robux o monedas gratis. Su objetivo es <strong>robar tu cuenta</strong> o <strong>infectar tu dispositivo</strong>.
          </p>

          <div className="grid-pilares-videojuegos">
            <div className="caja-pilar-videojuegos">
              <Coins className="icono-pilar rojo" size={28} />
              <h3>Generadores de Monedas</h3>
              <p>Sitios que prometen diamantes, robux o skins gratis. Todos son estafas. Las monedas solo se obtienen jugando o comprándolas en la tienda oficial.</p>
            </div>

            <div className="caja-pilar-videojuegos">
              <Swords className="icono-pilar azul" size={28} />
              <h3>Robo de Cuentas</h3>
              <p>Te piden tu usuario y contraseña para "verificar" o "activar" un premio. Así te roban la cuenta y la venden o la usan para estafar a tus amigos.</p>
            </div>

            <div className="caja-pilar-videojuegos">
              <Gamepad2 className="icono-pilar verde" size={28} />
              <h3>Mods y Hacks Maliciosos</h3>
              <p>Descargar "mods" o "hacks" desde YouTube o foros suele traer malware: keyloggers que graban tus contraseñas o virus que dañan tu equipo.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE OFERTAS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. ¿Oferta Real o Estafa?</h2>
          </div>
          <p className="subtitulo-bloque">
            Analiza cada oferta y decide si es <strong>Estafa</strong> o <strong>Oferta legítima</strong>:
          </p>

          <div className="ofertas-lista">
            {ofertas.map(oferta => (
              <div key={oferta.id} className="oferta-card">
                <span className="badge-juego">{oferta.juego}</span>
                <p className="oferta-descripcion">{oferta.oferta}</p>
                <div className="acciones-decision">
                  <button
                    className={`btn-decision seguro ${respuestasOferta[oferta.id] === false ? 'seleccionado' : ''}`}
                    onClick={() => evaluarOferta(oferta.id, false)}
                  >
                    <ShieldCheck size={18} /> Legítima
                  </button>
                  <button
                    className={`btn-decision phishing ${respuestasOferta[oferta.id] === true ? 'seleccionado' : ''}`}
                    onClick={() => evaluarOferta(oferta.id, true)}
                  >
                    <ShieldAlert size={18} /> Estafa
                  </button>
                </div>
                {respuestasOferta[oferta.id] !== undefined && (
                  <div className={`feedback-decision ${respuestasOferta[oferta.id] === oferta.esEstafa ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {respuestasOferta[oferta.id] === oferta.esEstafa ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{oferta.explicacion}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: CHECKLIST */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <ListChecks className="icono-bloque-verde" size={24} />
            <h2>3. Checklist de Seguridad en Videojuegos</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_VIDEOJUEGOS_1RO.map((habito) => (
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
              <strong>Seguridad en Videojuegos: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Proteges tus cuentas de juegos correctamente.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para no caer en estafas.
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 4: VIDEOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Video className="icono-bloque-amarillo" size={24} />
            <h2>4. Videos para Aprender Más</h2>
          </div>
          <p className="texto-lectura-modulo">
            Mira estos videos para conocer las estafas más comunes y cómo protegerte:
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

        {/* SECCIÓN 5: QUIZ */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-azul" size={24} />
            <h2>5. Evaluación Final</h2>
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

export default Videojuegos1ro;