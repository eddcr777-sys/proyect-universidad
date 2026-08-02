import React from 'react';
import { 
  Users, BookOpen, Camera, Award, Calendar, 
  GraduationCap, Clock, Monitor, Building, ArrowRight, 
  ArrowDown, ArrowUp 
} from 'lucide-react';
import { MemberCard } from '../../components/comunes/tarjetas/members';
import type { MemberInfo } from '../../components/comunes/tarjetas/members'; // Ajusta la ruta si es necesario
import './SobreU.E.css';

const TEAM_INST_MEMBER: MemberInfo[] = [
  {
    name: 'Belén Campos de Santos',
    role: 'Directora Fundadora (1984)',
    description: 'Primera directora asignada por decreto del Ministerio de Educación.',
    imageUrl: ''
  },
  {
    name: 'Juan Navarro Carvajal',
    role: 'Subdirector / Director (1988)',
    description: 'Pilar fundamental en los inicios y en la transición al nombre actual.',
    imageUrl: ''
  },
  {
    name: 'Eudys Hidalgo',
    role: 'Directora Actual',
    description: 'Encargada de la gestión educativa, académica y el bienestar estudiantil en la actualidad.',
    imageUrl: ''
  },
  {
    name: 'Antonio Lemus Pérez',
    role: 'Epónimo de la Institución',
    description: 'Insigne educador sucrense cuyo nombre honra a la institución desde 1988.',
    imageUrl: ''
  }
];

