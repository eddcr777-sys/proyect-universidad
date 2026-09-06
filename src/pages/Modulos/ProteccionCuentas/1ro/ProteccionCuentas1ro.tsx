import React from 'react';
import {
  Key,
  EyeOff,
  Eye,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  ShieldAlert,
  Award,
  Video,
  ListChecks
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { HABITOS_CONTRASENA_1RO, useProteccionCuentas1ro } from '../../../../hooks/HooksProteccionCuentas/useProteccionCuentas1ro';
import './ProteccionCuentas1ro.css';

export const ProteccionCuentas1ro: React.FC = () => {
  const {
    password,
    setPassword,
    mostrarPassword,
    setMostrarPassword,
    evaluacion,
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
  } = useProteccionCuentas1ro();

  return (
    <main className="pagina-modulo-proteccion">
      <HeaderModulo
        grado="1ro"
        modulo="1: Contraseñas Seguras"
        titulo="Creación de Contraseñas Robustas"
        subTitulo="Una contraseña es la llave digital de tu casillero personal. Aprende a crear claves secretas en 1er Año."
        categoria="Protección de Cuentas y Accesos"
        tiempoEstimado="45 min"
        icono={<Key size={36} />}
      />

      <div className="contenedor-proteccion-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. ¿Por qué tu contraseña es como un cepillo de dientes?</h2>
          </div>
          <p className="texto-lectura-modulo">
            Piensa en tu contraseña como la llave de tu casillero. Si alguien la consigue, puede abrir tu vida digital: ver tus fotos, leer tus conversaciones, robar tus cuentas de juegos y hasta suplantar tu identidad. Por eso, una contraseña debe ser <strong>personal, secreta y difícil de adivinar</strong>.
          </p>

          <div className="grid-pilares-proteccion">
            <div className="caja-pilar-proteccion">
              <ShieldAlert className="icono-pilar rojo" size={28} />
              <h3>Lo que NUNCA debes usar</h3>
              <ul className="lista-errores">
                <li>Tu nombre o apellido</li>
                <li>Fecha de nacimiento</li>
                <li>Nombre de tu mascota</li>
                <li>Número de cédula</li>
                <li>"123456", "password", "contraseña"</li>
              </ul>
            </div>

            <div className="caja-pilar-proteccion">
              <ShieldCheck className="icono-pilar verde" size={28} />
              <h3>La regla de oro: Frases de Contraseña</h3>
              <p>En lugar de una palabra corta, usa una <strong>frase larga y sin sentido para otros</strong>. Es más fácil de recordar y mucho más difícil de descifrar.</p>
              <p className="ejemplo-frase">Ejemplo: <code>"MiAbuelaPreparaArepasConQueso_58!"</code></p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE FORTALEZA */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <Key className="icono-bloque-azul" size={24} />
            <h2>2. Simulador: Crea tu Contraseña</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Simulador de Fortaleza de Contraseñas"
            enQueConsiste="Escribirás una frase o clave de prueba en el campo interactivo para evaluar en tiempo real la complejidad, longitud y resistencia de la contraseña."
            comoInteractuar="Ingresa texto en la casilla de entrada (¡no uses tu clave personal real!). Observa cómo la barra de nivel cambia de color (Rojo: Débil, Amarillo: Media, Verde: Inexpugnable) y revisa las recomendaciones dinámicas según agregues números, símbolos y mayúsculas."
            paraQueSirve="Aprenderás a construir claves indescifrables capaces de resistir ataques automatizados de adivinación (fuerza bruta)."
          />

          <div className="input-wrapper">
            <input
              type={mostrarPassword ? 'text' : 'password'}
              className="input-password-simulador"
              placeholder="Escribe una contraseña de prueba..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="boton-ojo"
              onClick={() => setMostrarPassword(!mostrarPassword)}
              aria-label={mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {mostrarPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="medidor-fortaleza">
            <div
              className="barra-fortaleza"
              style={{ width: `${evaluacion.score}%`, backgroundColor: evaluacion.color }}
            ></div>
          </div>
          <span className="texto-fortaleza" style={{ color: evaluacion.color }}>
            {evaluacion.etiqueta || 'Empieza a escribir...'}
          </span>

          <div className="criterios-password">
            <div className={`criterio-item ${password.length >= 8 ? 'cumple' : ''}`}>
              {password.length >= 8 ? <CheckCircle2 size={18} /> : <XCircle size={18} />} Al menos 8 caracteres
            </div>
            <div className={`criterio-item ${/[A-Z]/.test(password) ? 'cumple' : ''}`}>
              {/[A-Z]/.test(password) ? <CheckCircle2 size={18} /> : <XCircle size={18} />} Una mayúscula
            </div>
            <div className={`criterio-item ${/[a-z]/.test(password) ? 'cumple' : ''}`}>
              {/[a-z]/.test(password) ? <CheckCircle2 size={18} /> : <XCircle size={18} />} Una minúscula
            </div>
            <div className={`criterio-item ${/[0-9]/.test(password) ? 'cumple' : ''}`}>
              {/[0-9]/.test(password) ? <CheckCircle2 size={18} /> : <XCircle size={18} />} Un número
            </div>
            <div className={`criterio-item ${/[^A-Za-z0-9]/.test(password) ? 'cumple' : ''}`}>
              {/[^A-Za-z0-9]/.test(password) ? <CheckCircle2 size={18} /> : <XCircle size={18} />} Un símbolo (@, $, !, %)
            </div>
            <div className={`criterio-item ${password.length >= 12 ? 'cumple' : ''}`}>
              {password.length >= 12 ? <CheckCircle2 size={18} /> : <XCircle size={18} />} 12+ caracteres (ideal)
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: CHECKLIST DE BUENAS PRÁCTICAS */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <ListChecks className="icono-bloque-verde" size={24} />
            <h2>3. Checklist de Protección de Cuentas</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_CONTRASENA_1RO.map((habito) => (
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
                🏆 ¡Excelente! Eres un guardián de tus cuentas.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para tener la máxima protección.
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 4: VIDEOS EDUCATIVOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Video className="icono-bloque-amarillo" size={24} />
            <h2>4. Videos para Aprender Más</h2>
          </div>
          <p className="texto-lectura-modulo">
            Mira estos videos cortos para reforzar lo aprendido:
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

        {/* SECCIÓN 5: QUIZ FINAL */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-azul" size={24} />
            <h2>5. Evaluación Final</h2>
          </div>
          <p className="texto-lectura-modulo">
            Demuestra lo aprendido respondiendo estas preguntas.
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

export default ProteccionCuentas1ro;