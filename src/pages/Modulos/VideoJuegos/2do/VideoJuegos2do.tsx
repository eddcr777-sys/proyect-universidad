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
  KeyRound,
  Mail,
  Smartphone
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { CajaExplicacionDinamica } from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { useVideojuegos2do, HABITOS_VIDEOJUEGOS_2DO } from '../../../../hooks/HooksVideoGames/useVideojuegos2do';
import './VideoJuegos2do.css';

export const Videojuegos2do: React.FC = () => {
  const {
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
  } = useVideojuegos2do();

  return (
    <main className="pagina-modulo-videojuegos">
      <HeaderModulo
        grado="2do"
        modulo="2: Cuentas Seguras y Recuperación"
        titulo="Blinda tus cuentas de videojuegos"
        subTitulo="Activa la verificación en dos pasos, vincula correo y teléfono, y aprende a recuperar una cuenta hackeada."
        categoria="Videojuegos y Seguridad"
        tiempoEstimado="50 min"
        icono={<KeyRound size={36} />}
      />

      <div className="contenedor-videojuegos-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. La Segunda Llave: Verificación en Dos Pasos (2FA)</h2>
          </div>
          <p className="texto-lectura-modulo">
            Tu contraseña puede ser robada, pero con la <strong>verificación en dos pasos (2FA)</strong> necesitas un segundo código para entrar. Actívala en <strong>Free Fire, Roblox, Steam, Epic Games</strong> y todas tus cuentas de juego.
          </p>

          <div className="grid-pilares-videojuegos">
            <div className="caja-pilar-videojuegos">
              <KeyRound className="icono-pilar azul" size={28} />
              <h3>2FA con App Autenticadora</h3>
              <p>Google Authenticator o Authy generan códigos en tu celular. Es el método más seguro, incluso sin señal.</p>
            </div>

            <div className="caja-pilar-videojuegos">
              <Mail className="icono-pilar verde" size={28} />
              <h3>Vinculación de Correo</h3>
              <p>Usa un correo personal con contraseña fuerte y 2FA. Es tu puerta de recuperación si pierdes el acceso.</p>
            </div>

            <div className="caja-pilar-videojuegos">
              <Smartphone className="icono-pilar rojo" size={28} />
              <h3>Códigos de Respaldo</h3>
              <p>Cuando activas 2FA, te dan códigos de un solo uso. Guárdalos: son la llave de emergencia si pierdes tu teléfono.</p>
            </div>
          </div>

          <div className="conceptos-clave-grid">
            <h3 className="titulo-mini-seccion">Glosario y Términos Clave</h3>
            <div className="lista-conceptos">
              <div className="item-concepto">
                <strong>📖 ¿Qué es la Verificación en Dos Pasos (2FA)?</strong>
                <p>Un método de seguridad que solicita dos pruebas de identidad para acceder a la cuenta (clave + código dinámico).</p>
                <strong>⚙️ ¿Para qué sirve / Qué función cumple?</strong>
                <p>Protege la cuenta de Roblox, Steam o Epic Games impidiendo que un atacante entre aunque adivine la contraseña.</p>
              </div>
              <div className="item-concepto">
                <strong>📖 ¿Qué es una App Autenticadora?</strong>
                <p>Una aplicación móvil (ej: Google Authenticator) que genera códigos temporales de 6 dígitos que cambian cada 30 segundos.</p>
                <strong>⚙️ ¿Para qué sirve / Qué función cumple?</strong>
                <p>Proporciona un segundo factor de autenticación mucho más seguro que los SMS, inmune al clonado de SIM.</p>
              </div>
              <div className="item-concepto">
                <strong>📖 ¿Qué son los Códigos de Recuperación?</strong>
                <p>Una lista de claves numéricas únicas entregadas al activar 2FA para ser usadas en emergencias.</p>
                <strong>⚙️ ¿Para qué sirve / Qué función cumple?</strong>
                <p>Permiten recuperar el acceso si pierdes o rompes tu teléfono móvil.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: ESCENARIOS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. Decisiones: Protege y Recupera tu Cuenta</h2>
          </div>
          <CajaExplicacionDinamica
            enQueConsiste="Simulador de toma de decisiones frente a situaciones de robo de cuenta o intentos de suplantación en videojuegos."
            comoInteractuar="Lee el caso presentado y elige la mejor acción para proteger tus inventarios y partidas."
            paraQueSirve="Entrenará tu velocidad de respuesta ante intentos de secuestro de cuentas gamer."
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

        {/* SECCIÓN 3: CHECKLIST */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <ListChecks className="icono-bloque-verde" size={24} />
            <h2>3. Checklist de Seguridad en Cuentas de Juegos</h2>
          </div>
          <CajaExplicacionDinamica
            enQueConsiste="Auditoría visual de blindaje en tus plataformas de videojuegos (Steam, Epic, Roblox, PlayStation, Xbox)."
            comoInteractuar="Marca cada control de seguridad que ya tengas activado en tus cuentas personales de juego."
            paraQueSirve="Evalúa la invulnerabilidad de tus inventarios y logros comprados contra robos."
          />

          <div className="lista-habitos-interactiva">
            {HABITOS_VIDEOJUEGOS_2DO.map((habito) => (
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
              <strong>Seguridad en Cuentas de Juegos: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Tus cuentas están blindadas y sabes recuperarlas.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para maximizar la seguridad.
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
            Mira estos videos para configurar 2FA y recuperar cuentas:
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
          <CajaExplicacionDinamica
            enQueConsiste="Quiz de 5 preguntas que evalúa tu comprensión sobre 2FA, recuperación de cuentas y protección de plataformas gamer."
            comoInteractuar="Selecciona la respuesta correcta para cada pregunta y luego presiona 'Enviar respuestas' al final."
            paraQueSirve="Consolida el conocimiento del módulo y genera retroalimentación individual por cada respuesta."
          />

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

export default Videojuegos2do;