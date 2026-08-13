import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface MensajeSimulado {
  id: number;
  remitente: string;
  canal: string;
  asunto: string;
  contenido: string;
  esPhishing: boolean;
  explicacion: string;
}

export interface SenalPhishing {
  id: string;
  texto: string;
  categoria: string;
  ejemplo: string;
}

export interface PreguntaPhishing {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const MENSAJES_1RO: MensajeSimulado[] = [
  {
    id: 1,
    remitente: "Soporte Roblox <premios-gratis99@gmail-soporte.com>",
    canal: "Correo Electrónico",
    asunto: "¡FELICIDADES! Ganaste 10,000 Robux gratis",
    contenido: "Haz clic en este enlace inmediatamente e ingresa tu contraseña de usuario para reclamar tu premio antes de que expire en 2 horas: http://roblox-premios-gratis.xyz",
    esPhishing: true,
    explicacion: "¡Es Phishing! La empresa oficial nunca te pedirá tu contraseña ni usará un correo de Gmail gratuito o un enlace sospechoso (.xyz)."
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
  },
  {
    id: 4,
    remitente: "Banco Nacional <alertas@bancoseguro.com>",
    canal: "Correo Electrónico",
    asunto: "Tu cuenta ha sido bloqueada temporalmente",
    contenido: "Estimado cliente, por tu seguridad debes verificar tu identidad. Ingresa a tu cuenta desde este enlace: http://bancoseguro.verificacion-cuenta.info",
    esPhishing: true,
    explicacion: "¡Es Phishing! Los bancos nunca piden verificación a través de enlaces en correos. Además, el dominio no es el oficial del banco."
  },
  {
    id: 5,
    remitente: "Tu Mejor Amiga <maria.lopez@gmail.com>",
    canal: "Correo Electrónico",
    asunto: "Mira esta foto que te tomé en clase jaja",
    contenido: "¡Hola! Descargué esta foto tuya, mírala aquí: https://drive.google.com/file/abc123... (No pide contraseña, solo te muestra la foto).",
    esPhishing: false,
    explicacion: "Mensaje seguro. Aunque hay que verificar que el enlace sea realmente de Google Drive y que la amiga sea quien dice ser."
  }
];

export const SENALES_PHISHING: SenalPhishing[] = [
  {
    id: 'senal1',
    texto: 'El mensaje transmite urgencia extrema o amenaza con bloquear tu cuenta.',
    categoria: 'Urgencia',
    ejemplo: '“¡Actúa en 5 minutos o perderás tu acceso para siempre!”'
  },
  {
    id: 'senal2',
    texto: 'Te prometen premios increíbles o dinero gratis.',
    categoria: 'Premios',
    ejemplo: '“¡Ganaste un iPhone 15! Solo paga el envío.”'
  },
  {
    id: 'senal3',
    texto: 'El remitente usa una dirección de correo extraña o con errores ortográficos.',
    categoria: 'Remitente',
    ejemplo: 'soporte@banco-nacional-seguridad.info en lugar de banconacional.com'
  },
  {
    id: 'senal4',
    texto: 'Te piden contraseñas, códigos de verificación o datos personales.',
    categoria: 'Datos Sensibles',
    ejemplo: '“Necesito tu código SMS para verificar tu cuenta.”'
  },
  {
    id: 'senal5',
    texto: 'Los enlaces no coinciden con el sitio oficial o usan dominios extraños (.xyz, .info, .top).',
    categoria: 'Enlaces',
    ejemplo: 'http://roblox-premios-gratis.xyz en lugar de roblox.com'
  }
];

export const PREGUNTAS_PHISHING: PreguntaPhishing[] = [
  {
    id: 1,
    pregunta: 'Recibes un mensaje de un número desconocido diciendo que tu mamá tuvo una emergencia y debes enviarles dinero o claves. ¿Qué debes hacer primero?',
    opciones: [
      'Enviar inmediatamente las claves o el dinero por si acaso es verdad.',
      'Mantener la calma y llamar directamente a tu familiar o a tus profesores para verificar antes de responder.',
      'Reenviar el mensaje a todos tus contactos para avisarles.'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Ante cualquier mensaje de urgencia de desconocidos, la regla de oro es verificar por una llamada directa.'
  },
  {
    id: 2,
    pregunta: '¿Cuál de las siguientes direcciones de correo es más sospechosa?',
    opciones: [
      'soporte@roblox.com',
      'premios@roblox-gratis.xyz',
      'info@banconacional.com'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El dominio .xyz y el guion en roblox-gratis indican que no es el sitio oficial de Roblox.'
  },
  {
    id: 3,
    pregunta: 'Un correo te dice que ganaste un premio y debes hacer clic en un enlace para reclamarlo. ¿Qué haces?',
    opciones: [
      'Hago clic rápidamente para no perder el premio.',
      'No hago clic y verifico si es legítimo preguntando a un adulto o buscando en el sitio oficial.',
      'Comparto el enlace con mis amigos para que ellos también ganen.'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los premios demasiado buenos suelen ser phishing. Verifica siempre antes de hacer clic.'
  }
];

// ========== HOOK ==========

export const usePhishing1ro = () => {
  // Simulador de mensajes
  const [respuestasMensajes, setRespuestasMensajes] = useState<Record<number, boolean>>({});
  const evaluarMensaje = (id: number, eleccionUsuario: boolean) => {
    setRespuestasMensajes(prev => ({ ...prev, [id]: eleccionUsuario }));
  };

  // Checklist de señales
  const [senalesComprobadas, setSenalesComprobadas] = useState<Record<string, boolean>>({});
  const toggleSenal = (id: string) => {
    setSenalesComprobadas(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalSenales = SENALES_PHISHING.length;
  const senalesCompletadas = Object.values(senalesComprobadas).filter(Boolean).length;
  const porcentajeSenales = Math.round((senalesCompletadas / totalSenales) * 100);

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
    PREGUNTAS_PHISHING.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_PHISHING.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    mensajes: MENSAJES_1RO,
    respuestasMensajes,
    evaluarMensaje,
    senales: SENALES_PHISHING,
    senalesComprobadas,
    toggleSenal,
    totalSenales,
    senalesCompletadas,
    porcentajeSenales,
    preguntasQuiz: PREGUNTAS_PHISHING,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};