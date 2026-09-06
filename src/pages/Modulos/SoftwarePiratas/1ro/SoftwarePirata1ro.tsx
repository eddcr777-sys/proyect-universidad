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
  FileWarning,
  Lock,
  Gamepad2
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { useSoftwarePirata1ro, HABITOS_SOFTWARE_1RO } from '../../../../hooks/HooksSoftwarePirata/useSoftwarePirata1ro';
import './SoftwarePirata1ro.css';

export const SoftwarePirata1ro: React.FC = () => {
  const {
    acciones,
    respuestasAccion,
    evaluarAccion,
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
  } = useSoftwarePirata1ro();

  return (
    <main className="pagina-modulo-software">
      <HeaderModulo
        grado="1ro"
        modulo="1: Software Pirata y Alternativas Legales"
        titulo="Juegos y programas: legalidad y seguridad"
        subTitulo="Aprende a identificar software pirata, sus peligros y las alternativas gratuitas que protegen tu dispositivo."
        categoria="Software y Descargas"
        tiempoEstimado="45 min"
        icono={<Gamepad2 size={36} />}
      />

      <div className="contenedor-software-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. ¿Qué es el Software Pirata?</h2>
          </div>
          <p className="texto-lectura-modulo">
            El <strong>software pirata</strong> es cualquier programa o juego obtenido ilegalmente: versiones "crackeadas", keygens, o descargas de sitios no oficiales. Aunque parezca "gratis", tiene un costo oculto muy alto: <strong>tu seguridad</strong>.
          </p>

          <div className="grid-pilares-software">
            <div className="caja-pilar-software">
              <FileWarning className="icono-pilar rojo" size={28} />
              <h3>¿Qué es un crack o keygen?</h3>
              <p>Son programas que eliminan la protección de pago de otro software. Casi siempre vienen con <strong>malware oculto</strong>: troyanos, keyloggers o ransomware.</p>
            </div>

            <div className="caja-pilar-software">
              <Lock className="icono-pilar verde" size={28} />
              <h3>Alternativas Legales</h3>
              <p>Existen programas gratuitos y de código abierto que hacen lo mismo que los de pago: <strong>LibreOffice</strong> (en vez de Office), <strong>GIMP</strong> (en vez de Photoshop), <strong>Blender</strong> (3D).</p>
            </div>

            <div className="caja-pilar-software">
              <Gamepad2 className="icono-pilar azul" size={28} />
              <h3>Juegos "gratis" con trampa</h3>
              <p>Los "generadores de diamantes" o "mods con hacks" suelen ser software pirata que roba tu cuenta o instala virus.</p>
            </div>
          </div>

          <div className="conceptos-clave-grid">
            <h3 className="titulo-mini-seccion">Conceptos Clave</h3>
            <div className="lista-conceptos">
              <div className="item-concepto">
                <strong>Licencia de software:</strong> Permiso legal que te autoriza a usar un programa. Piratear es violar esa licencia.
              </div>
              <div className="item-concepto">
                <strong>Malware en software pirata:</strong> Muchos cracks incluyen código malicioso que espía, roba datos o daña tu equipo.
              </div>
              <div className="item-concepto">
                <strong>Tienda oficial:</strong> Google Play, App Store, Microsoft Store. Son las únicas fuentes seguras para descargar apps.
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE ACCIONES */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-azul" size={24} />
            <h2>2. Simulador: ¿Es Seguro o Peligroso?</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Clasificador de Fuentes de Software"
            enQueConsiste="Evaluarás distintas conductas de descarga (sitios oficiales vs ejecutables crackeados) para clasificarlas como 'Segura' o 'Peligrosa'."
            comoInteractuar="Lee la descripción del caso y selecciona 'Es Seguro / Recomendado' o 'Es Peligroso / Pirata'. Recibirás el análisis didáctico de las consecuencias en tu equipo."
            paraQueSirve="Evitarás descargar troyanos y mineros de criptomonedas camuflados en juegos 'gratis' o activadores de software comercial."
          />
          <p className="subtitulo-bloque">
            Analiza cada acción y decide si es <strong>piratería (riesgosa)</strong> o <strong>descarga segura</strong>:
          </p>

          <div className="acciones-lista">
            {acciones.map(accion => (
              <div key={accion.id} className="accion-card">
                <p className="accion-descripcion">{accion.descripcion}</p>
                <div className="acciones-decision">
                  <button
                    className={`btn-decision seguro ${respuestasAccion[accion.id] === false ? 'seleccionado' : ''}`}
                    onClick={() => evaluarAccion(accion.id, false)}
                  >
                    <ShieldCheck size={18} /> Segura
                  </button>
                  <button
                    className={`btn-decision phishing ${respuestasAccion[accion.id] === true ? 'seleccionado' : ''}`}
                    onClick={() => evaluarAccion(accion.id, true)}
                  >
                    <ShieldAlert size={18} /> Piratería
                  </button>
                </div>
                {respuestasAccion[accion.id] !== undefined && (
                  <div className={`feedback-decision ${respuestasAccion[accion.id] === accion.esPirateria ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {respuestasAccion[accion.id] === accion.esPirateria ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{accion.explicacion}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: CHECKLIST */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <ListChecks className="icono-bloque-verde" size={24} />
            <h2>3. Checklist de Descargas Seguras</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_SOFTWARE_1RO.map((habito) => (
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
              <strong>Descargas Seguras: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Descargas de forma segura y legal.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para proteger tu dispositivo.
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 4: VIDEOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Video className="icono-bloque-amarillo" size={24} />
            <h2>4. Videos para Aprender Más</h2>
          </div>
          <p className="texto-lectura-modulo">
            Mira estos videos para conocer los riesgos y las alternativas:
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

        {/* SECCIÓN 5: QUIZ */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-azul" size={24} />
            <h2>5. Evaluación Final</h2>
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

export default SoftwarePirata1ro;