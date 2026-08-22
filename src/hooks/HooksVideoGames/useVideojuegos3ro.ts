import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoVideojuegos3ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface ArchivoMod {
  id: string;
  nombre: string;
  descripcion: string;
  esMalicioso: boolean;
  explicacion: string;
}

export interface EscenarioMod {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoJuegos3ro {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaVideojuegos3ro {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_VIDEOJUEGOS_3RO: HabitoVideojuegos3ro[] = [
  {
    id: '1',
    texto: 'Escaneo con VirusTotal cualquier mod, hack o APK descargado antes de ejecutarlo.',
    categoria: 'Análisis Previo',
    enfoque: 'VirusTotal escanea con más de 70 antivirus y detecta malware oculto en archivos de juegos.'
  },
  {
    id: '2',
    texto: 'Verifico que el archivo no tenga doble extensión (ej: "mod.exe" disfrazado de "mod.zip").',
    categoria: 'Extensiones',
    enfoque: 'La doble extensión es una táctica clásica para ocultar ejecutables maliciosos.'
  },
  {
    id: '3',
    texto: 'Descargo mods solo desde comunidades oficiales (Steam Workshop, páginas verificadas del juego).',
    categoria: 'Fuentes Confiables',
    enfoque: 'Los sitios de terceros suelen alterar los archivos para incluir malware.'
  },
  {
    id: '4',
    texto: 'Reviso los permisos que pide un APK antes de instalarlo en mi celular.',
    categoria: 'Permisos APK',
    enfoque: 'Los mods falsos de Free Fire o Blood Strike piden permisos excesivos para robar datos.'
  },
  {
    id: '5',
    texto: 'No instalo APKs de juegos desde enlaces acortados o mensajes de WhatsApp.',
    categoria: 'APKs Falsos',
    enfoque: 'Los APKs fuera de Google Play pueden ser versiones modificadas con malware.'
  }
];

export const ARCHIVOS_MOD: ArchivoMod[] = [
  {
    id: 'mod1',
    nombre: 'mod_menu_freefire.apk',
    descripcion: 'APK descargado de un grupo de WhatsApp que promete "menú de hacks". Pide permisos de SMS, contactos y micrófono.',
    esMalicioso: true,
    explicacion: 'Es un APK falso. Los "menús de hacks" no existen para Free Fire. Pide permisos excesivos para robar SMS bancarios y contactos.'
  },
  {
    id: 'mod2',
    nombre: 'texture_pack_minecraft.zip',
    descripcion: 'Paquete de texturas descargado desde la comunidad oficial de Minecraft (Planet Minecraft).',
    esMalicioso: false,
    explicacion: 'Proviene de una fuente confiable. Aun así, es buena práctica escanearlo antes de instalarlo.'
  },
  {
    id: 'mod3',
    nombre: 'aimbot_blood_strike.exe',
    descripcion: 'Ejecutable descargado de un video de YouTube con enlace acortado. Sin firma digital y pide permisos de administrador.',
    esMalicioso: true,
    explicacion: 'Es un malware clásico: .exe sin firma, de fuente no oficial y pidiendo permisos elevados. Nunca lo ejecutes.'
  },
  {
    id: 'mod4',
    nombre: 'skin_para_roblox.rar',
    descripcion: 'Archivo RAR de un foro que promete skins gratis. Al extraer, contiene un archivo "activador.exe".',
    esMalicioso: true,
    explicacion: 'Roblox no permite mods con ejecutables. El "activador.exe" es un keylogger que roba contraseñas.'
  },
  {
    id: 'mod5',
    nombre: 'shader_pack_minecraft.zip',
    descripcion: 'Shader pack descargado desde la página oficial del creador (con hash verificado).',
    esMalicioso: false,
    explicacion: 'Proviene del sitio oficial del desarrollador y tiene hash para verificar integridad. Es seguro.'
  }
];

export const ESCENARIOS_MOD: EscenarioMod[] = [
  {
    id: 'esc1',
    titulo: 'Un APK de Free Fire con "todo desbloqueado"',
    descripcion: 'Un compañero te pasa un APK de Free Fire modificado que desbloquea skins y diamantes. Solo debes instalarlo fuera de Google Play. ¿Qué haces?',
    opciones: [
      'Lo instalo, es de un compañero de confianza',
      'No lo instalo y le explico los riesgos: puede tener malware y robar su cuenta',
      'Lo instalo en una computadora para probarlo'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los APKs modificados fuera de Google Play son de altísimo riesgo. Pueden contener malware que roba datos y credenciales.'
  },
  {
    id: 'esc2',
    titulo: 'Mod con doble extensión',
    descripcion: 'Descargas un "mod" para Blood Strike desde un enlace. El archivo se llama "mod.zip.exe". ¿Qué haces?',
    opciones: [
      'Lo ejecuto, es un zip',
      'No lo ejecuto. Es un ejecutable disfrazado y probablemente malware.',
      'Cambio la extensión a .zip y lo abro'
    ],
    opcionCorrecta: 1,
    explicacion: 'La doble extensión .zip.exe oculta un programa malicioso. Renombrarlo no lo hace seguro. Elimínalo.'
  },
  {
    id: 'esc3',
    titulo: 'Análisis de un mod con VirusTotal',
    descripcion: 'Quieres instalar un mod de Minecraft que descargaste de un foro. ¿Cuál es el primer paso?',
    opciones: [
      'Instalarlo directamente',
      'Subirlo a VirusTotal para escanearlo con múltiples antivirus',
      'Pasárselo a un amigo para que lo pruebe primero'
    ],
    opcionCorrecta: 1,
    explicacion: 'VirusTotal analiza el archivo con más de 70 antivirus y te indica si es malicioso. Es un paso obligatorio.'
  },
  {
    id: 'esc4',
    titulo: 'Mod pide permisos excesivos',
    descripcion: 'Instalas un APK de un juego y te pide acceso a SMS, contactos y cámara. El juego original no pide esos permisos. ¿Qué haces?',
    opciones: [
      'Acepto, debe ser parte del mod',
      'No lo instalo y lo desinstalo. Pide permisos que no necesita.',
      'Acepto solo algunos permisos'
    ],
    opcionCorrecta: 1,
    explicacion: 'Los permisos excesivos son señal de malware. Un mod legítimo no necesita acceder a tus SMS o contactos.'
  }
];

export const VIDEOS_VIDEOJUEGOS_3RO: VideoJuegos3ro[] = [
  {
    id: 'v1',
    titulo: 'Cómo analizar un mod con VirusTotal',
    url: 'https://www.youtube.com/embed/ejemplo3ro1',
    descripcion: 'Tutorial para escanear archivos de mods y APKs antes de instalarlos.'
  },
  {
    id: 'v2',
    titulo: 'Los peligros de los APKs modificados',
    url: 'https://www.youtube.com/embed/ejemplo3ro2',
    descripcion: 'Cómo los APKs falsos de Free Fire y otros juegos roban cuentas y datos.'
  },
  {
    id: 'v3',
    titulo: 'Doble extensión y otras tácticas de malware',
    url: 'https://www.youtube.com/embed/ejemplo3ro3',
    descripcion: 'Aprende a detectar archivos maliciosos disfrazados de mods o texturas.'
  }
];

export const PREGUNTAS_VIDEOJUEGOS_3RO: PreguntaVideojuegos3ro[] = [
  {
    id: 1,
    pregunta: '¿Qué es VirusTotal y para qué se usa en videojuegos?',
    opciones: [
      'Un antivirus que se instala en el celular',
      'Un servicio en línea que escanea archivos con múltiples antivirus',
      'Un juego online'
    ],
    respuestaCorrecta: 1,
    explicacion: 'VirusTotal analiza archivos (mods, APKs) con más de 70 antivirus y muestra si contienen malware.'
  },
  {
    id: 2,
    pregunta: '¿Por qué es peligrosa una doble extensión como "mod.zip.exe"?',
    opciones: [
      'Porque el archivo es más pesado',
      'Porque oculta un ejecutable malicioso haciéndolo parecer un archivo comprimido',
      'Porque no se puede abrir'
    ],
    respuestaCorrecta: 1,
    explicacion: 'El sistema operativo ve la extensión .exe y ejecuta el programa, no muestra el contenido del zip.'
  },
  {
    id: 3,
    pregunta: '¿Dónde es seguro descargar mods para Minecraft?',
    opciones: [
      'Desde cualquier foro',
      'Desde comunidades oficiales y sitios verificados (Steam Workshop, Planet Minecraft)',
      'Desde enlaces de YouTube'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Las fuentes oficiales y verificadas reducen el riesgo de malware. Evita enlaces acortados y sitios de dudosa reputación.'
  },
  {
    id: 4,
    pregunta: '¿Qué indica que un APK de juego pide permisos de SMS y contactos?',
    opciones: [
      'Que es una versión más completa',
      'Que es probablemente malware que roba información',
      'Que es un requisito normal del juego'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Los juegos legítimos no necesitan acceso a SMS ni contactos. Esos permisos son típicos de malware.'
  }
];

// ========== HOOK ==========

export const useVideojuegos3ro = () => {
  // Laboratorio de archivos de mods
  const [respuestasMod, setRespuestasMod] = useState<Record<string, boolean>>({});
  const evaluarMod = (id: string, esMalicioso: boolean) => {
    setRespuestasMod(prev => ({ ...prev, [id]: esMalicioso }));
  };

  // Escenarios de mods
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_MOD.find(e => e.id === id);
    if (escenario) {
      setResultadoEscenario(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
    }
  };

  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_VIDEOJUEGOS_3RO.length;
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
    PREGUNTAS_VIDEOJUEGOS_3RO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_VIDEOJUEGOS_3RO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    archivosMod: ARCHIVOS_MOD,
    respuestasMod,
    evaluarMod,
    escenarios: ESCENARIOS_MOD,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    videos: VIDEOS_VIDEOJUEGOS_3RO,
    preguntasQuiz: PREGUNTAS_VIDEOJUEGOS_3RO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};