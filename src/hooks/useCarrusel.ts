import { useState } from 'react';

export const useCarrusel = (totalElementos: number) => {
  const [indiceActual, setIndiceActual] = useState(0);

  const siguiente = () => {
    setIndiceActual((prev) => (prev + 1) % totalElementos);
  };

  const anterior = () => {
    setIndiceActual((prev) => (prev - 1 + totalElementos) % totalElementos);
  };

  const irAIndice = (indice: number) => {
    if (indice >= 0 && indice < totalElementos) {
      setIndiceActual(indice);
    }
  };

  return {
    indiceActual,
    siguiente,
    anterior,
    irAIndice,
  };
};