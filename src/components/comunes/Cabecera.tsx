import React from 'react';
import { useMenuMovil } from '../../hooks/useMenuMovil';
import NavegacionEscritorio from './Navegacion/NavegacionEscritorio';
import DrawerMovil from './Navegacion/DrawerMovil';
import './Cabecera.css';

const Cabecera: React.FC = () => {
  const { abierto, toggle } = useMenuMovil();

  return (
    <header className="cabecera">
      <div className="logo">LB-LEMUS</div>
      
      <button 
        className="menu-hamburguesa" 
        onClick={toggle} 
        aria-label="Abrir menú de navegación"
        aria-expanded={abierto}
      >
        ☰
      </button>
      
      <div className="nav-wrapper">
        <NavegacionEscritorio />
      </div>
      
      <DrawerMovil abierto={abierto} cerrar={toggle} />
    </header>
  );
};

export default Cabecera;
    