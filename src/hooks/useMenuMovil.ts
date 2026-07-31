import { useState } from 'react';

export const useMenuMovil = () => {
  const [abierto, setAbierto] = useState(false);
  const toggle = () => setAbierto(!abierto);
  return { abierto, toggle };
};
