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
  Building2,
  UserCheck,
  FileCheck2
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { HABITOS_CUENTAS_5TO, useProteccionCuentas5to } from '../../../../hooks/HooksProteccionCuentas/useProteccionCuentas5to';
import './ProteccionCuentas5to.css';

export const ProteccionCuentas5to: React.FC = () => {
  const {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    escenarios,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    videos,
    preguntasQuiz,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  } = useProteccionCuentas5to();

  return (
    <main className="pagina-modulo-proteccion-5to">
      <HeaderModulo
        grado="5to"
        modulo="5: Identidad Corporativa y Cumplimiento"
        titulo="SSO, OAuth y Auditoría de Accesos"
        subTitulo="Aprende a gestionar identidades en organizaciones, implementar SSO y OAuth, y auditar accesos cumpliendo ISO 27001."
        categoria="Protección de Cuentas y Accesos"
        tiempoEstimado="60 min"
        icono={<Building2 size={36} />}
      />

      <div className="contenedor-proteccion-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Gestión de Identidades en Organizaciones</h2>
          </div>
          <p className="texto-lectura-modulo">
            En una organización, la protección de cuentas no es solo individual: requiere <strong>políticas corporativas</strong>, <strong>controles de acceso</strong> y <strong>cumplimiento normativo</strong>. Tres tecnologías y estándares clave son:
          </p>

          <div className="grid-pilares-proteccion">
            <div className="caja-pilar-proteccion">
              <UserCheck className="icono-pilar rojo" size={28} />
              <h3>SSO (Single Sign-On / Inicio Único)</h3>
              <p><strong>📖 ¿Qué es?:</strong> Sistema donde un solo inicio de sesión da acceso a múltiples aplicaciones corporativas.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Evita memorizar decenas de contraseñas y permite a la empresa revocar accesos de inmediato.</p>
            </div>

            <div className="caja-pilar-proteccion">
              <FileCheck2 className="icono-pilar verde" size={28} />
              <h3>OAuth (Protocolo de Autorización)</h3>
              <p><strong>📖 ¿Qué es?:</strong> Estándar seguro de autorización entre aplicaciones web y servicios.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Permite "Iniciar sesión con Google/Microsoft" sin revelar tu clave secreta a la app externa.</p>
            </div>

            <div className="caja-pilar-proteccion">
              <ShieldCheck className="icono-pilar azul" size={28} />
              <h3>Norma ISO 27001</h3>
              <p><strong>📖 ¿Qué es?:</strong> Estándar internacional de gestión de seguridad de la información.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Establece auditorías de accesos para verificar que solo personal autorizado ingrese a datos confidenciales.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: ESCENARIOS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. Decisiones de Auditor de Accesos</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Simulador de Auditoría de Accesos"
            enQueConsiste="Asumirás el rol de auditor de ciberseguridad evaluando 3 casos de gestión de credenciales y permisos corporativos."
            comoInteractuar="Lee atentamente la situación. Haz clic en la opción (A, B o C) que aplique el principio de menor privilegio y la norma ISO 27001. Recibirás la explicación técnica inmediata."
            paraQueSirve="Desarrollará tus competencias profesionales para auditar sistemas, revocar permisos obsoletos y prevenir brechas de seguridad institucionales."
          />

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

        {/* SECCIÓN 3: CHECKLIST */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <ListChecks className="icono-bloque-verde" size={24} />
            <h2>3. Checklist de Competencias de Auditoría</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las competencias que ya dominas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_CUENTAS_5TO.map((habito) => (
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
              <strong>Preparación como Auditor: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} competencias)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Estás listo para auditar accesos en una organización.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las competencias para convertirte en un auditor profesional.
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
            Mira estos videos para profundizar en SSO, OAuth y cumplimiento:
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

export default ProteccionCuentas5to;