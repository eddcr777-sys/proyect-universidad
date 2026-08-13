import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoCuentas3ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface EscenarioCuentas3ro {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoEducativo3ro {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaCuentas3ro {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_CUENTAS_3RO: HabitoCuentas3ro[] = [
  {
    id: '1',
    texto: 'Uso una cuenta de usuario normal para jugar, navegar y hacer tareas; solo uso la de administrador para instalar programas.',
    categoria: 'Principio de Mínimo Privilegio',
    enfoque: 'Si un malware entra, tendrá menos permisos para dañar el sistema o robar información.'
  },
  {
    id: '2',
    texto: 'He revisado y configurado las políticas de contraseñas en Windows o Linux (longitud mínima, expiración).',
    categoria: 'Políticas del Sistema',
    enfoque: 'El sistema operativo puede obligar a todos los usuarios a usar contraseñas más seguras.'
  },
  {
    id: '3',
    texto: 'Sé distinguir entre huella dactilar, reconocimiento facial y PIN como métodos de autenticación biométrica.',
    categoria: 'Biometría',
    enfoque: 'La biometría es cómoda, pero tiene riesgos: una huella no se puede cambiar si es robada.'
  },
  {
    id: '4',
    texto: 'He configurado el bloqueo automático de mi PC o celular después de unos minutos de inactividad.',
    categoria: 'Bloqueo Automático',
    enfoque: 'Evita que alguien acceda a tu dispositivo si te levantas y lo dejas desatendido.'
  },
  {
    id: '5',
    texto: 'Reviso periódicamente qué programas tienen permisos de administrador en mi equipo.',
    categoria: 'Auditoría de Permisos',
    enfoque: 'Detecta malware o programas sospechosos con privilegios elevados.'
  }
];

export const ESCENARIOS_CUENTAS_3RO: EscenarioCuentas3ro[] = [
  {
    id: 'esc1',
    titulo: '¿Cuenta de administrador para todo?',
    descripcion: 'Estás configurando tu laptop nueva. Windows te pregunta si quieres usar la cuenta de administrador para todo. ¿Qué haces?',
    opciones: [
      'Uso la cuenta de administrador para todo, es más cómodo',
      'Creo una cuenta de usuario normal para el día a día y una de administrador solo para instalar programas',
      'No creo ninguna cuenta extra'
    ],
    opcionCorrecta: 1,
    explicacion: 'El principio de mínimo privilegio dice que cada tarea debe usar el nivel mínimo de permisos. Así reduces el impacto de un malware.'
  },
  {
    id: 'esc2',
    titulo: 'Huella dactilar como contraseña',
    descripcion: 'Tu celular te ofrece desbloquear con huella dactilar. ¿Es seguro usarla como único método?',
    opciones: [
      'Sí, es totalmente infalible',
      'Es cómoda pero debe combinarse con un PIN o patrón de respaldo fuerte',
      'No sirve para nada'
    ],
    opcionCorrecta: 1,
    explicacion: 'La huella es cómoda, pero si es robada o clonada no la puedes cambiar. Por eso el sistema te pide un PIN o contraseña de respaldo.'
  },
  {
    id: 'esc3',
    titulo: 'Programa pide permisos de administrador',
    descripcion: 'Un programa que descargaste de internet solicita permisos de administrador para instalarse. ¿Qué haces?',
    opciones: [
      'Acepto sin pensarlo, así se instala',
      'Verifico que el programa sea de una fuente confiable y que realmente necesite esos permisos',
      'Nunca acepto permisos de administrador'
    ],
    opcionCorrecta: 1,
    explicacion: 'Solo otorga permisos de administrador a programas de fuentes confiables. Un malware con esos permisos tiene control total.'
  }
];

export const VIDEOS_CUENTAS_3RO: VideoEducativo3ro[] = [
  {
    id: 'v1',
    titulo: 'Principio de Mínimo Privilegio',
    url: 'https://www.youtube.com/embed/2y0WlJ5WJ6w',
    descripcion: 'Explicación de por qué no debes usar siempre la cuenta de administrador en tu computadora.'
  },
  {
    id: 'v2',
    titulo: 'Cómo configurar políticas de contraseñas en Windows',
    url: 'https://www.youtube.com/embed/yHJ0kKlBSdM',
    descripcion: 'Tutorial para establecer longitud mínima y expiración de contraseñas en Windows (secpol.msc).'
  },
  {
    id: 'v3',
    titulo: 'Comandos básicos de seguridad en Linux',
    url: 'https://www.youtube.com/embed/yHJ0kKlBSdM',
    descripcion: 'Cómo usar sudo, passwd y revisar permisos de usuario en terminal Linux.'
  }
];

export const PREGUNTAS_CUENTAS_3RO: PreguntaCuentas3ro[] = [
  {
    id: 1,
    pregunta: '¿Qué es el principio de mínimo privilegio?',
    opciones: [
      'Usar siempre la cuenta de administrador',
      'Otorgar solo los permisos necesarios para cada tarea',
      'No usar contraseñas'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El mínimo privilegio reduce la superficie de ataque: si un programa o usuario no necesita un permiso, no se le otorga.'
  },
  {
    id: 2,
    pregunta: '¿Cuál es una desventaja de la autenticación biométrica (huella, rostro)?',
    opciones: [
      'Es muy lenta',
      'Una huella o rostro robado no se puede cambiar como una contraseña',
      'No funciona en ningún dispositivo'
    ],
    respuestaCorrecta: 1,
    explicacion: 'A diferencia de una contraseña, si tu huella es robada o clonada no puedes "cambiarla". Por eso se recomienda combinarla con PIN.'
  },
  {
    id: 3,
    pregunta: '¿Dónde se configuran las políticas de contraseñas en Windows?',
    opciones: [
      'En la herramienta secpol.msc (Directiva de seguridad local)',
      'En el navegador de internet',
      'En la aplicación de fotos'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Con secpol.msc puedes establecer longitud mínima, expiración y complejidad de contraseñas en Windows.'
  },
  {
    id: 4,
    pregunta: '¿Qué comando en Linux te permite cambiar la contraseña de tu usuario?',
    opciones: [
      'passwd',
      'ls',
      'chmod'
    ],
    respuestaCorrecta: 0,
    explicacion: 'El comando passwd cambia la contraseña del usuario actual en Linux.'
  }
];

// ========== HOOK ==========

export const useProteccionCuentas3ro = () => {
  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_CUENTAS_3RO.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

  // Escenarios
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_CUENTAS_3RO.find(e => e.id === id);
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
    PREGUNTAS_CUENTAS_3RO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_CUENTAS_3RO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    escenarios: ESCENARIOS_CUENTAS_3RO,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    videos: VIDEOS_CUENTAS_3RO,
    preguntasQuiz: PREGUNTAS_CUENTAS_3RO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};