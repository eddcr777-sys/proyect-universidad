import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './../../../pages/HomePage/HomePage.css';

export interface Diapositiva {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}

interface CarruselBaseProps {
  slides: Diapositiva[];
  indiceActual: number;
  onAnterior: () => void;
  onSiguiente: () => void;
  onIrAIndice?: (indice: number) => void;
  titulo?: string;
}

const CarruselBase: React.FC<CarruselBaseProps> = ({
  slides,
  indiceActual,
  onAnterior,
  onSiguiente,
  onIrAIndice,
  titulo,
}) => {
  return (
    <div className="bloque-carrusel-interno">
      {titulo && (
        <h3 className="titulo-seccion-editorial titulo-carrusel-encabezado">
          {titulo}
        </h3>
      )}

      <div className="contenedor-carrusel">
        <div
          className="pista-carrusel"
          style={{ transform: `translateX(-${indiceActual * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="item-carrusel">
              <img src={slide.imagen} alt={slide.titulo} loading="lazy" />
              <div className="overlay-carrusel">
                <h3>{slide.titulo}</h3>
                <p>{slide.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="controles-carrusel">
          <button type="button" aria-label="Anterior" onClick={onAnterior}>
            <ChevronLeft size={24} />
          </button>
          <button type="button" aria-label="Siguiente" onClick={onSiguiente}>
            <ChevronRight size={24} />
          </button>
        </div>

        {slides.length > 1 && (
          <div className="indicadores-carrusel">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`indicador-punto ${index === indiceActual ? 'activo' : ''}`}
                onClick={() => onIrAIndice && onIrAIndice(index)}
                aria-label={`Ir a la diapositiva ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarruselBase;

// Aliases para mantener compatibilidad con imports antiguos
export const CarruselGaleria = CarruselBase;
export const CarruselPersonal = CarruselBase;