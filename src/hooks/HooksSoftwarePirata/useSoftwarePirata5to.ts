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

// Hábitos de software responsable para el bachiller de 5to año
export const HABITOS_SOFTWARE_5TO: HabitoSoftware5to[] = [
  {
    id: '1',
    texto: 'Conozco y uso alternativas de software libre para las tareas cotidianas: LibreOffice en lugar de Office, GIMP en lugar de Photoshop.',
    categoria: 'Alternativas Libres',
    enfoque: 'El software libre es legal, gratuito y de calidad. Conocerlo evita recurrir a programas piratas.'
  },
  {
    id: '2',
    texto: 'Oriento a mis compañeros y familiares sobre las consecuencias de usar software pirata y les sugiero alternativas gratuitas.',
    categoria: 'Liderazgo',
    enfoque: 'Como bachiller, tienes la formación para ayudar a otros a tomar decisiones digitales responsables.'
  },
  {
    id: '3',
    texto: 'Antes de instalar cualquier programa, reviso si existe una versión libre o gratuita oficial antes de buscar versiones "crackeadas".',
    categoria: 'Hábitos Seguros',
    enfoque: 'El software pirata suele venir cargado con virus y malware. Las alternativas oficiales gratuitas son mucho más seguras.'
  },
  {
    id: '4',
    texto: 'Sé qué es una licencia Creative Commons y la diferencia entre software libre, freeware y software de código abierto.',
    categoria: 'Licencias',
    enfoque: 'Conocer los tipos de licencia te ayuda a usar software de forma legal y a respetar el trabajo de los creadores.'
  },
  {
    id: '5',
    texto: 'Denuncio o reporto a un adulto cuando detecto que el liceo o un familiar tiene software pirata instalado en sus equipos.',
    categoria: 'Responsabilidad',
    enfoque: 'Reportar es un acto de responsabilidad ciudadana que protege a la institución y a las familias de consecuencias legales.'
  }
];

// Escenarios de uso responsable de software para el bachiller de 5to año
export const ESCENARIOS_AUDITORIA_SOFTWARE: EscenarioAuditoria[] = [
  {
    id: 'esc1',
    titulo: 'Tu familiar te pide que le instales un programa crackeado',
    descripcion: 'Un familiar mayor te pide que le instales un programa de diseño "crackeado" porque le parece caro. ¿Qué haces?',
    opciones: [
      'Lo instalo sin pensarlo, es mi familia',
      'Le explico que el software pirata puede tener virus y le sugiero alternativas gratuitas como GIMP o LibreOffice',
      'Busco el crack en internet y lo instalo con cuidado'
    ],
    opcionCorrecta: 1,
    explicacion: 'El software pirata puede contener malware que roba datos o daña el equipo. Es mejor orientar a la familia hacia alternativas gratuitas y legales.'
  },
  {
    id: 'esc2',
    titulo: 'Software no autorizado en el laboratorio del liceo',
    descripcion: 'Detectas que hay juegos y programas piratas instalados en las computadoras del laboratorio. ¿Cuál es la acción correcta?',
    opciones: [
      'Avisar al docente encargado del laboratorio para que tome acción',
      'Dejarlo, total no me perjudica',
      'Jugar un rato mientras nadie ve'
    ],
    opcionCorrecta: 0,
    explicacion: 'El software no autorizado en equipos del liceo representa un riesgo legal y de seguridad para toda la institución. Reportarlo es la decisión responsable.'
  },
  {
    id: 'esc3',
    titulo: 'Elegir herramientas para un proyecto escolar',
    descripcion: 'Para un proyecto necesitas editar imágenes y crear una presentación. No tienes dinero para pagar software. ¿Qué haces?',
    opciones: [
      'Busco versiones crackeadas en internet',
      'Uso Canva (diseño, gratis), GIMP (fotos, gratis) y LibreOffice Impress (presentaciones, gratis)',
      'No hago el proyecto'
    ],
    opcionCorrecta: 1,
    explicacion: 'Existen excelentes herramientas gratuitas y legales para todas las necesidades escolares. No es necesario recurrir a software pirata.'
  },
  {
    id: 'esc4',
    titulo: 'Compañero que comparte software pirata por WhatsApp',
    descripcion: 'Un compañero envía por el grupo del salón un enlace para descargar una suite de programas "gratis y completos". ¿Qué haces?',
    opciones: [
      'Lo descargo, si mi compañero lo envía será confiable',
      'No lo descargo y le explico en privado que distribuir software pirata es ilegal y puede tener virus',
      'Lo reenvío a otros grupos'
    ],
    opcionCorrecta: 1,
    explicacion: 'Distribuir software pirata es un delito más grave que usarlo. Además, los enlaces en grupos de WhatsApp son frecuentemente fuentes de malware.'
  }
];

