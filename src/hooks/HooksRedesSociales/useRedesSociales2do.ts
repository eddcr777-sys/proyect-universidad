import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoRedes2do {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface PerfilSospechoso {
  id: string;
  nombre: string;
  descripcion: string;
  esFalso: boolean;
  explicacion: string;
}

export interface EscenarioRedes2do {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoRedes2do {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaRedes2do {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_REDES_2DO: HabitoRedes2do[] = [
  {
    id: '1',
    texto: 'Antes de aceptar una solicitud de seguimiento, reviso el perfil: fotos, publicaciones, seguidores y fecha de creación.',
    categoria: 'Verificación',
    enfoque: 'Los perfiles falsos suelen tener pocas fotos, pocos amigos y ser de creación reciente.'
  },
  {
    id: '2',
    texto: 'Sé identificar una cuenta verificada (badge azul) y diferencio cuentas oficiales de imitaciones.',
    categoria: 'Cuentas Oficiales',
    enfoque: 'Las celebridades y marcas tienen una insignia de verificación. Cuidado con cuentas parecidas.'
  },
  {
    id: '3',
    texto: 'No comparto mis contraseñas ni códigos de verificación con nadie, ni siquiera con mi mejor amigo.',
    categoria: 'Suplantación',
    enfoque: 'Compartir credenciales es la vía más rápida para que suplanten tu identidad.'
  },
  {
    id: '4',
    texto: 'Si alguien me suplanta en una red social, sé cómo denunciarlo en la plataforma.',
    categoria: 'Denuncia',
    enfoque: 'Las plataformas tienen opciones para reportar perfiles falsos. Es tu derecho usarlas.'
  },
  {
    id: '5',
    texto: 'He configurado alertas para detectar si alguien crea un perfil con mi nombre o fotos.',
    categoria: 'Monitoreo',
    enfoque: 'Buscar tu nombre en redes periódicamente ayuda a detectar suplantación a tiempo.'
  }
];

export const PERFILES_SOSPECHOSOS: PerfilSospechoso[] = [
  {
    id: 'perfil1',
    nombre: '@carlos_perez_123',
    descripcion: 'Perfil creado hace 2 días, sin foto de perfil, sigue a 1000 personas y tiene 2 seguidores. Te envió un mensaje pidiendo dinero.',
    esFalso: true,
    explicacion: 'Señales claras de perfil falso: creación reciente, desbalance seguidores/siguiendo y mensajes solicitando dinero.'
  },
  {
    id: 'perfil2',
    nombre: '@maria_lopez_oficial',
    descripcion: 'Cuenta de la alcaldía del municipio, con foto real, más de 5000 seguidores y publicaciones regulares desde hace 3 años.',
    esFalso: false,
    explicacion: 'Una cuenta con historial, publicaciones consistentes y muchos seguidores suele ser legítima, aunque siempre hay que verificar el badge.'
  },
  {
    id: 'perfil3',
    nombre: '@tuamiga_maria',
    descripcion: 'Tu amiga real, pero su perfil fue reportado por enviar enlaces extraños a todos sus contactos.',
    esFalso: true,
    explicacion: 'Aunque el perfil es de tu amiga, fue comprometido (hackeado). Los atacantes usan cuentas robadas para estafar a los contactos.'
  },
  {
    id: 'perfil4',
    nombre: '@tienda_ropa_ve',
    descripcion: 'Tienda online venezolana, creada hace 6 meses, tiene 300 seguidores, publica fotos de productos con precios y responde preguntas.',
    esFalso: false,
    explicacion: 'Una tienda con actividad regular, interacción con clientes y fotos reales es probablemente legítima. Siempre verifica referencias.'
  }
];

export const ESCENARIOS_REDES_2DO: EscenarioRedes2do[] = [
  {
    id: 'esc1',
    titulo: 'Tu "amiga" te pide un código',
    descripcion: 'Recibes un mensaje de tu amiga por Instagram: "Hola, estoy en un problema, me llega un código a tu número, me lo pasas por favor?"',
    opciones: [
      'Se lo paso, es mi amiga',
      'No lo comparto y la llamo por teléfono para verificar si realmente es ella',
      'Le pregunto para qué lo necesita'
    ],
    opcionCorrecta: 1,
    explicacion: 'Es la clásica táctica de suplantación. Si su cuenta fue hackeada, el atacante intentará secuestrar también tu cuenta de WhatsApp usando ese código.'
  },
  {
    id: 'esc2',
    titulo: 'Cuenta falsa de tu artista favorito',
    descripcion: 'Un usuario con el nombre de tu cantante favorito te envía un mensaje privado: "¡Hola, soy yo! Ganaste un meet & greet, solo envía $10 para reservar tu cupo."',
    opciones: [
      'Le envío el dinero, es mi ídolo',
      'Verifico si la cuenta tiene el badge azul y si es la oficial. Luego denuncio si es falsa.',
      'Comparto la noticia con mis amigos'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los famosos nunca piden dinero por mensajes privados. Siempre verifica el badge y denuncia las cuentas falsas.'
  },
  {
    id: 'esc3',
    titulo: 'Perfil con tus fotos',
    descripcion: 'Descubres que alguien creó una cuenta en TikTok usando tus fotos. ¿Qué haces?',
    opciones: [
      'Lo ignoro, no es gran cosa',
      'Denuncio el perfil en la plataforma, aviso a mis contactos y guardo evidencia',
      'Creo una cuenta falsa para vengarme'
    ],
    opcionCorrecta: 1,
    explicacion: 'La suplantación de identidad es grave. Debes denunciar inmediatamente, informar a tus amigos y conservar capturas como evidencia.'
  }
];

export const VIDEOS_REDES_2DO: VideoRedes2do[] = [
  {
    id: 'v1',
    titulo: 'Cómo identificar y denunciar perfiles falsos',
    url: 'https://www.youtube.com/embed/8jK5Q6Z3y5A',
    descripcion: 'Guía paso a paso para detectar cuentas falsas en redes sociales y reportarlas correctamente.'
  },
  {
    id: 'v2',
    titulo: 'Suplantación de identidad: cómo protegerte',
    url: 'https://www.youtube.com/embed/5X0nC6C9S1E',
    descripcion: 'Qué hacer si alguien está usando tu nombre y fotos en internet.'
  },
  {
    id: 'v3',
    titulo: 'El peligro de compartir códigos de verificación',
    url: 'https://www.youtube.com/embed/CPbvxxslDTU',
    descripcion: 'Por qué nunca debes compartir un código que te llega por SMS, ni siquiera con amigos.'
  }
];

export const PREGUNTAS_REDES_2DO: PreguntaRedes2do[] = [
  {
    id: 1,
    pregunta: '¿Cuál de estas es una señal clara de un perfil falso?',
    opciones: [
      'Tiene muchas fotos y amigos',
      'Fue creado recientemente, tiene pocos seguidores y sigue a miles de personas',
      'Publica regularmente desde hace años'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los perfiles falsos suelen ser recién creados, con desbalance entre seguidores y seguidos, y poca actividad coherente.'
  },
  {
    id: 2,
    pregunta: '¿Qué es la verificación (badge azul) en redes sociales?',
    opciones: [
      'Un adorno para que el perfil se vea bonito',
      'Una insignia que confirma que la cuenta pertenece a la persona o marca real',
      'Un tipo de suscripción de pago'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El badge azul verifica la autenticidad de la cuenta. Es una herramienta para distinguir oficiales de imitaciones.'
  },
  {
    id: 3,
    pregunta: 'Si tu cuenta es hackeada y usada para pedir dinero a tus contactos, ¿qué debes hacer primero?',
    opciones: [
      'Esperar a que el hacker se aburra',
      'Intentar recuperar la cuenta con la opción de la plataforma y avisar a tus contactos por otra vía',
      'Crear una cuenta nueva'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La acción inmediata es recuperar la cuenta mediante los mecanismos oficiales y alertar a tus contactos para que no caigan en la estafa.'
  },
  {
    id: 4,
    pregunta: '¿Dónde puedes denunciar un perfil falso en Instagram?',
    opciones: [
      'No se puede denunciar',
      'En el perfil del usuario, menú de tres puntos → "Denunciar"',
      'Enviando un correo a Google'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Todas las plataformas tienen un botón de denuncia dentro de cada perfil. Es el canal oficial para reportar suplantación.'
  }
];

// ========== HOOK ==========

export const useRedesSociales2do = () => {
  // Simulador de perfiles sospechosos
  const [respuestasPerfil, setRespuestasPerfil] = useState<Record<string, boolean>>({});
  const evaluarPerfil = (id: string, esFalso: boolean) => {
    setRespuestasPerfil(prev => ({ ...prev, [id]: esFalso }));
  };

  // Checklist de hábitos
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_REDES_2DO.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

  // Escenarios
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_REDES_2DO.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
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
    PREGUNTAS_REDES_2DO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_REDES_2DO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    perfiles: PERFILES_SOSPECHOSOS,
    respuestasPerfil,
    evaluarPerfil,
    escenarios: ESCENARIOS_REDES_2DO,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_REDES_2DO,
    preguntasQuiz: PREGUNTAS_REDES_2DO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};