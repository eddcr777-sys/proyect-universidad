import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface MensajeSimulado3ro {
  id: number;
  remitente: string;
  canal: string;
  asunto: string;
  contenido: string;
  esPhishing: boolean;
  tipoPhishing: string;
  explicacion: string;
}

export interface SenalAvanzada3ro {
  id: string;
  texto: string;
  categoria: string;
  ejemplo: string;
}

export interface PreguntaPhishing3ro {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const MENSAJES_3RO: MensajeSimulado3ro[] = [
  {
    id: 1,
    remitente: "Banco Nacional <alertas@bancoseguro-verifica.net>",
    canal: "SMS",
    asunto: "Tu cuenta fue bloqueada temporalmente",
    contenido: "Sr/a cliente, por actividad inusual su cuenta ha sido suspendida. Verifique su identidad en: http://bancoseguro-verifica.net/activar",
    esPhishing: true,
    tipoPhishing: "Smishing (SMS falso)",
    explicacion: "Es smishing. Los bancos nunca envían enlaces para verificar identidad por SMS. El dominio no es oficial y contiene guiones."
  },
  {
    id: 2,
    remitente: "+1 800 555 0199 (Llamada telefónica)",
    canal: "Llamada (Vishing)",
    asunto: "Soporte Técnico de Microsoft",
    contenido: "Hola, soy de Microsoft. Hemos detectado un virus grave en su computadora. Necesito que descargue un programa de acceso remoto para limpiarla.",
    esPhishing: true,
    tipoPhishing: "Vishing (llamada falsa)",
    explicacion: "Es vishing. Microsoft u otras empresas nunca llaman sin previo aviso para pedir acceso remoto. Es una estafa clásica."
  },
  {
    id: 3,
    remitente: "Compañero de clase <juan.perez@correo-liceo.edu.ve>",
    canal: "Correo Electrónico",
    asunto: "Tarea de matemáticas - archivo adjunto",
    contenido: "Hola, te envío la tarea que me pediste. Ábrela y me dices si está bien. Adjunto: tarea_final.exe",
    esPhishing: true,
    tipoPhishing: "Archivo adjunto malicioso",
    explicacion: "Un .exe adjunto de un correo no solicitado es muy peligroso. Aunque parezca de un compañero, su cuenta pudo ser hackeada. Nunca abras ejecutables inesperados."
  },
  {
    id: 4,
    remitente: "Servicio de Paquetería MRW <envios@mrw.com.ve>",
    canal: "Correo Electrónico",
    asunto: "Tu paquete está retenido en aduana",
    contenido: "Estimado cliente, su paquete tiene un cargo pendiente de $2.50. Haga clic aquí para pagar y recibir su envío: http://mrw-pagos.info/rastreo",
    esPhishing: true,
    tipoPhishing: "Phishing de paquetería",
    explicacion: "Es phishing. El dominio no es oficial y piden un pago pequeño para robar tus datos bancarios. Verifica siempre en la web oficial de la empresa."
  },
  {
    id: 5,
    remitente: "Coordinación Académica <coordinacion@liceo.edu.ve>",
    canal: "Correo Institucional",
    asunto: "Reunión de representantes - Confirmación",
    contenido: "Estimado representante, le recordamos la reunión del próximo jueves a las 5 pm en el auditorio. No es necesario responder. Gracias.",
    esPhishing: false,
    tipoPhishing: "Mensaje seguro",
    explicacion: "Mensaje legítimo. Proviene de un dominio institucional, no pide datos personales ni enlaces sospechosos, y no genera urgencia."
  }
];

export const SENALES_AVANZADAS_3RO: SenalAvanzada3ro[] = [
  {
    id: 'senal1',
    texto: 'Inspecciono los enlaces pasando el cursor sin hacer clic para ver la URL real.',
    categoria: 'Inspección',
    ejemplo: 'Si al pasar el cursor ves http://bancoseguro-verifica.net en lugar de bancoseguro.com, es falso.'
  },
  {
    id: 'senal2',
    texto: 'No confío en llamadas no solicitadas que piden acceso remoto o datos personales.',
    categoria: 'Vishing',
    ejemplo: 'Un supuesto técnico de Microsoft pide instalar TeamViewer o AnyDesk.'
  },
  {
    id: 'senal3',
    texto: 'Nunca abro archivos adjuntos inesperados, especialmente .exe, .scr, .bat o documentos con macros.',
    categoria: 'Adjuntos',
    ejemplo: 'Un .exe disfrazado de tarea o factura puede ser un troyano.'
  },
  {
    id: 'senal4',
    texto: 'Verifico dominios usando herramientas como VirusTotal o URLVoid cuando tengo dudas.',
    categoria: 'Verificación',
    ejemplo: 'Subir la URL sospechosa a virustotal.com para ver si es maliciosa.'
  },
  {
    id: 'senal5',
    texto: 'Reviso el remitente real en el encabezado del correo, no solo el nombre visible.',
    categoria: 'Remitente',
    ejemplo: 'El nombre dice "Banco Nacional" pero el correo es alertas@bancoseguro-verifica.net.'
  }
];

export const PREGUNTAS_PHISHING_3RO: PreguntaPhishing3ro[] = [
  {
    id: 1,
    pregunta: '¿Qué es smishing?',
    opciones: [
      'Phishing por correo electrónico',
      'Phishing por SMS o mensajes de texto',
      'Phishing por llamadas telefónicas'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Smishing es phishing a través de SMS o mensajes de texto. Vishing es por llamadas de voz.'
  },
  {
    id: 2,
    pregunta: 'Recibes una llamada de "Soporte Técnico de Microsoft" diciendo que tu PC tiene un virus. ¿Qué haces?',
    opciones: [
      'Sigues sus instrucciones para limpiar la PC',
      'Cuelgas y llamas tú directamente al soporte oficial de Microsoft',
      'Le das acceso remoto para que revise'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Nunca des acceso remoto a desconocidos. Cuelga y contacta al soporte oficial por tus propios medios.'
  },
  {
    id: 3,
    pregunta: '¿Cuál es la forma correcta de inspeccionar un enlace antes de hacer clic?',
    opciones: [
      'Hacer clic y ver a dónde lleva',
      'Pasar el cursor sobre el enlace y observar la URL en la parte inferior del navegador',
      'Copiar y pegar el enlace en un documento'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Pasar el cursor (hover) muestra la URL real en la barra de estado o tooltip del navegador. Así detectas destinos falsos.'
  }
];

// ========== HOOK ==========

export const usePhishing3ro = () => {
  // Simulador de mensajes
  const [respuestasMensajes, setRespuestasMensajes] = useState<Record<number, boolean>>({});
  const evaluarMensaje = (id: number, eleccionUsuario: boolean) => {
    setRespuestasMensajes(prev => ({ ...prev, [id]: eleccionUsuario }));
  };

  // Checklist de señales avanzadas
  const [senalesComprobadas, setSenalesComprobadas] = useState<Record<string, boolean>>({});
  const toggleSenal = (id: string) => {
    setSenalesComprobadas(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalSenales = SENALES_AVANZADAS_3RO.length;
  const senalesCompletadas = Object.values(senalesComprobadas).filter(Boolean).length;
  const porcentajeSenales = Math.round((senalesCompletadas / totalSenales) * 100);

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
    PREGUNTAS_PHISHING_3RO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_PHISHING_3RO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    mensajes: MENSAJES_3RO,
    respuestasMensajes,
    evaluarMensaje,
    senales: SENALES_AVANZADAS_3RO,
    senalesComprobadas,
    toggleSenal,
    totalSenales,
    senalesCompletadas,
    porcentajeSenales,
    preguntasQuiz: PREGUNTAS_PHISHING_3RO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};