// Ejemplos de software: legal vs. ilegal para clasificar
export const ACTIVOS_SOFTWARE: ActivoSoftware[] = [
  {
    id: 'act1',
    nombre: 'LibreOffice (descargado de libreoffice.org)',
    licencias: 0,
    instalaciones: 30,
    estadoCorrecto: 'cumple',
    explicacion: 'LibreOffice es software libre y gratuito. No requiere licencia de pago. Su uso es completamente legal.'
  },
  {
    id: 'act2',
    nombre: 'Adobe Photoshop crackeado',
    licencias: 0,
    instalaciones: 25,
    estadoCorrecto: 'excede',
    explicacion: 'Una copia crackeada no tiene licencia válida. Usarla es ilegal y puede contener malware. Alternativa gratuita: GIMP.'
  },
  {
    id: 'act3',
    nombre: 'Windows original con licencia',
    licencias: 30,
    instalaciones: 30,
    estadoCorrecto: 'cumple',
    explicacion: 'El número de licencias coincide con las instalaciones. Todo está en regla.'
  },
  {
    id: 'act4',
    nombre: 'Canva (plan gratuito)',
    licencias: 0,
    instalaciones: 35,
    estadoCorrecto: 'cumple',
    explicacion: 'Canva ofrece un plan gratuito con acceso desde el navegador. No requiere licencias de pago para uso educativo básico.'
  },
  {
    id: 'act5',
    nombre: 'Microsoft Office sin activar',
    licencias: 5,
    instalaciones: 40,
    estadoCorrecto: 'excede',
    explicacion: 'Solo hay 5 licencias pero está instalado en 40 equipos. Las 35 instalaciones extras son ilegales. LibreOffice es una alternativa gratuita equivalente.'
  }
];

// Videos educativos apropiados para 5to año
export const VIDEOS_SOFTWARE_5TO: VideoSoftware5to[] = [
  {
    id: 'v1',
    titulo: 'Software libre vs. software pirata: ¿cuál es la diferencia?',
    url: 'https://www.youtube.com/embed/9hZP6DVqP7o',
    descripcion: 'Explicación clara de qué es el software libre, el freeware y el software pirata, y por qué importa la diferencia.'
  },
  {
    id: 'v2',
    titulo: 'Las mejores alternativas gratuitas a programas de pago',
    url: 'https://www.youtube.com/embed/PMCm_6ufWEk',
    descripcion: 'Conoce GIMP, LibreOffice, Canva, Audacity y más: programas gratuitos y legales para todas tus necesidades.'
  },
  {
    id: 'v3',
    titulo: 'Por qué el software pirata es peligroso para tu computadora',
    url: 'https://www.youtube.com/embed/R7wQMEqXxJM',
    descripcion: 'Cómo el software crackeado suele venir con malware, ransomware y troyanos que dañan tu equipo y roban tus datos.'
  }
];

// Quiz adaptado para 5to año: uso responsable de software
export const PREGUNTAS_SOFTWARE_5TO: PreguntaSoftware5to[] = [
  {
    id: 1,
    pregunta: '¿Qué tipo de software puedes usar legalmente sin pagar?',
    opciones: [
      'Solo el software pirata si nadie te ve',
      'El software libre y de código abierto como LibreOffice, GIMP y Audacity',
      'Cualquier software si solo lo usas para estudiar'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El software libre es legal, gratuito y de calidad. Puedes usarlo sin restricciones para estudio, trabajo o cualquier fin.'
  },
  {
    id: 2,
    pregunta: '¿Cuál es el riesgo más común de instalar software pirata?',
    opciones: [
      'Que el programa funcione lento',
      'Que el instalador contenga virus, malware o ransomware que daña tu equipo o roba tus datos',
      'Que el fabricante te envíe un correo'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los instaladores piratas suelen incluir malware disfrazado. Es una de las formas más comunes de infectar un equipo.'
  },
  {
    id: 3,
    pregunta: 'Necesitas editar fotos para un proyecto. No tienes dinero para Photoshop. ¿Qué haces?',
    opciones: [
      'Busco una versión crackeada de Photoshop',
      'Uso GIMP, que es gratuito, legal y tiene funciones similares',
      'No hago el trabajo'
    ],
    respuestaCorrecta: 1,
    explicacion: 'GIMP es un editor de fotos profesional completamente gratuito y legal. Siempre busca la alternativa libre antes de recurrir a software pirata.'
  },
  {
    id: 4,
    pregunta: '¿Qué debes hacer si ves software pirata instalado en los equipos del liceo?',
    opciones: [
      'Usarlo sin decir nada',
      'Reportarlo al docente responsable del laboratorio o a la dirección',
      'Desinstalarlo por cuenta propia'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Reportar el software pirata es la acción responsable. La desinstalación sin autorización no es tu responsabilidad; la del aviso, sí.'
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