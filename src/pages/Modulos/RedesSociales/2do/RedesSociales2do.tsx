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
  UserX,
  Eye
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { useRedesSociales2do, HABITOS_REDES_2DO } from '../../../../hooks/HooksRedesSociales/useRedesSociales2do';
import './RedesSociales2do.css';

export const RedesSociales2do: React.FC = () => {
  const {
    perfiles,
    respuestasPerfil,
    evaluarPerfil,
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
  } = useRedesSociales2do();

  return (
    <main className="pagina-modulo-redes-2do">
      <HeaderModulo
        grado="2do"
        modulo="2: Perfiles Falsos y Suplantación"
        titulo="Detecta Falsos y Protege tu Identidad"
        subTitulo="Aprende a identificar cuentas falsas, verificar identidades y denunciar suplantación en redes sociales."
        categoria="Redes Sociales e Identidad"
        tiempoEstimado="50 min"
        icono={<UserX size={36} />}
      />

      <div className="contenedor-redes-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Perfiles Falsos y Suplantación de Identidad</h2>
          </div>
          <p className="texto-lectura-modulo">
            En 1er año aprendiste a configurar la privacidad. Ahora veamos cómo identificar a quienes intentan engañarte: <strong>perfiles falsos</strong> que se hacen pasar por celebridades, marcas o incluso por tus amigos. La <strong>suplantación de identidad</strong> ocurre cuando alguien usa tu nombre, fotos o información personal sin tu permiso.
          </p>

          <div className="grid-pilares-redes">
            <div className="caja-pilar-redes">
              <UserX className="icono-pilar rojo" size={28} />
              <h3>Señales de Perfil Falso</h3>
              <p>Cuenta recién creada, sin foto real, sigue a miles pero tiene pocos seguidores, y envía mensajes pidiendo dinero o datos.</p>
            </div>

            <div className="caja-pilar-redes">
              <Eye className="icono-pilar azul" size={28} />
              <h3>Badge de Verificación</h3>
              <p>El check azul confirma que una cuenta es auténtica. Siempre verifica que sea la oficial antes de interactuar con famosos o marcas.</p>
            </div>

            <div className="caja-pilar-redes">
              <ShieldCheck className="icono-pilar verde" size={28} />
              <h3>¿Qué hacer si te suplantan?</h3>
              <p>Denuncia en la plataforma, avisa a tus contactos, guarda capturas de evidencia y cambia tus contraseñas.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE PERFILES */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <UserX className="icono-bloque-rojo" size={24} />
            <h2>2. Laboratorio: ¿Perfil Falso o Real?</h2>
          </div>
          <p className="subtitulo-bloque">
            Analiza cada perfil y decide si es <strong>Falso</strong> o <strong>Legítimo</strong>:
          </p>

          <div className="perfiles-lista">
            {perfiles.map(perfil => (
              <div key={perfil.id} className="perfil-card">
                <div className="perfil-info">
                  <h3 className="perfil-nombre">{perfil.nombre}</h3>
                  <p className="perfil-descripcion">{perfil.descripcion}</p>
                </div>
                <div className="acciones-decision">
                  <button
                    className={`btn-decision seguro ${respuestasPerfil[perfil.id] === false ? 'seleccionado' : ''}`}
                    onClick={() => evaluarPerfil(perfil.id, false)}
                  >
                    <ShieldCheck size={18} /> Legítimo
                  </button>
                  <button
                    className={`btn-decision phishing ${respuestasPerfil[perfil.id] === true ? 'seleccionado' : ''}`}
                    onClick={() => evaluarPerfil(perfil.id, true)}
                  >
                    <UserX size={18} /> Falso
                  </button>
                </div>
                {respuestasPerfil[perfil.id] !== undefined && (
                  <div className={`feedback-decision ${respuestasPerfil[perfil.id] === perfil.esFalso ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {respuestasPerfil[perfil.id] === perfil.esFalso ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{perfil.explicacion}</span>
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
            <h2>3. Decisiones ante la Suplantación</h2>
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
            <h2>4. Checklist de Protección de Identidad</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_REDES_2DO.map((habito) => (
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
              <strong>Protección de Identidad: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Estás protegido contra la suplantación.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para blindar tu identidad digital.
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
            Mira estos videos para profundizar en la detección de perfiles falsos y suplantación:
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

export default RedesSociales2do;