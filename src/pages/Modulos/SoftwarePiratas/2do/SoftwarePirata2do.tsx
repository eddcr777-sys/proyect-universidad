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
  FileCheck,
  Lock,
  Code2,
  FileCode
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { useSoftwarePirata2do, HABITOS_SOFTWARE_2DO } from '../../../../hooks/HooksSoftwarePirata/useSoftwarePirata2do';
import './SoftwarePirata2do.css';

export const SoftwarePirata2do: React.FC = () => {
  const {
    licencias,
    respuestasLicencia,
    evaluarLicencia,
    resultadoLicencia,
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
  } = useSoftwarePirata2do();

  return (
    <main className="pagina-modulo-software">
      <HeaderModulo
        grado="2do"
        modulo="2: Licencias de Software y Software Libre (FOSS)"
        titulo="Tipos de licencias y cultura libre"
        subTitulo="Aprende la diferencia entre software libre, propietario, freeware y cómo usar alternativas seguras en 2do Año."
        categoria="Software y Descargas"
        tiempoEstimado="45 min"
        icono={<FileCode size={36} />}
      />

      <div className="contenedor-software-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Tipos de Licencias de Software</h2>
          </div>
          <p className="texto-lectura-modulo">
            Una <strong>licencia de software</strong> es el contrato legal que especifica cómo puedes usar un programa. No todo el software gratuito es libre ni todo el software de pago es inaccesible.
          </p>

          <div className="grid-pilares-software">
            <div className="caja-pilar-software">
              <FileCode className="icono-pilar verde" size={28} />
              <h3>Software Libre / FOSS</h3>
              <p><strong>📖 ¿Qué es?:</strong> Programas de código abierto que garantizan las 4 libertades (usar, estudiar, modificar, compartir).</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Usar herramientas profesionales gratuitas sin instalar virus o piratear.</p>
            </div>

            <div className="caja-pilar-software">
              <Lock className="icono-pilar rojo" size={28} />
              <h3>Software Propietario</h3>
              <p><strong>📖 ¿Qué es?:</strong> Programas de código cerrado protegidos por derechos de autor comercial.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve conocerlo?:</strong> Evitar crackearlos para no infringir leyes de derecho de autor ni infectar tu equipo.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LABORATORIO DE LICENCIAS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio: Clasifica la Licencia</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Clasificador de Licencias"
            enQueConsiste="Analizarás 3 programas conocidos (LibreOffice, Photoshop, VLC) y sus condiciones de uso."
            comoInteractuar="Haz clic sobre el chip de tipo de licencia (Libre, Propietario, Freeware) que corresponda. Obtendrás retroalimentación inmediata."
            paraQueSirve="Distinguirás software seguro de código abierto de programas comerciales que requieren compra de licencia."
          />

          <div className="licencias-lista">
            {licencias.map(licencia => (
              <div key={licencia.id} className="licencia-card">
                <h3 className="licencia-nombre">{licencia.nombre}</h3>
                <p className="licencia-descripcion">{licencia.descripcion}</p>
                <div className="licencia-opciones">
                  {['libre', 'propietario', 'freeware', 'shareware', 'creative-commons'].map(tipo => (
                    <button
                      key={tipo}
                      className={`chip-licencia ${respuestasLicencia[licencia.id] === tipo ? 'activo' : ''}`}
                      onClick={() => evaluarLicencia(licencia.id, tipo)}
                    >
                      {tipo.charAt(0).toUpperCase() + tipo.slice(1).replace('-', ' ')}
                    </button>
                  ))}
                </div>
                {resultadoLicencia[licencia.id] !== undefined && (
                  <div className={`feedback-decision ${resultadoLicencia[licencia.id] ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {resultadoLicencia[licencia.id] ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{licencia.explicacion}</span>
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
            <h2>3. Decisiones sobre Licencias y Descargas</h2>
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
            <h2>4. Checklist de Verificación de Software</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_SOFTWARE_2DO.map((habito) => (
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
              <strong>Verificación de Software: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Verificas y usas software de forma segura y legal.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para ser un experto en licencias.
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
            Mira estos videos para profundizar en licencias y verificación:
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

export default SoftwarePirata2do;