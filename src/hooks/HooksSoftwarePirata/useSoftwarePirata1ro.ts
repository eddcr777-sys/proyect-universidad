import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoSoftware1ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface AccionSoftware {
  id: string;
  descripcion: string;
  esPirateria: boolean;
  explicacion: string;
}

export interface VideoSoftware1ro {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaSoftware1ro {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_SOFTWARE_1RO: HabitoSoftware1ro[] = [
  {
    id: '1',
    texto: 'Descargo aplicaciones y juegos solo desde tiendas oficiales (Google Play, App Store, Microsoft Store).',
    categoria: 'Fuentes Oficiales',
    enfoque: 'Las tiendas oficiales verifican que las apps no contengan malware.'
  },
  {
    id: '2',
    texto: 'No uso "cracks", "keygens" ni parches ilegales para activar programas.',
    categoria: 'Activación Ilegal',
    enfoque: 'Estos archivos suelen contener virus, troyanos o software espía.'
  },
  {
    id: '3',
    texto: 'Cuando un programa es de pago, busco alternativas gratuitas legales en lugar de piratearlo.',
    categoria: 'Alternativas Legales',
    enfoque: 'Existen versiones gratuitas o de código abierto para casi todo.'
  },
  {
    id: '4',
    texto: 'Reviso los permisos que piden las aplicaciones antes de instalarlas.',
    categoria: 'Permisos',
    enfoque: 'El software pirata suele pedir permisos excesivos para robar datos.'
  },
  {
    id: '5',
    texto: 'Mantengo mi antivirus activo y actualizado para detectar software malicioso.',
    categoria: 'Protección',
    enfoque: 'El antivirus es la última barrera si accidentalmente descargas algo riesgoso.'
  }
];

export const ACCIONES_SOFTWARE: AccionSoftware[] = [
  {
    id: 'acc1',
    descripcion: 'Descargar un juego gratis desde un enlace de YouTube que dice "versión completa sin virus".',
    esPirateria: true,
    explicacion: 'Es piratería y muy peligroso. Esos enlaces suelen contener malware que roba tus contraseñas o daña tu dispositivo.'
  },
  {
    id: 'acc2',
    descripcion: 'Instalar una app de edición de fotos desde Google Play (tienda oficial).',
    esPirateria: false,
    explicacion: 'Es seguro. Las tiendas oficiales revisan las aplicaciones antes de publicarlas.'
  },
  {
    id: 'acc3',
    descripcion: 'Usar un "crack" para activar un programa de diseño sin pagar la licencia.',
    esPirateria: true,
    explicacion: 'Es ilegal y arriesgado. Los cracks suelen incluir malware que puede espiarte o dañar tu computadora.'
  },
  {
    id: 'acc4',
    descripcion: 'Descargar un programa gratuito de código abierto desde su página oficial (ej. LibreOffice, GIMP).',
    esPirateria: false,
    explicacion: 'Es legal y seguro. El software libre es una excelente alternativa a los programas de pago.'
  },
  {
    id: 'acc5',
    descripcion: 'Compartir tu cuenta de un juego de pago con un amigo para que no tenga que comprarlo.',
    esPirateria: true,
    explicacion: 'Compartir cuentas viola los términos de servicio y puede provocar el baneo de la cuenta o robo de datos.'
  }
];

export const VIDEOS_SOFTWARE_1RO: VideoSoftware1ro[] = [
  {
    id: 'v1',
    titulo: 'Los peligros de descargar software pirata',
    url: 'https://www.youtube.com/embed/example1',
    descripcion: 'Explicación de los riesgos de usar cracks y keygens: malware, robo de datos y pérdida de garantía.'
  },
  {
    id: 'v2',
    titulo: 'Alternativas gratuitas a programas de pago',
    url: 'https://www.youtube.com/embed/example2',
    descripcion: 'Descubre programas libres que reemplazan a los costosos: GIMP, LibreOffice, Blender, etc.'
  },
  {
    id: 'v3',
    titulo: 'Cómo detectar una descarga falsa',
    url: 'https://www.youtube.com/embed/example3',
    descripcion: 'Señales de alerta: botones de descarga falsos, sitios sospechosos y archivos .exe inesperados.'
  }
];

export const PREGUNTAS_SOFTWARE_1RO: PreguntaSoftware1ro[] = [
  {
    id: 1,
    pregunta: '¿Por qué es peligroso descargar software pirata?',
    opciones: [
      'Porque puede contener virus o malware que robe tu información',
      'Porque es más lento',
      'Porque ocupa mucho espacio'
    ],
    respuestaCorrecta: 0,
    explicacion: 'El software pirata suele estar modificado para incluir malware: troyanos, keyloggers o ransomware.'
  },
  {
    id: 2,
    pregunta: '¿Dónde es seguro descargar aplicaciones para tu celular?',
    opciones: [
      'Desde cualquier página web',
      'Solo desde la tienda oficial (Google Play, App Store)',
      'Desde enlaces de YouTube'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Las tiendas oficiales verifican la seguridad de las aplicaciones. Otras fuentes pueden estar infectadas.'
  },
  {
    id: 3,
    pregunta: '¿Qué es un "crack" o "keygen"?',
    opciones: [
      'Una herramienta legal para activar programas',
      'Un programa ilegal que elimina la protección de pago y suele contener malware',
      'Un antivirus'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los cracks y keygens son ilegales y frecuentemente incluyen software malicioso.'
  },
  {
    id: 4,
    pregunta: '¿Cuál es una alternativa legal a un programa de pago?',
    opciones: [
      'Pedirle a un amigo su copia pirata',
      'Usar software libre o de código abierto (ej. LibreOffice en vez de Microsoft Office)',
      'Descargarlo de un foro'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El software libre es gratuito, legal y seguro. LibreOffice, GIMP y Blender son excelentes alternativas.'
  }
];

// ========== HOOK ==========

export const useSoftwarePirata1ro = () => {
  // Simulador de acciones (piratería o seguro)
  const [respuestasAccion, setRespuestasAccion] = useState<Record<string, boolean>>({});
  const evaluarAccion = (id: string, esPirateria: boolean) => {
    setRespuestasAccion(prev => ({ ...prev, [id]: esPirateria }));
  };

  // Checklist de hábitos
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_SOFTWARE_1RO.length;
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
    PREGUNTAS_SOFTWARE_1RO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_SOFTWARE_1RO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    acciones: ACCIONES_SOFTWARE,
    respuestasAccion,
    evaluarAccion,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_SOFTWARE_1RO,
    preguntasQuiz: PREGUNTAS_SOFTWARE_1RO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};