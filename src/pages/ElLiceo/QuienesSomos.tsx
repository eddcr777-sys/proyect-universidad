import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  GraduationCap, 
  Clock,
  Award,
  ChevronRight,
  Shield,
  Activity,
  Compass,
  Cpu,
  Trophy,
  HeartHandshake
} from 'lucide-react';
import fotoFachada from '../../assets/lb.jpeg';
import fotoHero from '../../assets/pbk-Hero-3.jpg';
import fotoMision from '../../assets/handshake.jpg';
import fotoVision from '../../assets/lem.jpeg';
import fotoAula from '../../assets/le.jpeg';
import fotoDeportes from '../../assets/lemu.jpeg';
import fotoOrigenA from '../../assets/Gemini_Generated_Image_2p4dkt2p4dkt2p4d.jpeg';
import fotoOrigenB from '../../assets/Gemini_Generated_Image_qrp9miqrp9miqrp9.jpeg';
import fotoEtica from '../../assets/etic.jpeg';
import fotoFormacion from '../../assets/fi.jpeg';
import './QuienesSomos.css';

/**
 * Página Principal Unificada: El Complejo Educativo (C.E. Antonio Lemus Pérez)
 * Estructura completa inspirada en las capturas de Colegio Los Arcos:
 * - Tipografía geométrica sans-serif (Outfit / Inter)
 * - Redondeo pronunciado en imágenes y contenedores (~28px)
 * - Misión, Visión, Estudios, Historia Expandida, Razones de Excelencia, Vida Estudiantil, Instalaciones y Normas
 */
