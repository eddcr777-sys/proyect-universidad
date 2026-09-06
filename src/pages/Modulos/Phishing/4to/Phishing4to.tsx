import React from 'react';
import {
  Fish,
  AlertTriangle,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Mail,
  Link as LinkIcon,
  CheckCircle2,
  XCircle,
  Award,
  Search,
  FileCode
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { usePhishing4to } from '../../../../hooks/HooksPhishing/usePhishing4to';
import './Phishing4to.css';

export const Phishing4to: React.FC = () => {
  const {
    correos,
    respuestasCorreos,
    evaluarCorreo,
    urls,
    respuestasUrl,
    evaluarUrl,
    preguntasQuiz,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  } = usePhishing4to();

  return (
    <main className="pagina-modulo-phishing-4to">
      <HeaderModulo
        grado="4to"
        modulo="4: Análisis Técnico de Phishing"
        titulo="Inspección de Encabezados, URLs y Dominios"
        subTitulo="Aprende a verificar técnicamente un correo sospechoso: SPF, DKIM, DMARC, dominios homógrafos y herramientas de análisis como VirusTotal."
        categoria="Defensa Digital y Privacidad"
        tiempoEstimado="55 min"
        icono={<Search size={36} />}
      />

      <div className="contenedor-phishing-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Análisis Técnico de Correos Sospechosos</h2>
          </div>
          <p className="texto-lectura-phishing">
            En 4to año pasamos de la identificación visual a la <strong>inspección técnica</strong>. Aprenderás a leer los encabezados de un correo (SPF, DKIM, DMARC), analizar URLs sospechosas y usar herramientas como <strong>VirusTotal</strong> y <strong>URLVoid</strong> para verificar enlaces sin hacer clic.
          </p>

          <div className="grid-senales-phishing">
            <div className="caja-senal-item">
              <FileCode className="icono-senal rojo" size={28} />
              <h3>Firmas SPF, DKIM y DMARC</h3>
              <p><strong>📖 ¿Qué es?:</strong> Protocolos criptográficos que certifican la autenticidad del servidor remitente.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Confirmar si el correo proviene verdaderamente del servidor oficial del banco o liceo.</p>
            </div>

            <div className="caja-senal-item">
              <LinkIcon className="icono-senal azul" size={28} />
              <h3>Typosquatting (Dominios Engañosos)</h3>
              <p><strong>📖 ¿Qué es?:</strong> Registro de nombres de dominio con errores tipográficos sutiles.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Confundir a la víctima que lee rápido (ej: `micolegio-oficial.com` vs `micolegio.com`).</p>
            </div>

            <div className="caja-senal-item">
              <Search className="icono-senal amarillo" size={28} />
              <h3>Analizadores de Enlaces (VirusTotal)</h3>
              <p><strong>📖 ¿Qué es?:</strong> Herramientas web que escanean URLs sospechosas con 70 antivirus.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Inspeccionar si una dirección web oculta código malicioso sin poner en riesgo tu navegador.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LABORATORIO DE CORREOS */}
        <section className="bloque-phishing-tarjeta interactivo-caja">
          <div className="encabezado-bloque-phishing">
            <Mail className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio: Inspecciona los Encabezados</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Laboratorio Técnico de Encabezados"
            enQueConsiste="Inspeccionarás el código de encabezado (registros SPF/DKIM) y la estructura de la URL de 3 correos dudosos."
            comoInteractuar="1. Lee la información del remitente y las firmas SPF/DKIM. 2. Presiona 'Es Seguro' o 'Es Phishing / Engaño'. 3. Consulta la explicación técnica del veredicto."
            paraQueSirve="Aprenderás a auditar técnicamente mensajes institucionales descartando fraudes avanzadas."
          />

          <div className="lista-simuladores-phishing">
            {correos.map((correo) => {
              const resEleccion = respuestasCorreos[correo.id];

              return (
                <div key={correo.id} className="tarjeta-mensaje-simulado">
                  <div className="cabecera-mensaje-simulado">
                    <span className="badge-canal">Correo Electrónico</span>
                    <span className="remitente-texto">De: {correo.remitente}</span>
                  </div>

                  <div className="cuerpo-mensaje-simulado">
                    <h4>Asunto: {correo.asunto}</h4>
                    <p>"{correo.contenido}"</p>
                  </div>

                  <div className="encabezados-info">
                    <span className="badge-encabezado spf">SPF: {correo.encabezados.spf}</span>
                    <span className="badge-encabezado dkim">DKIM: {correo.encabezados.dkim}</span>
                    <span className="badge-encabezado dmarc">DMARC: {correo.encabezados.dmarc}</span>
                  </div>

                  <div className="url-incluida">
                    <strong>URL incluida:</strong> <code>{correo.urlIncluida}</code>
                  </div>

                  <div className="acciones-decision-phishing">
                    <button
                      className={`btn-decision seguro ${resEleccion === false ? 'seleccionado' : ''}`}
                      onClick={() => evaluarCorreo(correo.id, false)}
                    >
                      <ShieldCheck size={18} /> Es Seguro
                    </button>
                    <button
                      className={`btn-decision phishing ${resEleccion === true ? 'seleccionado' : ''}`}
                      onClick={() => evaluarCorreo(correo.id, true)}
                    >
                      <AlertTriangle size={18} /> Es Phishing
                    </button>
                  </div>

                  {resEleccion !== undefined && (
                    <div className={`feedback-decision ${resEleccion === correo.esPhishing ? 'acierto' : 'fallo'}`}>
                      {resEleccion === correo.esPhishing ? (
                        <div className="flex-resultado">
                          <CheckCircle2 size={20} className="icono-acierto" />
                          <span><strong>¡Excelente diagnóstico!</strong> {correo.explicacion}</span>
                        </div>
                      ) : (
                        <div className="flex-resultado">
                          <XCircle size={20} className="icono-fallo" />
                          <span><strong>Atención:</strong> {correo.explicacion}</span>
                        </div>
                      )}
                      <span className="badge-tipo-phishing">{correo.tipoPhishing}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN 3: ANÁLISIS DE URLS */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <LinkIcon className="icono-bloque-amarillo" size={24} />
            <h2>3. Juzga la URL: ¿Oficial o Falsa?</h2>
          </div>
          <p className="subtitulo-bloque-phishing">
            Observa cada URL y determina si es <strong>legítima</strong> o <strong>maliciosa</strong>:
          </p>

          <div className="lista-simuladores-phishing">
            {urls.map((url) => {
              const resEleccion = respuestasUrl[url.id];

              return (
                <div key={url.id} className="tarjeta-url-analisis">
                  <div className="url-texto">
                    <code>{url.url}</code>
                  </div>
                  <div className="acciones-decision-phishing">
                    <button
                      className={`btn-decision seguro ${resEleccion === true ? 'seleccionado' : ''}`}
                      onClick={() => evaluarUrl(url.id, true)}
                    >
                      <ShieldCheck size={18} /> Legítima
                    </button>
                    <button
                      className={`btn-decision phishing ${resEleccion === false ? 'seleccionado' : ''}`}
                      onClick={() => evaluarUrl(url.id, false)}
                    >
                      <AlertTriangle size={18} /> Maliciosa
                    </button>
                  </div>
                  {resEleccion !== undefined && (
                    <div className={`feedback-decision ${resEleccion === url.esLegitima ? 'acierto' : 'fallo'}`}>
                      <div className="flex-resultado">
                        {resEleccion === url.esLegitima ? (
                          <CheckCircle2 size={18} className="icono-acierto" />
                        ) : (
                          <XCircle size={18} className="icono-fallo" />
                        )}
                        <span>{url.explicacion}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN 4: QUIZ */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <HelpCircle className="icono-bloque-azul" size={24} />
            <h2>4. Evaluación Final</h2>
          </div>

          <div className="quiz-container phishing">
            {preguntasQuiz.map(pregunta => (
              <div key={pregunta.id} className="pregunta-quiz phishing">
                <h3 className="pregunta-titulo">{pregunta.id}. {pregunta.pregunta}</h3>
                <div className="opciones-quiz-phishing">
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
                className="boton-enviar-quiz phishing"
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

export default Phishing4to;