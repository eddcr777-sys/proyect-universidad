import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowLeft } from 'lucide-react';
import './Galeria.css';
import { GALERIA_FOTOS } from '../../data/galeriaData';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';

export const Galeria: React.FC = () => {
  // Agrupar fotos por categoría
  const categorias = GALERIA_FOTOS.reduce<Record<string, typeof GALERIA_FOTOS>>((acc, foto) => {
    if (!acc[foto.categoria]) acc[foto.categoria] = [];
    acc[foto.categoria].push(foto);
    return acc;
  }, {});

  return (
    <>
      <HeroInstitucional
        imagenFondo={img5}
        titulo="Galería Institucional"
        descripcion="Explora los impresionantes entornos que hacen de nuestra institución un lugar único para el aprendizaje y el crecimiento."
        acciones={
          [
            <a href="/" className="boton-hero-principal">
           <ArrowLeft size={20} /> Volver a la Página Principal
          
        </a>
          ]
          
        }
      />

      <main className="galeria-page">

        {Object.entries(categorias).map(([categoria, fotos]) => (
          <section key={categoria} className="galeria-seccion" id={categoria}>
            <h2 className="galeria-seccion-titulo">{categoria}</h2>
            <div className="galeria-mosaico">
              {fotos.map((foto) => (
                <figure key={foto.id} className="galeria-figura">
                  <div className="galeria-marco">
                    <img
                      src={foto.src}
                      alt={foto.alt}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={800}
                      className="galeria-imagen"
                    />
                  </div>
                  <figcaption className="galeria-caption">
                    <h3 className="galeria-caption-titulo">{foto.titulo}</h3>
                    <p className="galeria-caption-descripcion">{foto.descripcion}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Galeria;