import React, { type ButtonHTMLAttributes } from 'react';
import './Boton.css';

/**
 * Variantes de color y tema para los botones de la aplicación
 */
export type VarianteBoton = 
  | 'rojo-institucional' 
  | 'azul-institucional' 
  | 'ciberseguridad' 
  | 'secundario' 
  | 'alerta' 
  | 'exito' 
  | 'fantasma';

/**
 * Tamaños disponibles para mantener consistencia de escala
 */
export type TamanoBoton = 'pequeno' | 'mediano' | 'grande';

/**
 * Propiedades del componente Boton
 */
export interface PropiedadesBoton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Texto del botón (soporta compatibilidad previa) */
  texto?: string;
  /** Función a ejecutar al hacer clic */
  onClick?: (evento: React.MouseEvent<HTMLButtonElement>) => void;
  /** Tipo HTML del botón */
  tipo?: 'button' | 'submit' | 'reset';
  /** Variante estilística del botón */
  variante?: VarianteBoton;
  /** Tamaño del botón */
  tamano?: TamanoBoton;
  /** Muestra un indicador de carga y deshabilita la interacción */
  cargando?: boolean;
  /** Deshabilita el botón */
  deshabilitado?: boolean;
  /** Elemento o icono a la izquierda */
  iconoIzquierda?: React.ReactNode;
  /** Elemento o icono a la derecha */
  iconoDerecha?: React.ReactNode;
  /** Si debe ocupar el 100% del ancho de su contenedor */
  anchoCompleto?: boolean;
  /** Clases CSS adicionales */
  className?: string;
  /** Contenido hijo opcional */
  children?: React.ReactNode;
}

/**
 * Componente Boton reutilizable con bordes rectos (0px), paleta institucional / ciberseguridad
 * y consistencia visual en toda la aplicación.
 */
export const Boton: React.FC<PropiedadesBoton> = ({
  texto,
  onClick,
  tipo = 'button',
  variante = 'rojo-institucional',
  tamano = 'mediano',
  cargando = false,
  deshabilitado = false,
  iconoIzquierda,
  iconoDerecha,
  anchoCompleto = false,
  className = '',
  children,
  disabled,
  type,
  ...otrasProps
}) => {
  const estaDeshabilitado = deshabilitado || disabled || cargando;
  const tipoFinal = type || tipo;

  const clasesCompuestas = [
    'boton-base',
    `boton-${variante}`,
    `boton-${tamano}`,
    anchoCompleto ? 'boton-ancho-completo' : '',
    cargando ? 'boton-cargando' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={tipoFinal}
      className={clasesCompuestas}
      onClick={onClick}
      disabled={estaDeshabilitado}
      {...otrasProps}
    >
      {cargando && <span className="boton-cargador-spinner" aria-hidden="true" />}
      {!cargando && iconoIzquierda && <span className="boton-icono-izquierda">{iconoIzquierda}</span>}
      <span className="boton-texto">{children || texto}</span>
      {!cargando && iconoDerecha && <span className="boton-icono-derecha">{iconoDerecha}</span>}
    </button>
  );
};

export default Boton;
