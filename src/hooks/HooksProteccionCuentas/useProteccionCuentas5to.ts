import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface HabitoCuentas5to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface EscenarioAcceso {
  id: string;
  titulo: string;
  descripcion: string;
  opciones: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface VideoEducativo5to {
  id: string;
  titulo: string;
  url: string;
  descripcion: string;
}

export interface PreguntaCuentas5to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_CUENTAS_5TO: HabitoCuentas5to[] = [
  {
    id: '1',
    texto: 'Entiendo qué es SSO (Single Sign-On) y sus ventajas y riesgos.',
    categoria: 'SSO',
    enfoque: 'Permite acceder a múltiples servicios con una sola identidad, pero si se compromete, afecta a todos.'
  },
  {
    id: '2',
    texto: 'Sé diferenciar autenticación (quién eres) de autorización (qué puedes hacer) en OAuth.',
    categoria: 'OAuth',
    enfoque: 'OAuth delega permisos sin compartir contraseñas, como cuando das acceso a una app sin darle tu clave.'
  },
  {
    id: '3',
    texto: 'Conozco los requisitos básicos de una política de contraseñas corporativa (longitud, expiración, historial).',
    categoria: 'Políticas',
    enfoque: 'Las organizaciones deben equilibrar seguridad y usabilidad para evitar que los usuarios anoten contraseñas.'
  },
  {
    id: '4',
    texto: 'Sé qué es una auditoría de accesos y por qué es vital revisar cuentas inactivas.',
    categoria: 'Auditoría',
    enfoque: 'Cuentas de exempleados o inactivas son puertas traseras para atacantes.'
  },
  {
    id: '5',
    texto: 'Reconozco la importancia de cumplir normas como ISO 27001 en la gestión de identidades.',
    categoria: 'Cumplimiento',
    enfoque: 'La normativa exige controles de acceso documentados y revisiones periódicas.'
  }
];

export const ESCENARIOS_ACCESO: EscenarioAcceso[] = [
  {
    id: 'esc1',
    titulo: 'Empleado despedido con acceso activo',
    descripcion: 'Un empleado deja la empresa, pero su cuenta de correo y acceso al sistema siguen activos. ¿Qué debes hacer?',
    opciones: [
      'Esperar a que el empleado lo solicite',
      'Revocar inmediatamente todos los accesos siguiendo el procedimiento de baja',
      'Dejar la cuenta por si vuelve'
    ],
    opcionCorrecta: 1,
    explicacion: 'La revocación inmediata es un control crítico. Cuentas de exempleados son un vector de ataque frecuente.'
  },
  {
    id: 'esc2',
    titulo: 'Uso de SSO con proveedor externo',
    descripcion: 'La empresa decide implementar SSO con un proveedor en la nube. ¿Cuál es el riesgo principal?',
    opciones: [
      'Que los usuarios tengan que recordar menos contraseñas',
      'Que si la identidad maestra se compromete, el atacante accede a todos los sistemas',
      'Que sea más difícil de usar'
    ],
    opcionCorrecta: 1,
    explicacion: 'El SSO centraliza la autenticación. Si la cuenta principal cae, todos los servicios quedan expuestos. Por eso se refuerza con MFA.'
  },
  {
    id: 'esc3',
    titulo: 'Política de contraseñas demasiado estricta',
    descripcion: 'Una empresa obliga a cambiar contraseñas cada 15 días con 20 caracteres imposibles. Los empleados empiezan a anotarlas en papel. ¿Qué debe hacer la empresa?',
    opciones: [
      'Mantener la política, es muy segura',
      'Ajustar la política para equilibrar seguridad y usabilidad, promoviendo gestores de contraseñas',
      'Eliminar las contraseñas'
    ],
    opcionCorrecta: 1,
    explicacion: 'Políticas irracionales llevan a malas prácticas. Lo ideal es usar frases de contraseña y gestores corporativos.'
  },
  {
    id: 'esc4',
    titulo: 'Auditoría de accesos',
    descripcion: 'Estás auditando los accesos de una red escolar. Encuentras 30 cuentas de estudiantes que se graduaron hace un año y siguen activas. ¿Qué recomiendas?',
    opciones: [
      'Desactivarlas todas y documentar el hallazgo',
      'Dejarlas por si necesitan entrar',
      'Cambiarles la contraseña'
    ],
    opcionCorrecta: 0,
    explicacion: 'Las cuentas inactivas deben desactivarse de inmediato. Es un hallazgo típico de auditoría que reduce la superficie de ataque.'
  }
];

export const VIDEOS_CUENTAS_5TO: VideoEducativo5to[] = [
  {
    id: 'v1',
    titulo: '¿Qué es SSO y cómo funciona?',
    url: 'https://www.youtube.com/embed/5X0nC6C9S1E',
    descripcion: 'Explicación de Single Sign-On y sus beneficios y riesgos en entornos corporativos.'
  },
  {
    id: 'v2',
    titulo: 'OAuth 2.0 explicado simple',
    url: 'https://www.youtube.com/embed/CPbvxxslDTU',
    descripcion: 'Cómo OAuth permite autorizar aplicaciones sin compartir contraseñas.'
  },
  {
    id: 'v3',
    titulo: 'ISO 27001 y gestión de identidades',
    url: 'https://www.youtube.com/embed/8jK5Q6Z3y5A',
    descripcion: 'Visión general de la norma ISO 27001 y su aplicación en controles de acceso.'
  }
];

export const PREGUNTAS_CUENTAS_5TO: PreguntaCuentas5to[] = [
  {
    id: 1,
    pregunta: '¿Qué significa SSO (Single Sign-On)?',
    opciones: [
      'Un método para cifrar contraseñas',
      'Iniciar sesión una sola vez para acceder a múltiples sistemas',
      'Una política de contraseñas'
    ],
    respuestaCorrecta: 1,
    explicacion: 'SSO permite autenticarse una vez y usar varios servicios sin volver a ingresar credenciales.'
  },
  {
    id: 2,
    pregunta: '¿Cuál es la diferencia principal entre autenticación y autorización?',
    opciones: [
      'Autenticación verifica quién eres; autorización determina qué puedes hacer',
      'Autorización verifica quién eres; autenticación determina qué puedes hacer',
      'Son lo mismo'
    ],
    respuestaCorrecta: 0,
    explicacion: 'La autenticación confirma tu identidad; la autorización define los permisos sobre recursos.'
  },
  {
    id: 3,
    pregunta: '¿Por qué es crítico revocar los accesos de un empleado que deja la organización?',
    opciones: [
      'Para liberar espacio en el servidor',
      'Para evitar que la cuenta sea utilizada como puerta trasera por atacantes',
      'No es crítico, puede esperar'
    ],
    respuestaCorrecta: 1,
    explicacion: 'Las cuentas sin revocar son un vector de ataque: pueden ser usadas por exempleados maliciosos o por atacantes que las comprometan.'
  },
  {
    id: 4,
    pregunta: '¿Qué normativa internacional es referencia para la gestión de seguridad de la información, incluyendo accesos?',
    opciones: [
      'ISO 9001',
      'ISO 27001',
      'ISO 14001'
    ],
    respuestaCorrecta: 1,
    explicacion: 'ISO 27001 establece requisitos para un sistema de gestión de seguridad de la información, incluyendo control de accesos.'
  }
];

// ========== HOOK ==========

export const useProteccionCuentas5to = () => {
  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_CUENTAS_5TO.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

  // Escenarios
  const [respuestasEscenario, setRespuestasEscenario] = useState<Record<string, number>>({});
  const [resultadoEscenario, setResultadoEscenario] = useState<Record<string, boolean>>({});
  const responderEscenario = (id: string, opcionIndex: number) => {
    setRespuestasEscenario(prev => ({ ...prev, [id]: opcionIndex }));
    const escenario = ESCENARIOS_ACCESO.find(e => e.id === id);
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
    PREGUNTAS_CUENTAS_5TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_CUENTAS_5TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    escenarios: ESCENARIOS_ACCESO,
    respuestasEscenario,
    responderEscenario,
    resultadoEscenario,
    videos: VIDEOS_CUENTAS_5TO,
    preguntasQuiz: PREGUNTAS_CUENTAS_5TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};