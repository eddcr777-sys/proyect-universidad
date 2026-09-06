import React from 'react';
import {
  Share2,
  Lock,
  Eye,
  MessageSquareWarning,
  Sparkles,
  HelpCircle,
  User,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Award,
  Video,
  ListChecks
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { useRedesSociales1ro, HABITOS_REDES_1RO } from '../../../../hooks/HooksRedesSociales/useRedesSociales1ro';
import './RedesSociales1ro.css';

export const RedesSociales1ro: React.FC = () => {
  const {
    cuentaPrivada,
    setCuentaPrivada,
    ocultarUbicacion,
    setOcultarUbicacion,
    aprobarEtiquetas,
    setAprobarEtiquetas,
    nivelPrivacidad,
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
  } = useRedesSociales1ro();

  let nivelTexto = "Bajo (Público)";
  let colorMedidor = "var(--color-ciber-alerta)";
  if (nivelPrivacidad === 3) {
    nivelTexto = "Alto (Seguro)";
    colorMedidor = "var(--color-ciber-secundario)";
  } else if (nivelPrivacidad > 0) {
    nivelTexto = "Medio (Mejorable)";
    colorMedidor = "#f59e0b";
  }

  return (
    <main className="pagina-modulo-redes">
      <HeaderModulo
        grado="1ro"
        modulo="1: Configuración de Privacidad y Netiqueta"
        titulo="Lo que compartes te define"
        subTitulo="Aprende a configurar tu perfil para que solo tus verdaderos amigos puedan ver tus fotos y publicaciones."
        categoria="Redes Sociales e Identidad"
        tiempoEstimado="45 min"
        icono={<Share2 size={36} />}
      />

      <div className="contenedor-redes-contenido">
        {/* SECCIÓN 1: TEORÍA */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Perfiles Públicos vs. Privados</h2>
          </div>
          <p className="texto-lectura-modulo">
            En internet, lo que publicas en una cuenta "Pública" puede ser visto, guardado y compartido por <strong>cualquier persona en el mundo</strong>, incluso desconocidos con malas intenciones. Una cuenta privada es el primer escudo que te da control sobre quién te sigue y ve tus publicaciones.
          </p>

          <div className="grid-pilares-redes">
            <div className="caja-pilar-redes">
              <Eye className="icono-pilar rojo" size={28} />
              <h3>El Peligro de lo Público</h3>
              <p>Fotos en uniforme escolar, lugares que frecuentas y horarios quedan expuestos al mundo entero. Esto puede facilitar el acoso, la suplantación o incluso el robo.</p>
            </div>

            <div className="caja-pilar-redes">
              <Lock className="icono-pilar verde" size={28} />
              <h3>Cuenta Privada</h3>
              <p>El primer escudo. Significa que tú decides quién puede seguirte y ver tus actualizaciones (solo gente que conoces en la vida real).</p>
            </div>

            <div className="caja-pilar-redes">
              <MessageSquareWarning className="icono-pilar naranja" size={28} />
              <h3>Netiqueta</h3>
              <p>Comportarse en internet igual que en persona: no insultar, no acosar y pensar antes de enviar un mensaje. Las palabras también hieren.</p>
            </div>
          </div>

          <div className="conceptos-clave-grid">
            <h3 className="titulo-mini-seccion">Conceptos Clave</h3>
            <div className="lista-conceptos">
              <div className="item-concepto">
                <strong>Huella digital en redes:</strong> Cada like, comentario y foto construye tu reputación en línea. Piensa antes de publicar: lo que subes hoy puede permanecer para siempre.
              </div>
              <div className="item-concepto">
                <strong>Geoetiquetado:</strong> Muchas redes añaden automáticamente tu ubicación exacta a las fotos. Desactiva esta opción para no revelar dónde vives o estudias.
              </div>
              <div className="item-concepto">
                <strong>Etiquetas:</strong> Cuando otros te etiquetan en fotos, aparecen en tu perfil. Configura la aprobación manual para controlar tu imagen.
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE PRIVACIDAD */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-azul" size={24} />
            <h2>2. Simulador: Blinda tu Perfil</h2>
          </div>
          <CajaExplicacionDinamica
            tituloDinamica="Instrucciones del Simulador: Blinda tu Perfil"
            enQueConsiste="Interactuarás con tres controles clave de seguridad (Cuenta Privada, Ocultar Ubicación GPS y Aprobar Etiquetas) para blindar la visibilidad de tu cuenta."
            comoInteractuar="Haz clic en cada interruptor deslizable para activar o desactivar la protección. Revisa cómo el medidor de nivel de privacidad cambia de 'Bajo (Público)' a 'Alto (Seguro)'."
            paraQueSirve="Entenderás la función de cada ajuste de seguridad en redes como Instagram, TikTok y WhatsApp para evitar que extraños rastreen tu domicilio o routine."
          />

          <div className="simulador-privacidad-grid">
            {/* Panel de Configuración */}
            <div className="panel-configuracion">
              <div className="panel-configuracion-header">
                <h3>⚙️ Configuración</h3>
              </div>

              <div className="toggle-row" onClick={() => setCuentaPrivada(!cuentaPrivada)}>
                <div className="toggle-info">
                  <h4>Cuenta Privada</h4>
                  <p>Solo seguidores aprobados ven tu contenido.</p>
                </div>
                <div className={`toggle-switch ${cuentaPrivada ? 'activo' : ''}`}>
                  <div className="toggle-thumb"></div>
                </div>
              </div>

              <div className="toggle-row" onClick={() => setOcultarUbicacion(!ocultarUbicacion)}>
                <div className="toggle-info">
                  <h4>Ocultar Ubicación GPS</h4>
                  <p>No muestra en qué ciudad o lugar estás publicando.</p>
                </div>
                <div className={`toggle-switch ${ocultarUbicacion ? 'activo' : ''}`}>
                  <div className="toggle-thumb"></div>
                </div>
              </div>

              <div className="toggle-row" onClick={() => setAprobarEtiquetas(!aprobarEtiquetas)}>
                <div className="toggle-info">
                  <h4>Aprobar Etiquetas</h4>
                  <p>Decides si una foto tuya subida por otro sale en tu perfil.</p>
                </div>
                <div className={`toggle-switch ${aprobarEtiquetas ? 'activo' : ''}`}>
                  <div className="toggle-thumb"></div>
                </div>
              </div>
            </div>

            {/* Vista del Perfil (Mockup) */}
            <div>
              <div className="perfil-mockup">
                <div className="perfil-header"></div>
                <div className="perfil-avatar">
                  <User size={40} />
                </div>
                <div className="perfil-info">
                  <h4>
                    Estudiante123 {cuentaPrivada && <Lock size={16} color="#64748b" style={{ display: 'inline', marginLeft: '0.25rem' }} />}
                  </h4>
                  <p>Liceo Dr. Carlos Lemus 🎓</p>

                  <div className="perfil-contenido">
                    {cuentaPrivada ? (
                      <div className="perfil-privado">
                        <Lock size={32} />
                        <p style={{ fontWeight: 'bold' }}>Esta cuenta es privada</p>
                        <p style={{ fontSize: '0.85rem' }}>Debes seguir a este usuario para ver sus fotos.</p>
                      </div>
                    ) : (
                      <div>
                        <div className="publicacion-simulada">
                          <div className="avatar-miniatura"></div>
                          <div>
                            <p style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#334155' }}>Foto en el recreo</p>
                            {!ocultarUbicacion && <p style={{ fontSize: '0.75rem', color: '#ef4444' }}>📍 Patio del Liceo Lemus (Público)</p>}
                          </div>
                        </div>
                        <div className="imagen-simulada"></div>

                        {!aprobarEtiquetas && (
                          <div className="etiqueta-simulada">
                            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>📌 Etiquetado en: "Fiesta de anoche" (Subida por UsuarioX)</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="nivel-proteccion">
                <span style={{ fontWeight: 'bold' }}>Nivel de Protección: </span>
                <span style={{ color: colorMedidor, fontWeight: '900' }}>{nivelTexto}</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: CHECKLIST */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <ListChecks className="icono-bloque-verde" size={24} />
            <h2>3. Checklist de Privacidad en Redes</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_REDES_1RO.map((habito) => (
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
              <strong>Privacidad en Redes: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} buenas prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Tu privacidad en redes está blindada.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para tener un perfil seguro.
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

        {/* SECCIÓN 5: QUIZ */}
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

export default RedesSociales1ro;