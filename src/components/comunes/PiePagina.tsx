import React from 'react';
import './PiePagina.css';

/**
 * Componente de Pie de Página (Footer) reutilizable.
 */
const PiePagina: React.FC = () => {/* ==========================================================================
   VARIABLES GLOBALES Y TEMAS
   ========================================================================== */
    const anioActual = new Date().getFullYear();

    return (
        <footer className="pie-pagina">
            <div className="contenedor">
                <div className="cuadricula-pie">
                    <div className="columna-principal-pie">
                        <div className="marca-pie">
                            <div className="logo-pie">
                                <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>&#xe80c;</span>
                            </div>
                            <span className="titulo-pie">CE Antonio Lemus Pérez</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="encabezado-pie">Contacto</h4>
                        <p className="texto-pie">Cumaná, Estado Sucre, Venezuela.</p>
                    </div>
                </div>

                <div className="inferior-pie">
                    <p className="derechos-pie">
                        © {anioActual} Liceo Bolivariano Antonio Lemus Pérez. Todos los derechos reservados.
                    </p>
                    <a href="/nosotros" className="creditos-pie">
                        Desarrollado por: Cordova / Guipe / Giraldo / Ruiz
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default PiePagina;
