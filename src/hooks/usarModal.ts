import { useState, useCallback } from 'react';

/**
 * Interfaz para el retorno del hook usarModal
 */
export interface UsarModalRetorno<T = unknown> {
  /** Indica si el modal está visible */
  abierto: boolean;
  /** Función para abrir el modal, opcionalmente recibiendo datos contextuales */
  abrirModal: (datos?: T) => void;
  /** Función para cerrar el modal */
  cerrarModal: () => void;
  /** Función para alternar el estado del modal */
  alternarModal: () => void;
  /** Datos contextuales pasados al abrir el modal */
  datosModal: T | null;
}

/**
 * Hook reutilizable para gestionar el estado de apertura/cierre de modales y diálogos.
 * 
 * @param estadoInicial Indica si el modal inicia abierto (por defecto false)
 * @returns Objeto con estados y funciones de control en español
 */
export const usarModal = <T = unknown>(estadoInicial = false): UsarModalRetorno<T> => {
  const [abierto, setAbierto] = useState<boolean>(estadoInicial);
  const [datosModal, setDatosModal] = useState<T | null>(null);

  const abrirModal = useCallback((datos?: T) => {
    if (datos !== undefined) {
      setDatosModal(datos);
    }
    setAbierto(true);
  }, []);

  const cerrarModal = useCallback(() => {
    setAbierto(false);
    setDatosModal(null);
  }, []);

  const alternarModal = useCallback(() => {
    setAbierto((previo) => !previo);
  }, []);

  return {
    abierto,
    abrirModal,
    cerrarModal,
    alternarModal,
    datosModal,
  };
};

export default usarModal;
