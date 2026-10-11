import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Lock, Share2, Download, Gamepad2, CheckSquare,
  ArrowRight, ArrowDown, BookOpen, Clock, GraduationCap, CheckCircle2, HelpCircle,
  FileText, Lightbulb, Target, BookMarked, ChevronDown, ChevronUp,
  ArrowLeft
} from "lucide-react";
import HeaderProyecto from "../../components/comunes/HeaderProyecto/HeaderProyecto";
import { CATALAGO_MODULOS } from "../../data/datosModulos";
import type { GradoEscolar } from "../../data/datosModulos";
import DETALLES_CONTEXTUALES from "../../data/datosIndices";
import "./Indices.css";

// Mapeo de iconos Lucide por ID de módulo
const ICONOS_MODULOS: Record<string, React.ReactNode> = {
  'phishing': <ShieldCheck size={32} />,
  'proteccion-cuentas': <Lock size={32} />,
  'redes-sociales': <Share2 size={32} />,
  'software-pirata': <Download size={32} />,
  'videojuegos': <Gamepad2 size={32} />,
  'auditorias': <CheckSquare size={32} />,
};

const GRADOS: GradoEscolar[] = ['1ro', '2do', '3ro', '4to', '5to'];

// Componente para cada sección expandible
const SeccionModulo: React.FC<{ mod: any }> = ({ mod }) => {
  const [expandido, setExpandido] = useState(false);
  const detalle = DETALLES_CONTEXTUALES[mod.id] || {
    queAprenderas: mod.resumenGeneral,
    porQueEsImportante: "Fomenta la prevención digital.",
    subtemasClave: [],
    teoriaAdicional: "",
    conceptosClave: [],
    ejemplosReales: []
  };

  return (
    <section className="seccion-modulo">
      {/* Cabecera siempre visible */}
      <button
        className="cabecera-seccion"
        onClick={() => setExpandido(!expandido)}
        aria-expanded={expandido}
      >
        <span className="icono-seccion">
          {ICONOS_MODULOS[mod.id] || <ShieldCheck size={32} />}
        </span>
        <div className="info-cabecera">
          <span className="modulo-categoria">{mod.nombreCategoria}</span>
          <h3>{mod.titulo}</h3>
          <p className="resumen-cabecera">{mod.resumenGeneral}</p>
        </div>
        <span className={`indicador-expandir ${expandido ? 'abierto' : ''}`}>
          {expandido ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>

      {/* Contenido expandible */}
      {expandido && (
        <div className="contenido-expandido">
          <div className="columna-teoria">
            <div className="bloque-detalle">
              <strong className="bloque-titulo">
                <Lightbulb size={18} /> ¿Qué aprenderás en este tema?
              </strong>
              <p>{detalle.queAprenderas}</p>
            </div>

            <div className="bloque-importancia">
              <strong className="bloque-titulo">
                <Target size={18} /> Importancia en tu vida digital:
              </strong>
              <p>{detalle.porQueEsImportante}</p>
            </div>

            <div className="bloque-subtemas">
              <strong className="bloque-titulo">
                <BookMarked size={18} /> Lecciones y Tópicos Clave:
              </strong>
              <ul>
                {detalle.subtemasClave.map((subtema: string, idx: number) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} color="#0284c7" />
                    <span>{subtema}</span>
                  </li>
                ))}
              </ul>
            </div>

            {detalle.teoriaAdicional && (
              <div className="teoria-adicional">
                <h4>🔍 Teoría detallada</h4>
                <p>{detalle.teoriaAdicional}</p>
              </div>
            )}

            {detalle.conceptosClave?.length > 0 && (
              <div className="conceptos-clave">
                <h4>🧠 Conceptos esenciales</h4>
                <ul>
                  {detalle.conceptosClave.map((concepto: any, idx: number) => (
                    <li key={idx}>
                      <strong>{concepto.titulo}:</strong> {concepto.descripcion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {detalle.ejemplosReales?.length > 0 && (
              <div className="ejemplos-reales">
                <h4>📌 Ejemplos reales</h4>
                <ul>
                  {detalle.ejemplosReales.map((ejemplo: string, idx: number) => (
                    <li key={idx}>{ejemplo}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="columna-acceso">
            <div className="selector-grados">
              <span className="selector-titulo">Ir a este módulo en:</span>
              <div className="botones-grados">
                {GRADOS.map((g) => (
                  <Link key={g} to={`/modulos/info/${mod.id}/${g}`} className="btn-grado">
                    {g} Año
                  </Link>
                ))}
              </div>
            </div>

            <div className="metadatos">
              <span><Clock size={16} /> {mod.duracionEstimada}</span>
              <span><BookOpen size={16} /> 5 Grados Disponibles</span>
            </div>

            <Link to={`/modulos/info/${mod.id}/1ro`} className="boton-acceso-seccion">
              Explorar Presentación <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

const Indices: React.FC = () => {
  const modulosLista = Object.values(CATALAGO_MODULOS);

  const enlacesSubNav = [
    { label: 'Inicio Proyecto', ruta: '/proyectos/ciberseguridad' },
    { label: 'Catálogo por Grado', ruta: '/proyectos/ciberseguridad/modulos' },
    { label: 'Justificación', ruta: '/proyectos/ciberseguridad/justificacion' },
    { label: 'Índices y Temario', ruta: '/proyectos/ciberseguridad/indices' },
    { label: 'Guía Docentes', ruta: '/proyectos/ciberseguridad/guias/docentes' },
    { label: 'Guía Padres', ruta: '/proyectos/ciberseguridad/guias/padres' },
    { label: 'Desarrolladores', ruta: '/proyectos/ciberseguridad/nosotros/sobre-devs' },
  ];

  return (
    <main className="pagina-indices">
      {/* Hero Unificado del Proyecto */}
      <HeaderProyecto
        titulo="ÍNDICES Y TEMARIO DE"
        tituloResaltado="CIBERSEGURIDAD"
        descripcion="Guía completa e interactiva sobre los temas de seguridad digital abordados en el L.B. Antonio Lemus Pérez. Conoce qué enseña cada módulo y accede directamente a las lecciones de tu año escolar."
        imagenFondo="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Explorar Catálogo por Grado',
            ruta: '/proyectos/ciberseguridad/modulos',
          },
          {
            label: 'Ver Justificación',
            ruta: '/proyectos/ciberseguridad/justificacion',
            icono: <ArrowRight size={20} />,
          },
          {
            label: 'Ver Temáticas',
            href: '#seccion-modulos',
            icono: <ChevronDown size={18} />,
          },
        ]}
      />

      {/* INTRODUCCIÓN */}
      <section className="seccion-info ciberseguridad-que-es">
        <div className="contenedor-seccion">
          <h2>¿A qué se dedica esta plataforma?</h2>
          <p className="texto-destacado">
            Este portal está diseñado para desarrollar una cultura de prevención digital en los estudiantes,
            docentes y familias del L.B. Antonio Lemus Pérez en Cumaná, Estado Sucre.
          </p>
          <p className="texto-secundario">
            A través de un enfoque pedagógico progresivo, dividimos la formación en <strong>6 áreas fundamentales</strong>.
            En cada módulo encontrarás lecciones teóricas, análisis de casos reales de Venezuela y el mundo, y actividades
            prácticas adaptadas exactamente al año escolar en el que estudias.
          </p>
          <div className="mini-estadisticas">
            <div className="estadistica-item">
              <BookOpen size={22} color="#0284c7" />
              <strong>6 Módulos</strong>
              <span>Áreas de ciberseguridad</span>
            </div>
            <div className="estadistica-item">
              <GraduationCap size={22} color="#0284c7" />
              <strong>5 Grados</strong>
              <span>Desde 1ro hasta 5to año</span>
            </div>
            <div className="estadistica-item">
              <CheckCircle2 size={22} color="#0284c7" />
              <strong>30 Lecciones</strong>
              <span>Adaptadas por nivel</span>
            </div>
          </div>
        </div>
      </section>

      {/* LISTA DE MÓDULOS COMO SECCIONES HORIZONTALES */}
      <section id="seccion-modulos" className="seccion-modulos">
        <div className="contenedor-seccion">
          <div className="encabezado-modulos">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <FileText size={28} color="#0284c7" />
              <h2 style={{ margin: 0 }}>Índice de Temas y Módulos de Estudio</h2>
            </div>
            <p style={{ color: '#64748b' }}>
              Haz clic en cada módulo para expandir su contenido y acceder a las lecciones por año:
            </p>
          </div>

          <div className="lista-modulos-secciones">
            {modulosLista.map((mod) => (
              <SeccionModulo key={mod.id} mod={mod} />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <section className="seccion-info ciberseguridad-importancia">
        <div className="contenedor-seccion" style={{ textAlign: 'center' }}>
          <HelpCircle size={36} color="#0284c7" style={{ marginBottom: '1rem' }} />
          <h2>¿Dudas sobre cómo empezar?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem auto', color: '#475569' }}>
            También puedes visitar el portal general de módulos para ver una vista panorámica de todas las tarjetas de grados escolares.
          </p>
          <Link to="/proyectos/ciberseguridad/modulos" className="boton-acceso-modulo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.8rem', fontSize: '1rem' }}>
            Ir a Selección General de Grado <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Indices;