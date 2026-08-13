import { useState, useMemo } from 'react';

// ========== TIPOS ==========

export interface Habito5to {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

export interface RiesgoEjemplo {
  id: string;
  titulo: string;
  descripcion: string;
  probabilidad: 'Alta' | 'Media' | 'Baja';
  impacto: 'Alto' | 'Medio' | 'Bajo';
  criticidadCorrecta: 'Crítico' | 'Alto' | 'Medio' | 'Bajo';
  explicacion: string;
}

export interface HallazgoSimulado {
  id: string;
  contexto: string;
  problema: string;
  opcionesInforme: string[];
  opcionCorrecta: number;
  explicacion: string;
}

export interface PreguntaQuiz5to {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// ========== DATOS ==========

export const HABITOS_5TO: Habito5to[] = [
  {
    id: '1',
    texto: 'Sé elaborar una matriz simple de riesgos para identificar vulnerabilidades en mi liceo u hogar.',
    categoria: 'Diagnóstico',
    enfoque: 'Clasifica los riesgos por probabilidad e impacto antes de que ocurran fallas.'
  },
  {
    id: '2',
    texto: 'Compruebo que los equipos compartidos cumplan con políticas de contraseñas y privacidad básicas.',
    categoria: 'Políticas',
    enfoque: 'Asegura que el grupo siga pautas colectivas de protección digital.'
  },
  {
    id: '3',
    texto: 'Sé redactar un informe breve de hallazgos con recomendaciones claras de corrección.',
    categoria: 'Informes Técnicos',
    enfoque: 'Sintetiza la auditoría en un documento accesible para autoridades y profesores.'
  },
  {
    id: '4',
    texto: 'Oriento a estudiantes de grados menores sobre el uso ético y seguro de la red.',
    categoria: 'Liderazgo Digital',
    enfoque: 'Fomenta el rol de mentor cibernético como futuro graduando del liceo.'
  },
  {
    id: '5',
    texto: 'He participado en una actividad de divulgación responsable sobre un fallo detectado en un entorno controlado.',
    categoria: 'Ética Profesional',
    enfoque: 'Aplica el protocolo de notificar en privado antes de hacer pública una vulnerabilidad.'
  }
];

export const RIESGOS_EJEMPLO: RiesgoEjemplo[] = [
  {
    id: 'riesgo1',
    titulo: 'Contraseñas débiles en cuentas del personal',
    descripcion: 'Varios profesores usan la misma contraseña sencilla para el correo y la plataforma de notas.',
    probabilidad: 'Alta',
    impacto: 'Alto',
    criticidadCorrecta: 'Crítico',
    explicacion: 'Probabilidad alta + impacto alto = Riesgo crítico. Un atacante podría acceder a toda la información académica.'
  },
  {
    id: 'riesgo2',
    titulo: 'Wi-Fi del liceo sin contraseña para invitados',
    descripcion: 'La red de invitados del liceo está abierta y no aísla los equipos administrativos.',
    probabilidad: 'Media',
    impacto: 'Alto',
    criticidadCorrecta: 'Alto',
    explicacion: 'Probabilidad media pero impacto alto (acceso a datos sensibles) → riesgo alto.'
  },
  {
    id: 'riesgo3',
    titulo: 'No se realizan copias de seguridad de las notas',
    descripcion: 'El servidor de calificaciones no tiene backups automáticos.',
    probabilidad: 'Baja',
    impacto: 'Alto',
    criticidadCorrecta: 'Alto',
    explicacion: 'Impacto alto (pérdida total de notas) aunque probabilidad baja → riesgo alto.'
  },
  {
    id: 'riesgo4',
    titulo: 'Estudiantes comparten claves de Wi-Fi en grupos de WhatsApp',
    descripcion: 'La clave de la red principal circula en chats estudiantiles.',
    probabilidad: 'Alta',
    impacto: 'Medio',
    criticidadCorrecta: 'Alto',
    explicacion: 'Alta probabilidad y impacto medio → riesgo alto. Debe cambiarse la clave y segmentar la red.'
  }
];

export const HALLAZGOS_SIMULADOS: HallazgoSimulado[] = [
  {
    id: 'hallazgo1',
    contexto: 'Encontraste que varios equipos del laboratorio no tienen antivirus actualizado.',
    problema: '¿Cómo redactarías el hallazgo en un informe?',
    opcionesInforme: [
      '“Los computadores están viejos y no sirven.”',
      '“Se detectó que 5 de 8 equipos del laboratorio de informática no tienen actualizado el antivirus (Windows Defender desactualizado desde hace 3 meses). Esto aumenta el riesgo de infección por malware.”',
      '“Hay que comprar antivirus nuevos.”'
    ],
    opcionCorrecta: 1,
    explicacion: 'Un informe profesional debe ser específico, medible y describir el problema técnico con claridad.'
  },
  {
    id: 'hallazgo2',
    contexto: 'Detectaste que la red Wi-Fi del liceo usa cifrado WEP, obsoleto y vulnerable.',
    problema: '¿Cómo lo reportarías?',
    opcionesInforme: [
      '“El Wi-Fi es malo.”',
      '“La red inalámbrica utiliza WEP, un protocolo de cifrado roto que puede ser descifrado en minutos. Se recomienda migrar a WPA3 o WPA2-AES.”',
      '“Deben cambiar el router.”'
    ],
    opcionCorrecta: 1,
    explicacion: 'Incluir la evidencia (WEP) y la recomendación (WPA3) es esencial para que la dirección tome acción.'
  },
  {
    id: 'hallazgo3',
    contexto: 'Notaste que no hay una política de copias de seguridad de las calificaciones.',
    problema: '¿Qué redacción es más adecuada para un directivo?',
    opcionesInforme: [
      '“Se pueden perder las notas.”',
      '“No se evidencia un procedimiento de respaldo automático de la base de datos de calificaciones. Se recomienda implementar copias diarias a la nube con la regla 3-2-1.”',
      '“Deberían guardar las notas en un pendrive.”'
    ],
    opcionCorrecta: 1,
    explicacion: 'La recomendación debe ser concreta, accionable y alineada con estándares (regla 3-2-1).'
  }
];

export const PREGUNTAS_QUIZ_5TO: PreguntaQuiz5to[] = [
  {
    id: 1,
    pregunta: '¿Qué es una matriz de riesgo?',
    opciones: [
      'Una tabla donde se clasifican amenazas según probabilidad e impacto para priorizar acciones',
      'Un programa para hacer gráficos',
      'Una lista de contraseñas seguras'
    ],
    respuestaCorrecta: 0,
    explicacion: 'La matriz de riesgo cruza probabilidad e impacto para determinar la criticidad de cada amenaza.'
  },
  {
    id: 2,
    pregunta: '¿Cuál es la estructura básica de un hallazgo en un informe de auditoría?',
    opciones: [
      'Descripción del problema, evidencia, impacto y recomendación',
      'Solo la opinión personal',
      'Un listado de quejas'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Un hallazgo profesional debe incluir qué se encontró, cómo se verificó, qué impacto tiene y cómo corregirlo.'
  },
  {
    id: 3,
    pregunta: '¿Qué significa divulgación responsable?',
    opciones: [
      'Publicar la vulnerabilidad en redes sociales inmediatamente',
      'Notificar en privado al afectado, dar un plazo para corregir y luego (si se desea) publicar',
      'No contarle a nadie'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La divulgación responsable es el estándar ético: aviso privado, plazo razonable, y solo después publicación.'
  },
  {
    id: 4,
    pregunta: 'Si encontraras una vulnerabilidad en la página del liceo, ¿qué harías primero?',
    opciones: [
      'Explotarla para demostrar que existe',
      'Notificar al profesor o directivo encargado con un informe detallado',
      'Contárselo a tus amigos'
    ],
    respuestaCorrecta: 1,
    explicacion: 'La vía ética es informar al responsable, sin explotar la falla ni divulgarla abiertamente.'
  }
];

// ========== HOOK ==========

export const useAuditoria5to = () => {
  // Checklist
  const [habitosComprobados, setHabitosComprobados] = useState<Record<string, boolean>>({});
  const toggleHabito = (id: string) => {
    setHabitosComprobados(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const totalHabitos = HABITOS_5TO.length;
  const habitosCompletados = Object.values(habitosComprobados).filter(Boolean).length;
  const porcentajeHabitos = Math.round((habitosCompletados / totalHabitos) * 100);

  // Simulador de matriz de riesgo
  const [clasificacionesRiesgo, setClasificacionesRiesgo] = useState<Record<string, string>>({});
  const [resultadoRiesgo, setResultadoRiesgo] = useState<Record<string, boolean>>({});
  const clasificarRiesgo = (id: string, criticidad: string) => {
    const riesgo = RIESGOS_EJEMPLO.find(r => r.id === id);
    if (!riesgo) return;
    const correcto = criticidad === riesgo.criticidadCorrecta;
    setResultadoRiesgo(prev => ({ ...prev, [id]: correcto }));
  };

  // Simulador de redacción de hallazgos
  const [respuestasHallazgo, setRespuestasHallazgo] = useState<Record<string, number>>({});
  const [resultadoHallazgo, setResultadoHallazgo] = useState<Record<string, boolean>>({});
  const responderHallazgo = (id: string, opcionIndex: number) => {
    setRespuestasHallazgo(prev => ({ ...prev, [id]: opcionIndex }));
    const hallazgo = HALLAZGOS_SIMULADOS.find(h => h.id === id);
    if (hallazgo) {
      setResultadoHallazgo(prev => ({ ...prev, [id]: opcionIndex === hallazgo.opcionCorrecta }));
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
    PREGUNTAS_QUIZ_5TO.forEach(p => {
      if (respuestasQuiz[p.id] === p.respuestaCorrecta) correctas++;
    });
    return { correctas, total: PREGUNTAS_QUIZ_5TO.length };
  }, [respuestasQuiz, quizEnviado]);

  return {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    riesgos: RIESGOS_EJEMPLO,
    clasificarRiesgo,
    resultadoRiesgo,
    hallazgos: HALLAZGOS_SIMULADOS,
    respuestasHallazgo,
    responderHallazgo,
    resultadoHallazgo,
    preguntasQuiz: PREGUNTAS_QUIZ_5TO,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  };
};