import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './tarjetasHome.css';

interface TarjetaItem {
  id: number | string;
  imagen: string;
  titulo: string;
  resumen: string;
  detalle?: string;
}

interface TarjetasDesplegablesProps {
  items: TarjetaItem[];
}

const TarjetasDesplegables: React.FC<TarjetasDesplegablesProps> = ({ items }) => {
  // Usamos string como clave para poder combinar id + índice si el id viene repetido o ausente
  const [abiertaId, setAbiertaId] = useState<string | null>(null);

  const toggleCard = (clave: string) => {
    setAbiertaId((prev) => (prev === clave ? null : clave));
  };

  return (
    <>
      {items.map((item, index) => {
        // Clave única garantizada, incluso si el id se repite o no existe
        const clave =
          item.id !== undefined && item.id !== null && String(item.id).trim() !== ''
            ? `id-${item.id}`
            : `idx-${index}`;

        const estaAbierta = abiertaId === clave;
        const hayAlgunaAbierta = abiertaId !== null;
        const tieneDetalle = Boolean(item.detalle && item.detalle.trim().length > 0);

        return (
          <article
            key={clave}
            className={`tarjeta-desplegable ${estaAbierta ? 'tarjeta-activa' : ''} ${!estaAbierta && hayAlgunaAbierta ? 'restringir-altura' : ''}`}
            onClick={() => tieneDetalle && toggleCard(clave)}
            role="button"
            tabIndex={0}
            aria-expanded={estaAbierta}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && tieneDetalle) {
                e.preventDefault();
                toggleCard(clave);
              }
            }}
          >
            <div className="marco-imagen">
              <img
                src={item.imagen}
                alt={item.titulo}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="cuerpo">
              <h3 className="titulo">{item.titulo}</h3>
              <p className="resumen">{item.resumen}</p>

              {/* Solo renderizamos el bloque expandible si hay detalle real */}
              {tieneDetalle && (
                <div
                  className={`contenido-expandible ${estaAbierta ? 'abierto' : ''}`}
                  aria-hidden={!estaAbierta}
                >
                  <div className="detalle">
                    <p>{item.detalle}</p>
                  </div>
                </div>
              )}

              {/* El botón solo aparece si hay detalle que mostrar */}
              {tieneDetalle && (
                <button
                  type="button"
                  className="boton-toggle"
                  aria-expanded={estaAbierta}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCard(clave);
                  }}
                >
                  <span>{estaAbierta ? 'Leer menos' : 'Saber más'}</span>
                  <ChevronDown
                    className={`chevron ${estaAbierta ? 'rotado' : ''}`}
                    size={16}
                  />
                </button>
              )}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default TarjetasDesplegables;