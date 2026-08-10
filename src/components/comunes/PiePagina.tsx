import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Mail } from 'lucide-react';
import './PiePagina.css';

/**
 * Componente de Pie de Página (Footer) institucional.
 */
const PiePagina: React.FC = () => {
    const anioActual = new Date().getFullYear();

    return (
        <footer className="pie-pagina" aria-label="Pie de página institucional">
            <div className="pie-contenedor">
                <div className="pie-cuadricula">
                    
                    {/* Columna 1: Identidad Institucional */}
                    <div className="pie-columna pie-columna-marca">
                        <div className="pie-marca">
                            <GraduationCap className="pie-logo-icono" size={28} />
                            <span className="pie-titulo">L.B. Antonio Lemus Pérez</span>
                        </div>
                        <p className="pie-descripcion">
                            Comunidad Educativa comprometida con la formación integral, la moral y las luces de nuestros estudiantes.
                        </p>
                    </div>

                    {/* Columna 2: Navegación Rápida */}
                    <div className="pie-columna">
                        <h4 className="pie-encabezado">Enlaces Rápidos</h4>
                        <ul className="pie-lista">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/modulos">Manual Digital</Link></li>
                            <li><Link to="/guias/docentes">Guías para Docentes</Link></li>
                            <li><Link to="/guias/padres">Guías para Padres</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Ubicación y Contacto */}
                    <div className="pie-columna">
                        <h4 className="pie-encabezado">Ubicación y Contacto</h4>
                        <ul className="pie-lista-contacto">
                            <li>
                                <MapPin size={18} className="icono-contacto" />
                                <span>Cumaná, Estado Sucre, Venezuela</span>
                            </li>
                            <li>
                                <Mail size={18} className="icono-contacto" />
                                <span>contacto@lemusperez.edu.ve</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Sub-footer / Derechos y Créditos */}
                <div className="pie-inferior">
                    <p className="pie-derechos">
                        © {anioActual} Liceo Bolivariano "Antonio Lemus Pérez". Todos los derechos reservados.
                    </p>
                    <Link to="/nosotros/sobre-devs" className="pie-creditos">
                        Desarrollado por: Cordova / Guipe / Giraldo / Ruiz
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default PiePagina;