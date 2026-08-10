import React, { useState } from 'react';
import { 
  Fish, 
  AlertTriangle, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle, 
  Mail, 
  MessageSquare,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import './Phishing1ro.css';

interface MensajeSimulado {
  id: number;
  remitente: string;
  canal: string;
  asunto: string;
  contenido: string;
  esPhishing: boolean;
  explicacion: string;
}

const MENSAJES_1RO: MensajeSimulado[] = [
  {
    id: 1,
    remitente: "Soporte Roblox <premios-gratis99@gmail-soporte.com>",
    canal: "Correo Electrónico",
    asunto: "¡FELICIDADES! Ganaste 10,000 Robux gratis",
    contenido: "Haz clic en este enlace inmediatamente e ingresa tu contraseña de usuario para reclamar tu premio antes de que expire en 2 horas: http://roblox-premios-gratis.xyz",
    esPhishing: true,
    explicacion: "¡Es Phishing! La empresa oficial nunca te pedirá tu contraseña ni usará un correo de Gmail gratuito o un enlace sospecoso (.xyz)."
  },
  {
    id: 2,
    remitente: "Coordinación L.B. Antonio Lemus Pérez",
    canal: "Moodle Liceo",
    asunto: "Horario de evaluaciones del 2do lapso",
    contenido: "Estimado estudiante, ya se encuentra disponible el cronograma de exámenes en la sección de Avisos del aula virtual Moodle.",
    esPhishing: false,
    explicacion: "¡Mensaje Seguro! Es un comunicado informativo oficial sin solicitar datos ni enlaces externos sospechosos."
  },
  {
    id: 3,
    remitente: "+58 412 000-9988 (Desconocido)",
    canal: "WhatsApp",
    asunto: "Urgencia Familiar",
    contenido: "Hola tío/papá, cambié de número. Tuve una emergencia y necesito que me envíes un código que te llegará por SMS en este momento.",
    esPhishing: true,
    explicacion: "¡Es un engaño! Pedir códigos de verificación por SMS es una táctica típica para secuestrar tu cuenta de WhatsApp."
  }
];

export const Phishing1ro: React.FC = () => {
  const [respuestas, setRespuestas] = useState<Record<number, boolean | null>>({});
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const evaluarMensaje = (id: number, eleccionUsuario: boolean) => {
    setRespuestas(prev => ({
      ...prev,
      [id]: eleccionUsuario
    }));
  };

  return (
    <main className="pagina-modulo-phishing">
      <HeaderModulo
        grado="1ro"
        modulo="1: Detección de Engaños"
        titulo="Prevención de Phishing e Identificación de Mensajes Falsos"
        subTitulo="Aprende a reconocer señuelos, correos sospechosos y engaños por mensajes de texto para proteger tu información personal en 1er Año."
        categoria="Defensa Digital y Privacidad"
        tiempoEstimado="35 min"
        icono={<Fish size={36} />}
      />

      <div className="contenedor-phishing-contenido">
        {/* SECCIÓN 1: CONCEPTOS BÁSICOS */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. ¿Qué es el Phishing?</h2>
          </div>
          <p className="texto-lectura-phishing">
            La palabra <strong>Phishing</strong> viene del inglés <em>fishing</em> (pescar). Es una técnica de engaño donde personas malintencionadas envían mensajes falsos buscando que "muerdas el anzuelo" para robar tu usuario, contraseñas o datos familiares.
          </p>

          <div className="grid-senales-phishing">
            <div className="caja-senal-item">
              <AlertTriangle className="icono-senal rojo" size={28} />
              <h3>Sensación de Urgencia</h3>
              <p>Te presionan diciendo: <em>"¡Hazlo ya en 5 minutos o perderás tu cuenta!"</em> para que actúes sin pensar.</p>
            </div>

            <div className="caja-senal-item">
              <Fish className="icono-senal azul" size={28} />
              <h3>Premios Demasiado Buenos</h3>
              <p>Te prometen dinero, teléfonos de alta gama o diamantes gratis en juegos a cambio de hacer clic.</p>
            </div>

            <div className="caja-senal-item">
              <Mail className="icono-senal amarillo" size={28} />
              <h3>Enlaces y Remitentes Falsos</h3>
              <p>Direcciones con faltas de ortografía o dominios extraños como <code>@soporte-gratis-123.com</code>.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR INTERACTIVO DETECTOR DE PHISHING */}
        <section className="bloque-phishing-tarjeta interactivo-caja">
          <div className="encabezado-bloque-phishing">
            <MessageSquare className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio Interactivo: Detecta el Anzuelo</h2>
          </div>
          <p className="subtitulo-bloque-phishing">
            Analiza cada uno de los siguientes mensajes simulados y decide si es **Seguro** o si se trata de **Phishing**:
          </p>

          <div className="lista-simuladores-phishing">
            {MENSAJES_1RO.map((msg) => {
              const resEleccion = respuestas[msg.id];

              return (
                <div key={msg.id} className="tarjeta-mensaje-simulado">
                  <div className="cabecera-mensaje-simulado">
                    <span className="badge-canal">{msg.canal}</span>
                    <span className="remitente-texto">De: {msg.remitente}</span>
                  </div>

                  <div className="cuerpo-mensaje-simulado">
                    <h4>Asunto: {msg.asunto}</h4>
                    <p>"{msg.contenido}"</p>
                  </div>

                  {/* Botones de Decisión */}
                  <div className="acciones-decision-phishing">
                    <button 
                      className={`btn-decision seguro ${resEleccion === false ? 'seleccionado' : ''}`}
                      onClick={() => evaluarMensaje(msg.id, false)}
                    >
                      <ShieldCheck size={18} /> Es Seguro
                    </button>
                    <button 
                      className={`btn-decision phishing ${resEleccion === true ? 'seleccionado' : ''}`}
                      onClick={() => evaluarMensaje(msg.id, true)}
                    >
                      <AlertTriangle size={18} /> Es Phishing / Engaño
                    </button>
                  </div>

                  {/* Feedback educativo */}
                  {resEleccion !== undefined && (
                    <div className={`feedback-decision ${resEleccion === msg.esPhishing ? 'acierto' : 'fallo'}`}>
                      {resEleccion === msg.esPhishing ? (
                        <div className="flex-resultado">
                          <CheckCircle2 size={20} className="icono-acierto" />
                          <span><strong>¡Excelente diagnóstico!</strong> {msg.explicacion}</span>
                        </div>
                      ) : (
                        <div className="flex-resultado">
                          <XCircle size={20} className="icono-fallo" />
                          <span><strong>Atención:</strong> {msg.explicacion}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN 3: QUIZ RÁPIDO */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Diagnóstica</h2>
          </div>
          <p className="texto-lectura-phishing">
            <strong>Pregunta:</strong> Recibes un mensaje de un número desconocido diciendo que tu mamá tuvo una emergencia y debes enviarles dinero o claves. ¿Qué debes hacer primero?
          </p>

          <div className="opciones-quiz-phishing">
            <button 
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Enviar inmediatamente las claves o el dinero por si acaso es verdad.
            </button>
            <button 
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Mantener la calma y llamar directamente a tu familiar o a tus profesores para verificar antes de responder.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> Ante cualquier mensaje de urgencia de desconocidos, la regla de oro es verificar por una llamada directa.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Phishing1ro;
