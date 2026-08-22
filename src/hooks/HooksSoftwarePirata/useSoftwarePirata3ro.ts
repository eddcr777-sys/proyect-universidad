import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoSoftware3ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface ArchivoSospechoso {
  id: string;
  nombre: string;
  descripcion: string;
  esSospechoso: boolean;
  explicacion: string;
}

export interface EscenarioArchivo {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoSoftware3ro {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaSoftware3ro {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_SOFTWARE_3RO: HabitoSoftware3ro[] = [
  {
    id: '1',
    texto: 'Verifico el hash MD5 o SHA-256 de los archivos descargados cuando el sitio oficial lo proporciona.',
    categoria: 'Integridad',
    enfoque: 'Comparar hashes confirma que el archivo no fue modificado o infectado durante la descarga.'
  },
  {
    id: '2',
    texto: 'Uso VirusTotal para analizar archivos sospechosos antes de ejecutarlos.',
    categoria: 'Análisis',
    enfoque: 'VirusTotal escanea con más de 70 antivirus y te dice si el archivo es malicioso.'
  },
  {
    id: '3',
    texto: 'Reviso la firma digital de los programas para verificar que provienen del desarrollador legítimo.',
    categoria: 'Firmas Digitales',
    enfoque: 'Una firma válida indica que el software no fue alterado desde que fue firmado.'
  },
  {
    id: '4',
    texto: 'Desconfío de archivos con doble extensión (ej: "foto.jpg.exe") o extensiones peligrosas inesperadas.',
    categoria: 'Extensiones',
    enfoque: 'Los malware suelen disfrazarse con doble extensión para parecer inofensivos.'
  },
  {
    id: '5',
    texto: 'No ejecuto archivos de correos o descargas sin antes escanearlos con el antivirus local.',
    categoria: 'Prevención',
    enfoque: 'El antivirus local es la primera línea de defensa contra archivos infectados.'
  }
];

export const ARCHIVOS_SOSPECHOSOS: ArchivoSospechoso[] = [
  {
    id: 'arch1',
    nombre: 'foto_vacaciones.jpg',
    descripcion: 'Imagen recibida por WhatsApp de un contacto conocido. Pesa 3.5 MB.',
    esSospechoso: false,
    explicacion: 'Una imagen JPG normal enviada por un contacto de confianza. Aunque siempre es bueno escanear, el riesgo es bajo.'
  },
  {
    id: 'arch2',
    nombre: 'foto_vacaciones.jpg.exe',
    descripcion: 'Archivo descargado de un enlace en un foro. Tiene doble extensión y pide permisos de administrador.',
    esSospechoso: true,
    explicacion: 'Doble extensión (.jpg.exe) es una táctica clásica para ocultar un ejecutable malicioso. Nunca lo abras.'
  },
  {
    id: 'arch3',
    nombre: 'documento_tarea.pdf',
    descripcion: 'PDF enviado por tu profesor a través del aula virtual oficial del liceo.',
    esSospechoso: false,
    explicacion: 'Un PDF de una fuente institucional confiable. Bajo riesgo, aunque conviene mantener el antivirus activo.'
  },
  {
    id: 'arch4',
    nombre: 'activador_minecraft.exe',
    descripcion: 'Descargado de un video de YouTube que promete "Minecraft gratis". Pesa 700 KB y no tiene firma digital.',
    esSospechoso: true,
    explicacion: 'Archivo ejecutable de fuente no oficial, sin firma digital. Es muy probable que sea malware.'
  },
  {
    id: 'arch5',
    nombre: 'setup_zoom.exe',
    descripcion: 'Descargado directamente desde zoom.us (sitio oficial). Tiene firma digital de Zoom Video Communications.',
    esSospechoso: false,
    explicacion: 'Proviene del sitio oficial y tiene firma digital válida. Es seguro de instalar.'
  }
];

export const ESCENARIOS_ARCHIVO: EscenarioArchivo[] = [
  {
    id: 'esc1',
    titulo: 'Verificación de hash',
    descripcion: 'Descargaste un programa desde su sitio oficial. La página muestra un hash SHA-256: "3a7b..." ¿Qué debes hacer?',
    opciones: [
      'Ignorar el hash, no sirve para nada',
      'Calcular el hash del archivo descargado y compararlo con el oficial',
      'Compartir el hash en redes sociales'
    ],
    opcionCorrecta: 1,
    explicacion: 'Comparar el hash garantiza que el archivo no fue alterado ni infectado. Puedes usar comandos como certutil en Windows o sha256sum en Linux.'
  },
  {
    id: 'esc2',
    titulo: 'Archivo con doble extensión',
    descripcion: 'Te llega un correo con un adjunto llamado "factura.pdf.exe". ¿Qué haces?',
    opciones: [
      'Abrirlo para ver la factura',
      'No abrirlo y eliminarlo. Es malware disfrazado.',
      'Reenviarlo a un amigo para que lo revise'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los archivos .exe son ejecutables. La doble extensión es una trampa para que pienses que es un PDF.'
  },
  {
    id: 'esc3',
    titulo: 'Uso de VirusTotal',
    descripcion: 'Tienes un archivo sospechoso y quieres saber si es seguro. ¿Qué herramienta usas?',
    opciones: [
      'VirusTotal (virustotal.com) para escanearlo con múltiples antivirus',
      'Abrirlo y ver qué pasa',
      'Preguntar en un foro'
    ],
    opcionCorrecta: 0,
    explicacion: 'VirusTotal analiza el archivo con más de 70 motores antivirus y te da un veredicto rápido.'
  }
];

export const VIDEOS_SOFTWARE_3RO: VideoSoftware3ro[] = [
  {
    id: 'v1',
    titulo: 'Cómo usar VirusTotal para analizar archivos',
    url: 'https://www.youtube.com/embed/virustotal3ro1',
    descripcion: 'Tutorial paso a paso para escanear archivos y URLs en busca de malware.'
  },
  {
    id: 'v2',
    titulo: 'Qué es un hash y cómo verificar descargas',
    url: 'https://www.youtube.com/embed/hash3ro2',
    descripcion: 'Aprende a calcular el hash de un archivo y compararlo para garantizar su integridad.'
  },
  {
    id: 'v3',
    titulo: 'Firmas digitales: cómo saber si un programa es legítimo',
    url: 'https://www.youtube.com/embed/firmas3ro3',
    descripcion: 'Identifica la firma digital de un ejecutable y verifica su autenticidad.'
  }
];

export const PREGUNTAS_SOFTWARE_3RO: PreguntaSoftware3ro[] = [
  {
    id: 1,
    pregunta: '¿Qué es un hash de un archivo?',
    opciones: [
      'Una huella digital única que identifica el contenido del archivo',
      'Una contraseña del archivo',
      'Un tipo de virus'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Un hash es una cadena generada por un algoritmo (MD5, SHA-256) que cambia si el archivo es modificado. Sirve para verificar integridad.'
  },
  {
    id: 2,
    pregunta: '¿Qué es VirusTotal?',
    opciones: [
      'Un antivirus de pago',
      'Un servicio en línea que escanea archivos y URLs con múltiples antivirus',
      'Un sistema operativo'
    ],
    respuestaCorrecta: 1,
    explicacion: 'VirusTotal es gratuito y analiza archivos/URLs con más de 70 motores antivirus. No reemplaza al antivirus local, pero es excelente para análisis puntual.'
  },
  {
    id: 3,
    pregunta: '¿Qué indica una firma digital válida en un programa?',
    opciones: [
      'Que el programa es gratuito',
      'Que el software no fue alterado desde que el desarrollador lo firmó',
      'Que el programa no tiene errores'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La firma digital verifica la autenticidad e integridad del software. Si es inválida o no existe, sospecha.'
  },
  {
    id: 4,
    pregunta: '¿Por qué es peligrosa una doble extensión como "foto.jpg.exe"?',
    opciones: [
      'Porque oculta un ejecutable malicioso haciéndolo pasar por una imagen',
      'Porque las imágenes con doble extensión son más pesadas',
      'Porque no se puede abrir'
    ],
    respuestaCorrecta: 0,
    explicacion: 'El sistema ejecutará el archivo .exe, no mostrará una imagen. Es una táctica clásica de malware.'
  }
];

// ========== HOOK ==========

export const useSoftwarePirata3ro = () => {
  // Laboratorio de archivos sospechosos
  const [respuestasArchivo, setRespuestasArchivo] = useState<Record<string, boolean>>({});
  const evaluarArchivo = (id: string, esSospechoso: boolean) => {
    setRespuestasArchivo(prev => ({ ...prev, [id]: esSospechoso }));
  };

  // Escenarios de archivos
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_ARCHIVO.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_SOFTWARE_3RO.length;
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
    PREGUNTAS_SOFTWARE_3RO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_SOFTWARE_3RO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    archivos: ARCHIVOS_SOSPECHOSOS,
    respuestasArchivo,
    evaluarArchivo,
    escenarios: ESCENARIOS_ARCHIVO,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_SOFTWARE_3RO,
    preguntasQuiz: PREGUNTAS_SOFTWARE_3RO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};