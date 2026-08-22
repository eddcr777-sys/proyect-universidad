import React from 'react';
import {
  Share2,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Award,
  Video,
  ListChecks,
  Lock,
  KeyRound,
  Database
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { useRedesSociales4to, HABITOS_REDES_4TO } from '../../../../hooks/HooksRedesSociales/useRedesSociales4to';
import './RedesSociales4to.css';

export const RedesSociales4to: React.FC = () => {
  const {
    appsConectadas,
    respuestasApp,
    evaluarApp,
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
  } = useRedesSociales4to();

  return (
    <main className="pagina-modulo-redes-4to">
      <HeaderModulo
        grado="4to"
        modulo="4: OAuth, APIs y Auditoría de Datos"
        titulo="Controla quién accede a tus redes"
        subTitulo="Aprende a revisar permisos de apps conectadas, entender OAuth y auditar los datos que las redes sociales tienen sobre ti."
        categoria="Redes Sociales e Identidad"
        tiempoEstimado="60 min"
        icono={<Database size={36} />}
      />

      <div className="contenedor-redes-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. OAuth, APIs y Permisos de Aplicaciones</h2>
          </div>
          <p className="texto-lectura-modulo">
            Cuando usas "Iniciar sesión con Google o Facebook", estás usando <strong>OAuth</strong>: un protocolo que permite a una app acceder a ciertos datos <strong>sin compartir tu contraseña</strong>. Sin embargo, muchas apps piden <strong>permisos excesivos</strong> que no necesitan. Auditar estas conexiones es clave para proteger tu información.
          </p>

          <div className="grid-pilares-redes">
            <div className="caja-pilar-redes">
              <KeyRound className="icono-pilar rojo" size={28} />
              <h3>OAuth (Autorización Delegada)</h3>
              <p>No compartas contraseñas con apps de terceros. OAuth otorga tokens con permisos limitados que puedes revocar.</p>
            </div>

            <div className="caja-pilar-redes">
              <Lock className="icono-pilar azul" size={28} />
              <h3>Permisos Excesivos</h3>
              <p>Una app de linterna no necesita acceso a tus contactos. Revisa qué permisos solicitan antes de conectar.</p>
            </div>

            <div className="caja-pilar-redes">
              <Database className="icono-pilar verde" size={28} />
              <h3>Auditoría de Datos</h3>
              <p>Las redes permiten descargar una copia de tus datos. Revisa qué guardan sobre ti y elimina lo innecesario.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LABORATORIO DE APPS CONECTADAS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <Lock className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio: ¿Permisos Adecuados o Excesivos?</h2>
          </div>
          <p className="subtitulo-bloque">
            Analiza cada aplicación conectada y decide si los permisos solicitados son <strong>adecuados</strong> o <strong>excesivos</strong>:
          </p>

          <div className="apps-lista">
            {appsConectadas.map(app => (
              <div key={app.id} className="app-card">
                <h3 className="app-nombre">{app.nombre}</h3>
                <ul className="app-permisos-lista">
                  {app.permisosSolicitados.map((permiso, idx) => (
                    <li key={idx}>{permiso}</li>
                  ))}
                </ul>
                <div className="acciones-decision">
                  <button
                    className={`btn-decision seguro ${respuestasApp[app.id] === false ? 'seleccionado' : ''}`}
                    onClick={() => evaluarApp(app.id, false)}
                  >
                    <ShieldCheck size={18} /> Adecuados
                  </button>
                  <button
                    className={`btn-decision phishing ${respuestasApp[app.id] === true ? 'seleccionado' : ''}`}
                    onClick={() => evaluarApp(app.id, true)}
                  >
                    <ShieldAlert size={18} /> Excesivos
                  </button>
                </div>
                {respuestasApp[app.id] !== undefined && (
                  <div className={`feedback-decision ${respuestasApp[app.id] === app.esExcesivo ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {respuestasApp[app.id] === app.esExcesivo ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{app.explicacion}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: ESCENARIOS OAuth */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>3. Decisiones sobre Autorización</h2>
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
            <h2>4. Checklist de Auditoría de Datos</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_REDES_4TO.map((habito) => (
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
              <strong>Auditoría de Datos: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Controlas quién accede a tus datos y revisas tu información periódicamente.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para una auditoría completa.
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
            Mira estos videos para profundizar en OAuth, permisos y auditoría de datos:
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

export default RedesSociales4to;