import React from 'react';
import { Heart, Shield, Award, Users, Scale, Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import fotoFachada from '../../assets/lb.jpeg';
import fotoAula from '../../assets/le.jpeg';
import fotoEstudiantes from '../../assets/lem.jpeg';
import fotoComunidad from '../../assets/images.jpeg';
import fotoCancha from '../../assets/lemu.jpeg';
import './ElLiceo.css';
import './Mision.css';
import './Valores.css';

export const Valores: React.FC = () => {
  const listaValores = [
    {
      num: 'Valor 01',
      icono: <Shield size={26} />,
      titulo: 'Responsabilidad',
      imagen: fotoFachada,
      descripcion: 'Asumimos nuestros compromisos académicos y sociales con dedicación, puntualidad y constante superación personal.'
    },
    {
      num: 'Valor 02',
      icono: <Heart size={26} />,
      titulo: 'Respeto e Inclusión',
      imagen: fotoEstudiantes,
      descripcion: 'Valoramos la diversidad, fomentando la convivencia armónica, la empatía y la dignidad de cada integrante escolar.'
    },
    {
      num: 'Valor 03',
      icono: <Award size={26} />,
      titulo: 'Excelencia Académica',
      imagen: fotoAula,
      descripcion: 'Buscamos la máxima calidad en nuestros procesos de enseñanza y aprendizaje, incentivando la curiosidad y el rigor.'
    },
    {
      num: 'Valor 04',
      icono: <Users size={26} />,
      titulo: 'Solidaridad y Compañerismo',
      imagen: fotoComunidad,
      descripcion: 'Promovemos el trabajo en equipo, la ayuda mutua y la empatía como pilares de una comunidad unida.'
    },
    {
      num: 'Valor 05',
      icono: <Scale size={26} />,
      titulo: 'Integridad y Ética',
      imagen: fotoCancha,
      descripcion: 'Actuamos con honestidad, justicia y transparencia en todas las esferas de la vida comunitaria e institucional.'
    },
    {
      num: 'Valor 06',
      icono: <Sparkles size={26} />,
      titulo: 'Pensamiento Crítico',
      imagen: img5,
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

      <main className="contenedor-liceo-ancho">
        <div className="encabezado-seccion-liceo">
          <h2 className="titulo-seccion-liceo">Principios que Nos Definen</h2>
          <p className="subtitulo-seccion-liceo">
            Fomentamos una base axiológica sólida que orienta el crecimiento personal, académico y ciudadano de cada estudiante.
          </p>
        </div>

        <section className="valores-seccion">
          <div className="valores-grid">
            {listaValores.map((val, idx) => (
              <div key={idx} className="tarjeta-valor-card">
                <div className="marco-imagen-valor">
                  <img src={val.imagen} alt={val.titulo} loading="lazy" />
                </div>

                <div className="cuerpo-tarjeta-valor">
                  <h3 className="titulo-tarjeta-valor">{val.titulo}</h3>
                  <p className="texto-tarjeta-valor">{val.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Valores;
