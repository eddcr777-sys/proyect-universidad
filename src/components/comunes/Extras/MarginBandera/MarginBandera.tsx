import React from 'react';
import './MarginBandera.css';

export const MarginBandera = () => {
  return (
  <div className="contenedor-separador-sutil">
      <div className="linea-desvanecida amarillo"></div>
      <div className="linea-desvanecida azul">
        <span className="puntos-estrellas">★ ★ ★ ★ ★ ★ ★ ★</span>
      </div>
      <div className="linea-desvanecida rojo"></div>
    </div>
  );
};