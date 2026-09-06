import React from 'react';
import {
  AlertTriangle,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Phone,
  FileWarning,
  HelpCircle,
  Award,
  Fish
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { usePhishing3ro, SENALES_AVANZADAS_3RO } from '../../../../hooks/HooksPhishing/usePhishing3ro';
import './Phishing3ro.css';

export const Phishing3ro: React.FC = () => {
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
  } = usePhishing3ro();

  return (
    <main className="pagina-modulo-phishing-3ro">
      <HeaderModulo
        grado="3ro"
        modulo="3: Engaños por SMS, Llamadas y Archivos"
        titulo="Smishing, Vishing y Phishing Dirigido"
        subTitulo="Aprende a identificar fraudes por SMS, llamadas falsas de soporte técnico, archivos adjuntos maliciosos y enlaces engañosos en 3er Año."
        categoria="Defensa Digital y Privacidad"
        tiempoEstimado="50 min"
        icono={<Phone size={36} />}
      />

      <div className="contenedor-phishing-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Phishing en todas sus formas: Smishing, Vishing y Spear Phishing</h2>
          </div>
          <p className="texto-lectura-phishing">
            En 1ro y 2do aprendiste a detectar phishing básico y en redes sociales. Ahora veremos técnicas más avanzadas que usan <strong>SMS, llamadas telefónicas y archivos adjuntos</strong> para engañarte. También hablaremos del <strong>spear phishing</strong>, que es un ataque dirigido específicamente a ti.
          </p>

          <div className="grid-senales-phishing">
            <div className="caja-senal-item">
              <MessageSquare className="icono-senal rojo" size={28} />
              <h3>Smishing (SMS Falso)</h3>
              <p>Mensajes de texto que aparentan ser de bancos, tiendas o servicios de paquetería, pidiendo que hagas clic en enlaces maliciosos.</p>
            </div>

            <div className="caja-senal-item">
              <Phone className="icono-senal azul" size={28} />
              <h3>Vishing (Llamada Falsa)</h3>
              <p>Llamadas de supuestos técnicos, agentes bancarios o familiares en apuros que buscan sacarte información o acceso remoto.</p>
            </div>

            <div className="caja-senal-item">
              <FileWarning className="icono-senal amarillo" size={28} />
              <h3>Adjuntos Maliciosos</h3>
              <p>Archivos .exe, .scr o documentos con macros que, al abrirlos, instalan malware en tu equipo.</p>
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
                      <span className="badge-tipo-phishing">{msg.tipoPhishing}</span>
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
            {SENALES_AVANZADAS_3RO.map((senal) => (
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
                🏆 ¡Dominas las señales de smishing, vishing y adjuntos maliciosos!
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

export default Phishing3ro;