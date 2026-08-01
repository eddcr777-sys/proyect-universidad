import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useMenuMovil } from '../../hooks/useMenuMovil';
import NavegacionEscritorio from './Navegacion/NavegacionEscritorio';
import DrawerMovil from './Navegacion/DrawerMovil';
import './Cabecera.css';

const Cabecera: React.FC = () => {
  const { abierto, toggle } = useMenuMovil();

  return (
    <header className="cabecera" aria-label="Encabezado principal">
      <div className="cabecera-contenedor">
        
        {/* Identidad / Logo */}
        <Link to="/" className="cabecera-logo" aria-label="Ir al inicio">
          <GraduationCap size={28} className="cabecera-logo-icono" />
          <div className="cabecera-logo-texto">
            <span className="cabecera-titulo">L.B. Antonio Lemus Pérez</span>
            <span className="cabecera-subtitulo">Plataforma Digital</span>
          </div>
        </Link>

        {/* Navegación Escritorio */}
        <div className="nav-wrapper">
          <NavegacionEscritorio />
        </div>

        {/* Botón Menú Móvil con Lucide React */}
        <button 
          className="menu-hamburguesa" 
          onClick={toggle} 
          aria-label={abierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={abierto}
        >
          {abierto ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Menú Desplegable Móvil */}
      <DrawerMovil abierto={abierto} cerrar={toggle} />
    </header>
  );
};

export default Cabecera;