import React from 'react';
import { Calendar, Building, BookOpen, GraduationCap, Award, Monitor, ArrowLeft, Camera, ArrowUp, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import fotoFachada from '../../assets/lb.jpeg';
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

      {/* --- RESEÑA HISTÓRICA / DISEÑO MINIMALISTA --- */}
      <section className="seccion-historia-contenedores" id="reseña-historica">
        <div className="encabezado-historia">
          <h2 className='titulo-seccion-editorial'>Nuestra Historia</h2>
          <p className='subtitulo-seccion'>El legado del Complejo Educativo "Antonio Lemus Pérez"</p>
          <p className='letra-pequena'>Desde su fundación en 1984, nuestra institución ha sido un pilar fundamental en la educación pública de Cumaná, formando ciudadanos integrales con excelencia académica y compromiso social.</p>
        </div>


        <div className="centro-bandera">
          <BanderaVenezuela></BanderaVenezuela>
        </div>

        {/* Evento 1 - 1984 (Diseño Cruzado 2x2 con Información Completa) */}
        <div className="seccion-mision-vision seccion-cruzada-padding-40">
          <div className="contenedor-cruzado">
            {/* Fila 1: Imagen 1 + Texto Completo 1 */}
            <div className="imagen-cruzada">
              <img
                src="https://picsum.photos/seed/1984a/800/600"
                alt="Fundación 1984"
                loading="lazy"
              />
            </div>
            <div className="texto-cruzado">
              <span className="badge-apple">Septiembre 1984</span>
              <h2 className="titulo-apple">Los Orígenes: Creación Bolivariana</h2>

              <p className="subtitulo-apple">
                El Complejo Educativo “ANTONIO LEMUS PÉREZ”, ubicado hoy día en Av. Las Industrias, sector Súper-Bloque, Parroquia Altagracia del Municipio Sucre, tuvo sus orígenes en dos planes educativos, conocidos como <strong>E.B. “CREACIÓN BOLIVARIANA”</strong>, fundada en septiembre de 1984, funcionando durante unos cinco (5) años en la planta física de la hoy U.E. “José Silverio González”, ubicada en el Barrio Bolívar, cercano al Barrio Bolivariano, de la Parroquia Altagracia de Cumaná, Estado Sucre.
              </p>

              <div className="caja-info-destacada caja-info-destacada-clara">
                <h4 className="titulo-caja-clara">Estructura Inicial</h4>
                <p className="letra-pequena texto-claro-suave">
                  El plantel contaba para ese entonces con <strong>22 secciones de séptimo grado</strong>, identificados por literación, con una <strong>matrícula de 716 alumnos</strong>, haciendo uso de la estrategia pedagógica conocida como UGA (Unidad Generadora de Aprendizaje) Nº 3.205.
                </p>
                <p className="pequeno texto-claro-mas-suave">
                  Áreas: Lengua, Educación Estética, Formación para el Trabajo, Pensamiento, Acción Social e Identidad Nacional, Salud, Educación Física y Recreación, Ciencias Naturales y Matemática. Cada sección contaba con 6 docentes. Evaluación cualitativa (dominó/no dominó).
                </p>
              </div>

              <p className="subtitulo-apple subtitulo-apple-reducido">
                Sus primeros Directivos asignados por decreto del Ministerio de Educación fueron: La profesora <strong>Belén Campos de Santos (Directora)</strong> y el <strong>Licdo. Juan Navarro Carvajal (Subdirector)</strong>. En el plano administrativo se contó con Albertina Quintero de Malavé (Dirección) y Belkys Rodríguez (Contratada).
              </p>

              <div className="profesores-lista profesores-lista-margen-10">
                <strong className="texto-fuerte-claro">Docentes pioneros:</strong>
                <div className="etiquetas-grid">
                  <span>Oneida Abreu</span><span>Sully Decena</span><span>Rosa Elena Sánchez</span>
                  <span>Daycis Salazar</span><span>Magda Rincones</span><span>Iraima Aguilera</span>
                  <span>Julián Vallejo</span><span>Rosa Figueroa</span><span>María Elena Márquez</span>
                  <span>Augusto Marval</span><span>José Caratt</span><span>Juan Márquez</span>
                  <span>Julieta Rodríguez</span><span>Josefina Marín</span><span>José Emilio Ruiz</span>
                  <span>Mercedes Ramos</span>
                </div>
              </div>
            </div>

            {/* Fila 2: Texto Completo 2 + Imagen 2 */}
            <div className="texto-cruzado">
              <span className="badge-apple">Ciclo Básica Común</span>
              <h2 className="titulo-apple">Modalidad Cuantitativa y Horarios</h2>

              <p className="subtitulo-apple">
                En el segundo plano que coexistía, se llamó <strong>Ciclo Básica Común “CREACIÓN BOLIVARIANA”</strong>, con 189 alumnos, 6 secciones identificadas por literación, y 10 docentes por sección; el sistema era cuantitativo (01 al 20, eximían con 18, 19 y 20). Horario de 1:00 p.m. a 6:00 p.m.
              </p>

              <div className="profesores-lista profesores-lista-margen-top-20">
                <strong className="texto-fuerte-claro">Docentes de esta modalidad:</strong>
                <div className="etiquetas-grid">
                  <span>Juana Guevara</span><span>Luis Noriega</span><span>Nelly Noriega</span>
                  <span>Josefina Marín</span><span>Zurilka Rijo</span><span>Rusela Tineo</span>
                  <span>Angel Ciliberto</span><span>Alcides López</span><span>Buenaventura Pérez</span>
                  <span>Juan Márquez</span><span>Cecilia Salazar</span><span>Elia Parra</span>
                  <span>Jesús Marcano</span><span>Raúl Martínez</span><span>Otto Castillejos</span>
                  <span>Raúl Guarache</span><span>Daicy Salazar</span><span>Ledys Gil</span><span>Mercedes Ramos</span>
                </div>
              </div>
            </div>
            <div className="imagen-cruzada">
              <img
                src="https://picsum.photos/seed/1984b/800/600"
                alt="Primeros grupos de estudio 1984"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Evento 2 - 1988 (Diseño Cruzado 2x2 con Información Completa) */}
        <div className="seccion-mision-vision seccion-cruzada-padding-20-40">
          <div className="contenedor-cruzado">
            {/* Fila 1: Imagen 1 + Texto Completo 1 */}
            <div className="imagen-cruzada">
              <img
                src="https://picsum.photos/seed/1988a/800/600"
                alt="Epónimo Antonio Lemus Pérez 1988"
                loading="lazy"
              />
            </div>
            <div className="texto-cruzado">
              <span className="badge-apple">Enero 1988</span>
              <h2 className="titulo-apple">El Bautizo: Nace "Antonio Lemus Pérez"</h2>

              <p className="subtitulo-apple">
                La E.B.”CREACIÓN BOLIVARIANA” fue bautizada con el visto bueno de las autoridades regionales y nacionales con el nombre de <strong>“ANTONIO LEMUS PÉREZ”</strong>, en honor al insigne educador sucrense, fallecido en 1980.
              </p>

              <p className="subtitulo-apple subtitulo-apple-margen-top-12">
                Es a partir de su refundación en 1988, que funcionaba en su propio local, comenzando con: 18 aulas, 06 talleres, 04 laboratorios, 09 oficinas administrativas, 01 biblioteca, 01 cantina, 01 consultorio médico-odontológico, 02 canchas deportivas, 01 estacionamiento, patio interior y exterior, áreas de jardines y un local de bomba de agua.
              </p>
            </div>

            {/* Fila 2: Texto Completo 2 + Imagen 2 */}
            <div className="texto-cruzado">
              <span className="badge-apple">Año Escolar 1987-1988</span>
              <h2 className="titulo-apple">Plan de Estudio Nº 32.011 y Personal</h2>

              <div className="caja-info-destacada caja-info-destacada-clara caja-info-destacada-margen-15">
                <h4 className="titulo-caja-clara">Plan de Estudio Nº 32.011</h4>
                <p className="letra-pequena texto-claro-suave">
                  Regía para Séptimo grado, repartido en 30 secciones identificadas por numerales, representando una <strong>matrícula de 966 alumnos</strong>.
                </p>
              </div>

              <p className="subtitulo-apple subtitulo-apple-reducido">
                La directiva estuvo integrada por: Licdo. Juan Navarro Carvajal (Director) y el Prof. Nelson Tirado (Subdirector).
              </p>

              <div className="profesores-lista profesores-lista-margen-top-15">
                <strong className="texto-fuerte-claro">Cuerpo de docentes (1988):</strong>
                <p className="texto-denso">
                  Oswaldo Rivero, Hilaria Hernández, Arelys Zapata, Freddy Marcano, Lourdes Rodríguez, Cecilia Salazar, Haidée Mistage, Sully Decena, Iraima Aguilera, Augusto Marval, José Pino, Carlos Salazar, Rosa Sánchez, Carmen Franco, Mercedes Ramos, Josefina Marín, Oneida Abreu, Carmen de Yabur, Jhonny Galindo, Jesús Carmen Marcano, Yamil Marval, Juana Guevara, Briceida Maza, Ledys Gil, Esthela Castañeda, Hilda León, Dunia Patiño, José Tineo, Raúl López, Alcides López, Rosa Figueroa, Antonia de Hernández, Mirian de Castillejo, Juan Limongi, Buenaventura de Figueroa, Cruz Marcano (+), César Romero, María Ortíz, Maritza Marín, José Pérez, Angel Millán, Arturo de la Rosa, Griselda Rivero, Luisa Guilarte, Emiliano Ruiz, José Jesús Rojas, Pedro Rojas, Bernardo Márquez (+), Edelmira Maza, Carmen Silva, Juan Márquez, Luis Rojas, Teresa Lárez, María Elena Márquez y Nelly Rafacheri.
                </p>
              </div>
            </div>
            <div className="imagen-cruzada">
              <img
                src="https://picsum.photos/seed/1988b/800/600"
                alt="Inauguración Sede Propia 1988"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Evento 3 - 1988-1997 (Diseño Cruzado) */}
        <div className="seccion-mision-vision" style={{ padding: '20px 0 40px 0' }}>
          <div className="contenedor-cruzado">
            {/* Imagen a la Izquierda */}
            <div className="imagen-cruzada">
              <img
                src="https://picsum.photos/seed/crecimiento/800/600"
                alt="Crecimiento Institucional 1988-1997"
                loading="lazy"
              />
            </div>
            {/* Texto + Estadísticas a la Derecha */}
            <div className="texto-cruzado">
              <span className="badge-apple">1988 - 1997</span>
              <h2 className="titulo-apple">Crecimiento Institucional y Matrícula</h2>

              <p className="subtitulo-apple">
                Durante la siguiente década, la institución mantuvo un volumen masivo de estudiantes bajo el plan de estudio 32011.
              </p>

              <div className="grid-estadisticas" style={{ margin: '15px 0' }}>
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

              <p className="subtitulo-apple" style={{ fontSize: '0.95rem' }}>
                Para 1994-95 la matrícula bajó a 1.075 estudiantes, en 1995-96 a 1.069, y en 1996-97 llegó a 931 estudiantes manteniendo las mismas secciones.
              </p>
            </div>
          </div>
        </div>

        {/* Evento 4 - 1997-2006 (Diseño Cruzado) */}
        <div className="seccion-mision-vision" style={{ padding: '20px 0 40px 0' }}>
          <div className="contenedor-cruzado">
            {/* Texto + Organigrama a la Izquierda */}
            <div className="texto-cruzado">
              <span className="badge-apple">1997 - 2006</span>
              <h2 className="titulo-apple">Cambios Directivos y Organización</h2>

              <p className="subtitulo-apple">
                A partir de 1997, se encarga de la Dirección la <strong>Prof. Irma Subero de Arreaza</strong> y Subdirectora la Licda. Irene Lizarraga de Racca. Para 2000-2001 acompaña la Prof. Verónica Mata (Subdirector Administrativa) y el Licdo. Arturo de la Rosa Silva (Subdirector Académico). En 2003 el Licdo. Arturo de la Rosa asume la Dirección, acompañado por Prof. Sully Decena de Gómez y Licda. Zurilka Rijo. Para 2005-2006, asume la Licda. Ruth Castañeda.
              </p>

              <div className="caja-info-destacada caja-info-destacada-clara caja-info-destacada-margen-15">
                <h4 className="titulo-caja-clara">Organización Institucional (2005-2006)</h4>
                <ul className="lista-organigrama">
                  <li><strong>06</strong> Jefes de Seccionales</li>
                  <li><strong>08</strong> Coordinadores de Áreas</li>
                  <li><strong>01</strong> Jefe de Evaluación y <strong>01</strong> Jefe de Control de Estudios (2 adjuntos)</li>
                  <li><strong>22</strong> Secretarias (titulares, contratadas y suplentes)</li>
                  <li><strong>01</strong> Odontólogo (con 1 auxiliar)</li>
                  <li><strong>01</strong> Coord. Centro de Ciencias, Tecn. y Ambiente</li>
                  <li><strong>01</strong> Coord. de Biblioteca (4 auxiliares)</li>
                  <li><strong>01</strong> Coord. de Difusión Cultural</li>
                  <li><strong>01</strong> Coord. de Disciplina (4 auxiliares)</li>
                  <li><strong>33</strong> Obreros y <strong>09</strong> Vigilantes</li>
                </ul>
              </div>
            </div>

            {/* Imagen a la Derecha */}
            <div className="imagen-cruzada">
              <img
                src="https://picsum.photos/seed/directivos/800/600"
                alt="Cambios Directivos y Personal"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Evento 5 - 2006-2007 (Diseño Cruzado) */}
        <div className="seccion-mision-vision" style={{ padding: '20px 0 40px 0' }}>
          <div className="contenedor-cruzado">
            {/* Imagen a la Izquierda */}
            <div className="imagen-cruzada">
              <img
                src="https://picsum.photos/seed/liceo/800/600"
                alt="Complejo Educativo 2006"
                loading="lazy"
              />
            </div>

            {/* Texto a la Derecha */}
            <div className="texto-cruzado">
              <span className="badge-apple">2006 - 2007</span>
              <h2 className="titulo-apple">El Nuevo Paradigma: Complejo Educativo</h2>

              <p className="subtitulo-apple">
                El año escolar se inició bajo la égida de un nuevo paradigma educativo: <strong>Complejo Educativo</strong>, basado en la metodología de PROYECTOS. Los contenidos curriculares se repartieron en áreas del conocimiento: Lengua, Cultura e Idiomas; Recreación, Deportes, Educ. Física y Ambiente; Ciencias Naturales y Matemáticas; Ciencias Sociales y Estética; Educación para el Trabajo.
              </p>

              <p className="subtitulo-apple" style={{ marginTop: '12px' }}>
                Organización: 10 Secciones (1er año), 08 (2do año), 08 (3er año), 06 (4to año). Total: 895 estudiantes dirigidos por 82 docentes (57 graduados, 25 no graduados). Se crea una seccional para 4to año atendida por Licdo. Erasmo Suárez y Licda. Hilaria Hernández.
              </p>
            </div>
          </div>
        </div>

        {/* Evento 6 - 2007-Actualidad (Diseño Cruzado) */}
        <div className="seccion-mision-vision" style={{ padding: '20px 0 60px 0' }}>
          <div className="contenedor-cruzado">
            {/* Texto a la Izquierda */}
            <div className="texto-cruzado">
              <span className="badge-apple">2007 - Actualidad</span>
              <h2 className="titulo-apple">Modernización y Actualidad</h2>

              <p className="subtitulo-apple">
                A partir de noviembre de 2007 asume la Dirección la <strong>Licda. Zurilka del Carmen Rijo</strong>. Matrícula de 967 estudiantes y 83 docentes. Se crea la seccional para 5to año dirigida por Erasmo Suárez.
              </p>

              <div className="caja-info-destacada caja-info-destacada-clara caja-info-destacada-margen-15">
                <h4 className="titulo-caja-clara">Inauguración del CBIT (2009-2010)</h4>
                <p className="letra-pequena texto-claro-suave">
                  El 28 de mayo de 2010 se inauguró la Sala de Informática (CBIT) que lleva por nombre "Licda. Zurilka Rijo", promoviendo la formación integral mediante las T.I.C.
                </p>
              </div>

              <p className="subtitulo-apple" style={{ fontSize: '0.95rem' }}>
                <strong>2010-2014:</strong> Asumen funciones directivas la Licda. Nelis Reyes, Licda. Ana Fiore, Prof. Frederick Marcano, y Prof. Salvador José Joaquin López. Las matrículas oscilaron alrededor de los 750 estudiantes anuales.
              </p>

              <p className="subtitulo-apple" style={{ fontSize: '0.95rem', marginTop: '10px' }}>
                <strong>Desde 2015 hasta la actualidad:</strong> Asume la Dirección la <strong>Licda. Eudys Hidalgo</strong> y la Sub-Dirección Académica la <strong>Licda. Yuleima Patiño</strong>. La organización escolar quedó establecida con una matrícula total de 907 estudiantes dirigidos por 64 docentes, estructurados desde 1er año (7 secciones) hasta 5to año (6 secciones).
              </p>
            </div>

            {/* Imagen a la Derecha */}
            <div className="imagen-cruzada">
              <img
                src="https://picsum.photos/seed/tecnologia/800/600"
                alt="Innovación Tecnológica e Instalaciones Actuales"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Historia;