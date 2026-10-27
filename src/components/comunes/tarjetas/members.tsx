import React, { useState } from 'react';
import { ChevronDown, User } from 'lucide-react';
import './members.css';

export interface RedSocialItem {
  id: number;
  nombre: string;
  url: string;
  icono?: string;
  tipo?: 'github' | 'facebook' | 'instagram' | 'linkedin';
}

export interface MemberItem {
  id: number;
  name: string;
  role: string;
  description?: string;
  imagen?: string;
  redesSociales?: RedSocialItem[];
}

interface MembersProps {
  items: MemberItem[];
}

const renderIconoRedSocial = (tipo?: string) => {
  switch (tipo?.toLowerCase()) {
    case 'github':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.79v-7.6H6.46M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'facebook':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      );
    default:
      return null;
  }
};

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
              {item.imagen && (
                <img src={item.imagen} alt={item.name} loading="lazy" decoding="async" />
              )}
            </div>

            <div className="cuerpo">
              <h3 className="titulo">{item.name}</h3>
              <p className="rol">{item.role}</p>

              {item.redesSociales && item.redesSociales.length > 0 && (
                <div className="redes-sociales">
                  {item.redesSociales.map((redSocial) => (
                    <a
                      key={redSocial.id}
                      href={redSocial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="enlace-red-social"
                      title={redSocial.nombre}
                      aria-label={`${item.name} en ${redSocial.nombre}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {redSocial.tipo ? (
                        renderIconoRedSocial(redSocial.tipo)
                      ) : redSocial.icono ? (
                        <img src={redSocial.icono} alt={redSocial.nombre} loading="lazy" decoding="async" />
                      ) : (
                        <span>{redSocial.nombre}</span>
                      )}
                    </a>
                  ))}
                </div>
              )}

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