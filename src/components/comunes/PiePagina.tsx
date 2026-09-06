import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import './PiePagina.css';

/**
 * Componente de Pie de Página (Footer) institucional.
 */
const PiePagina: React.FC = () => {
    const anioActual = new Date().getFullYear();

    return (
         <footer className="pie-pagina">
                <div className="contenedor">
                  <div className="grid-pie">
                    <div className="pie-col">
                      <h4 className="pie-titulo">Liceo Bolivariano "Antonio Lemus Pérez"</h4>
                      <p className="pie-texto">
                        Institución educativa pública dedicada a la formación integral de la juventud sucrense desde 1984.
                      </p>
                      <div className="pie-contacto">
                        <p><MapPin size={16} /> Av. Las Industrias, Cumaná, Estado Sucre</p>
                        <p><Phone size={16} /> +58 (0293) 123-4567</p>
                        <p><Mail size={16} /> contacto@liceoalps.edu.ve</p>
                      </div>
                    </div>
                    <div className="pie-col pie-col-enlaces">
                      <h4 className="pie-titulo">Enlaces Rápidos</h4>
                      <ul className="pie-links">
                        <li><a href="#historia">Historia</a></li>
                        <li><a href="#labores">Labores</a></li>
                        <li><a href="#galeria">Galería</a></li>
                        <li><a href="#personal">Equipo</a></li>
                       
                      </ul>
                    </div>
                    <div className="pie-col pie-col-horario">
                      <h4 className="pie-titulo">Horario</h4>
                      <p className="pie-texto">
                        <Clock size={16} /> Lunes a Viernes: 7:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="pie-copy">
                    © 2026 Liceo Bolivariano "Antonio Lemus Pérez". Todos los derechos reservados.
                  </div>
                </div>
              </footer>
    );
};

export default PiePagina;