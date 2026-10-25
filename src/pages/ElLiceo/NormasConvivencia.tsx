import React from 'react';
import { ShieldAlert, Clock, ArrowLeft, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import './ElLiceo.css';
import './NormasConvivencia.css';

export const NormasConvivencia: React.FC = () => {
  const seccionesNormas = [
    {
      categoria: 'Horario y Responsabilidad',
      icono: <Clock size={20} />,
      items: [
        { num: '1', titulo: 'Horario Académico', desc: 'Jornada: 7:00 am – 12:20 pm / 12:40 pm – 5:50 pm.' },
        { num: '2', titulo: 'Responsabilidad a la salida', desc: 'Los representantes deben estar alerta a la hora de salida de sus representados. Es deber de los padres asegurarse de que no se queden por los alrededores debido a la inseguridad y a la presencia de individuos extraños.' },
        { num: '3', titulo: 'Fin de Jornada', desc: 'Posterior a la salida, todo el personal se retira, quedando los estudiantes sin protección. En caso de accidente o riesgo, la institución no se hace responsable; la responsabilidad es estrictamente del representante.' }
      ]
    },
    {
      categoria: 'Uniforme Reglamentario',
      icono: <Shirt size={20} />,
      items: [
        { num: '4', titulo: 'I Nivel (1ero, 2do, 3er Año)', desc: 'Pantalón de gabardina azul marino (no strech ni tubo), camisa/chemisse azul claro con insignia cosida, zapatos y correa negros o marrones (sin hebillas grandes). Medias blancas (no tobilleras).' },
        { num: '5', titulo: 'II Nivel (4to y 5to Año)', desc: 'Pantalón de gabardina azul marino (no strech ni tubo), camisa/chemisse beige con insignia cosida, zapatos y correa negros o marrones. Batas blancas para laboratorios con insignia.' },
        { num: '6', titulo: 'Deportes (1ero, 2do, 3er Año)', desc: 'Mono azul marino, franela azul con insignia o logo, zapatos deportivos negros, blancos o azul marino.' },
        { num: '7', titulo: 'Deportes (4to y 5to Año)', desc: 'Mono azul marino, franela blanca con insignia o logo, zapatos deportivos negros, blancos o azul marino.' }
      ]
    },
    {
      categoria: 'Normas Generales de Convivencia',
      icono: <ShieldAlert size={20} />,
      items: [
        { num: '8', titulo: 'Control de Ingreso', desc: 'Desde el primer día se chequeará que porten el uniforme reglamentario y la imagen personal acorde a los principios de sana convivencia.' },
        { num: '9', titulo: 'Interrupciones', desc: 'Está prohibido interrumpir las actividades de aula. En caso necesario, dirigirse a la coordinación pedagógica.' },
        { num: '10', titulo: 'Objetos No Permitidos', desc: 'No se permite el uso de celulares, iPod, audífonos, ni objetos ajenos a la academia. El docente puede decomisarlos y entregarlos a coordinación, quien lo devolverá al representante. La institución no se responsabiliza por pérdida.' },
        { num: '11', titulo: 'Salud y Reposos', desc: 'No enviar al estudiante si tiene malestar (gripe, dengue, eruptivas, etc). Deben guardar reposo y reincorporarse con constancia médica a control de estudios.' },
        { num: '12', titulo: 'Apariencia Varones', desc: 'No usar: gorras, piercings, zarcillos, cabellos largos o teñidos (corte convencional), mechas, maquillajes ni accesorios ostentosos.' },
        { num: '13', titulo: 'Apariencia Hembras', desc: 'No usar: gorras, piercings, zarcillos ostentosos, mechas, maquillajes. Sin accesorios de colores ajenos al uniforme. Uñas solo naturales.' },
        { num: '14', titulo: 'Bolsos y Morrales', desc: 'No usar morrales o bolsos a menos que sean transparentes.' },
        { num: '15', titulo: 'Valores Patrios y Éticos', desc: 'Honrar los símbolos patrios (cantar el himno, izar la bandera). Respetar la moral, buenas costumbres y usar vocabulario adecuado.' },
        { num: '16', titulo: 'Prohibiciones Severas', desc: 'Abstenerse de fumar, ingerir alcohol o drogas. Prohibido el ingreso con armas de fuego u objetos cortantes (navajas, botellas, etc).' },
        { num: '17', titulo: 'Instalaciones y Mobiliario', desc: 'Usar adecuadamente el mobiliario y colaborar en la limpieza. El estudiante que intencionalmente dañe equipos o instalaciones estará obligado a su reparación o reposición.' },
        { num: '18', titulo: 'Alimentos', desc: 'No ingerir alimentos ni chucherías dentro del aula, talleres, laboratorios y pasillos, salvo la del P.A.E.' },
        { num: '19', titulo: 'Evaluaciones y Permisos', desc: 'En caso de permiso médico, el estudiante debe presentar la prueba pendiente 03 días después de su incorporación.' },
        { num: '20', titulo: 'Roles Estudiantiles', desc: 'Conocer y cumplir funciones como Semanero, Vocero Integrador, Activista y Contralor.' },
        { num: '21', titulo: 'Trámites y Colección', desc: 'Actualizar la inscripción en el periodo correspondiente. Notificar cambios de dirección o teléfonos. Es responsabilidad el uso de la Colección Bicentenario.' },
        { num: '22', titulo: 'Sanciones Disciplinarias', desc: 'Estarán sujetos a sanciones al incurrir en faltas graves reiteradas. Deben respetar este reglamento, los especiales y el ordenamiento jurídico.' }
      ]
    }
  ];

  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Acuerdos de Convivencia"
        subtitulo="Complejo Educativo 'Antonio Lemus Pérez'"
        descripcion="Principios y normativas que rigen la disciplina escolar para garantizar una educación integral y ciudadana."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="normas-main">
        {/* ── Intro ─────────────────────── */}
        <header className="normas-intro">
          <span className="normas-intro-kicker">Reglamento Oficial</span>
          <h2 className="normas-intro-titulo">Objeto y Base Legal</h2>
          <p className="normas-intro-texto">
            Los presentes acuerdos tienen por objeto regular la organización y
            funcionamiento de todas las personas que integran este centro educativo, con
            la finalidad de establecer los principios que regirán la disciplina escolar
            de todos los estudiantes, de modo que estén en condiciones de recibir una
            educación integral de la más alta calidad, que contribuya a su formación como
            ciudadanos conscientes de sus derechos y deberes, libres, críticos,
            responsables y justos, aptos para vivir en una sociedad democrática.
          </p>
          <p className="normas-intro-legal">
            <span className="normas-intro-legal-label">Base legal</span>
            Constitución de la República Bolivariana de Venezuela · Ley Orgánica de
            Protección del Niño, Niña y Adolescente · Ley Orgánica de Educación y sus
            Reglamentos.
          </p>
        </header>

        {/* ── Índice ────────────────────── */}
        <nav className="normas-indice" aria-label="Índice de normas">
          {seccionesNormas.map((sec, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="normas-indice-sep">·</span>}
              <a href={`#normas-grupo-${idx}`} className="normas-indice-link">
                {sec.categoria}
                <span className="normas-indice-count">{sec.items.length}</span>
              </a>
            </React.Fragment>
          ))}
        </nav>

        {/* ── Grupos ────────────────────── */}
        <div className="normas-lista">
          {seccionesNormas.map((sec, idx) => (
            <section
              key={idx}
              id={`normas-grupo-${idx}`}
              className="normas-grupo"
            >
              <header className="normas-grupo-header">
                <span className="normas-grupo-icono">{sec.icono}</span>
                <h3 className="normas-grupo-titulo">{sec.categoria}</h3>
              </header>

              <ol className="normas-items">
                {sec.items.map((item, iIdx) => (
                  <li key={iIdx} className="norma-item">
                    <span className="norma-item-num">{item.num}</span>
                    <div className="norma-item-body">
                      <h4 className="norma-item-titulo">{item.titulo}</h4>
                      <p className="norma-item-desc">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NormasConvivencia;