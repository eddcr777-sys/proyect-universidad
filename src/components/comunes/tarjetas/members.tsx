import React, { useState } from 'react';
import { ChevronDown, User } from 'lucide-react';
import './members.css';

export interface MemberItem {
  id: number;
  name: string;
  role: string;
  description?: string;
  imagen?: string;
}

interface MembersProps {
  items: MemberItem[];
}

const Members: React.FC<MembersProps> = ({ items }) => {
  const [abiertaId, setAbiertaId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setAbiertaId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {items.map((item) => {
        const estaAbierta = abiertaId === item.id;
        const hayAlgunaAbierta = abiertaId !== null;

        return (
          <article
            key={item.id}
            className={`tarjeta-miembro ${estaAbierta ? 'tarjeta-activa' : ''} ${!estaAbierta && hayAlgunaAbierta ? 'restringir-altura' : ''}`}
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
              {item.imagen ? (
                <img src={item.imagen} alt={item.name} loading="lazy" decoding="async" />
              ) : (
                <div className="placeholder-avatar">
                  <User size={56} />
                </div>
              )}
            </div>

            <div className="cuerpo">
              <h3 className="titulo">{item.name}</h3>
              <p className="rol">{item.role}</p>

              <div
                className={`contenido-expandible ${estaAbierta ? 'abierto' : ''}`}
                aria-hidden={!estaAbierta}
              >
                <div className="descripcion">
                  {item.description && <p>{item.description}</p>}
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

export default Members;