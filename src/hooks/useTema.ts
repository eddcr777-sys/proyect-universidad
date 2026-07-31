import { useState, useEffect, useCallback } from 'react';

/**
 * Interfaz para el retorno del hook de gestión de temas
 */
export interface UsarTemaRetorno {
  /** Indica si el modo oscuro está activo */
  esOscuro: boolean;
  /** Indica si la temática de ciberseguridad está activa */
  esCiberseguridad: boolean;
  /** Alterna entre modo claro y modo oscuro */
  toggleTema: () => void;
  /** Alterna entre modo claro y modo oscuro */
  alternarModoOscuro: () => void;
  /** Alterna la temática visual de ciberseguridad */
  alternarCiberseguridad: (activar?: boolean) => void;
  /** Establece explícitamente si es modo oscuro */
  establecerModoOscuro: (esOscuro: boolean) => void;
}

/**
 * Hook reutilizable para controlar el tema de la aplicación (Modo Claro/Oscuro y variante Ciberseguridad).
 * Mantiene compatibilidad total con el hook previo `useTema`.
 */
export const usarTema = (): UsarTemaRetorno => {
  const [esOscuro, setEsOscuro] = useState<boolean>(() => {
    // Comprobar preferencia previa guardada o clase previa en document
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             document.body.classList.contains('dark-mode');
    }
    return false;
  });

  const [esCiberseguridad, setEsCiberseguridad] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.body.classList.contains('tema-ciberseguridad');
    }
    return false;
  });

  useEffect(() => {
    // Sincronizar clases globales con el documento
    if (esOscuro) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode');
    }
  }, [esOscuro]);

  useEffect(() => {
    if (esCiberseguridad) {
      document.body.classList.add('tema-ciberseguridad');
    } else {
      document.body.classList.remove('tema-ciberseguridad');
    }
  }, [esCiberseguridad]);

  const toggleTema = useCallback(() => {
    setEsOscuro((previo) => !previo);
  }, []);

  const alternarModoOscuro = toggleTema;

  const establecerModoOscuro = useCallback((valor: boolean) => {
    setEsOscuro(Boolean(valor));
  }, []);

  const alternarCiberseguridad = useCallback((activar?: boolean) => {
    setEsCiberseguridad((previo) => (activar !== undefined ? activar : !previo));
  }, []);

  return {
    esOscuro,
    esCiberseguridad,
    toggleTema,
    alternarModoOscuro,
    alternarCiberseguridad,
    establecerModoOscuro,
  };
};

/** Alias de compatibilidad con nomenclatura en inglés previa */
export const useTema = usarTema;

export default usarTema;
