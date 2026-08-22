import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoVideojuegos1ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface OfertaJuego {
  id: string;
  juego: string;
  oferta: string;
  esEstafa: boolean;
  explicacion: string;
}

export interface VideoJuegos1ro {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaVideojuegos1ro {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_VIDEOJUEGOS_1RO: HabitoVideojuegos1ro[] = [
  {
    id: '1',
    texto: 'Sé que no existen generadores de diamantes, robux o monedas gratis. Todos son estafas.',
    categoria: 'Conciencia',
    enfoque: 'Estos sitios buscan robar tu cuenta o infectar tu dispositivo.'
  },
  {
    id: '2',
    texto: 'Nunca ingreso mi usuario y contraseña en páginas que no sean oficiales del juego.',
    categoria: 'Credenciales',
    enfoque: 'Las páginas falsas de login son la principal forma de robo de cuentas.'
  },
  {
    id: '3',
    texto: 'No descargo mods, hacks ni versiones "full" de juegos desde enlaces de YouTube o foros.',
    categoria: 'Descargas',
    enfoque: 'Esos archivos suelen contener malware que roba información.'
  },
  {
    id: '4',
    texto: 'Tengo activada la verificación en dos pasos en mis cuentas de juegos cuando está disponible.',
    categoria: 'Protección',
    enfoque: 'Añade una capa extra de seguridad aunque alguien obtenga tu contraseña.'
  },
  {
    id: '5',
    texto: 'No comparto mi cuenta de juego con amigos ni desconocidos, aunque me ofrezcan skins o diamantes.',
    categoria: 'Cuenta',
    enfoque: 'Compartir credenciales es la vía más rápida para perder tu cuenta.'
  }
];

export const OFERTAS_JUEGO: OfertaJuego[] = [
  {
    id: 'oferta1',
    juego: 'Free Fire',
    oferta: 'Página que promete "10,000 diamantes gratis" si ingresas tu ID y contraseña.',
    esEstafa: true,
    explicacion: 'No existe generador de diamantes gratis. Es phishing: roban tu cuenta y la venden.'
  },
  {
    id: 'oferta2',
    juego: 'Roblox',
    oferta: 'Canal de YouTube ofrece "Robux infinitos" descargando un programa desde un enlace.',
    esEstafa: true,
    explicacion: 'Ese programa es malware. Roblox solo permite comprar Robux en su tienda oficial.'
  },
  {
    id: 'oferta3',
    juego: 'Blood Strike',
    oferta: 'Mensaje dentro del juego de un "admin" que regala skins si envías un código de verificación.',
    esEstafa: true,
    explicacion: 'Los administradores nunca piden códigos. Es un intento de robar tu cuenta.'
  },
  {
    id: 'oferta4',
    juego: 'Clash Royale',
    oferta: 'Sitio web oficial del juego ofrece una promoción por tiempo limitado en la tienda.',
    esEstafa: false,
    explicacion: 'Las promociones oficiales se anuncian dentro de la app o en la web oficial, nunca piden contraseña.'
  },
  {
    id: 'oferta5',
    juego: 'Minecraft',
    oferta: 'Un amigo te regala una cuenta "premium" a cambio de que le prestes la tuya temporalmente.',
    esEstafa: true,
    explicacion: 'Pueden robar tu cuenta y cambiarte la contraseña. Nunca prestes tu cuenta.'
  }
];

export const VIDEOS_VIDEOJUEGOS_1RO: VideoJuegos1ro[] = [
  {
    id: 'v1',
    titulo: 'Cómo roban cuentas de Free Fire',
    url: 'https://www.youtube.com/embed/ejemplo1',
    descripcion: 'Métodos comunes que usan los estafadores para robar cuentas de juegos.'
  },
  {
    id: 'v2',
    titulo: 'La verdad sobre los generadores de Robux',
    url: 'https://www.youtube.com/embed/ejemplo2',
    descripcion: 'Por qué todos los generadores de monedas son estafas y cómo proteger tu cuenta.'
  },
  {
    id: 'v3',
    titulo: 'Cómo activar la verificación en dos pasos en tus juegos',
    url: 'https://www.youtube.com/embed/ejemplo3',
    descripcion: 'Guía para proteger tus cuentas de Free Fire, Roblox, Steam y más.'
  }
];

export const PREGUNTAS_VIDEOJUEGOS_1RO: PreguntaVideojuegos1ro[] = [
  {
    id: 1,
    pregunta: 'Un video de YouTube te promete diamantes gratis para Free Fire si entras a un enlace y pones tu contraseña. ¿Qué haces?',
    opciones: [
      'Entro y pongo mis datos, es gratis',
      'No entro y denuncio el video. Es una estafa para robar cuentas.',
      'Comparto el enlace con mis amigos'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Garena (Free Fire) nunca regala diamantes a través de enlaces externos. Es phishing para robar tu cuenta.'
  },
  {
    id: 2,
    pregunta: '¿Dónde es seguro comprar Robux o diamantes?',
    opciones: [
      'En cualquier página web',
      'Solo en la tienda oficial del juego',
      'En grupos de WhatsApp'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Las compras de monedas deben hacerse dentro de la app oficial o en su página web legítima.'
  },
  {
    id: 3,
    pregunta: 'Un "admin" te pide tu código de verificación para "verificar tu cuenta". ¿Qué haces?',
    opciones: [
      'Se lo doy, es admin',
      'No lo doy y lo reporto. Ningún administrador real pide códigos.',
      'Le pregunto para qué lo necesita'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los códigos de verificación son personales. Compartirlos permite a otros robar tu cuenta.'
  },
  {
    id: 4,
    pregunta: '¿Cuál es la forma más segura de proteger tu cuenta de Roblox?',
    opciones: [
      'Usar una contraseña corta y fácil',
      'Activar la verificación en dos pasos y no compartir tu contraseña',
      'Prestársela a un amigo de confianza'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La verificación en dos pasos añade una capa extra de seguridad. Nunca compartas tu contraseña.'
  }
];

// ========== HOOK ==========

export const useVideojuegos1ro = () => {
  // Simulador de ofertas
  const [respuestasOferta, setRespuestasOferta] = useState<Record<string, boolean>>({});
  const evaluarOferta = (id: string, esEstafa: boolean) => {
    setRespuestasOferta(prev => ({ ...prev, [id]: esEstafa }));
  };

  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_VIDEOJUEGOS_1RO.length;
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
    PREGUNTAS_VIDEOJUEGOS_1RO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_VIDEOJUEGOS_1RO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    ofertas: OFERTAS_JUEGO,
    respuestasOferta,
    evaluarOferta,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_VIDEOJUEGOS_1RO,
    preguntasQuiz: PREGUNTAS_VIDEOJUEGOS_1RO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};