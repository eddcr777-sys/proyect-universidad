import React from 'react';
import {
  ShieldCheck,
  Save,
  Activity,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  FileSearch,
  XCircle,
  Award,
  AlertTriangle,
  Lock
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { useAuditoria3ro, HABITOS_3RO } from '../../../../hooks/HooksAuditoria/useAuditoria3ro';
import '../1ro/AuditoriaDigital1ro.css'; // Estilos base reutilizados
import './AuditoriaDigital3ro.css'; // Estilos específicos de 3ro

export const AuditoriaDigital3ro: React.FC = () => {
  const {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    procesos,
    resultadoProceso,
    evaluarProceso,
    escenariosFirewall,
    respuestasFirewall,
    responderFirewall,
    resultadoFirewall,
    preguntasQuiz,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  } = useAuditoria3ro();

  return (
    <main className="pagina-modulo-auditoria">
      <HeaderModulo
        grado="3ro"
        modulo="3: Auditoría y Resguardo"
        titulo="Checklist de Ciberseguridad y Copias de Seguridad"
        subTitulo="Una auditoría es una revisión organizada de tus puntos débiles. Aplica tu primera lista de chequeo (Checklist) para proteger tu información en 3er Año."
        categoria="Auditoría e Higiene"
        tiempoEstimado="50 min"
        icono={<FileSearch size={36} />}
      />

      <div className="contenedor-auditoria-contenido">
        {/* ========== SECCIÓN 1: TEORÍA AMPLIADA ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Evaluando nuestras Defensas</h2>
          </div>
          <p className="texto-lectura-modulo">
            En 3er Año, no basta con limpiar el dispositivo; necesitamos comprobar que nuestras "murallas" (antivirus, copias de seguridad y cortafuegos) estén fuertes y preparadas para defendernos. Esta es la base de una <strong>auditoría de sistema</strong>.
          </p>

          <div className="grid-pilares-higiene">
            <div className="caja-pilar-higiene">
              <Activity className="icono-pilar verde" size={28} />
              <h3>Estado del Antivirus</h3>
              <p>Un antivirus desactualizado es como un guardia de seguridad dormido. Debes verificar periódicamente que esté escaneando tu equipo.</p>
            </div>

            <div className="caja-pilar-higiene">
              <Save className="icono-pilar azul" size={28} />
              <h3>Regla de los Backups (3-2-1)</h3>
              <p>Tener 3 copias de tu información, en 2 medios distintos (computadora y nube), y al menos 1 copia fuera de tu casa.</p>
            </div>

            <div className="caja-pilar-higiene">
              <ShieldCheck className="icono-pilar rojo" size={28} />
              <h3>El Cortafuegos (Firewall)</h3>
              <p>Funciona como un filtro en la puerta de tu computadora que decide qué conexiones de internet entran y cuáles se bloquean.</p>
            </div>

            <div className="caja-pilar-higiene">
              <Lock className="icono-pilar morado" size={28} />
              <h3>Control de Procesos</h3>
              <p>Aprender a identificar procesos sospechosos en el Administrador de tareas es una habilidad clave para detectar malware.</p>
            </div>
          </div>

          <div className="conceptos-clave-grid">
            <h3 className="titulo-mini-seccion">Conceptos Clave</h3>
            <div className="lista-conceptos">
              <div className="item-concepto">
                <strong>Antivirus:</strong> Software que detecta, bloquea y elimina malware. Debe estar actualizado para reconocer amenazas nuevas.
              </div>
              <div className="item-concepto">
                <strong>Firewall:</strong> Barrera que controla el tráfico de red entrante y saliente según reglas de seguridad.
              </div>
              <div className="item-concepto">
                <strong>Backup:</strong> Copia de seguridad de tus archivos en un lugar distinto al original (nube, disco externo, pendrive).
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECCIÓN 2: SIMULADOR DE PROCESOS ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <AlertTriangle className="icono-bloque-rojo" size={24} />
            <h2>2. ¿Es malware o no? Identifica procesos</h2>
          </div>
          <p className="texto-lectura-modulo">
            En el Administrador de tareas verás muchos procesos. Algunos son legítimos del sistema, otros pueden ser malware disfrazado. Para cada proceso, decide si es <strong>Seguro</strong> o <strong>Sospechoso</strong>.
          </p>

          <div className="procesos-lista">
            {procesos.map(proceso => (
              <div key={proceso.id} className="proceso-card">
                <div className="proceso-info">
                  <h3 className="proceso-nombre">{proceso.nombre}</h3>
                  <p className="proceso-descripcion">{proceso.descripcion}</p>
                </div>
                <div className="proceso-acciones">
                  <button
                    className={`boton-proceso seguro ${resultadoProceso[proceso.id] === true && proceso.esMalware === false ? 'acierto' : ''}`}
                    onClick={() => evaluarProceso(proceso.id, false)}
                  >
                    <ShieldCheck size={18} /> Seguro
                  </button>
                  <button
                    className={`boton-proceso sospechoso ${resultadoProceso[proceso.id] === true && proceso.esMalware === true ? 'acierto' : ''}`}
                    onClick={() => evaluarProceso(proceso.id, true)}
                  >
                    <AlertTriangle size={18} /> Sospechoso
                  </button>
                </div>
                {resultadoProceso[proceso.id] !== undefined && (
                  <div className={`feedback-proceso ${resultadoProceso[proceso.id] ? 'correcto' : 'incorrecto'}`}>
                    {resultadoProceso[proceso.id] ? (
                      <><CheckCircle2 size={18} /> ¡Acertaste! </>
                    ) : (
                      <><XCircle size={18} /> Incorrecto: </>
                    )}
                    {proceso.explicacion}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========== SECCIÓN 3: SIMULADOR DE FIREWALL ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Lock className="icono-bloque-azul" size={24} />
            <h2>3. Decisiones de Firewall</h2>
          </div>
          <p className="texto-lectura-modulo">
            El firewall te pregunta si deseas permitir que ciertos programas se conecten a internet. Elige la opción correcta en cada situación.
          </p>

          <div className="escenarios-lista">
            {escenariosFirewall.map(escenario => (
              <div key={escenario.id} className="escenario-card">
                <h3 className="escenario-titulo">{escenario.titulo}</h3>
                <p className="escenario-descripcion">{escenario.descripcion}</p>
                <div className="opciones-escenario">
                  {escenario.opciones.map((opcion, idx) => (
                    <button
                      key={idx}
                      className={`opcion-escenario-btn ${respuestasFirewall[escenario.id] === idx ? 'seleccionada' : ''}`}
                      onClick={() => responderFirewall(escenario.id, idx)}
                    >
                      {String.fromCharCode(65 + idx)}) {opcion}
                    </button>
                  ))}
                </div>
                {resultadoFirewall[escenario.id] !== undefined && (
                  <div className={`feedback-escenario ${resultadoFirewall[escenario.id] ? 'correcto' : 'incorrecto'}`}>
                    {resultadoFirewall[escenario.id] ? (
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

        {/* ========== SECCIÓN 4: CHECKLIST TÉCNICO ========== */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <FileSearch className="icono-bloque-verde" size={24} />
            <h2>4. Checklist Técnico de Resguardo</h2>
          </div>
          <p className="subtitulo-bloque">
            Audita el estado de protección técnica de tus dispositivos:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_3RO.map((habito) => (
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
              <strong>Índice de Resguardo: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} controles técnicos)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Estupendo! Tu información y sistemas están debidamente respaldados.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Asegúrate de realizar tu copia de seguridad esta misma semana.
              </div>
            )}
          </div>
        </section>

        {/* ========== SECCIÓN 5: QUIZ ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>5. Evaluación Final</h2>
          </div>
          <p className="texto-lectura-modulo">
            Demuestra lo que aprendiste respondiendo estas preguntas.
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

export default AuditoriaDigital3ro;