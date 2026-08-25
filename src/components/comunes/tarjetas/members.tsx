import React, { useState } from 'react';
import { ChevronDown, User } from 'lucide-react';
import './members.css'

export interface MemberItem {
  id: number;
  name: string;
  role: string;
  description?: string;
  imagen?: string; // opcional, puede estar vacía
}

interface MembersProps {
  items: MemberItem[];
}

const Members: React.FC<MembersProps> = ({ items }) => {
  const [activa, setActiva] = useState<number | null>(null);

  return (
    <>
      {items.map((item) => {
        const estaAbierto = activa === item.id;

        return (
          <article
            key={item.id}
            className="tarjeta-harvard-editorial-"
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
            <div className="marco-imagen-editorial-">
              {item.imagen ? (
                <img src={item.imagen} alt={item.name} loading="lazy" decoding="async" />
              ) : (
                <div className="miembro-avatar-placeholder-">
                  <User size={56} />
                </div>
              )}
            </div>

            <div className="cuerpo-editorial-">
              <h3 className={`titulo-card-editorial-${estaAbierto ? 'subrayado' : ''}`}>
                <span>{item.name}</span>
              </h3>

              <p className="descripcion-card-editorial-">{item.role}</p>

              {estaAbierto && item.description && (
                <div className="detalle-expandido-editorial-">
                  <p>{item.description}</p>
                </div>
              )}

              <button
                type="button"
                className="boton-leer-mas-harvard-"
                aria-expanded={estaAbierto}
              >
                <span>{estaAbierto ? 'Leer menos' : 'Saber más'}</span>
                <ChevronDown
                  className={`chevron-editorial-${estaAbierto ? 'rotado' : ''}`}
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