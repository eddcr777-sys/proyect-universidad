import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoSoftware5to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface EscenarioAuditoria {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface ActivoSoftware {
  id: string;
  nombre: string;
  licencias: number;
  instalaciones: number;
  estadoCorrecto: 'cumple' | 'excede' | 'subutilizado';
  explicacion: string;
}

export interface VideoSoftware5to {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaSoftware5to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_SOFTWARE_5TO: HabitoSoftware5to[] = [
  {
    id: '1',
    texto: 'Sé realizar un inventario básico de software instalado en mi liceo u organización.',
    categoria: 'Inventario',
    enfoque: 'El primer paso de una auditoría de software es saber qué está instalado y dónde.'
  },
  {
    id: '2',
    texto: 'Entiendo la norma ISO 19770 y su importancia para la gestión de activos de software.',
    categoria: 'Normativa',
    enfoque: 'ISO 19770 establece buenas prácticas para gestionar licencias y evitar sanciones.'
  },
  {
    id: '3',
    texto: 'Puedo detectar cuándo una organización tiene más instalaciones que licencias (exceso de uso).',
    categoria: 'Cumplimiento',
    enfoque: 'El exceso de licencias es un hallazgo crítico en auditorías y puede generar multas.'
  },
  {
    id: '4',
    texto: 'Sé proponer políticas de software claras: qué se puede instalar, quién lo autoriza y cómo se registra.',
    categoria: 'Políticas',
    enfoque: 'Las políticas evitan la instalación de software no autorizado y reducen riesgos legales.'
  },
  {
    id: '5',
    texto: 'Puedo redactar un informe ejecutivo sobre el estado de licencias de software de una institución.',
    categoria: 'Informes',
    enfoque: 'Comunicar los hallazgos de forma clara es esencial para que la dirección tome decisiones.'
  }
];

export const ESCENARIOS_AUDITORIA_SOFTWARE: EscenarioAuditoria[] = [
  {
    id: 'esc1',
    titulo: 'Exceso de instalaciones',
    descripcion: 'Durante una auditoría, descubres que la escuela tiene 50 computadoras con un programa de diseño, pero solo compró 30 licencias. ¿Qué haces?',
    opciones: [
      'Ignorarlo, no es importante',
      'Documentar el exceso y recomendar comprar 20 licencias adicionales o desinstalar el software',
      'Eliminar el programa de las computadoras sin avisar'
    ],
    opcionCorrecta: 1,
    explicacion: 'El exceso de instalaciones es un incumplimiento legal. El auditor debe reportarlo y recomendar regularizar las licencias.'
  },
  {
    id: 'esc2',
    titulo: 'Software no autorizado',
    descripcion: 'Encuentras juegos y programas piratas instalados en las computadoras del laboratorio. ¿Cuál es la acción correcta?',
    opciones: [
      'Avisar de inmediato al responsable y documentar el hallazgo',
      'Dejarlos, no es mi problema',
      'Jugar un rato'
    ],
    opcionCorrecta: 0,
    explicacion: 'El software no autorizado es un riesgo legal y de seguridad. Debe reportarse de inmediato a la dirección.'
  },
  {
    id: 'esc3',
    titulo: 'Política de instalación de software',
    descripcion: 'La dirección te pide que propongas una política para evitar la instalación de software pirata. ¿Qué incluyes?',
    opciones: [
      'Prohibir instalar cualquier programa',
      'Definir un proceso de autorización, una lista blanca de software permitido y controles de inventario',
      'Permitir que cada quien instale lo que quiera'
    ],
    opcionCorrecta: 1,
    explicacion: 'Una política efectiva incluye autorización clara, inventario periódico y restricciones para usuarios estándar.'
  },
  {
    id: 'esc4',
    titulo: 'Subutilización de licencias',
    descripcion: 'Detectas que hay 20 licencias compradas de un programa, pero solo 5 se están usando. ¿Qué recomiendas?',
    opciones: [
      'Comprar más licencias',
      'Mantener las licencias sin cambios',
      'Reasignar las licencias sobrantes o cancelar el mantenimiento para ahorrar costos'
    ],
    opcionCorrecta: 2,
    explicacion: 'La subutilización es una ineficiencia. El auditor puede recomendar reasignar o no renovar licencias innecesarias.'
  }
];

export const ACTIVOS_SOFTWARE: ActivoSoftware[] = [
  {
    id: 'act1',
    nombre: 'Microsoft Office',
    licencias: 30,
    instalaciones: 30,
    estadoCorrecto: 'cumple',
    explicacion: 'Cumple: hay 30 licencias y 30 instalaciones. No hay exceso ni subutilización.'
  },
  {
    id: 'act2',
    nombre: 'Adobe Photoshop',
    licencias: 10,
    instalaciones: 25,
    estadoCorrecto: 'excede',
    explicacion: 'Excede: hay 25 instalaciones pero solo 10 licencias. Se deben regularizar 15 licencias o desinstalar.'
  },
  {
    id: 'act3',
    nombre: 'Antivirus corporativo',
    licencias: 50,
    instalaciones: 40,
    estadoCorrecto: 'subutilizado',
    explicacion: 'Subutilizado: se pagaron 50 licencias pero solo se usan 40. Se pueden reasignar o reducir el contrato.'
  },
  {
    id: 'act4',
    nombre: 'LibreOffice',
    licencias: 0,
    instalaciones: 35,
    estadoCorrecto: 'cumple',
    explicacion: 'Cumple: LibreOffice es software libre (gratuito), no requiere licencias de pago.'
  },
  {
    id: 'act5',
    nombre: 'Software de diseño 3D',
    licencias: 5,
    instalaciones: 5,
    estadoCorrecto: 'cumple',
    explicacion: 'Cumple: número de licencias coincide con instalaciones.'
  }
];

export const VIDEOS_SOFTWARE_5TO: VideoSoftware5to[] = [
  {
    id: 'v1',
    titulo: 'ISO 19770: Gestión de activos de software',
    url: 'https://www.youtube.com/embed/iso19770-5to1',
    descripcion: 'Qué es la norma ISO 19770 y cómo ayuda a las organizaciones a controlar sus licencias.'
  },
  {
    id: 'v2',
    titulo: 'Cómo hacer un inventario de software',
    url: 'https://www.youtube.com/embed/inventario5to2',
    descripcion: 'Métodos y herramientas para saber qué software está instalado en una red.'
  },
  {
    id: 'v3',
    titulo: 'Auditoría de licencias: pasos y recomendaciones',
    url: 'https://www.youtube.com/embed/auditoria5to3',
    descripcion: 'Guía práctica para realizar una auditoría de licencias en una organización.'
  }
];

export const PREGUNTAS_SOFTWARE_5TO: PreguntaSoftware5to[] = [
  {
    id: 1,
    pregunta: '¿Qué es la norma ISO 19770?',
    opciones: [
      'Un estándar para la gestión de activos de software (SAM)',
      'Un tipo de licencia',
      'Un programa antivirus'
    ],
    respuestaCorrecta: 0,
    explicacion: 'ISO 19770 es el estándar internacional para la Gestión de Activos de Software, que ayuda a controlar licencias y evitar riesgos.'
  },
  {
    id: 2,
    pregunta: '¿Qué significa "exceso de licencias" en una auditoría?',
    opciones: [
      'Que hay más licencias que instalaciones',
      'Que hay más instalaciones que licencias compradas',
      'Que no hay licencias'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El exceso ocurre cuando se instala un programa en más equipos de los permitidos por las licencias adquiridas.'
  },
  {
    id: 3,
    pregunta: '¿Cuál es el primer paso de una auditoría de software?',
    opciones: [
      'Comprar licencias',
      'Realizar un inventario de software instalado',
      'Formatear las computadoras'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Sin inventario no se puede comparar instalaciones contra licencias. Es el punto de partida.'
  },
  {
    id: 4,
    pregunta: '¿Qué beneficio tiene reasignar licencias subutilizadas?',
    opciones: [
      'Ninguno',
      'Ahorra costos y mejora el cumplimiento',
      'Aumenta el riesgo legal'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Reasignar licencias a equipos que las necesitan optimiza la inversión y evita pagar licencias innecesarias.'
  }
];

// ========== HOOK ==========

export const useSoftwarePirata5to = () => {
  // Laboratorio de activos de software
  const [respuestasActivo, setRespuestasActivo] = useState<Record<string, string>>({});
  const [resultadoActivo, setResultadoActivo] = useState<Record<string, boolean>>({});
  const evaluarActivo = (id: string, estado: string) => {
    const activo = ACTIVOS_SOFTWARE.find(a => a.id === id);
    if (!activo) return;
    const correcto = estado === activo.estadoCorrecto;
    setResultadoActivo(prev => ({ ...prev, [id]: correcto }));
    setRespuestasActivo(prev => ({ ...prev, [id]: estado }));
  };

  // Escenarios de auditoría
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_AUDITORIA_SOFTWARE.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_SOFTWARE_5TO.length;
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
    PREGUNTAS_SOFTWARE_5TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_SOFTWARE_5TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    activos: ACTIVOS_SOFTWARE,
    respuestasActivo,
    evaluarActivo,
    resultadoActivo,
    escenarios: ESCENARIOS_AUDITORIA_SOFTWARE,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_SOFTWARE_5TO,
    preguntasQuiz: PREGUNTAS_SOFTWARE_5TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};