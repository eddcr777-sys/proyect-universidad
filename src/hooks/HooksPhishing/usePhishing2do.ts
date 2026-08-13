import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface MensajeSimulado2do {
  id: number;
  remitente: string;
  canal: string;
  asunto: string;
  contenido: string;
  esPhishing: boolean;
  explicacion: string;
}

export interface SenalAvanzadaPhishing {
  id: string;
  texto: string;
  categoria: string;
  ejemplo: string;
}

export interface PreguntaPhishing2do {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const MENSAJES_2DO: MensajeSimulado2do[] = [
  {
    id: 1,
    remitente: "Instagram <security@instagram-support-verify.com>",
    canal: "Correo Electrónico",
    asunto: "Tu cuenta será eliminada en 24 horas",
    contenido: "Hemos detectado actividad sospechosa en tu cuenta. Para evitar la eliminación permanente, verifica tu identidad ingresando tu usuario y contraseña en este enlace: http://instagram-verificacion-cuenta.info",
    esPhishing: true,
    explicacion: "Phishing clásico de suplantación de marca. Instagram nunca pide credenciales por correo y el dominio es falso (.info). La verificación real se hace dentro de la app."
  },
  {
    id: 2,
    remitente: "Mensaje directo de @tuamiga_maria (Instagram)",
    canal: "Instagram Direct",
    asunto: "Mira este video tuyo que encontré 😱",
    contenido: "jajaja no puedo creer que estés en este video! entra aquí: http://bit.ly/3xYz9Lm",
    esPhishing: true,
    explicacion: "Es phishing. Los enlaces acortados (bit.ly) ocultan el destino real. Además, la amiga pudo ser hackeada. Nunca hagas clic sin verificar."
  },
  {
    id: 3,
    remitente: "Equipo de WhatsApp <actualizacion@whatsapp.com>",
    canal: "Correo Electrónico",
    asunto: "Tu versión de WhatsApp caducó",
    contenido: "Tu cuenta será bloqueada si no actualizas a la última versión. Descarga la actualización desde este enlace: http://whatsapp-actualizacion-gratis.top",
    esPhishing: true,
    explicacion: "Es falso. WhatsApp se actualiza automáticamente desde Google Play o App Store. Nunca uses enlaces externos."
  },
  {
    id: 4,
    remitente: "Prof. Ana Rodríguez <ana.rodriguez@liceo.edu.ve>",
    canal: "Correo Institucional",
    asunto: "Material de estudio para el examen",
    contenido: "Estimados estudiantes, adjunto encontrarán la guía de estudio para el examen del próximo lunes. Saludos.",
    esPhishing: false,
    explicacion: "Mensaje seguro. Proviene del dominio institucional del liceo y no solicita datos personales ni enlaces externos sospechosos."
  },
  {
    id: 5,
    remitente: "+58 414 555-1234 (WhatsApp)",
    canal: "WhatsApp",
    asunto: "Sorteo de un iPhone 15 en tu liceo",
    contenido: "¡Última oportunidad! Solo para estudiantes del Liceo Antonio Lemus Pérez. Entra a este enlace y deja tus datos para participar: http://sorteo-liceo-premios.net",
    esPhishing: true,
    explicacion: "Phishing. No hay sorteos legítimos que pidan datos personales a través de enlaces acortados o dominios extraños."
  }
];

export const SENALES_AVANZADAS: SenalAvanzadaPhishing[] = [
  {
    id: 'senal1',
    texto: 'Verifico siempre que la URL sea la oficial de la red social o servicio.',
    categoria: 'URL',
    ejemplo: 'instagram.com, whatsapp.com, roblox.com (sin dominios .info, .xyz, .top)'
  },
  {
    id: 'senal2',
    texto: 'Desconfío de los enlaces acortados aunque vengan de un contacto conocido.',
    categoria: 'Enlaces Acortados',
    ejemplo: 'bit.ly, tinyurl.com pueden ocultar destinos maliciosos'
  },
  {
    id: 'senal3',
    texto: 'Nunca comparto códigos de verificación por SMS o WhatsApp.',
    categoria: 'Códigos de Verificación',
    ejemplo: 'Un amigo te pide que le reenvíes el código que te llegó por SMS'
  },
  {
    id: 'senal4',
    texto: 'Reviso que la cuenta que me escribe sea la oficial (verificada con check azul) y no un perfil falso.',
    categoria: 'Perfiles Falsos',
    ejemplo: '@instagram_help_official en lugar de @instagram'
  },
  {
    id: 'senal5',
    texto: 'Busco errores ortográficos o frases extrañas en el mensaje.',
    categoria: 'Redacción',
    ejemplo: '“Tu cuenta a sido bloqueado” (debería ser “ha sido”)'
  }
];

export const PREGUNTAS_PHISHING_2DO: PreguntaPhishing2do[] = [
  {
    id: 1,
    pregunta: 'Recibes un mensaje directo de un amigo en Instagram con un enlace acortado y un texto como "mira esto, sales tú". ¿Qué haces?',
    opciones: [
      'Hago clic de inmediato para ver de qué se trata',
      'Pregunto a mi amigo por otra vía si realmente me envió ese enlace',
      'Reenvío el mensaje a mis otros amigos para que lo vean'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los enlaces acortados pueden ocultar destinos maliciosos. Verifica con tu amigo por otra vía antes de hacer clic.'
  },
  {
    id: 2,
    pregunta: '¿Cuál es la señal más clara de que un correo es phishing?',
    opciones: [
      'Contiene tu nombre completo',
      'Te pide que ingreses tu contraseña en un enlace externo',
      'Viene de una dirección de correo conocida'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Las empresas legítimas nunca piden contraseñas por enlaces en correos. Esa es la principal bandera roja.'
  },
  {
    id: 3,
    pregunta: 'Un mensaje de WhatsApp te ofrece un sorteo exclusivo para tu liceo. ¿Qué haces?',
    opciones: [
      'Participo porque es solo para estudiantes',
      'No hago clic y consulto con un profesor o en la página oficial del liceo',
      'Comparto el enlace con mi grupo de clase para que todos participen'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los sorteos falsos son una táctica común de phishing. Verifica siempre con fuentes oficiales.'
  }
];

// ========== HOOK ==========

export const usePhishing2do = () => {
  // Simulador de mensajes
  const [respuestasMensajes, setRespuestasMensajes] = useState<Record<number, boolean>>({});
  const evaluarMensaje = (id: number, eleccionUsuario: boolean) => {
    setRespuestasMensajes(prev => ({ ...prev, [id]: eleccionUsuario }));
  };

  // Checklist de señales avanzadas
  const [senalesComprobadas, setSenalesComprobadas] = useState<Record<string, boolean>>({});
  const toggleSenal = (id: string) => {
    setSenalesComprobadas(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalSenales = SENALES_AVANZADAS.length;
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
    PREGUNTAS_PHISHING_2DO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_PHISHING_2DO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    mensajes: MENSAJES_2DO,
    respuestasMensajes,
    evaluarMensaje,
    senales: SENALES_AVANZADAS,
    senalesComprobadas,
    toggleSenal,
    totalSenales,
    senalesCompletadas,
    porcentajeSenales,
    preguntasQuiz: PREGUNTAS_PHISHING_2DO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};