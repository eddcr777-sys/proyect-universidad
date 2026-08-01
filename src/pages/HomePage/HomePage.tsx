import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [grado, setGrado] = useState('');
  const navigate = useNavigate();

  const manejarEnvio = (event: React.FormEvent) => {
    event.preventDefault();
    if (grado) {
      navigate(`/presentacion/${grado}`);
    }
  };

  return (
    <div className="homepage-contenedor">

        <header className="portada">
        <div className="contenedor cuadricula-portada" >
            <div className="contenido-portada">
                <h1 className="titulo-portada">
                    Forjando el Futuro de Venezuela.
                </h1>
                <p className="subtitulo-portada">
                    Liceo Bolivariano "Antonio Lemus Pérez": Una comunidad educativa comprometida con la formación integral y tecnológica.
                </p>
                <div className="acciones-portada">
                    <a href="#historia" className="boton boton-primario">
                        Nuestra Historia
                        <span className="material-symbols-outlined" style={{fontSize: '1.25rem'}}>arrow_downward</span>
                    </a>
                </div>
            </div>
            <div className="contenedor-imagen-portada">
                <img src="../imagenes/images.jpeg" alt="Institución" className="imagen-portada" style={{borderRadius: 'var(--radio-md)'}} width="640" height="426" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
        </div>
    </header>
    {/* Misión y Visión */}
     <section className="seccion-espaciada fondo-claro" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <div className="contenedor cuadricula-2" style={{gap: '1.5rem'}}>
            {/* Misión */}
            <div className="tarjeta tarjeta-clara tarjeta-hover-zoom">
                <div className="tarjeta-icono">
                    <span className="material-symbols-outlined" style={{fontSize: '2.25rem'}}>
                        {/* &#xf8df; */}
                    </span>
                </div>
                <h2 className="titulo-tarjeta">Nuestra Misión</h2>
                <p className="texto-tarjeta">
                    Promover y desarrollar un alto nivel socio-ético-cultural mediante la formación integral de
                    estudiantes capaces de enfrentar los retos de la vida, responsables con su núcleo familiar y
                    comprometidos con la patria y los valores sociales.
                </p>
            </div>
            {/* Visión */}
            <div className="tarjeta tarjeta-oscura tarjeta-hover-zoom">
                <div className="tarjeta-icono">
                    <span className="material-symbols-outlined" style={{fontSize: '2.25rem'}}>
                        {/* &#xe8f4; */}
                    </span>
                </div>
                <h2 className="tituloh2">Nuestra Visión</h2>
                <p className="texto-tarjeta">
                    Ser un referente colectivo e integrador que forme ciudadanos integrales, socializando la
                    relación entre escuela, familia y comunidad, potenciando el trabajo liberador y el aprendizaje
                    en permanente construcción.
                </p>
            </div>
        </div>
    </section>

     {/* Reseña Histórica */}
    <section id="historia" className="seccion-espaciada fondo-alternativo" style={{overflow: 'hidden', position: 'relative', paddingTop: '2.5rem', paddingBottom: '2.5rem'}}>
        <div className="contenedor">
            <div className="cuadricula-2" style={{alignItems: 'center'}}>
                <div>
                    <h2 style={{fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--color-primario)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem'}}>El Legado</h2>
                    <h3 style={{fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--color-texto-principal)', marginBottom: '3rem', lineHeight: '1.2'}}>                        
                        Más de cuatro décadas <br />educando con pasión.
                    </h3>
                    <div style={{fontSize: '1.125rem', color: 'var(--color-texto-principal)', lineHeight: '1.625', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                        <p>
                            Nacimos en septiembre de 1984 como la <strong style={{color: 'var(--color-primario)'}}>E.B. “Creación Bolivariana”</strong>. En aquel entonces, operamos en las instalaciones de la hoy U.E. “José Silverio González” con una matrícula de 716 alumnos bajo la estrategia UGA.
                        </p>
                        <p>
                            En enero de 1988, adoptamos con orgullo el nombre del insigne educador sucrense <strong style={{color: 'var(--color-primario)'}}>Antonio Lemus Pérez</strong>. Desde entonces, nos trasladamos a nuestra sede propia en la Avenida Las Industrias, consolidándonos como un núcleo vital para Cumaná.
                        </p>
                        <p>
                            Hoy, el Liceo Bolivariano Antonio Lemus Pérez se mantiene como una de las instituciones más emblemáticas del Estado Sucre, evolucionando constantemente para integrar la tecnología y la innovación en el currículo nacional.
                        </p>
                    </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <div style={{height: '16rem', borderRadius: 'var(--radio-md)', backgroundColor: 'rgba(15, 81, 50, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(15, 81, 50, 0.1)'}}>
                            <div className="texto-centrado">
                                <p style={{fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--color-primario)'}}>1984</p>
                                <p style={{fontSize: '0.875rem', fontWeight: 'bold', opacity: '0.5', textTransform: 'uppercase', marginTop: '0.5rem', letterSpacing: '0.1em'}}>Fundación</p>
                            </div>
                        </div>
                        <div style={{height: '12rem', borderRadius: 'var(--radio-md)', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.05)'}}>
                            <img src="../imagenes/le.jpeg" width="400" height="300" alt="Aula" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '3rem'}}>
                        <div style={{height: '12rem', borderRadius: 'var(--radio-md)', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.05)'}}>
                            <img src="../imagenes/lem.jpeg" width="400" height="300" alt="Estudiante" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} loading="lazy" decoding="async" />
                        </div>
                        <div style={{height: '16rem', borderRadius: 'var(--radio-md)', backgroundColor: 'var(--color-primario)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-texto-inverso)'}}>
                            <div className="texto-centrado">
                                <p style={{fontSize: '2.25rem', fontWeight: 'bold'}}>2026</p>
                                <p style={{fontSize: '0.875rem', fontWeight: 'bold', opacity: '0.5', textTransform: 'uppercase', marginTop: '0.5rem', letterSpacing: '0.1em'}}>Digitalización</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* SECCIÓN: NUESTRAS LABORES E INICIATIVAS */}
    <section className="seccion-espaciada fondo-claro">
        <div className="contenedor">
            <div style={{textAlign: 'center', maxWidth: '42rem', margin: '0 auto 3rem auto'}}>
                <h2 style={{fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--color-primario)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem'}}>Compromiso Social y Académico</h2>
                <h3 style={{fontSize: '2.25rem', fontWeight: 'bold', lineHeight: '1.2'}}>Nuestras Labores e Iniciativas</h3>
                <p style={{fontSize: '1rem', color: 'var(--color-texto-secundario)', marginTop: '0.5rem', opacity: '0.8'}}>Toca cualquier tarjeta para desplegar su información completa.</p>
            </div>
            
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', margin: '0 auto 3rem auto'}}>
                {/* Labor 1 */}
                <div className="tarjeta-grande-desplegable">
                     <div className="avatar-cover-grande">
                        <img loading="lazy" decoding="async" width="600" height="220" src="../imagenes/images.jpeg" alt="Formación Académica" />
                    </div>
                    <span className="material-symbols-outlined indicador-desplegar">expand_more</span>
                    <div style={{padding: '2rem'}}>
                        <h4 style={{fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0'}}>Formación Académica</h4>
                        <p style={{fontSize: '1.05rem', opacity: '0.85', margin: '0'}}>Impartición de Educación Media General con altos estándares éticos, científicos y culturales orientados al desarrollo.</p>
                    </div>
                    <div className="contenido-desplegable-grande">
                        <hr style={{border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: '1rem 0'}} />
                        <p style={{fontSize: '0.95rem', lineHeight: '1.6', opacity: '0.9', padding: '1rem'}}>
                            Nuestro programa académico está enfocado en dotar a los estudiantes de competencias críticas y analíticas, promoviendo proyectos científicos y humanistas que preparan de forma sólida a cada joven para la educación universitaria.
                        </p>
                    </div>
                </div>

                {/* Labor 2 */}
                <div className="tarjeta-grande-desplegable">
                    <div className="avatar-cover-grande">
                        <img loading="lazy" decoding="async" width="600" height="220" src="../imagenes/lem.jpeg" alt="Tecnología y Ciberseguridad" />
                    </div>
                    <span className="material-symbols-outlined indicador-desplegar">expand_more</span>
                    <div style={{padding: '2rem'}}>
                        <h4 style={{fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0'}}>Tecnología y Ciberseguridad</h4>
                        <p style={{fontSize: '1.05rem', opacity: '0.85', margin: '0'}}>Proyectos de inclusión y alfabetización digital en alianza estratégica con universidades e instituciones tecnológicas.</p>
                    </div>
                    <div className="contenido-desplegable-grande">
                        <hr style={{border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: '1rem 0'}} />
                        <p style={{fontSize: '0.95rem', lineHeight: '1.6', opacity: '0.9', padding: '1rem'}}>
                            Implementamos talleres de uso seguro de internet, programación básica y resguardo de la identidad digital, educando a toda la comunidad escolar frente a los desafíos tecnológicos actuales.
                        </p>
                    </div>
                </div>

                {/* Labor 3 */}
                <div className="tarjeta-grande-desplegable">
                    <div className="avatar-cover-grande">
                        <img loading="lazy" decoding="async" width="600" height="220" src="../imagenes/le.jpeg" alt="Atención Nutricional" />
                    </div>
                    <span className="material-symbols-outlined indicador-desplegar">expand_more</span>
                    <div style={{padding: '2rem'}}>
                        <h4 style={{fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0'}}>Atención Nutricional</h4>
                        <p style={{fontSize: '1.05rem', opacity: '0.85', margin: '0'}}>Garantía del Programa de Alimentación Escolar (PAE) para fortalecer el bienestar integral de la comunidad estudiantil.</p>
                    </div>
                    <div className="contenido-desplegable-grande">
                        <hr style={{border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: '1rem 0'}} />
                        <p style={{fontSize: '0.95rem', lineHeight: '1.6', opacity: '0.9', padding: '1rem'}}>
                            A través de una gestión coordinada con los comités de alimentación, aseguramos raciones alimenticias balanceadas diariamente para optimizar el rendimiento cognitivo y físico de los alumnos.
                        </p>
                    </div>
                </div>

                {/* Labor 4 */}
                <div className="tarjeta-grande-desplegable">
                    <div className="avatar-cover-grande">
                        <img loading="lazy" decoding="async" width="600" height="220" src="../imagenes/lemu.jpeg" alt="Vínculo Comunitario" />
                    </div>
                    <span className="material-symbols-outlined indicador-desplegar">expand_more</span>
                    <div style={{padding: '2rem'}}>
                        <h4 style={{fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0'}}>Vínculo Comunitario</h4>
                        <p style={{fontSize: '1.05rem', opacity: '0.85', margin: '0'}}>Actividades culturales, deportivas y ambientales integrando constantemente a la escuela, la familia y la comunidad.</p>
                    </div>
                    <div className="contenido-desplegable-grande">
                        <hr style={{border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: '1rem 0'}} />
                        <p style={{fontSize: '0.95rem', lineHeight: '1.6', opacity: '0.9', padding: '1rem'}}>
                            Fomentamos jornadas ecológicas, festivales de canto, ferias socio-productivas y torneos deportivos abiertos que estrechan lazos de convivencia armónica en el municipio.
                        </p>
                    </div>
                </div>
            </div>

            {/* CARRUSEL INTEGRADO EN LABORES */}
            <div style={{marginTop: '1.5rem', textAlign: 'center'}}>
                <h4 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>Galería de Iniciativas en Acción</h4>
                
                <div className="contenedor-carrusel-cover" style={{borderRadius: 'var(--radio-md)', overflow: 'hidden'}}>
                    <div className="pista-carrusel-cover" id="pistaCoverLabores">
                        <div className="item-carrusel-cover">
                            <img loading="lazy" decoding="async" width="1200" height="800" src="../imagenes/images.jpeg" alt="Jornada Educativa" />
                            <div className="overlay-carrusel-cover">
                                <h3 className="h3ti">Jornadas Educativas</h3>
                                <p>Acompañamiento cercano y personalizado para el enriquecimiento intelectual.</p>
                            </div>
                        </div>
                        <div className="item-carrusel-cover">
                            <img loading="lazy" decoding="async" width="1200" height="800" src="../imagenes/lem.jpeg" alt="Talleres Tecnológicos" />
                            <div className="overlay-carrusel-cover">
                                <h3 className="h3ti">Talleres Tecnológicos</h3>
                                <p>Espacios prácticos orientados a la ciberseguridad y alfabetización digital.</p>
                            </div>
                        </div>
                        <div className="item-carrusel-cover">
                            <img loading="lazy" decoding="async" width="1200" height="800" src="../imagenes/le.jpeg" alt="Comunidad Activa" />
                            <div className="overlay-carrusel-cover">
                                <h3 className="h3ti">Comunidad Activa</h3>
                                <p>Trabajo conjunto entre docentes, estudiantes y representantes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="controles-cover">
                        <button className="boton-cover" id="btnCoverIzquierdaLabores" type="button" aria-label="Anterior">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="boton-cover" id="btnCoverDerechaLabores" type="button" aria-label="Siguiente">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* SECCIÓN: NUESTRA GALERÍA PRINCIPAL */}
    <section className="seccion-espaciada fondo-alternativo" style={{paddingLeft: 0, paddingRight: 0, paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
        <div style={{textAlign: 'center', maxWidth: '42rem', margin: '0 auto 2rem auto', padding: '0 1.5rem'}}>
            <h2 style={{fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--color-primario)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem'}}>Instalaciones y Vida Escolar</h2>
            <h3 style={{fontSize: '2.25rem', fontWeight: 'bold', lineHeight: '1.2'}}>Nuestra Galería en Pantalla Completa</h3>
        </div>

        <div className="contenedor-carrusel-cover">
            <div className="pista-carrusel-cover" id="pistaCover">
                <div className="item-carrusel-cover">
                    <img loading="lazy" decoding="async" width="1200" height="800" src="../imagenes/images.jpeg" alt="Campus Principal" />
                    <div className="overlay-carrusel-cover">
                        <h3 className="h3ti">Campus Principal</h3>
                        <p>Áreas comunes amplias y espacios abiertos diseñados para el desarrollo armónico de la juventud sucrense.</p>
                    </div>
                </div>
                <div className="item-carrusel-cover">
                    <img loading="lazy" decoding="async" width="1200" height="800" src="../imagenes/lem.jpeg" alt="Laboratorio Tecnológico" />
                    <div className="overlay-carrusel-cover">
                        <h3 className="h3ti">Laboratorio Tecnológico</h3>
                        <p>Espacios adaptados para las prácticas de alfabetización digital y ciberseguridad enlazados con la educación moderna.</p>
                    </div>
                </div>
                <div className="item-carrusel-cover">
                    <img loading="lazy" decoding="async" width="1200" height="800" src="../imagenes/le.jpeg" alt="Clases Magistrales" />
                    <div className="overlay-carrusel-cover">
                        <h3 className="h3ti">Clases Magistrales</h3>
                        <p>Dinamismo y constante participación activa de los alumnos bajo la guía de un cuerpo docente altamente preparado.</p>
                    </div>
                </div>
            </div>

            <div className="controles-cover">
                <button className="boton-cover" id="btnCoverIzquierda" type="button" aria-label="Anterior">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="boton-cover" id="btnCoverDerecha" type="button" aria-label="Siguiente">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    </section>

    {/* SECCIÓN: NUESTRO PERSONAL */}
    <section className="seccion-espaciada fondo-claro">
        <div className="contenedor">
            <div style={{textAlign: 'center', maxWidth: '42rem', margin: '0 auto 3rem auto'}}>
                <h2 style={{fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--color-primario)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem'}}>Talento Humano</h2>
                <h3 style={{fontSize: '2.25rem', fontWeight: 'bold', lineHeight: '1.2'}}>Conoce a Nuestro Equipo</h3>
                <p style={{fontSize: '1rem', color: 'var(--color-texto-secundario)', marginTop: '0.5rem', opacity: '0.8'}}>Toca cualquier tarjeta para desplegar su información completa.</p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
                {/* Personal 1 */}
                <div className="tarjeta-grande-desplegable">
                    <div className="avatar-cover-grande">
                        <img loading="lazy" decoding="async" width="600" height="220" src="../imagenes/lemu.jpeg" alt="Equipo Directivo" />
                    </div>
                    <span className="material-symbols-outlined indicador-desplegar">expand_more</span>
                    <div style={{padding: '2rem'}}>
                        <h4 style={{fontSize: '1.35rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>Equipo Directivo</h4>
                        <p style={{fontSize: '0.95rem', color: 'var(--color-primario)', fontWeight: 'bold', marginBottom: '0.5rem'}}>Gestión y Liderazgo</p>
                        <p style={{fontSize: '0.95rem', opacity: '0.8', margin: 0}}>Encargados de coordinar la excelencia pedagógica, administrativa e institucional.</p>
                    </div>
                    <div className="contenido-desplegable-grande">
                        <hr style={{border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: '1rem 0'}} />
                        <p style={{fontSize: '0.95rem', lineHeight: '1.6', opacity: '0.9', padding: '1rem'}}>
                            El equipo directivo guía las políticas educativas de la institución con un enfoque humanista y de apertura tecnológica, asegurando una atención directa y cercana con los representantes y la comunidad escolar.
                        </p>
                    </div>
                </div>

                {/* Personal 2 */}
                <div className="tarjeta-grande-desplegable">
                    <div className="avatar-cover-grande">
                        <img loading="lazy" decoding="async" width="600" height="220" src="../imagenes/images.jpeg" alt="Cuerpo Docente" />
                    </div>
                    <span className="material-symbols-outlined indicador-desplegar">expand_more</span>
                    <div style={{padding: '2rem'}}>
                        <h4 style={{fontSize: '1.35rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>Cuerpo Docente</h4>
                        <p style={{fontSize: '0.95rem', color: 'var(--color-primario)', fontWeight: 'bold', marginBottom: '0.5rem'}}>Profesorado Multidisciplinario</p>
                        <p style={{fontSize: '0.95rem', opacity: '0.8', margin: 0}}>Educadores guiados fuertemente por la enseñanza socio-ética y tecnológica.</p>
                    </div>
                    <div className="contenido-desplegable-grande">
                        <hr style={{border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: '1rem 0'}} />
                        <p style={{fontSize: '0.95rem', lineHeight: '1.6', opacity: '0.9', padding: '1rem'}}>
                            Nuestros profesores combinan la vocación tradicional de la enseñanza con metodologías modernas, promoviendo el pensamiento crítico, la investigación científica y la ciberseguridad en cada aula.
                        </p>
                    </div>
                </div>

                {/* Personal 3 */}
                <div className="tarjeta-grande-desplegable">
                    <div className="avatar-cover-grande">
                        <img loading="lazy" decoding="async" width="600" height="220" src="../imagenes/lem.jpeg" alt="Personal Administrativo" />
                    </div>
                    <span className="material-symbols-outlined indicador-desplegar">expand_more</span>
                    <div style={{padding: '2rem'}}>
                        <h4 style={{fontSize: '1.35rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>Personal Administrativo</h4>
                        <p style={{fontSize: '0.95rem', color: 'var(--color-primario)', fontWeight: 'bold', marginBottom: '0.5rem'}}>Soporte Operativo</p>
                        <p style={{fontSize: '0.95rem', opacity: '0.8', margin: 0}}>Garantizan el funcionamiento diario, control de matrícula y mantenimiento.</p>
                    </div>
                    <div className="contenido-desplegable-grande">
                        <hr style={{border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: '1rem 0'}} />
                        <p style={{fontSize: '0.95rem', lineHeight: '1.6', opacity: '0.9', padding: '1rem'}}>
                            El personal de apoyo administrativo y operativo asegura la correcta gestión de trámites estudiantiles, el orden de las instalaciones y el mantenimiento constante de los espacios escolares.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Galería del Personal */}
        <div style={{textAlign: 'center', maxWidth: '42rem', margin: '0 auto 2rem auto', padding: '0 1.5rem'}}>
            <h2 style={{fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--color-primario)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem'}}>Galería del Personal</h2>
            <h3 style={{fontSize: '2.25rem', fontWeight: 'bold', lineHeight: '1.2'}}>Nuestro Talento Humano</h3>
        </div>

        <div className="contenedor-carrusel-cover">
            <div className="pista-carrusel-cover" id="pistaCoverPersonal">
                <div className="item-carrusel-cover">
                    <img loading="lazy" decoding="async" width="1200" height="800" src="../imagenes/lemu.jpeg" alt="Equipo Directivo" />
                    <div className="overlay-carrusel-cover">
                        <h3 className="h3ti">Equipo Directivo</h3>
                        <p>Gestión y Liderazgo Institucional</p>
                    </div>
                </div>
                <div className="item-carrusel-cover">
                    <img loading="lazy" decoding="async" width="1200" height="800" src="../imagenes/images.jpeg" alt="Cuerpo Docente" />
                    <div className="overlay-carrusel-cover">
                        <h3 className="h3ti">Cuerpo Docente</h3>
                        <p>Profesorado Multidisciplinario</p>
                    </div>
                </div>
                <div className="item-carrusel-cover">
                    <img loading="lazy" decoding="async" width="1200" height="800" src="../imagenes/lem.jpeg" alt="Personal Administrativo" />
                    <div className="overlay-carrusel-cover">
                        <h3 className="h3ti">Personal Administrativo</h3>
                        <p>Soporte Operativo y Técnico</p>
                    </div>
                </div>
            </div>

            <div className="controles-cover">
                <button className="boton-cover" id="btnCoverIzquierdaPersonal" type="button" aria-label="Anterior">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="boton-cover" id="btnCoverDerechaPersonal" type="button" aria-label="Siguiente">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    </section>

    {/* Enlace al Proyecto de Ciberseguridad */}
    <section className="seccion-espaciada">
        <div className="contenedor">
            <div style={{backgroundColor: 'var(--color-primario)', borderRadius: 'var(--radio-md)', padding: '2.5rem', color: 'var(--color-texto-inverso)', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'}}>
                <div style={{position: 'absolute', top: 0, right: 0, padding: '10rem', opacity: '0.1', pointerEvents: 'none'}}>
                    <span className="material-symbols-outlined" style={{fontSize: '25rem'}}>&#xe32a;</span>
                </div>

                <div style={{maxWidth: '48rem', position: 'relative', zIndex: 10}}>
                    <div style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.375rem 1rem', borderRadius: '9999px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)'}}>
                        <span className="material-symbols-outlined" style={{fontSize: '0.875rem'}}>&#xe65f;</span>
                        <span style={{fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Proyecto Institucional 2025-2026</span>
                    </div>
                    <h2 style={{color: 'rgb(255, 255, 255)', textShadow: '0px 0px 2px #000000'}}>
                        Alfabetización Digital: Protegiendo a nuestra Comunidad.
                    </h2>
                    <p style={{fontSize: '1.25rem', fontWeight: 500, opacity: '0.8', marginBottom: '3rem', lineHeight: '1.625'}}>
                        En colaboración con la UPTOS CR, presentamos una propuesta integral para concientizar sobre los
                        riesgos en internet y promover la ciberseguridad como un escudo fundamental.
                    </p>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                        <a href="justificacion.html" className="boton boton-delineado" style={{backgroundColor: 'white', color: 'var(--color-primario)'}}>
                            <span className="material-symbols-outlined">&#xe873;</span>
                            Ver Justificación
                        </a>
                        <a href="index2.html" className="boton boton-delineado">
                            <span className="material-symbols-outlined">&#xea19;</span>
                            Manual Maestro
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* 3. Acceso Directo (Formulario) */}
      <section className="seccion-formulario fondo-alternativo">
        <div className="contenedor">
          <h2>¿Listo para aprender?</h2>
          <p>Ingresa tu grado para acceder a tus módulos personalizados.</p>
          <form onSubmit={manejarEnvio} className="formulario-grado">
            <label htmlFor="grado">Tu Grado:</label>
            <select id="grado" value={grado} onChange={(e) => setGrado(e.target.value)} required>
              <option value="">Selecciona...</option>
              <option value="1ro">1er Año</option>
              <option value="2do">2do Año</option>
              <option value="3ro">3er Año</option>
              <option value="4to">4to Año</option>
              <option value="5to">5to Año</option>
            </select>
            <button type="submit" className="boton-primario">Acceder a mis módulos</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;