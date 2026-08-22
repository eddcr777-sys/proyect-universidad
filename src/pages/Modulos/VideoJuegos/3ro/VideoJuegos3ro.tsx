import React from 'react';
import {
  Gamepad2,
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
  Package,
  Download
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { useVideojuegos3ro, HABITOS_VIDEOJUEGOS_3RO } from '../../../../hooks/HooksVideoGames/useVideojuegos3ro';
import './VideoJuegos3ro.css';

export const Videojuegos3ro: React.FC = () => {
  const {
    archivosMod,
    respuestasMod,
    evaluarMod,
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
  } = useVideojuegos3ro();

  return (
    <main className="pagina-modulo-videojuegos">
      <HeaderModulo
        grado="3ro"
        modulo="3: Malware en Mods y APKs"
        titulo="Analiza antes de ejecutar"
        subTitulo="Aprende a escanear mods, APKs y archivos de juegos con VirusTotal, detectar dobles extensiones y evitar malware."
        categoria="Videojuegos y Seguridad"
        tiempoEstimado="55 min"
        icono={<FileWarning size={36} />}
      />

      <div className="contenedor-videojuegos-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. El Lado Oscuro de los Mods y Hacks</h2>
          </div>
          <p className="texto-lectura-modulo">
            Los <strong>mods, hacks y APKs modificados</strong> son la principal fuente de infección para jugadores. Aunque prometen ventajas, skins o monedas gratis, casi siempre esconden <strong>malware</strong>: keyloggers, troyanos o spyware. Aprender a <strong>analizar antes de ejecutar</strong> es tu mejor defensa.
          </p>

          <div className="grid-pilares-videojuegos">
            <div className="caja-pilar-videojuegos">
              <FileWarning className="icono-pilar rojo" size={28} />
              <h3>Malware en Mods</h3>
              <p>Archivos .exe, .apk o .rar disfrazados de mods. Pueden grabar tus contraseñas, espiar tu micrófono o dañar tu equipo.</p>
            </div>

            <div className="caja-pilar-videojuegos">
              <Package className="icono-pilar azul" size={28} />
              <h3>Doble Extensión</h3>
              <p>Táctica clásica: "mod.zip.exe" parece un comprimido, pero es un ejecutable. Activa la vista de extensiones en tu sistema.</p>
            </div>

            <div className="caja-pilar-videojuegos">
              <Download className="icono-pilar verde" size={28} />
              <h3>APKs Falsos</h3>
              <p>Versiones modificadas de Free Fire, Roblox o Blood Strike fuera de Google Play. Piden permisos excesivos para robar datos.</p>
            </div>
          </div>

          <div className="conceptos-clave-grid">
            <h3 className="titulo-mini-seccion">Conceptos Clave</h3>
            <div className="lista-conceptos">
              <div className="item-concepto">
                <strong>VirusTotal:</strong> Servicio gratuito que escanea archivos con más de 70 antivirus. Ideal para analizar mods y APKs.
              </div>
              <div className="item-concepto">
                <strong>Doble extensión:</strong> Archivo que oculta su verdadero tipo (ej: .jpg.exe). Engaña al usuario para que lo ejecute.
              </div>
              <div className="item-concepto">
                <strong>Permisos excesivos:</strong> Un mod legítimo no pide acceso a SMS, contactos o micrófono. Es señal de malware.
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LABORATORIO DE ARCHIVOS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio: ¿Mod Seguro o Malicioso?</h2>
          </div>
          <p className="subtitulo-bloque">
            Analiza cada archivo y decide si es <strong>Seguro</strong> o <strong>Malicioso</strong>:
          </p>

          <div className="mods-lista">
            {archivosMod.map(mod => (
              <div key={mod.id} className="mod-card">
                <h3 className="mod-nombre">{mod.nombre}</h3>
                <p className="mod-descripcion">{mod.descripcion}</p>
                <div className="acciones-decision">
                  <button
                    className={`btn-decision seguro ${respuestasMod[mod.id] === false ? 'seleccionado' : ''}`}
                    onClick={() => evaluarMod(mod.id, false)}
                  >
                    <ShieldCheck size={18} /> Seguro
                  </button>
                  <button
                    className={`btn-decision phishing ${respuestasMod[mod.id] === true ? 'seleccionado' : ''}`}
                    onClick={() => evaluarMod(mod.id, true)}
                  >
                    <ShieldAlert size={18} /> Malicioso
                  </button>
                </div>
                {respuestasMod[mod.id] !== undefined && (
                  <div className={`feedback-decision ${respuestasMod[mod.id] === mod.esMalicioso ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {respuestasMod[mod.id] === mod.esMalicioso ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{mod.explicacion}</span>
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
            <h2>3. Decisiones sobre Mods y APKs</h2>
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
            <h2>4. Checklist de Análisis de Mods</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_VIDEOJUEGOS_3RO.map((habito) => (
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
              <strong>Análisis de Mods: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Analizas cada mod antes de ejecutarlo.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para no caer en malware disfrazado.
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
            Mira estos videos para profundizar en análisis de archivos de juegos:
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

export default Videojuegos3ro;