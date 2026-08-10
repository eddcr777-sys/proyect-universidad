import React, { useState } from 'react';
import {
  ClipboardCheck,
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Award
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/AuditoriaDigital1ro.css';

interface Habito5to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

const HABITOS_5TO: Habito5to[] = [
  { id: '1', texto: 'Sé elaborar una matriz simple de riesgos para identificar vulnerabilidades en mi liceo u hogar', categoria: 'Diagnóstico', enfoque: 'Clasifica los riesgos por probabilidad e impacto antes de que ocurran fallas.' },
  { id: '2', texto: 'Compruebo que los equipos compartidos cumplan con políticas de contraseñas y privacidad básicas', categoria: 'Políticas', enfoque: 'Asegura que el grupo siga pautas colectivas de protección digital.' },
  { id: '3', texto: 'Sé redactar un informe breve de hallazgos con recomendaciones claras de corrección', categoria: 'Informes Técnicos', enfoque: 'Sintetiza la auditoría en un documento accesible para autoridades y profesores.' },
  { id: '4', texto: 'Oriento a estudiantes de grados menores sobre el uso ético y seguro de la red', categoria: 'Liderazgo Digital', enfoque: 'Fomenta el rol de mentor cibernético como futuro graduando del liceo.' },
];

export const AuditoriaDigital5to: React.FC = () => {
  const [comprobados, setComprobados] = useState<Record<string, boolean>>({});
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const toggleHabito = (id: string) => {
    setComprobados(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalComprobados = Object.values(comprobados).filter(Boolean).length;
  const porcentaje = Math.round((totalComprobados / HABITOS_5TO.length) * 100);

  return (
    <main className="pagina-modulo-auditoria">
      <HeaderModulo
        grado="5to"
        modulo="5: Auditoría Institucional"
        titulo="Auditoría e Informe Digital Comunitario"
        subTitulo="Conviértete en un líder digital capaz de realizar diagnósticos cibernéticos, diseñar matrices de riesgo y presentar recomendaciones al Liceo."
        categoria="Auditoría e Higiene"
        tiempoEstimado="50 min"
        icono={<ClipboardCheck size={36} />}
      />

      <div className="contenedor-auditoria-contenido">
        {/* SECCIÓN 1: CONCEPTOS DE AUDITORÍA NIVEL EXPERTO */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. La Auditoría Cibernética en 5to Año</h2>
          </div>
          <p className="texto-lectura-modulo">
            Como futuro bachiller del Liceo Bolivariano Antonio Lemus Pérez, la auditoría digital pasa de un enfoque personal a un <strong>liderazgo comunitario</strong>, evaluando la postura de seguridad de un entorno de estudio o trabajo.
          </p>

          <div className="grid-pilares-higiene">
            <div className="caja-pilar-higiene">
              <ClipboardCheck className="icono-pilar azul" size={28} />
              <h3>Levantamiento de Información</h3>
              <p>Revisión sistemática de credenciales, redes Wi-Fi, copias de seguridad y hábitos del equipo.</p>
            </div>

            <div className="caja-pilar-higiene">
              <FileSpreadsheet className="icono-pilar rojo" size={28} />
              <h3>Matriz de Riesgo</h3>
              <p>Clasificación de fallas según su gravedad (Alta, Media, Baja) para priorizar las acciones.</p>
            </div>

            <div className="caja-pilar-higiene">
              <Award className="icono-pilar verde" size={28} />
              <h3>Plan de Mitigación</h3>
              <p>Redacción de propuestas prácticas para corregir las vulnerabilidades detectadas.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: TEST EXPERTO */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <CheckCircle2 className="icono-bloque-verde" size={24} />
            <h2>2. Matriz de Auditoría Comunitaria (5to Año)</h2>
          </div>
          <p className="subtitulo-bloque">
            Evalúa tus competencias para conducir una auditoría de ciberseguridad escolar:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_5TO.map((habito) => (
              <div
                key={habito.id}
                className={`item-habito-check ${comprobados[habito.id] ? 'activo' : ''}`}
                onClick={() => toggleHabito(habito.id)}
              >
                <input
                  type="checkbox"
                  checked={!!comprobados[habito.id]}
                  onChange={() => { }}
                  className="checkbox-custom"
                />
                <div className="info-item-habito">
                  <span className="categoria-badge-mini">{habito.categoria}</span>
                  <p className="texto-habito">{habito.texto}</p>
                  <span className="importancia-habito">📌 Enfoque: {habito.enfoque}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="resultado-diagnostico-bar">
            <div className="info-porcentaje">
              <strong>Nivel de Liderazgo Digital: {porcentaje}%</strong>
              <span>({totalComprobados} de {HABITOS_5TO.length} competencias validadas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentaje}%` }}></div>
            </div>
            {porcentaje === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Nivel Experto Alcanzado! Estás capacitado para elaborar informes de auditoría cibernética comunitarios.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa la revisión de cada pilar para graduarte como mentor de ciberseguridad en el liceo.
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 3: CUESTIONARIO FINAL */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Final de Grado</h2>
          </div>
          <p className="texto-lectura-modulo">
            <strong>Pregunta:</strong> Al realizar una auditoría digital en tu grupo de clase, notas que varios estudiantes usan la misma clave sencilla para su correo. ¿Cuál es la mejor propuesta de mitigación?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Prohibirles el uso de computadoras durante el resto del año.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Organizar una micro-taller explicativo sobre contraseñas seguras y ayudarlos a activar la verificación en dos pasos (2FA).
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Excelente respuesta!</strong> El objetivo pedagógico de la auditoría es educar y fortalecer la cultura de prevención.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default AuditoriaDigital5to;
