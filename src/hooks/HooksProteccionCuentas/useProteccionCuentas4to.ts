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

// Hábitos de protección de cuentas para estudiantes de 4to año (14-15 años)
export const HABITOS_CUENTAS_4TO: HabitoCuentas4to[] = [
  {
    id: '1',
    texto: 'Uso contraseñas diferentes para cada cuenta que tengo (correo, redes sociales, plataformas educativas).',
    categoria: 'Contraseñas',
    enfoque: 'Reutilizar la misma contraseña en todo es peligroso: si alguien la descubre, puede entrar a todas tus cuentas.'
  },
  {
    id: '2',
    texto: 'Mis contraseñas tienen al menos 8 caracteres, mezclan letras, números y símbolos.',
    categoria: 'Contraseñas Seguras',
    enfoque: 'Una contraseña larga y variada es mucho más difícil de adivinar que una corta o simple.'
  },
  {
    id: '3',
    texto: 'Tengo activada la verificación en dos pasos (2FA) en mis cuentas más importantes.',
    categoria: 'Doble Verificación',
    enfoque: 'El 2FA agrega una segunda barrera: aunque alguien sepa tu contraseña, necesita también tu teléfono.'
  },
  {
    id: '4',
    texto: 'Nunca comparto mis contraseñas con nadie, ni siquiera con amigos o familiares.',
    categoria: 'Privacidad',
    enfoque: 'Tu contraseña es como la llave de tu casa. Compartirla puede costarte muy caro.'
  },
  {
    id: '5',
    texto: 'Cierro sesión en mis cuentas cuando uso una computadora que no es la mía.',
    categoria: 'Hábitos Seguros',
    enfoque: 'Dejar la sesión abierta en un equipo compartido permite que otros accedan a tus datos y cuentas.'
  }
];

// Escenarios cotidianos de protección de cuentas
export const ESCENARIOS_HASH: EscenarioHash[] = [
  {
    id: 'esc1',
    titulo: 'Contraseña olvidada de tu correo',
    descripcion: 'Olvidaste la contraseña de tu correo. Tu amigo dice que puede "recuperarla" si le das tu número de teléfono. ¿Qué haces?',
    opciones: [
      'Le doy mi número y dejo que él lo haga',
      'Uso la opción oficial de "Olvidé mi contraseña" directamente en la página',
      'Creo una cuenta nueva y abandono la vieja'
    ],
    opcionCorrecta: 1,
    explicacion: 'Siempre usa los canales oficiales de recuperación. Compartir tu número con alguien para que recupere tu cuenta puede comprometer tu privacidad.'
  },
  {
    id: 'esc2',
    titulo: 'Elegir una contraseña segura',
    descripcion: 'Quieres crear una contraseña que sea segura pero también fácil de recordar. ¿Cuál eliges?',
    opciones: [
      '12345 (fácil de recordar)',
      'TuNombre+AñoNacimiento (ej. Ana2010)',
      'Lunes#Cometas!37 (frase con números y símbolos)'
    ],
    opcionCorrecta: 2,
    explicacion: 'Las contraseñas basadas en frases con números y símbolos son las más seguras y también fáciles de memorizar. Evita datos personales obvios como tu nombre o fecha de nacimiento.'
  },
  {
    id: 'esc3',
    titulo: 'Alerta de inicio de sesión sospechoso',
    descripcion: 'Recibes un correo que dice: "Detectamos un inicio de sesión desde otro país. Haz clic aquí para proteger tu cuenta." ¿Qué haces?',
    opciones: [
      'Hago clic en el enlace inmediatamente',
      'No hago clic; entro directamente a la página oficial y cambio mi contraseña desde allí',
      'Borro el correo y no hago nada'
    ],
    opcionCorrecta: 1,
    explicacion: 'Este tipo de correos pueden ser ataques de phishing. Nunca hagas clic en enlaces de correos sospechosos. Ve directamente a la página oficial.'
  }
];

