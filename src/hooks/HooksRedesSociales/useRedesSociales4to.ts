import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoRedes4to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface AppConectada {
  id: string;
  nombre: string;
  permisosSolicitados: string[];
  permisosAdecuados: string[];
  esExcesivo: boolean;
  explicacion: string;
}

export interface EscenarioOAuth {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoRedes4to {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaRedes4to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_REDES_4TO: HabitoRedes4to[] = [
  {
    id: '1',
    texto: 'He revisado qué aplicaciones y sitios web están conectados a mis redes sociales (Facebook, Google, Instagram) y he revocado los que no uso.',
    categoria: 'Apps Conectadas',
    enfoque: 'Cada app conectada tiene acceso a tus datos. Revoca lo que no necesites.'
  },
  {
    id: '2',
    texto: 'Entiendo qué es OAuth y por qué no debo compartir mi contraseña con aplicaciones de terceros.',
    categoria: 'OAuth',
    enfoque: 'OAuth permite autorizar apps sin dar tu contraseña. Es más seguro, pero debes revisar los permisos.'
  },
  {
    id: '3',
    texto: 'He desactivado la personalización de anuncios basada en mi actividad en redes sociales.',
    categoria: 'Publicidad',
    enfoque: 'Limita el rastreo de tus intereses para mostrarte anuncios dirigidos.'
  },
  {
    id: '4',
    texto: 'He revisado la configuración de geolocalización y desactivado el historial de ubicaciones de mis redes.',
    categoria: 'Geolocalización',
    enfoque: 'Evita que las plataformas registren dónde has estado.'
  },
  {
    id: '5',
    texto: 'Sé exportar y revisar los datos que las redes sociales tienen sobre mí.',
    categoria: 'Auditoría de Datos',
    enfoque: 'Las plataformas ofrecen descargar tu información. Es un derecho que debes ejercer.'
  }
];

export const APPS_CONECTADAS: AppConectada[] = [
  {
    id: 'app1',
    nombre: 'Juego "Quiz de Amigos"',
    permisosSolicitados: ['Leer tu lista de amigos', 'Publicar en tu nombre', 'Acceder a tu correo'],
    permisosAdecuados: [],
    esExcesivo: true,
    explicacion: 'Un juego de preguntas no necesita publicar en tu nombre ni acceder a tu correo. Deberías revocarle todos los permisos o no conectarla.'
  },
  {
    id: 'app2',
    nombre: 'Editor de Fotos "PhotoMagic"',
    permisosSolicitados: ['Acceder a tus fotos', 'Cámara', 'Almacenamiento'],
    permisosAdecuados: ['Acceder a tus fotos', 'Cámara'],
    esExcesivo: true,
    explicacion: 'Un editor de fotos necesita acceso a galería y cámara, pero no debería pedir más. Si pide contactos o micrófono, es excesivo.'
  },
  {
    id: 'app3',
    nombre: 'App de Noticias "InfoVeraz"',
    permisosSolicitados: ['Leer tu perfil básico', 'Correo electrónico'],
    permisosAdecuados: ['Leer tu perfil básico'],
    esExcesivo: true,
    explicacion: 'Una app de noticias solo necesita tu nombre y foto. El correo es innecesario y puede usarse para spam.'
  },
  {
    id: 'app4',
    nombre: 'Plataforma de Música "MusicStream"',
    permisosSolicitados: ['Escuchar en tu nombre', 'Crear listas de reproducción', 'Acceder a tu actividad'],
    permisosAdecuados: ['Escuchar en tu nombre', 'Crear listas de reproducción'],
    esExcesivo: false,
    explicacion: 'Estos permisos son adecuados para una app de música. No debería pedir publicar en tu nombre ni acceder a contactos.'
  }
];

export const ESCENARIOS_OAUTH: EscenarioOAuth[] = [
  {
    id: 'esc1',
    titulo: 'Inicio de sesión con Google',
    descripcion: 'Una página web te ofrece "Iniciar sesión con Google". Te pide permiso para ver tu correo y contactos. ¿Qué haces?',
    opciones: [
      'Acepto sin revisar',
      'Reviso los permisos solicitados y solo acepto lo mínimo necesario',
      'No uso esa opción'
    ],
    opcionCorrecta: 1,
    explicacion: 'Siempre revisa los permisos. Si la app solo necesita identificarte, no debería pedir contactos.'
  },
  {
    id: 'esc2',
    titulo: 'App que pide publicar en tu nombre',
    descripcion: 'Una aplicación de retoques fotográficos quiere permiso para "Publicar en tu nombre" en Instagram. ¿Es necesario?',
    opciones: [
      'Sí, sin eso no funciona',
      'No, es excesivo. Puedes guardar la foto y subirla manualmente',
      'Depende del día'
    ],
    opcionCorrecta: 1,
    explicacion: 'Publicar en tu nombre es un permiso peligroso. Una app de edición no lo necesita.'
  },
  {
    id: 'esc3',
    titulo: 'Permiso de geolocalización',
    descripcion: 'Una red social te pide activar el historial de ubicaciones para "mejorar tu experiencia". ¿Conviene?',
    opciones: [
      'Sí, quiero sugerencias personalizadas',
      'No, prefiero no compartir mi historial de ubicaciones',
      'Solo si me dan puntos'
    ],
    opcionCorrecta: 1,
    explicacion: 'El historial de ubicaciones revela dónde vives, estudias y frecuentas. Es mejor desactivarlo.'
  }
];

export const VIDEOS_REDES_4TO: VideoRedes4to[] = [
  {
    id: 'v1',
    titulo: '¿Qué es OAuth y cómo protege tu contraseña?',
    url: 'https://www.youtube.com/embed/CPbvxxslDTU',
    descripcion: 'Explicación de OAuth y por qué no debes compartir tu contraseña con apps de terceros.'
  },
  {
    id: 'v2',
    titulo: 'Cómo revisar apps conectadas en Google y Facebook',
    url: 'https://www.youtube.com/embed/8jK5Q6Z3y5A',
    descripcion: 'Tutorial para auditar y revocar permisos de aplicaciones conectadas.'
  },
  {
    id: 'v3',
    titulo: 'Exporta tus datos de redes sociales',
    url: 'https://www.youtube.com/embed/5X0nC6C9S1E',
    descripcion: 'Cómo descargar una copia de tus datos en Google, Facebook e Instagram.'
  }
];

export const PREGUNTAS_REDES_4TO: PreguntaRedes4to[] = [
  {
    id: 1,
    pregunta: '¿Qué es OAuth?',
    opciones: [
      'Un protocolo que permite autorizar aplicaciones sin compartir tu contraseña',
      'Un tipo de malware',
      'Una red social'
    ],
    respuestaCorrecta: 0,
    explicacion: 'OAuth es un estándar de autorización: una app obtiene un token con permisos limitados en lugar de tu contraseña.'
  },
  {
    id: 2,
    pregunta: '¿Dónde puedes ver las aplicaciones conectadas a tu cuenta de Google?',
    opciones: [
      'En la configuración de seguridad de tu cuenta',
      'En la aplicación de cámara',
      'No es posible'
    ],
    respuestaCorrecta: 0,
    explicacion: 'En https://myaccount.google.com/permissions puedes revisar y revocar accesos de terceros.'
  },
  {
    id: 3,
    pregunta: '¿Por qué es riesgoso que una app publique en tu nombre?',
    opciones: [
      'Porque puede difundir spam o contenido malicioso a tus seguidores',
      'Porque no tiene nada de malo',
      'Porque te quita seguidores'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Si una app publica en tu nombre, puede enviar spam o phishing a tus contactos, dañando tu reputación.'
  },
  {
    id: 4,
    pregunta: '¿Qué es el historial de ubicaciones en redes sociales?',
    opciones: [
      'Un registro de los lugares que has visitado con tu dispositivo',
      'Una lista de amigos',
      'Un tipo de publicación'
    ],
    respuestaCorrecta: 0,
    explicacion: 'El historial de ubicaciones almacena los lugares donde has estado. Puedes desactivarlo y borrarlo en la configuración.'
  }
];

// ========== HOOK ==========

export const useRedesSociales4to = () => {
  // Laboratorio de apps conectadas
  const [respuestasApp, setRespuestasApp] = useState<Record<string, boolean>>({});
  const evaluarApp = (id: string, esExcesivo: boolean) => {
    setRespuestasApp(prev => ({ ...prev, [id]: esExcesivo }));
  };

  // Escenarios OAuth
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_OAUTH.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_REDES_4TO.length;
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
    PREGUNTAS_REDES_4TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_REDES_4TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    appsConectadas: APPS_CONECTADAS,
    respuestasApp,
    evaluarApp,
    escenarios: ESCENARIOS_OAUTH,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_REDES_4TO,
    preguntasQuiz: PREGUNTAS_REDES_4TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};