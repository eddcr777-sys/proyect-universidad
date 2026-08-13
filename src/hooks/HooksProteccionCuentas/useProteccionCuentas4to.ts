import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoCuentas4to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface EscenarioHash {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface HashEjemplo {
  id: string;
  tipo: string;
  hash: string;
  esSeguro: boolean;
  explicacion: string;
}

export interface VideoEducativo4to {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaCuentas4to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_CUENTAS_4TO: HabitoCuentas4to[] = [
  {
    id: '1',
    texto: 'Entiendo qué es un hash y por qué las contraseñas nunca deben guardarse en texto plano.',
    categoria: 'Conocimiento',
    enfoque: 'Un hash es una huella digital irreversible de la contraseña. Si alguien roba la base de datos, no puede leerla directamente.'
  },
  {
    id: '2',
    texto: 'Sé qué es un "salt" y por qué se añade antes de calcular el hash.',
    categoria: 'Cifrado',
    enfoque: 'El salt es una cadena aleatoria que impide ataques de diccionario precomputados (tablas rainbow).'
  },
  {
    id: '3',
    texto: 'Reconozco algoritmos de hash seguros (bcrypt, Argon2) frente a obsoletos (MD5, SHA1).',
    categoria: 'Algoritmos',
    enfoque: 'Los algoritmos modernos son lentos a propósito para dificultar la fuerza bruta.'
  },
  {
    id: '4',
    texto: 'Sé que usar herramientas como John the Ripper o Hashcat fuera de un laboratorio propio es ilegal.',
    categoria: 'Ética',
    enfoque: 'Solo se prueban contraseñas en entornos controlados y autorizados.'
  },
  {
    id: '5',
    texto: 'Puedo explicar la diferencia entre ataque de fuerza bruta y ataque de diccionario.',
    categoria: 'Ataques',
    enfoque: 'La fuerza bruta prueba todas las combinaciones; el diccionario usa listas de contraseñas comunes.'
  }
];

export const ESCENARIOS_HASH: EscenarioHash[] = [
  {
    id: 'esc1',
    titulo: 'Base de datos de contraseñas robada',
    descripcion: 'Un atacante roba la base de datos de un sitio web. Si las contraseñas están guardadas con un hash seguro y salt, ¿qué puede hacer?',
    opciones: [
      'Leerlas directamente',
      'No puede leerlas fácilmente, pero puede intentar descifrarlas con fuerza bruta',
      'Nada, son imposibles de descifrar'
    ],
    opcionCorrecta: 1,
    explicacion: 'Un hash seguro dificulta la lectura directa, pero con tiempo y poder de cómputo el atacante puede intentar crackearlas. Por eso se usan algoritmos lentos como bcrypt.'
  },
  {
    id: 'esc2',
    titulo: 'Elección de algoritmo',
    descripcion: 'Estás desarrollando un sistema de login para el liceo. ¿Qué algoritmo de hash deberías usar?',
    opciones: [
      'MD5, porque es rápido',
      'SHA1, porque es conocido',
      'bcrypt o Argon2, porque son lentos y seguros'
    ],
    opcionCorrecta: 2,
    explicacion: 'bcrypt y Argon2 están diseñados para ser lentos, lo que dificulta los ataques de fuerza bruta. MD5 y SHA1 son obsoletos para contraseñas.'
  },
  {
    id: 'esc3',
    titulo: 'Uso de herramientas de cracking',
    descripcion: 'Quieres probar la seguridad de tus propias contraseñas. ¿Cómo lo harías de forma ética?',
    opciones: [
      'Uso John the Ripper en mis propios hashes en un laboratorio aislado',
      'Intento crackear las contraseñas de mis compañeros',
      'Descargo una lista de contraseñas de internet'
    ],
    opcionCorrecta: 0,
    explicacion: 'Solo debes probar en tus propios sistemas o con permiso explícito. Nunca contra cuentas ajenas o sin autorización.'
  }
];

export const HASHES_EJEMPLO: HashEjemplo[] = [
  {
    id: 'hash1',
    tipo: 'MD5',
    hash: '5f4dcc3b5aa765d61d8327deb882cf99',
    esSeguro: false,
    explicacion: 'MD5 es obsoleto y muy rápido de crackear. Este hash corresponde a "password".'
  },
  {
    id: 'hash2',
    tipo: 'SHA1',
    hash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
    esSeguro: false,
    explicacion: 'SHA1 también es vulnerable a colisiones y ataques rápidos. No debe usarse para contraseñas.'
  },
  {
    id: 'hash3',
    tipo: 'bcrypt',
    hash: '$2a$12$R9h/cIPz0gi.URNNX3kh2OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW',
    esSeguro: true,
    explicacion: 'bcrypt incluye salt y es lento. Este es un ejemplo de hash seguro.'
  },
  {
    id: 'hash4',
    tipo: 'Argon2',
    hash: '$argon2id$v=19$m=65536,t=3,p=4$c29tZXNhbHQ$RdescudvJCsgt3ub+b+dWRWJTmaaJObG',
    esSeguro: true,
    explicacion: 'Argon2 es el estándar moderno recomendado. Incluye parámetros de memoria y tiempo.'
  }
];

export const VIDEOS_CUENTAS_4TO: VideoEducativo4to[] = [
  {
    id: 'v1',
    titulo: '¿Qué es un hash y cómo protege contraseñas?',
    url: 'https://www.youtube.com/embed/cczlpiiu42M',
    descripcion: 'Explicación visual de cómo funcionan las funciones hash y por qué son irreversibles.'
  },
  {
    id: 'v2',
    titulo: 'Salt y seguridad de contraseñas',
    url: 'https://www.youtube.com/embed/8ZtInClXe1Q',
    descripcion: 'Cómo el salt previene ataques con tablas rainbow y hace más seguro el almacenamiento.'
  },
  {
    id: 'v3',
    titulo: 'Introducción a John the Ripper (uso ético)',
    url: 'https://www.youtube.com/embed/riQPNnLP4m0',
    descripcion: 'Demostración en laboratorio de cómo se auditan contraseñas con esta herramienta.'
  }
];

export const PREGUNTAS_CUENTAS_4TO: PreguntaCuentas4to[] = [
  {
    id: 1,
    pregunta: '¿Qué es un hash?',
    opciones: [
      'Una contraseña cifrada reversible',
      'Una huella digital irreversible de la contraseña',
      'Un tipo de malware'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Un hash es una función unidireccional: a partir del hash no se puede obtener la contraseña original, solo comparar si coincide.'
  },
  {
    id: 2,
    pregunta: '¿Por qué se añade un "salt" antes de calcular el hash?',
    opciones: [
      'Para hacer la contraseña más corta',
      'Para evitar que dos contraseñas iguales tengan el mismo hash y prevenir tablas rainbow',
      'Para que el sistema sea más rápido'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El salt es una cadena aleatoria única por usuario. Hace que contraseñas idénticas tengan hashes distintos y elimina la utilidad de tablas precalculadas.'
  },
  {
    id: 3,
    pregunta: '¿Cuál de los siguientes algoritmos es el más seguro para almacenar contraseñas?',
    opciones: [
      'MD5',
      'SHA1',
      'bcrypt'
    ],
    respuestaCorrecta: 2,
    explicacion: 'bcrypt está diseñado para ser lento y costoso computacionalmente, dificultando la fuerza bruta. MD5 y SHA1 son rápidos y obsoletos.'
  },
  {
    id: 4,
    pregunta: '¿Cuándo es ético usar herramientas como John the Ripper o Hashcat?',
    opciones: [
      'Para crackear la contraseña de un amigo',
      'Solo en laboratorios propios o con autorización explícita para auditoría',
      'Nunca, son ilegales'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Estas herramientas son legales y útiles para auditorías de seguridad, pero solo en entornos controlados y con permiso.'
  }
];

// ========== HOOK ==========

export const useProteccionCuentas4to = () => {
  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_CUENTAS_4TO.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

  // Escenarios
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_HASH.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Clasificación de hashes
  const [respuestasHash, setRespuestasHash] = useState<Record<string, boolean>>({});
  const [resultadoHash, setResultadoHash] = useState<Record<string, boolean>>({});
  const evaluarHash = (id: string, esSeguro: boolean) => {
    const hash = HASHES_EJEMPLO.find(h => h.id === id);
    if (!hash) return;
    const correcto = esSeguro === hash.esSeguro;
    setResultadoHash(prev => ({ ...prev, [id]: correcto }));
    setRespuestasHash(prev => ({ ...prev, [id]: esSeguro }));
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
    PREGUNTAS_CUENTAS_4TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_CUENTAS_4TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    escenarios: ESCENARIOS_HASH,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    hashes: HASHES_EJEMPLO,
    respuestasHash,
    evaluarHash,
    resultadoHash,
    videos: VIDEOS_CUENTAS_4TO,
    preguntasQuiz: PREGUNTAS_CUENTAS_4TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};