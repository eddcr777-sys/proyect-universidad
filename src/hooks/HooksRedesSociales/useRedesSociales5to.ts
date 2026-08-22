import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoRedes5to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface PerfilAuditoria {
  id: string;
  nombre: string;
  descripcion: string;
  cumplePoliticas: boolean;
  explicacion: string;
}

export interface EscenarioPublicacion {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoRedes5to {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaRedes5to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_REDES_5TO: HabitoRedes5to[] = [
  {
    id: '1',
    texto: 'He construido un perfil profesional en LinkedIn que refleja mis habilidades y logros académicos.',
    categoria: 'Marca Personal',
    enfoque: 'Las universidades y empleadores revisan tu presencia digital. Un perfil profesional te abre puertas.'
  },
  {
    id: '2',
    texto: 'Conozco las políticas de uso de redes sociales de mi institución y las respeto.',
    categoria: 'Políticas',
    enfoque: 'Las organizaciones regulan qué se puede publicar para proteger su imagen y datos sensibles.'
  },
  {
    id: '3',
    texto: 'Sé identificar información confidencial que no debe publicarse en redes sociales.',
    categoria: 'Confidencialidad',
    enfoque: 'Datos personales, internos o estratégicos pueden causar daño si se filtran.'
  },
  {
    id: '4',
    texto: 'He realizado una auditoría de mi huella digital y he eliminado contenido que podría perjudicar mi futuro.',
    categoria: 'Auditoría',
    enfoque: 'Revisar y limpiar publicaciones pasadas es parte de la gestión de reputación.'
  },
  {
    id: '5',
    texto: 'Actúo como líder digital, orientando a otros sobre buenas prácticas en redes sociales.',
    categoria: 'Liderazgo',
    enfoque: 'Como futuro bachiller, tu ejemplo puede influir positivamente en tu comunidad.'
  }
];

export const PERFILES_AUDITORIA: PerfilAuditoria[] = [
  {
    id: 'perfil1',
    nombre: '@juan_perez_dev',
    descripcion: 'Perfil de LinkedIn con foto profesional, resumen de estudios, proyectos y recomendaciones de profesores.',
    cumplePoliticas: true,
    explicacion: 'Un perfil profesional adecuado: muestra identidad real, logros verificables y no comparte información sensible.'
  },
  {
    id: 'perfil2',
    nombre: '@maria_lopez123',
    descripcion: 'Perfil de Instagram con fotos de fiestas, ubicación en tiempo real y quejas sobre el liceo.',
    cumplePoliticas: false,
    explicacion: 'Publicar ubicación en tiempo real y quejas sobre la institución puede dañar la reputación y violar políticas internas.'
  },
  {
    id: 'perfil3',
    nombre: '@liceo_lemus_oficial',
    descripcion: 'Cuenta institucional del liceo con comunicados, fotos de eventos autorizados y sin datos personales de estudiantes.',
    cumplePoliticas: true,
    explicacion: 'La cuenta oficial cumple: no publica información personal, tiene autorización y mantiene una imagen profesional.'
  },
  {
    id: 'perfil4',
    nombre: '@pedro_tech',
    descripcion: 'Cuenta de Twitter que comparte capturas internas de proyectos escolares con nombres y notas de compañeros.',
    cumplePoliticas: false,
    explicacion: 'Difundir información interna o de terceros sin consentimiento viola la confidencialidad y puede ser ilegal.'
  }
];

export const ESCENARIOS_PUBLICACION: EscenarioPublicacion[] = [
  {
    id: 'esc1',
    titulo: 'Publicar fotos de un evento escolar',
    descripcion: 'En un evento del liceo tomas fotos con tus compañeros. Algunos aparecen en momentos graciosos. ¿Qué debes hacer antes de publicar?',
    opciones: [
      'Publicar sin permiso, es un evento público',
      'Pedir autorización a las personas que aparecen y evitar fotos que puedan avergonzarlos',
      'Publicar solo en tu cuenta privada'
    ],
    opcionCorrecta: 1,
    explicacion: 'Siempre pide consentimiento antes de publicar fotos de otros. Incluso en eventos públicos, la privacidad de las personas importa.'
  },
  {
    id: 'esc2',
    titulo: 'Comentario negativo sobre el liceo en redes',
    descripcion: 'Estás molesto con una decisión del liceo y quieres desahogarte en Twitter. ¿Qué haces?',
    opciones: [
      'Publicar la queja con nombres de profesores',
      'Buscar canales oficiales para expresar tu opinión de manera constructiva',
      'Compartir capturas de conversaciones privadas'
    ],
    opcionCorrecta: 1,
    explicacion: 'Es válido expresar desacuerdo, pero por canales adecuados y sin difamar. Las redes no son el lugar para exponer a otros.'
  },
  {
    id: 'esc3',
    titulo: 'Información sobre un compañero',
    descripcion: 'Te enteras de un rumor sobre un compañero. ¿Qué debes hacer?',
    opciones: [
      'Publicarlo en tu historia para informar a otros',
      'No difundir rumores; si es grave, informar a un adulto de confianza',
      'Contárselo a tu mejor amigo y que él decida'
    ],
    opcionCorrecta: 1,
    explicacion: 'Difundir rumores puede ser ciberacoso y dañar la reputación. Actúa con ética y responsabilidad.'
  },
  {
    id: 'esc4',
    titulo: 'Oferta de colaboración con una marca',
    descripcion: 'Una marca te ofrece productos gratis a cambio de publicidad en tu cuenta. ¿Qué evalúas?',
    opciones: [
      'Aceptar de inmediato',
      'Verificar que la marca sea legítima, que no pida datos sensibles y que el acuerdo sea transparente',
      'Compartir tu contraseña para que ellos publiquen'
    ],
    opcionCorrecta: 1,
    explicacion: 'Antes de aceptar, revisa la reputación de la marca, los términos y nunca compartas credenciales. Cuidado con estafas.'
  }
];

export const VIDEOS_REDES_5TO: VideoRedes5to[] = [
  {
    id: 'v1',
    titulo: 'Cómo crear un perfil profesional en LinkedIn',
    url: 'https://www.youtube.com/embed/example1',
    descripcion: 'Guía para construir una marca personal que destaque ante universidades y empleadores.'
  },
  {
    id: 'v2',
    titulo: 'Políticas de uso de redes sociales en organizaciones',
    url: 'https://www.youtube.com/embed/example2',
    descripcion: 'Qué son y por qué existen normas sobre lo que los empleados o estudiantes publican.'
  },
  {
    id: 'v3',
    titulo: 'Auditoría de tu huella digital',
    url: 'https://www.youtube.com/embed/example3',
    descripcion: 'Cómo buscar tu nombre, evaluar tu presencia y limpiar publicaciones que no te favorecen.'
  }
];

export const PREGUNTAS_REDES_5TO: PreguntaRedes5to[] = [
  {
    id: 1,
    pregunta: '¿Por qué es importante tener un perfil profesional en LinkedIn u otra red similar?',
    opciones: [
      'Porque es obligatorio por ley',
      'Porque mejora tu marca personal y te conecta con oportunidades académicas y laborales',
      'Porque reemplaza a tu currículum en papel'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Un perfil profesional bien construido te representa ante reclutadores y universidades, destacando tus logros y habilidades.'
  },
  {
    id: 2,
    pregunta: '¿Qué es una política de uso de redes sociales en una organización?',
    opciones: [
      'Un documento que prohíbe usar redes sociales',
      'Normas que definen qué se puede y no se puede publicar para proteger la imagen y los datos',
      'Una lista de redes sociales permitidas'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Estas políticas orientan a los miembros sobre el uso responsable de redes en el ámbito institucional.'
  },
  {
    id: 3,
    pregunta: '¿Qué tipo de información NUNCA debes publicar en redes sociales?',
    opciones: [
      'Tus logros académicos',
      'Datos personales, contraseñas, información interna de la organización',
      'Fotos de eventos públicos con autorización'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La información sensible puede ser usada para suplantación, fraude o daño reputacional.'
  },
  {
    id: 4,
    pregunta: '¿Qué es la divulgación responsable en el contexto de redes sociales?',
    opciones: [
      'Publicar cualquier cosa siempre que sea verdad',
      'Pensar antes de publicar, respetando la privacidad y las normas',
      'Solo publicar contenido positivo'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La divulgación responsable implica considerar el impacto de lo que compartes y cumplir con políticas y leyes.'
  }
];

// ========== HOOK ==========

export const useRedesSociales5to = () => {
  // Laboratorio de auditoría de perfiles
  const [respuestasPerfil, setRespuestasPerfil] = useState<Record<string, boolean>>({});
  const evaluarPerfil = (id: string, cumple: boolean) => {
    setRespuestasPerfil(prev => ({ ...prev, [id]: cumple }));
  };

  // Escenarios de publicación
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_PUBLICACION.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Checklist de liderazgo
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_REDES_5TO.length;
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
    PREGUNTAS_REDES_5TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_REDES_5TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    perfilesAuditoria: PERFILES_AUDITORIA,
    respuestasPerfil,
    evaluarPerfil,
    escenarios: ESCENARIOS_PUBLICACION,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_REDES_5TO,
    preguntasQuiz: PREGUNTAS_REDES_5TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};