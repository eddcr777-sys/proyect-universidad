import React from 'react';
import {
  Fish,
  AlertTriangle,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Mail,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Award
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { usePhishing1ro, SENALES_PHISHING } from '../../../../hooks/HooksPhishing/usePhishing1ro';
import './Phishing1ro.css';

export const Phishing1ro: React.FC = () => {
  const {
    mensajes,
    respuestasMensajes,
    evaluarMensaje,
    senalesComprobadas,
    toggleSenal,
    totalSenales,
    senalesCompletadas,
    porcentajeSenales,
    preguntasQuiz,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  } = usePhishing1ro();

  return (
    <main className="pagina-modulo-phishing">
      <HeaderModulo
        grado="1ro"
        modulo="1: Detección de Engaños"
        titulo="Prevención de Phishing e Identificación de Mensajes Falsos"
        subTitulo="Aprende a reconocer señuelos, correos sospechosos y engaños por mensajes de texto para proteger tu información personal en 1er Año."
        categoria="Defensa Digital y Privacidad"
        tiempoEstimado="45 min"
        icono={<Fish size={36} />}
      />

      <div className="contenedor-phishing-contenido">
        {/* SECCIÓN 1: CONCEPTOS BÁSICOS */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. ¿Qué es el Phishing?</h2>
          </div>
          <p className="texto-lectura-phishing">
            La palabra <strong>Phishing</strong> viene del inglés <em>fishing</em> (pescar). Es una técnica de engaño donde personas malintencionadas envían mensajes falsos buscando que "muerdas el anzuelo" para robar tu usuario, contraseñas o datos familiares.
          </p>

          <div className="grid-senales-phishing">
            <div className="caja-senal-item">
              <AlertTriangle className="icono-senal rojo" size={28} />
              <h3>Sensación de Urgencia</h3>
              <p>Te presionan diciendo: <em>"¡Hazlo ya en 5 minutos o perderás tu cuenta!"</em> para que actúes sin pensar.</p>
            </div>

            <div className="caja-senal-item">
              <Fish className="icono-senal azul" size={28} />
              <h3>Premios Demasiado Buenos</h3>
              <p>Te prometen dinero, teléfonos de alta gama o diamantes gratis en juegos a cambio de hacer clic.</p>
            </div>

            <div className="caja-senal-item">
              <Mail className="icono-senal amarillo" size={28} />
              <h3>Enlaces y Remitentes Falsos</h3>
              <p>Direcciones con faltas de ortografía o dominios extraños como <code>@soporte-gratis-123.com</code>.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LABORATORIO INTERACTIVO */}
        <section className="bloque-phishing-tarjeta interactivo-caja">
          <div className="encabezado-bloque-phishing">
            <MessageSquare className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio Interactivo: Detecta el Anzuelo</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Laboratorio: Detecta el Anzuelo"
            enQueConsiste="Analizarás 3 casos reales simulados de correos y mensajes de texto para determinar si corresponden a comunicaciones legítimas o a intentos de suplantación de identidad (Phishing)."
            comoInteractuar="Lee atentamente el remitente, asunto y mensaje. Haz clic en 'Es Seguro' si crees que la fuente es confiable, o en 'Es Phishing / Engaño' si detectas peligro. Al seleccionar una opción, verás la explicación detallada de la respuesta correcta."
            paraQueSirve="Entrenarás tu capacidad crítica para detectar remitentes sospechosos, URLs alteradas y engaños urgentes antes de hacer clic en tu vida cotidiana."
          />

          <div className="lista-simuladores-phishing">
            {mensajes.map((msg) => {
              const resEleccion = respuestasMensajes[msg.id];

              return (
                <div key={msg.id} className="tarjeta-mensaje-simulado">
                  <div className="cabecera-mensaje-simulado">
                    <span className="badge-canal">{msg.canal}</span>
                    <span className="remitente-texto">De: {msg.remitente}</span>
                  </div>

                  <div className="cuerpo-mensaje-simulado">
                    <h4>Asunto: {msg.asunto}</h4>
                    <p>"{msg.contenido}"</p>
                  </div>

                  <div className="acciones-decision-phishing">
                    <button
                      className={`btn-decision seguro ${resEleccion === false ? 'seleccionado' : ''}`}
                      onClick={() => evaluarMensaje(msg.id, false)}
                    >
                      <ShieldCheck size={18} /> Es Seguro
                    </button>
                    <button
                      className={`btn-decision phishing ${resEleccion === true ? 'seleccionado' : ''}`}
                      onClick={() => evaluarMensaje(msg.id, true)}
                    >
                      <AlertTriangle size={18} /> Es Phishing / Engaño
                    </button>
                  </div>

                  {resEleccion !== undefined && (
                    <div className={`feedback-decision ${resEleccion === msg.esPhishing ? 'acierto' : 'fallo'}`}>
                      {resEleccion === msg.esPhishing ? (
                        <div className="flex-resultado">
                          <CheckCircle2 size={20} className="icono-acierto" />
                          <span><strong>¡Excelente diagnóstico!</strong> {msg.explicacion}</span>
                        </div>
                      ) : (
                        <div className="flex-resultado">
                          <XCircle size={20} className="icono-fallo" />
                          <span><strong>Atención:</strong> {msg.explicacion}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN 3: CHECKLIST DE SEÑALES */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>3. Señales de Alerta que Debes Conocer</h2>
          </div>
          <p className="subtitulo-bloque-phishing">
            Marca las señales de phishing que ya sabes reconocer:
          </p>

          <div className="lista-senales-interactiva">
            {SENALES_PHISHING.map((senal) => (
              <div
                key={senal.id}
                className={`item-senal-check ${senalesComprobadas[senal.id] ? 'activo' : ''}`}
                onClick={() => toggleSenal(senal.id)}
              >
                <input
                  type="checkbox"
                  checked={!!senalesComprobadas[senal.id]}
                  onChange={() => {}}
                  className="checkbox-phishing"
                />
                <div className="info-item-senal">
                  <span className="categoria-badge-phishing">{senal.categoria}</span>
                  <p className="texto-senal">{senal.texto}</p>
                  <span className="ejemplo-senal">📌 Ejemplo: {senal.ejemplo}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="resultado-diagnostico-bar phishing">
            <div className="info-porcentaje">
              <strong>Reconocimiento de Señales: {porcentajeSenales}%</strong>
              <span>({senalesCompletadas} de {totalSenales} señales identificadas)</span>
            </div>
            <div className="barra-fondo-diagnostico phishing">
              <div className="barra-relleno-diagnostico phishing" style={{ width: `${porcentajeSenales}%` }}></div>
            </div>
            {porcentajeSenales === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Ya conoces todas las señales de alerta! Estás listo para defenderte.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Repasa las señales para estar preparado ante cualquier engaño.
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 4: QUIZ */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>4. Evaluación Final</h2>
          </div>
          <p className="texto-lectura-phishing">
            Demuestra lo aprendido respondiendo estas preguntas.
          </p>

          <div className="quiz-container phishing">
            {preguntasQuiz.map(pregunta => (
              <div key={pregunta.id} className="pregunta-quiz phishing">
                <h3 className="pregunta-titulo">{pregunta.id}. {pregunta.pregunta}</h3>
                <div className="opciones-quiz-phishing">
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
                className="boton-enviar-quiz phishing"
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

export default Phishing1ro;