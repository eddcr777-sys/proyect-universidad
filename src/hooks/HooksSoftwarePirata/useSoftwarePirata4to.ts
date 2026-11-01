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
    texto: 'Tengo activada la opción "Extensiones de nombre de archivo" en Windows para ver siempre el formato real.',
    categoria: 'Configuración del Sistema',
    enfoque: 'Windows oculta las extensiones por defecto. Mostrarlas te permite descubrir virus camuflados al instante.'
  },
  {
    id: '2',
    texto: 'Verifico siempre la extensión final de cada descarga antes de hacer doble clic (.pdf frente a .pdf.exe).',
    categoria: 'Inspección de Archivos',
    enfoque: 'La última extensión determina cómo actuará el archivo en tu sistema operativo.'
  },
  {
    id: '3',
    texto: 'Sé que extensiones como .exe, .bat, .vbs, .msi o .iso ejecutan código directo en mi computadora.',
    categoria: 'Formatos Ejecutables',
    enfoque: 'Un archivo de datos (documento, foto) nunca necesita ser un ejecutable para abrirse.'
  },
  {
    id: '4',
    texto: 'No abro archivos ejecutables contenidos dentro de archivos .zip o .rar de procedencia dudosa.',
    categoria: 'Archivos Comprimidos',
    enfoque: 'Los ciberdelincuentes comprimen virus en .zip para saltarse los filtros automáticos de correo.'
  },
  {
    id: '5',
    texto: 'Desconfío de iconos que imitan documentos de Word o PDF cuando el archivo es de tipo "Aplicación".',
    categoria: 'Detección Visual',
    enfoque: 'Cualquier ejecutable malicioso puede incorporar el icono gráfico de un lector de PDF.'
  }
];

export const CASOS_LEGALES: CasoLegal[] = [
  {
    id: 'caso1',
    titulo: 'factura_pago.pdf.exe',
    descripcion: 'Un correo adjunta un archivo con icono rojo de Adobe Reader, pero en sus propiedades termina en .pdf.exe.',
    esDelito: true,
    explicacion: '¡Peligro! Es un ejecutable camuflado con la técnica de la doble extensión. La verdadera extensión es .exe y ejecutará malware.'
  },
  {
    id: 'caso2',
    titulo: 'guia_matematica.pdf',
    descripcion: 'Descargas una guía de estudio desde el aula virtual oficial del liceo en formato PDF genuino.',
    esDelito: false,
    explicacion: 'Es un formato de documento de datos seguro (.pdf) proveniente de una fuente escolar confiable.'
  },
  {
    id: 'caso3',
    titulo: 'cancion_favorita.mp3.bat',
    descripcion: 'Bajas una canción desde una web de descargas no oficial. Muestra un icono de nota musical pero termina en .bat.',
    esDelito: true,
    explicacion: '¡Peligro! La extensión .bat corresponde a un archivo por lotes (Batch) que ejecuta comandos directos en tu computadora.'
  },
  {
    id: 'caso4',
    titulo: 'foto_promocion.png',
    descripcion: 'Una fotografía de la actividad escolar compartida por tu profesor en formato de imagen PNG.',
    esDelito: false,
    explicacion: 'Es un formato de imagen estándar (.png). Los formatos de imagen limpios son datos de visualización, no ejecutables.'
  },
  {
    id: 'caso5',
    titulo: 'presentacion_ciencias.pptx.vbs',
    descripcion: 'Un supuesto archivo de diapositivas enviado por mensajería que termina en extensión .vbs.',
    esDelito: true,
    explicacion: '¡Peligro! Los archivos .vbs son scripts de Visual Basic que ejecutan acciones automáticas dañinas en segundo plano.'
  }
];

