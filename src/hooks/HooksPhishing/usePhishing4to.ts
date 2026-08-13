import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface CorreoSimulado4to {
  id: number;
  remitente: string;
  asunto: string;
  contenido: string;
  encabezados: {
    spf: string;
    dkim: string;
    dmarc: string;
  };
  urlIncluida: string;
  esPhishing: boolean;
  tipoPhishing: string;
  explicacion: string;
}

export interface UrlAnalisis {
  id: number;
  url: string;
  dominioOficial: string;
  esLegitima: boolean;
  explicacion: string;
}

export interface PreguntaPhishing4to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const CORREOS_4TO: CorreoSimulado4to[] = [
  {
    id: 1,
    remitente: "Soporte PayPal <service@paypal.com>",
    asunto: "Actualización de seguridad requerida",
    contenido: "Estimado usuario, su cuenta requiere verificación inmediata. Haga clic en el siguiente enlace para completar el proceso: http://paypal.com.verify-account.security-check.info/login",
    encabezados: {
      spf: "PASS (remitente autorizado por paypal.com)",
      dkim: "PASS (firma válida)",
      dmarc: "PASS (política de paypal.com)"
    },
    urlIncluida: "http://paypal.com.verify-account.security-check.info/login",
    esPhishing: true,
    tipoPhishing: "Phishing con dominio homógrafo",
    explicacion: "Aunque los encabezados parecen legítimos, la URL es un claro ejemplo de typosquatting. El dominio real es 'security-check.info', no paypal.com. Los encabezados no garantizan que el enlace sea seguro."
  },
  {
    id: 2,
    remitente: "Google <no-reply@accounts.google.com>",
    asunto: "Alerta de seguridad: nuevo inicio de sesión",
    contenido: "Detectamos un nuevo inicio de sesión en tu cuenta desde un dispositivo desconocido. Si fuiste tú, ignora este mensaje. Si no, revisa la actividad reciente en tu cuenta de Google.",
    encabezados: {
      spf: "PASS",
      dkim: "PASS",
      dmarc: "PASS"
    },
    urlIncluida: "https://myaccount.google.com/notifications",
    esPhishing: false,
    tipoPhishing: "Mensaje legítimo",
    explicacion: "Es un correo legítimo de Google. Los encabezados SPF, DKIM y DMARC pasan, el enlace lleva al dominio oficial y no se solicitan credenciales por correo."
  },
  {
    id: 3,
    remitente: "Banco Mercantil <notificaciones@bancomercantil.com>",
    asunto: "Su token ha caducado",
    contenido: "Su dispositivo de seguridad ha caducado. Actualícelo ingresando a: http://bancomercantil.com.activar-token.info/verificacion",
    encabezados: {
      spf: "FAIL (el servidor de envío no está autorizado)",
      dkim: "FAIL (firma no coincide)",
      dmarc: "FAIL (la política de bancomercantil.com no autoriza este correo)"
    },
    urlIncluida: "http://bancomercantil.com.activar-token.info/verificacion",
    esPhishing: true,
    tipoPhishing: "Phishing con SPF/DKIM fallidos",
    explicacion: "Los encabezados SPF, DKIM y DMARC fallan, lo que indica que el correo no proviene del banco. Además, la URL es sospechosa con dominio .info y subdominios engañosos."
  },
  {
    id: 4,
    remitente: "Netflix <info@netflix.com>",
    asunto: "Factura disponible",
    contenido: "Estimado cliente, su factura mensual está disponible. Puede verla en su cuenta: https://www.netflix.com/account/billing",
    encabezados: {
      spf: "PASS",
      dkim: "PASS",
      dmarc: "PASS"
    },
    urlIncluida: "https://www.netflix.com/account/billing",
    esPhishing: false,
    tipoPhishing: "Mensaje legítimo",
    explicacion: "Correo legítimo. Los encabezados pasan, el enlace es oficial y no se solicitan datos personales por correo."
  }
];

