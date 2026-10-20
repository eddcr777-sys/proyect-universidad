import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Compass, Building2, ShieldAlert, Image as ImageIcon, ArrowLeft } from 'lucide-react';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import imgHero from '../../assets/pbk-Hero-3.jpg';
import fotoFachada from '../../assets/lb.jpeg';
import fotoCancha from '../../assets/lemu.jpeg';
import fotoAulas from '../../assets/le.jpeg';
import './ElLiceo.css';
import './Instalaciones.css';

/**
 * Página de Instalaciones y Cartografía Institucional del Complejo Educativo.
 */
export const Instalaciones: React.FC = () => {
  const espaciosLiceo = [
    {
      id: 'fachada',
      titulo: 'Fachada y Acceso Principal',
      descripcion: 'Acceso frontal seguro con control peatonal y vehicular sobre la Av. Las Industrias, diseñado para el flujo organizado de la comunidad educativa.',
      imagen: fotoFachada,
      etiqueta: 'Acceso y Control'
    },
    {
      id: 'cancha',
      titulo: 'Canchas Deportivas de Usos Múltiples',
      descripcion: 'Espacios polideportivos al aire libre para baloncesto, fútbol sala, voleibol y actos cívicos. Además, funciona como Punto Seguro de Evacuación Sísmica.',
      imagen: fotoCancha,
      etiqueta: 'Deportes y Zona Segura'
    },
    {
      id: 'aulas',
      titulo: 'Aulas y Módulos de Aprendizaje',
      descripcion: 'Ambientes pedagógicos acondicionados para el desarrollo curricular de educación media y técnica, dotados con ventilación e iluminación adecuada.',
      imagen: fotoAulas,
      etiqueta: 'Área Académica'
    }
  ];

  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={imgHero}
        variante="compacto"
        titulo="Instalaciones y Entorno Institucional"
        subtitulo="Complejo Educativo 'Antonio Lemus Pérez'"
        descripcion="Descubre nuestra infraestructura educativa y el contexto geográfico y comunitario donde interactúa nuestra comunidad estudiantil."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="contenedor-liceo">
        {/* ==========================================
            SECCIÓN 1: CARTOGRAFÍA INSTITUCIONAL
            ========================================== */}
        <div className="encabezado-seccion-liceo">
          <span className="badge-liceo">Ubicación y Comunidad</span>
          <h2 className="titulo-seccion-liceo">Cartografía Institucional</h2>
          <p className="subtitulo-seccion-liceo">
            Ubicación geográfica estratégica de nuestra institución y su articulación socioproductiva con el entorno de Cumaná.
          </p>
        </div>

        <section className="instalaciones-cartografia-card">
          <div style={{ textAlign: 'justify', lineHeight: '1.8', color: 'var(--color-inst-texto)' }}>
            <p style={{ fontSize: '1.08rem', margin: 0 }}>
              El <strong>Complejo Educativo Antonio Lemus Pérez</strong> se encuentra ubicado en un punto estratégico rodeado por comunidades importantes de Cumaná, como el <em>Barrio Venezuela, Cascajal, Barrio El Valle, Franja de la Llanada</em>, y adyacente a importantes arterias viales como la <em>Av. Las Industrias</em> y la <em>Av. Panamericana</em>.
            </p>
            <p style={{ marginTop: '1.2rem', fontSize: '1.05rem', color: 'var(--color-inst-texto-secundario)' }}>
              En nuestra cartografía destacamos la cercanía con instituciones aliadas como el <strong>INCES</strong> y espacios comunitarios (Super Bloques, Iglesia, etc.), lo que nos permite un constante acercamiento e integración directa con las realidades socioproductivas y sociales de la comunidad.
            </p>
          </div>

          {/* Visualización del mapa cartográfico */}
          <div className="cartografia-imagen-contenedor">
            <img 
              src="/src/assets/cartografia_institucional.jpg" 
              alt="Cartografía Institucional del Complejo Educativo Antonio Lemus Pérez" 
              className="cartografia-imagen-institucional"
              onError={(e) => { 
                (e.target as HTMLImageElement).style.display = 'none'; 
              }}
            />
          </div>

          {/* Puntos y Vértices de Integración Comunitaria */}
          <div className="hitos-cartografia-grid">
            <div className="hito-cartografia-item">
              <div className="hito-cartografia-header">
                <Navigation size={20} />
                <h4>Vías de Conectividad</h4>
              </div>
              <p>Conexión directa mediante la Av. Las Industrias y Av. Panamericana, facilitando el transporte y fácil acceso a estudiantes y personal.</p>
            </div>

            <div className="hito-cartografia-item">
              <div className="hito-cartografia-header">
                <Compass size={20} />
                <h4>Comunidades Vecinas</h4>
              </div>
              <p>Vinculación cotidiana con Barrio Venezuela, Cascajal, Barrio El Valle y Franja de La Llanada, nutriendo nuestra matrícula estudiantil.</p>
            </div>

            <div className="hito-cartografia-item">
              <div className="hito-cartografia-header">
                <Building2 size={20} />
                <h4>Alianzas Socioproductivas</h4>
              </div>
              <p>Articulación estratégica con el INCES, iglesias y organizaciones vecinales para formación técnica y desarrollo integral comunitario.</p>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECCIÓN 2: ESPACIOS E INFRAESTRUCTURA
            ========================================== */}
        <div className="encabezado-seccion-liceo" style={{ marginTop: '4rem' }}>
          <span className="badge-liceo">Infraestructura Escolar</span>
          <h2 className="titulo-seccion-liceo">Espacios de Formación y Convivencia</h2>
          <p className="subtitulo-seccion-liceo">
            Áreas físicas acondicionadas para brindar una experiencia de aprendizaje completa, segura y activa.
          </p>
        </div>

        <div className="espacios-grid">
          {espaciosLiceo.map((espacio) => (
            <article key={espacio.id} className="espacio-card">
              <div className="espacio-card-header-img">
                <img 
                  src={espacio.imagen} 
                  alt={espacio.titulo} 
                  className="espacio-card-imagen"
                  loading="lazy"
                />
                <span className="espacio-card-badge">{espacio.etiqueta}</span>
              </div>
              <div className="espacio-card-body">
                <h3>{espacio.titulo}</h3>
                <p>{espacio.descripcion}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Banner de acceso rápido a seguridad y galería */}
        <div className="acciones-instalaciones-banner">
          <div className="acciones-instalaciones-texto">
            <h3>Seguridad y Protocolos de Prevención</h3>
            <p>Conoce las vías de evacuación y zonas seguras dentro de nuestras instalaciones ante cualquier contingencia.</p>
          </div>
          <div className="acciones-instalaciones-botones">
            <Link to="/el-liceo/plan-evacuacion" className="btn-instalacion-secundario">
              <ShieldAlert size={18} />
              Plan de Evacuación
            </Link>
            <Link to="/galeria" className="btn-instalacion-secundario">
              <ImageIcon size={18} />
              Ver Galerías
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Instalaciones;
