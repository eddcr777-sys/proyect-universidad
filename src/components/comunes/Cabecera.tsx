import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { useMenuMovil } from '../../hooks/useMenuMovil';
import NavegacionEscritorio from './Navegacion/NavegacionEscritorio';
import DrawerMovil from './Navegacion/DrawerMovil';
import './Cabecera.css';

/**
 * Cabecera institucional con diseño idéntico al estándar de Colegio Los Arcos:
 * - Fondo blanco limpio con línea de acento rojo institucional inferior
 * - Logo con escudo a la izquierda
 * - Navegación en mayúsculas sans-serif
 * - Ícono de usuario en el extremo derecho
 */
const Cabecera: React.FC = () => {
  const { abierto, toggle } = useMenuMovil();

  return (
    <header
      className="cabecera cabecera-solida"
      aria-label="Encabezado principal"
    >
      <div className="cabecera-contenedor">
        {/* Identidad / Logo estilo Los Arcos */}
        <Link to="/" className="cabecera-logo" aria-label="Ir al inicio">
        
          <div className="cabecera-logo-texto">
            <span className="cabecera-titulo">C.E. Antonio Lemus Pérez</span>
          </div>
        </Link>

        {/* Navegación Escritorio */}
        <div className="nav-wrapper">
          <NavegacionEscritorio esTransparente={false} />
        </div>

        {/* Acciones derecha / Botón Móvil */}
        <div className="cabecera-derecha-acciones">
          {/* Botón Menú Móvil */}
          <button
            className="menu-hamburguesa"
            onClick={toggle}
            aria-label={abierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={abierto}
          >
            {abierto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <DrawerMovil abierto={abierto} cerrar={toggle} />
    </header>
  );
};

export default Cabecera;