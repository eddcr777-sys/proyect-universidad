import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowDown,
  Check,
  BookOpen,
  FileText,
  Layers,
  GraduationCap,
  Users,
  ShieldCheck,
  Target,
  Sparkles,
  Lock,
  Cpu,
} from 'lucide-react';
import HeaderProyecto from '../../../components/comunes/HeaderProyecto/HeaderProyecto';
import './PrincipalProyecto.css';

// Imágenes institucionales para el diseño editorial de la portada
import imgHeroCiber from '../../../assets/photo_4_2026-10-21_23-11-48.jpg';
import imgLemu from '../../../assets/secure.jpg';
import imgLem from '../../../assets/OIP.jpeg';
import imgLe from '../../../assets/ciberseguridad-sostenible.jpg';

/**
 * Página Principal de Portada del Proyecto de Ciberseguridad.
 * Diseñada en estilo editorial asimétrico (inspirado en layouts de alto impacto visual),
 * respetando la paleta de colores institucional del proyecto (--color-inst-azul, --color-inst-blanco, --color-inst-fondo, etc.).
 */
const PrincipalProyecto: React.FC = () => {
  const enlacesSubNav = [
    { label: 'Inicio Proyecto', ruta: '/proyectos/ciberseguridad' },
    { label: 'Catálogo por Grado', ruta: '/proyectos/ciberseguridad/modulos' },
    { label: 'Justificación', ruta: '/proyectos/ciberseguridad/justificacion' },
    { label: 'Índices y Temario', ruta: '/proyectos/ciberseguridad/indices' },
    { label: 'Guía Docentes', ruta: '/proyectos/ciberseguridad/guias/docentes' },
    { label: 'Guía Padres', ruta: '/proyectos/ciberseguridad/guias/padres' },
    { label: 'Desarrolladores', ruta: '/proyectos/ciberseguridad/nosotros/sobre-devs' },
  ];

  return (
    <div className="principal-ciberseguridad-contenedor">
      {/* Header y Hero Principal del Proyecto */}
      <HeaderProyecto

        titulo="CIBERSEGURIDAD Y"
        tituloResaltado="CONCIENCIA DIGITAL"
        descripcion={
          <>
            Plataforma pedagógica desarrollada para capacitar a la comunidad educativa del{' '}
            <strong>Complejo Educativo "Antonio Lemus Pérez"</strong> en la prevención de riesgos y la autonomía tecnológica.
          </>
        }
        imagenFondo={imgHeroCiber}
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Explorar Catálogo por Grado',
            ruta: '/proyectos/ciberseguridad/modulos',
          },
          {
            label: 'Ver Justificación',
            ruta: '/proyectos/ciberseguridad/justificacion',
            icono: <ArrowRight size={20} />,
          },
          {
            label: 'Descubrir el Proyecto',
            href: '#porque-nosotros',
            icono: <ArrowDown size={18} />,
          },
        ]}
      />

      {/* ─────────────────────────────────────────────
         SECCIÓN 2: ¿POR QUÉ ESTE PROYECTO? (LAYOUT ASIMÉTRICO DERECHA/IZQUIERDA)
      ───────────────────────────────────────────── */}
      <section id="porque-nosotros" className="seccion-porque-nosotros">
        <div className="contenedor-porque-grid">
          {/* Columna Izquierda: Texto, Viñetas y CTA */}
          <div className="columna-porque-texto animacion-entrada">
            <h2 className="titulo-porque-monumental">
              ¿POR QUÉ <br />
              <span className="texto-destacado-subrayado">ESTE PROYECTO?</span>
            </h2>

            <div className="linea-decorativa-porque" />

            <ul className="lista-viñetas-porque">
              <li>
                <Check size={20} className="icono-check-porque" />
                <span>Protección efectiva contra phishing, fraudes y robo de identidades en redes.</span>
              </li>
              <li>
                <Check size={20} className="icono-check-porque" />
                <span>Formación en higiene digital, gestión de claves seguras y privacidad.</span>
              </li>
              <li>
                <Check size={20} className="icono-check-porque" />
                <span>Contenidos pedagógicos adaptados nivel a nivel desde 1ro hasta 5to año.</span>
              </li>
              <li>
                <Check size={20} className="icono-check-porque" />
                <span>Orientaciones didácticas integrales para docentes, estudiantes y representantes.</span>
              </li>
            </ul>

            <div className="cta-porque-bloque">
              <Link to="/proyectos/ciberseguridad/modulos" className="btn-porque-aprende">
                APRENDE MÁS <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Imagen Institucional */}
          <div className="columna-porque-imagen">
            <img src={imgLemu} alt="Estudiantes en el Liceo" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         SECCIÓN 3: PLATAFORMA FORMATIVA (LAYOUT CAPAS SOLAPADAS)
      ───────────────────────────────────────────── */}
      <section className="seccion-capas-solapadas">
        <div className="contenedor-capas-solapadas">
          {/* Columna Izquierda: Composición de Imágenes Solapadas */}
          <div className="columna-imagenes-solapadas">
            <div className="imagen-solapada-principal">
              <img src={imgLem} alt="Trabajo en equipo sociotecnológico" loading="lazy" />
            </div>
            <div className="imagen-solapada-secundaria">
              <img src={imgLe} alt="Formación en ciberseguridad" loading="lazy" />
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Blanca Sólida */}
          <div className="tarjeta-solapada-contenido animacion-entrada-retardo">
            <h2 className="titulo-tarjeta-solapada">
              Solución Pedagógica e Identidad Digital
            </h2>

            <p className="descripcion-tarjeta-solapada">
              Desarrollamos una herramienta accesible para capacitar a la juventud sucrense ante los
              desafíos del ciberespacio, promoviendo el pensamiento crítico y la soberanía tecnológica.
            </p>

            <ul className="lista-puntos-solapados">
              <li>
                <Check size={18} className="icono-check-solapado" />
                <span>Lectura fácil y evaluaciones formativas interactivas.</span>
              </li>
              <li>
                <Check size={18} className="icono-check-solapado" />
                <span>Auditoría básica de seguridad y ética en redes sociales.</span>
              </li>
              <li>
                <Check size={18} className="icono-check-solapado" />
                <span>Material descargable y guías metodológicas institucionales.</span>
              </li>
            </ul>

            <Link to="/proyectos/ciberseguridad/justificacion" className="btn-solapado-contacto">
              VER JUSTIFICACIÓN <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         SECCIÓN 4: EXPERIENCIA ÚNICA Y MEMORABLE (LAYOUT DERECHA MONUMENTAL)
      ───────────────────────────────────────────── */}
      <section className="seccion-experiencia-memorable">
        <div className="contenedor-experiencia-grid">
          {/* Columna Izquierda: Texto Explicativo y CTA */}
          <div className="columna-experiencia-texto">
            <p className="texto-experiencia-parrafo">
              Esta plataforma fusiona la vanguardia tecnológica con estrategias pedagógicas innovadoras,
              transformando el aprendizaje en una experiencia inmersiva y segura. Nuestro objetivo es generar
              un impacto trascendental que empodere a la comunidad educativa frente a los retos del futuro digital.
            </p>
            <Link to="/proyectos/ciberseguridad/indices" className="btn-experiencia-aprende">
              VER ÍNDICES Y TEMARIO <ArrowRight size={18} />
            </Link>
          </div>

          {/* Columna Derecha: Título Gigante con Círculo Distintivo */}
          <div className="columna-experiencia-titulo-destacado">

            <h2 className="titulo-experiencia-monumental">
              Experiencia <br />
              única y <br />
              memorable
            </h2>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         SECCIÓN 5: COMPONENTES DEL PROYECTO (GRID DE 4 TARJETAS SÓLIDAS)
      ───────────────────────────────────────────── */}
      <section className="seccion-componentes-grid">
        <div className="contenedor-componentes-grid">
          <div className="encabezado-componentes">
            <h2>Componentes del Proyecto</h2>
            <p>Accede directamente a los módulos y recursos fundamentales de la plataforma.</p>
          </div>

          <div className="grid-cuatro-tarjetas">
            {/* Tarjeta 1: Estrategia / Catálogo */}
            <Link to="/proyectos/ciberseguridad/modulos" className="tarjeta-componente-box">
              <div className="icono-componente-box">
                <BookOpen size={32} />
              </div>
              <h3>CATÁLOGO POR GRADO</h3>
              <p>Módulos pedagógicos adaptados desde 1ro hasta 5to año escolar.</p>
            </Link>

            {/* Tarjeta 2: Justificación */}
            <Link to="/proyectos/ciberseguridad/justificacion" className="tarjeta-componente-box">
              <div className="icono-componente-box">
                <FileText size={32} />
              </div>
              <h3>JUSTIFICACIÓN</h3>
              <p>Bases académicas, diagnóstico de vulnerabilidades y el impacto transformador del proyecto.</p>
            </Link>

            {/* Tarjeta 3: Índices */}
            <Link to="/proyectos/ciberseguridad/indices" className="tarjeta-componente-box">
              <div className="icono-componente-box">
                <Layers size={32} />
              </div>
              <h3>ÍNDICES Y TEMARIO</h3>
              <p>Desglose completo de unidades, actividades y lecciones temáticas.</p>
            </Link>

            {/* Tarjeta 4: Guías */}
            <Link to="/proyectos/ciberseguridad/guias/docentes" className="tarjeta-componente-box">
              <div className="icono-componente-box">
                <GraduationCap size={32} />
              </div>
              <h3>GUÍAS PEDAGÓGICAS</h3>
              <p>Manuales didácticos para orientar a profesores, padres y alumnos.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         SECCIÓN 6: VÍNCULO INSTITUCIONAL Y CONVOCATORIA DE PROYECTOS
      ───────────────────────────────────────────── */}
      <section className="seccion-vinculo-institucional">
        <div className="contenedor-vinculo-institucional">
          <div className="tarjeta-vinculo-principal">
            <div className="columna-vinculo-info">
              <span className="badge-vinculo-liceo">PROYECTO SOCIOTECNOLÓGICO VINCULADO</span>
              <h2 className="titulo-vinculo-institucional">
                Una Plataforma Educativa Especializada para el C.E. Antonio Lemus Pérez
              </h2>
              <p className="texto-vinculo-explicacion">
                A diferencia del portal institucional general del liceo (enfocado en la vida comunitaria, admisión e historia del plantel),
                este entorno fue concebido con una interfaz técnica y especializada de <strong>ciberseguridad</strong> para ofrecer
                una experiencia interactiva, formativa y adaptada a los retos informáticos cotidianos de los estudiantes.
              </p>
              <p className="texto-vinculo-explicacion">
                Este proyecto fue desarrollado bajo la filosofía del <strong>Software Libre</strong> por estudiantes del PNFI de la
                Universidad Politécnica Territorial del Oeste de Sucre (<strong>UPTOS "Clodosbaldo Russián"</strong>), en estrecha
                articulación con los docentes y el equipo directivo del Complejo Educativo.
              </p>
            </div>

            <div className="columna-vinculo-convocatoria">
              <div className="caja-convocatoria-proyectos">
                <h3 className="titulo-caja-convocatoria">
                  ¿Deseas proponer o desarrollar un proyecto educativo para el liceo?
                </h3>
                <p className="texto-caja-convocatoria">
                  Si eres estudiante universitario, docente, investigador o institución aliada y deseas aportar nuevos módulos,
                  herramientas pedagógicas o plataformas sociotecnológicas para el <strong>C.E. Antonio Lemus Pérez</strong>,
                  puedes contactar directamente con el equipo de desarrollo y las autoridades del plantel para coordinar nuevas iniciativas de aprendizaje.
                </p>

                <div className="acciones-vinculo-botones">
                  <Link
                    to="/proyectos/ciberseguridad/nosotros/sobre-devs"
                    className="btn-vinculo-contacto"
                  >
                    <span>Contactar a Desarrolladores</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    to="/el-liceo"
                    className="btn-vinculo-portal-liceo"
                  >
                    <span>Ir al Portal del Liceo</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalProyecto;