export const QuienesSomos: React.FC = () => {
  const location = useLocation();

  // Desplazamiento suave directo al ancla indicada en la URL
  useEffect(() => {
    if (location.hash) {
      const idElemento = location.hash.replace('#', '');
      const elemento = document.getElementById(idElemento);
      if (elemento) {
        setTimeout(() => {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="pagina-quienes-somos">
      {/* ───── BANNER HERO CON TARJETA FLOTANTE (Captura 3) ───── */}
      <header
        className="quienes-hero-banner"
        style={{ backgroundImage: `url(${fotoHero})` }}
      >
        <div className="quienes-hero-overlay" />
        <div className="quienes-hero-contenido">
          <div className="quienes-hero-caja-flotante">
            <span className="quienes-hero-etiqueta">Identidad Institucional</span>
            <h1 className="quienes-hero-titulo">¿Quiénes somos?</h1>
            <p className="quienes-hero-subtitulo">
              Complejo Educativo "Antonio Lemus Pérez" · Formando líderes con excelencia académica, valores y compromiso social en Cumaná desde 1984.
            </p>
          </div>
        </div>
      </header>

      <main className="quienes-contenedor">
        {/* ───── SECCIÓN 1: ¿QUIÉNES SOMOS? / CONOCE EL LICEO ───── */}
        <section className="seccion-intro-quienes" id="quienes-somos">
          <div className="intro-texto-col" id="conoce-el-complejo">
            <p>
              El <strong>Complejo Educativo "Antonio Lemus Pérez"</strong> tuvo sus orígenes en septiembre de 1984 
              bajo la iniciativa de la <strong>E.B. “Creación Bolivariana”</strong>. Es un plantel público de educación media 
              orientado hacia la formación integral de adolescentes y jóvenes, a través de una pedagogía humanista, científica y 
              social encuadrada dentro de los valores de la identidad patria y abierta a la cultura universal.
            </p>
            <p>
              Formamos bachilleres íntegros, críticos y comprometidos con el desarrollo socioproductivo de Sucre y de la nación. 
              Nuestra casa de estudios acompaña a cada estudiante en el descubrimiento de sus aptitudes, fomentando virtudes 
              ciudadanas, el respeto irrestricto, la convivencia pacífica y el trabajo colaborativo para afrontar con éxito 
              los retos del porvenir.
            </p>
            <a href="#historia" className="intro-enlace-historia">
              Explorar cronología e historia institucional completa
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="intro-imagen-col">
            <img
              src={fotoFachada}
              alt="Instalaciones del Complejo Educativo Antonio Lemus Pérez"
              loading="lazy"
            />
          </div>
        </section>

        {/* ───── SECCIÓN 2: GRID DESTACADO AZUL MARINO 2x2 (Captura 1) ───── */}
        <section className="seccion-grid-destacado-losarcos">
          <div className="grid-destacado-2x2">
            {/* 1. Imagen redondeada 28px */}
            <div className="grid-item-redondeado grid-item-imagen">
              <img
                src={fotoAula}
                alt="Estudiantes en el aula de clases del liceo"
                loading="lazy"
              />
            </div>

            {/* 2. Tarjeta azul marino con enlaces y flechas al estilo Los Arcos */}
            <div className="grid-item-redondeado grid-item-azul">
              <h3 className="grid-item-azul-titulo">Compromiso con la Formación Integral</h3>
              <div className="grid-lista-enlaces-flecha">
                <a href="#estudios" className="enlace-flecha-item">
                  <span>Educación Media General en Ciencias</span>
                  <ChevronRight size={20} className="enlace-flecha-icono" />
                </a>
                <Link to="/proyectos/ciberseguridad" className="enlace-flecha-item">
                  <span>Laboratorio Escolar y Ciberseguridad</span>
                  <ChevronRight size={20} className="enlace-flecha-icono" />
                </Link>
                <Link to="/admision/requisitos" className="enlace-flecha-item">
                  <span>Proceso de Admisión e Inscripción</span>
                  <ChevronRight size={20} className="enlace-flecha-icono" />
                </Link>
              </div>
            </div>

            {/* 3. Tarjeta azul oscuro con emblema y lema institucional */}
            <div className="grid-item-redondeado grid-item-emblema">
              <div className="emblema-icono-contenedor">
                <GraduationCap size={44} />
              </div>
              <p className="emblema-lema-texto">
                "Ciencia, Trabajo y Convivencia para el Futuro de la Patria"
              </p>
              <span className="emblema-sublema">
                Complejo Educativo Antonio Lemus Pérez · Fundado en 1984
              </span>
            </div>

            {/* 4. Imagen redondeada 28px */}
            <div className="grid-item-redondeado grid-item-imagen">
              <img
                src={fotoDeportes}
                alt="Actividades deportivas y recreativas en el complejo escolar"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ───── SECCIÓN 3: MISIÓN & VISIÓN (Capturas 2 y 3) ───── */}
        <div id="mision-vision">
          {/* VISIÓN */}
          <section className="seccion-editorial-split" id="vision">
            <div className="editorial-texto-col">
              <span className="editorial-numero-orden">Horizonte Institucional</span>
              <h2 className="editorial-titulo">Visión</h2>
              <p className="editorial-parrafo">
                El Complejo Educativo "Antonio Lemus Pérez" pretende fomentar un proceso colectivo e integrador, 
                formador de nuevos republicanos y republicanas, socializando y generando relaciones sólidas entre la escuela, 
                la familia y la comunidad. Respaldamos la interculturalidad, la práctica del trabajo liberador y el pensamiento 
                crítico, donde el aprendizaje esté en permanente construcción para desarrollar conocimientos, virtudes y 
                habilidades solidarias, democráticas y protagónicas con profunda conciencia ambiental y sentido de soberanía.
              </p>
            </div>

            <div className="editorial-imagen-col">
              <img
                src={fotoVision}
                alt="Estudiantes del Complejo Educativo Antonio Lemus Pérez"
                loading="lazy"
              />
            </div>
          </section>

          {/* MISIÓN */}
          <section className="seccion-editorial-split" id="mision">
            <div className="editorial-texto-col">
              <span className="editorial-numero-orden">Razón de Ser</span>
              <h2 className="editorial-titulo">Misión</h2>
              <p className="editorial-parrafo">
                Promover, incentivar e implementar en el Complejo Educativo "Antonio Lemus Pérez", en concordancia con los 
                lineamientos del Ministerio del Poder Popular para la Educación, un mayor nivel de desarrollo socio-ético-cultural 
                mediante la formación integral de estudiantes capaces de enfrentar la vida, de construir su propio destino, 
                responsables con su núcleo familiar, solidarios con sus comunidades y comprometidos con la salvaguarda 
                de los valores sociales y democráticos de la nación.
              </p>
            </div>

            <div className="editorial-imagen-col">
              <img
                src={fotoMision}
                alt="Comunidad educativa, docentes y estudiantes"
                loading="lazy"
              />
            </div>
          </section>
        </div>

        {/* ───── SECCIÓN 4: 6 RAZONES DE EXCELENCIA (ESTILO 11 RAZONES LOS ARCOS) ───── */}
        <section className="seccion-razones-excelencia" id="razones">
          <div className="razones-encabezado">
            <h2>Por Qué Elegir Nuestro Complejo Educativo</h2>
            <p>
              Pilares formativos que consolidan al Antonio Lemus Pérez como una de las instituciones educativas de mayor prestigio en Cumaná.
            </p>
          </div>

          <div className="grid-seis-razones">
            <div className="tarjeta-razon-item">
              <div className="razon-icono-caja">
                <GraduationCap size={26} />
              </div>
              <h3>1. Excelencia Académica</h3>
              <p>
                Sólida formación en Ciencias Básicas, Matemáticas, Física y Química, preparando a nuestros bachilleres para su ingreso a la educación universitaria con altas calificaciones.
              </p>
            </div>

            <div className="tarjeta-razon-item">
              <div className="razon-icono-caja">
                <Cpu size={26} />
              </div>
              <h3>2. Innovación y Ciberseguridad</h3>
              <p>
                Laboratorio escolar de informática con módulos activos de ciberseguridad, alfabetización digital y uso responsable de las redes e internet para la juventud.
              </p>
            </div>

            <div className="tarjeta-razon-item">
              <div className="razon-icono-caja">
                <Trophy size={26} />
              </div>
              <h3>3. Deporte y Salud Integral</h3>
              <p>
                Canchas deportivas múltiples y programas de fútbol sala, voleibol y atletismo, promoviendo el trabajo en equipo, la disciplina y el bienestar físico.
              </p>
            </div>

            <div className="tarjeta-razon-item">
              <div className="razon-icono-caja">
                <Shield size={26} />
              </div>
              <h3>4. Convivencia y Valores Éticos</h3>
              <p>
                Cultura de paz y resolución pacífica de conflictos. Formamos ciudadanos tolerantes, respetuosos y solidarios comprometidos con su familia y comunidad.
              </p>
            </div>

            <div className="tarjeta-razon-item">
              <div className="razon-icono-caja">
                <Compass size={26} />
              </div>
              <h3>5. Proyectos Socioproductivos</h3>
              <p>
                Aprendizaje basado en proyectos reales que conectan el aula con el desarrollo socioproductivo, la sustentabilidad ambiental y las necesidades del Estado Sucre.
              </p>
            </div>

            <div className="tarjeta-razon-item">
              <div className="razon-icono-caja">
                <Award size={26} />
              </div>
              <h3>6. Más de 40 Años de Tradición</h3>
              <p>
                Trayectoria ininterrumpida desde 1984 formando generaciones de profesionales, científicos y líderes con sentido de pertenencia y amor a la patria.
              </p>
            </div>
          </div>
        </section>

        {/* ───── SECCIÓN 5: ESTUDIOS Y NIVELES (Estilo Preescolar Los Arcos) ───── */}
        <section className="seccion-estudios-losarcos" id="estudios">
          <div className="estudios-losarcos-encabezado">
            <h2>Estudios y Niveles Educativos</h2>
            <p>
              Educación Media General orientada a formar bachilleres en Ciencias con competencias técnicas, científicas y valores ciudadanos.
            </p>
          </div>

          <div className="grid-cuatro-tarjetas-altas">
            <div className="tarjeta-alta-foto">
              <img src={fotoAula} alt="1er Año - Ciclo Básico" loading="lazy" />
              <div className="tarjeta-alta-overlay">
                <h4>1er Año</h4>
                <p>Adaptación a la educación media, matemática fundamental y valores patrios.</p>
              </div>
            </div>

            <div className="tarjeta-alta-foto">
              <img src={fotoEtica} alt="2do y 3er Año - Ciencias Naturales" loading="lazy" />
              <div className="tarjeta-alta-overlay">
                <h4>2do y 3er Año</h4>
                <p>Consolidación del ciclo básico, ciencias naturales y tecnología escolar.</p>
              </div>
            </div>

            <div className="tarjeta-alta-foto">
              <img src={fotoVision} alt="4to Año - Ciencias Experimentales" loading="lazy" />
              <div className="tarjeta-alta-overlay">
                <h4>4to Año Ciencias</h4>
                <p>Física, Química, Biología y módulos prácticos de ciberseguridad.</p>
              </div>
            </div>

            <div className="tarjeta-alta-foto">
              <img src={fotoDeportes} alt="5to Año - Promoción de Bachilleres" loading="lazy" />
              <div className="tarjeta-alta-overlay">
                <h4>5to Año Ciencias</h4>
                <p>Proyectos socioproductivos, defensa digital y preparación para la universidad.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── SECCIÓN 6: HISTORIA INSTITUCIONAL EXPANDIDA ───── */}
        <section className="seccion-historia-expandida" id="historia">
          <div className="historia-expandida-encabezado">
            <span className="editorial-numero-orden">Nuestra Trayectoria</span>
            <h2>Historia y Memoria del Complejo</h2>
            <p>
              Más de cuatro décadas dedicadas a la formación de la juventud cumanesa. Una historia de perseverancia, vocación docente y crecimiento comunitario.
            </p>
          </div>

          <div className="cronologia-historia-losarcos">
            {/* CAPÍTULO 1: 1984 */}
            <article className="capitulo-historia-card">
              <div className="capitulo-texto">
                <span className="capitulo-badge-anio">Septiembre de 1984</span>
                <h3>Los Orígenes: E.B. "Creación Bolivariana"</h3>
                <p>
                  El Complejo Educativo tuvo sus inicios en septiembre de 1984 bajo el plan experimental de la <strong>E.B. “Creación Bolivariana”</strong>. 
                  Durante sus primeros cinco años funcionó provisionalmente en la planta física de la hoy U.E. “José Silverio González”, en el Barrio Bolívar de Cumaná, 
                  Parroquia Altagracia.
                </p>
                <div className="capitulo-destacado-caja">
                  <strong>Estructura Fundacional:</strong> 22 secciones de 7mo grado con una matrícula de <strong>716 alumnos</strong>, 
                  implementando la innovadora estrategia pedagógica UGA (Unidad Generadora de Aprendizaje) Nº 3.205 con áreas de Lengua, Educación Estética, 
                  Formación para el Trabajo, Pensamiento Social e Identidad Nacional, Salud, Educación Física, Ciencias Naturales y Matemáticas.
                </div>
                <p>
                  En paralelo, coexistía el <strong>Ciclo Básico Común</strong> con 189 alumnos distribuidos en 6 secciones en el turno de la tarde. 
                  Sus primeros directores fueron la <strong>Prof. Belén Campos de Santos (Directora)</strong> y el{' '}
                  <strong>Licdo. Juan Navarro Carvajal (Subdirector)</strong>, acompañados por un histórico cuerpo docente pionero integrado por 
                  Oneida Abreu, Sully Decena, Rosa Elena Sánchez, Daycis Salazar, Magda Rincones, Iraima Aguilera, Julián Vallejo, Augusto Marval, 
                  José Caratt y Juan Márquez.
                </p>
              </div>

              <div className="capitulo-imagen">
                <img
                  src={fotoOrigenA}
                  alt="Fundación histórica del plantel en 1984"
                  loading="lazy"
                />
              </div>
            </article>

            {/* CAPÍTULO 2: 1989 */}
            <article className="capitulo-historia-card invertido">
              <div className="capitulo-imagen">
                <img
                  src={fotoOrigenB}
                  alt="Estudiantes pioneros y bautizo institucional"
                  loading="lazy"
                />
              </div>

              <div className="capitulo-texto">
                <span className="capitulo-badge-anio">Año 1989</span>
                <h3>El Bautizo: Nace "Antonio Lemus Pérez"</h3>
                <p>
                  Al consolidarse su trayectoria pedagógica, el Ministerio de Educación decretó el epónimo oficial de la institución en honor 
                  al ilustre educador, insigne matemático y pensador sucrense <strong>Prof. Antonio Lemus Pérez (1913-1980)</strong>, quien dedicó su 
                  vida entera a la docencia pública, sembrando virtudes republicanas, rigor analítico y amor por la patria en la juventud oriental.
                </p>
                <div className="capitulo-destacado-caja">
                  <strong>El Legado del Epónimo:</strong> El Prof. Lemus Pérez representó la cúspide de la vocación pedagógica cumanesa. 
                  Su lema de integridad y disciplina científica se convirtió en el faro rector de la misión formativa de nuestro liceo.
                </div>
                <p>
                  Este nombramiento impulsó la identidad institucional del plantel y la creación de su estandarte y escudo con los símbolos 
                  del libro, el átomo de la ciencia y las ramas del laurel que premian el esfuerzo escolar.
                </p>
              </div>
            </article>

            {/* CAPÍTULO 3: DÉCADA DE LOS 90 */}
            <article className="capitulo-historia-card">
              <div className="capitulo-texto">
                <span className="capitulo-badge-anio">Década de 1990</span>
                <h3>La Sede Definitiva: Av. Las Industrias</h3>
                <p>
                  Gracias al esfuerzo mancomunado de la comunidad educativa, padres, representantes y autoridades regionales, se edificó y entregó 
                  la sede definitiva del liceo en la <strong>Avenida Las Industrias, sector Súper-Bloque</strong> de la Parroquia Altagracia.
                </p>
                <p>
                  La nueva planta física dotó a la institución de pabellones con amplias aulas ventiladas, canchas múltiples deportivas, 
                  laboratorios de Física, Química y Biología, y oficinas directivas para brindar una educación media técnica y científica 
                  de primer orden a las populosas barriadas de Cumaná.
                </p>
              </div>

              <div className="capitulo-imagen">
                <img
                  src={fotoVision}
                  alt="Consolidación de las instalaciones del liceo"
                  loading="lazy"
                />
              </div>
            </article>

            {/* CAPÍTULO 4: PRESENTE */}
            <article className="capitulo-historia-card invertido">
              <div className="capitulo-imagen">
                <img
                  src={fotoFachada}
                  alt="Sede actual del Complejo Educativo Antonio Lemus Pérez"
                  loading="lazy"
                />
              </div>

              <div className="capitulo-texto">
                <span className="capitulo-badge-anio">Presente y Futuro</span>
                <h3>El Complejo Educativo de Vanguardia</h3>
                <p>
                  Hoy en día, el Complejo Educativo "Antonio Lemus Pérez" atiende a una matrícula activa de más de <strong>900 estudiantes</strong>{' '}
                  distribuidos desde 1er hasta 5to año de Educación Media General en Ciencias, dirigidos por un cuerpo de más de{' '}
                  <strong>64 docentes especialistas</strong>.
                </p>
                <p>
                  La institución se mantiene como un referente de la educación pública en Sucre, incorporando programas pioneros en tecnologías 
                  digitales, ciberseguridad escolar, brigadas ambientales y semilleros científicos, preservando con orgullo su lema inmortal: 
                  <strong> «Trabajo, Ciencia y Patria»</strong>.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ───── SECCIÓN 7: VIDA ESTUDIANTIL & CLUBES (Captura ARCUP / Los Arcos) ───── */}
        <section className="seccion-vida-estudiantil" id="vida-estudiantil">
          <div className="vida-encabezado">
            <span className="editorial-numero-orden">Desarrollo Integral</span>
            <h2>Vida Estudiantil y Clubes</h2>
            <p>
              Espacios extracurriculares que enriquecen la convivencia escolar, el talento deportivo y la vocación científica.
            </p>
          </div>

          <div className="grid-tres-clubes">
            <div className="tarjeta-club-foto">
              <img src={fotoDeportes} alt="Club Deportivo" loading="lazy" />
              <div className="tarjeta-club-overlay">
                <h3>Club Deportivo Escolar</h3>
                <p>Torneos internos de fútbol sala, voleibol y atletismo que fomentan la sana competencia y el trabajo en equipo.</p>
              </div>
            </div>

            <div className="tarjeta-club-foto">
              <img src={fotoFormacion} alt="Semillero Científico" loading="lazy" />
              <div className="tarjeta-club-overlay">
                <h3>Semillero Científico y Robótica</h3>
                <p>Talleres prácticos de física, química y programación en el laboratorio de informática del complejo.</p>
              </div>
            </div>

            <div className="tarjeta-club-foto">
              <img src={fotoEtica} alt="Brigada de Convivencia" loading="lazy" />
              <div className="tarjeta-club-overlay">
                <h3>Brigada de Convivencia y Ecología</h3>
                <p>Liderazgo estudiantil orientado al cuidado del medio ambiente, la reforestación escolar y el compañerismo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── SECCIÓN 8: INSTALACIONES EN MOSAICO (Captura 1 mensaje 3) ───── */}
        <section className="seccion-galeria-instalaciones" id="instalaciones">
          <div className="instalaciones-encabezado">
            <span className="editorial-numero-orden">Infraestructura Escolar</span>
            <h2>Instalaciones del Plantel</h2>
            <p>Espacios equipados para el desarrollo académico, cultural, deportivo y científico.</p>
          </div>

          <div className="grid-galeria-instalaciones">
            <div className="item-galeria-losarcos">
              <img src={fotoFachada} alt="Pabellones y Aulas" loading="lazy" />
              <div className="item-galeria-overlay">
                <span className="item-galeria-titulo">Pabellones y Aulas</span>
              </div>
            </div>

            <div className="item-galeria-losarcos">
              <img src={fotoAula} alt="Laboratorio de Computación" loading="lazy" />
              <div className="item-galeria-overlay">
                <span className="item-galeria-titulo">Laboratorio Escolar</span>
              </div>
            </div>

            <div className="item-galeria-losarcos">
              <img src={fotoDeportes} alt="Canchas Deportivas" loading="lazy" />
              <div className="item-galeria-overlay">
                <span className="item-galeria-titulo">Canchas Deportivas</span>
              </div>
            </div>

            <div className="item-galeria-losarcos">
              <img src={fotoHero} alt="Patio Central y Áreas Verdes" loading="lazy" />
              <div className="item-galeria-overlay">
                <span className="item-galeria-titulo">Patio y Áreas Verdes</span>
              </div>
            </div>
          </div>
        </section>

        {/* ───── SECCIÓN 9: MANUAL DE CONVIVENCIA & NORMAS ───── */}
        <section className="seccion-normas-bloque" id="manual-convivencia">
          <div className="normas-encabezado" id="normas">
            <span className="editorial-numero-orden">Reglamento Escolar</span>
            <h2>Manual de Convivencia</h2>
            <p>
              Principios rectores para fomentar la disciplina, el respeto mutuo y el bienestar integral de la comunidad educativa.
            </p>
          </div>

          <div className="grid-normas-tarjetas">
            <div className="tarjeta-norma-item">
              <h3>Horarios de Clases</h3>
              <p>
                <strong>Turno Mañana:</strong> 7:00 am a 12:20 pm.<br />
                <strong>Turno Tarde:</strong> 12:40 pm a 5:50 pm.<br />
                Puntualidad obligatoria al toque del timbre para el inicio de las actividades académicas.
              </p>
            </div>

            <div className="tarjeta-norma-item">
              <h3> Uniforme Reglamentario</h3>
              <p>
                Pantalón azul marino de vestir, correa negra y calzado escolar negro. 
                Camisa celeste (1er a 3er año) y camisa beige/marrón (4to y 5to año), con su respectivo distintivo institucional.
              </p>
            </div>

            <div className="tarjeta-norma-item">
              <h3>Deberes y Convivencia</h3>
              <p>
                Cuidado de las instalaciones, respeto irrestricto hacia el personal docente y directivo, 
                y prohibición absoluta de conductas discriminatorias o ciberacoso dentro o fuera de la institución.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuienesSomos;
