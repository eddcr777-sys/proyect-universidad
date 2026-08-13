import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface Habito2FA {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface Escenario2FA {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoEducativo2do {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaCuentas2do {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_2FA: Habito2FA[] = [
  {
    id: '1',
    texto: 'Tengo activada la verificación en dos pasos en mi correo, redes sociales y juegos importantes.',
    categoria: 'Protección 2FA',
    enfoque: 'Añade una capa extra de seguridad: si te roban la contraseña, no podrán entrar sin el código.'
  },
  {
    id: '2',
    texto: 'Uso una aplicación autenticadora (como Google Authenticator o Authy) en lugar de SMS para los códigos.',
    categoria: 'Método Seguro',
    enfoque: 'Las apps generan códigos sin depender de la señal del teléfono, evitando la interceptación de SMS.'
  },
  {
    id: '3',
    texto: 'Guardo los códigos de recuperación en un lugar seguro (no en capturas de pantalla).',
    categoria: 'Recuperación',
    enfoque: 'Si pierdes tu teléfono, esos códigos son tu única forma de recuperar la cuenta.'
  },
  {
    id: '4',
    texto: 'Uso un gestor de contraseñas (Bitwarden, KeePassXC) para generar y almacenar contraseñas únicas.',
    categoria: 'Gestor de Contraseñas',
    enfoque: 'No necesitas recordar todas las contraseñas y evitas reutilizarlas.'
  },
  {
    id: '5',
    texto: 'Sé qué hacer si recibo un código de verificación que no he solicitado: no lo comparto y cambio mi contraseña.',
    categoria: 'Alerta',
    enfoque: 'Un código no solicitado indica que alguien está intentando entrar a tu cuenta.'
  }
];

export const ESCENARIOS_2FA: Escenario2FA[] = [
  {
    id: 'esc1',
    titulo: 'Recibes un código de verificación por SMS que no pediste',
    descripcion: 'Tu teléfono vibra con un código de verificación de una red social. Tú no intentaste iniciar sesión. ¿Qué haces?',
    opciones: [
      'Ignorar el mensaje, no pasa nada',
      'No compartir el código y cambiar tu contraseña de inmediato',
      'Reenviar el código a un amigo para que lo verifique'
    ],
    opcionCorrecta: 1,
    explicacion: 'Ese código significa que alguien más tiene tu contraseña y está intentando entrar. Cámbiala de inmediato y activa 2FA si aún no lo tienes.'
  },
  {
    id: 'esc2',
    titulo: 'Elegir el método de verificación en dos pasos',
    descripcion: 'Vas a activar 2FA en tu correo. ¿Qué método es más seguro?',
    opciones: [
      'Recibir códigos por SMS',
      'Usar una aplicación autenticadora (Google Authenticator, Authy)',
      'Usar la misma contraseña dos veces'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los códigos por SMS pueden ser interceptados. Las apps autenticadoras generan códigos en tu dispositivo sin conexión, mucho más seguras.'
  },
  {
    id: 'esc3',
    titulo: 'Perdiste tu teléfono con la app autenticadora',
    descripcion: 'Perdiste tu teléfono y no puedes generar códigos de 2FA. ¿Cómo recuperas tu cuenta?',
    opciones: [
      'Crear una cuenta nueva',
      'Usar los códigos de recuperación que guardaste previamente',
      'Esperar a que alguien te ayude'
    ],
    opcionCorrecta: 1,
    explicacion: 'Por eso es vital guardar los códigos de recuperación. Sin ellos, perderás el acceso a tu cuenta.'
  }
];

export const VIDEOS_CUENTAS_2DO: VideoEducativo2do[] = [
  {
    id: 'v1',
    titulo: '¿Qué es la verificación en dos pasos?',
    url: 'https://www.youtube.com/embed/0mvCeN2qEiY',
    descripcion: 'Explicación clara de cómo funciona 2FA y por qué debes activarla en todas tus cuentas.'
  },
  {
    id: 'v2',
    titulo: 'Cómo usar un gestor de contraseñas',
    url: 'https://www.youtube.com/embed/4d_HhVwKPr0',
    descripcion: 'Tutorial de Bitwarden: cómo guardar y generar contraseñas seguras fácilmente.'
  },
  {
    id: 'v3',
    titulo: 'Qué hacer si hackean tu cuenta',
    url: 'https://www.youtube.com/embed/0V9_tQ5H0aA',
    descripcion: 'Pasos a seguir para recuperar una cuenta hackeada y evitar futuros accesos.'
  }
];

export const PREGUNTAS_CUENTAS_2DO: PreguntaCuentas2do[] = [
  {
    id: 1,
    pregunta: '¿Cuál de estos métodos de verificación en dos pasos es el más seguro?',
    opciones: [
      'Código por SMS',
      'Aplicación autenticadora',
      'Llamada telefónica'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Las apps autenticadoras generan códigos localmente, sin depender de la red móvil, lo que evita la interceptación.'
  },
  {
    id: 2,
    pregunta: '¿Qué son los códigos de recuperación en la verificación en dos pasos?',
    opciones: [
      'Códigos desechables que te permiten entrar si pierdes tu teléfono',
      'Una segunda contraseña para recordar',
      'Códigos que se comparten con amigos'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Son códigos de un solo uso que debes guardar en un lugar seguro para recuperar el acceso si pierdes el dispositivo.'
  },
  {
    id: 3,
    pregunta: '¿Qué debes hacer si recibes un código de verificación que no solicitaste?',
    opciones: [
      'Compartirlo con un amigo para que lo revise',
      'No compartirlo y cambiar tu contraseña de inmediato',
      'Ignorarlo, no significa nada'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Es una señal de que alguien intenta entrar. Cambia tu contraseña y revisa la actividad reciente.'
  },
  {
    id: 4,
    pregunta: '¿Cuál es la ventaja principal de usar un gestor de contraseñas?',
    opciones: [
      'Te permite usar la misma contraseña en todos los sitios',
      'Genera y guarda contraseñas únicas y fuertes para cada cuenta',
      'Hace que las contraseñas sean más cortas'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Un gestor crea contraseñas aleatorias y las guarda cifradas, eliminando la necesidad de recordarlas todas.'
  }
];

// ========== HOOK ==========

export const useProteccionCuentas2do = () => {
  // Checklist de hábitos 2FA/gestores
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_2FA.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

  // Escenarios de 2FA
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_2FA.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
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
    PREGUNTAS_CUENTAS_2DO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_CUENTAS_2DO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    escenarios: ESCENARIOS_2FA,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    videos: VIDEOS_CUENTAS_2DO,
    preguntasQuiz: PREGUNTAS_CUENTAS_2DO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};