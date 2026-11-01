import React from 'react';
import { Shield } from 'lucide-react';
import './DivisorEditorial.css';

interface PropiedadesDivisorEditorial {
  texto?: string;
}

/**
 * Divisor editorial institucional con medallón central y líneas desvanecidas.
 * Diseñado para pausar y embellecer la transición entre secciones académicas.
 */
export const DivisorEditorial: React.FC<PropiedadesDivisorEditorial> = ({ texto }) => {
  return (
    <div className="divisor-editorial-contenedor" role="separator" aria-hidden="true">
      <div className="divisor-editorial-linea izquierda" />
      <div className="divisor-editorial-medallon">
    
        {texto && <span className="divisor-editorial-texto">{texto}</span>}
      </div>
      <div className="divisor-editorial-linea derecha" />
    </div>
  );
};

export default DivisorEditorial;
