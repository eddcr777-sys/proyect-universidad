import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './VisorImagenes.css';

export interface VisorImagenesProps {
  /** URL de la imagen a mostrar */
  src: string | null;
  /** Texto alternativo de la imagen */
  alt?: string;
  /** Texto descriptivo debajo de la imagen */
  caption?: string;
  /** Se ejecuta al cerrar el visor */
  onCerrar: () => void;
}

/**
 * Visor simple: muestra UNA sola imagen a pantalla completa.
 * Se cierra con Escape, botón × o clic en el fondo.
 */
const VisorImagenes = ({ src, alt, caption, onCerrar }: VisorImagenesProps) => {
  // Bloquea el scroll del body mientras está abierto
  useEffect(() => {
    if (!src) return;
    const scrollOriginal = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = scrollOriginal;
    };
  }, [src]);

  // Escape para cerrar
  useEffect(() => {
    if (!src) return;
    const manejarTeclas = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCerrar();
    };
    window.addEventListener('keydown', manejarTeclas);
    return () => window.removeEventListener('keydown', manejarTeclas);
  }, [src, onCerrar]);

  if (!src) return null;

  const manejarClickFondo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onCerrar();
  };

  return createPortal(
    <div
      className="visor-overlay"
      onClick={manejarClickFondo}
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imagen"
    >
      <button
        type="button"
        className="visor-cerrar-btn"
        onClick={onCerrar}
        aria-label="Cerrar visor"
      >
        &times;
      </button>

      <div className="visor-imagen-contenedor">
        <img
          className="visor-imagen"
          src={src}
          alt={alt ?? caption ?? 'Imagen seleccionada'}
        />
        {caption && <p className="visor-caption">{caption}</p>}
      </div>
    </div>,
    document.body
  );
};

export default VisorImagenes;