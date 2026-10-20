import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Lock, Share2, Download, Gamepad2, CheckSquare,
  ArrowRight, BookOpen, Clock, GraduationCap, CheckCircle2, HelpCircle,
  FileText, Lightbulb, Target, BookMarked, ChevronDown, ChevronUp,
  Sparkles, AlertCircle
} from "lucide-react";
import HeaderProyecto from "../../components/comunes/HeaderProyecto/HeaderProyecto";
import { CATALAGO_MODULOS } from "../../data/datosModulos";
import type { GradoEscolar } from "../../data/datosModulos";
import DETALLES_CONTEXTUALES from "../../data/datosIndices";
import "./Indices.css";

// Mapeo de iconos Lucide por ID de módulo
const ICONOS_MODULOS: Record<string, React.ReactNode> = {
  'phishing': <ShieldCheck size={30} />,
  'proteccion-cuentas': <Lock size={30} />,
  'redes-sociales': <Share2 size={30} />,
  'software-pirata': <Download size={30} />,
  'videojuegos': <Gamepad2 size={30} />,
  'auditorias': <CheckSquare size={30} />,
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
    <article className={`seccion-modulo ${expandido ? 'modulo-abierto' : ''}`}>
      {/* Cabecera siempre visible */}
      <button
        type="button"
        className="cabecera-seccion"
        onClick={() => setExpandido(!expandido)}
        aria-expanded={expandido}
      >
        <div className="icono-seccion">
          {ICONOS_MODULOS[mod.id] || <ShieldCheck size={30} />}
        </div>
        <div className="info-cabecera">
          <div className="fila-categoria">
            <span className="modulo-categoria">{mod.nombreCategoria}</span>
            <span className="modulo-duracion-badge">
              <Clock size={13} /> {mod.duracionEstimada}
            </span>
          </div>
          <h3>{mod.titulo}</h3>
          <p className="resumen-cabecera">{mod.resumenGeneral}</p>
        </div>
        <div className={`indicador-expandir ${expandido ? 'abierto' : ''}`} aria-hidden="true">
          {expandido ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </div>
      </button>

      {/* Contenido expandible */}
      {expandido && (
        <div className="contenido-expandido">
          <div className="columna-teoria">
            <div className="bloque-detalle">
              <strong className="bloque-titulo">
                <Lightbulb size={18} className="icono-bloque icono-amarillo" /> ¿Qué aprenderás en este tema?
              </strong>
              <p>{detalle.queAprenderas}</p>
            </div>

            <div className="bloque-importancia">
              <strong className="bloque-titulo">
                <Target size={18} className="icono-bloque icono-rojo" /> Importancia en tu vida digital:
              </strong>
              <p>{detalle.porQueEsImportante}</p>
            </div>

            <div className="bloque-subtemas">
              <strong className="bloque-titulo">
                <BookMarked size={18} className="icono-bloque icono-azul" /> Lecciones y Tópicos Clave:
              </strong>
              <ul className="lista-subtemas">
                {detalle.subtemasClave.map((subtema: string, idx: number) => (
                  <li key={idx} className="item-subtema">
                    <CheckCircle2 size={16} className="icono-check-subtema" />
                    <span>{subtema}</span>
                  </li>
                ))}
              </ul>
            </div>

            {detalle.teoriaAdicional && (
              <div className="teoria-adicional">
                <h4>
                  <Sparkles size={16} className="icono-azul" /> Fundamento Teórico
                </h4>
                <p>{detalle.teoriaAdicional}</p>
              </div>
            )}

            {detalle.conceptosClave && detalle.conceptosClave.length > 0 && (
              <div className="conceptos-clave">
                <h4>
                  <BookOpen size={16} className="icono-azul" /> Conceptos Esenciales
                </h4>
                <div className="grid-conceptos">
                  {detalle.conceptosClave.map((concepto: any, idx: number) => (
                    <div key={idx} className="tarjeta-concepto-mini">
                      <strong>{concepto.titulo}</strong>
                      <p>{concepto.descripcion}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {detalle.ejemplosReales && detalle.ejemplosReales.length > 0 && (
              <div className="ejemplos-reales">
                <h4>
                  <AlertCircle size={16} className="icono-rojo" /> Casos y Ejemplos de la Vida Real
                </h4>
                <ul className="lista-ejemplos">
                  {detalle.ejemplosReales.map((ejemplo: string, idx: number) => (
                    <li key={idx}>{ejemplo}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="columna-acceso">
            <div className="panel-acceso-fijo">
              <div className="selector-grados">
                <span className="selector-titulo">Ir a este módulo por año escolar</span>
                <div className="botones-grados">
                  {GRADOS.map((g) => (
                    <Link key={g} to={`/modulos/info/${mod.id}/${g}`} className="btn-grado">
                      {g} Año
                    </Link>
                  ))}
                </div>
              </div>

              <div className="metadatos-modulo">
                <div className="metadato-item">
                  <Clock size={16} className="icono-meta" />
                  <div>
                    <span className="meta-etiqueta">Duración estimada</span>
                    <strong className="meta-valor">{mod.duracionEstimada}</strong>
                  </div>
                </div>
                <div className="metadato-item">
                  <GraduationCap size={16} className="icono-meta" />
                  <div>
                    <span className="meta-etiqueta">Cobertura escolar</span>
                    <strong className="meta-valor">1ro a 5to Año</strong>
                  </div>
                </div>
              </div>

              <Link to={`/modulos/info/${mod.id}/1ro`} className="boton-acceso-seccion">
                Explorar Presentación <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </article>
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
        categoria="Catálogo Temático y Plan Curricular"
        titulo="ÍNDICES Y TEMARIO DE"
        tituloResaltado="CIBERSEGURIDAD"
        descripcion="Exploración detallada de los 6 ejes temáticos de prevención digital en el C.E. Antonio Lemus Pérez. Conoce qué enseña cada módulo, sus conceptos clave y accede directamente a las lecciones de tu año escolar."
        imagenFondo="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Explorar Módulos Abajo',
            href: '#seccion-modulos',
          },
          {
            label: 'Ver Catálogo por Grado',
            ruta: '/proyectos/ciberseguridad/modulos',
            icono: <ArrowRight size={18} />,
          },
        ]}
      />

      <div className="contenedor-indices">
        {/* INTRODUCCIÓN */}
        <section className="seccion-info-indices">
          <div className="tarjeta-presentacion-indices">
            <span className="insignia-temario">Propósito Pedagógico</span>
            <h2>¿A qué se dedica esta plataforma?</h2>
            <p className="texto-destacado-indices">
              Este portal está diseñado para desarrollar una sólida cultura de prevención y responsabilidad digital en los estudiantes, docentes y familias del C.E. Antonio Lemus Pérez en Cumaná, Estado Sucre.
            </p>
            <p className="texto-secundario-indices">
              A través de un enfoque pedagógico gradual y práctico, estructuramos la formación en <strong>6 áreas fundamentales</strong>. En cada módulo encontrarás explicaciones claras, análisis de casos reales de Venezuela y dinámicas adaptadas exactamente a cada nivel de bachillerato.
            </p>

            <div className="mini-estadisticas">
              <div className="estadistica-item">
                <div className="icono-stat-wrapper icono-azul">
                  <BookOpen size={24} />
                </div>
                <div className="stat-info">
                  <strong>6 Módulos</strong>
                  <span>Áreas de Ciberseguridad</span>
                </div>
              </div>
              <div className="estadistica-item">
                <div className="icono-stat-wrapper icono-rojo">
                  <GraduationCap size={24} />
                </div>
                <div className="stat-info">
                  <strong>5 Grados</strong>
                  <span>Desde 1ro a 5to Año</span>
                </div>
              </div>
              <div className="estadistica-item">
                <div className="icono-stat-wrapper icono-verde">
                  <CheckCircle2 size={24} />
                </div>
                <div className="stat-info">
                  <strong>30 Lecciones</strong>
                  <span>Adaptadas por Nivel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LISTA DE MÓDULOS COMO SECCIONES HORIZONTALES */}
        <section id="seccion-modulos" className="seccion-modulos">
          <div className="encabezado-modulos">
            <div className="titulo-con-icono">
              <FileText size={28} className="icono-encabezado-indices" />
              <h2>Índice de Temas y Módulos de Estudio</h2>
            </div>
            <p>
              Haz clic en cualquier módulo para desplegar su fundamentación, tópicos clave, teoría y enlaces directos por año escolar:
            </p>
          </div>

          <div className="lista-modulos-secciones">
            {modulosLista.map((mod) => (
              <SeccionModulo key={mod.id} mod={mod} />
            ))}
          </div>
        </section>

        {/* SECCIÓN FINAL (CTA) */}
        <section className="seccion-cta-final">
          <div className="tarjeta-cta-indices">
            <HelpCircle size={38} className="icono-cta" />
            <h2>¿Dudas sobre cómo empezar?</h2>
            <p>
              También puedes visitar el catálogo general para explorar una vista panorámica de todas las tarjetas por año escolar y nivel de dificultad.
            </p>
            <Link to="/proyectos/ciberseguridad/modulos" className="boton-cta-indices">
              Ir a Selección General de Grado <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Indices;