// Ejemplos de contraseñas: seguras vs. inseguras (reemplaza los hashes técnicos)
export const HASHES_EJEMPLO: HashEjemplo[] = [
  {
    id: 'hash1',
    tipo: 'Muy débil',
    hash: '123456',
    esSeguro: false,
    explicacion: '"123456" es la contraseña más usada del mundo y la primera que cualquiera intentaría. Nunca la uses.'
  },
  {
    id: 'hash2',
    tipo: 'Débil',
    hash: 'juan1998',
    esSeguro: false,
    explicacion: 'Nombre + año de nacimiento es predecible. Cualquier persona que te conozca podría adivinarla fácilmente.'
  },
  {
    id: 'hash3',
    tipo: 'Aceptable',
    hash: 'Gato$Azul99',
    esSeguro: true,
    explicacion: 'Combina mayúsculas, minúsculas, un símbolo y números. Es mucho más segura que las anteriores.'
  },
  {
    id: 'hash4',
    tipo: 'Muy segura',
    hash: 'Lluvia#Nube!Sol42&Mar',
    esSeguro: true,
    explicacion: 'Frase larga con símbolos y números. Es prácticamente imposible adivinarla y aún así fácil de recordar.'
  }
];

// Videos educativos apropiados para 4to año
export const VIDEOS_CUENTAS_4TO: VideoEducativo4to[] = [
  {
    id: 'v1',
    titulo: 'Cómo crear contraseñas seguras',
    url: 'https://www.youtube.com/embed/aEmXedj93EQ',
    descripcion: 'Consejos prácticos para crear contraseñas que protejan tus cuentas en internet.'
  },
  {
    id: 'v2',
    titulo: 'Qué es la verificación en dos pasos',
    url: 'https://www.youtube.com/embed/hGRii5f_uSc',
    descripcion: 'Aprende qué es el 2FA y por qué deberías activarlo en tus cuentas más importantes.'
  },
  {
    id: 'v3',
    titulo: 'Cómo reconocer un correo de phishing',
    url: 'https://www.youtube.com/embed/XBkzBrXlle0',
    descripcion: 'Identifica correos falsos que intentan robar tus contraseñas haciéndose pasar por empresas reales.'
  }
];

// Quiz adaptado al nivel de 4to año
export const PREGUNTAS_CUENTAS_4TO: PreguntaCuentas4to[] = [
  {
    id: 1,
    pregunta: '¿Cuál de estas contraseñas es la más segura?',
    opciones: [
      'password123',
      '2010juan',
      'Rio#Nube!88&Luna'
    ],
    respuestaCorrecta: 2,
    explicacion: 'Una contraseña larga que mezcla palabras sin relación, símbolos y números es la más difícil de adivinar.'
  },
  {
    id: 2,
    pregunta: '¿Qué es la verificación en dos pasos (2FA)?',
    opciones: [
      'Escribir la contraseña dos veces para confirmarla',
      'Un segundo método de verificación (como un código en tu teléfono) además de la contraseña',
      'Tener dos contraseñas distintas para una misma cuenta'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El 2FA pide un segundo factor (un código enviado a tu teléfono o correo) además de tu contraseña. Así, aunque roben tu clave, no pueden entrar.'
  },
  {
    id: 3,
    pregunta: '¿Qué debes hacer si recibes un correo pidiéndote tu contraseña?',
    opciones: [
      'Responder con la contraseña si el correo parece oficial',
      'Nunca compartir tu contraseña por correo; ninguna empresa legítima te la pedirá así',
      'Compartirla solo si es urgente'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Ninguna empresa real te pedirá tu contraseña por correo. Si lo hace, es una estafa (phishing). Ignóralo y reporta el correo.'
  },
  {
    id: 4,
    pregunta: '¿Por qué es peligroso usar la misma contraseña en todas tus cuentas?',
    opciones: [
      'Porque es difícil recordarla',
      'Porque si descubren una contraseña, pueden acceder a todas tus cuentas',
      'Porque las páginas no lo permiten'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Si alguien obtiene tu contraseña de un sitio, lo primero que hará es probarla en tu correo, redes sociales y banca. Usa contraseñas distintas para cada lugar.'
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