export const ESCENARIOS_LEGALES: EscenarioLegal[] = [
  {
    id: 'esc1',
    titulo: 'Extensiones ocultas en Windows',
    descripcion: 'Acabas de recibir una computadora y notas que los archivos solo dicen "tarea" sin el ".pdf". ¿Cómo proteges tu equipo?',
    opciones: [
      'Dejarlo así, es más cómodo ver solo los nombres cortos',
      'Ir a "Vista" en el Explorador de Archivos y marcar "Extensiones de nombre de archivo"',
      'Renombrar los archivos escribiendo cualquier extensión al azar'
    ],
    opcionCorrecta: 1,
    explicacion: 'Habilitar las extensiones de nombre de archivo te permite ver el formato real de cada archivo y neutralizar virus con nombres dobles.'
  },
  {
    id: 'esc2',
    titulo: 'La trampa del icono cambiado',
    descripcion: 'Descargas un trabajo escolar que tiene el icono azul de Microsoft Word, pero al colocar el cursor encima dice "Tipo: Aplicación". ¿Qué haces?',
    opciones: [
      'Hacer doble clic rápido para abrir el documento',
      'Eliminarlo de inmediato sin abrirlo porque es un ejecutable disfrazado',
      'Reenviarlo al grupo de WhatsApp del liceo para ver si a otros les abre'
    ],
    opcionCorrecta: 1,
    explicacion: 'Si dice "Tipo: Aplicación" (.exe) y no "Documento de Word" (.docx), se trata de un programa malicioso con icono falsificado.'
  },
  {
    id: 'esc3',
    titulo: 'Archivo comprimido sospechoso',
    descripcion: 'Un desconocido en internet te envía un archivo "juego_gratis.zip". Al descomprimirlo, solo hay un archivo "instalar.scr". ¿Qué decisión tomas?',
    opciones: [
      'Ejecutarlo, porque .scr es un archivo seguro de fotos',
      'No ejecutarlo; la extensión .scr es un ejecutable (antiguos salvapantallas) frecuentemente usado para infectar',
      'Cambiarle el nombre a .mp3 para escucharlo'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los archivos .scr son ejecutables de Windows que corren código directamente. Es una trampa muy común de malware.'
  },
  {
    id: 'esc4',
    titulo: 'Aviso de descarga del navegador',
    descripcion: 'Bajas una plantilla para PowerPoint y el navegador web te muestra la alerta: "Este tipo de archivo (.exe) puede dañar tu dispositivo". ¿Por qué aparece?',
    opciones: [
      'Porque una presentación real nunca debe ser un ejecutable (.exe), sino .pptx; la descarga es engañosa',
      'Porque tu navegador tiene un error y no reconoce PowerPoint',
      'Porque el archivo pesa muchos megabytes'
    ],
    opcionCorrecta: 0,
    explicacion: 'Los navegadores alertan cuando un enlace promete un documento pero entrega un ejecutable (.exe). Es una señal inequívoca de fraude.'
  }
];

export const VIDEOS_SOFTWARE_4TO: VideoSoftware4to[] = [
  {
    id: 'v1',
    titulo: 'Cómo mostrar extensiones ocultas en Windows',
    url: 'https://www.youtube.com/embed/extensiones4to1',
    descripcion: 'Tutorial para activar la visualización de extensiones reales y evitar ser engañado por iconos falsos.'
  },
  {
    id: 'v2',
    titulo: 'Diferencia entre archivos de datos y ejecutables',
    url: 'https://www.youtube.com/embed/formatos4to2',
    descripcion: 'Conoce por qué los archivos .exe, .bat y .vbs requieren máxima precaución antes de abrirse.'
  },
  {
    id: 'v3',
    titulo: 'La técnica de la doble extensión explicada',
    url: 'https://www.youtube.com/embed/dobleextension4to3',
    descripcion: 'Cómo los ciberdelincuentes ocultan malware tras nombres como archivo.pdf.exe.'
  }
];

export const PREGUNTAS_SOFTWARE_4TO: PreguntaSoftware4to[] = [
  {
    id: 1,
    pregunta: '¿Para qué sirve la extensión de un archivo informático?',
    opciones: [
      'Indica el formato real del archivo y le dice al sistema operativo cómo debe procesarlo',
      'Solo sirve como adorno visual para el usuario',
      'Es una clave de seguridad que bloquea el archivo'
    ],
    respuestaCorrecta: 0,
    explicacion: 'La extensión (.pdf, .png, .exe) define si el archivo contiene datos de lectura o instrucciones ejecutables.'
  },
  {
    id: 2,
    pregunta: '¿Por qué los ciberdelincuentes usan nombres con doble extensión como "tarea.pdf.exe"?',
    opciones: [
      'Para que el archivo pese la mitad en el disco duro',
      'Para aprovechar que Windows oculta la extensión final y hacer creer que es un PDF inofensivo',
      'Para que el archivo funcione tanto en Windows como en Android'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Al estar ocultas las extensiones, el usuario solo lee "tarea.pdf" y no percibe el ".exe" final que ejecuta el virus.'
  },
  {
    id: 3,
    pregunta: '¿Cuál de las siguientes extensiones representa un archivo de datos seguro que NO ejecuta código por sí mismo?',
    opciones: [
      '.png (Imagen gráfica)',
      '.bat (Archivo por lotes)',
      '.exe (Archivo ejecutable)'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Los formatos como .png, .jpg y .mp3 son archivos de datos pasivos; no son programas ejecutables.'
  },
  {
    id: 4,
    pregunta: '¿Qué acción de seguridad básica debes realizar en tu computadora para evitar ser engañado por extensiones falsas?',
    opciones: [
      'Activar la opción "Extensiones de nombre de archivo" en la pestaña Vista del Explorador',
      'Desconectar el teclado y ratón durante las descargas',
      'Instalar tres antivirus diferentes simultáneamente'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Activar las extensiones visibles en el sistema operativo es la primera regla de oro para identificar ejecutables maliciosos.'
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