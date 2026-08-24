import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Zap,
} from 'lucide-react';
import HeaderProyecto from '../../components/comunes/HeaderProyecto/HeaderProyecto';
import type { GradoEscolar } from '../../data/datosModulos';
import './LandingModulos.css';

/**
 * Pantalla de Bienvenida y Selección de Grado para la sección de Módulos.
 * Nivel 1 del flujo: Usuario elige grado → navega al catálogo personalizado.
 */
const LandingModulos: React.FC = () => {
  const navigate = useNavigate();
  const [gradoSeleccionado, setGradoSeleccionado] = useState<GradoEscolar | null>(null);

  const enlacesSubNav = [
    { label: 'Catálogo por Grado', ruta: '/proyectos/ciberseguridad' },
    { label: 'Justificación', ruta: '/proyectos/ciberseguridad/justificacion' },
    { label: 'Índices y Temario', ruta: '/proyectos/ciberseguridad/indices' },
    { label: 'Guía Docentes', ruta: '/proyectos/ciberseguridad/guias/docentes' },
    { label: 'Guía Padres', ruta: '/proyectos/ciberseguridad/guias/padres' },
    { label: 'Desarrolladores', ruta: '/proyectos/ciberseguridad/nosotros/sobre-devs' },
  ];

  /** Datos de cada tarjeta de grado */
  const gradosInfo: Array<{
    grado: GradoEscolar;
    etiqueta: string;
    descripcion: string;
    nivel: string;
    color: string;
  }> = [
    {
      grado: '1ro',
      etiqueta: '1ro Año',
      descripcion: 'Fundamentos básicos de seguridad digital e identificación de amenazas simples.',
      nivel: 'Nivel Inicial',
      color: 'grado-verde',
    },
    {
      grado: '2do',
      etiqueta: '2do Año',
      descripcion: 'Protección de cuentas, contraseñas seguras y verificación de identidades.',
      nivel: 'Nivel Básico',
      color: 'grado-azul',
    },
    {
      grado: '3ro',
      etiqueta: '3ro Año',
      descripcion: 'Análisis de amenazas en redes sociales y tácticas de ingeniería social.',
      nivel: 'Nivel Intermedio',
      color: 'grado-celeste',
    },
    {
      grado: '4to',
      etiqueta: '4to Año',
      descripcion: 'Auditoría digital, higiene tecnológica y protocolos de seguridad avanzados.',
      nivel: 'Nivel Avanzado',
      color: 'grado-amarillo',
    },
    {
      grado: '5to',
      etiqueta: '5to Año',
      descripcion: 'Ciberseguridad experta: análisis forense básico, software pirata y ética digital.',
      nivel: 'Nivel Experto',
      color: 'grado-rojo',
    },
  ];

  /** Navega al catálogo del grado elegido */
  const irAlCatalogo = () => {
    if (gradoSeleccionado) {
      navigate(`/proyectos/ciberseguridad/grado/${gradoSeleccionado}`);
    }
  };

  return (
    <div className="landing-modulos-contenedor">
      <HeaderProyecto
        titulo="Ciberseguridad Escolar y Conciencia Digital"
        categoria="Proyecto #1 — Ciberseguridad"
        descripcion="Módulos formativos, guías didácticas y auditorías digitales diseñadas para capacitar a la comunidad educativa en el uso seguro y ético de la tecnología."
        autores="Equipo de Ciberseguridad L.B. Lemus"
        icono="ShieldCheck"
        enlacesSubNav={enlacesSubNav}
      />

      {/* ── HERO SECTION ── */}
      <section className="landing-hero">
        <div className="landing-hero-fondo" aria-hidden="true">
          <div className="hero-particula hero-particula-1" />
          <div className="hero-particula hero-particula-2" />
          <div className="hero-particula hero-particula-3" />
        </div>

        <div className="landing-hero-contenido">
          {/* Etiqueta institucional */}
          <div className="landing-etiqueta-inst">
            <GraduationCap size={16} />
            <span>L.B. Antonio Lemus Pérez · Plataforma Digital de Ciberseguridad</span>
          </div>

          {/* Título principal */}
          <h1 className="landing-titulo-hero">
            Aprende a protegerte{' '}
            <span className="landing-titulo-destacado">en el mundo digital</span>
          </h1>

          {/* Subtítulo inspirador */}
          <p className="landing-subtitulo-hero">
            Domina las herramientas digitales y conviértete en tu propio escudo cibernético.
            Contenidos pedagógicos diseñados especialmente para cada año escolar.
          </p>

          {/* Indicadores de valor */}
          <div className="landing-indicadores">
            <div className="indicador-item">
              <ShieldCheck size={20} />
              <span>6 Módulos activos</span>
            </div>
            <div className="indicador-item">
              <BookOpen size={20} />
              <span>5 Años escolares</span>
            </div>
            <div className="indicador-item">
              <Zap size={20} />
              <span>Lecciones interactivas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN DE SELECCIÓN DE GRADO ── */}
      <section className="landing-seleccion-grado" id="seleccion-grado">
        <div className="landing-seccion-contenedor">

          {/* Encabezado de sección */}
          <div className="landing-seccion-encabezado">
            <div className="landing-icono-seccion">
              <Sparkles size={28} />
            </div>
            <h2 className="landing-titulo-seccion">
              ¿En qué año escolar estás?
            </h2>
            <p className="landing-descripcion-seccion">
              Selecciona tu año para acceder al contenido adaptado a tu nivel de conocimiento.
            </p>
          </div>

          {/* Tarjetas de grado */}
          <div className="landing-grid-grados">
            {gradosInfo.map(({ grado, etiqueta, descripcion, nivel, color }) => (
              <button
                key={grado}
                type="button"
                id={`btn-grado-${grado}`}
                className={`tarjeta-grado ${color} ${gradoSeleccionado === grado ? 'tarjeta-grado-activa' : ''}`}
                onClick={() => setGradoSeleccionado(grado)}
                aria-pressed={gradoSeleccionado === grado}
              >
                <div className="tarjeta-grado-nivel">{nivel}</div>
                <div className="tarjeta-grado-numero">{etiqueta}</div>
                <p className="tarjeta-grado-descripcion">{descripcion}</p>
                {gradoSeleccionado === grado && (
                  <div className="tarjeta-grado-seleccionado-badge">
                    <ShieldCheck size={14} />
                    <span>Seleccionado</span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Botón de acción principal */}
          <div className="landing-cta-contenedor">
            <button
              type="button"
              id="btn-explorar-modulos"
              className={`landing-btn-explorar ${gradoSeleccionado ? 'landing-btn-activo' : 'landing-btn-inactivo'}`}
              onClick={irAlCatalogo}
              disabled={!gradoSeleccionado}
              aria-disabled={!gradoSeleccionado}
            >
              <span>
                {gradoSeleccionado
                  ? `Ver módulos de ${gradoSeleccionado} Año`
                  : 'Selecciona tu año para continuar'}
              </span>
              {gradoSeleccionado && <ArrowRight size={20} />}
            </button>

            {!gradoSeleccionado && (
              <p className="landing-hint-seleccion">
                ↑ Toca una tarjeta para seleccionar tu año escolar
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingModulos;
