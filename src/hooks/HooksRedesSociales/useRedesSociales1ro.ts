import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoRedes1ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface VideoRedes1ro {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaRedes1ro {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_REDES_1RO: HabitoRedes1ro[] = [
  {
    id: '1',
    texto: 'Tengo mi cuenta de Instagram, TikTok o Facebook en modo privado.',
    categoria: 'Privacidad',
    enfoque: 'Solo las personas que tú apruebes podrán ver tus publicaciones.'
  },
  {
    id: '2',
    texto: 'No comparto mi ubicación en tiempo real en publicaciones o historias.',
    categoria: 'Ubicación',
    enfoque: 'Publicar dónde estás puede revelar tu rutina y poner en riesgo tu seguridad.'
  },
  {
    id: '3',
    texto: 'Acepto solicitudes de seguimiento solo de personas que conozco en la vida real.',
    categoria: 'Seguidores',
    enfoque: 'Los desconocidos pueden usar tu información para acoso o suplantación.'
  },
  {
    id: '4',
    texto: 'Reviso las etiquetas en fotos antes de que aparezcan en mi perfil.',
    categoria: 'Etiquetas',
    enfoque: 'Controlas qué imágenes tuyas son visibles para los demás.'
  },
  {
    id: '5',
    texto: 'No publico fotos con mi uniforme escolar o datos que identifiquen mi liceo.',
    categoria: 'Identidad',
    enfoque: 'Evita que extraños sepan dónde estudias y tu horario.'
  }
];

export const VIDEOS_REDES_1RO: VideoRedes1ro[] = [
  {
    id: 'v1',
    titulo: 'Cómo poner tu cuenta privada en Instagram',
    url: 'https://www.youtube.com/embed/9LXDZ9ZB9bY', // Reemplazar por video real
    descripcion: 'Tutorial paso a paso para configurar la privacidad de tu perfil.'
  },
  {
    id: 'v2',
    titulo: 'Netiqueta: las reglas de convivencia en internet',
    url: 'https://www.youtube.com/embed/3X4Q8yR4d2A', // Reemplazar por video real
    descripcion: 'Qué es la netiqueta y por qué es importante respetar a otros en línea.'
  },
  {
    id: 'v3',
    titulo: 'El peligro de compartir tu ubicación en redes',
    url: 'https://www.youtube.com/embed/7kQ6fY2Vn8U', // Reemplazar por video real
    descripcion: 'Riesgos de publicar dónde estás y cómo desactivarlo.'
  }
];

export const PREGUNTAS_REDES_1RO: PreguntaRedes1ro[] = [
  {
    id: 1,
    pregunta: '¿Cuál es la principal ventaja de tener tu cuenta en modo privado?',
    opciones: [
      'Tener más seguidores',
      'Controlar quién ve tus publicaciones',
      'Que tus fotos se vean más bonitas'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Una cuenta privada te permite aprobar manualmente a tus seguidores, limitando el acceso solo a personas de confianza.'
  },
  {
    id: 2,
    pregunta: '¿Por qué no debes publicar fotos con tu uniforme escolar?',
    opciones: [
      'Porque es feo',
      'Porque revela dónde estudias y tu rutina diaria',
      'Porque tus amigos ya saben dónde estudias'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Compartir el uniforme o el nombre del liceo permite a desconocidos saber tu ubicación y horarios, lo que puede ser peligroso.'
  },
  {
    id: 3,
    pregunta: '¿Qué es la netiqueta?',
    opciones: [
      'Una red social nueva',
      'Las normas de comportamiento respetuoso en internet',
      'Un tipo de configuración de privacidad'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La netiqueta son las reglas de cortesía y respeto que debemos seguir al comunicarnos en línea, igual que en la vida real.'
  },
  {
    id: 4,
    pregunta: 'Un desconocido te envía una solicitud de seguimiento. ¿Qué haces?',
    opciones: [
      'Acepto para tener más seguidores',
      'Rechazo la solicitud y, si insiste, lo bloqueo',
      'Le pregunto quién es y luego decido'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La regla de oro es: solo aceptar a personas que conoces en la vida real. Los desconocidos pueden tener malas intenciones.'
  }
];

// ========== HOOK ==========

export const useRedesSociales1ro = () => {
  // Simulador de privacidad
  const [cuentaPrivada, setCuentaPrivada] = useState(false);
  const [ocultarUbicacion, setOcultarUbicacion] = useState(false);
  const [aprobarEtiquetas, setAprobarEtiquetas] = useState(false);

  const nivelPrivacidad = useMemo(() => {
    return (cuentaPrivada ? 1 : 0) + (ocultarUbicacion ? 1 : 0) + (aprobarEtiquetas ? 1 : 0);
  }, [cuentaPrivada, ocultarUbicacion, aprobarEtiquetas]);

  // Checklist de hábitos
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_REDES_1RO.length;
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
    PREGUNTAS_REDES_1RO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_REDES_1RO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    cuentaPrivada,
    setCuentaPrivada,
    ocultarUbicacion,
    setOcultarUbicacion,
    aprobarEtiquetas,
    setAprobarEtiquetas,
    nivelPrivacidad,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_REDES_1RO,
    preguntasQuiz: PREGUNTAS_REDES_1RO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};