export const SobreUE: React.FC = () => {
  return (
    <main className="contenedor-nosotros">
      
      {/* --- HERO --- */}
      <section className="seccion-hero" id="inicio">
        <div className="insignia-badget">
          <Users size={18} />
          <span>Proyecto Académico & Social</span>
        </div>
        <h1 className="titulo-hero">
          Fortaleciendo la <span className="resaltado-rojo">Seguridad Digital</span>
        </h1>
        <p className="descripcion-hero">
          Somos estudiantes de la <strong>UPTOS "Clodosbaldo Russián"</strong>. Este proyecto representa nuestro aporte y compromiso con la comunidad del Liceo Bolivariano Antonio Lemus Pérez para garantizar un entorno digital accesible, preventivo y seguro.
        </p>
        <div className="colaboracion-caja">
          <span className="texto-sub">En colaboración institucional con</span>
          <p className="texto-institucion">LICEO BOLIVARIANO ANTONIO LEMUS PÉREZ — CUMANÁ</p>
        </div>

        {/* Botón moderno para bajar a Homenaje */}
        <div className="scroll-indicador-wrapper">
          <a href="#homenaje" className="scroll-indicador">
            <span>Conoce a nuestros educadores</span>
            <ArrowDown size={20} className="icono-animado" />
          </a>
        </div>
      </section>

      {/* --- HOMENAJE A PROFESORES --- */}
      <section className="seccion-homenaje" id="homenaje">
        <div className="encabezado-seccion">
          <Award size={32} className="icono-seccion" />
          <h2>Homenaje a Nuestros Educadores</h2>
          <p>Un reconocimiento a quienes han guiado los pasos de nuestra institución a lo largo de los años.</p>
        </div>
        <div className="contenedor-tarjetas-profesores">
          {TEAM_INST_MEMBER.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>

        {/* Botón moderno para bajar a Historia */}
        <div className="scroll-indicador-wrapper">
          <a href="#reseña-historica" className="scroll-indicador">
            <span>Descubre nuestra historia</span>
            <ArrowDown size={20} className="icono-animado" />
          </a>
        </div>
      </section>

      {/* --- RESEÑA HISTÓRICA (TIMELINE) --- */}
      <section className="seccion-historia" id="reseña-historica">
        <div className="encabezado-historia">
          <BookOpen size={40} className="icono-historia-principal" />
          <h2>Nuestra Historia</h2>
          <p>El legado del Liceo Bolivariano "Antonio Lemus Pérez"</p>
        </div>

        <div className="linea-tiempo">
          
          {/* ÉPOCA: 1984 */}
          <div className="evento-timeline">
            <div className="marcador-timeline"><Calendar size={20} /></div>
            <div className="contenido-evento">
              <span className="fecha-etiqueta">Septiembre 1984</span>
              <h3>Los Orígenes: Creación Bolivariana</h3>
              <p>
                El Liceo Bolivariano “ANTONIO LEMUS PÉREZ”, ubicado hoy día en Av. Las Industrias, sector Súper-Bloque, Parroquia Altagracia del Municipio Sucre, tuvo sus orígenes en dos planes educativos, conocidos como <strong>E.B. “CREACIÓN BOLIVARIANA”</strong>, fundada en septiembre de 1984, funcionando durante unos cinco (5) años en la planta física de la hoy U.E. “José Silverio González”, ubicada en el Barrio Bolívar, cercano al Barrio Bolivariano, de la Parroquia Altagracia de Cumaná, Estado Sucre.
              </p>
              
              <div className="caja-info-destacada">
                <Building className="icono-caja" />
                <div>
                  <h4>Estructura Inicial</h4>
                  <p>El plantel contaba para ese entonces con <strong>22 secciones de séptimo grado</strong>, identificados por literación, con una <strong>matrícula de 716 alumnos</strong>, haciendo uso de la estrategia pedagógica conocida como UGA (Unidad Generadora de Aprendizaje) Nº 3.205.</p>
                  <p className="pequeno">Áreas: Lengua, Educación Estética, Formación para el Trabajo, Pensamiento, Acción Social e Identidad Nacional, Salud, Educación Física y Recreación, Ciencias Naturales y Matemática. Cada sección contaba con 6 docentes. Evaluación cualitativa (dominó/no dominó).</p>
                </div>
              </div>

              <p>Sus primeros Directivos asignados por decreto del Ministerio de Educación fueron: La profesora <strong>Belén Campos de Santos (Directora)</strong> y el <strong>Licdo. Juan Navarro Carvajal (Subdirector)</strong>. En el plano administrativo se contó con Albertina Quintero de Malavé (Dirección) y Belkys Rodríguez (Contratada).</p>
              
              <div className="profesores-lista">
                <strong>Docentes pioneros:</strong>
                <div className="etiquetas-grid">
                  <span>Oneida Abreu</span><span>Sully Decena</span><span>Rosa Elena Sánchez</span>
                  <span>Daycis Salazar</span><span>Magda Rincones</span><span>Iraima Aguilera</span>
                  <span>Julián Vallejo</span><span>Rosa Figueroa</span><span>María Elena Márquez</span>
                  <span>Augusto Marval</span><span>José Caratt</span><span>Juan Márquez</span>
                  <span>Julieta Rodríguez</span><span>Josefina Marín</span><span>José Emilio Ruiz</span>
                  <span>Mercedes Ramos</span>
                </div>
              </div>

              <p>En el segundo plano que coexistía, se llamó <strong>Ciclo Básica Común “CREACIÓN BOLIVARIANA”</strong>, con 189 alumnos, 6 secciones identificadas por literación, y 10 docentes por sección; el sistema era cuantitativo (01 al 20, eximían con 18, 19 y 20). Horario de 1:00 p.m. a 6:00 p.m.</p>

              <div className="profesores-lista">
                <strong>Docentes de esta modalidad:</strong>
                <div className="etiquetas-grid">
                  <span>Juana Guevara</span><span>Luis Noriega</span><span>Nelly Noriega</span>
                  <span>Josefina Marín</span><span>Zurilka Rijo</span><span>Rusela Tineo</span>
                  <span>Angel Ciliberto</span><span>Alcides López</span><span>Buenaventura Pérez</span>
                  <span>Juan Márquez</span><span>Cecilia Salazar</span><span>Elia Parra</span>
                  <span>Jesús Marcano</span><span>Raúl Martínez</span><span>Otto Castillejos</span>
                  <span>Raúl Guarache</span><span>Daicy Salazar</span><span>Ledys Gil</span><span>Mercedes Ramos</span>
                </div>
              </div>

              <div className="espacio-foto interactivo">
                <Camera size={36} className="icono-foto" />
                <span>[ ESPACIO INTERACTIVO: FOTO DE LA SEDE ANTIGUA O FUNDADORES (1984) ]</span>
              </div>
            </div>
          </div>

          {/* ÉPOCA: 1988 */}
          <div className="evento-timeline">
            <div className="marcador-timeline"><GraduationCap size={20} /></div>
            <div className="contenido-evento">
              <span className="fecha-etiqueta">Enero 1988</span>
              <h3>El Bautizo: Nace "Antonio Lemus Pérez"</h3>
              <p>
                La E.B.”CREACIÓN BOLIVARIANA” fue bautizada con el visto bueno de las autoridades regionales y nacionales con el nombre de <strong>“ANTONIO LEMUS PÉREZ”</strong>, en honor al insigne educador sucrense, fallecido en 1980.
              </p>
              <p>
                Es a partir de su refundación en 1988, que funcionaba en su propio local, comenzando con: 18 aulas, 06 talleres, 04 laboratorios, 09 oficinas administrativas, 01 biblioteca, 01 cantina, 01 consultorio médico-odontológico, 02 canchas deportivas, 01 estacionamiento, patio interior y exterior, áreas de jardines y un local de bomba de agua.
              </p>

              <div className="caja-info-destacada">
                <BookOpen className="icono-caja" />
                <div>
                  <h4>Año escolar 1987-88 (Plan de Estudio Nº 32.011)</h4>
                  <p>Regía para Séptimo grado, repartido en 30 secciones identificadas por numerales, representando una <strong>matrícula de 966 alumnos</strong>.</p>
                </div>
              </div>

              <p>La directiva estuvo integrada por: Licdo. Juan Navarro Carvajal (Director) y el Prof. Nelson Tirado (Subdirector).</p>

              <div className="profesores-lista">
                <strong>Cuerpo de docentes (1988):</strong>
                <p className="texto-denso">Oswaldo Rivero, Hilaria Hernández, Arelys Zapata, Freddy Marcano, Lourdes Rodríguez, Cecilia Salazar, Haidée Mistage, Sully Decena, Iraima Aguilera, Augusto Marval, José Pino, Carlos Salazar, Rosa Sánchez, Carmen Franco, Mercedes Ramos, Josefina Marín, Oneida Abreu, Carmen de Yabur, Jhonny Galindo, Jesús Carmen Marcano, Yamil Marval, Juana Guevara, Briceida Maza, Ledys Gil, Esthela Castañeda, Hilda León, Dunia Patiño, José Tineo, Raúl López, Alcides López, Rosa Figueroa, Antonia de Hernández, Mirian de Castillejo, Juan Limongi, Buenaventura de Figueroa, Cruz Marcano (+), César Romero, María Ortíz, Maritza Marín, José Pérez, Angel Millán, Arturo de la Rosa, Griselda Rivero, Luisa Guilarte, Emiliano Ruiz, José Jesús Rojas, Pedro Rojas, Bernardo Márquez (+), Edelmira Maza, Carmen Silva, Juan Márquez, Luis Rojas, Teresa Lárez, María Elena Márquez y Nelly Rafacheri.</p>
              </div>

              <div className="espacio-foto interactivo">
                <Camera size={36} className="icono-foto" />
                <span>[ ESPACIO INTERACTIVO: FOTO DEL EPÓNIMO ANTONIO LEMUS PÉREZ O NUEVA SEDE ]</span>
              </div>
            </div>
          </div>

          {/* ÉPOCA: 1988-1997 Crecimiento */}
          <div className="evento-timeline">
            <div className="marcador-timeline"><Clock size={20} /></div>
            <div className="contenido-evento">
              <span className="fecha-etiqueta">1988 - 1997</span>
              <h3>Crecimiento Institucional y Matrícula</h3>
              <p>Durante la siguiente década, la institución mantuvo un volumen masivo de estudiantes bajo el plan de estudio 32011.</p>
              
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
                  <p>Estudiantes (Matrícula Pico)</p>
                  <small>15 secs (7mo), 10 secs (8vo), 9 secs (9no)</small>
                </div>
              </div>
              <p>
                Para 1994-95 la matrícula bajó a 1.075 estudiantes, en 1995-96 a 1.069, y en 1996-97 llegó a 931 estudiantes manteniendo las mismas secciones.
              </p>
            </div>
          </div>

          {/* ÉPOCA: 1997-2006 */}
          <div className="evento-timeline">
            <div className="marcador-timeline"><Users size={20} /></div>
            <div className="contenido-evento">
              <span className="fecha-etiqueta">1997 - 2006</span>
              <h3>Cambios Directivos y Organización</h3>
              <p>
                A partir de 1997, se encarga de la Dirección la <strong>Prof. Irma Subero de Arreaza</strong> y Subdirectora la Licda. Irene Lizarraga de Racca. Para 2000-2001 acompaña la Prof. Verónica Mata (Subdirectora Administrativa) y el Licdo. Arturo de la Rosa Silva (Subdirector Académico). En 2003 el Licdo. Arturo de la Rosa asume la Dirección, acompañado por Prof. Sully Decena de Gómez y Licda. Zurilka Rijo. Para 2005-2006, asume la Licda. Ruth Castañeda.
              </p>

              <div className="caja-info-destacada">
                <Award className="icono-caja" />
                <div>
                  <h4>Organización Institucional (2005-2006)</h4>
                  <ul className="lista-organigrama">
                    <li><strong>06</strong> Jefes de Seccionales</li>
                    <li><strong>08</strong> Coordinadores de Áreas</li>
                    <li><strong>01</strong> Jefe de Evaluación y <strong>01</strong> Jefe de Control de Estudios (con 02 adjuntos)</li>
                    <li><strong>22</strong> Secretarias (titulares, contratadas y suplentes)</li>
                    <li><strong>01</strong> Odontólogo (con 01 auxiliar)</li>
                    <li><strong>01</strong> Coord. Centro de Ciencias, Tecn. y Ambiente (con 1 auxiliar)</li>
                    <li><strong>01</strong> Coord. de Biblioteca (con 4 auxiliares)</li>
                    <li><strong>01</strong> Coord. de Difusión Cultural (Música y Folklore)</li>
                    <li><strong>01</strong> Coord. de Disciplina (con 4 auxiliares)</li>
                    <li><strong>33</strong> Obreros (21 MED, 12 Gobernación) y <strong>09</strong> Vigilantes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ÉPOCA: 2006-2007 Liceo Bolivariano */}
          <div className="evento-timeline">
            <div className="marcador-timeline"><ArrowRight size={20} /></div>
            <div className="contenido-evento">
              <span className="fecha-etiqueta">2006 - 2007</span>
              <h3>El Nuevo Paradigma: Liceo Bolivariano</h3>
              <p>
                El año escolar se inició bajo la egida de un nuevo paradigma educativo: <strong>LICEO BOLIVARIANO</strong>, basado en la metodología de PROYECTOS. Los contenidos curriculares se repartieron en áreas del conocimiento: Lengua, Cultura e Idiomas; Recreación, Deportes, Educ. Física y Ambiente; Ciencias Naturales y Matemáticas; Ciencias Sociales y Estética; Educación para el Trabajo.
              </p>
              <p>
                Organización: 10 Secciones (1er año), 08 (2do año), 08 (3er año), 06 (4to año). Total: 895 estudiantes dirigidos por 82 docentes (57 graduados, 25 no graduados). Se crea una seccional para 4to año atendida por Licdo. Erasmo Suárez y Licda. Hilaria Hernández.
              </p>
              <div className="espacio-foto interactivo">
                <Camera size={36} className="icono-foto" />
                <span>[ ESPACIO INTERACTIVO: FOTOS DE PROMOCIÓN O ESTUDIANTES ]</span>
              </div>
            </div>
          </div>

          {/* ÉPOCA: 2007-2015+ */}
          <div className="evento-timeline">
            <div className="marcador-timeline"><Monitor size={20} /></div>
            <div className="contenido-evento">
              <span className="fecha-etiqueta">2007 - Actualidad</span>
              <h3>Modernización y Actualidad</h3>
              <p>
                A partir de noviembre de 2007 asume la Dirección la <strong>Licda. Zurilka del Carmen Rijo</strong>. Matrícula de 967 estudiantes y 83 docentes. Se crea la seccional para 5to año dirigida por Erasmo Suárez.
              </p>
              
              <div className="caja-info-destacada">
                <Monitor className="icono-caja" />
                <div>
                  <h4>Inauguración del CBIT (2009-2010)</h4>
                  <p>El 28 de mayo de 2010 se inauguró la Sala de Informática (CBIT) que lleva por nombre "Licda. Zurilka Rijo", promoviendo la formación integral mediante las T.I.C.</p>
                </div>
              </div>

              <p>
                <strong>2010-2014:</strong> Asumen funciones directivas la Licda. Nelis Reyes, Licda. Ana Fiore, Prof. Frederick Marcano, y Prof. Salvador José Joaquin López. Las matrículas oscilaron alrededor de los 750 estudiantes anuales.
              </p>
              <p>
                <strong>Desde 2015 hasta la actualidad:</strong> Asume la Dirección la <strong>Licda. Eudys Hidalgo</strong> y la Sub-Dirección Académica la <strong>Licda. Yuleima Patiño</strong>. La organización escolar quedó establecida con una matrícula total de 907 estudiantes dirigidos por 64 docentes, estructurados desde 1er año (7 secciones) hasta 5to año (6 secciones).
              </p>

              <div className="espacio-foto interactivo final">
                <Camera size={36} className="icono-foto" />
                <span>[ ESPACIO INTERACTIVO: FOTOGRAFÍA ACTUAL DE LA FACHADA O PERSONAL VIGENTE ]</span>
              </div>
            </div>
          </div>

        </div>

        {/* Botón moderno para volver al inicio */}
        <div className="scroll-indicador-wrapper final">
          <a href="#inicio" className="scroll-indicador outline">
            <ArrowUp size={20} className="icono-animado anim-arriba" />
            <span>Volver al inicio</span>
          </a>
        </div>

      </section>
    </main>
  );
};

export default SobreUE;