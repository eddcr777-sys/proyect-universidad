import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../../../pages/HomePage/HomePage.css';

// Definición de la estructura de cada tarjeta
interface TarjetaItem {
  id: number;
  imagen: string;
  titulo: string;
  resumen: string;
  detalle?: string;
}

// Props del componente
interface TarjetasDesplegablesProps {
  items: TarjetaItem[];
}

const TarjetasDesplegables: React.FC<TarjetasDesplegablesProps> = ({ items }) => {
  const [activa, setActiva] = useState<number | null>(null);

  return (
    <>
      {items.map((item) => {
        const estaAbierto = activa === item.id;

        return (
          <article
            key={item.id}
            className="tarjeta-harvard-editorial"
            onClick={() => setActiva(estaAbierto ? null : item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiva(estaAbierto ? null : item.id);
              }
            }}
          >
            <div className="marco-imagen-editorial">
              <img src={item.imagen} alt={item.titulo} loading="lazy" />
            </div>

            <div className="cuerpo-editorial">
              <h3 className={`titulo-card-editorial ${estaAbierto ? 'subrayado' : ''}`}>
                <span>{item.titulo}</span>
              </h3>

              <p className="descripcion-card-editorial">{item.resumen}</p>

              {estaAbierto && item.detalle && (
                <div className="detalle-expandido-editorial">
                  <p>{item.detalle}</p>
                </div>
              )}

              <button
                type="button"
                className="boton-leer-mas-harvard"
                aria-expanded={estaAbierto}
              >
                <span>{estaAbierto ? 'Leer menos' : 'Saber más'}</span>
                <ChevronDown
                  className={`chevron-editorial ${estaAbierto ? 'rotado' : ''}`}
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