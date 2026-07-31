import React, { useEffect, useCallback } from 'react';
import './Modal.css';

/**
 * Variantes visuales para el Modal
 */
export type VarianteModal = 'normal' | 'ciberseguridad' | 'alerta';

/**
 * Tamaños para el contenedor del Modal
 */
export type TamanoModal = 'pequeno' | 'mediano' | 'grande' | 'pantalla-completa';

/**
 * Propiedades del componente Modal
 */
export interface PropiedadesModal {
  /** Determina si el modal está abierto o visible */
  abierto: boolean;
  /** Función para cerrar el modal */
  cerrar: () => void;
  /** Título principal del modal */
  titulo: string;
  /** Subtítulo u oración explicativa opcional */
  subtitulo?: string;
  /** Contenido principal (compatible con prop previa) */
  contenido?: React.ReactNode;
  /** Contenido principal como hijos (ReactNode) */
  children?: React.ReactNode;
  /** Elementos o botones de acción en el pie del modal */
  acciones?: React.ReactNode;
  /** Tamaño del diálogo modal */
  tamano?: TamanoModal;
  /** Variante estilística del modal */
  variante?: VarianteModal;
  /** Permite cerrar el modal al hacer clic en el fondo overlay */
  cerrarAlHacerClicEnFondo?: boolean;
}

/**
 * Componente Modal reutilizable con bordes rectos (0px), fondo desenfocado (backdrop-filter)
 * y soporte para accesibilidad (tecla ESC).
 */
export const Modal: React.FC<PropiedadesModal> = ({
  abierto,
  cerrar,
  titulo,
  subtitulo,
  contenido,
  children,
  acciones,
  tamano = 'mediano',
  variante = 'normal',
  cerrarAlHacerClicEnFondo = true,
}) => {
  // Manejar cierre al presionar la tecla ESC
  const manejarTeclaPresionada = useCallback(
    (evento: KeyboardEvent) => {
      if (evento.key === 'Escape' && abierto) {
        cerrar();
      }
    },
    [abierto, cerrar]
  );

  useEffect(() => {
    if (abierto) {
      document.addEventListener('keydown', manejarTeclaPresionada);
      // Evitar desplazamiento de la página de fondo al abrir modal
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', manejarTeclaPresionada);
      document.body.style.overflow = 'unset';
    };
  }, [abierto, manejarTeclaPresionada]);

  if (!abierto) return null;

  const manejarClicOverlay = (evento: React.MouseEvent<HTMLDivElement>) => {
    if (evento.target === evento.currentTarget && cerrarAlHacerClicEnFondo) {
      cerrar();
    }
  };

  const clasesModal = [
    'modal-contenido-base',
    `modal-${tamano}`,
    `modal-variante-${variante}`,
  ].join(' ');

  return (
    <div className="modal-overlay-base" onClick={manejarClicOverlay} role="dialog" aria-modal="true">
      <div className={clasesModal}>
        {/* Cabecera del Modal */}
        <div className="modal-cabecera">
          <div className="modal-titulos">
            <h2 className="modal-titulo-texto">{titulo}</h2>
            {subtitulo && <p className="modal-subtitulo-texto">{subtitulo}</p>}
          </div>
          <button
            type="button"
            className="modal-boton-cerrar"
            onClick={cerrar}
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        {/* Cuerpo del Modal */}
        <div className="modal-cuerpo">
          {contenido}
          {children}
        </div>

        {/* Pie de acciones del Modal */}
        {acciones && <div className="modal-pie-acciones">{acciones}</div>}
      </div>
    </div>
  );
};

export default Modal;
