import React from 'react';
import HeroCiberseguridad from '../HeroCiberseguridad/HeroCiberseguridad';
import type { AccionHeroCiber, EnlaceSubNavegacionCiber } from '../HeroCiberseguridad/HeroCiberseguridad';
import imgHeroPredeterminado from '../../../assets/pbk-Hero-3.jpg';
import './HeaderProyecto.css';

export interface AccionHero extends AccionHeroCiber {}
export interface EnlaceNavegacionProyecto extends EnlaceSubNavegacionCiber {}

export interface HeaderProyectoProps {
  titulo?: string;
  tituloResaltado?: string;
  categoria?: string;
  descripcion?: string | React.ReactNode;
  autores?: string;
  imagenFondo?: string;
  enlacesSubNav?: EnlaceNavegacionProyecto[];
  acciones?: AccionHero[];
  children?: React.ReactNode;
}

/**
 * Componente de encabezado Hero unificado para los proyectos.
 * Delega en el nuevo componente HeroCiberseguridad para ofrecer la nueva línea gráfica y fuentes.
 */
const HeaderProyecto: React.FC<HeaderProyectoProps> = ({
  titulo,
  tituloResaltado,
  categoria,
  descripcion,
  imagenFondo = imgHeroPredeterminado,
  enlacesSubNav = [],
  acciones = [],
  children,
}) => {
  return (
    <HeroCiberseguridad
      titulo={titulo}
      tituloResaltado={tituloResaltado}
      categoria={categoria}
      descripcion={descripcion}
      imagenFondo={imagenFondo}
      enlacesSubNav={enlacesSubNav}
      acciones={acciones}
    >
      {children}
    </HeroCiberseguridad>
  );
};

export default HeaderProyecto;
