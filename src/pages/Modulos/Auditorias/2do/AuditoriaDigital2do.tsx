import React from 'react';
import {
  Wifi,
  Bluetooth,
  MonitorSmartphone,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ShieldAlert,
  ShieldCheck,
  XCircle,
  Award
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { CajaExplicacionDinamica } from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { useAuditoria2do, HABITOS_2DO } from '../../../../hooks/HooksAuditoria/useAuditoria2do';
import '../1ro/AuditoriaDigital1ro.css';
import './AuditoriaDigital2do.css';

export const AuditoriaDigital2do: React.FC = () => {
  const {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    escenarios,
    respuestasEscenario,
    responderEscenario,
    escenarioEvaluado,
    preguntasQuiz,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  } = useAuditoria2do();

  return (
    <main className="pagina-modulo-auditoria">
      <HeaderModulo
        grado="2do"
        modulo="2: Redes y Conexiones"
        titulo="Auditoría de Redes y Dispositivos Vinculados"
        subTitulo="Conectarse a redes Wi-Fi públicas sin contraseña expone tus datos a miradas indiscretas. Aprende a conectarte de forma segura en 2do Año."
        categoria="Auditoría e Higiene"
        tiempoEstimado="45 min"
        icono={<Wifi size={36} />}
      />

      <div className="contenedor-auditoria-contenido">
        {/* ========== SECCIÓN 1: TEORÍA AMPLIADA ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Los peligros de las conexiones invisibles</h2>
          </div>
          <p className="texto-lectura-modulo">
            Nuestro celular se comunica constantemente con el mundo exterior. A veces, si no somos cuidadosos, se conecta a redes o dispositivos que pueden intentar extraer nuestra información personal. La seguridad de tus conexiones es tan importante como la de tu propia casa.
          </p>

          <div className="grid-pilares-higiene">
            <div className="caja-pilar-higiene">
              <Wifi className="icono-pilar rojo" size={28} />
              <h3>Wi‑Fi Públicas Abiertas</h3>
              <p>Las redes de plazas o aeropuertos sin clave no cifran tu información. Un ciberdelincuente conectado a la misma red puede "escuchar" todo lo que envías.</p>
            </div>

            <div className="caja-pilar-higiene">
              <Bluetooth className="icono-pilar azul" size={28} />
              <h3>Bluetooth Innecesario</h3>
              <p>Dejar el Bluetooth encendido todo el tiempo gasta batería y puede permitir intentos de conexión de dispositivos desconocidos.</p>
            </div>

            <div className="caja-pilar-higiene">
              <MonitorSmartphone className="icono-pilar verde" size={28} />
              <h3>Sesiones Vinculadas</h3>
              <p>Muchos servicios te permiten ver en qué otros celulares o computadoras está abierta tu cuenta. Debes revisar esta lista frecuentemente.</p>
            </div>

            <div className="caja-pilar-higiene">
              <ShieldCheck className="icono-pilar morado" size={28} />
              <h3>VPN (Red Privada Virtual)</h3>
              <p>Una VPN crea un túnel cifrado para todo tu tráfico. Es la mejor defensa cuando usas redes que no son de confianza.</p>
            </div>
          </div>

          <div className="conceptos-clave-grid">
            <h3 className="titulo-mini-seccion">Glosario y Términos Clave</h3>
            <div className="lista-conceptos">
              <div className="item-concepto">
                <strong>📖 ¿Qué es una Red abierta?</strong>
                <p>Una red Wi-Fi sin contraseña ni cifrado que permite conectarse a cualquier persona sin autenticación.</p>
                <strong>⚙️ ¿Para qué sirve / Qué peligro representa?</strong>
                <p>Aunque sirve para dar internet gratuito, permite que atacantes en la misma red intercepten contraseñas y mensajes enviados sin cifrar.</p>
              </div>
              <div className="item-concepto">
                <strong>📖 ¿Qué es una Dirección MAC?</strong>
                <p>Un código alfanumérico único grabado en la tarjeta de red de cada celular o computadora.</p>
                <strong>⚙️ ¿Para qué sirve / Qué peligro representa?</strong>
                <p>Sirve para identificar dispositivos en la red local. Si se emite abiertamente, atacantes pueden rastrear la presencia del dispositivo.</p>
              </div>
              <div className="item-concepto">
                <strong>📖 ¿Qué es una Sesión Activa?</strong>
                <p>Un registro guardado en el servidor que mantiene tu cuenta abierta en una computadora o navegador.</p>
                <strong>⚙️ ¿Para qué sirve / Qué peligro representa?</strong>
                <p>Permite no tener que escribir la clave cada minuto. Si la dejas abierta en un equipo público, cualquiera puede usar tu cuenta.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECCIÓN 2: SIMULADOR DE DECISIONES ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <ShieldAlert className="icono-bloque-rojo" size={24} />
            <h2>2. ¿Qué harías en esta situación?</h2>
          </div>
          <CajaExplicacionDinamica
            enQueConsiste="Pondrás a prueba tu capacidad de tomar decisiones seguras al conectarte a redes Wi-Fi públicas o gestionar dispositivos vinculados."
            comoInteractuar="Lee con atención el caso simulado y selecciona la opción (A, B o C) que consideres correcta. Recibirás una respuesta explicativa de inmediato."
            paraQueSirve="Entrenarás tu juicio crítico para evitar ciberataques comunes como 'Man-in-the-Middle' en redes públicas."
          />

          <div className="escenarios-lista">
            {escenarios.map(escenario => (
              <div key={escenario.id} className="escenario-card">
                <h3 className="escenario-titulo">{escenario.titulo}</h3>
                <p className="escenario-descripcion">{escenario.descripcion}</p>
                <div className="opciones-escenario">
                  {escenario.opciones.map((opcion, idx) => {
                    const seleccionada = respuestasEscenario[escenario.id] === idx;
                    const evaluada = escenarioEvaluado[escenario.id] !== undefined;
                    const correcta = idx === escenario.opcionCorrecta;
                    return (
                      <button
                        key={idx}
                        className={`opcion-escenario-btn ${seleccionada ? 'seleccionada' : ''}`}
                        onClick={() => responderEscenario(escenario.id, idx)}
                      >
                        {String.fromCharCode(65 + idx)}) {opcion}
                      </button>
                    );
                  })}
                </div>
                {escenarioEvaluado[escenario.id] !== undefined && (
                  <div className={`feedback-escenario ${escenarioEvaluado[escenario.id] ? 'correcto' : 'incorrecto'}`}>
                    {escenarioEvaluado[escenario.id] ? (
                      <><CheckCircle2 size={18} /> ¡Bien hecho! </>
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

        {/* ========== SECCIÓN 3: CHECKLIST ========== */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>3. Checklist de Conexiones Seguras</h2>
          </div>
          <CajaExplicacionDinamica
            enQueConsiste="Una lista de verificación interactiva para diagnosticar la seguridad de tus conexiones habituales (Wi-Fi, Bluetooth, VPN y sesiones activas)."
            comoInteractuar="Haz clic en cada casilla de verificación que ya apliques en tu rutina diaria. Observa cómo sube la barra de porcentaje de seguridad."
            paraQueSirve="Te ayuda a tomar conciencia de tus hábitos reales de conexión y medir tu nivel actual de protección en redes."
          />

          <div className="lista-habitos-interactiva">
            {HABITOS_2DO.map((habito) => (
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
              <strong>Seguridad de Conexión: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} verificaciones)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Genial! Tus conexiones están bien controladas.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para maximizar tu seguridad en redes.
              </div>
            )}
          </div>
        </section>

        {/* ========== SECCIÓN 4: QUIZ ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>4. Evaluación Final</h2>
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

export default AuditoriaDigital2do;