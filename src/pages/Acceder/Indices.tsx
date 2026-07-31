import React from "react";
import "./Indices.css";

const Indices: React.FC = () => {
    return (
        <div className="indices-contenedor">
            <h1>Índice de Módulos</h1>
            <div>
                <h2>Categorías Disponibles</h2>
                <ul>
                    <li>Auditorías</li>
                    <li>Phishing</li>
                    <li>Protección de Cuentas</li>
                    <li>Redes Sociales</li>
                    <li>Software Pirata</li>
                    <li>Videojuegos</li>
                </ul>
            </div>
        </div>
    );
};

export default Indices;
