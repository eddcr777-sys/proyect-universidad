import React from 'react';
import { BookCheck, ShieldAlert, Clock, UserCheck, ArrowLeft, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import './ElLiceo.css';
import './NormasConvivencia.css';

export const NormasConvivencia: React.FC = () => {
  const seccionesNormas = [
    {
      categoria: 'Deberes Generales del Estudiante',
      icono: <UserCheck size={22} />,
      items: [
        { num: '01', titulo: 'Asistencia y Puntualidad', desc: 'Asistir puntualmente a las actividades escolares portando el uniforme institucional correspondiente.' },
        { num: '02', titulo: 'Respeto a la Comunidad', desc: 'Tratar con cortesía, dignidad y respeto a compañeros, docentes, personal administrativo y obrero.' },
        { num: '03', titulo: 'Cuidado del Entorno', desc: 'Mantener limpias y en perfecto estado las instalaciones, aulas, laboratorios y áreas deportivas del plantel.' }
      ]
    },
    {
      categoria: 'Convivencia y Disciplina Escolar',
      icono: <ShieldAlert size={22} />,
      items: [
        { num: '04', titulo: 'Uso de Dispositivos Electrónicos', desc: 'Los teléfonos y equipos tecnológicos se emplearán exclusivamente con fines pedagógicos autorizados por el docente.' },
        { num: '05', titulo: 'Cultura de Paz', desc: 'Queda estrictamente prohibida cualquier manifestación de violencia, acoso escolar (bullying) o discriminación.' },
        { num: '06', titulo: 'Rendimiento Académico', desc: 'Cumplir responsablemente con las tareas, evaluaciones y proyectos asignados en cada área del conocimiento.' }
      ]
    },
    {
      categoria: 'Derechos y Garantías Estudiantiles',
      icono: <BookCheck size={22} />,
      items: [
        { num: '07', titulo: 'Educación Inclusiva de Calidad', desc: 'Recibir una formación integral en igualdad de condiciones, sin ningún tipo de distinción ni discriminación.' },
        { num: '08', titulo: 'Orientación y Acompañamiento', desc: 'Contar con el apoyo pedagógico, psicológico y orientativo por parte del cuerpo docente y especialistas.' },
        { num: '09', titulo: 'Participación y Libre Expresión', desc: 'Expresar libremente sus opiniones e iniciativas de forma respetuosa dentro del ámbito escolar.' }
      ]
    },
    {
      categoria: 'Compromiso de la Familia',
      icono: <HeartHandshake size={22} />,
      items: [
        { num: '10', titulo: 'Corresponsabilidad Educativa', desc: 'Acompañar y supervisar activamente el proceso educativo, hábitos de estudio y conducta de sus representados.' },
        { num: '11', titulo: 'Comunicación Institucional', desc: 'Asistir oportunamente a las asambleas, entregas de boletines y convocatorias realizadas por el plantel.' }
      ]
    }
  ];

  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Normas de Convivencia"
        subtitulo="Liceo Bolivariano 'Antonio Lemus Pérez'"
        descripcion="Lineamientos para garantizar una convivencia armónica, segura y basada en el respeto mutuo."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="contenedor-liceo-ancho">
        <div className="encabezado-seccion-liceo">
          <h2 className="titulo-seccion-liceo">Acuerdos de Convivencia Escolar</h2>
          <p className="subtitulo-seccion-liceo">
            Principios normativos que regulan la vida comunitaria y garantizan el derecho a la educación en un ambiente armónico.
          </p>
        </div>

        <section className="normas-seccion">
          {seccionesNormas.map((sec, idx) => (
            <div key={idx} className="normas-categoria-bloque">
              <h3 className="normas-categoria-titulo">
                <span className="normas-icono-categoria">
                  {sec.icono}
                </span>
                {sec.categoria}
              </h3>

              <div className="normas-grid-items">
                {sec.items.map((item, iIdx) => (
                  <div key={iIdx} className="norma-tarjeta-item">
                    <span className="norma-numero-badge">{item.num}</span>
                    <div className="norma-contenido-texto">
                      <h4>{item.titulo}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default NormasConvivencia;
