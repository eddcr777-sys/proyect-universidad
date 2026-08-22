import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoRedes3ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface EscenarioCiberacoso {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoRedes3ro {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaRedes3ro {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_REDES_3RO: HabitoRedes3ro[] = [
  {
    id: '1',
    texto: 'He configurado quién puede comentar mis publicaciones (solo amigos o nadie).',
    categoria: 'Control de Comentarios',
    enfoque: 'Limita los comentarios a personas de confianza y evita ataques de desconocidos.'
  },
  {
    id: '2',
    texto: 'Uso la opción "Restringir" o "Silenciar" para evitar ver contenido de personas que me molestan sin bloquearlas.',
    categoria: 'Gestión de Interacciones',
    enfoque: 'Restringir es una forma discreta de protegerte sin generar más conflicto.'
  },
  {
    id: '3',
    texto: 'He creado listas de amigos cercanos para compartir contenido más personal solo con ellos.',
    categoria: 'Listas de Amigos',
    enfoque: 'Te permite separar tu vida privada de la pública, incluso dentro de tus seguidores.'
  },
  {
    id: '4',
    texto: 'Sé cómo denunciar comentarios ofensivos, mensajes de odio o acoso en la plataforma.',
    categoria: 'Denuncia',
    enfoque: 'Las redes sociales tienen herramientas para reportar abuso; es tu derecho usarlas.'
  },
  {
    id: '5',
    texto: 'Antes de publicar una historia, reviso quién puede verla y si contiene información sensible.',
    categoria: 'Historias',
    enfoque: 'Las historias desaparecen en 24 horas, pero alguien puede capturarlas. Configura su visibilidad.'
  }
];

export const ESCENARIOS_CIBERACOSO: EscenarioCiberacoso[] = [
  {
    id: 'esc1',
    titulo: 'Comentarios hirientes en tu publicación',
    descripcion: 'Un compañero de clase escribe comentarios burlones en tu foto del liceo. ¿Qué haces?',
    opciones: [
      'Responder con insultos para defenderte',
      'Eliminar el comentario, restringir o bloquear a la persona y denunciar si es grave',
      'Ignorar y dejar que siga'
    ],
    opcionCorrecta: 1,
    explicacion: 'No entres en confrontaciones. Usa las herramientas de la plataforma: elimina, restringe, bloquea y denuncia. Guarda evidencia (captura) por si escalara.'
  },
  {
    id: 'esc2',
    titulo: 'Un amigo es acosado en un grupo',
    descripcion: 'En un grupo de WhatsApp del liceo, varios estudiantes se burlan constantemente de un compañero. Tú lo ves. ¿Qué debes hacer?',
    opciones: [
      'Quedarte callado, no es tu problema',
      'Apoyar a la víctima en privado, denunciar el acoso a un adulto de confianza y no participar',
      'Unirte a las burlas para encajar'
    ],
    opcionCorrecta: 1,
    explicacion: 'El ciberacoso es responsabilidad de todos. Apoya a la víctima, denuncia ante un adulto y no seas cómplice.'
  },
  {
    id: 'esc3',
    titulo: 'Mensajes de odio o amenazas',
    descripcion: 'Recibes mensajes directos amenazantes o llenos de odio. ¿Cuál es la acción correcta?',
    opciones: [
      'Bloquear y reportar la cuenta, y contar a un adulto de confianza',
      'Responder con amenazas',
      'Eliminar los mensajes y no decir nada'
    ],
    opcionCorrecta: 0,
    explicacion: 'Bloquea, reporta y busca apoyo. Nunca respondas con más violencia. Guarda evidencia antes de eliminar.'
  },
  {
    id: 'esc4',
    titulo: 'Tu reputación digital está en juego',
    descripcion: 'Alguien publica una foto comprometedora tuya en una historia. ¿Qué haces?',
    opciones: [
      'Esperar a que desaparezca sola',
      'Denunciar la publicación, pedir que la eliminen y configurar tu privacidad',
      'Compartirla también para que no parezca grave'
    ],
    opcionCorrecta: 1,
    explicacion: 'Actúa rápido: denuncia, solicita eliminación, habla con un adulto y refuerza tu privacidad.'
  }
];

export const VIDEOS_REDES_3RO: VideoRedes3ro[] = [
  {
    id: 'v1',
    titulo: '¿Qué es el ciberacoso y cómo prevenirlo?',
    url: 'https://www.youtube.com/embed/0V9_tQ5H0aA',
    descripcion: 'Explicación del ciberacoso, sus formas y cómo actuar ante él.'
  },
  {
    id: 'v2',
    titulo: 'Cómo gestionar comentarios y bloquear en Instagram',
    url: 'https://www.youtube.com/embed/4d_HhVwKPr0',
    descripcion: 'Tutorial para controlar comentarios, restringir y bloquear usuarios.'
  },
  {
    id: 'v3',
    titulo: 'Reputación digital: piensa antes de publicar',
    url: 'https://www.youtube.com/embed/0mvCeN2qEiY',
    descripcion: 'Cómo cuidar tu imagen en línea y las consecuencias de lo que publicas.'
  }
];

export const PREGUNTAS_REDES_3RO: PreguntaRedes3ro[] = [
  {
    id: 1,
    pregunta: '¿Qué es el ciberacoso?',
    opciones: [
      'Un juego en línea',
      'Uso de medios digitales para hostigar, humillar o amenazar a alguien',
      'Una red social'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El ciberacoso es una forma de acoso que ocurre a través de internet y dispositivos digitales.'
  },
  {
    id: 2,
    pregunta: '¿Qué herramienta de Instagram te permite limitar la interacción de alguien sin que se dé cuenta?',
    opciones: [
      'Restringir',
      'Bloquear',
      'Eliminar cuenta'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Restringir hace que los comentarios de esa persona solo sean visibles para ella misma, y no te notifica sus mensajes.'
  },
  {
    id: 3,
    pregunta: 'Si eres testigo de ciberacoso en un grupo, ¿qué debes hacer?',
    opciones: [
      'Nada, no es mi problema',
      'Apoyar a la víctima, denunciar y no participar en las burlas',
      'Reenviar los mensajes para que otros se enteren'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Apoyar a la víctima y denunciar ante un adulto es la acción responsable. No difundas el contenido.'
  },
  {
    id: 4,
    pregunta: '¿Por qué es importante cuidar tu reputación digital?',
    opciones: [
      'Porque las universidades y empleadores revisan perfiles en línea',
      'Porque es divertido',
      'No es importante'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Tu huella digital puede afectar oportunidades futuras. Lo que publicas hoy puede ser visto mañana.'
  }
];

// ========== HOOK ==========

export const useRedesSociales3ro = () => {
  // Escenarios de ciberacoso
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_CIBERACOSO.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Checklist de hábitos
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_REDES_3RO.length;
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
    PREGUNTAS_REDES_3RO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_REDES_3RO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    escenarios: ESCENARIOS_CIBERACOSO,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_REDES_3RO,
    preguntasQuiz: PREGUNTAS_REDES_3RO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};