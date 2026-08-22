import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoVideojuegos4to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface MensajeComunidad {
  id: string;
  plataforma: string;
  remitente: string;
  contenido: string;
  esPhishing: boolean;
  explicacion: string;
}

export interface EscenarioComunidad {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoJuegos4to {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaVideojuegos4to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_VIDEOJUEGOS_4TO: HabitoVideojuegos4to[] = [
  {
    id: '1',
    texto: 'Verifico la identidad de los streamers en Twitch, YouTube o Discord (check de verificación, seguidores, historial).',
    categoria: 'Verificación',
    enfoque: 'Los estafadores crean cuentas falsas que imitan a streamers famosos para robar datos.'
  },
  {
    id: '2',
    texto: 'No hago clic en enlaces acortados (bit.ly, tinyurl) enviados por mensajes directos en Discord, aunque digan ser de un sorteo.',
    categoria: 'Enlaces Acortados',
    enfoque: 'Los enlaces acortados ocultan el destino real, que suele ser una página de phishing.'
  },
  {
    id: '3',
    texto: 'Desconfío de sorteos "exclusivos para seguidores" que piden contraseña o datos personales para participar.',
    categoria: 'Sorteos Falsos',
    enfoque: 'Los streamers legítimos nunca piden tu contraseña ni datos bancarios para sorteos.'
  },
  {
    id: '4',
    texto: 'Sé identificar mensajes de bots en Discord que ofrecen "nitro gratis" o "skins exclusivas".',
    categoria: 'Bots Maliciosos',
    enfoque: 'Los bots falsos envían mensajes automáticos para robar credenciales o instalar malware.'
  },
  {
    id: '5',
    texto: 'Uso la verificación en dos pasos en Discord, Twitch y YouTube para proteger mis cuentas de creador/espectador.',
    categoria: 'Protección 2FA',
    enfoque: 'Añade una barrera extra contra el robo de cuentas en plataformas gamer.'
  }
];

export const MENSAJES_COMUNIDAD: MensajeComunidad[] = [
  {
    id: 'msg1',
    plataforma: 'Discord',
    remitente: 'StreamerFamoso#1234 (sin insignia de verificación)',
    contenido: '"¡Felicidades! Ganaste el sorteo de $100 en skins. Para reclamar, entra aquí: http://bit.ly/3xYz9Lm e ingresa tu contraseña de Steam."',
    esPhishing: true,
    explicacion: 'Los sorteos legítimos no piden contraseñas de Steam. El enlace acortado esconde una página falsa de phishing.'
  },
  {
    id: 'msg2',
    plataforma: 'Twitch',
    remitente: 'Canal Oficial de un streamer (con check de verificación)',
    contenido: '"Recuerden que el sorteo de esta noche es solo para suscriptores. El ganador se anunciará en vivo y recibirá un mensaje privado SIN pedir contraseñas."',
    esPhishing: false,
    explicacion: 'Mensaje legítimo: no pide datos sensibles, viene de una cuenta verificada y aclara que el sorteo es transparente.'
  },
  {
    id: 'msg3',
    plataforma: 'Discord',
    remitente: 'Bot "NitroFree" (cuenta recién creada)',
    contenido: '"¡Nitro GRATIS por 3 meses! Solo entra a este enlace y verifica tu cuenta: http://discord-nitro-gratis.info"',
    esPhishing: true,
    explicacion: 'Los bots falsos prometen Nitro gratis para robar tu token de Discord. Discord nunca pide verificación por enlaces externos.'
  },
  {
    id: 'msg4',
    plataforma: 'YouTube',
    remitente: 'Comentario en un video de gameplay',
    contenido: '"Visita mi canal para ganar Robux gratis, solo suscríbete y comenta en el último video."',
    esPhishing: true,
    explicacion: 'Los comentarios que prometen monedas gratis suelen redirigir a páginas de phishing o descargas de malware.'
  },
  {
    id: 'msg5',
    plataforma: 'Twitch',
    remitente: 'Mensaje privado de un usuario desconocido',
    contenido: '"Hola, soy moderador del canal [Streamer]. Ganaste un premio, pero necesito verificar tu cuenta. Pásame el código que te llegará por SMS."',
    esPhishing: true,
    explicacion: 'Ningún moderador legítimo pide códigos de verificación. Es un intento de robar tu cuenta mediante ingeniería social.'
  }
];

export const ESCENARIOS_COMUNIDAD: EscenarioComunidad[] = [
  {
    id: 'esc1',
    titulo: 'Sorteo falso en Discord',
    descripcion: 'Estás en un servidor de Discord de un juego popular. Un usuario llamado "Admin" te escribe por privado: "¡Ganaste 5000 diamantes! Solo dime tu ID y contraseña del juego para enviártelos." ¿Qué haces?',
    opciones: [
      'Le doy mis datos, es admin del servidor',
      'No le doy nada y lo reporto al moderador real del servidor',
      'Le pregunto si de verdad es admin'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los admins reales nunca piden contraseñas. Es una estafa clásica en Discord. Reporta al usuario inmediatamente.'
  },
  {
    id: 'esc2',
    titulo: 'Enlace acortado en Twitch',
    descripcion: 'Un usuario en el chat de Twitch publica: "Mira este clip tuyo jaja: http://tinyurl.com/5x8". ¿Qué haces?',
    opciones: [
      'Hago clic, quiero ver el clip',
      'No hago clic y lo reporto como spam o phishing',
      'Pregunto qué es el enlace'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los enlaces acortados en chats públicos suelen ser phishing o malware. Twitch tiene filtros y opción de reportar.'
  },
  {
    id: 'esc3',
    titulo: 'Suplantación de streamer en YouTube',
    descripcion: 'Encuentras un canal llamado "MrBeast_Games" con solo 50 suscriptores que promete regalar un iPhone si entras a un enlace y pones tu correo y contraseña. ¿Qué haces?',
    opciones: [
      'Entro, quiero el iPhone',
      'No hago clic, reporto el canal como suplantación',
      'Me suscribo para ver más'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los canales falsos imitan a famosos para robar datos. Verifica siempre el nombre exacto y el check de verificación.'
  },
  {
    id: 'esc4',
    titulo: 'Código de verificación por SMS',
    descripcion: 'Un "moderador" de un servidor de Discord te pide que le envíes el código de 6 dígitos que acaba de llegar a tu teléfono para "verificar tu cuenta". ¿Qué haces?',
    opciones: [
      'Se lo envío, es para verificar',
      'No se lo doy. Es un intento de robar mi cuenta.',
      'Le pregunto para qué lo necesita'
    ],
    opcionCorrecta: 1,
    explicacion: 'Ese código permite al atacante restablecer tu contraseña. Nunca compartas códigos de verificación, ni con moderadores.'
  }
];

export const VIDEOS_VIDEOJUEGOS_4TO: VideoJuegos4to[] = [
  {
    id: 'v1',
    titulo: 'Cómo detectar phishing en Discord',
    url: 'https://www.youtube.com/embed/ejemplo4to1',
    descripcion: 'Guía para identificar mensajes falsos, bots maliciosos y enlaces de phishing en Discord.'
  },
  {
    id: 'v2',
    titulo: 'Suplantación de streamers: cómo protegerte',
    url: 'https://www.youtube.com/embed/ejemplo4to2',
    descripcion: 'Cómo verificar cuentas oficiales y evitar ser víctima de canales falsos en Twitch y YouTube.'
  },
  {
    id: 'v3',
    titulo: 'Sorteos falsos en comunidades gamer',
    url: 'https://www.youtube.com/embed/ejemplo4to3',
    descripcion: 'Señales de alerta para identificar sorteos fraudulentos en redes y servidores.'
  }
];

export const PREGUNTAS_VIDEOJUEGOS_4TO: PreguntaVideojuegos4to[] = [
  {
    id: 1,
    pregunta: '¿Cuál es una señal clara de que un sorteo en Discord es falso?',
    opciones: [
      'Pide tu contraseña o datos personales para participar',
      'Se anuncia en vivo por el streamer',
      'Tiene un canal dedicado al sorteo'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Ningún sorteo legítimo pide contraseñas o datos bancarios. Esa es la bandera roja principal.'
  },
  {
    id: 2,
    pregunta: '¿Por qué los enlaces acortados son peligrosos en chats de juegos?',
    opciones: [
      'Porque son más lentos',
      'Porque ocultan el destino real, que puede ser una página de phishing',
      'Porque gastan datos móviles'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los acortadores (bit.ly, tinyurl) esconden la URL real. No sabes si te lleva a un sitio malicioso.'
  },
  {
    id: 3,
    pregunta: '¿Cómo verificar que un canal de Twitch o YouTube es oficial?',
    opciones: [
      'Mirando el número de comentarios',
      'Buscando el check de verificación y comparando con el enlace oficial del streamer',
      'Por la cantidad de videos subidos'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Las cuentas verificadas tienen un badge. Además, revisa que el nombre coincida exactamente con el oficial.'
  },
  {
    id: 4,
    pregunta: '¿Qué debes hacer si recibes un mensaje privado sospechoso en Discord?',
    opciones: [
      'Responder para saber más',
      'No responder, bloquear al usuario y reportarlo',
      'Reenviarlo a tus amigos'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Bloquear y reportar es la acción correcta. No interactúes con el remitente ni difundas el mensaje.'
  }
];

// ========== HOOK ==========

export const useVideojuegos4to = () => {
  // Laboratorio de mensajes de comunidad
  const [respuestasMensaje, setRespuestasMensaje] = useState<Record<string, boolean>>({});
  const evaluarMensaje = (id: string, esPhishing: boolean) => {
    setRespuestasMensaje(prev => ({ ...prev, [id]: esPhishing }));
  };

  // Escenarios de comunidad
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_COMUNIDAD.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_VIDEOJUEGOS_4TO.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

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
    PREGUNTAS_VIDEOJUEGOS_4TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_VIDEOJUEGOS_4TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    mensajes: MENSAJES_COMUNIDAD,
    respuestasMensaje,
    evaluarMensaje,
    escenarios: ESCENARIOS_COMUNIDAD,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_VIDEOJUEGOS_4TO,
    preguntasQuiz: PREGUNTAS_VIDEOJUEGOS_4TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};