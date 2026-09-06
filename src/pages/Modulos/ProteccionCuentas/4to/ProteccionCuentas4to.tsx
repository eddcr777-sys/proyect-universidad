import React from 'react';
import {
  Key,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Award,
  Video,
  ListChecks,
  Hash,
  Lock,
  Code,
  TerminalSquare
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { HABITOS_CUENTAS_4TO, useProteccionCuentas4to } from '../../../../hooks/HooksProteccionCuentas/useProteccionCuentas4to';
import './ProteccionCuentas4to.css';

export const ProteccionCuentas4to: React.FC = () => {
  const {
    hashes,
    respuestasHash,
    evaluarHash,
    resultadoHash,
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
  } = useProteccionCuentas4to();

  return (
    <main className="pagina-modulo-proteccion-4to">
      <HeaderModulo
        grado="4to"
        modulo="4: Criptografía y Almacenamiento Seguro"
        titulo="Hashes, Salting y Bóvedas Cifradas"
        subTitulo="Aprende cómo se almacenan las contraseñas en servidores, la función del salting y la criptografía de bóvedas en 4to Año."
        categoria="Protección de Cuentas y Accesos"
        tiempoEstimado="55 min"
        icono={<ShieldCheck size={36} />}
      />

      <div className="contenedor-proteccion-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Criptografía de Contraseñas</h2>
          </div>
          <p className="texto-lectura-modulo">
            Las bases de datos modernas jamás guardan contraseñas en texto plano. En su lugar, utilizan <strong>funciones Hash unidireccionales</strong> (como Bcrypt o Argon2) combinadas con <strong>Salting</strong> (aleatorización de claves).
          </p>

          <div className="grid-pilares-proteccion">
            <div className="caja-pilar-proteccion">
              <ShieldCheck className="icono-pilar verde" size={28} />
              <h3>Hash Criptográfico</h3>
              <p><strong>📖 ¿Qué es?:</strong> Algoritmo matemático que convierte cualquier texto en una cadena fija irreversible.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Almacenar claves en servidores sin que ni siquiera los administradores puedan leerlas.</p>
            </div>

            <div className="caja-pilar-proteccion">
              <Lock className="icono-pilar azul" size={28} />
              <h3>Salting (Sal Criptográfica)</h3>
              <p><strong>📖 ¿Qué es?:</strong> Añadir una cadena de caracteres aleatorios antes de generar el hash.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Inutilizar tablas precalculadas (Rainbow Tables) en ciberataques.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: CLASIFICA EL HASH */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <Code className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio: ¿Hash Seguro o Inseguro?</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Analizador de Cifrado Criptográfico"
            enQueConsiste="Analizarás 3 algoritmos de cifrado de contraseñas (MD5, SHA-256, Bcrypt) en formato hash."
            comoInteractuar="1. Lee la cadena cifrada y el nombre del algoritmo. 2. Selecciona 'Es Seguro' o 'Es Inseguro / Obsoleto'. 3. Consulta la explicación criptográfica."
            paraQueSirve="Entenderás por qué algoritmos antiguos como MD5 son vulnerables y cuáles protegen las bases de datos en 4to año."
          />
          <p className="subtitulo-bloque">
            Observa cada hash y su algoritmo. Determina si es seguro para almacenar contraseñas:
          </p>

          <div className="hashes-lista">
            {hashes.map(hash => (
              <div key={hash.id} className="hash-card">
                <div className="hash-info">
                  <span className="badge-algoritmo">{hash.tipo}</span>
                  <code className="hash-texto">{hash.hash}</code>
                </div>
                <div className="acciones-decision-phishing">
                  <button
                    className={`btn-decision seguro ${respuestasHash[hash.id] === true ? 'seleccionado' : ''}`}
                    onClick={() => evaluarHash(hash.id, true)}
                  >
                    <ShieldCheck size={18} /> Seguro
                  </button>
                  <button
                    className={`btn-decision phishing ${respuestasHash[hash.id] === false ? 'seleccionado' : ''}`}
                    onClick={() => evaluarHash(hash.id, false)}
                  >
                    <ShieldAlert size={18} /> Inseguro
                  </button>
                </div>
                {resultadoHash[hash.id] !== undefined && (
                  <div className={`feedback-decision ${resultadoHash[hash.id] ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {resultadoHash[hash.id] ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{hash.explicacion}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: ESCENARIOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>3. Decisiones sobre Almacenamiento y Auditoría</h2>
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
            <h2>4. Checklist de Conocimientos en Hash y Auditoría</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca los conceptos que ya dominas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_CUENTAS_4TO.map((habito) => (
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
              <strong>Dominio del Tema: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} conceptos)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Tienes una comprensión sólida de la seguridad de contraseñas.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Repasa los conceptos para completar tu formación.
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

export default ProteccionCuentas4to;