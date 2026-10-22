import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  HelpCircle,
  Layers,
  Presentation,
  ShieldCheck,
  Sparkles,
  Users,
  ChevronDown,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroCiberseguridad from '../../../components/comunes/HeroCiberseguridad/HeroCiberseguridad';
import imgHeroCiber from '../../../assets/photo_2_2026-10-21_23-11-48.jpg';
import './GuiaDefensa.css';

interface FaseDefensa {
  numero: string;
  titulo: string;
  tiempoRecomendado: string;
  descripcion: string;
  puntosClave: string[];
}

const FASES_DEFENSA: FaseDefensa[] = [
  {
    numero: '01',
    titulo: 'Introducción y Diagnóstico Comunitario',
    tiempoRecomendado: '4 a 5 Minutos',
    descripcion: 'Presentación del equipo, contexto del C.E. "Antonio Lemus Pérez" y fundamentación del problema sociotecnológico.',
    puntosClave: [
      'Justificación PNFI del proyecto sociotecnológico.',
      'Diagnóstico de vulnerabilidades digitales detectadas en los 965 estudiantes.',
      'Objetivos general y específicos orientados a la concientización digital.'
    ]
  },
  {
    numero: '02',
    titulo: 'Fundamentación Técnica y Pedagógica',
    tiempoRecomendado: '5 Minutos',
    descripcion: 'Explicación del marco teórico, arquitectura de contenidos y alineación por grados escolares (1ro a 5to año).',
    puntosClave: [
      'Selección de los 6 módulos temáticos (Phishing, Cuentas, Redes, Software, Videojuegos, Auditorías).',
      'Metodología didáctica participativa y diseño adaptativo.',
      'Soberanía tecnológica y adopción del Software Libre.'
    ]
  },
  {
    numero: '03',
    titulo: 'Demostración de la Plataforma Web y Moodle',
    tiempoRecomendado: '7 Minutos',
    descripcion: 'Recorrido interactivo en vivo por las funcionalidades del portal web y el aula virtual en Moodle.',
    puntosClave: [
      'Navegación por el catálogo por grado escolar.',
      'Evaluación formativa y glosario interactivo.',
      'Recursos descargables para padres y docentes.'
    ]
  },
  {
    numero: '04',
    titulo: 'Conclusiones e Impacto Institucional',
    tiempoRecomendado: '3 Minutos',
    descripcion: 'Síntesis de logros obtenidos, lecciones aprendidas y recomendaciones de continuidad.',
    puntosClave: [
      'Evaluación del impacto en la comunidad estudiantil y docente.',
      'Plan de sostenibilidad del proyecto en la institución.',
      'Agradecimientos a las autoridades del Liceo y de la UPTOS CR.'
    ]
  }
];

const PREGUNTAS_JURADO = [
  {
    pregunta: '¿Por qué eligieron estos 6 módulos específicos de ciberseguridad?',
    respuesta: 'Fueron seleccionados basándonos en el diagnóstico de riesgos más frecuentes reportados en jóvenes de educación media: suplantación en redes sociales, phishing por mensajería, el uso de contraseñas débiles y las descargas no seguras de videojuegos o software pirateado.'
  },
  {
    pregunta: '¿Cómo garantizan que los contenidos se adapten a la edad de cada estudiante?',
    respuesta: 'Estructuramos el catálogo pedagógico dividiendo los enfoques desde el nivel inicial (1ro y 2do año, enfocado en higiene digital y contraseñas) hasta los niveles avanzado y experto (4to y 5to año, enfocado en licencias, malware y auditorías cibernéticas).'
  },
  {
    pregunta: '¿De qué manera se integra esta plataforma con la infraestructura del Liceo?',
    respuesta: 'La plataforma está diseñada en formato estándar web responsive ligero, compatible con servidores locales o de la UPTOS CR, e integrable mediante enlaces SCORM/LTI con el aula Moodle institucional.'
  },
  {
    pregunta: '¿Cómo se abordó la soberanía tecnológica y el software libre?',
    respuesta: 'El desarrollo se realizó utilizando herramientas web abiertas (React, TypeScript, CSS nativo) e incentivando el uso de software libre y formatos abiertos frente al software pirata en la educación.'
  }
];

