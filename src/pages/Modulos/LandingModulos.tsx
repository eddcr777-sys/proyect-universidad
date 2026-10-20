import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  BookOpen,
  ArrowRight,
  ArrowDown,
  Sparkles,
  GraduationCap,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import HeaderProyecto from '../../components/comunes/HeaderProyecto/HeaderProyecto';
import type { GradoEscolar } from '../../data/datosModulos';
import './LandingModulos.css';

const LandingModulos: React.FC = () => {
  const navigate = useNavigate();
  const [gradoSeleccionado, setGradoSeleccionado] = useState<GradoEscolar | null>(null);

  const enlacesSubNav = [
    { label: 'Inicio Proyecto', ruta: '/proyectos/ciberseguridad' },
    { label: 'Catálogo por Grado', ruta: '/proyectos/ciberseguridad/modulos' },
    { label: 'Justificación', ruta: '/proyectos/ciberseguridad/justificacion' },
    { label: 'Índices y Temario', ruta: '/proyectos/ciberseguridad/indices' },
    { label: 'Guía Docentes', ruta: '/proyectos/ciberseguridad/guias/docentes' },
    { label: 'Guía Padres', ruta: '/proyectos/ciberseguridad/guias/padres' },
    { label: 'Desarrolladores', ruta: '/proyectos/ciberseguridad/nosotros/sobre-devs' },
  ];

  const gradosInfo: {
    grado: GradoEscolar;
    etiqueta: string;
    descripcion: string;
    nivel: string;
  }[] = [
      {
        grado: '1ro',
        etiqueta: '1ro Año',
        descripcion: 'Fundamentos de higiene digital, contraseñas seguras y uso responsable de dispositivos.',
        nivel: 'Nivel Inicial',
      },
      {
        grado: '2do',
        etiqueta: '2do Año',
        descripcion: 'Identificación de phishing, estafas en línea y protección de datos personales.',
        nivel: 'Nivel Básico',
      },
      {
        grado: '3ro',
        etiqueta: '3ro Año',
        descripcion: 'Privacidad en redes sociales, huella digital y prevención del ciberacoso.',
        nivel: 'Nivel Intermedio',
      },
      {
        grado: '4to',
        etiqueta: '4to Año',
        descripcion: 'Seguridad en redes Wi-Fi, descargas responsables y licencias de software.',
        nivel: 'Nivel Avanzado',
      },
      {
        grado: '5to',
        etiqueta: '5to Año',
        descripcion: 'Ciberseguridad experta: análisis forense básico, software pirata y ética digital.',
        nivel: 'Nivel Experto',
      },
    ];

  const irAlCatalogo = () => {
    if (gradoSeleccionado) {
      navigate(`/proyectos/ciberseguridad/grado/${gradoSeleccionado}`);
    }
  };

  return (
    <div className="landing-modulos-contenedor">
      {/* Hero Unificado */}
      <HeaderProyecto
        titulo="APRENDE A PROTEGERTE EN EL"
        tituloResaltado="MUNDO DIGITAL"
        descripcion="Módulos pedagógicos, lecciones interactivas y guías didácticas adaptadas nivel a nivel desde 1ro hasta 5to año para la comunidad educativa."
        imagenFondo="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Seleccionar Grado Escolar',
            href: '#seleccion-grado',
            icono: <ArrowDown size={18} />,
          },
          {
            label: 'Ver Justificación',
            ruta: '/proyectos/ciberseguridad/justificacion',
            icono: <ArrowRight size={20} />,
          },
        ]}
      />

      {/* ── SECCIÓN UNIFICADA DE SELECCIÓN DE GRADO (2 COLUMNAS) ── */}
      <section className="landing-seleccion-grado" id="seleccion-grado">
        <div className="landing-seccion-contenedor-grid">
          {/* Columna Izquierda: Descripción e Información del proyecto */}
          <div className="columna-descripcion-grado">
            <span className="badge-seccion-sub">Selección de Nivel</span>
            <h2 className="landing-titulo-seccion">
              ¿En qué año escolar estás?
            </h2>
            <p className="landing-descripcion-seccion">
              Selecciona tu año escolar para acceder al catálogo pedagógico de módulos interactivos adaptado a tu grado de instrucción.
            </p>

            <ul className="lista-caracteristicas-grado">
              <li>
                <CheckCircle2 size={20} className="icono-check-inst" />
                <span>Contenidos adaptados al plan formativo del C.E. "Antonio Lemus Pérez".</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="icono-check-inst" />
                <span>Lecciones prácticas, evaluación en línea y material descargable.</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="icono-check-inst" />
                <span>Ruta continua de aprendizaje desde 1ro hasta 5to año general.</span>
              </li>
            </ul>
          </div>

          {/* Columna Derecha: Tarjetas de Grado y Botón de Acción */}
          <div className="columna-seleccion-derecha">
            <div className="landing-grid-grados">
              {gradosInfo.map(({ grado, etiqueta, descripcion, nivel }) => (
                <button
                  key={grado}
                  type="button"
                  className={`tarjeta-grado ${gradoSeleccionado === grado ? 'tarjeta-grado-activa' : ''}`}
                  onClick={() => setGradoSeleccionado(grado)}
                  aria-pressed={gradoSeleccionado === grado}
                >
                  <div className="tarjeta-grado-nivel">{nivel}</div>
                  <div className="tarjeta-grado-numero">{etiqueta}</div>
                  <p className="tarjeta-grado-descripcion">{descripcion}</p>
                  {gradoSeleccionado === grado && (
                    <div className="tarjeta-grado-seleccionado-badge">

                      <span>Seleccionado</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Botón de acción ubicado en la columna derecha */}
            <div className="landing-cta-contenedor">
              <button
                type="button"
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
                <div style={{ marginTop: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  <p className="landing-hint-seleccion">
                    ↑ Selecciona una tarjeta arriba para activar el botón
                  </p>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>o si lo prefieres</span>
                  <button
                    type="button"
                    onClick={() => navigate('/proyectos/ciberseguridad/grado/1ro')}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#fff',
                      padding: '10px 24px',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    Comenzar Ruta Completa (1ro a 5to) <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingModulos;