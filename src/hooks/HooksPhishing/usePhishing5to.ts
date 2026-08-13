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

export interface CampañaSimulada {
  id: number;
  nombre: string;
  descripcion: string;
  metrica: string;
  esEfectiva: boolean;
  explicacion: string;
}

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

export const CAMPAÑAS_SIMULADAS: CampañaSimulada[] = [
  {
    id: 1,
    nombre: "Campaña de simulación de phishing básica",
    descripcion: "Se envía un correo falso a los estudiantes con un enlace a una página de inicio de sesión falsa. Se mide cuántos hicieron clic.",
    metrica: "Tasa de clics: 35%",
    esEfectiva: false,
    explicacion: "Una tasa de clics del 35% es ALTA e indica que muchos estudiantes caen en el engaño. Se necesita más concientización."
  },
  {
    id: 2,
    nombre: "Taller de seguridad + simulación controlada",
    descripcion: "Después de un taller sobre phishing, se repite la simulación. Solo el 8% de los estudiantes hizo clic.",
    metrica: "Tasa de clics: 8%",
    esEfectiva: true,
    explicacion: "La reducción del 35% al 8% demuestra que la concientización funcionó. Una tasa baja indica buena preparación."
  },
  {
    id: 3,
    nombre: "Simulación sin retroalimentación",
    descripcion: "Se envía un correo falso y no se informa a los estudiantes del resultado ni se ofrece capacitación.",
    metrica: "Tasa de clics: 28%",
    esEfectiva: false,
    explicacion: "Aunque la tasa es menor, no se aprovecha la oportunidad para educar. La simulación sin seguimiento no mejora la cultura de seguridad."
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

  // Evaluación de campañas simuladas
  const [respuestasCampaña, setRespuestasCampaña] = useState<Record<number, boolean>>({});
  const evaluarCampaña = (id: number, esEfectiva: boolean) => {
    setRespuestasCampaña(prev => ({ ...prev, [id]: esEfectiva }));
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