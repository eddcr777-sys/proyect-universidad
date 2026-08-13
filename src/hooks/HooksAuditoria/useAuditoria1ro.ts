import { useState, useMemo } from 'react';

// Tipos para el simulador de permisos
export interface AppPermiso {
  id: string;
  nombre: string;
  icono: string;
  permisosSolicitados: string[];
  permisosCorrectos: string[];
  explicacion: string;
}

export interface PermisoSeleccion {
  [appId: string]: string[];
}

// Tipos para el checklist
export interface Habito1ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

// Tipos para el quiz
export interface PreguntaQuiz {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// Datos de ejemplo para el simulador de permisos
const APPS_EJEMPLO: AppPermiso[] = [
  {
    id: 'linterna',
    nombre: 'Linterna Brillante',
    icono: '🔦',
    permisosSolicitados: ['Cámara', 'Ubicación', 'Contactos'],
    permisosCorrectos: ['Cámara'],
    explicacion: 'Una linterna solo necesita acceso a la cámara para encender el flash. No necesita tu ubicación ni tus contactos.'
  },
  {
    id: 'editor_fotos',
    nombre: 'Photo Editor Pro',
    icono: '🎨',
    permisosSolicitados: ['Almacenamiento', 'Cámara', 'Micrófono'],
    permisosCorrectos: ['Almacenamiento', 'Cámara'],
    explicacion: 'Un editor de fotos necesita acceder a tu galería (almacenamiento) y a la cámara para tomar fotos, pero no al micrófono.'
  },
  {
    id: 'juego_carreras',
    nombre: 'Turbo Racing',
    icono: '🏎️',
    permisosSolicitados: ['Ubicación', 'Contactos', 'Micrófono'],
    permisosCorrectos: [],
    explicacion: 'Un juego de carreras no necesita ninguno de estos permisos. Deberías denegar todos.'
  },
  {
    id: 'mensajeria',
    nombre: 'Chat Seguro',
    icono: '💬',
    permisosSolicitados: ['Cámara', 'Micrófono', 'Almacenamiento'],
    permisosCorrectos: ['Cámara', 'Micrófono', 'Almacenamiento'],
    explicacion: 'Una app de mensajería necesita cámara y micrófono para videollamadas y enviar fotos, y almacenamiento para guardar archivos.'
  }
];

// Lista de hábitos para el checklist
export const HABITOS_1RO: Habito1ro[] = [
  { id: '1', texto: 'He borrado los juegos o aplicaciones que ya no utilizo desde hace meses.', categoria: 'Limpieza', enfoque: 'Libera espacio y evita aplicaciones sin actualizar que puedan ser inseguras.' },
  { id: '2', texto: 'He cerrado mi sesión (Log Out) en computadoras prestadas o de la escuela.', categoria: 'Privacidad', enfoque: 'Evita que extraños accedan a tus cuentas personales.' },
  { id: '3', texto: 'Reviso mis fotos y archivos descargados, borrando lo que no necesito.', categoria: 'Organización', enfoque: 'Mantiene tu dispositivo rápido y libre de archivos basura.' },
  { id: '4', texto: 'Tengo activada la verificación en dos pasos en mi correo y redes sociales.', categoria: 'Seguridad', enfoque: 'Añade una capa extra de protección aunque alguien sepa tu contraseña.' },
  { id: '5', texto: 'He revisado los permisos de mis aplicaciones y he revocado los innecesarios.', categoria: 'Privacidad', enfoque: 'Limita el acceso de las apps a tu información personal.' }
];

// Preguntas para el quiz
export const PREGUNTAS_QUIZ: PreguntaQuiz[] = [
  {
    id: 1,
    pregunta: 'Vas a usar una computadora de la biblioteca y entras a tu correo. ¿Qué debes hacer antes de irte?',
    opciones: [
      'Cerrar la pestaña del navegador',
      'Cerrar sesión en el correo y luego cerrar el navegador',
      'Apagar la computadora directamente'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Cerrar sesión impide que la siguiente persona acceda a tu cuenta, aunque vuelva a abrir el navegador.'
  },
  {
    id: 2,
    pregunta: 'Una app de linterna te pide permiso para acceder a tus contactos. ¿Qué haces?',
    opciones: [
      'Lo acepto, no pasa nada',
      'Lo rechazo y desinstalo la app',
      'Le doy permiso solo a veces'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Una linterna no necesita contactos. Si pide permisos innecesarios, es sospechosa y debe eliminarse.'
  },
  {
    id: 3,
    pregunta: '¿Cuál de estas contraseñas es más segura?',
    opciones: [
      '123456',
      'MiPerroToby2024',
      'm1P3rr0T0bY_2024!'
    ],
    respuestaCorrecta: 2,
    explicacion: 'La tercera combina mayúsculas, minúsculas, números y símbolos, y es más larga.'
  }
];

export const useAuditoria1ro = () => {
  // Estado para el checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});

  // Estado para el simulador de permisos
  const [permisosSeleccionados, setPermisosSeleccionados] = useState<PermisoSeleccion>({});
  const [resultadoPermisos, setResultadoPermisos] = useState<Record<string, boolean>>({});

  // Estado para la contraseña
  const [password, setPassword] = useState<string>('');

  // Estado para el quiz
  const [respuestasQuiz, setRespuestasQuiz] = useState<Record<number, number>>({});
  const [quizEnviado, setQuizEnviado] = useState<boolean>(false);

  // Funciones para checklist
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalHabitos = HABITOS_1RO.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

  // Funciones para simulador de permisos
  const togglePermiso = (appId: string, permiso: string) => {
    setPermisosSeleccionados(prev => {
      const appPermisos = prev[appId] || [];
      if (appPermisos.includes(permiso)) {
        return { ...prev, [appId]: appPermisos.filter(p => p !== permiso) };
      } else {
        return { ...prev, [appId]: [...appPermisos, permiso] };
      }
    });
    // Si ya hay resultado, resetear para que se vuelva a evaluar
    if (resultadoPermisos[appId]) {
      setResultadoPermisos(prev => ({ ...prev, [appId]: false }));
    }
  };

  const evaluarPermisos = (appId: string) => {
    const app = APPS_EJEMPLO.find(a => a.id === appId);
    if (!app) return;
    const seleccionados = permisosSeleccionados[appId] || [];
    const correctos = app.permisosCorrectos;
    const esCorrecto =
      seleccionados.length === correctos.length &&
      seleccionados.every(p => correctos.includes(p)) &&
      correctos.every(p => seleccionados.includes(p));
    setResultadoPermisos(prev => ({ ...prev, [appId]: esCorrecto }));
  };

  // Función para obtener fortaleza de contraseña
  const fortalezaPassword = useMemo(() => {
    if (password.length === 0) return { score: 0, etiqueta: '', color: '' };
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    // Máximo 5 puntos
    const etiquetas = ['Muy débil', 'Débil', 'Regular', 'Buena', 'Fuerte', 'Excelente'];
    const colores = ['#ef4444', '#ef4444', '#f59e0b', '#f59e0b', '#10b981', '#10b981'];
    return {
      score,
      etiqueta: etiquetas[score],
      color: colores[score]
    };
  }, [password]);

  // Funciones para quiz
  const responderPregunta = (preguntaId: number, opcionIndex: number) => {
    setRespuestasQuiz(prev => ({ ...prev, [preguntaId]: opcionIndex }));
  };

  const enviarQuiz = () => {
    setQuizEnviado(true);
  };

  const puntajeQuiz = useMemo(() => {
    if (!quizEnviado) return null;
    let correctas = 0;
    PREGUNTAS_QUIZ.forEach(pregunta => {
      if (respuestasQuiz[pregunta.id] === pregunta.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_QUIZ.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    // Checklist
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    // Simulador de permisos
    appsEjemplo: APPS_EJEMPLO,
    permisosSeleccionados,
    togglePermiso,
    evaluarPermisos,
    resultadoPermisos,
    // Contraseña
    password,
    setPassword,
    fortalezaPassword,
    // Quiz
    preguntasQuiz: PREGUNTAS_QUIZ,
    respuestasQuiz,
    responderPregunta,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};