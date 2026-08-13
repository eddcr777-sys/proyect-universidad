import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface Habito4to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface TraficoRed {
  id: string;
  protocolo: string;
  descripcion: string;
  esSeguro: boolean; // true = cifrado, false = texto plano
  explicacion: string;
}

export interface EscenarioRedPublica {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface PreguntaQuiz4to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_4TO: Habito4to[] = [
  {
    id: '1',
    texto: 'Verifico que las páginas donde ingreso contraseñas usen HTTPS (candado verde en la barra).',
    categoria: 'Navegación',
    enfoque: 'HTTPS cifra la comunicación entre tu navegador y el servidor, impidiendo que otros lean tus datos.'
  },
  {
    id: '2',
    texto: 'Uso una VPN cuando me conecto a redes Wi-Fi públicas (cafeterías, plazas, aeropuertos).',
    categoria: 'Redes Abiertas',
    enfoque: 'La VPN cifra todo tu tráfico, incluso el DNS, protegiéndote de miradas indiscretas.'
  },
  {
    id: '3',
    texto: 'Evito conectarme automáticamente a redes abiertas; reviso antes el nombre de la red.',
    categoria: 'Conexiones',
    enfoque: 'Previene ataques de "gemelo malvado", donde un atacante crea un punto de acceso falso.'
  },
  {
    id: '4',
    texto: 'He comprobado que mis aplicaciones de mensajería usan cifrado de extremo a extremo.',
    categoria: 'Comunicaciones',
    enfoque: 'Garantiza que solo tú y el destinatario pueden leer los mensajes, ni siquiera la empresa.'
  },
  {
    id: '5',
    texto: 'No comparto archivos por FTP o aplicaciones que transmiten en texto plano.',
    categoria: 'Transferencia',
    enfoque: 'Protocolos antiguos como FTP envían credenciales y datos sin cifrar; prefiere SFTP o servicios en la nube.'
  }
];

export const TRAFICOS_RED: TraficoRed[] = [
  {
    id: 'trafico1',
    protocolo: 'HTTPS',
    descripcion: 'Conexión a un banco en línea o a tu correo web.',
    esSeguro: true,
    explicacion: 'HTTPS usa TLS para cifrar los datos. Aunque alguien capture los paquetes, solo verá datos cifrados.'
  },
  {
    id: 'trafico2',
    protocolo: 'HTTP',
    descripcion: 'Visita a una página antigua sin candado (http://ejemplo.com).',
    esSeguro: false,
    explicacion: 'HTTP transmite todo en texto plano. Cualquier persona en la misma red puede leer contraseñas, cookies y contenido.'
  },
  {
    id: 'trafico3',
    protocolo: 'FTP',
    descripcion: 'Transferencia de archivos a un servidor usando un programa FTP clásico.',
    esSeguro: false,
    explicacion: 'FTP envía usuario y contraseña sin cifrar. Debes usar SFTP (sobre SSH) o FTPS (sobre SSL).'
  },
  {
    id: 'trafico4',
    protocolo: 'SSH',
    descripcion: 'Conexión remota a una computadora usando terminal (ej. para administrar un servidor).',
    esSeguro: true,
    explicacion: 'SSH cifra toda la sesión, incluidas las contraseñas y los comandos ejecutados.'
  },
  {
    id: 'trafico5',
    protocolo: 'DNS sin cifrar',
    descripcion: 'Tu computadora resuelve nombres de dominio (ej. google.com → IP) usando el DNS por defecto del router.',
    esSeguro: false,
    explicacion: 'Las consultas DNS sin cifrar revelan qué sitios visitas. Un atacante puede envenenar el DNS y redirigirte a páginas falsas.'
  },
  {
    id: 'trafico6',
    protocolo: 'VPN',
    descripcion: 'Túnel cifrado que encapsula todo el tráfico de tu dispositivo hacia un servidor externo.',
    esSeguro: true,
    explicacion: 'La VPN protege incluso el DNS y las conexiones HTTP, ocultando tu actividad a la red local.'
  }
];

export const ESCENARIOS_RED_PUBLICA: EscenarioRedPublica[] = [
  {
    id: 'red1',
    titulo: 'Wi-Fi del centro comercial',
    descripcion: 'Ves una red llamada "WiFi_Gratis_CentroComercial". No pide contraseña. Quieres revisar tu correo. ¿Qué haces?',
    opciones: [
      'Conectarte y revisar el correo rápidamente, no pasa nada',
      'Conectarte pero usar VPN antes de iniciar sesión',
      'No conectarte y usar datos móviles'
    ],
    opcionCorrecta: 1,
    explicacion: 'Si debes conectarte a una red abierta, siempre usa VPN para cifrar tu tráfico. También puedes usar datos móviles, que son más seguros.'
  },
  {
    id: 'red2',
    titulo: 'Página sin candado',
    descripcion: 'Estás en una cafetería conectado al Wi-Fi. Intentas entrar a un foro y la barra muestra "http://" sin candado. ¿Qué haces?',
    opciones: [
      'Continuar, porque es solo un foro',
      'No ingresar contraseñas y considerar abandonar el sitio',
      'Añadir manualmente una "s" a http para hacerlo seguro'
    ],
    opcionCorrecta: 1,
    explicacion: 'Si la página usa HTTP, toda la información viaja en texto claro. No ingreses datos personales. Escribir "https://" no funciona si el servidor no lo soporta.'
  },
  {
    id: 'red3',
    titulo: 'Red duplicada',
    descripcion: 'Encuentras dos redes con el mismo nombre de la cafetería: "Café_WiFi" y "Café_WiFi_5G". ¿Cuál eliges?',
    opciones: [
      'Cualquiera, son lo mismo',
      'Pregunto al personal cuál es la oficial',
      'Me conecto a la que tenga mejor señal'
    ],
    opcionCorrecta: 1,
    explicacion: 'Un atacante puede crear un punto de acceso falso con un nombre similar. Siempre verifica con el personal cuál es la red legítima.'
  }
];

export const PREGUNTAS_QUIZ_4TO: PreguntaQuiz4to[] = [
  {
    id: 1,
    pregunta: '¿Cuál es la diferencia principal entre HTTP y HTTPS?',
    opciones: [
      'HTTPS es más rápido que HTTP',
      'HTTPS cifra la información, HTTP no',
      'HTTP es solo para computadoras, HTTPS para celulares'
    ],
    respuestaCorrecta: 1,
    explicacion: 'HTTPS usa TLS/SSL para cifrar los datos, impidiendo que terceros lean la comunicación.'
  },
  {
    id: 2,
    pregunta: '¿Qué es un sniffer?',
    opciones: [
      'Un programa que captura paquetes de red para analizarlos',
      'Un tipo de virus que roba contraseñas',
      'Un antivirus para redes Wi-Fi'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Wireshark es el sniffer más conocido. Permite ver los paquetes que circulan por una red, con fines de auditoría o diagnóstico.'
  },
  {
    id: 3,
    pregunta: '¿Por qué el DNS sin cifrar es un riesgo?',
    opciones: [
      'Porque consume muchos datos móviles',
      'Porque revela los sitios que visitas y puede ser manipulado para llevarte a páginas falsas',
      'Porque hace que el internet sea más lento'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Las consultas DNS sin cifrar permiten a terceros saber tu historial de navegación y redirigirte a sitios maliciosos (DNS spoofing).'
  },
  {
    id: 4,
    pregunta: '¿Qué protocolo usarías para transferir archivos de forma segura?',
    opciones: [
      'FTP',
      'SFTP o FTPS',
      'HTTP'
    ],
    respuestaCorrecta: 1,
    explicacion: 'FTP es inseguro. SFTP (basado en SSH) y FTPS (basado en SSL/TLS) cifran la conexión y las credenciales.'
  }
];

// ========== HOOK ==========

export const useAuditoria4to = () => {
  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_4TO.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

  // Simulador de tráfico de red (identificar si es seguro o no)
  const [resultadoTrafico, setResultadoTrafico] = useState<Record<string, boolean>>({});
  const evaluarTrafico = (id: string, esSeguro: boolean) => {
    const trafico = TRAFICOS_RED.find(t => t.id === id);
    if (!trafico) return;
    const correcto = esSeguro === trafico.esSeguro;
    setResultadoTrafico(prev => ({ ...prev, [id]: correcto }));
  };

  // Escenarios de red pública
  const [respuestasRed, setRespuestasRed] = useState<Record<string, number>>({});
  const [resultadoRed, setResultadoRed] = useState<Record<string, boolean>>({});
  const responderRed = (id: string, opcionIndex: number) => {
    setRespuestasRed(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_RED_PUBLICA.find(e => e.id === id);
    if (escenario) {
      setResultadoRed(prev => ({ ...prev, [id]: opcionIndex === escenario.opcionCorrecta }));
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
    PREGUNTAS_QUIZ_4TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_QUIZ_4TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    // checklist
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    // tráfico de red
    traficos: TRAFICOS_RED,
    resultadoTrafico,
    evaluarTrafico,
    // escenarios
    escenariosRed: ESCENARIOS_RED_PUBLICA,
    respuestasRed,
    responderRed,
    resultadoRed,
    // quiz
    preguntasQuiz: PREGUNTAS_QUIZ_4TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};