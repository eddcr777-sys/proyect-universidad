import React from 'react';
import {
  Trash2,
  LogOut,
  Smartphone,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  KeyRound,
  Lock,
  Eye,
  EyeOff,
  Award,
  XCircle
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { useAuditoria1ro, HABITOS_1RO } from '../../../../hooks/HooksAuditoria/useAuditoria1ro';
import './AuditoriaDigital1ro.css';

export const AuditoriaDigital1ro: React.FC = () => {
  const {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    appsEjemplo,
    permisosSeleccionados,
    togglePermiso,
    evaluarPermisos,
    resultadoPermisos,
    password,
    setPassword,
    fortalezaPassword,
    preguntasQuiz,
    respuestasQuiz,
    responderPregunta,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  } = useAuditoria1ro();

  return (
    <main className="pagina-modulo-auditoria">
      <HeaderModulo
        grado="1ro"
        modulo="1: Higiene Básica"
        titulo="Auditoría e Higiene Digital Personal"
        subTitulo="Aprende a mantener tus equipos limpios y organizados en 1er Año. Una habitación ordenada es como un dispositivo seguro."
        categoria="Auditoría e Higiene"
        tiempoEstimado="45 min"
        icono={<EyeOff size={36} />}
      />

      <div className="contenedor-auditoria-contenido">
        {/* ========== SECCIÓN 1: TEORÍA AMPLIADA ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. ¿Qué es la Higiene Digital?</h2>
          </div>
          <p className="texto-lectura-modulo">
            Así como limpiamos nuestra habitación y nos lavamos las manos, nuestros teléfonos, tabletas y computadoras necesitan un <strong>mantenimiento constante</strong> para estar seguros y rápidos. La higiene digital son las rutinas que realizamos para mantener nuestros dispositivos libres de amenazas y funcionando correctamente.
          </p>

          <div className="grid-pilares-higiene">
            <div className="caja-pilar-higiene">
              <Trash2 className="icono-pilar rojo" size={28} />
              <h3>Borrar lo Innecesario</h3>
              <p>Elimina apps y juegos que no usas. Si no los usas, no los necesitas, y solo ocupan espacio o pueden tener fallas de seguridad.</p>
            </div>

            <div className="caja-pilar-higiene">
              <LogOut className="icono-pilar azul" size={28} />
              <h3>Cerrar Sesión</h3>
              <p>Nunca dejes tu correo o red social abierta en una computadora que compartes con otras personas (ej. en el liceo o cibercafé).</p>
            </div>

            <div className="caja-pilar-higiene">
              <Smartphone className="icono-pilar verde" size={28} />
              <h3>Actualizar</h3>
              <p>Permite que tu dispositivo instale las actualizaciones. Estas contienen "parches" que arreglan errores de seguridad.</p>
            </div>

            <div className="caja-pilar-higiene">
              <ShieldCheck className="icono-pilar morado" size={28} />
              <h3>Verificación en Dos Pasos</h3>
              <p>Activa esta capa extra de seguridad en tu correo y redes. Aunque alguien consiga tu contraseña, no podrá entrar sin el código que llega a tu teléfono.</p>
            </div>
          </div>

          <div className="conceptos-clave-grid">
            <h3 className="titulo-mini-seccion">Conceptos Clave</h3>
            <div className="lista-conceptos">
              <div className="item-concepto">
                <strong>Huella Digital:</strong> Es el rastro que dejas al navegar: publicaciones, fotos, búsquedas. Puede ser activa (lo que publicas) o pasiva (datos que se recolectan sin que lo sepas).
              </div>
              <div className="item-concepto">
                <strong>Permisos de Apps:</strong> Autorizaciones que das a una aplicación para usar partes de tu celular (cámara, micrófono, contactos). Deben ser solo los necesarios.
              </div>
              <div className="item-concepto">
                <strong>Malware:</strong> Software malicioso que puede dañar tu dispositivo o robar información. Suele esconderse en apps piratas o enlaces falsos.
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECCIÓN 2: SIMULADOR DE PERMISOS ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Lock className="icono-bloque-amarillo" size={24} />
            <h2>2. Simulador: ¿Qué permisos otorgarías?</h2>
          </div>
          <p className="texto-lectura-modulo">
            A continuación verás varias aplicaciones. Marca los permisos que <strong>tú</strong> le darías. Luego presiona "Comprobar" para ver si acertaste.
          </p>

          <div className="apps-permisos-lista">
            {appsEjemplo.map(app => (
              <div key={app.id} className="app-permiso-card">
                <div className="app-info">
                  <span className="app-icono">{app.icono}</span>
                  <div>
                    <h3>{app.nombre}</h3>
                    <p className="permisos-solicitados">
                      Permisos solicitados: {app.permisosSolicitados.join(', ')}
                    </p>
                  </div>
                </div>
                <div className="permisos-opciones">
                  {app.permisosSolicitados.map(permiso => {
                    const activo = permisosSeleccionados[app.id]?.includes(permiso) || false;
                    return (
                      <button
                        key={permiso}
                        className={`chip-permiso ${activo ? 'activo' : ''}`}
                        onClick={() => togglePermiso(app.id, permiso)}
                      >
                        {activo ? <CheckCircle2 size={16} /> : null}
                        {permiso}
                      </button>
                    );
                  })}
                </div>
                <div className="acciones-app-permiso">
                  <button
                    className="boton-comprobar"
                    onClick={() => evaluarPermisos(app.id)}
                  >
                    Comprobar
                  </button>
                  {resultadoPermisos[app.id] !== undefined && (
                    <div className={`feedback-permiso ${resultadoPermisos[app.id] ? 'correcto' : 'incorrecto'}`}>
                      {resultadoPermisos[app.id] ? (
                        <>
                          <CheckCircle2 size={18} /> ¡Correcto!
                        </>
                      ) : (
                        <>
                          <XCircle size={18} /> Incorrecto. {app.explicacion}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== SECCIÓN 3: CHECKLIST DE HIGIENE ========== */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
          
            <h2>3. Tu Primera Auditoría: Checklist</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las acciones que ya realizaste en tu dispositivo (celular, tableta o computadora):
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_1RO.map((habito) => (
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
              <strong>Progreso de Limpieza: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} tareas completadas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Tu dispositivo está limpio, organizado y seguro.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Intenta completar todas las tareas para mantener tu equipo al 100%.
              </div>
            )}
          </div>
        </section>

        {/* ========== SECCIÓN 4: MEDIDOR DE CONTRASEÑAS ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <KeyRound className="icono-bloque-morado" size={24} />
            <h2>4. ¿Qué tan fuerte es tu contraseña?</h2>
          </div>
          <p className="texto-lectura-modulo">
            Escribe una contraseña para evaluar su fortaleza. Recuerda: una buena contraseña tiene al menos 12 caracteres, combina mayúsculas, minúsculas, números y símbolos.
          </p>

          <div className="password-tester">
            <div className="input-password-wrapper">
              <input
                type="text"
                placeholder="Escribe una contraseña..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-password"
              />
              <Eye className="icono-ojo" size={20} />
            </div>
            {password.length > 0 && (
              <div className="password-feedback">
                <div className="barra-fortaleza">
                  <div
                    className={`barra-fortaleza-relleno score-${fortalezaPassword.score}`}
                    style={{ width: `${(fortalezaPassword.score / 5) * 100}%`, backgroundColor: fortalezaPassword.color }}
                  ></div>
                </div>
                <span className="etiqueta-fortaleza" style={{ color: fortalezaPassword.color }}>
                  {fortalezaPassword.etiqueta}
                </span>
                <div className="sugerencias-password">
                  <p>💡 Consejos para mejorarla:</p>
                  <ul>
                    <li>Usa al menos 12 caracteres</li>
                    <li>Mezcla mayúsculas, minúsculas, números y símbolos</li>
                    <li>No uses información personal (fechas, nombres)</li>
                    <li>No reutilices la misma contraseña en varios sitios</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========== SECCIÓN 5: QUIZ ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-azul" size={24} />
            <h2>5. Evaluación Final</h2>
          </div>
          <p className="texto-lectura-modulo">
            Demuestra lo que aprendiste respondiendo estas preguntas.
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
                      onClick={() => responderPregunta(pregunta.id, idx)}
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

export default AuditoriaDigital1ro;