import React from 'react';
import {
  ClipboardCheck,
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Award,
  XCircle,
  AlertTriangle,
  FileText
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { useAuditoria5to, HABITOS_5TO } from '../../../../hooks/HooksAuditoria/useAuditoria5to';
import '../1ro/AuditoriaDigital1ro.css';
import './AuditoriaDigital5to.css';

export const AuditoriaDigital5to: React.FC = () => {
  const {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    riesgos,
    clasificarRiesgo,
    resultadoRiesgo,
    hallazgos,
    respuestasHallazgo,
    responderHallazgo,
    resultadoHallazgo,
    preguntasQuiz,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  } = useAuditoria5to();

  return (
    <main className="pagina-modulo-auditoria">
      <HeaderModulo
        grado="5to"
        modulo="5: Auditoría Institucional"
        titulo="Auditoría e Informe Digital Comunitario"
        subTitulo="Conviértete en un líder digital capaz de realizar diagnósticos cibernéticos, diseñar matrices de riesgo y presentar recomendaciones al Liceo."
        categoria="Auditoría e Higiene"
        tiempoEstimado="60 min"
        icono={<ClipboardCheck size={36} />}
      />

      <div className="contenedor-auditoria-contenido">
        {/* ========== SECCIÓN 1: TEORÍA ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. La Auditoría Cibernética en 5to Año</h2>
          </div>
          <p className="texto-lectura-modulo">
            Como futuro bachiller del Liceo Bolivariano, la auditoría digital pasa de un enfoque personal a un <strong>liderazgo comunitario</strong>. Ya no solo proteges tus dispositivos; ahora eres capaz de evaluar el entorno digital de tu institución y proponer mejoras concretas.
          </p>

          <div className="grid-pilares-higiene">
            <div className="caja-pilar-higiene">
              <ClipboardCheck className="icono-pilar azul" size={28} />
              <h3>Levantamiento de Información</h3>
              <p><strong>📖 ¿Qué es?:</strong> Proceso de inspección de redes, equipos y credenciales.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Recopilar datos reales sobre fallas antes de diseñar un plan de defensa.</p>
            </div>

            <div className="caja-pilar-higiene">
              <FileSpreadsheet className="icono-pilar rojo" size={28} />
              <h3>Matriz de Riesgo Ciber</h3>
              <p><strong>📖 ¿Qué es?:</strong> Herramienta que pondera la probabilidad y el impacto de un ataque.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Priorizar las fallas más urgentes (Crítico/Alto) que requieren solución inmediata.</p>
            </div>

            <div className="caja-pilar-higiene">
              <Award className="icono-pilar verde" size={28} />
              <h3>Plan de Mitigación</h3>
              <p><strong>📖 ¿Qué es?:</strong> Estrategia técnica y educativa de respuesta.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Corregir vulnerabilidades de forma estructurada con directivos y docentes.</p>
            </div>

            <div className="caja-pilar-higiene">
              <ShieldCheck className="icono-pilar morado" size={28} />
              <div className="item-concepto">
                <strong>Matriz de riesgo:</strong> Herramienta visual que cruza probabilidad e impacto para determinar la criticidad de una amenaza.
              </div>
              <div className="item-concepto">
                <strong>Hallazgo:</strong> Descripción estructurada de un problema detectado, incluyendo evidencia, impacto y recomendación.
              </div>
              <div className="item-concepto">
                <strong>Divulgación responsable:</strong> Protocolo ético que consiste en notificar privadamente al afectado antes de publicar una vulnerabilidad.
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECCIÓN 2: MATRIZ DE RIESGO ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <AlertTriangle className="icono-bloque-rojo" size={24} />
            <h2>2. Clasifica el Riesgo</h2>
          </div>
          <p className="texto-lectura-modulo">
            Para cada escenario, determina la <strong>criticidad</strong> (Crítico, Alto, Medio o Bajo) según la probabilidad y el impacto.
          </p>

          <div className="riesgos-lista">
            {riesgos.map(riesgo => (
              <div key={riesgo.id} className="riesgo-card">
                <h3 className="riesgo-titulo">{riesgo.titulo}</h3>
                <p className="riesgo-descripcion">{riesgo.descripcion}</p>
                <div className="riesgo-probabilidad-impacto">
                  <span className="badge-probabilidad">Probabilidad: {riesgo.probabilidad}</span>
                  <span className="badge-impacto">Impacto: {riesgo.impacto}</span>
                </div>
                <div className="riesgo-opciones">
                  {['Crítico', 'Alto', 'Medio', 'Bajo'].map(criticidad => (
                    <button
                      key={criticidad}
                      className={`boton-criticidad ${criticidad.toLowerCase()}`}
                      onClick={() => clasificarRiesgo(riesgo.id, criticidad)}
                    >
                      {criticidad}
                    </button>
                  ))}
                </div>
                {resultadoRiesgo[riesgo.id] !== undefined && (
                  <div className={`feedback-proceso ${resultadoRiesgo[riesgo.id] ? 'correcto' : 'incorrecto'}`}>
                    {resultadoRiesgo[riesgo.id] ? (
                      <><CheckCircle2 size={18} /> ¡Acertaste! </>
                    ) : (
                      <><XCircle size={18} /> Incorrecto: </>
                    )}
                    {riesgo.explicacion}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========== SECCIÓN 3: REDACCIÓN DE HALLAZGOS ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <FileText className="icono-bloque-azul" size={24} />
            <h2>3. Redacta Hallazgos Profesionales</h2>
          </div>
          <p className="texto-lectura-modulo">
            Un buen informe de auditoría requiere hallazgos claros y accionables. Elige la redacción más adecuada para cada situación.
          </p>

          <div className="hallazgos-lista">
            {hallazgos.map(hallazgo => (
              <div key={hallazgo.id} className="hallazgo-card">
                <p className="hallazgo-contexto">{hallazgo.contexto}</p>
                <p className="hallazgo-pregunta">{hallazgo.problema}</p>
                <div className="opciones-escenario">
                  {hallazgo.opcionesInforme.map((opcion, idx) => (
                    <button
                      key={idx}
                      className={`opcion-escenario-btn ${respuestasHallazgo[hallazgo.id] === idx ? 'seleccionada' : ''}`}
                      onClick={() => responderHallazgo(hallazgo.id, idx)}
                    >
                      {String.fromCharCode(65 + idx)}) {opcion}
                    </button>
                  ))}
                </div>
                {resultadoHallazgo[hallazgo.id] !== undefined && (
                  <div className={`feedback-escenario ${resultadoHallazgo[hallazgo.id] ? 'correcto' : 'incorrecto'}`}>
                    {resultadoHallazgo[hallazgo.id] ? (
                      <><CheckCircle2 size={18} /> ¡Correcto! </>
                    ) : (
                      <><XCircle size={18} /> Atención: </>
                    )}
                    {hallazgo.explicacion}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========== SECCIÓN 4: CHECKLIST DE COMPETENCIAS ========== */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <CheckCircle2 className="icono-bloque-verde" size={24} />
            <h2>4. Matriz de Auditoría Comunitaria</h2>
          </div>
          <p className="subtitulo-bloque">
            Evalúa tus competencias para conducir una auditoría de ciberseguridad escolar:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_5TO.map((habito) => (
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
                  <span className="importancia-habito">📌 Enfoque: {habito.enfoque}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="resultado-diagnostico-bar">
            <div className="info-porcentaje">
              <strong>Nivel de Liderazgo Digital: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} competencias validadas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Nivel Experto Alcanzado! Estás capacitado para elaborar informes de auditoría cibernética comunitarios.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa la revisión de cada pilar para graduarte como mentor de ciberseguridad en el liceo.
              </div>
            )}
          </div>
        </section>

        {/* ========== SECCIÓN 5: QUIZ FINAL ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>5. Evaluación Final de Grado</h2>
          </div>
          <p className="texto-lectura-modulo">
            Demuestra tu preparación como auditor digital respondiendo estas preguntas.
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

export default AuditoriaDigital5to;