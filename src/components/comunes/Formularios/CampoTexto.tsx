import React from 'react';
import './CampoTexto.css';

interface Props {
  etiqueta: string;
  nombre: string;
  valor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CampoTexto: React.FC<Props> = ({ etiqueta, nombre, valor, onChange }) => {
  return (
    <div className="campo-texto">
      <label htmlFor={nombre}>{etiqueta}</label>
      <input type="text" id={nombre} name={nombre} value={valor} onChange={onChange} />
    </div>
  );
};

export default CampoTexto;
