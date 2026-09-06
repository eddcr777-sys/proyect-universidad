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
  Smartphone,
  Lock
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { HABITOS_2FA, useProteccionCuentas2do } from '../../../../hooks/HooksProteccionCuentas/useProteccionCuentas2do';
import '../1ro/ProteccionCuentas1ro.css';
import './ProteccionCuentas2do.css';

export const ProteccionCuentas2do: React.FC = () => {
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
  } = useProteccionCuentas2do();

  return (
    <main className="pagina-modulo-proteccion-2do">
      <HeaderModulo
        grado="2do"
        modulo="2: Autenticación de Dos Factores (2FA)"
        titulo="Doble factor de autenticación y gestores"
        subTitulo="Aprende qué es el 2FA, por qué es tu segundo escudo y cómo usar gestores de contraseñas para 2do Año."
        categoria="Protección de Cuentas y Accesos"
        tiempoEstimado="45 min"
        icono={<ShieldCheck size={36} />}
      />

      <div className="contenedor-proteccion-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Tu segundo escudo: la Autenticación de Dos Factores</h2>
          </div>
          <p className="texto-lectura-modulo">
            Incluso la contraseña más robusta puede filtrarse si una plataforma sufre un hackeo. La <strong>Autenticación de Dos Factores (2FA)</strong> añade un segundo candado: algo que sabes (contraseña) + algo que tienes (tu celular).
          </p>

          <div className="grid-pilares-proteccion">
            <div className="caja-pilar-proteccion">
              <ShieldCheck className="icono-pilar verde" size={28} />
              <h3>¿Qué es el 2FA / Verificación en 2 pasos?</h3>
              <p><strong>📖 ¿Qué es?:</strong> Proceso donde se solicitan dos pruebas de identidad para abrir sesión.</p>
              <p style={{ marginTop: '0.4rem', color: '#0369a1' }}><strong>⚙️ ¿Para qué sirve?:</strong> Bloquear a los atacantes aunque descubran tu contraseña.</p>
            </div>

            <div className="caja-pilar-proteccion">
              <Smartphone className="icono-pilar azul" size={28} />
              <h3>Métodos de 2FA</h3>
              <ul className="lista-metodos-2fa">
                <li><strong>SMS (Texto):</strong> Código por mensaje. Funciona, pero es vulnerable a duplicados de SIM.</li>
                <li><strong>App autenticadora:</strong> Google Authenticator, Bitwarden. Genera códigos de 6 dígitos cada 30 segundos.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE DECISIONES 2FA */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>2. ¿Qué harías? Escenarios de 2FA</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Simulador de Decisiones 2FA"
            enQueConsiste="Resolverás 3 situaciones cotidianas donde recibes códigos inesperados de 2FA o solicitudes sospechosas."
            comoInteractuar="1. Lee la historia del caso. 2. Presiona la opción (A, B o C) que consideres correcta. 3. Consulta la explicación técnica."
            paraQueSirve="Evitará que regales códigos temporales recibidos en tu celular a extraños."
          />
          <p className="subtitulo-bloque">
            Lee cada situación y elige la opción más segura:
          </p>

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
            <h2>3. Checklist de Protección 2FA y Gestores</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_2FA.map((habito) => (
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
              <strong>Protección de Cuentas: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Tienes tus cuentas blindadas con 2FA y gestores.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Activa 2FA y prueba un gestor de contraseñas para elevar tu seguridad.
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
            Mira estos videos para configurar 2FA y gestores correctamente:
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

export default ProteccionCuentas2do;