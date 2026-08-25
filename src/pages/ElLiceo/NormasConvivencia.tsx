import React from 'react';
import { BookCheck, ShieldAlert, Clock, UserCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import './ElLiceo.css';

export const NormasConvivencia: React.FC = () => {
  const seccionesNormas = [
    {
      categoria: 'Deberes Generales del Estudiante',
      icono: <UserCheck size={24} />,
      items: [
        { num: '01', titulo: 'Asistencia y Puntualidad', desc: 'Asistir puntualmente a las actividades escolares portando el uniforme institucional correspondiente.' },
        { num: '02', titulo: 'Respeto a la Comunidad', desc: 'Tratar con cortesía, dignidad y respeto a compañeros, docentes, personal administrativo y obrero.' },
        { num: '03', titulo: 'Cuidado del Entorno', desc: 'Mantener limpias y en perfecto estado las instalaciones, aulas, laboratorios y áreas deportivas del plantel.' }
      ]
    },
    {
      categoria: 'Convivencia y Disciplina Escolar',
      icono: <ShieldAlert size={24} />,
      items: [
        { num: '04', titulo: 'Uso de Dispositivos Electrónicos', desc: 'Los teléfonos y equipos tecnológicos se emplearán exclusivamente con fines pedagógicos autorizados por el docente.' },
        { num: '05', titulo: 'Cultura de Paz', desc: 'Queda estrictamente prohibida cualquier manifestación de violencia, acoso escolar (bullying) o discriminación.' },
        { num: '06', titulo: 'Rendimiento Académico', desc: 'Cumplir responsablemente con las tareas, evaluaciones y proyectos asignados en cada área del conocimiento.' }
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

      <main className="contenedor-liceo">
        <div className="encabezado-seccion-liceo">
          <span className="badge-liceo">Reglamento Interno</span>
          <h2 className="titulo-seccion-liceo">Acuerdos de Convivencia Escolar</h2>
          <p className="subtitulo-seccion-liceo">
            Principios normativos que regulan la vida comunitaria y garantizan el derecho a la educación en un ambiente armónico.
          </p>
        </div>

        {seccionesNormas.map((sec, idx) => (
          <div key={idx} className="bloque-contenido-liceo">
            <h3>
              {sec.icono}
              {sec.categoria}
            </h3>
            <ul className="lista-normas">
              {sec.items.map((item, iIdx) => (
                <li key={iIdx} className="item-norma">
                  <span className="numero-norma">{item.num}</span>
                  <div className="texto-norma-contenido">
                    <h4>{item.titulo}</h4>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
};

export default NormasConvivencia;
