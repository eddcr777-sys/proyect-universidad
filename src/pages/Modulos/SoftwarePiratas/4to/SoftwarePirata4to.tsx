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
  Scale,
  FileText,
  Bell
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { useSoftwarePirata4to, HABITOS_SOFTWARE_4TO } from '../../../../hooks/HooksSoftwarePirata/useSoftwarePirata4to';
import './SoftwarePirata4to.css';

export const SoftwarePirata4to: React.FC = () => {
  const {
    casos,
    respuestasCaso,
    evaluarCaso,
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
  } = useSoftwarePirata4to();

  return (
    <main className="pagina-modulo-software">
      <HeaderModulo
        grado="4to"
        modulo="4: Cryptojacking y Marco Legal"
        titulo="Minería de criptomonedas y propiedad intelectual"
        subTitulo="Aprende cómo detectar programas que usan tu CPU/GPU para minar criptomonedas y las implicaciones legales en 4to Año."
        categoria="Software y Descargas"
        tiempoEstimado="55 min"
        icono={<Scale size={36} />}
      />

      <div className="contenedor-software-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Cryptojacking y Propiedad Intelectual</h2>
          </div>
          <p className="texto-lectura-modulo">
            Muchos instaladores piratas incluyen mineros ocultos que consumen los recursos de tu hardware. Además, el uso de software pirateado vulnera el derecho de autor.
          </p>

          <div className="grid-pilares-software">
            <div className="caja-pilar-software">
              <Scale className="icono-pilar rojo" size={28} />
              <h3>Cryptojacking</h3>
              <p><strong>📖 ¿Qué es?:</strong> Uso no autorizado de tu CPU/GPU para minar criptomonedas.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve detectarlo?:</strong> Prevenir la ralentización extrema y el sobrecalentamiento de tu computadora.</p>
            </div>

            <div className="caja-pilar-software">
              <FileText className="icono-pilar azul" size={28} />
              <h3>Licencia EULA / Contrato de Uso</h3>
              <p><strong>📖 ¿Qué es?:</strong> Acuerdo legal entre el fabricante del programa y el usuario final.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Conocer los límites de uso permitido y evitar sanciones legales.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LABORATORIO DE CASOS LEGALES */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. ¿Es Delito o Uso Legal?</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Evaluador de Delitos Informáticos y Licencias"
            enQueConsiste="Analizarás 3 casos sobre uso de instaladores no oficiales y minería de criptomonedas."
            comoInteractuar="1. Lee el caso. 2. Presiona 'Es Legal' o 'Es Delito / Uso Ilegal'. 3. Revisa la retroalimentación legal del SAPI y leyes informáticas."
            paraQueSirve="Entenderás el impacto legal y técnico de la piratería en entornos educativos y laborales."
          />

          <div className="casos-lista">
            {casos.map(caso => (
              <div key={caso.id} className="caso-card">
                <h3 className="caso-titulo">{caso.titulo}</h3>
                <p className="caso-descripcion">{caso.descripcion}</p>
                <div className="acciones-decision">
                  <button
                    className={`btn-decision seguro ${respuestasCaso[caso.id] === false ? 'seleccionado' : ''}`}
                    onClick={() => evaluarCaso(caso.id, false)}
                  >
                    <ShieldCheck size={18} /> Legal
                  </button>
                  <button
                    className={`btn-decision phishing ${respuestasCaso[caso.id] === true ? 'seleccionado' : ''}`}
                    onClick={() => evaluarCaso(caso.id, true)}
                  >
                    <Scale size={18} /> Delito
                  </button>
                </div>
                {respuestasCaso[caso.id] !== undefined && (
                  <div className={`feedback-decision ${respuestasCaso[caso.id] === caso.esDelito ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {respuestasCaso[caso.id] === caso.esDelito ? (
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

        {/* SECCIÓN 3: ESCENARIOS LEGALES */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>3. Decisiones Legales</h2>
          </div>

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
            <h2>4. Checklist de Cumplimiento Legal</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_SOFTWARE_4TO.map((habito) => (
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
              <strong>Cumplimiento Legal: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} competencias)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Conoces la ley y actúas con responsabilidad.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las competencias para ser un ciudadano digital ejemplar.
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
            Mira estos videos para profundizar en propiedad intelectual y consecuencias legales:
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

export default SoftwarePirata4to;