import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface Habito3ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface ProcesoSospechoso {
  id: string;
  nombre: string;
  descripcion: string;
  esMalware: boolean;
  explicacion: string;
}

export interface EscenarioFirewall {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface PreguntaQuiz3ro {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_3RO: Habito3ro[] = [
  {
    id: '1',
    texto: 'He revisado que el antivirus o Windows Defender de mi equipo esté activo y actualizado.',
    categoria: 'Protección Base',
    enfoque: 'El antivirus es tu primera línea de defensa contra software malicioso.'
  },
  {
    id: '2',
    texto: 'Realizo copias de seguridad (Backups) de mis proyectos escolares importantes en la nube (ej. Google Drive) o en un pendrive.',
    categoria: 'Resguardo',
    enfoque: 'Te salva de perder todo si tu computadora se daña o sufre un ataque de Ransomware.'
  },
  {
    id: '3',
    texto: 'Compruebo que el cortafuegos (Firewall) de mi computadora esté habilitado.',
    categoria: 'Filtro de Red',
    enfoque: 'Bloquea intentos de conexión no autorizados desde internet hacia tu equipo.'
  },
  {
    id: '4',
    texto: 'He configurado las opciones de recuperación (correo alternativo, teléfono) en mis cuentas más importantes.',
    categoria: 'Recuperación',
    enfoque: 'Garantiza que puedas recuperar tu cuenta si olvidas la contraseña.'
  },
  {
    id: '5',
    texto: 'He desinstalado programas que ya no uso para reducir la superficie de ataque.',
    categoria: 'Limpieza',
    enfoque: 'Menos programas innecesarios = menos puertas de entrada para malware.'
  }
];

export const PROCESOS_SOSPECHOSOS: ProcesoSospechoso[] = [
  {
    id: 'proc1',
    nombre: 'svchost.exe',
    descripcion: 'Proceso normal de Windows que gestiona servicios del sistema.',
    esMalware: false,
    explicacion: 'svchost.exe es legítimo y esencial. Sin embargo, a veces el malware se disfraza con nombres similares (ej. svch0st.exe).'
  },
  {
    id: 'proc2',
    nombre: 'chrome.exe',
    descripcion: 'Proceso del navegador Google Chrome.',
    esMalware: false,
    explicacion: 'Es el navegador Chrome. Es normal ver varios procesos chrome.exe.'
  },
  {
    id: 'proc3',
    nombre: 'svch0st.exe',
    descripcion: 'Proceso que aparece en el Administrador de tareas, consume mucha CPU y no lo reconoces.',
    esMalware: true,
    explicacion: 'El nombre es muy parecido a svchost.exe pero con un cero en lugar de la letra "o". Es una táctica clásica para pasar desapercibido. Debe ser investigado y eliminado con un antivirus.'
  },
  {
    id: 'proc4',
    nombre: 'explorer.exe',
    descripcion: 'Muestra el escritorio y las carpetas de Windows.',
    esMalware: false,
    explicacion: 'explorer.exe es el shell de Windows, es legítimo.'
  },
  {
    id: 'proc5',
    nombre: 'winlogon.exe',
    descripcion: 'Proceso del sistema que gestiona el inicio de sesión.',
    esMalware: false,
    explicacion: 'winlogon.exe es de Windows. Si ves dos procesos con ese nombre, uno puede ser falso.'
  },
  {
    id: 'proc6',
    nombre: 'mimikatz.exe',
    descripcion: 'Herramienta usada por atacantes para robar credenciales del sistema.',
    esMalware: true,
    explicacion: 'Si encuentras este proceso sin haberlo instalado tú, es una señal de que tu equipo está comprometido. Elimínalo de inmediato.'
  }
];

export const ESCENARIOS_FIREWALL: EscenarioFirewall[] = [
  {
    id: 'fw1',
    titulo: 'Actualización de un juego',
    descripcion: 'Instalaste un juego nuevo y al iniciarlo, el firewall muestra una alerta preguntando si permitir que se comunique por internet. ¿Qué haces?',
    opciones: [
      'Bloquear siempre, no confío en ningún programa',
      'Permitir solo si estás seguro de que es un juego legítimo que necesita conexión',
      'Permitir siempre, sin revisar'
    ],
    opcionCorrecta: 1,
    explicacion: 'Debes permitir solo programas que reconozcas y que necesiten conexión. Un juego legítimo la necesita para actualizarse y jugar online.'
  },
  {
    id: 'fw2',
    titulo: 'Programa desconocido pide acceso',
    descripcion: 'Un programa llamado "winupdater.exe" que nunca has visto antes pide acceso a internet a través del firewall. ¿Qué haces?',
    opciones: [
      'Permitir, porque suena a actualización de Windows',
      'Bloquear e investigar',
      'Ignorar la alerta'
    ],
    opcionCorrecta: 1,
    explicacion: 'Nunca permitas programas que no reconozcas. Investiga primero su nombre en Google. Podría ser malware.'
  },
  {
    id: 'fw3',
    titulo: 'Firewall desactivado',
    descripcion: 'Te das cuenta de que el firewall de tu PC está desactivado. ¿Qué haces?',
    opciones: [
      'Lo dejo así, no es importante',
      'Lo activo inmediatamente',
      'Solo lo activo cuando me acuerdo'
    ],
    opcionCorrecta: 1,
    explicacion: 'El firewall debe estar siempre activo. Es tu guardia de seguridad contra conexiones no autorizadas.'
  }
];

export const PREGUNTAS_QUIZ_3RO: PreguntaQuiz3ro[] = [
  {
    id: 1,
    pregunta: '¿Cuál es la principal función de un firewall?',
    opciones: [
      'Acelerar la conexión a internet',
      'Filtrar el tráfico de red y bloquear conexiones no autorizadas',
      'Eliminar virus del disco duro'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El firewall controla qué conexiones entran y salen de tu equipo, bloqueando las no deseadas.'
  },
  {
    id: 2,
    pregunta: '¿Qué es una copia de seguridad (backup)?',
    opciones: [
      'Una copia de tus archivos guardada en otro lugar (nube, pendrive) para recuperarlos si se pierden',
      'Un programa antivirus',
      'Un tipo de malware'
    ],
    respuestaCorrecta: 0,
    explicacion: 'El backup es una copia de seguridad de tus datos, que te permite restaurarlos ante fallos o ataques.'
  },
  {
    id: 3,
    pregunta: '¿Qué significa la regla 3-2-1 en backups?',
    opciones: [
      '3 copias en el mismo disco duro',
      '3 copias de tus datos, en 2 medios diferentes, y 1 copia fuera de casa',
      'Hacer 3 backups cada 2 días y guardarlos 1 año'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La regla 3-2-1: 3 copias totales, en 2 tipos de soporte distintos, y al menos 1 copia almacenada en otra ubicación física.'
  },
  {
    id: 4,
    pregunta: '¿Qué debes hacer si encuentras un proceso sospechoso en el Administrador de tareas?',
    opciones: [
      'Ignorarlo',
      'Investigar su nombre en internet y, si es malware, eliminarlo con un antivirus',
      'Apagar la computadora y no volver a usarla'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Investigar es clave. Algunos procesos son legítimos, pero otros pueden ser malware disfrazado.'
  }
];

// ========== HOOK ==========

export const useAuditoria3ro = () => {
  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_3RO.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

  // Simulador de procesos sospechosos
  const [procesosEvaluados, setProcesosEvaluados] = useState<Record<string, boolean>>({});
  const [resultadoProceso, setResultadoProceso] = useState<Record<string, boolean>>({});
  const evaluarProceso = (id: string, esMalware: boolean) => {
    const proceso = PROCESOS_SOSPECHOSOS.find(p => p.id === id);
    if (!proceso) return;
    const correcto = esMalware === proceso.esMalware;
    setResultadoProceso(prev => ({ ...prev, [id]: correcto }));
    // Podemos guardar también la respuesta del usuario si se necesita
  };

  // Simulador de firewall
  const [respuestasFirewall, setRespuestasFirewall] = useState<Record<string, number>>({});
  const [resultadoFirewall, setResultadoFirewall] = useState<Record<string, boolean>>({});
  const responderFirewall = (id: string, opcionIndex: number) => {
    setRespuestasFirewall(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_FIREWALL.find(e => e.id === id);
    if (escenario) {
      setResultadoFirewall(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
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
    PREGUNTAS_QUIZ_3RO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_QUIZ_3RO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    // checklist
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    // procesos
    procesos: PROCESOS_SOSPECHOSOS,
    resultadoProceso,
    evaluarProceso,
    // firewall
    escenariosFirewall: ESCENARIOS_FIREWALL,
    respuestasFirewall,
    responderFirewall,
    resultadoFirewall,
    // quiz
    preguntasQuiz: PREGUNTAS_QUIZ_3RO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};