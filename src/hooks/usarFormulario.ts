import { useState, useCallback, type ChangeEvent } from 'react';

/**
 * Interfaz para el retorno del hook usarFormulario
 */
export interface UsarFormularioRetorno<T> {
  /** Valores actuales de los campos del formulario */
  valores: T;
  /** Manejador genérico para eventos onChange de inputs, select, textarea */
  manejarCambio: (evento: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  /** Función para actualizar un campo específico manualmente */
  establecerValorCampo: (nombre: keyof T, valor: unknown) => void;
  /** Función para establecer todo el objeto de valores */
  establecerValores: (nuevosValores: Partial<T> | T) => void;
  /** Función para reiniciar el formulario a sus valores iniciales */
  reiniciarFormulario: () => void;
}

/**
 * Hook reutilizable para gestionar el estado de formularios en React.
 * 
 * @param valoresIniciales Objeto con los valores iniciales del formulario
 * @returns Objeto con estados y manejadores del formulario en español
 */
export const usarFormulario = <T extends Record<string, unknown>>(valoresIniciales: T): UsarFormularioRetorno<T> => {
  const [valores, setValores] = useState<T>(valoresIniciales);

  /**
   * Maneja el cambio de inputs HTML automáticamente según 'name' y 'value' (o 'checked')
   */
  const manejarCambio = useCallback((evento: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = evento.target;
    
    let valorFinal: unknown = value;
    if (type === 'checkbox' && 'checked' in evento.target) {
      valorFinal = (evento.target as HTMLInputElement).checked;
    } else if (type === 'number') {
      valorFinal = value === '' ? '' : Number(value);
    }

    setValores((valoresPrevios) => ({
      ...valoresPrevios,
      [name]: valorFinal,
    }));
  }, []);

  /**
   * Establece el valor de un campo puntual
   */
  const establecerValorCampo = useCallback((nombre: keyof T, valor: unknown) => {
    setValores((valoresPrevios) => ({
      ...valoresPrevios,
      [nombre]: valor,
    }));
  }, []);

  /**
   * Actualiza múltiples campos o todo el formulario
   */
  const establecerValores = useCallback((nuevosValores: Partial<T> | T) => {
    setValores((valoresPrevios) => ({
      ...valoresPrevios,
      ...nuevosValores,
    }));
  }, []);

  /**
   * Restablece los valores al estado inicial
   */
  const reiniciarFormulario = useCallback(() => {
    setValores(valoresIniciales);
  }, [valoresIniciales]);

  return {
    valores,
    manejarCambio,
    establecerValorCampo,
    establecerValores,
    reiniciarFormulario,
  };
};

export default usarFormulario;
