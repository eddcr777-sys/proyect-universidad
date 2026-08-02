// src/components/comunes/tarjetas/members.tsx
import React from 'react';
import { User } from 'lucide-react'; // Importamos el ícono de Lucide

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export const MemberCard: React.FC<TeamMember> = ({ name, role, description }) => {
  return (
    <div className="tarjeta-creador relleno-grande bordes-redondeados texto-centrado">
      <div className="ancho-avatar alto-avatar margen-x-auto margen-abajo-grande brillo-avatar">
        <div className="avatar-contenedor ancho-completo alto-completo bordes-circulares caja-flexible elementos-centrados justificar-centro desbordamiento-oculto sombra-media">
          <User className="icono-perfil opacidad-30" size={56} />
        </div>
      </div>
      <h3 className="texto-titulo-pequeno mayusculas margen-abajo-pequeno texto-principal">
        {name}
      </h3>
      <p className="texto-principal texto-pequeno mayusculas letras-separadas margen-abajo-medio opacidad-70">
        {role}
      </p>
      <p className="texto-gris-oscuro texto-pequeno altura-linea-relajada">
        {description}
      </p>
    </div>
  );
};

{/*PARA PROFESORES Y PERSNAL INSTITUCIONAL*/}
export interface MemberInfo {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export const MemberCardInst: React.FC<MemberInfo> = ({ name, role, description, imageUrl }) => {
  return (
    <div className="tarjeta-creador relleno-grande bordes-redondeados texto-centrado">
      <div className="ancho-avatar alto-avatar margen-x-auto margen-abajo-grande brillo-avatar">
        <div className="avatar-contenedor ancho-completo alto-completo bordes-circulares caja-flexible elementos-centrados justificar-centro desbordamiento-oculto sombra-media">
          <img
            src={imageUrl}
            alt={name}
            className="ancho-completo alto-completo objeto-cubrir"
          />
        </div>
      </div>
      <h3 className="texto-titulo-pequeno mayusculas margen-abajo-pequeno texto-principal">
        {name}
      </h3>
      <p className="texto-principal texto-pequeno mayusculas letras-separadas margen-abajo-medio opacidad-70">
        {role}
      </p>
      <p className="texto-gris-oscuro texto-pequeno altura-linea-relajada">
        {description}
      </p>
    </div>
  );
};
