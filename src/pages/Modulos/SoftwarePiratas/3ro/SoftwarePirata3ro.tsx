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
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
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
    <main className="pagina-modulo-software">
      <HeaderModulo
        grado="3ro"
        modulo="3: Malware en Descargas e Infecciones"
        titulo="Detén el malware y secuestro de archivos"
        subTitulo="Aprende a analizar hashes SHA-256, firmas digitales y prevenir ataques de Ransomware en 3er Año."
        categoria="Software y Descargas"
        tiempoEstimado="50 min"
        icono={<ShieldAlert size={36} />}
      />

      <div className="contenedor-software-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Verificación de Integridad y Malware Oculto</h2>
          </div>
          <p className="texto-lectura-modulo">
            Los atacantes ocultan ejecutable maliciosos en paquetes piratas. Para asegurarte de que un archivo no fue alterado, se utilizan <strong>hashes criptográficos</strong> y <strong>firmas digitales</strong>.
          </p>

          <div className="grid-pilares-software">
            <div className="caja-pilar-software">
              <ShieldCheck className="icono-pilar azul" size={28} />
              <h3>Hash de Verificación (SHA-256)</h3>
              <p><strong>📖 ¿Qué es?:</strong> Código único que representa la huella digital del archivo.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Comprobar si el archivo descargado coincide 100% con el original del fabricante.</p>
            </div>

            <div className="caja-pilar-software">
              <FileCode className="icono-pilar verde" size={28} />
              <h3>Firma Digital de Ejecutable</h3>
              <p><strong>📖 ¿Qué es?:</strong> Certificado criptográfico empaquetado en el archivo `.exe`.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Asegurar que el programa proviene de una empresa registrada y legítima.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LABORATORIO DE ARCHIVOS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio: ¿Archivo Sospechoso o Seguro?</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Analizador de Integridad de Descargas"
            enQueConsiste="Inspeccionarás 3 archivos descargados con sus nombres, extensiones dobles y firmas digitales."
            comoInteractuar="1. Lee la información del ejecutable. 2. Presiona 'Es Seguro' o 'Es Sospechoso / Infectado'. 3. Lee el dictamen de seguridad."
            paraQueSirve="Evitará que ejecutes troyanos o ransomware disfrazados de documentos PDF o imágenes."
          />

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