export const URLS_ANALISIS: UrlAnalisis[] = [
  {
    id: 1,
    url: "http://instagram.com.verify-account.xyz/login",
    dominioOficial: "instagram.com",
    esLegitima: false,
    explicacion: "El dominio real es 'verify-account.xyz', no Instagram. El 'instagram.com' es solo un subdominio. Es phishing."
  },
  {
    id: 2,
    url: "https://www.facebook.com/help/contact/123456",
    dominioOficial: "facebook.com",
    esLegitima: true,
    explicacion: "El dominio es facebook.com y la ruta /help/ es legítima. Pertenece a Facebook."
  },
  {
    id: 3,
    url: "http://bit.ly/3xYz9Lm",
    dominioOficial: "desconocido (enlace acortado)",
    esLegitima: false,
    explicacion: "Los enlaces acortados ocultan el destino real. Nunca confíes en ellos sin antes expandirlos con herramientas como CheckShortURL o VirusTotal."
  },
  {
    id: 4,
    url: "https://accounts.google.com/signin/v2/identifier",
    dominioOficial: "google.com",
    esLegitima: true,
    explicacion: "El dominio es accounts.google.com, subdominio oficial de Google para inicio de sesión."
  },
  {
    id: 5,
    url: "http://paypal.com-cgi-bin.webscrcmd.com/login",
    dominioOficial: "paypal.com",
    esLegitima: false,
    explicacion: "El dominio real es 'webscrcmd.com', no PayPal. El 'paypal.com-cgi-bin' es un subdominio para engañar."
  }
];

export const PREGUNTAS_PHISHING_4TO: PreguntaPhishing4to[] = [
  {
    id: 1,
    pregunta: '¿Qué significa que un correo tenga SPF FAIL en sus encabezados?',
    opciones: [
      'Que el servidor que envió el correo no está autorizado por el dominio del remitente',
      'Que el correo es legítimo',
      'Que el antivirus lo bloqueó'
    ],
    respuestaCorrecta: 0,
    explicacion: 'SPF (Sender Policy Framework) verifica si el servidor de envío está autorizado. Si falla, es una señal fuerte de phishing.'
  },
  {
    id: 2,
    pregunta: '¿Cuál es la forma correcta de analizar una URL acortada antes de hacer clic?',
    opciones: [
      'Hacer clic y ver a dónde lleva',
      'Usar un expansor de enlaces como CheckShortURL o VirusTotal para revelar el destino',
      'Copiar y pegar en el navegador'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los expansores de enlaces permiten ver la URL real sin visitarla, evitando el riesgo de infección.'
  },
  {
    id: 3,
    pregunta: '¿Qué es el typosquatting o suplantación de dominio?',
    opciones: [
      'Crear un dominio con una falta de ortografía o estructura similar al original para engañar',
      'Un ataque de denegación de servicio',
      'Un tipo de firewall'
    ],
    respuestaCorrecta: 0,
    explicacion: 'El typosquatting consiste en registrar dominios parecidos (ej: facebok.com, gogle.com) para engañar a los usuarios.'
  },
  {
    id: 4,
    pregunta: '¿Qué herramienta en línea te permite analizar una URL o archivo sospechoso con múltiples antivirus?',
    opciones: [
      'VirusTotal',
      'Google Maps',
      'Instagram'
    ],
    respuestaCorrecta: 0,
    explicacion: 'VirusTotal analiza URLs y archivos con más de 70 motores antivirus y muestra si es malicioso.'
  }
];

// ========== HOOK ==========

export const usePhishing4to = () => {
  // Simulador de correos con encabezados
  const [respuestasCorreos, setRespuestasCorreos] = useState<Record<number, boolean>>({});
  const evaluarCorreo = (id: number, eleccionUsuario: boolean) => {
    setRespuestasCorreos(prev => ({ ...prev, [id]: eleccionUsuario }));
  };

  // Análisis de URLs
  const [respuestasUrl, setRespuestasUrl] = useState<Record<number, boolean>>({});
  const evaluarUrl = (id: number, esLegitima: boolean) => {
    setRespuestasUrl(prev => ({ ...prev, [id]: esLegitima }));
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
    PREGUNTAS_PHISHING_4TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_PHISHING_4TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    correos: CORREOS_4TO,
    respuestasCorreos,
    evaluarCorreo,
    urls: URLS_ANALISIS,
    respuestasUrl,
    evaluarUrl,
    preguntasQuiz: PREGUNTAS_PHISHING_4TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};