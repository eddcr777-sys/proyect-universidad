import React from 'react';
import { Heart, Shield, Award, Users, Scale, Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import './ElLiceo.css';

export const Valores: React.FC = () => {
  const listaValores = [
    {
      icono: <Shield size={28} />,
      titulo: 'Responsabilidad',
      descripcion: 'Asumimos nuestros compromisos académicos y sociales con dedicación, puntualidad y constante superación personal.'
    },
    {
      icono: <Heart size={28} />,
      titulo: 'Respeto e Inclusión',
      descripcion: 'Valoramos la diversidad, fomentando la convivencia armónica, la empatía y la dignidad de cada integrante escolar.'
    },
    {
      icono: <Award size={28} />,
      titulo: 'Excelencia Académica',
      descripcion: 'Buscamos la máxima calidad en nuestros procesos de enseñanza y aprendizaje, incentivando la curiosidad y el rigor.'
    },
    {
      icono: <Users size={28} />,
      titulo: 'Solidaridad y Compañerismo',
      descripcion: 'Promovemos el trabajo en equipo, la ayuda mutua y la empatía como pilares de una comunidad unida.'
    },
    {
      icono: <Scale size={28} />,
      titulo: 'Integridad y Ética',
      descripcion: 'Actuamos con honestidad, justicia y transparencia en todas las esferas de la vida comunitaria e institucional.'
    },
    {
      icono: <Sparkles size={28} />,
      titulo: 'Pensamiento Crítico',
      descripcion: 'Estimulamos la capacidad de indagar, analizar y proponer soluciones creativas e innovadoras ante los retos.'
    }
  ];

  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Valores Institucionales"
        subtitulo="Liceo Bolivariano 'Antonio Lemus Pérez'"
        descripcion="Los principios éticos y humanos que guían el comportamiento de nuestra comunidad escolar."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="contenedor-liceo">
        <div className="encabezado-seccion-liceo">
          <span className="badge-liceo">Cultura Institucional</span>
          <h2 className="titulo-seccion-liceo">Principios que Nos Definen</h2>
          <p className="subtitulo-seccion-liceo">
            Fomentamos una base axiológica sólida que orienta el crecimiento personal, académico y ciudadano de cada estudiante.
          </p>
        </div>

        <div className="grid-tarjetas-liceo">
          {listaValores.map((val, idx) => (
            <div key={idx} className="tarjeta-liceo">
              <div className="icono-tarjeta-liceo">
                {val.icono}
              </div>
              <h3 className="titulo-tarjeta-liceo">{val.titulo}</h3>
              <p className="texto-tarjeta-liceo">{val.descripcion}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Valores;
