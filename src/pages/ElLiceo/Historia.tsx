import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import fotoFachada from '../../assets/lb.jpeg';
import fotoOrigenA from '../../assets/Gemini_Generated_Image_2p4dkt2p4dkt2p4d.jpeg';
import fotoBautizoA from '../../assets/Gemini_Generated_Image_qrp9miqrp9miqrp9.jpeg';
import fotoOrigenB from '../../assets/Gemini_Generated_Image_ng5qr7ng5qr7ng5q.jpeg';
import './ElLiceo.css';
import '../Nosotros/SobreU.E.css';
import '../../components/comunes/HeroInstitucional/HeroInstitucional.css';
import '../HomePage/HomePage.css';
import { BanderaVenezuela } from '../../components/comunes/Extras/Bandera/BanderaVenezuela';

export const Historia: React.FC = () => {
  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Historia Institucional"
        subtitulo="Complejo Educativo 'Antonio Lemus Pérez'"
        descripcion="Más de 40 años de trayectoria formando jóvenes integrales en Cumaná, Estado Sucre."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <section className="seccion-historia-contenedores" id="reseña-historica">
        <div className="encabezado-historia">
          <h2 className="titulo-seccion-editoriall">Nuestra Historia</h2>
          <p className="subtitulo-seccion">
            El legado del Complejo Educativo "Antonio Lemus Pérez"
          </p>
          <p className="letra-pequena texto-claro-suave">
            Desde su fundación en 1984, nuestra institución ha sido un pilar fundamental
            en la educación pública de Cumaná, formando ciudadanos integrales con
            excelencia académica y compromiso social.
          </p>
        </div>

        <div className="centro-bandera">
          <BanderaVenezuela />
        </div>

        <article className="articulo-historia">
          {/* ───── INTROD UCCIÓN ───── */}
          <p className="historia-lead">
            Más de cuatro décadas han transcurrido desde que un pequeño grupo de docentes
            y 716 estudiantes de séptimo grado dieran vida, en septiembre de 1984, a la
            que hoy conocemos como el Complejo Educativo “Antonio Lemus Pérez”. Esta es la
            historia de cómo una iniciativa bolivariana se convirtió en uno de los
            pilares educativos de Cumaná.
          </p>

          {/* ───── CAP 01 · 1984 · ORÍGENES ───── */}
          <section className="historia-capitulo">
            <header className="historia-capitulo-header">
              <span className="historia-capitulo-numero">01</span>
              <div className="historia-capitulo-titulos">
                <span className="badge-apple">Septiembre de 1984</span>
                <h2 className="titulo-apple">Los Orígenes: Creación Bolivariana</h2>
              </div>
            </header>

            <figure className="historia-figura">
              <img src={fotoOrigenA} alt="Fundación 1984" loading="lazy" />
              <figcaption>
                Los inicios de la institución en la planta física de la U.E. “José
                Silverio González”, Barrio Bolívar.
              </figcaption>
            </figure>

            <p>
              El Complejo Educativo “ANTONIO LEMUS PÉREZ”, ubicado hoy día en Av. Las
              Industrias, sector Súper-Bloque, Parroquia Altagracia del Municipio Sucre,
              tuvo sus orígenes en dos planes educativos conocidos como{' '}
              <strong>E.B. “CREACIÓN BOLIVARIANA”</strong>, fundada en septiembre de 1984.
              Durante sus primeros cinco años funcionó en la planta física de la hoy
              U.E. “José Silverio González”, ubicada en el Barrio Bolívar, cercano al
              Barrio Bolivariano, de la Parroquia Altagracia de Cumaná, Estado Sucre.
            </p>

            <div className="caja-info-destacada caja-info-destacada-clara">
              <h3 style={{ color: 'var(--color-inst-blanco)' }}>Estructura inicial</h3>
              <p style={{ color: 'var(--color-inst-blanco)', fontSize: '0.9rem' }}>
                El plantel contaba con <strong>22 secciones de séptimo grado</strong>,
                identificadas por literación, y una <strong>matrícula de 716 alumnos</strong>,
                haciendo uso de la estrategia pedagógica conocida como UGA (Unidad
                Generadora de Aprendizaje) Nº 3.205.
              </p>
              <p style={{ color: 'var(--color-inst-blanco)', fontSize: '0.9rem' }}>
                Áreas: Lengua, Educación Estética, Formación para el Trabajo, Pensamiento,
                Acción Social e Identidad Nacional, Salud, Educación Física y Recreación,
                Ciencias Naturales y Matemática. Cada sección contaba con 6 docentes.
                Evaluación cualitativa (dominó / no dominó).
              </p>
            </div>

            <p>
              Sus primeros directivos, asignados por decreto del Ministerio de Educación,
              fueron la profesora <strong>Belén Campos de Santos (Directora)</strong> y el{' '}
              <strong>Licdo. Juan Navarro Carvajal (Subdirector)</strong>. En el plano
              administrativo se contó con Albertina Quintero de Malavé (Dirección) y
              Belkys Rodríguez (Contratada).
            </p>

            <div className="profesores-lista">
              <strong className="textoDocente">Docentes pioneros</strong>
              <div className="etiquetas-grid">
                <span>Oneida Abreu</span>
                <span>Sully Decena</span>
                <span>Rosa Elena Sánchez</span>
                <span>Daycis Salazar</span>
                <span>Magda Rincones</span>
                <span>Iraima Aguilera</span>
                <span>Julián Vallejo</span>
                <span>Rosa Figueroa</span>
                <span>María Elena Márquez</span>
                <span>Augusto Marval</span>
                <span>José Caratt</span>
                <span>Juan Márquez</span>
                <span>Julieta Rodríguez</span>
                <span>Josefina Marín</span>
                <span>José Emilio Ruiz</span>
                <span>Mercedes Ramos</span>
              </div>
            </div>

            <h3 className="historia-subtitulo">El Ciclo Básica Común</h3>

            <p>
              En paralelo al plan anterior coexistía el{' '}
              <strong>Ciclo Básica Común “CREACIÓN BOLIVARIANA”</strong>, con 189 alumnos
              repartidos en 6 secciones identificadas por literación y 10 docentes por
              sección. Su sistema de evaluación era cuantitativo (del 01 al 20, con
              eximición en 18, 19 y 20) y operaba en el horario de 1:00 p.m. a 6:00 p.m.
            </p>

            <figure className="historia-figura">
              <img
                src={fotoOrigenB}
                alt="Primeros grupos de estudio 1984"
                loading="lazy"
              />
              <figcaption>
                Primeros grupos de estudiantes del Ciclo Básica Común.
              </figcaption>
            </figure>

            <div className="profesores-lista">
              <strong className="texto-fuerte-claro">
                Docentes de esta modalidad
              </strong>
              <div className="etiquetas-grid">
                <span>Juana Guevara</span>
                <span>Luis Noriega</span>
                <span>Nelly Noriega</span>
                <span>Josefina Marín</span>
                <span>Zurilka Rijo</span>
                <span>Rusela Tineo</span>
                <span>Angel Ciliberto</span>
                <span>Alcides López</span>
                <span>Buenaventura Pérez</span>
                <span>Juan Márquez</span>
                <span>Cecilia Salazar</span>
                <span>Elia Parra</span>
                <span>Jesús Marcano</span>
                <span>Raúl Martínez</span>
                <span>Otto Castillejos</span>
                <span>Raúl Guarache</span>
                <span>Daicy Salazar</span>
                <span>Ledys Gil</span>
                <span>Mercedes Ramos</span>
              </div>
            </div>
          </section>

          {/* ───── CAP 02 · 1988 · BAUTIZO ───── */}
          <section className="historia-capitulo">
            <header className="historia-capitulo-header">
              <span className="historia-capitulo-numero">02</span>
              <div className="historia-capitulo-titulos">
                <span className="badge-apple">Enero de 1988</span>
                <h2 className="titulo-apple">
                  El Bautizo: Nace “Antonio Lemus Pérez”
                </h2>
              </div>
            </header>

            <p>
              La E.B. “CREACIÓN BOLIVARIANA” fue bautizada con el visto bueno de las
              autoridades regionales y nacionales con el nombre de{' '}
              <strong>“ANTONIO LEMUS PÉREZ”</strong>, en honor al insigne educador
              sucrense, fallecido en 1980.
            </p>

            <figure className="historia-figura">
              <img
                src={fotoBautizoA}
                alt="Epónimo Antonio Lemus Pérez 1988"
                loading="lazy"
              />
              <figcaption>
                Homenaje permanente al educador sucrense Antonio Lemus Pérez.
              </figcaption>
            </figure>

            <p>
              Es a partir de su refundación en 1988 que la institución funcionó en su
              propio local, comenzando con 18 aulas, 6 talleres, 4 laboratorios, 9
              oficinas administrativas, 1 biblioteca, 1 cantina, 1 consultorio
              médico-odontológico, 2 canchas deportivas, 1 estacionamiento, patio
              interior y exterior, áreas de jardines y un local de bomba de agua.
            </p>
          </section>

          {/* ───── CAP 03 · 1987-1988 · PLAN DE ESTUDIO ───── */}
          <section className="historia-capitulo">
            <header className="historia-capitulo-header">
              <span className="historia-capitulo-numero">03</span>
              <div className="historia-capitulo-titulos">
                <span className="badge-apple">Año escolar 1987 - 1988</span>
                <h2 className="titulo-apple">Plan de Estudio Nº 32.011 y Personal</h2>
              </div>
            </header>

            <p>
              El <strong>Plan de Estudio Nº 32.011</strong> regía para Séptimo grado,
              repartido en 30 secciones identificadas por numerales, lo que representaba
              una <strong>matrícula de 966 alumnos</strong>. La directiva estuvo integrada
              por el Licdo. Juan Navarro Carvajal (Director) y el Prof. Nelson Tirado
              (Subdirector).
            </p>

            <div className="profesores-lista">
              <strong className="textoDocente">
                Cuerpo de docentes (1988)
              </strong>
              <p className="texto-denso">
                Oswaldo Rivero, Hilaria Hernández, Arelys Zapata, Freddy Marcano, Lourdes
                Rodríguez, Cecilia Salazar, Haidée Mistage, Sully Decena, Iraima Aguilera,
                Augusto Marval, José Pino, Carlos Salazar, Rosa Sánchez, Carmen Franco,
                Mercedes Ramos, Josefina Marín, Oneida Abreu, Carmen de Yabur, Jhonny
                Galindo, Jesús Carmen Marcano, Yamil Marval, Juana Guevara, Briceida Maza,
                Ledys Gil, Esthela Castañeda, Hilda León, Dunia Patiño, José Tineo, Raúl
                López, Alcides López, Rosa Figueroa, Antonia de Hernández, Mirian de
                Castillejo, Juan Limongi, Buenaventura de Figueroa, Cruz Marcano (+),
                César Romero, María Ortíz, Maritza Marín, José Pérez, Angel Millán, Arturo
                de la Rosa, Griselda Rivero, Luisa Guilarte, Emiliano Ruiz, José Jesús
                Rojas, Pedro Rojas, Bernardo Márquez (+), Edelmira Maza, Carmen Silva,
                Juan Márquez, Luis Rojas, Teresa Lárez, María Elena Márquez y Nelly
                Rafacheri.
              </p>
            </div>
          </section>

          {/* ───── CAP 04 · 1988-1997 · CRECIMIENTO ───── */}
          <section className="historia-capitulo">
            <header className="historia-capitulo-header">
              <span className="historia-capitulo-numero">04</span>
              <div className="historia-capitulo-titulos">
                <span className="badge-apple">1988 - 1997</span>
                <h2 className="titulo-apple">Crecimiento Institucional y Matrícula</h2>
              </div>
            </header>

            <p>
              Durante la siguiente década, la institución mantuvo un volumen masivo de
              estudiantes bajo el plan de estudio 32.011. En el año escolar 1993-94 se
              alcanzó la matrícula pico con <strong>1.220 estudiantes</strong>.
            </p>

            <div className="grid-estadisticas">
              <div className="tarjeta-stat-historia">
                <h5>1988-89</h5>
                <span className="stat-numero-h">1.038</span>
                <p>Estudiantes</p>
                <small>17 secs (7mo), 10 secs (8vo), 3 secs (9no)</small>
              </div>
              <div className="tarjeta-stat-historia">
                <h5>1989-90</h5>
                <span className="stat-numero-h">1.168</span>
                <p>Estudiantes</p>
                <small>11 secs (7mo), 12 secs (8vo), 10 secs (9no)</small>
              </div>
              <div className="tarjeta-stat-historia">
                <h5>1990-91</h5>
                <span className="stat-numero-h">1.163</span>
                <p>Estudiantes</p>
                <small>14 secs (7mo), 10 secs (8vo), 10 secs (9no)</small>
              </div>
              <div className="tarjeta-stat-historia">
                <h5>1991-92</h5>
                <span className="stat-numero-h">1.194</span>
                <p>Estudiantes</p>
                <small>14 secs (7mo), 10 secs (8vo), 10 secs (9no)</small>
              </div>
              <div className="tarjeta-stat-historia">
                <h5>1992-93</h5>
                <span className="stat-numero-h">1.185</span>
                <p>Estudiantes</p>
                <small>15 secs (7mo), 10 secs (8vo), 9 secs (9no)</small>
              </div>
              <div className="tarjeta-stat-historia destacado">
                <h5>1993-94</h5>
                <span className="stat-numero-h">1.220</span>
                <p>Matrícula Pico</p>
                <small>15 secs (7mo), 10 secs (8vo), 9 secs (9no)</small>
              </div>
            </div>

            <p>
              Para 1994-95 la matrícula bajó a 1.075 estudiantes, en 1995-96 a 1.069, y en
              1996-97 llegó a 931 estudiantes, manteniendo las mismas secciones.
            </p>
          </section>

          {/* ───── CAP 05 · 1997-2006 · DIRECTIVOS ───── */}
          <section className="historia-capitulo">
            <header className="historia-capitulo-header">
              <span className="historia-capitulo-numero">05</span>
              <div className="historia-capitulo-titulos">
                <span className="badge-apple">1997 - 2006</span>
                <h2 className="titulo-apple">Cambios Directivos y Organización</h2>
              </div>
            </header>

            <p>
              A partir de 1997 se encarga de la Dirección la{' '}
              <strong>Prof. Irma Subero de Arreaza</strong> y como Subdirectora la Licda.
              Irene Lizarraga de Racca. Para 2000-2001 acompañan la Prof. Verónica Mata
              (Subdirector Administrativa) y el Licdo. Arturo de la Rosa Silva
              (Subdirector Académico). En 2003 el Licdo. Arturo de la Rosa asume la
              Dirección, acompañado por la Prof. Sully Decena de Gómez y la Licda. Zurilka
              Rijo. Para 2005-2006 asume la Licda. Ruth Castañeda.
            </p>

            <div className="caja-info-destacada caja-info-destacada-clara">
              <h4 className="titulo-caja-clara">
                Organización institucional (2005 - 2006)
              </h4>
              <ul className="lista-organigrama">
                <li>
                  <strong>06</strong> Jefes de Seccionales
                </li>
                <li>
                  <strong>08</strong> Coordinadores de Áreas
                </li>
                <li>
                  <strong>01</strong> Jefe de Evaluación y <strong>01</strong> Jefe de
                  Control de Estudios (2 adjuntos)
                </li>
                <li>
                  <strong>22</strong> Secretarias (titulares, contratadas y suplentes)
                </li>
                <li>
                  <strong>01</strong> Odontólogo (con 1 auxiliar)
                </li>
                <li>
                  <strong>01</strong> Coord. Centro de Ciencias, Tecn. y Ambiente
                </li>
                <li>
                  <strong>01</strong> Coord. de Biblioteca (4 auxiliares)
                </li>
                <li>
                  <strong>01</strong> Coord. de Difusión Cultural
                </li>
                <li>
                  <strong>01</strong> Coord. de Disciplina (4 auxiliares)
                </li>
                <li>
                  <strong>33</strong> Obreros y <strong>09</strong> Vigilantes
                </li>
              </ul>
            </div>
          </section>

          {/* ───── CAP 06 · 2006-2007 · PARADIGMA ───── */}
          <section className="historia-capitulo">
            <header className="historia-capitulo-header">
              <span className="historia-capitulo-numero">06</span>
              <div className="historia-capitulo-titulos">
                <span className="badge-apple">2006 - 2007</span>
                <h2 className="titulo-apple">
                  El Nuevo Paradigma: Complejo Educativo
                </h2>
              </div>
            </header>

            <p>
              El año escolar se inició bajo la égida de un nuevo paradigma educativo:{' '}
              <strong>Complejo Educativo</strong>, basado en la metodología de PROYECTOS.
              Los contenidos curriculares se repartieron en áreas del conocimiento: Lengua,
              Cultura e Idiomas; Recreación, Deportes, Educación Física y Ambiente;
              Ciencias Naturales y Matemáticas; Ciencias Sociales y Estética; Educación
              para el Trabajo.
            </p>

            <p>
              La organización quedó conformada por 10 secciones de 1er año, 8 de 2do año,
              8 de 3er año y 6 de 4to año, sumando un total de{' '}
              <strong>895 estudiantes</strong> dirigidos por 82 docentes (57 graduados y
              25 no graduados). Se crea una seccional para 4to año atendida por el Licdo.
              Erasmo Suárez y la Licda. Hilaria Hernández.
            </p>
          </section>

          {/* ───── CAP 07 · 2007-HOY · ACTUALIDAD ───── */}
          <section className="historia-capitulo">
            <header className="historia-capitulo-header">
              <span className="historia-capitulo-numero">07</span>
              <div className="historia-capitulo-titulos">
                <span className="badge-apple">2007 - Actualidad</span>
                <h2 className="titulo-apple">Modernización y Actualidad</h2>
              </div>
            </header>

            <figure className="historia-figura">
              <img
                src={fotoFachada}
                alt="Instalaciones actuales del Complejo Educativo"
                loading="lazy"
              />
              <figcaption>
                Instalaciones actuales del Complejo Educativo “Antonio Lemus Pérez”.
              </figcaption>
            </figure>

            <p>
              A partir de noviembre de 2007 asume la Dirección la{' '}
              <strong>Licda. Zurilka del Carmen Rijo</strong>, con una matrícula de 967
              estudiantes y 83 docentes. Se crea la seccional para 5to año, dirigida por
              Erasmo Suárez.
            </p>

            <div className="caja-info-destacada caja-info-destacada-clara">
              <h4 className="titulo-caja-clara">
                Inauguración del CBIT (2009 - 2010)
              </h4>
              <p className="letra-pequena texto-claro-suave">
                El 28 de mayo de 2010 se inauguró la Sala de Informática (CBIT) que lleva
                por nombre “Licda. Zurilka Rijo”, promoviendo la formación integral
                mediante las T.I.C.
              </p>
            </div>

            <p>
              Entre 2010 y 2014 asumieron funciones directivas la Licda. Nelis Reyes, la
              Licda. Ana Fiore, el Prof. Frederick Marcano y el Prof. Salvador José
              Joaquin López, con matrículas que oscilaron alrededor de los 750 estudiantes
              anuales.
            </p>

            <p>
              <strong>Desde 2015 hasta la actualidad</strong>, asume la Dirección la{' '}
              <strong>Licda. Eudys Hidalgo</strong> y la Sub-Dirección Académica la{' '}
              <strong>Licda. Yuleima Patiño</strong>. La organización escolar quedó
              establecida con una matrícula total de <strong>907 estudiantes</strong>{' '}
              dirigidos por 64 docentes, estructurados desde 1er año (7 secciones) hasta
              5to año (6 secciones).
            </p>
          </section>
        </article>
      </section>
    </div>
  );
};

export default Historia;