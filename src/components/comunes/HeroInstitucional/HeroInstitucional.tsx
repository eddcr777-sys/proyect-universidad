import React from 'react';
import './HeroInstitucional.css';

interface HeroInstitucionalProps {
  imagenFondo: string;
  titulo: string;
  subtitulo?: string;
  descripcion?: string;
  acciones?: React.ReactNode;
  children?: React.ReactNode;
  variante?: 'pantalla-completa' | 'compacto';
}

const HeroInstitucional: React.FC<HeroInstitucionalProps> = ({
  imagenFondo,
  titulo,
  subtitulo,
  descripcion,
  acciones,
  children,
  variante = 'pantalla-completa',
}) => {
  return (
    <header
      className={`hero-home ${variante}`}
      style={{ backgroundImage: `url(${imagenFondo})` }}
    >
      <div className="hero-home-overlay" />
      <div className="hero-home-contenido">
        <h1 className="hero-home-titulo">
          {titulo}
          {subtitulo && <span className="hero-home-nombre">{subtitulo}</span>}
        </h1>
        {descripcion && <p className="hero-home-descripcion">{descripcion}</p>}
        {acciones && <div className="hero-home-acciones">{acciones}</div>}
        {children && <div className="hero-home-extra">{children}</div>}
      </div>
    </header>
  );
};

export default HeroInstitucional;