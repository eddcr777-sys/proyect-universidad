import React, { useState } from 'react';
import { 
  Brain, 
  Flame, 
  AlertTriangle, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2,
  ShieldCheck,
  Zap
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/Phishing1ro.css';

interface TacticaEngano {
  id: number;
  escenario: string;
  disparadorPsicologico: string;
  explicacion: string;
}

const TACTICAS_3RO: TacticaEngano[] = [
  {
    id: 1,
    escenario: "Recibes un correo que dice: 'Tu cuenta de correo será suspendida de manera permanente en las próximas 2 horas si no actualizas tu clave aquí'.",
    disparadorPsicologico: "Miedo y Urgencia Extrema",
    explicacion: "Los atacantes usan el pánico para que actúes de inmediato sin consultar con un adulto o analizar el enlace."
  },
  {
    id: 2,
    escenario: "Un mensaje directo dice: 'Alguien publicó fotos tuyas privadas en este foro web. Entra para verlas y borrarlas'.",
    disparadorPsicologico: "Curiosidad e Inseguridad",
    explicacion: "Juegan con la preocupación de la reputación personal para inducirte a ingresar tus credenciales en una página clonada."
  },
  {
    id: 3,
    escenario: "Te llega una notificación: 'El Director del Liceo solicita que envíes el listado de claves de tu sección para la auditoría de Moodle'.",
    disparadorPsicologico: "Falsa Autoridad",
    explicacion: "Suplantan a directores o profesores sabiendo que los estudiantes tienden a obedecer figuras de autoridad rápidamente."
  }
];

export const Phishing3ro: React.FC = () => {
  const [tacticaRevelada, setTacticaRevelada] = useState<Record<number, boolean>>({});
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const toggleTactica = (id: number) => {
    setTacticaRevelada(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="pagina-modulo-phishing">
      <HeaderModulo
        grado="3ro"
        modulo="3: Psicología del Engaño"
        titulo="Ingeniería Social y Manipulación en Línea"
        subTitulo="Descubre cómo los atacantes usan emociones como la urgencia, el miedo y la curiosidad para manipular a las personas sin necesidad de hackear computadoras."
        categoria="Defensa Digital y Privacidad"
        tiempoEstimado="40 min"
        icono={<Brain size={36} />}
      />

      <div className="contenedor-phishing-contenido">
        {/* SECCIÓN 1: CONCEPTOS PSICOLÓGICOS */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. ¿Qué es la Ingeniería Social?</h2>
          </div>
          <p className="texto-lectura-phishing">
            En lugar de buscar fallas complejas en un sistema informático, la <strong>Ingeniería Social</strong> busca la falla en el factor humano: manipular tus emociones para que seas tú mismo quien le entregue las claves al ciberdelincuente.
          </p>

          <div className="grid-senales-phishing">
            <div className="caja-senal-item">
              <Flame className="icono-senal rojo" size={28} />
              <h3>Presión de Tiempo</h3>
              <p>Te hacen creer que no tienes tiempo para pensar o pedir consejo.</p>
            </div>

            <div className="caja-senal-item">
              <Zap className="icono-senal amarillo" size={28} />
              <h3>Codicia y Oportunidad</h3>
              <p>Promesas de dinero fácil, diamantes gratis o cuentas premium sin costo.</p>
            </div>

            <div className="caja-senal-item">
              <Brain className="icono-senal azul" size={28} />
              <h3>Suplantación de Confianza</h3>
              <p>Fingen ser tus amigos, profesores o empresas muy reconocidas.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: ANALIZADOR DE TÁCTICAS */}
        <section className="bloque-phishing-tarjeta interactivo-caja">
          <div className="encabezado-bloque-phishing">
            <Brain className="icono-bloque-verde" size={24} />
            <h2>2. Revela el Truco Psicológico</h2>
          </div>
          <p className="subtitulo-bloque-phishing">
            Haz clic en cada escenario real para desmantelar la táctica de manipulación emocional empleada:
          </p>

          <div className="lista-simuladores-phishing">
            {TACTICAS_3RO.map((tac) => (
              <div key={tac.id} className="tarjeta-mensaje-simulado">
                <div className="cabecera-mensaje-simulado">
                  <span className="badge-canal">Caso #{tac.id}</span>
                  <span className="remitente-texto">Escenario de Manipulación</span>
                </div>

                <div className="cuerpo-mensaje-simulado">
                  <p>"{tac.escenario}"</p>
                </div>

                <button 
                  className="btn-decision seguro"
                  onClick={() => toggleTactica(tac.id)}
                  style={{ width: 'fit-content' }}
                >
                  <ShieldCheck size={18} /> {tacticaRevelada[tac.id] ? 'Ocultar Análisis' : 'Desmantelar Truco Psicológico'}
                </button>

                {tacticaRevelada[tac.id] && (
                  <div className="feedback-decision acierto">
                    <p style={{ margin: '0 0 0.5rem 0', fontWeight: '800' }}>
                      🎯 Disparador Usado: {tac.disparadorPsicologico}
                    </p>
                    <p style={{ margin: 0 }}>{tac.explicacion}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: QUIZ RÁPIDO */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Diagnóstica</h2>
          </div>
          <p className="texto-lectura-phishing">
            <strong>Pregunta:</strong> ¿Cuál es la mejor defensa frente a cualquier intento de Ingeniería Social basado en urgencia?
          </p>

          <div className="opciones-quiz-phishing">
            <button 
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Responder rápidamente antes de que expire la cuenta.
            </button>
            <button 
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Hacer una pausa, respirar y verificar la autenticidad por otro medio sin hacer clic en los enlaces enviados.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Excelente!</strong> Romper el ciclo de urgencia e inspeccionar los canales oficiales neutraliza por completo la ingeniería social.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Phishing3ro;
