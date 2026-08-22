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
  FileSearch,
  Hash,
  FileCode
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { useSoftwarePirata3ro, HABITOS_SOFTWARE_3RO } from '../../../../hooks/HooksSoftwarePirata/useSoftwarePirata3ro';
import './SoftwarePirata3ro.css';

export const SoftwarePirata3ro: React.FC = () => {
  const {
    archivos,
    respuestasArchivo,
    evaluarArchivo,
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
  } = useSoftwarePirata3ro();

  return (
    <main className="pagina-modulo-software-3ro">
      <HeaderModulo
        grado="3ro"
        modulo="3: Análisis de Archivos y Detección de Malware"
        titulo="Verifica antes de ejecutar"
        subTitulo="Aprende a analizar archivos sospechosos usando hashes, firmas digitales y VirusTotal para evitar infecciones."
        categoria="Software y Descargas"
        tiempoEstimado="55 min"
        icono={<FileSearch size={36} />}
      />

      <div className="contenedor-software-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Análisis de Archivos Sospechosos</h2>
          </div>
          <p className="texto-lectura-modulo">
            Antes de ejecutar cualquier archivo descargado, debes <strong>verificar su autenticidad e integridad</strong>. Existen tres herramientas clave: <strong>hashes</strong>, <strong>firmas digitales</strong> y <strong>VirusTotal</strong>.
          </p>

          <div className="grid-pilares-software">
            <div className="caja-pilar-software">
              <Hash className="icono-pilar azul" size={28} />
              <h3>Hash (Integridad)</h3>
              <p>Una huella digital única del archivo. Si cambia un solo bit, el hash cambia. Compara el hash oficial con el calculado.</p>
            </div>

            <div className="caja-pilar-software">
              <FileCode className="icono-pilar verde" size={28} />
              <h3>Firma Digital</h3>
              <p>Certifica que el software proviene del desarrollador legítimo y no fue alterado. Verifica en las propiedades del archivo.</p>
            </div>

            <div className="caja-pilar-software">
              <FileSearch className="icono-pilar rojo" size={28} />
              <h3>VirusTotal</h3>
              <p>Servicio gratuito que escanea archivos con más de 70 antivirus. Ideal para analizar descargas sospechosas.</p>
            </div>
          </div>

          <div className="conceptos-clave-grid">
            <h3 className="titulo-mini-seccion">Conceptos Clave</h3>
            <div className="lista-conceptos">
              <div className="item-concepto">
                <strong>Hash MD5/SHA-256:</strong> Algoritmos que generan una cadena única a partir del contenido. Se usan para verificar que un archivo no fue modificado.
              </div>
              <div className="item-concepto">
                <strong>Doble extensión:</strong> Táctica de malware: "foto.jpg.exe" parece una imagen pero es un ejecutable. Activa la vista de extensiones en tu sistema.
              </div>
              <div className="item-concepto">
                <strong>Puerta trasera (backdoor):</strong> Código oculto que permite a un atacante controlar tu equipo. Frecuente en software pirata.
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LABORATORIO DE ARCHIVOS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio: ¿Archivo Sospechoso o Seguro?</h2>
          </div>
          <p className="subtitulo-bloque">
            Analiza cada archivo y decide si es <strong>Sospechoso</strong> o <strong>Seguro</strong>:
          </p>

          <div className="archivos-lista">
            {archivos.map(archivo => (
              <div key={archivo.id} className="archivo-card">
                <h3 className="archivo-nombre">{archivo.nombre}</h3>
                <p className="archivo-descripcion">{archivo.descripcion}</p>
                <div className="acciones-decision">
                  <button
                    className={`btn-decision seguro ${respuestasArchivo[archivo.id] === false ? 'seleccionado' : ''}`}
                    onClick={() => evaluarArchivo(archivo.id, false)}
                  >
                    <ShieldCheck size={18} /> Seguro
                  </button>
                  <button
                    className={`btn-decision phishing ${respuestasArchivo[archivo.id] === true ? 'seleccionado' : ''}`}
                    onClick={() => evaluarArchivo(archivo.id, true)}
                  >
                    <ShieldAlert size={18} /> Sospechoso
                  </button>
                </div>
                {respuestasArchivo[archivo.id] !== undefined && (
                  <div className={`feedback-decision ${respuestasArchivo[archivo.id] === archivo.esSospechoso ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {respuestasArchivo[archivo.id] === archivo.esSospechoso ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{archivo.explicacion}</span>
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
            <h2>3. Decisiones sobre Verificación de Archivos</h2>
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
            <h2>4. Checklist de Análisis de Archivos</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_SOFTWARE_3RO.map((habito) => (
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
              <strong>Análisis de Archivos: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Analizas y verificas cada archivo antes de ejecutarlo.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para ser un experto en detección de malware.
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
            Mira estos videos para profundizar en análisis de archivos:
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

export default SoftwarePirata3ro;