import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface Habito5to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface RiesgoEjemplo {
  id: string;
  titulo: string;
  descripcion: string;
  probabilidad: 'Alta' | 'Media' | 'Baja';
  impacto: 'Alto' | 'Medio' | 'Bajo';
  criticidadCorrecta: 'Crítico' | 'Alto' | 'Medio' | 'Bajo';
  explicacion: string;
}

export interface HallazgoSimulado {
  id: string;
  contexto: string;
  problema: string;
  opcionesInforme: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface PreguntaQuiz5to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

// Hábitos de uso responsable de la red para estudiantes de 5to año (líderes del liceo)
export const HABITOS_5TO: Habito5to[] = [
  {
    id: '1',
    texto: 'Antes de compartir una noticia o imagen en redes, verifico si la fuente es confiable para no difundir desinformación.',
    categoria: 'Verificación de Información',
    enfoque: 'Compartir noticias falsas tiene consecuencias reales. Un click mal dado puede dañar la reputación de personas o sembrar pánico.'
  },
  {
    id: '2',
    texto: 'Oriento a estudiantes de años menores sobre el uso seguro de internet y las redes sociales.',
    categoria: 'Liderazgo Digital',
    enfoque: 'Como futuro bachiller, tu ejemplo y orientación pueden proteger a estudiantes más jóvenes de riesgos en línea.'
  },
  {
    id: '3',
    texto: 'Reconozco cuándo alguien está siendo acosado en línea (ciberacoso) y sé cómo apoyarle o reportarlo.',
    categoria: 'Protección Comunitaria',
    enfoque: 'El ciberacoso daña la salud mental. Reconocer las señales y actuar es un acto de responsabilidad social.'
  },
  {
    id: '4',
    texto: 'Cuido mi tiempo de pantalla y mantengo un equilibrio saludable entre mi vida digital y la presencial.',
    categoria: 'Bienestar Digital',
    enfoque: 'El uso excesivo de pantallas afecta el sueño, el estado de ánimo y el rendimiento académico. Ponerse límites es un hábito inteligente.'
  },
  {
    id: '5',
    texto: 'Ayudo a la dirección del liceo o a mis docentes cuando detecto situaciones de riesgo digital en mi entorno escolar.',
    categoria: 'Responsabilidad Institucional',
    enfoque: 'Reportar situaciones de riesgo (acoso, contenido inapropiado, estafas) a un adulto de confianza es la acción correcta y valiente.'
  }
];

// Situaciones cotidianas para analizar y tomar decisiones responsables
export const RIESGOS_EJEMPLO: RiesgoEjemplo[] = [
  {
    id: 'riesgo1',
    titulo: 'Grupo de WhatsApp con rumores sobre un compañero',
    descripcion: 'Un grupo del salón comparte mensajes burlando a un estudiante con fotos editadas y apodos ofensivos.',
    probabilidad: 'Alta',
    impacto: 'Alto',
    criticidadCorrecta: 'Crítico',
    explicacion: 'El ciberacoso tiene un impacto emocional grave y puede derivar en consecuencias serias para la víctima. Es una situación crítica que debe reportarse de inmediato a un docente o representante.'
  },
  {
    id: 'riesgo2',
    titulo: 'Uso del Wi-Fi del liceo para descargar contenido inapropiado',
    descripcion: 'Varios estudiantes usan la red del liceo para ver contenido que viola las normas de convivencia de la institución.',
    probabilidad: 'Media',
    impacto: 'Alto',
    criticidadCorrecta: 'Alto',
    explicacion: 'Esto compromete la reputación del liceo y expone a los estudiantes a riesgos legales. Es un riesgo alto que debe atenderse con normas claras de uso de la red.'
  },
  {
    id: 'riesgo3',
    titulo: 'Publicar la ubicación del liceo en redes en tiempo real',
    descripcion: 'Estudiantes publican en tiempo real desde dónde están durante actividades fuera del plantel.',
    probabilidad: 'Baja',
    impacto: 'Alto',
    criticidadCorrecta: 'Alto',
    explicacion: 'Compartir ubicación en tiempo real puede poner en riesgo la seguridad física de los estudiantes, aunque sucede pocas veces. El impacto potencial es alto.'
  },
  {
    id: 'riesgo4',
    titulo: 'Compartir examen o actividades por chat antes de la prueba',
    descripcion: 'Estudiantes fotografian el examen y lo envían a compañeros de otros turnos.',
    probabilidad: 'Alta',
    impacto: 'Medio',
    criticidadCorrecta: 'Alto',
    explicacion: 'La deshonestidad académica en digital tiene alta probabilidad y daña la integridad del proceso educativo. Merece atención preventiva con normas claras.'
  }
];

export const HALLAZGOS_SIMULADOS: HallazgoSimulado[] = [
  {
    id: 'hallazgo1',
    contexto: 'Descubriste que un compañero recibe mensajes ofensivos repetidos en un grupo de WhatsApp del liceo.',
    problema: '¿Cuál es la mejor forma de actuar?',
    opcionesInforme: [
      'No meterme, es problema de ellos.',
      'Apoyar al compañero afectado, guardar evidencia y reportar la situación a un docente o al departamento de orientación.',
      'Compartir los mensajes en otro grupo para que todos se enteren.'
    ],
    opcionCorrecta: 1,
    explicacion: 'El ciberacoso requiere intervención. Apoyar a la víctima y reportar a un adulto de confianza es la acción correcta. Difundir los mensajes empeora la situación.'
  },
  {
    id: 'hallazgo2',
    contexto: 'Llega al grupo familiar una noticia alarmante sin fuente: dicen que el agua del barrio está contaminada.',
    problema: '¿Qué haces antes de compartirla?',
    opcionesInforme: [
      'La reenvío de inmediato porque parece urgente.',
      'Busco la noticia en medios oficiales. Si no tiene fuente confiable, no la comparto.',
      'La ignoro y no hago nada.'
    ],
    opcionCorrecta: 1,
    explicacion: 'Verificar antes de compartir es una responsabilidad digital básica. Las noticias falsas se propagan por quienes las reenvían sin chequear.'
  },
  {
    id: 'hallazgo3',
    contexto: 'Un compañero más joven te pregunta si puede darle su contraseña a un sitio que promete cuentas premium gratis.',
    problema: '¿Qué le aconsejas?',
    opcionesInforme: [
      'Sí, parece confiable si tiene buenas reseñas.',
      'Nunca des tu contraseña a sitios de terceros. Ninguna plataforma legítima te la pedirá para darte algo gratis. Es probablemente una estafa.',
      'Lo intento primero con mi cuenta para ver si funciona.'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los sitios que piden credenciales a cambio de regalos casi siempre son estafas (phishing). Nunca compartas tus claves.'
  }
];

// Quiz de uso responsable de internet y liderazgo digital para 5to año
export const PREGUNTAS_QUIZ_5TO: PreguntaQuiz5to[] = [
  {
    id: 1,
    pregunta: '¿Qué deberías hacer antes de compartir una noticia en redes sociales?',
    opciones: [
      'Compartirla si muchas personas ya la han reenviado',
      'Verificar la fuente en medios confiables antes de difundirla',
      'Compartirla solo si tiene muchos "me gusta"'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La desinformación se propaga cuando la gente comparte sin verificar. Siempre busca la fuente original y contrasta en medios confiables.'
  },
  {
    id: 2,
    pregunta: '¿Qué es el ciberacoso (cyberbullying)?',
    opciones: [
      'Jugar videojuegos en línea con extranjeros',
      'Hostigar, insultar o humillar a una persona de forma repetida a través de medios digitales',
      'Ver contenido violento en internet'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El ciberacoso incluye mensajes ofensivos, difusión de rumores, exclusión digital y suplantación. Es tan dañino como el acoso presencial.'
  },
  {
    id: 3,
    pregunta: 'Un sitio web te ofrece una cuenta premium gratis si ingresas tu correo y contraseña. ¿Qué haces?',
    opciones: [
      'Ingreso mis datos, suena a una buena oferta',
      'No lo hago; los sitios legítimos no piden tu contraseña para darte algo gratis. Puede ser phishing.',
      'Lo intento con la contraseña de un amigo primero'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Pedir tu contraseña a cambio de algo "gratis" es una señal clásica de phishing. Ninguna plataforma legítima necesita tu clave para darte un beneficio.'
  },
  {
    id: 4,
    pregunta: 'Ves que un compañero más joven está recibiendo mensajes ofensivos en un chat del liceo. ¿Qué haces como líer?',
    opciones: [
      'Ignoro la situación, no es mi problema',
      'Apoyo al compañero y reporto la situación a un docente o al departamento de orientación',
      'Me uno al chat para ver qué pasa'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El liderazgo digital implica actuar cuando alguien está en riesgo. Reportar a un adulto de confianza es la acción correcta y responsable.'
  }
];

// ========== HOOK ==========

export const useAuditoria5to = () => {
  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_5TO.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

  // Simulador de matriz de riesgo
  const [clasificacionesRiesgo, setClasificacionesRiesgo] = useState<Record<string, string>>({});
  const [resultadoRiesgo, setResultadoRiesgo] = useState<Record<string, boolean>>({});
  const clasificarRiesgo = (id: string, criticidad: string) => {
    const riesgo = RIESGOS_EJEMPLO.find(r => r.id === id);
    if (!riesgo) return;
    const correcto = criticidad === riesgo.criticidadCorrecta;
    setResultadoRiesgo(prev => ({ ...prev, [id]: correcto }));
  };

  // Simulador de redacción de hallazgos
  const [respuestasHallazgo, setRespuestasHallazgo] = useState<Record<string, number>>({});
  const [resultadoHallazgo, setResultadoHallazgo] = useState<Record<string, boolean>>({});
  const responderHallazgo = (id: string, opcionIndex: number) => {
    setRespuestasHallazgo(prev => ({ ...prev, [id]: opcionIndex }));
    const hallazgo = HALLAZGOS_SIMULADOS.find(h => h.id === id);
    if (hallazgo) {
      setResultadoHallazgo(prev => ({ ...prev, [id]: opcionIndex === hallazgo.opcionCorrecta }));
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
    PREGUNTAS_QUIZ_5TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_QUIZ_5TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    riesgos: RIESGOS_EJEMPLO,
    clasificarRiesgo,
    resultadoRiesgo,
    hallazgos: HALLAZGOS_SIMULADOS,
    respuestasHallazgo,
    responderHallazgo,
    resultadoHallazgo,
    preguntasQuiz: PREGUNTAS_QUIZ_5TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};