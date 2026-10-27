import React, { useState } from 'react';
import fotoHero from '../../assets/pbk-Hero-3.jpg';
import foto1 from '../../assets/lb.jpeg';
import foto2 from '../../assets/lemu.jpeg';
import foto3 from '../../assets/le.jpeg';
import foto4 from '../../assets/lem.jpeg';
import foto5 from '../../assets/handshake.jpg';
import foto6 from '../../assets/fi.jpeg';
import foto7 from '../../assets/etic.jpeg';
import foto8 from '../../assets/Gemini_Generated_Image_2p4dkt2p4dkt2p4d.jpeg';
import './Galeria.css';

interface ItemGaleria {
  id: number;
  src: string;
  titulo: string;
}

const ITEMS_GALERIA: ItemGaleria[] = [
  { id: 1, src: foto1, titulo: 'Instalaciones y Fachada' },
  { id: 2, src: foto2, titulo: 'Canchas Deportivas' },
  { id: 3, src: foto3, titulo: 'Aulas y Pabellones' },
  { id: 4, src: foto4, titulo: 'Vida Estudiantil' },
  { id: 5, src: foto5, titulo: 'Comunidad y Docentes' },
  { id: 6, src: foto6, titulo: 'Laboratorios y Ciencias' },
  { id: 7, src: foto7, titulo: 'Formación Ética y Cívica' },
  { id: 8, src: foto8, titulo: 'Orígenes y Memoria' }
];

/**
 * Página de Galería idéntica a la Captura 1 del mensaje 3 (Colegio Los Arcos):
 * - Hero en blanco y negro con título destacado "GALERÍA"
 * - Cuadrícula de 4 tarjetas por fila con fotos redondeadas a 20px y título blanco centrado sobre overlay oscuro
 */
export const Galeria: React.FC = () => {
  const [fotoModal, setFotoModal] = useState<string | null>(null);

  return (
    <div className="pagina-galeria-losarcos">
      {/* ── BANNER HERO: GALERÍA (Captura 1) ── */}
      <header
        className="galeria-hero-losarcos"
        style={{ backgroundImage: `url(${fotoHero})` }}
      >
        <div className="galeria-hero-overlay" />
        <h1 className="galeria-hero-titulo">Galería</h1>
      </header>

      {/* ── CUADRÍCULA DE TARJETAS REDONDEADAS ── */}
      <main className="galeria-contenedor-losarcos">
        <div className="galeria-encabezado-seccion">
          <span className="galeria-badge-etiqueta">Memoria Visual y Espacios</span>
          <h2 className="galeria-subtitulo-principal">Instalaciones y Vida Estudiantil</h2>
          <p className="galeria-descripcion-intro">
            Explora las áreas académicas, canchas deportivas, laboratorios y proyectos comunitarios 
            del Complejo Educativo «Antonio Lemus Pérez» en Cumaná.
          </p>
        </div>

        <div className="galeria-grid-losarcos">
          {ITEMS_GALERIA.map((item) => (
            <div
              key={item.id}
              className="tarjeta-galeria-losarcos"
              onClick={() => setFotoModal(item.src)}
              title={`Ver ${item.titulo}`}
            >
              <img src={item.src} alt={item.titulo} loading="lazy" />
              <div className="tarjeta-galeria-overlay">
                <h3 className="tarjeta-galeria-titulo">{item.titulo}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal simple para ver foto completa */}
      {fotoModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            cursor: 'pointer'
          }}
          onClick={() => setFotoModal(null)}
        >
          <img
            src={fotoModal}
            alt="Ampliación"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '24px',
              objectFit: 'contain',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Galeria;