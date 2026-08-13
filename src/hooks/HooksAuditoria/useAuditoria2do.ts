import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface Habito2do {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface EscenarioDecision {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface PreguntaQuiz2do {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_2DO: Habito2do[] = [
  {
    id: '1',
    texto: 'Tengo desactivado el Wi-Fi y el Bluetooth cuando salgo de mi casa y no los estoy usando.',
    categoria: 'Conexiones',
    enfoque: 'Evita conexiones automáticas a redes maliciosas y ahorra batería.'
  },
  {
    id: '2',
    texto: 'Nunca realizo compras ni inicio sesión en redes sociales estando conectado a un Wi-Fi público (plazas, cafés).',
    categoria: 'Redes Abiertas',
    enfoque: 'Las redes sin contraseña permiten a otros interceptar lo que envías.'
  },
  {
    id: '3',
    texto: 'He revisado la lista de "Dispositivos conectados" en mi cuenta de Google/redes y he borrado los que no reconozco.',
    categoria: 'Cuentas',
    enfoque: 'Asegura que nadie más tenga acceso a tus sesiones activas.'
  },
  {
    id: '4',
    texto: 'Uso una VPN cuando me conecto a redes Wi-Fi públicas.',
    categoria: 'Cifrado',
    enfoque: 'La VPN crea un túnel cifrado para todo tu tráfico, protegiéndote de espías.'
  },
  {
    id: '5',
    texto: 'He configurado mi teléfono para que no se conecte automáticamente a redes abiertas.',
    categoria: 'Configuración',
    enfoque: 'Impede que tu dispositivo entre sin permiso a redes potencialmente peligrosas.'
  }
];

export const ESCENARIOS_DECISION: EscenarioDecision[] = [
  {
    id: 'escenario1',
    titulo: 'En la cafetería',
    descripcion: 'Estás en una cafetería y necesitas revisar tu correo, pero no tienes datos móviles. El local ofrece Wi-Fi gratis sin contraseña. ¿Qué harías?',
    opciones: [
      'Conectarte sin problema, ya que es un lugar público y seguro',
      'Conectarte pero evitar iniciar sesión en cuentas importantes',
      'No conectarte y esperar a tener datos móviles o una red segura'
    ],
    opcionCorrecta: 2,
    explicacion: 'Lo más seguro es no usar redes abiertas para actividades sensibles. Si es imprescindible, usa una VPN y evita escribir contraseñas.'
  },
  {
    id: 'escenario2',
    titulo: 'El Bluetooth encendido',
    descripcion: 'Sales de tu casa y notas que tienes el Bluetooth activado. No lo estás usando para nada. ¿Qué haces?',
    opciones: [
      'Lo dejo encendido por si acaso',
      'Lo apago para evitar conexiones no deseadas y ahorrar batería',
      'Lo pongo en modo visible para que otros dispositivos me encuentren'
    ],
    opcionCorrecta: 1,
    explicacion: 'Apagar Bluetooth cuando no lo usas reduce el riesgo de ataques y consume menos batería.'
  },
  {
    id: 'escenario3',
    titulo: 'Sesión en computadora prestada',
    descripcion: 'Usaste una computadora de la escuela para entrar a tu correo. Ya terminaste, ¿qué debes hacer antes de irte?',
    opciones: [
      'Cerrar la pestaña del navegador',
      'Cerrar sesión en el correo y luego cerrar el navegador',
      'Apagar la computadora'
    ],
    opcionCorrecta: 1,
    explicacion: 'Cerrar sesión impide que la siguiente persona acceda a tu cuenta aunque abra el navegador.'
  }
];

export const PREGUNTAS_QUIZ_2DO: PreguntaQuiz2do[] = [
  {
    id: 1,
    pregunta: '¿Por qué una red Wi-Fi abierta (sin contraseña) es peligrosa?',
    opciones: [
      'Porque gasta más batería del teléfono',
      'Porque cualquier persona conectada puede capturar los datos que envías si no están cifrados',
      'Porque siempre tiene virus'
    ],
    respuestaCorrecta: 1,
    explicacion: 'En una red abierta, un atacante puede usar herramientas para "escuchar" el tráfico y ver información no cifrada (HTTP, contraseñas).'
  },
  {
    id: 2,
    pregunta: '¿Qué es una VPN?',
    opciones: [
      'Un tipo de virus que protege tu teléfono',
      'Una red privada virtual que cifra tu conexión y oculta tu actividad',
      'Un programa para aumentar la velocidad de Internet'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Una VPN crea un túnel cifrado entre tu dispositivo y un servidor, haciendo que tus datos sean ilegibles para espías.'
  },
  {
    id: 3,
    pregunta: '¿Dónde puedes revisar los dispositivos que tienen tu cuenta de Google abierta?',
    opciones: [
      'En la configuración de seguridad de tu cuenta de Google',
      'En la aplicación de la cámara',
      'No es posible ver esa información'
    ],
    respuestaCorrecta: 0,
    explicacion: 'En https://myaccount.google.com/security puedes ver y cerrar sesiones activas en otros dispositivos.'
  }
];

// ========== HOOK ==========

export const useAuditoria2do = () => {
  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_2DO.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

  // Simulador de decisiones
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [escenarioEvaluado, setEscenarioEvaluado] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    // Se evalúa de inmediato
    const escenario = ESCENARIOS_DECISION.find(e => e.id === id);
    if (escenario) {
      setEscenarioEvaluado(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
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
    PREGUNTAS_QUIZ_2DO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_QUIZ_2DO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    // checklist
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    // simulador
    escenarios: ESCENARIOS_DECISION,
    respuestasEscenario,
    responderEscenario,
    escenarioEvaluado,
    // quiz
    preguntasQuiz: PREGUNTAS_QUIZ_2DO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};