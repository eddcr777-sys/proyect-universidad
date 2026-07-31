import { useState, useCallback } from 'react';

/**
 * Interfaz para el retorno del hook usarAlternar
 */
export interface UsarAlternarRetorno {
  /** Valor booleano actual */
  valor: boolean;
  /** Función para invetir el valor (true -> false, false -> true) */
  alternar: () => void;
  /** Función para establecer explícitamente en true */
  activar: () => void;
  /** Función para establecer explícitamente en false */
  desactivar: () => void;
  /** Función para establecer un valor booleano directo */
  establecerValor: (nuevoValor: boolean) => void;
}

/**
 * Hook reutilizable para gestionar estados booleanos simples (toggles, menús desplegables, visibilidad).
 * 
 * @param valorInicial Estado booleano inicial (por defecto false)
 * @returns Objeto con estado y funciones de control en español
 */
export const usarAlternar = (valorInicial = false): UsarAlternarRetorno => {
  const [valor, setValor] = useState<boolean>(valorInicial);

  const alternar = useCallback(() => {
    setValor((previo) => !previo);
  }, []);

  const activar = useCallback(() => {
    setValor(true);
  }, []);

  const desactivar = useCallback(() => {
    setValor(false);
  }, []);

  const establecerValor = useCallback((nuevoValor: boolean) => {
    setValor(Boolean(nuevoValor));
  }, []);

  return {
    valor,
    alternar,
    activar,
    desactivar,
    establecerValor,
  };
};

export default usarAlternar;
