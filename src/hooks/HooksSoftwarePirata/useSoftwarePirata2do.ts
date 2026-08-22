import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoSoftware2do {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface LicenciaEjemplo {
  id: string;
  nombre: string;
  descripcion: string;
  tipoCorrecto: 'libre' | 'propietario' | 'freeware' | 'shareware' | 'creative-commons';
  explicacion: string;
}

export interface EscenarioLicencia {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoSoftware2do {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaSoftware2do {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_SOFTWARE_2DO: HabitoSoftware2do[] = [
  {
    id: '1',
    texto: 'Sé diferenciar entre software libre, propietario, freeware y shareware.',
    categoria: 'Conocimiento',
    enfoque: 'Comprender las licencias te ayuda a elegir programas legales y adecuados.'
  },
  {
    id: '2',
    texto: 'Verifico la autenticidad del software descargando solo desde el sitio oficial del desarrollador.',
    categoria: 'Autenticidad',
    enfoque: 'Los sitios de terceros pueden incluir malware o versiones modificadas.'
  },
  {
    id: '3',
    texto: 'Reviso la licencia del software antes de instalarlo para saber qué puedo y no puedo hacer.',
    categoria: 'Licencias',
    enfoque: 'Algunas licencias prohíben el uso comercial o exigen atribución.'
  },
  {
    id: '4',
    texto: 'Utilizo software de código abierto cuando necesito una alternativa gratuita y segura.',
    categoria: 'Código Abierto',
    enfoque: 'El código abierto permite auditar la seguridad y es mantenido por comunidades.'
  },
  {
    id: '5',
    texto: 'No descargo versiones "portables" o "modificadas" de programas de fuentes no oficiales.',
    categoria: 'Fuentes Confiables',
    enfoque: 'Las versiones modificadas pueden contener puertas traseras o spyware.'
  }
];

export const LICENCIAS_EJEMPLO: LicenciaEjemplo[] = [
  {
    id: 'lic1',
    nombre: 'LibreOffice',
    descripcion: 'Suite de oficina gratuita y de código abierto. Puedes usarla, modificarla y compartirla.',
    tipoCorrecto: 'libre',
    explicacion: 'Es software libre (open source). Su licencia permite usar, modificar y redistribuir sin costo.'
  },
  {
    id: 'lic2',
    nombre: 'Microsoft Office',
    descripcion: 'Suite de oficina de pago. Debes comprar una licencia para usarla legalmente.',
    tipoCorrecto: 'propietario',
    explicacion: 'Es software propietario. El código no está disponible y su uso requiere licencia de pago.'
  },
  {
    id: 'lic3',
    nombre: 'Adobe Acrobat Reader',
    descripcion: 'Programa gratuito para leer PDF, pero no puedes modificar su código ni redistribuirlo.',
    tipoCorrecto: 'freeware',
    explicacion: 'Es freeware: gratuito, pero de código cerrado. No puedes modificarlo ni venderlo.'
  },
  {
    id: 'lic4',
    nombre: 'WinRAR',
    descripcion: 'Programa para comprimir archivos. Ofrece un período de prueba de 40 días, después pide comprar la licencia.',
    tipoCorrecto: 'shareware',
    explicacion: 'Es shareware: se distribuye gratis para evaluación, pero requiere pago para uso continuado.'
  },
  {
    id: 'lic5',
    nombre: 'Fotos de Wikimedia Commons',
    descripcion: 'Imágenes que puedes usar libremente, incluso para proyectos escolares, citando al autor.',
    tipoCorrecto: 'creative-commons',
    explicacion: 'Licencia Creative Commons: permite uso gratuito con ciertas condiciones (atribución, no comercial, etc.).'
  }
];

export const ESCENARIOS_LICENCIA: EscenarioLicencia[] = [
  {
    id: 'esc1',
    titulo: 'Necesitas un editor de imágenes',
    descripcion: 'Necesitas editar fotos para un proyecto escolar, pero no tienes dinero para comprar Photoshop. ¿Qué haces?',
    opciones: [
      'Descargar Photoshop crackeado de un foro',
      'Usar GIMP, un editor de imágenes gratuito y de código abierto',
      'Pedirle a un amigo su licencia'
    ],
    opcionCorrecta: 1,
    explicacion: 'GIMP es la alternativa libre a Photoshop. Es legal, gratis y seguro. Descargar cracks es ilegal y peligroso.'
  },
  {
    id: 'esc2',
    titulo: 'Un programa "gratis" que pide licencia después',
    descripcion: 'Instalas un programa que dice ser "gratis", pero a los 30 días te pide pagar para seguir usándolo. ¿Qué tipo de licencia es?',
    opciones: [
      'Software libre',
      'Shareware',
      'Freeware'
    ],
    opcionCorrecta: 1,
    explicacion: 'Shareware es un modelo de prueba: te deja usarlo gratis por un tiempo y luego solicita pago.'
  },
  {
    id: 'esc3',
    titulo: 'Uso de imágenes de internet',
    descripcion: 'Para tu presentación, descargaste una imagen de Google. ¿Qué debes verificar antes de usarla?',
    opciones: [
      'Nada, si está en Google es libre',
      'La licencia de la imagen: si es Creative Commons o libre de derechos',
      'Que la imagen se vea bien'
    ],
    opcionCorrecta: 1,
    explicacion: 'No todo lo que aparece en Google es de uso libre. Debes verificar la licencia y atribuir al autor si es necesario.'
  }
];

export const VIDEOS_SOFTWARE_2DO: VideoSoftware2do[] = [
  {
    id: 'v1',
    titulo: 'Tipos de licencias de software explicadas',
    url: 'https://www.youtube.com/embed/licencias1',
    descripcion: 'Diferencias entre software libre, propietario, freeware y shareware.'
  },
  {
    id: 'v2',
    titulo: '¿Qué es el código abierto?',
    url: 'https://www.youtube.com/embed/opensource2',
    descripcion: 'Cómo funciona el software open source y por qué es seguro y confiable.'
  },
  {
    id: 'v3',
    titulo: 'Cómo verificar la autenticidad de un software',
    url: 'https://www.youtube.com/embed/autenticidad3',
    descripcion: 'Consejos para descargar programas de fuentes oficiales y evitar falsificaciones.'
  }
];

export const PREGUNTAS_SOFTWARE_2DO: PreguntaSoftware2do[] = [
  {
    id: 1,
    pregunta: '¿Qué caracteriza al software libre (open source)?',
    opciones: [
      'Siempre es gratuito',
      'Su código fuente está disponible para verlo, modificarlo y compartirlo',
      'No tiene licencia'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El software libre permite acceder al código fuente, modificarlo y redistribuirlo. No siempre es gratuito, pero generalmente lo es.'
  },
  {
    id: 2,
    pregunta: '¿Qué es una licencia Creative Commons?',
    opciones: [
      'Una licencia que permite usar obras bajo ciertas condiciones definidas por el autor',
      'Un tipo de software',
      'Una forma de piratear'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Creative Commons es un conjunto de licencias para obras creativas que permiten ciertos usos con condiciones (atribución, no comercial, compartir igual).'
  },
  {
    id: 3,
    pregunta: '¿Cuál es la forma más segura de descargar un programa?',
    opciones: [
      'Desde la página oficial del desarrollador',
      'Desde un enlace de un foro',
      'Desde un video de YouTube'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Siempre descarga desde el sitio oficial. Otras fuentes pueden incluir malware o versiones alteradas.'
  },
  {
    id: 4,
    pregunta: 'Un programa "portable" descargado de un sitio desconocido. ¿Es seguro?',
    opciones: [
      'Sí, porque no necesita instalación',
      'No, podría ser una versión modificada con malware',
      'Sí, porque es más liviano'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Las versiones portables de fuentes no oficiales son de alto riesgo: pueden incluir puertas traseras.'
  }
];

// ========== HOOK ==========

export const useSoftwarePirata2do = () => {
  // Laboratorio de licencias
  const [respuestasLicencia, setRespuestasLicencia] = useState<Record<string, string>>({});
  const [resultadoLicencia, setResultadoLicencia] = useState<Record<string, boolean>>({});
  const evaluarLicencia = (id: string, tipo: string) => {
    const licencia = LICENCIAS_EJEMPLO.find(l => l.id === id);
    if (!licencia) return;
    const correcto = tipo === licencia.tipoCorrecto;
    setResultadoLicencia(prev => ({ ...prev, [id]: correcto }));
    setRespuestasLicencia(prev => ({ ...prev, [id]: tipo }));
  };

  // Escenarios de licencias
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_LICENCIA.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_SOFTWARE_2DO.length;
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
    PREGUNTAS_SOFTWARE_2DO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_SOFTWARE_2DO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    licencias: LICENCIAS_EJEMPLO,
    respuestasLicencia,
    evaluarLicencia,
    resultadoLicencia,
    escenarios: ESCENARIOS_LICENCIA,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_SOFTWARE_2DO,
    preguntasQuiz: PREGUNTAS_SOFTWARE_2DO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};