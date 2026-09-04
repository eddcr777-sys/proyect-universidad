import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './tarjetasHome.css';

interface TarjetaItem {
  id: number;
  imagen: string;
  titulo: string;
  resumen: string;
  detalle?: string;
}

interface TarjetasDesplegablesProps {
  items: TarjetaItem[];
}

const TarjetasDesplegables: React.FC<TarjetasDesplegablesProps> = ({ items }) => {
  const [abiertaId, setAbiertaId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setAbiertaId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {items.map((item) => {
        const estaAbierta = abiertaId === item.id;

        return (
          <article
            key={item.id}
            className={`tarjeta-desplegable ${estaAbierta ? 'tarjeta-activa' : ''}`}
            onClick={() => toggleCard(item.id)}
            role="button"
            tabIndex={0}
            aria-expanded={estaAbierta}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCard(item.id);
              }
            }}
          >
            <div className="marco-imagen">
              <img src={item.imagen} alt={item.titulo} loading="lazy" decoding="async" />
            </div>

            <div className="cuerpo">
              <h3 className="titulo">{item.titulo}</h3>
              <p className="resumen">{item.resumen}</p>

              <div
                className={`contenido-expandible ${estaAbierta ? 'abierto' : ''}`}
                aria-hidden={!estaAbierta}
              >
                <div className="detalle">
                  {item.detalle && <p>{item.detalle}</p>}
                </div>
              </div>

              <button
                type="button"
                className="boton-toggle"
                aria-expanded={estaAbierta}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCard(item.id);
                }}
              >
                <span>{estaAbierta ? 'Leer menos' : 'Saber más'}</span>
                <ChevronDown
                  className={`chevron ${estaAbierta ? 'rotado' : ''}`}
                  size={16}
                />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default TarjetasDesplegables;