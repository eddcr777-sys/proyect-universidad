import React from 'react';
import { Flag, Shield, Music, Bookmark, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import { BanderaVenezuela } from '../../components/comunes/Extras/Bandera/BanderaVenezuela';
import './ElLiceo.css';

export const Simbolos: React.FC = () => {
  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Símbolos Institucionales"
        subtitulo="Complejo Educativo 'Antonio Lemus Pérez'"
        descripcion="Emblemas de identidad, historia y orgullo escolar de nuestra comunidad educativa."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="contenedor-liceo">
        <div className="encabezado-seccion-liceo">
          <span className="badge-liceo">Identidad y Patria</span>
          <h2 className="titulo-seccion-liceo">Nuestra Identidad Institucional</h2>
          <p className="subtitulo-seccion-liceo">
            Símbolos que representan nuestros valores, tradición y patriotismo dentro y fuera de las aulas.
          </p>
        </div>

        {/* Bandera de Venezuela */}
        <div className="bloque-contenido-liceo">
          <h3>
            <Flag size={28} style={{ color: 'var(--color-inst-azul)' }} />
            Símbolos Patrios
          </h3>
          <p>
            Rendimos honor a la Bandera Nacional de la República Bolivariana de Venezuela, símbolo supremo de soberanía, historia e identidad patria.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
            <BanderaVenezuela />
          </div>
        </div>

        <div className="grid-tarjetas-liceo">
          {/* Epónimo */}
          <div className="tarjeta-liceo">
            <div className="icono-tarjeta-liceo">
              <Bookmark size={28} />
            </div>
            <h3 className="titulo-tarjeta-liceo">El Epónimo</h3>
            <p className="texto-tarjeta-liceo">
              <strong>Prof. Antonio Lemus Pérez (1913-1980)</strong>: Ilustre educador y pensador cumanés que dedicó su vida a la enseñanza pública, la formación de juventudes y el civismo.
            </p>
          </div>

          {/* Escudo */}
          <div className="tarjeta-liceo">
            <div className="icono-tarjeta-liceo" style={{ background: 'transparent' }}>
              <img
                src="/src/assets/escudo_institucional.jpg"
                alt="Escudo del Complejo Educativo"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/60?text=Escudo'; }}
              />
            </div>
            <h3 className="titulo-tarjeta-liceo">Escudo Institucional</h3>
            <p className="texto-tarjeta-liceo">
              Muestra el nombre COMPLEJO EDUCATIVO "ANTONIO LEMUS PÉREZ", el mapa del estado Sucre resaltando Cumaná, estrellas representativas y un libro abierto con el lema "MORAL Y LUCES" junto a la figura del ilustre educador Antonio Lemus Pérez.
            </p>
          </div>

          {/* Himno */}
          <div className="tarjeta-liceo">
            <div className="icono-tarjeta-liceo">
              <Music size={28} />
            </div>
            <h3 className="titulo-tarjeta-liceo">Canto Institucional</h3>
            <p className="texto-tarjeta-liceo">
              Interpretación lírica que entona con orgullo la comunidad liceísta en actos solemnes y patrióticos, honrando el estudio y la superación.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Simbolos;
