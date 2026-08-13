import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoContrasena1ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface VideoEducativo {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaContrasena1ro {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_CONTRASENA_1RO: HabitoContrasena1ro[] = [
  {
    id: '1',
    texto: 'Uso una contraseña diferente para cada cuenta importante (correo, redes sociales, juegos).',
    categoria: 'Diversidad',
    enfoque: 'Si una cuenta es hackeada, las demás siguen seguras.'
  },
  {
    id: '2',
    texto: 'Mis contraseñas tienen al menos 12 caracteres.',
    categoria: 'Longitud',
    enfoque: 'Mientras más larga, más difícil de adivinar por programas automáticos.'
  },
  {
    id: '3',
    texto: 'No uso información personal (nombre, fecha de nacimiento, nombre de mascota) en mis contraseñas.',
    categoria: 'Privacidad',
    enfoque: 'Esa información es fácil de encontrar en tus redes sociales.'
  },
  {
    id: '4',
    texto: 'Nunca comparto mis contraseñas con amigos, aunque me lo pidan.',
    categoria: 'Confidencialidad',
    enfoque: 'Una contraseña es como tu cepillo de dientes: personal e intransferible.'
  },
  {
    id: '5',
    texto: 'He activado la verificación en dos pasos en mi correo principal.',
    categoria: 'Capa Extra',
    enfoque: 'Aunque alguien obtenga tu contraseña, no podrá entrar sin el código de tu teléfono.'
  }
];

export const VIDEOS_CONTRASENA_1RO: VideoEducativo[] = [
  {
    id: 'video1',
    titulo: 'Cómo crear una contraseña segura (INCIBE)',
    url: 'https://www.youtube.com/embed/9LXDZ9ZB9bY',
    descripcion: 'Video corto del Instituto Nacional de Ciberseguridad de España explicando la importancia de las contraseñas robustas.'
  },
  {
    id: 'video2',
    titulo: 'Contraseñas seguras para niños y adolescentes',
    url: 'https://www.youtube.com/embed/3X4Q8yR4d2A',
    descripcion: 'Tutorial animado con ejemplos de contraseñas fáciles de recordar pero difíciles de adivinar.'
  },
  {
    id: 'video3',
    titulo: '¿Qué es la verificación en dos pasos?',
    url: 'https://www.youtube.com/embed/7kQ6fY2Vn8U',
    descripcion: 'Explicación visual de cómo funciona la autenticación de dos factores (2FA) y por qué debes activarla.'
  }
];

export const PREGUNTAS_CONTRASENA_1RO: PreguntaContrasena1ro[] = [
  {
    id: 1,
    pregunta: '¿Cuál de las siguientes contraseñas es la más segura?',
    opciones: [
      '123456',
      'JuanPerez2010',
      'MiPerroTobyComeCroquetasEn2024!',
      'password123'
    ],
    respuestaCorrecta: 2,
    explicacion: 'La tercera opción es larga, combina mayúsculas, minúsculas, números y símbolos, y no usa información personal.'
  },
  {
    id: 2,
    pregunta: '¿Por qué NO debes reutilizar la misma contraseña en varias cuentas?',
    opciones: [
      'Porque es más difícil de recordar',
      'Porque si una cuenta es hackeada, todas las demás quedan vulnerables',
      'Porque los sitios web lo prohíben'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La reutilización de contraseñas permite que un atacante acceda a todas tus cuentas si logra descifrar una sola.'
  },
  {
    id: 3,
    pregunta: '¿Qué es la verificación en dos pasos (2FA)?',
    opciones: [
      'Una segunda contraseña más larga',
      'Un código adicional que se envía a tu teléfono al iniciar sesión',
      'Un programa antivirus'
    ],
    respuestaCorrecta: 1,
    explicacion: '2FA añade una capa extra: además de tu contraseña, necesitas un código temporal que solo tú recibes.'
  },
  {
    id: 4,
    pregunta: '¿Cuál es la forma más segura de recordar tus contraseñas?',
    opciones: [
      'Anotarlas en un papel pegado al monitor',
      'Usar un gestor de contraseñas como Bitwarden',
      'Memorizar todas sin ayuda'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Un gestor de contraseñas cifra y guarda todas tus claves. Solo necesitas recordar una contraseña maestra.'
  }
];

// ========== HOOK ==========

export const useProteccionCuentas1ro = () => {
  // Simulador de contraseña
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);

  // Evaluación de fortaleza
  const evaluacion = useMemo(() => {
    const p = password;
    if (p.length === 0) return { score: 0, etiqueta: '', color: '#cbd5e1' };

    let score = 0;
    const tieneMinimo = p.length >= 8;
    const tieneLongitudRecomendada = p.length >= 12;
    const tieneMayuscula = /[A-Z]/.test(p);
    const tieneMinuscula = /[a-z]/.test(p);
    const tieneNumero = /[0-9]/.test(p);
    const tieneSimbolo = /[^A-Za-z0-9]/.test(p);
    const esSoloNumeros = /^[0-9]+$/.test(p);
    const esFecha = /^(19|20)\d{2}[-/]?(0[1-9]|1[0-2])[-/]?(0[1-9]|[12]\d|3[01])$/.test(p) || /^\d{6,8}$/.test(p);
    const tieneSecuencia = /12345|54321|abcde|edcba|qwerty|asdf/.test(p.toLowerCase());
    const tienePalabraComun = /(password|contraseña|admin|123456789)/i.test(p);

    // Puntuación base
    if (tieneMinimo) score += 15;
    if (tieneLongitudRecomendada) score += 10;
    if (tieneMayuscula) score += 15;
    if (tieneMinuscula) score += 10;
    if (tieneNumero) score += 15;
    if (tieneSimbolo) score += 20;

    // Penalizaciones
    if (esSoloNumeros) score -= 20;
    if (esFecha) score -= 30;
    if (tieneSecuencia) score -= 25;
    if (tienePalabraComun) score -= 25;

    // Normalizar
    score = Math.max(0, Math.min(100, score));

    let etiqueta = 'Muy débil';
    let color = '#ef4444';
    if (score >= 80) { etiqueta = 'Excelente 🔒'; color = '#10b981'; }
    else if (score >= 60) { etiqueta = 'Buena'; color = '#22c55e'; }
    else if (score >= 40) { etiqueta = 'Aceptable'; color = '#f59e0b'; }
    else if (score >= 20) { etiqueta = 'Débil'; color = '#f97316'; }

    return { score, etiqueta, color };
  }, [password]);

  // Checklist de hábitos
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_CONTRASENA_1RO.length;
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
    PREGUNTAS_CONTRASENA_1RO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_CONTRASENA_1RO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    password,
    setPassword,
    mostrarPassword,
    setMostrarPassword,
    evaluacion,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_CONTRASENA_1RO,
    preguntasQuiz: PREGUNTAS_CONTRASENA_1RO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};