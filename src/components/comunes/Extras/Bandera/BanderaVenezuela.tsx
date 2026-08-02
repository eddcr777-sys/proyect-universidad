import React from "react";
import './BanderaVenezuela.css';

export const BanderaVenezuela: React.FC = () => {
    return (
        <><div className="linea-bandera-venezuela" aria-hidden="true">
            <div className="franja-linea amarillo"></div>
            <div className="franja-linea azul">
                {/* 8 Estrellas sutiles centradas */}
                <span className="estrellas-linea">★ ★ ★ ★ ★ ★ ★ ★</span>
            </div>
            <div className="franja-linea rojo"></div>
        </div></>
        
    );
};