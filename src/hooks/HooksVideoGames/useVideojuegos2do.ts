import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoVideojuegos2do {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface EscenarioCuentaJuego {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoJuegos2do {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaVideojuegos2do {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_VIDEOJUEGOS_2DO: HabitoVideojuegos2do[] = [
  {
    id: '1',
    texto: 'Tengo activada la verificación en dos pasos (2FA) en Free Fire, Roblox, Steam y Epic Games.',
    categoria: 'Protección 2FA',
    enfoque: 'Añade una barrera extra: aunque roben tu contraseña, no podrán entrar sin el código.'
  },
  {
    id: '2',
    texto: 'Uso una aplicación autenticadora (Google Authenticator, Authy) en lugar de SMS para los códigos.',
    categoria: 'Método Seguro',
    enfoque: 'Los códigos por SMS pueden ser interceptados; la app genera códigos sin depender de la red.'
  },
  {
    id: '3',
    texto: 'Tengo vinculado un correo electrónico y un número de teléfono real a mis cuentas de juegos.',
    categoria: 'Recuperación',
    enfoque: 'Son esenciales para recuperar la cuenta si pierdes el acceso.'
  },
  {
    id: '4',
    texto: 'He guardado los códigos de recuperación de mis juegos en un lugar seguro.',
    categoria: 'Códigos de Respaldo',
    enfoque: 'Si pierdes tu teléfono, esos códigos son la única vía para entrar a tu cuenta.'
  },
  {
    id: '5',
    texto: 'Sé diferenciar los correos oficiales de los falsos de soporte de juegos.',
    categoria: 'Anti-Phishing',
    enfoque: 'Los estafadores envían correos falsos para robar credenciales de jugadores.'
  }
];

export const ESCENARIOS_CUENTA_JUEGO: EscenarioCuentaJuego[] = [
  {
    id: 'esc1',
    titulo: 'Correo falso de soporte',
    descripcion: 'Recibes un correo de "soporte@roblox-verificacion.com" que dice que tu cuenta será suspendida si no verificas tu contraseña en un enlace. ¿Qué haces?',
    opciones: [
      'Entro al enlace y pongo mi contraseña',
      'No hago clic, ignoro el correo y lo reporto como phishing',
      'Reenvío el correo a mis amigos'
    ],
    opcionCorrecta: 1,
    explicacion: 'Roblox nunca pide tu contraseña por correo. El dominio es falso. Nunca entres a enlaces de correos sospechosos.'
  },
  {
    id: 'esc2',
    titulo: 'Activando 2FA en Free Fire',
    descripcion: 'Garena ofrece activar verificación en dos pasos. ¿Qué método es más seguro?',
    opciones: [
      'Código por SMS',
      'Aplicación autenticadora (Google Authenticator/Authy)',
      'Correo electrónico'
    ],
    opcionCorrecta: 1,
    explicacion: 'Las apps autenticadoras generan códigos locales, sin depender de la red. Son más seguras que SMS o correo.'
  },
  {
    id: 'esc3',
    titulo: 'Perdiste tu teléfono con 2FA',
    descripcion: 'Tu teléfono con la app autenticadora se dañó y no puedes generar códigos para entrar a Steam. ¿Qué haces?',
    opciones: [
      'Crear una cuenta nueva',
      'Usar los códigos de recuperación que guardaste previamente',
      'Esperar a que Steam te llame'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los códigos de respaldo son la solución. Si no los guardaste, deberás contactar al soporte oficial con pruebas de propiedad.'
  },
  {
    id: 'esc4',
    titulo: 'Vincular correo a tu cuenta',
    descripcion: 'Quieres proteger tu cuenta de Blood Strike. ¿Qué correo deberías vincular?',
    opciones: [
      'Un correo temporal desechable',
      'Un correo personal seguro con contraseña fuerte y 2FA activo',
      'No vincular correo'
    ],
    opcionCorrecta: 1,
    explicacion: 'El correo de recuperación debe ser tuyo, seguro y con 2FA. Si usas uno desechable, perderás la cuenta si hay problemas.'
  }
];

export const VIDEOS_VIDEOJUEGOS_2DO: VideoJuegos2do[] = [
  {
    id: 'v1',
    titulo: 'Cómo activar 2FA en Roblox y Free Fire',
    url: 'https://www.youtube.com/embed/ejemplo2do1',
    descripcion: 'Guía paso a paso para activar la verificación en dos pasos en tus juegos favoritos.'
  },
  {
    id: 'v2',
    titulo: 'Cómo recuperar una cuenta hackeada',
    url: 'https://www.youtube.com/embed/ejemplo2do2',
    descripcion: 'Pasos para recuperar tu cuenta si te la robaron: soporte oficial, códigos de respaldo y evidencia.'
  },
  {
    id: 'v3',
    titulo: 'Correos falsos de soporte: identifícalos',
    url: 'https://www.youtube.com/embed/ejemplo2do3',
    descripcion: 'Señales para detectar correos de phishing que suplantan a Roblox, Steam y otras plataformas.'
  }
];

export const PREGUNTAS_VIDEOJUEGOS_2DO: PreguntaVideojuegos2do[] = [
  {
    id: 1,
    pregunta: '¿Cuál es el método más seguro para recibir códigos de verificación en tus juegos?',
    opciones: [
      'SMS',
      'Aplicación autenticadora',
      'Correo electrónico'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Las apps autenticadoras generan códigos sin necesidad de red y no pueden ser interceptados por SMS.'
  },
  {
    id: 2,
    pregunta: '¿Por qué es importante vincular un correo y un teléfono reales a tu cuenta de juego?',
    opciones: [
      'Para recibir publicidad',
      'Para poder recuperar la cuenta si pierdes el acceso',
      'No es importante'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Esos datos son esenciales para que el soporte oficial verifique que la cuenta es tuya en caso de robo.'
  },
  {
    id: 3,
    pregunta: 'Un correo dice ser de Roblox y te pide que verifiques tu contraseña en un enlace. ¿Qué haces?',
    opciones: [
      'Entro y verifico',
      'No hago clic y lo reporto como phishing',
      'Respondo pidiendo más información'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Es phishing. Roblox y otras plataformas nunca piden contraseñas por correo.'
  },
  {
    id: 4,
    pregunta: '¿Qué son los códigos de recuperación en la verificación en dos pasos?',
    opciones: [
      'Códigos desechables que te permiten entrar si pierdes tu teléfono',
      'Una segunda contraseña para compartir',
      'Códigos para regalar a amigos'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Son códigos de un solo uso que debes guardar en un lugar seguro. Te salvan si pierdes el dispositivo con 2FA.'
  }
];

// ========== HOOK ==========

export const useVideojuegos2do = () => {
  // Escenarios de cuentas
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_CUENTA_JUEGO.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_VIDEOJUEGOS_2DO.length;
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
    PREGUNTAS_VIDEOJUEGOS_2DO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_VIDEOJUEGOS_2DO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    escenarios: ESCENARIOS_CUENTA_JUEGO,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_VIDEOJUEGOS_2DO,
    preguntasQuiz: PREGUNTAS_VIDEOJUEGOS_2DO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};