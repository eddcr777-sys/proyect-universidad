import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowDown, 
  Target, 
  Eye, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  BookOpen, 
  FileText,
  School
} from 'lucide-react';
import '../HomePage/HomePage.css';
import { useCarrusel } from '../../hooks/useCarrusel';
import {
  LABORES_DATA,
  PERSONAL_DATA,
  CARRUSEL_LABORES_DATA,
  CARRUSEL_GALERIA_DATA,
  CARRUSEL_PERSONAL_DATA
} from '../../data/HomeData';




export const Home: React.FC = () => {

    const [laborAbierta, setLaborAbierta] = useState<number | null>(null);
    const [personalAbierto, setPersonalAbierto] = useState<number | null>(null);
    
    const carruselGaleria = useCarrusel(CARRUSEL_GALERIA_DATA.length);
    const carruselLabores = useCarrusel(CARRUSEL_LABORES_DATA.length);
    const carruselPersonal = useCarrusel(CARRUSEL_PERSONAL_DATA.length);

  return (
    <main className="inicio-pagina">
      
      {/* 1. SECCIÓN DE PORTADA */}
  {/* 1. SECCIÓN DE PORTADA INSTITUCIONAL */}
   {/* 1. SECCIÓN DE PORTADA INSTITUCIONAL */}
      <header className="portada-institucional">
        <div className="contenedor cuadricula-institucional">
          
          {/* Lado Izquierdo: Información Académica */}
          <div className="contenido-institucional">
            <div className="cintillo-oficial">
              <span className="escudo-texto">República Bolivariana de Venezuela</span>
              <span className="separador-cintillo">•</span>
              <span>MPPE</span>
            </div>

            <h1 className="titulo-institucional">
              Liceo Bolivariano <br />
              <span className="nombre-liceo">"Antonio Lemus Pérez"</span>
            </h1>

            <p className="descripcion-institucional">
              Institución pública dedicada a la formación académica, ética y ciudadana de la juventud sucrense. Comprometidos con el desarrollo educativo e integral en Cumaná.
            </p>

            <div className="acciones-institucionales">
              <a href="#historia" className="boton-institucional-principal">
                Reseña Histórica
                <ArrowDown size={18} />
              </a>
              <Link to="/modulos/manual-completo" className="boton-institucional-secundario">
                <BookOpen size={18} />
                Manual Educativo
              </Link>
            </div>

            {/* Accesos Rápidos Institucionales */}
            <div className="accesos-rapidos">
              <div className="item-acceso">
                <span className="icono-acceso"><School size={24} /></span>
                <div>
                  <strong>Sede Cumaná</strong>
                  <p>Av. Las Industrias</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Marco Fotográfico Institucional */}
          <div className="columna-foto-institucional">
            <div className="marco-fotografico">
              <img 
                src="/imagenes/images.jpeg" 
                alt="Fachada del Liceo Bolivariano Antonio Lemus Pérez" 
                className="foto-fachada"
                width="640" 
                height="426" 
              />
              <div className="pie-foto-institucional">
                <span>Instalaciones Principales — Cumaná, Edo. Sucre</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 2. MISIÓN Y VISIÓN */}
      <section className="seccion-mision-vision">
        <div className="contenedor cuadricula-2">
          <div className="tarjeta-mision">
            <div className="tarjeta-icono">
              <Target size={36} />
            </div>
            <h2 className="titulo-tarjeta">Nuestra Misión</h2>
            <p className="texto-tarjeta">
              Promover y desarrollar un alto nivel socio-ético-cultural mediante la formación integral de
              estudiantes capaces de enfrentar los retos de la vida, responsables con su núcleo familiar y
              comprometidos con la patria y los valores sociales.
            </p>
          </div>

          <div className="tarjeta-vision">
            <div className="tarjeta-icono">
              <Eye size={36} />
            </div>
            <h2 className="titulo-tarjeta">Nuestra Visión</h2>
            <p className="texto-tarjeta">
              Ser un referente colectivo e integrador que forme ciudadanos integrales, socializando la
              relación entre escuela, familia y comunidad, potenciando el trabajo liberador y el aprendizaje
              en permanente construcción.
            </p>
          </div>
        </div>
      </section>

      {/* 3. RESEÑA HISTÓRICA */}
      <section id="historia" className="seccion-historia">
        <div className="contenedor">
          <div className="cuadricula-2 align-center">
            <div className="historia-texto">
              <h2 className="etiqueta-seccion">El Legado</h2>
              <h3 className="titulo-seccion-grande">
                Más de cuatro décadas <br />educando con pasión.
              </h3>
              <div className="parrafos-historia">
                <p>
                  Nacimos en septiembre de 1984 como la <strong>E.B. “Creación Bolivariana”</strong>. En aquel entonces, operamos en las instalaciones de la hoy U.E. “José Silverio González” con una matrícula de 716 alumnos bajo la estrategia UGA.
                </p>
                <p>
                  En enero de 1988, adoptamos con orgullo el nombre del insigne educador sucrense <strong>Antonio Lemus Pérez</strong>. Desde entonces, nos trasladamos a nuestra sede propia en la Avenida Las Industrias, consolidándonos como un núcleo vital para Cumaná.
                </p>
                <p>
                  Hoy, el Liceo Bolivariano Antonio Lemus Pérez se mantiene como una de las instituciones más emblemáticas del Estado Sucre, evolucionando constantemente para integrar la tecnología y la innovación en el currículo nacional.
                </p>
              </div>
            </div>

            <div className="mosaico-historia">
              <div className="columna-mosaico">
                <div className="caja-hito">
                  <p className="ano-hito">1984</p>
                  <p className="etiqueta-hito">Fundación</p>
                </div>
                <div className="caja-imagen-mosaico">
                  <img src="/imagenes/le.jpeg" width="400" height="300" alt="Aula" loading="lazy" />
                </div>
              </div>
              <div className="columna-mosaico desplazada">
                <div className="caja-imagen-mosaico">
                  <img src="/imagenes/lem.jpeg" width="400" height="300" alt="Estudiante" loading="lazy" />
                </div>
                <div className="caja-hito destacado">
                  <p className="ano-hito">2026</p>
                  <p className="etiqueta-hito">Digitalización</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NUESTRAS LABORES E INICIATIVAS (TARJETAS DESPLEGABLES) */}
      <section className="seccion-labores">
        <div className="contenedor">
          <div className="encabezado-centrado">
            <h2 className="etiqueta-seccion">Compromiso Social y Académico</h2>
            <h3 className="titulo-seccion-grande">Nuestras Labores e Iniciativas</h3>
            <p className="subtitulo-seccion">Toca cualquier tarjeta para desplegar su información completa.</p>
          </div>

          <div className="cuadricula-tarjetas-desplegables">
            {LABORES_DATA.map((item) => {
              const estaAbierto = laborAbierta === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`tarjeta-desplegable ${estaAbierto ? 'abierta' : ''}`}
                  onClick={() => setLaborAbierta(estaAbierto ? null : item.id)}
                >
                  <div className="portada-tarjeta">
                    <img src={item.imagen} alt={item.titulo} loading="lazy" />
                  </div>
                  <ChevronDown className={`indicador-chevron ${estaAbierto ? 'rotado' : ''}`} size={20} />
                  <div className="cuerpo-tarjeta">
                    <h4>{item.titulo}</h4>
                    <p>{item.resumen}</p>
                  </div>
                  {estaAbierto && (
                    <div className="contenido-expandido">
                      <hr />
                      <p>{item.detalle}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Carrusel Integrado en Labores */}
          <div className="bloque-carrusel-interno">
            <h4 className="subtitulo-carrusel">Galería de Iniciativas en Acción</h4>
            <div className="contenedor-carrusel">
              <div 
                className="pista-carrusel" 
                style={{ transform: `translateX(-${carruselLabores.indiceActual * 100}%)` }}
              >
                {CARRUSEL_LABORES_DATA.map((slide) => (
                  <div key={slide.id} className="item-carrusel">
                    <img src={slide.imagen} alt={slide.titulo} loading="lazy" />
                    <div className="overlay-carrusel">
                      <h3>{slide.titulo}</h3>
                      <p>{slide.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="controles-carrusel">
                <button 
                  type="button" 
                  aria-label="Anterior" 
                  onClick={carruselLabores.anterior}
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  type="button" 
                  aria-label="Siguiente" 
                  onClick={carruselLabores.siguiente}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NUESTRA GALERÍA PRINCIPAL */}
      <section className="seccion-galeria-principal">
        <div className="encabezado-centrado">
          <h2 className="etiqueta-seccion">Instalaciones y Vida Escolar</h2>
          <h3 className="titulo-seccion-grande">Nuestra Galería en Pantalla Completa</h3>
        </div>

        <div className="contenedor-carrusel">
          <div 
            className="pista-carrusel" 
            style={{ transform: `translateX(-${carruselGaleria.indiceActual * 100}%)` }}
          >
            {CARRUSEL_GALERIA_DATA.map((slide) => (
              <div key={slide.id} className="item-carrusel">
                <img src={slide.imagen} alt={slide.titulo} loading="lazy" />
                <div className="overlay-carrusel">
                  <h3>{slide.titulo}</h3>
                  <p>{slide.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="controles-carrusel">
            <button 
              type="button" 
              aria-label="Anterior" 
              onClick={carruselLabores.anterior}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              type="button" 
              aria-label="Siguiente" 
              onClick={carruselGaleria.siguiente}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. NUESTRO PERSONAL */}
      <section className="seccion-personal">
        <div className="contenedor">
          <div className="encabezado-centrado">
            <h2 className="etiqueta-seccion">Talento Humano</h2>
            <h3 className="titulo-seccion-grande">Conoce a Nuestro Equipo</h3>
            <p className="subtitulo-seccion">Toca cualquier tarjeta para desplegar su información completa.</p>
          </div>

          <div className="cuadricula-tarjetas-desplegables">
            {PERSONAL_DATA.map((item) => {
              const estaAbierto = personalAbierto === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`tarjeta-desplegable ${estaAbierto ? 'abierta' : ''}`}
                  onClick={() => setPersonalAbierto(estaAbierto ? null : item.id)}
                >
                  <div className="portada-tarjeta">
                    <img src={item.imagen} alt={item.cargo} loading="lazy" />
                  </div>
                  <ChevronDown className={`indicador-chevron ${estaAbierto ? 'rotado' : ''}`} size={20} />
                  <div className="cuerpo-tarjeta">
                    <h4>{item.cargo}</h4>
                    <p className="subtitulo-cargo">{item.subtitulo}</p>
                    <p>{item.resumen}</p>
                  </div>
                  {estaAbierto && (
                    <div className="contenido-expandido">
                      <hr />
                      <p>{item.detalle}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Galería del Personal */}
          <div className="bloque-carrusel-interno">
            <div className="encabezado-centrado">
              <h2 className="etiqueta-seccion">Galería del Personal</h2>
              <h3 className="titulo-seccion-grande">Nuestro Talento Humano</h3>
            </div>

            <div className="contenedor-carrusel">
              <div 
                className="pista-carrusel" 
                style={{ transform: `translateX(-${carruselPersonal.indiceActual * 100}%)` }}
              >
                {CARRUSEL_PERSONAL_DATA.map((slide) => (
                  <div key={slide.id} className="item-carrusel">
                    <img src={slide.imagen} alt={slide.titulo} loading="lazy" />
                    <div className="overlay-carrusel">
                      <h3>{slide.titulo}</h3>
                      <p>{slide.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="controles-carrusel">
                <button 
                  type="button" 
                  aria-label="Anterior" 
                  onClick={carruselPersonal.anterior}
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  type="button" 
                  aria-label="Siguiente" 
                  onClick={carruselPersonal.siguiente}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BANNER DE PROYECTO DE CIBERSEGURIDAD */}
      <section className="seccion-banner-proyecto">
        <div className="contenedor">
          <div className="caja-banner-proyecto">
            <div className="marca-agua-icono">
              <ShieldCheck size={280} />
            </div>

            <div className="contenido-banner-proyecto">
              <div className="pildora-badge">
                <BookOpen size={14} />
                <span>Proyecto Institucional 2025-2026</span>
              </div>
              
              <h2>
                Alfabetización Digital: Protegiendo a nuestra Comunidad.
              </h2>
              
              <p>
                En colaboración con la UPTOS CR, presentamos una propuesta integral para concientizar sobre los
                riesgos en internet y promover la ciberseguridad como un escudo fundamental.
              </p>
              
              <div className="acciones-banner">
                <Link to="/justificacion" className="boton-delineado-blanco">
                  <FileText size={18} />
                  Ver Justificación
                </Link>
                <Link to="/modulos/manual-completo" className="boton-delineado-transparente">
                  <BookOpen size={18} />
                  Manual Maestro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;