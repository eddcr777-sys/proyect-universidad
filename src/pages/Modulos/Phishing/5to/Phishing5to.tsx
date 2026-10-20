import React from 'react';
import {
  UserX,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Award,
  Briefcase,
  FileBarChart2,
  Megaphone,
  AlertTriangle
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { usePhishing5to } from '../../../../hooks/HooksPhishing/usePhishing5to';
import './Phishing5to.css';

export const Phishing5to: React.FC = () => {
  const {
    escenarios,
    
    respuestasEscenario,
    evaluarEscenario,
    campañas,
    respuestasCampaña,
    evaluarCampaña,
    preguntasQuiz,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  } = usePhishing5to();

  return (
    <main className="pagina-modulo-phishing-5to">
      <HeaderModulo
        grado="5to"
        modulo="5: Ingeniería Social y Concientización"
        titulo="Phishing Ético, Simulación y Auditoría del Factor Humano"
        subTitulo="Aprende a evaluar campañas de simulación de phishing, analizar técnicas de ingeniería social y redactar informes de concientización organizacional."
        categoria="Defensa Digital y Privacidad"
        tiempoEstimado="60 min"
        icono={<UserX size={36} />}
      />

      <div className="contenedor-phishing-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Ingeniería Social y Auditoría del Factor Humano</h2>
          </div>
          <p className="texto-lectura-phishing">
            El phishing no solo es técnico: explota la <strong>psicología humana</strong>. Como auditor, tu misión es evaluar qué tan preparada está una organización ante estas manipulaciones y proponer mejoras. Esto incluye analizar <strong>campañas de simulación</strong> y educar a los usuarios.
          </p>

          <div className="grid-senales-phishing">
            <div className="caja-senal-item">
              <Briefcase className="icono-senal rojo" size={28} />
              <h3>Pretexting (Creación de Pretextos Falsos)</h3>
              <p><strong>📖 ¿Qué es?:</strong> Elaboración de una historia o escenario ficticio creíble.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Ganar confianza y lograr que un empleado entregue claves o accesos internos.</p>
            </div>

            <div className="caja-senal-item">
              <Megaphone className="icono-senal azul" size={28} />
              <h3>Campañas de Simulación Controlada</h3>
              <p><strong>📖 ¿Qué es?:</strong> Envíos pedagógicos y seguros de correos falsos a los empleados.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Medir el porcentaje de vulnerabilidad de la institución y capacitar a quienes caigan en el señuelo.</p>
            </div>

            <div className="caja-senal-item">
              <FileBarChart2 className="icono-senal amarillo" size={28} />
              <h3>Métricas de Concientización</h3>
              <p><strong>📖 ¿Qué es?:</strong> Indicadores de rendimiento (tasa de clics, tasa de reporte de sospechas).</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Demostrar con números la efectividad del entrenamiento de ciberseguridad.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: IDENTIFICA EL ATAQUE DE INGENIERÍA SOCIAL */}
        <section className="bloque-phishing-tarjeta interactivo-caja">
          <div className="encabezado-bloque-phishing">
            <UserX className="icono-bloque-rojo" size={24} />
            <h2>2. ¿Ataque de Ingeniería Social o Actividad Legítima?</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Laboratorio de Ingeniería Social Avanzada"
            enQueConsiste="Evaluarás 3 situaciones corporativas complejas para dictaminar si corresponden a un ataque de pretexting / suplantación o a un procedimiento seguro."
            comoInteractuar="Analiza el pretexto presentado y presiona 'Es Actividad Segura' o 'Es Ataque / Pretexting'. Obtendrás de inmediato la justificación técnica de la auditoría."
            paraQueSirve="Capacita a estudiantes de 5to año para auditar el factor humano en empresas e instituciones educativas."
          />

          <div className="lista-simuladores-phishing">
            {escenarios.map((esc) => {
              const resEleccion = respuestasEscenario[esc.id];

              return (
                <div key={esc.id} className="tarjeta-mensaje-simulado">
                  <h3 className="titulo-escenario">{esc.titulo}</h3>
                  <p className="descripcion-escenario">{esc.descripcion}</p>
                  <span className="badge-tecnica">{esc.tecnica}</span>

                  <div className="acciones-decision-phishing">
                    <button
                      className={`btn-decision seguro ${resEleccion === false ? 'seleccionado' : ''}`}
                      onClick={() => evaluarEscenario(esc.id, false)}
                    >
                      <ShieldCheck size={18} /> Seguro
                    </button>
                    <button
                      className={`btn-decision phishing ${resEleccion === true ? 'seleccionado' : ''}`}
                      onClick={() => evaluarEscenario(esc.id, true)}
                    >
                      <UserX size={18} /> Ataque
                    </button>
                  </div>

                  {resEleccion !== undefined && (
                    <div className={`feedback-decision ${resEleccion === esc.esAtaque ? 'acierto' : 'fallo'}`}>
                      <div className="flex-resultado">
                        {resEleccion === esc.esAtaque ? (
                          <CheckCircle2 size={20} className="icono-acierto" />
                        ) : (
                          <XCircle size={20} className="icono-fallo" />
                        )}
                        <span>{esc.explicacion}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN 3: AUDITORÍA DE CAMPAÑAS Y PLAN DE ACCIÓN */}
        <section className="bloque-phishing-tarjeta interactivo-caja">
          <div className="encabezado-bloque-phishing">
            <FileBarChart2 className="icono-bloque-verde" size={24} />
            <h2>3. Taller del Auditor: Análisis de Campañas y Toma de Decisiones</h2>
          </div>

          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Taller de Auditoría — Paso a Paso"
            enQueConsiste="Asumirás el rol de Auditor de Ciberseguridad del Liceo. Analizarás 3 reportes reales de simulación con sus tasas de clics y conductas de los estudiantes."
            comoInteractuar="1. Observa el porcentaje de clics y la barra visual de riesgo de cada informe. 2. Lee el contexto de lo ocurrido con los estudiantes y la directiva. 3. Elige la decisión o dictamen profesional de auditoría adecuado entre las 3 opciones. 4. Revisa la justificación técnica inmediata para conocer las mejores prácticas del sector."
            paraQueSirve="Enseña a interpretar métricas de ciberseguridad, diferenciar simulaciones pedagógicas de malas prácticas y aplicar soluciones formativas en lugar de castigos."
          />

          <div className="lista-simuladores-phishing">
            {campañas.map((camp) => {
              const resEleccion = respuestasCampaña[camp.id];

              return (
                <div key={camp.id} className="tarjeta-auditoria-campaña">
                  <div className="cabecera-auditoria-campaña">
                    <div className="datos-principales-auditoria">
                      <span className="etiqueta-caso-auditoria">Reporte #{camp.id}</span>
                      <h3 className="titulo-campaña">{camp.nombre}</h3>
                      <p className="subtitulo-auditoria-caso">{camp.subtitulo}</p>
                    </div>

                    <div className={`badge-nivel-riesgo ${camp.nivelRiesgo}`}>
                      {camp.nivelRiesgo === 'bajo' ? (
                        <ShieldCheck size={16} />
                      ) : (
                        <AlertTriangle size={16} />
                      )}
                      <span>{camp.etiquetaRiesgo}</span>
                    </div>
                  </div>

                  {/* Barra de progreso visual de tasa de clics */}
                  <div className="seccion-barra-metrica">
                    <div className="etiquetas-barra-metrica">
                      <span className="texto-tasa-alumnos">Tasa de estudiantes que cayeron en la trampa:</span>
                      <strong className={`valor-porcentaje-tasa ${camp.nivelRiesgo}`}>{camp.tasaClics}%</strong>
                    </div>
                    <div className="pista-barra-riesgo">
                      <div
                        className={`relleno-barra-riesgo ${camp.nivelRiesgo}`}
                        style={{ width: `${camp.tasaClics}%` }}
                      />
                    </div>
                  </div>

                  <p className="descripcion-campaña">{camp.descripcion}</p>

                  <div className="caja-pregunta-auditor">
                    <div className="encabezado-pregunta-auditor">
                      <Briefcase size={18} className="icono-pregunta-auditor" />
                      <h4>{camp.preguntaAuditor}</h4>
                    </div>

                    <div className="opciones-auditoria-lista">
                      {camp.opciones.map((opcion, idx) => {
                        const seleccionada = resEleccion === idx;
                        const respondida = resEleccion !== undefined;
                        const esCorrecta = idx === camp.respuestaCorrecta;

                        let claseBoton = 'btn-opcion-auditoria';
                        if (respondida) {
                          if (seleccionada && esCorrecta) {
                            claseBoton += ' acierto-seleccionado';
                          } else if (seleccionada && !esCorrecta) {
                            claseBoton += ' error-seleccionado';
                          } else if (esCorrecta) {
                            claseBoton += ' correcta-sugerida';
                          }
                        }

                        return (
                          <button
                            key={idx}
                            type="button"
                            className={claseBoton}
                            onClick={() => evaluarCampaña(camp.id, idx)}
                          >
                            <span className="letra-opcion-auditoria">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="texto-opcion-auditoria">{opcion}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {resEleccion !== undefined && (
                    <div className={`feedback-decision ${resEleccion === camp.respuestaCorrecta ? 'acierto' : 'fallo'}`}>
                      <div className="flex-resultado">
                        {resEleccion === camp.respuestaCorrecta ? (
                          <CheckCircle2 size={22} className="icono-acierto" />
                        ) : (
                          <XCircle size={22} className="icono-fallo" />
                        )}
                        <div>
                          <strong>
                            {resEleccion === camp.respuestaCorrecta
                              ? '¡Dictamen Profesional Correcto!'
                              : 'Revisión de Auditoría Recomendada:'}
                          </strong>
                          <p style={{ margin: '0.25rem 0 0 0', lineHeight: 1.5 }}>
                            {camp.explicacion}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN 4: QUIZ FINAL */}
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

export default Phishing5to;