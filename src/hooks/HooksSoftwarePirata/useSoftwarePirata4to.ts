import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoSoftware4to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface CasoLegal {
  id: string;
  titulo: string;
  descripcion: string;
  esDelito: boolean;
  explicacion: string;
}

export interface EscenarioLegal {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoSoftware4to {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaSoftware4to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_SOFTWARE_4TO: HabitoSoftware4to[] = [
  {
    id: '1',
    texto: 'Conozco las leyes básicas de propiedad intelectual que protegen el software en mi país.',
    categoria: 'Legislación',
    enfoque: 'Saber qué es legal y qué no te evita problemas con la justicia.'
  },
  {
    id: '2',
    texto: 'Entiendo la diferencia entre uso personal, uso educativo y uso comercial del software.',
    categoria: 'Uso Justo',
    enfoque: 'Algunas licencias permiten uso educativo gratuito, pero no comercial. Infórmate antes de usar.'
  },
  {
    id: '3',
    texto: 'Sé qué es una licencia EULA (End User License Agreement) y la leo antes de instalar.',
    categoria: 'Contratos',
    enfoque: 'La EULA es un contrato legal. Aceptarla sin leerla puede tener consecuencias.'
  },
  {
    id: '4',
    texto: 'No comparto ni distribuyo software pirata, ni siquiera "por ayudar" a un amigo.',
    categoria: 'Distribución',
    enfoque: 'Distribuir software ilegal es un delito más grave que usarlo.'
  },
  {
    id: '5',
    texto: 'Sé a qué institución acudir para denunciar la venta de software pirata en mi comunidad.',
    categoria: 'Denuncia',
    enfoque: 'En Venezuela, el SAPI (Servicio Autónomo de Propiedad Intelectual) protege los derechos de autor.'
  }
];

export const CASOS_LEGALES: CasoLegal[] = [
  {
    id: 'caso1',
    titulo: 'Venta de CDs con programas piratas',
    descripcion: 'Un buhonero vende CDs con Windows, Office y juegos "full" a 2 dólares en la calle.',
    esDelito: true,
    explicacion: 'La venta de software pirata es un delito contra la propiedad intelectual. Se puede denunciar ante el SAPI o la policía.'
  },
  {
    id: 'caso2',
    titulo: 'Uso de un programa con licencia educativa',
    descripcion: 'Un estudiante usa AutoCAD con licencia educativa (gratis) para hacer una tarea escolar.',
    esDelito: false,
    explicacion: 'Las licencias educativas permiten uso académico sin costo. Sin embargo, no se puede usar para trabajo comercial.'
  },
  {
    id: 'caso3',
    titulo: 'Compartir tu copia de un juego con 20 amigos',
    descripcion: 'Compraste un juego y lo instalaste en las computadoras de varios amigos para que no lo compren.',
    esDelito: true,
    explicacion: 'Distribuir software sin licencia a terceros es una violación de los términos de uso y de las leyes de derechos de autor.'
  },
  {
    id: 'caso4',
    titulo: 'Descargar software libre desde su web oficial',
    descripcion: 'Descargaste GIMP desde gimp.org (sitio oficial) para editar fotos de un proyecto.',
    esDelito: false,
    explicacion: 'El software libre es legal y su descarga desde fuentes oficiales es completamente válida.'
  },
  {
    id: 'caso5',
    titulo: 'Usar un programa de pago crackeado para un negocio',
    descripcion: 'Un cibercafé usa Photoshop crackeado para ofrecer servicios de diseño a clientes.',
    esDelito: true,
    explicacion: 'Usar software pirata con fines comerciales es un delito grave, con penas económicas y hasta cárcel.'
  }
];

export const ESCENARIOS_LEGALES: EscenarioLegal[] = [
  {
    id: 'esc1',
    titulo: 'Denuncia de software pirata',
    descripcion: 'Descubres que en un local venden programas piratas cerca de tu liceo. ¿Qué puedes hacer?',
    opciones: [
      'Comprar uno, total es barato',
      'Denunciar ante el SAPI (Servicio Autónomo de Propiedad Intelectual) o informar a un adulto',
      'No hacer nada, no es mi problema'
    ],
    opcionCorrecta: 1,
    explicacion: 'Denunciar es un acto de responsabilidad ciudadana. En Venezuela, el SAPI es el ente encargado de proteger la propiedad intelectual.'
  },
  {
    id: 'esc2',
    titulo: 'Uso de licencia educativa para negocio',
    descripcion: 'Tienes una licencia educativa gratuita de un programa de diseño. Un tío te pide que le hagas un logo para su negocio. ¿Qué haces?',
    opciones: [
      'Lo hago, es solo una vez',
      'No lo hago, la licencia educativa prohíbe el uso comercial',
      'Le cobro barato'
    ],
    opcionCorrecta: 1,
    explicacion: 'Las licencias educativas son solo para fines académicos. Usarlas para negocio es ilegal y viola los términos.'
  },
  {
    id: 'esc3',
    titulo: 'Tu amigo te pide que le pases el instalador',
    descripcion: 'Compraste un programa con tu dinero y un amigo te pide que le pases el instalador para no comprarlo. ¿Qué haces?',
    opciones: [
      'Se lo paso, es mi amigo',
      'No lo comparto y le explico que es ilegal, sugiriéndole alternativas gratuitas',
      'Le digo que me pague la mitad'
    ],
    opcionCorrecta: 1,
    explicacion: 'Compartir software con licencia es distribución ilegal. Mejor sugiérele alternativas libres o que compre su copia.'
  },
  {
    id: 'esc4',
    titulo: 'Términos de uso (EULA)',
    descripcion: 'Instalas un programa y aparece una ventana larga con términos legales. ¿La lees?',
    opciones: [
      'No, nadie la lee',
      'La leo por encima, sobre todo las cláusulas sobre uso y distribución',
      'La imprimo y la guardo'
    ],
    opcionCorrecta: 1,
    explicacion: 'La EULA es un contrato. Al menos debes conocer qué usos están permitidos y cuáles prohibidos.'
  }
];

export const VIDEOS_SOFTWARE_4TO: VideoSoftware4to[] = [
  {
    id: 'v1',
    titulo: 'Propiedad intelectual y derechos de autor',
    url: 'https://www.youtube.com/embed/propiedad4to1',
    descripcion: 'Explicación de qué es la propiedad intelectual y por qué el software está protegido.'
  },
  {
    id: 'v2',
    titulo: 'Consecuencias legales de la piratería',
    url: 'https://www.youtube.com/embed/consecuencias4to2',
    descripcion: 'Casos reales de personas y empresas sancionadas por usar software pirata.'
  },
  {
    id: 'v3',
    titulo: 'Cómo denunciar software ilegal en Venezuela',
    url: 'https://www.youtube.com/embed/denuncias4to3',
    descripcion: 'Guía para reportar la venta o distribución de software pirata ante el SAPI.'
  }
];

export const PREGUNTAS_SOFTWARE_4TO: PreguntaSoftware4to[] = [
  {
    id: 1,
    pregunta: '¿Qué es la propiedad intelectual?',
    opciones: [
      'Un derecho que protege las creaciones del intelecto: software, música, libros, arte',
      'Un tipo de antivirus',
      'Una licencia de software'
    ],
    respuestaCorrecta: 0,
    explicacion: 'La propiedad intelectual protege las obras creativas y da al autor derechos exclusivos sobre su uso y distribución.'
  },
  {
    id: 2,
    pregunta: '¿Qué es una EULA?',
    opciones: [
      'Un virus informático',
      'El contrato de licencia de usuario final que aceptas al instalar un software',
      'Una herramienta de diseño'
    ],
    respuestaCorrecta: 1,
    explicacion: 'EULA (End User License Agreement) es el contrato que define lo que puedes y no puedes hacer con el software.'
  },
  {
    id: 3,
    pregunta: '¿Cuál es la diferencia entre uso personal y comercial de software?',
    opciones: [
      'No hay diferencia',
      'El uso comercial requiere licencias diferentes y suele ser más costoso',
      'El personal es siempre ilegal'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El uso comercial exige licencias específicas. Usar licencias educativas o personales para negocio es ilegal.'
  },
  {
    id: 4,
    pregunta: '¿Dónde puedes denunciar la venta de software pirata en Venezuela?',
    opciones: [
      'En el SAPI (Servicio Autónomo de Propiedad Intelectual)',
      'En la tienda de la esquina',
      'No se puede denunciar'
    ],
    respuestaCorrecta: 0,
    explicacion: 'El SAPI es el organismo venezolano que protege los derechos de propiedad intelectual y recibe denuncias.'
  }
];

// ========== HOOK ==========

export const useSoftwarePirata4to = () => {
  // Laboratorio de casos legales
  const [respuestasCaso, setRespuestasCaso] = useState<Record<string, boolean>>({});
  const evaluarCaso = (id: string, esDelito: boolean) => {
    setRespuestasCaso(prev => ({ ...prev, [id]: esDelito }));
  };

  // Escenarios legales
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_LEGALES.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_SOFTWARE_4TO.length;
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
    PREGUNTAS_SOFTWARE_4TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_SOFTWARE_4TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    casos: CASOS_LEGALES,
    respuestasCaso,
    evaluarCaso,
    escenarios: ESCENARIOS_LEGALES,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_SOFTWARE_4TO,
    preguntasQuiz: PREGUNTAS_SOFTWARE_4TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};