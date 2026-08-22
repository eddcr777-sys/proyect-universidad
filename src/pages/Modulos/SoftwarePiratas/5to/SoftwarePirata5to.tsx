import React from 'react';
import {
  ShieldCheck,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Award,
  Video,
  ListChecks,
  ClipboardList,
  Building,
  FileBarChart2
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { useSoftwarePirata5to, HABITOS_SOFTWARE_5TO } from '../../../../hooks/HooksSoftwarePirata/useSoftwarePirata5to';
import './SoftwarePirata5to.css';

export const SoftwarePirata5to: React.FC = () => {
  const {
    activos,
    respuestasActivo,
    evaluarActivo,
    resultadoActivo,
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
  } = useSoftwarePirata5to();

  return (
    <main className="pagina-modulo-software-5to">
      <HeaderModulo
        grado="5to"
        modulo="5: Auditoría de Licencias y Políticas Organizacionales"
        titulo="Gestiona el software de tu institución"
        subTitulo="Aprende a realizar inventarios, auditar licencias y proponer políticas de software cumpliendo ISO 19770."
        categoria="Software y Descargas"
        tiempoEstimado="65 min"
        icono={<ClipboardList size={36} />}
      />

      <div className="contenedor-software-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Auditoría de Software y Cumplimiento ISO 19770</h2>
          </div>
          <p className="texto-lectura-modulo">
            Las organizaciones deben <strong>gestionar sus licencias de software</strong> para evitar sanciones legales y optimizar costos. La <strong>auditoría de software</strong> consiste en inventariar programas instalados, compararlos con las licencias adquiridas y proponer acciones correctivas. La norma <strong>ISO 19770</strong> establece las buenas prácticas para esta gestión.
          </p>

          <div className="grid-pilares-software">
            <div className="caja-pilar-software">
              <ClipboardList className="icono-pilar azul" size={28} />
              <h3>Inventario de Software</h3>
              <p>Primer paso: saber qué está instalado en cada equipo. Se puede hacer manualmente o con herramientas automáticas.</p>
            </div>

            <div className="caja-pilar-software">
              <Building className="icono-pilar rojo" size={28} />
              <h3>Políticas de Software</h3>
              <p>Documentos que definen qué se puede instalar, quién lo autoriza y cómo se controla. Reducen el riesgo legal y de seguridad.</p>
            </div>

            <div className="caja-pilar-software">
              <FileBarChart2 className="icono-pilar verde" size={28} />
              <h3>ISO 19770</h3>
              <p>Estándar internacional para la Gestión de Activos de Software (SAM). Ayuda a cumplir con licencias y optimizar costos.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LABORATORIO DE ACTIVOS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio: Clasifica el Estado de Licencias</h2>
          </div>
          <p className="subtitulo-bloque">
            Analiza cada activo de software y determina si <strong>cumple</strong>, <strong>excede</strong> o está <strong>subutilizado</strong>:
          </p>

          <div className="activos-lista">
            {activos.map(activo => (
              <div key={activo.id} className="activo-card">
                <h3 className="activo-nombre">{activo.nombre}</h3>
                <p className="activo-detalle">
                  Licencias compradas: {activo.licencias} | Instalaciones: {activo.instalaciones}
                </p>
                <div className="licencia-opciones">
                  {['cumple', 'excede', 'subutilizado'].map(estado => (
                    <button
                      key={estado}
                      className={`chip-licencia ${respuestasActivo[activo.id] === estado ? 'activo' : ''}`}
                      onClick={() => evaluarActivo(activo.id, estado)}
                    >
                      {estado.charAt(0).toUpperCase() + estado.slice(1)}
                    </button>
                  ))}
                </div>
                {resultadoActivo[activo.id] !== undefined && (
                  <div className={`feedback-decision ${resultadoActivo[activo.id] ? 'acierto' : 'fallo'}`}>
                    <div className="flex-resultado">
                      {resultadoActivo[activo.id] ? (
                        <CheckCircle2 size={18} className="icono-acierto" />
                      ) : (
                        <XCircle size={18} className="icono-fallo" />
                      )}
                      <span>{activo.explicacion}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: ESCENARIOS DE AUDITORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>3. Decisiones de Auditoría Organizacional</h2>
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
            <h2>4. Checklist de Auditoría de Licencias</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las competencias que ya posees:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_SOFTWARE_5TO.map((habito) => (
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
              <strong>Competencias de Auditoría: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} competencias)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Estás preparado para auditar licencias de software.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las competencias para ser un auditor profesional.
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
            Mira estos videos para profundizar en ISO 19770 y auditoría de software:
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

export default SoftwarePirata5to;