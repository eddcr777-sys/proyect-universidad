import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  BookOpen,
} from 'lucide-react';
import '../HomePage/HomePage.css';
import { useCarrusel } from '../../hooks/useCarrusel';
import {
  LABORES_DATA,
  PERSONAL_DATA,
  CARRUSEL_LABORES_DATA,
  CARRUSEL_PERSONAL_DATA,
} from '../../data/HomeData';

import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import TarjetasDesplegables from '../../components/comunes/tarjetas/tarjetasHome';
import CarruselBase from '../../components/comunes/Extras/carrusel'; // Carrusel reutilizable

import fotoFachada from '../../assets/lb.jpeg';
import fotoCancha from '../../assets/lemu.jpeg';
import { BanderaVenezuela } from '../../components/comunes/Extras/Bandera/BanderaVenezuela';

export const Home: React.FC = () => {
  const carruselLabores = useCarrusel(CARRUSEL_LABORES_DATA.length);
  const carruselPersonal = useCarrusel(CARRUSEL_PERSONAL_DATA.length);

  // Adaptar PERSONAL_DATA para el componente TarjetasDesplegables
  const personalAdaptado = PERSONAL_DATA.map((p) => ({
    id: p.id,
    imagen: p.imagen,
    titulo: p.cargo,
    resumen: p.resumen,
    detalle: p.detalle,
  }));

  return (
    <main className="inicio-pagina">
      {/* ============================================
          HERO INSTITUCIONAL
      ============================================ */}
      <HeroInstitucional
        imagenFondo={fotoFachada}
        cintillo={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BanderaVenezuela />
            <span style={{ fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              República Bolivariana de Venezuela · MPPE
            </span>
          </div>
        }
        titulo="Liceo Bolivariano"
        subtitulo='"Antonio Lemus Pérez"'
        descripcion="Más de 40 años formando ciudadanos integrales con excelencia académica, valores éticos y compromiso social en Cumaná, Estado Sucre."
        acciones={
          <>
            <Link to="/proyectos" className="boton-hero-principal">
              <BookOpen size={18} />
              Explorar Proyectos
            </Link>
            <a href="#historia" className="boton-hero-secundario">
              Conocer Nuestra Historia
              <ArrowDown size={16} />
            </a>
          </>
        }
      />

      {/* ============================================
          MISIÓN Y VISIÓN (dos tarjetas en fila)
      ============================================ */}
      <section className="seccion-mision-vision">
        <div className="contenedor-paralelo">
          <div className="tarjeta-apple tarjeta-oscura">
            <div className="encabezado-apple">
              <span className="badge-apple">Desde 1984</span>
              <h2 className="titulo-apple">Nuestra Misión</h2>
              <p className="subtitulo-apple">
                Promover y desarrollar un alto nivel socio-ético-cultural mediante la formación integral de
                estudiantes capaces de enfrentar los retos de la vida.
              </p>
            </div>
            <div className="contenedor-imagen-apple">
              <img src={fotoCancha} alt="Nuestra Misión" loading="lazy" />
            </div>
          </div>

           <div className="contenedor-paralelo">
          <div className="tarjeta-apple tarjeta-oscura">
            <div className="encabezado-apple">
              <span className="badge-apple">Desde 1984</span>
              <h2 className="titulo-apple">Nuestra Misión</h2>
              <p className="subtitulo-apple">
                Promover y desarrollar un alto nivel socio-ético-cultural mediante la formación integral de
                estudiantes capaces de enfrentar los retos de la vida.
              </p>
            </div>
            <div className="contenedor-imagen-apple">
              <img src={fotoCancha} alt="Nuestra Misión" loading="lazy" />
            </div>
          </div>

          <div className="tarjeta-apple tarjeta-clara">
            <div className="encabezado-apple">
              <span className="badge-apple">Futuro</span>
              <h2 className="titulo-apple">Nuestra Visión</h2>
              <p className="subtitulo-apple">
                Ser un referente colectivo e integrador que forme ciudadanos integrales, socializando la
                relación entre escuela, familia y comunidad.
              </p>
            </div>
            <div className="contenedor-imagen-apple">
              <img src={fotoCancha} alt="Nuestra Visión" loading="lazy" />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ============================================
          HISTORIA
      ============================================ */}
      <section id="historia" className="seccion-historia-harvard">
        <div className="contenedor-harvard">
          <div className="columna-izquierda-harvard">
            <div className="encabezado-harvard">
              <h2 className="titulo-harvard">Nuestra institución de un vistazo</h2>
              <p className="subtitulo-harvard">
                Durante más de cuatro décadas, la comunidad del Liceo Bolivariano "Antonio Lemus Pérez" ha
                cultivado la excelencia educativa y el compromiso social en la juventud sucrense.
              </p>
              <a href="/nosotros/sobre-ue" className="enlace-flecha-harvard">
                <span className="icono-circulo-flecha">→</span>
                <span>Conozca más sobre nuestra historia</span>
              </a>
            </div>
            <div className="marco-imagen-harvard">
              <img src={fotoCancha} alt="Instalaciones del Liceo" loading="lazy" />
            </div>
          </div>

          <div className="columna-derecha-harvard">
            <div className="item-stat-harvard">
              <span className="numero-stat-harvard">1984</span>
              <p className="etiqueta-stat-harvard">
                El año en que se fundó la institución como E.B. "Creación Bolivariana"
              </p>
            </div>
            <div className="item-stat-harvard">
              <span className="numero-stat-harvard">907+</span>
              <p className="etiqueta-stat-harvard">
                Estudiantes matriculados activamente en el período académico actual
              </p>
            </div>
            <div className="item-stat-harvard">
              <span className="numero-stat-harvard">Más de 40</span>
              <p className="etiqueta-stat-harvard">
                Años de servicio ininterrumpido dedicados a la educación pública de calidad
              </p>
            </div>
            <div className="item-stat-harvard">
              <span className="numero-stat-harvard">64</span>
              <p className="etiqueta-stat-harvard">
                Docentes especialistas orientados a la formación integral y proyectos socioproductivos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          LABORES E INICIATIVAS
      ============================================ */}
      <section id="labores" className="seccion-labores-harvard">
        <div className="contenedor-harvard-ancho">
          <div className="encabezado-harvard-simple">
            <h2 className="titulo-seccion-editorial">Nuestras Labores e Iniciativas</h2>
            <p className="subtitulo-seccion-editorial">
              Programas y proyectos que enriquecen la formación integral y el compromiso social de nuestra
              comunidad.
            </p>
          </div>

          <div className="grid-labores-harvard">
            <TarjetasDesplegables items={LABORES_DATA} />
          </div>

          <CarruselBase
            titulo="Galería de Iniciativas en Acción"
            slides={CARRUSEL_LABORES_DATA}
            indiceActual={carruselLabores.indiceActual}
            onAnterior={carruselLabores.anterior}
            onSiguiente={carruselLabores.siguiente}
          />
        </div>
      </section>

      {/* ============================================
          PERSONAL
      ============================================ */}
      <section id="personal" className="seccion-labores-harvard">
        <div className="contenedor-harvard-ancho">
          <div className="encabezado-harvard-simple">
            <h2 className="titulo-seccion-editorial">Conoce a Nuestro Equipo</h2>
            <p className="subtitulo-seccion-editorial">
              Profesionales dedicados a la excelencia educativa.
            </p>
          </div>

          <div className="grid-labores-harvard">
            <TarjetasDesplegables items={personalAdaptado} />
          </div>

          <CarruselBase
            titulo="Galería de Nuestro Equipo"
            slides={CARRUSEL_PERSONAL_DATA}
            indiceActual={carruselPersonal.indiceActual}
            onAnterior={carruselPersonal.anterior}
            onSiguiente={carruselPersonal.siguiente}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;