import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface EscenarioIngenieriaSocial {
  id: number;
  titulo: string;
  descripcion: string;
  tecnica: string;
  esAtaque: boolean;
  explicacion: string;
}

export interface CasoAuditoriaCampaña {
  id: number;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  tasaClics: number;
  nivelRiesgo: 'critico' | 'bajo' | 'advertencia';
  etiquetaRiesgo: string;
  preguntaAuditor: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// Alias de retrocompatibilidad
export type CampañaSimulada = CasoAuditoriaCampaña;

export interface PreguntaPhishing5to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const ESCENARIOS_INGENIERIA: EscenarioIngenieriaSocial[] = [
  {
    id: 1,
    titulo: "Llamada del 'Departamento de Soporte'",
    descripcion: "Un empleado recibe una llamada de alguien que dice ser del soporte técnico interno y le pide su contraseña para 'actualizar el sistema'.",
    tecnica: "Vishing + Pretexting",
    esAtaque: true,
    explicacion: "Es un ataque de ingeniería social. El pretexto es una falsa actualización; el objetivo es obtener credenciales. El procedimiento correcto es colgar y reportar al área de TI real."
  },
  {
    id: 2,
    titulo: "USB encontrada en el estacionamiento",
    descripcion: "Un estudiante encuentra una memoria USB en el suelo del liceo y la conecta a una computadora para ver su contenido.",
    tecnica: "Baiting (cebo físico)",
    esAtaque: true,
    explicacion: "Es baiting. Los dispositivos extraíbles pueden contener malware que se ejecuta automáticamente. Nunca conectes dispositivos no confiables."
  },
  {
    id: 3,
    titulo: "Encuesta anónima sobre hábitos de estudio",
    descripcion: "Una profesora pide a sus alumnos llenar una encuesta en línea sobre sus hábitos de estudio, sin solicitar datos personales ni credenciales.",
    tecnica: "No aplica",
    esAtaque: false,
    explicacion: "No es un ataque. Es una actividad legítima, siempre que la encuesta no solicite información sensible y se realice en un entorno controlado."
  },
  {
    id: 4,
    titulo: "Correo del 'director' pidiendo tarjetas de regalo",
    descripcion: "El personal administrativo recibe un correo que parece del director, solicitando comprar tarjetas de regalo para un evento sorpresa.",
    tecnica: "Spear Phishing + Urgencia",
    esAtaque: true,
    explicacion: "Es un spear phishing dirigido. Se suplanta una figura de autoridad y se explota la urgencia para obtener dinero o información."
  }
];

export const CAMPAÑAS_SIMULADAS: CasoAuditoriaCampaña[] = [
  {
    id: 1,
    nombre: "Campaña Inicial: Medición de Susceptibilidad",
    subtitulo: "Prueba de Línea Base sin Capacitación Previa",
    descripcion: "Se envió un correo señuelo simulando ser el portal de calificaciones del liceo para medir cuántos estudiantes caían en la trampa antes de recibir instrucción. El 35% de los alumnos hizo clic e ingresó sus contraseñas en el sitio falso.",
    tasaClics: 35,
    nivelRiesgo: 'critico',
    etiquetaRiesgo: '35% de clics — Nivel de Riesgo Crítico',
    preguntaAuditor: "Como auditor de ciberseguridad, ¿cuál es el plan de acción correcto que debes aplicar tras este resultado?",
    opciones: [
      "Sancionar y suspender temporalmente las cuentas de los estudiantes que cayeron en el engaño.",
      "El liceo tiene alta vulnerabilidad: dictar taller práctico obligatorio de detección de phishing y activar verificación en dos pasos (2FA).",
      "Dar por concluida la auditoría porque el correo falso ya cumplió la meta de engañar a los alumnos."
    ],
    respuestaCorrecta: 1,
    explicacion: "¡Excelente decisión! En ciberseguridad, las pruebas iniciales identifican debilidades para educar a la comunidad y blindar el sistema, nunca para castigar ni culpar al usuario."
  },
  {
    id: 2,
    nombre: "Campaña de Control: Evaluación Post-Taller",
    subtitulo: "Medición de Impacto tras Capacitación Práctica",
    descripcion: "Dos semanas después de realizar talleres prácticos sobre cómo inspeccionar dominios y verificar remitentes, se repitió la simulación. La tasa de clics disminuyó radicalmente al 8% y más del 70% de los estudiantes reportó el correo sospechoso al profesor.",
    tasaClics: 8,
    nivelRiesgo: 'bajo',
    etiquetaRiesgo: '8% de clics — Excelente Reducción del Riesgo',
    preguntaAuditor: "¿Qué conclusión profesional debe reflejar tu informe de auditoría ante la directiva del liceo?",
    opciones: [
      "El programa fue exitoso: redujo el riesgo en más de un 75% y demostró que los estudiantes adquirieron hábitos activos de defensa.",
      "El programa fracasó porque cualquier porcentaje superior al 0% indica que el sistema sigue totalmente indefenso.",
      "Como la tasa es baja, se deben retirar los filtros automáticos de spam para no saturar los servidores."
    ],
    respuestaCorrecta: 0,
    explicacion: "¡Exacto! El factor humano nunca llega a un 0% de error absoluto, pero reducir los clics del 35% al 8% y generar reportes activos demuestra un éxito rotundo en la concientización."
  },
  {
    id: 3,
    nombre: "Simulación Encubierta sin Retroalimentación",
    subtitulo: "Auditoría sin Enfoque Pedagógico",
    descripcion: "La administración envió correos trampa donde el 28% de los alumnos cayó, pero las autoridades decidieron no compartir los resultados ni brindarles ninguna capacitación o explicación sobre el simulacro.",
    tasaClics: 28,
    nivelRiesgo: 'advertencia',
    etiquetaRiesgo: '28% de clics — Mala Práctica Metodológica',
    preguntaAuditor: "¿Por qué esta práctica es calificada como ineficaz y contraria a la ética en ciberseguridad?",
    opciones: [
      "Porque realizar pruebas sin retroalimentación solo espía y genera desconfianza, sin enseñar a los alumnos cómo reconocer el peligro real.",
      "Porque las simulaciones de correo están estrictamente prohibidas por leyes internacionales en todos los colegios.",
      "Porque una tasa del 28% es la meta ideal que toda institución educativa busca alcanzar."
    ],
    respuestaCorrecta: 0,
    explicacion: "¡Muy bien analizado! El phishing ético tiene como único fin educar. Si no hay retroalimentación pedagógica, los alumnos siguen siendo vulnerables ante atacantes reales y se pierde la confianza institucional."
  }
];

export const PREGUNTAS_PHISHING_5TO: PreguntaPhishing5to[] = [
  {
    id: 1,
    pregunta: "¿Cuál es el objetivo principal de una campaña de simulación de phishing autorizada?",
    opciones: [
      "Castigar a los empleados que caen",
      "Medir la susceptibilidad y educar para reducir el riesgo",
      "Demostrar que la seguridad es imposible"
    ],
    respuestaCorrecta: 1,
    explicacion: "Las campañas de simulación buscan medir el nivel de concientización y reforzar la educación, no castigar."
  },
  {
    id: 2,
    pregunta: "¿Qué técnica de ingeniería social utiliza un dispositivo USB infectado dejado en un lugar público?",
    opciones: [
      "Baiting",
      "Phishing por correo",
      "Vishing"
    ],
    respuestaCorrecta: 0,
    explicacion: "Baiting usa cebos físicos (USB, CD) para que la víctima los conecte y ejecute malware."
  },
  {
    id: 3,
    pregunta: "Al encontrar un incidente de phishing en tu institución, ¿qué debes hacer primero?",
    opciones: [
      "Publicarlo en redes sociales para alertar",
      "Reportarlo al encargado de seguridad o profesor",
      "Ignorarlo"
    ],
    respuestaCorrecta: 1,
    explicacion: "El reporte interno inmediato permite contener el incidente y alertar a otros sin exponer información sensible."
  },
  {
    id: 4,
    pregunta: "¿Qué significa 'pretexting'?",
    opciones: [
      "Crear una historia falsa para ganar confianza y obtener información",
      "Enviar correos masivos",
      "Usar malware en USB"
    ],
    respuestaCorrecta: 0,
    explicacion: "Pretexting es inventar un escenario creíble (pretexto) para manipular a la víctima y sacarle datos."
  }
];

// ========== HOOK ==========

export const usePhishing5to = () => {
  // Simulador de escenarios de ingeniería social
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<number, boolean>>({});
  const evaluarEscenario = (id: number, esAtaque: boolean) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: esAtaque }));
  };

  // Auditoría y evaluación de campañas simuladas
  const [respuestasCampaña, setRespuestasCampaña] = useState<Record<number, number>>({});
  const evaluarCampaña = (id: number, opcionIdx: number) => {
    setRespuestasCampaña(prev => ({ ...prev, [id]: opcionIdx }));
  };

  // Quiz
  const [respuestasQuiz, setRespuestasQuiz] = useState<Record<number, number>>({});
  const [quizEnviado, setQuizEnviado] = useState<boolean>(false);
  const responderPreguntaQuiz = (preguntaId: number, opcionIndex: number) => {
    setRespuestasQuiz(prev => ({ ...prev, [preguntaId]: opcionIndex }));
  };
  const enviarQuiz = () => setQuizEnviado(true);
  const puntajeQuiz = useMemo(() => {
    if (!quizEnviado) return null;
    let correctas = 0;
    PREGUNTAS_PHISHING_5TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_PHISHING_5TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    escenarios: ESCENARIOS_INGENIERIA,
    respuestasEscenario,
    evaluarEscenario,
    campañas: CAMPAÑAS_SIMULADAS,
    respuestasCampaña,
    evaluarCampaña,
    preguntasQuiz: PREGUNTAS_PHISHING_5TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};