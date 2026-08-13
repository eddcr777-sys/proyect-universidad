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
  Award,
  Link,
  Eye
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { usePhishing2do, SENALES_AVANZADAS } from '../../../../hooks/HooksPhishing/usePhishing2do';
import '../1ro/Phishing1ro.css';
import './Phishing2do.css';

export const Phishing2do: React.FC = () => {
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
  } = usePhishing2do();

  return (
    <main className="pagina-modulo-phishing-2do">
      <HeaderModulo
        grado="2do"
        modulo="2: Engaños en Redes Sociales"
        titulo="Phishing Avanzado y Suplantación en Redes Sociales"
        subTitulo="Aprende a identificar perfiles falsos, enlaces acortados y mensajes de suplantación en WhatsApp, Instagram y otras plataformas."
        categoria="Defensa Digital y Privacidad"
        tiempoEstimado="45 min"
        icono={<Fish size={36} />}
      />

      <div className="contenedor-phishing-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Phishing en Redes Sociales: La Evolución del Engaño</h2>
          </div>
          <p className="texto-lectura-phishing">
            En 1er año aprendimos a reconocer el phishing básico por correo. Ahora veremos cómo los atacantes han refinado sus técnicas: crean <strong>perfiles falsos</strong>, utilizan <strong>enlaces acortados</strong> para ocultar destinos y suplantan a amigos o instituciones para ganarse tu confianza.
          </p>

          <div className="grid-senales-phishing">
            <div className="caja-senal-item">
              <Link className="icono-senal rojo" size={28} />
              <h3>Enlaces Acortados</h3>
              <p>Servicios como bit.ly o tinyurl esconden la URL real. Un atacante puede redirigirte a un sitio falso sin que lo notes.</p>
            </div>

            <div className="caja-senal-item">
              <Eye className="icono-senal azul" size={28} />
              <h3>Perfiles Falsos</h3>
              <p>Cuentas que imitan a personas o marcas reales. Revisa siempre el nombre de usuario exacto y el check de verificación.</p>
            </div>

            <div className="caja-senal-item">
              <MessageSquare className="icono-senal amarillo" size={28} />
              <h3>Suplantación en WhatsApp</h3>
              <p>Mensajes de "familiares" con números nuevos pidiendo códigos de verificación o dinero. Siempre llama para confirmar.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LABORATORIO */}
        <section className="bloque-phishing-tarjeta interactivo-caja">
          <div className="encabezado-bloque-phishing">
            <MessageSquare className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio Interactivo: Detecta el Engaño Avanzado</h2>
          </div>
          <p className="subtitulo-bloque-phishing">
            Analiza cada mensaje y decide si es <strong>Seguro</strong> o <strong>Phishing</strong>:
          </p>

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

        {/* SECCIÓN 3: CHECKLIST DE SEÑALES AVANZADAS */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>3. Señales de Alerta Avanzadas</h2>
          </div>
          <p className="subtitulo-bloque-phishing">
            Marca las señales que ya sabes reconocer:
          </p>

          <div className="lista-senales-interactiva">
            {SENALES_AVANZADAS.map((senal) => (
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
                🏆 ¡Dominas las señales de phishing en redes sociales!
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa el checklist para estar preparado ante engaños avanzados.
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

export default Phishing2do;