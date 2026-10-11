import React from 'react';
import { Heart, Shield, Award, Users, Scale, Sparkles, ArrowLeft, Target, Globe, Lightbulb } from 'lucide-react';
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
      icono: <Target size={26} />,
      titulo: 'Toma de Decisiones',
      imagen: fotoFachada,
      descripcion: 'Demostrar capacidad para tomar decisiones.'
    },
    {
      num: 'Valor 02',
      icono: <Users size={26} />,
      titulo: 'Espíritu Cooperativo',
      imagen: fotoEstudiantes,
      descripcion: 'Manifestar espíritu cooperativo en la realización de los trabajos en grupo.'
    },
    {
      num: 'Valor 03',
      icono: <Scale size={26} />,
      titulo: 'Respeto a Normas y Leyes',
      imagen: fotoAula,
      descripcion: 'Respetar las normas sociales, las leyes y las ideas ajenas.'
    },
    {
      num: 'Valor 04',
      icono: <Shield size={26} />,
      titulo: 'Honradez',
      imagen: fotoComunidad,
      descripcion: 'Valorar la honradez como norma de vida.'
    },
    {
      num: 'Valor 05',
      icono: <Award size={26} />,
      titulo: 'Identidad Histórica',
      imagen: fotoCancha,
      descripcion: 'Reconocer la importancia de los símbolos patrios y nuestros personajes históricos.'
    },
    {
      num: 'Valor 06',
      icono: <Sparkles size={26} />,
      titulo: 'Satisfacción por el Trabajo',
      imagen: img5,
      descripcion: 'Vivenciar la satisfaction del trabajo.'
    },
    {
      num: 'Valor 07',
      icono: <Globe size={26} />,
      titulo: 'Identidad Regional y Nacional',
      imagen: fotoFachada,
      descripcion: 'Reconocer la identidad nacional como individuo perteneciente a una región.'
    },
    {
      num: 'Valor 08',
      icono: <Shield size={26} />,
      titulo: 'Cuidado de Infraestructura',
      imagen: fotoAula,
      descripcion: 'Concienciar al colectivo acerca del cuidado de la infraestructura de la institución y sus recursos.'
    },
    {
      num: 'Valor 09',
      icono: <Heart size={26} />,
      titulo: 'Valores para la Paz',
      imagen: fotoEstudiantes,
      descripcion: 'Fomentar amor, identidad nacional, respeto por la vida, libertad, perseverancia, honestidad, convivencia, comprensión, tolerancia y solidaridad latinoamericana.'
    },
    {
      num: 'Valor 10',
      icono: <Lightbulb size={26} />,
      titulo: 'Ejes Integradores',
      imagen: fotoComunidad,
      descripcion: 'Desarrollar los ejes integradores del Sistema Educativo Bolivariano: Ambiente y Salud Integral, Interculturalidad, TICS y Trabajo Liberador.'
    }
  ];

  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Valores Institucionales"
        subtitulo="Complejo Educativo 'Antonio Lemus Pérez'"
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
          <div className="subtitulo-seccion-liceo" style={{ textAlign: 'justify', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              La Educación Bolivariana debe jugar un papel transcendente en la transmisión de valores, ya que ninguna educación puede ser posible hoy sino está centrada en la noción de valor, ella pasa a constituir el papel fundamental de la Educación Bolivariana. Su definición es indispensable en momentos en que el venezolano se prepara para enfrentarse al reto del Socialismo del Siglo XXI, en donde no cabe la menor duda de que ese es el único camino a la redención de nuestro pueblo, a la salvación de nuestra patria y a la construcción de nuestro mundo, el cual debe ser formado con un espíritu crítico y creador que le permita organizar o reordenar su cuadro de valores para lograr una mayor calidad de vida y perfeccionar el sistema democrático basado en la paz, la voluntad y justicia social.
            </p>
            <p>
              Dentro de este contexto y como una alternativa de respuesta a las inquietudes de nuestro Complejo Educativo se insertan los siguientes valores:
            </p>
          </div>
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
