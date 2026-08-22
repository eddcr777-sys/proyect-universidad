import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoVideojuegos5to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface EscenarioValorMonetario {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface ReporteCaso {
  id: string;
  titulo: string;
  descripcion: string;
  esReportable: boolean;
  explicacion: string;
}

export interface VideoJuegos5to {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaVideojuegos5to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_VIDEOJUEGOS_5TO: HabitoVideojuegos5to[] = [
  {
    id: '1',
    texto: 'Uso métodos de pago seguros (tarjetas virtuales, supervisión de un adulto) para compras en juegos.',
    categoria: 'Compras Seguras',
    enfoque: 'Evita el robo de datos bancarios y cargos no autorizados.'
  },
  {
    id: '2',
    texto: 'Nunca compro cuentas de juegos con diamantes o skins a través de redes sociales o foros.',
    categoria: 'Compra de Cuentas',
    enfoque: 'La compra de cuentas es ilegal, arriesgada y puede ser una estafa.'
  },
  {
    id: '3',
    texto: 'Sé cómo reportar a un jugador tóxico o que me acosa en el juego.',
    categoria: 'Denuncia',
    enfoque: 'Las plataformas tienen herramientas para reportar abuso y mantener comunidades sanas.'
  },
  {
    id: '4',
    texto: 'He leído los términos de servicio de mis juegos favoritos para saber qué es baneable.',
    categoria: 'Políticas',
    enfoque: 'Desconocer las reglas no te exime de cumplirlas; evita sanciones.'
  },
  {
    id: '5',
    texto: 'Valoro mi cuenta de juego como un activo digital y la protejo con 2FA y contraseñas fuertes.',
    categoria: 'Activo Digital',
    enfoque: 'Las cuentas con skins o niveles altos tienen valor monetario real y son objetivo de ladrones.'
  }
];

export const ESCENARIOS_VALOR_MONETARIO: EscenarioValorMonetario[] = [
  {
    id: 'esc1',
    titulo: 'Compra de una cuenta con skins legendarias',
    descripcion: 'En Instagram te ofrecen una cuenta de Free Fire con muchas skins legendarias a mitad de precio. Solo debes pagar por transferencia y te darán la contraseña. ¿Qué haces?',
    opciones: [
      'Pago, es una gran oferta',
      'No compro. La venta de cuentas es contra las normas y probablemente sea estafa.',
      'Pido más fotos de la cuenta'
    ],
    opcionCorrecta: 1,
    explicacion: 'Comprar cuentas viola los términos de servicio y es un riesgo: puedes perder el dinero o que la cuenta sea recuperada por el dueño original.'
  },
  {
    id: 'esc2',
    titulo: 'Te ofrecen ser "socio" de un torneo',
    descripcion: 'Un jugador te dice que inviertas $20 en un torneo de eSports con premios enormes. Te pide los datos de tu tarjeta para inscribirte. ¿Qué haces?',
    opciones: [
      'Le paso mis datos, quiero participar',
      'No le doy nada. Verifico si el torneo es oficial y nunca comparto datos bancarios con desconocidos.',
      'Le pregunto si tiene referencias'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los torneos legítimos no piden datos de tarjeta por mensajes privados. Es una estafa de phishing financiero.'
  },
  {
    id: 'esc3',
    titulo: 'Recibes un código de regalo falso',
    descripcion: 'Un "amigo" te envía un enlace para canjear un "código de regalo" de diamantes. Al entrar, la página pide tu contraseña y número de tarjeta para "verificar". ¿Qué haces?',
    opciones: [
      'Ingreso mis datos, es un regalo',
      'No ingreso nada. Es una página de phishing que robará mis datos.',
      'Le pregunto a mi amigo si es seguro'
    ],
    opcionCorrecta: 1,
    explicacion: 'Ningún código de regalo legítimo pide contraseñas ni datos bancarios. Es phishing clásico.'
  },
  {
    id: 'esc4',
    titulo: 'Vender tu cuenta',
    descripcion: 'Quieres vender tu cuenta de Roblox con muchos Robux. Un comprador te ofrece dinero por PayPal. ¿Qué haces?',
    opciones: [
      'Acepto, es mi cuenta y puedo venderla',
      'No la vendo. Es contra las normas, puede ser estafa y perdería mi cuenta permanentemente.',
      'Le pido que me pague primero'
    ],
    opcionCorrecta: 1,
    explicacion: 'Vender cuentas viola los términos de servicio. Además, el comprador podría estafarte o robar tus datos.'
  }
];

export const REPORTES_CASOS: ReporteCaso[] = [
  {
    id: 'caso1',
    titulo: 'Jugador insulta y amenaza en el chat',
    descripcion: 'Durante una partida, un jugador te insulta, usa lenguaje ofensivo y te amenaza.',
    esReportable: true,
    explicacion: 'El lenguaje abusivo y las amenazas son reportables en todas las plataformas. Usa la función de reporte y bloquea al jugador.'
  },
  {
    id: 'caso2',
    titulo: 'Un jugador usa un mod de ventaja (hack)',
    descripcion: 'Ves a un jugador con apuntado automático (aimbot) o wallhack en una partida de Blood Strike.',
    esReportable: true,
    explicacion: 'El uso de hacks es baneable. Reporta al jugador con evidencia (video o captura) si es posible.'
  },
  {
    id: 'caso3',
    titulo: 'Un jugador es muy bueno y te gana',
    descripcion: 'Un rival te elimina con mucha habilidad y gana la partida. No hay evidencia de trampa.',
    esReportable: false,
    explicacion: 'Ser hábil no es un delito. Reportar sin motivo puede ser considerado abuso del sistema de reportes.'
  },
  {
    id: 'caso4',
    titulo: 'Un "amigo" te pide tu contraseña',
    descripcion: 'Un usuario en el juego te dice que es administrador y te pide tu contraseña para "darte un premio".',
    esReportable: true,
    explicacion: 'Es un intento de robo de cuenta. Reporta al usuario y nunca compartas tus credenciales.'
  }
];

export const VIDEOS_VIDEOJUEGOS_5TO: VideoJuegos5to[] = [
  {
    id: 'v1',
    titulo: 'Cómo proteger cuentas con valor monetario en juegos',
    url: 'https://www.youtube.com/embed/ejemplo5to1',
    descripcion: 'Estrategias para asegurar cuentas con skins, diamantes o niveles altos.'
  },
  {
    id: 'v2',
    titulo: 'Cómo reportar jugadores tóxicos en Free Fire, Roblox y más',
    url: 'https://www.youtube.com/embed/ejemplo5to2',
    descripcion: 'Guía práctica para denunciar acoso, hacks y comportamiento abusivo.'
  },
  {
    id: 'v3',
    titulo: 'Compras seguras en videojuegos',
    url: 'https://www.youtube.com/embed/ejemplo5to3',
    descripcion: 'Cómo evitar estafas al comprar monedas, skins o pases de batalla.'
  }
];

export const PREGUNTAS_VIDEOJUEGOS_5TO: PreguntaVideojuegos5to[] = [
  {
    id: 1,
    pregunta: '¿Por qué NO debes comprar cuentas de juegos con skins o diamantes?',
    opciones: [
      'Porque es ilegal, viola los términos de servicio y puedes ser estafado',
      'Porque las cuentas no tienen valor',
      'Porque son muy caras'
    ],
    respuestaCorrecta: 0,
    explicacion: 'La compraventa de cuentas está prohibida por las plataformas y es un vector de estafas. Pierdes dinero y la cuenta.'
  },
  {
    id: 2,
    pregunta: '¿Cuál es la mejor forma de proteger una cuenta de juego con valor monetario?',
    opciones: [
      'Usar una contraseña corta y fácil',
      'Activar 2FA, usar contraseña fuerte y no compartirla',
      'Prestársela a un amigo de confianza'
    ],
    respuestaCorrecta: 1,
    explicacion: '2FA y contraseñas robustas son esenciales. Nunca compartas la cuenta, ni con amigos.'
  },
  {
    id: 3,
    pregunta: '¿Qué debes hacer si un jugador te insulta y amenaza en el chat?',
    opciones: [
      'Responder con insultos',
      'Reportar al jugador y bloquearlo',
      'Salir del juego y no volver'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Reporta y bloquea. No entres en confrontaciones. Guarda evidencia si es necesario.'
  },
  {
    id: 4,
    pregunta: '¿Dónde puedes denunciar la venta de cuentas o artículos fuera del juego?',
    opciones: [
      'En el sistema de reporte de la plataforma del juego',
      'En la tienda de la esquina',
      'No se puede denunciar'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Las plataformas tienen sistemas de reporte para denunciar venta de cuentas y estafas.'
  }
];

// ========== HOOK ==========

export const useVideojuegos5to = () => {
  // Escenarios de valor monetario
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_VALOR_MONETARIO.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Laboratorio de reportes
  const [respuestasReporte, setRespuestasReporte] = useState<Record<string, boolean>>({});
  const evaluarReporte = (id: string, esReportable: boolean) => {
    setRespuestasReporte(prev => ({ ...prev, [id]: esReportable }));
  };

  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_VIDEOJUEGOS_5TO.length;
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
    PREGUNTAS_VIDEOJUEGOS_5TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_VIDEOJUEGOS_5TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    escenarios: ESCENARIOS_VALOR_MONETARIO,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    casosReporte: REPORTES_CASOS,
    respuestasReporte,
    evaluarReporte,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_VIDEOJUEGOS_5TO,
    preguntasQuiz: PREGUNTAS_VIDEOJUEGOS_5TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};