export const GuiaDefensa: React.FC = () => {
  const [preguntaAbierta, setPreguntaAbierta] = useState<number | null>(null);

  const togglePregunta = (idx: number) => {
    setPreguntaAbierta(preguntaAbierta === idx ? null : idx);
  };

  const enlacesSubNav = [
    { label: 'Inicio Proyecto', ruta: '/proyectos/ciberseguridad' },
    { label: 'Catálogo por Grado', ruta: '/proyectos/ciberseguridad/modulos' },
    { label: 'Justificación', ruta: '/proyectos/ciberseguridad/justificacion' },
    { label: 'Índices y Temario', ruta: '/proyectos/ciberseguridad/indices' },
    { label: 'Guía Docentes', ruta: '/proyectos/ciberseguridad/guias/docentes' },
    { label: 'Guía Padres', ruta: '/proyectos/ciberseguridad/guias/padres' },
    { label: 'Guía de Defensa', ruta: '/proyectos/ciberseguridad/guias/defensa' },
  ];

  return (
    <div className="guia-defensa-pagina pagina-ciberseguridad">
      {/* HERO DE CIBERSEGURIDAD PARA LA DEFENSA */}
      <HeroCiberseguridad
        categoria="MANUAL METODOLÓGICO PNFI"
        titulo="GUÍA PARA LA DEFENSA DEL"
        tituloResaltado="PROYECTO SOCIOTECNOLÓGICO"
        descripcion="Pautas para la presentación oral, estructura de diapositivas y matriz de respuestas clave ante el jurado evaluador de la UPTOS CR y las autoridades del C.E. Antonio Lemus Pérez."
        imagenFondo={imgHeroCiber}
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Ver Fases de Exposición',
            href: '#fases-defensa',
            icono: <Presentation size={18} />,
          },
          {
            label: 'Preguntas del Jurado',
            href: '#preguntas-jurado',
            icono: <HelpCircle size={18} />,
          },
        ]}
      />

      <main className="contenedor-defensa">
        {/* SECCIÓN 1: RECOMENDACIONES GENERALES DE DEFENSA */}
        <section className="seccion-defensa-intro">
          <div className="encabezado-defensa">
            <Award size={32} className="icono-defensa-encabezado" />
            <h2>Orientaciones Generales para la Presentación</h2>
            <p>
              Recomendaciones clave para lograr una exposición oral clara, profesional y convincente ante el comité académico.
            </p>
          </div>

          <div className="grid-recomendaciones-defensa">
            <div className="tarjeta-recomendacion">
              <div className="icono-recomendacion-box">
                <Clock size={24} />
              </div>
              <h3>Gestión Estricta del Tiempo</h3>
              <p>El tiempo total de exposición es de 20 minutos máximo, seguido de 10 minutos de preguntas del jurado. Practiquen la transición entre ponentes.</p>
            </div>

            <div className="tarjeta-recomendacion">
              <div className="icono-recomendacion-box">
                <Users size={24} />
              </div>
              <h3>Dominio de Roles y Equipo</h3>
              <p>Todos los integrantes del equipo deben dominar la justificación sociotecnológica y el funcionamiento del código del proyecto.</p>
            </div>

            <div className="tarjeta-recomendacion">
              <div className="icono-recomendacion-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Demostración Práctica en Vivo</h3>
              <p>Prioricen mostrar la navegación real por los módulos pedagógicos y el catálogo por grado en lugar de solo leer diapositivas.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: FASES DE LA PRESENTACIÓN ORAL */}
        <section id="fases-defensa" className="seccion-fases-defensa">
          <div className="encabezado-defensa">
            <Presentation size={32} className="icono-defensa-encabezado" />
            <h2>Estructura de Exposición por Fases</h2>
            <p>Cronograma dinámico de desarrollo para la defensa ante el jurado.</p>
          </div>

          <div className="grid-fases-defensa">
            {FASES_DEFENSA.map((fase, idx) => (
              <div key={idx} className="tarjeta-fase-defensa">
                <div className="cabecera-fase">
                  <span className="numero-fase-badge">{fase.numero}</span>
                  <div className="info-fase-cabecera">
                    <h3>{fase.titulo}</h3>
                    <span className="tiempo-fase"><Clock size={14} /> {fase.tiempoRecomendado}</span>
                  </div>
                </div>

                <p className="descripcion-fase">{fase.descripcion}</p>

                <div className="puntos-clave-fase">
                  <h4>Puntos fundamentales a exponer:</h4>
                  <ul>
                    {fase.puntosClave.map((punto, pIdx) => (
                      <li key={pIdx}>
                        <CheckCircle2 size={16} className="icono-check-fase" />
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: PREGUNTAS FRECUENTES DEL JURADO */}
        <section id="preguntas-jurado" className="seccion-preguntas-jurado">
          <div className="encabezado-defensa">
            <HelpCircle size={32} className="icono-defensa-encabezado" />
            <h2>Banco de Respuestas ante el Jurado</h2>
            <p>Preparación técnica y metodológica para el ciclo de preguntas de la defensa.</p>
          </div>

          <div className="lista-preguntas-jurado">
            {PREGUNTAS_JURADO.map((item, idx) => (
              <div
                key={idx}
                className={`item-pregunta-jurado ${preguntaAbierta === idx ? 'abierto' : ''}`}
                onClick={() => togglePregunta(idx)}
              >
                <div className="cabecera-pregunta">
                  <h4>{item.pregunta}</h4>
                  <ChevronDown size={20} className="icono-flecha-pregunta" />
                </div>
                {preguntaAbierta === idx && (
                  <div className="cuerpo-respuesta">
                    <p>{item.respuesta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ENLACES DE RETORNO Y NAVEGACIÓN */}
        <div className="pie-defensa-acciones">
          <Link to="/proyectos/ciberseguridad/guias/docentes" className="btn-defensa-retorno">
            <ArrowLeft size={18} /> Ir a Guía para Docentes
          </Link>
          <Link to="/proyectos/ciberseguridad/guias/padres" className="btn-defensa-retorno">
            Ir a Guía para Padres <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default GuiaDefensa;
