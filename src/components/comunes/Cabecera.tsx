import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useMenuMovil } from '../../hooks/useMenuMovil';
import NavegacionEscritorio from './Navegacion/NavegacionEscritorio';
import DrawerMovil from './Navegacion/DrawerMovil';
import './Cabecera.css';


const Cabecera: React.FC = () => {
  const { abierto, toggle } = useMenuMovil();
  const location = useLocation();
  const [desplazado, setDesplazado] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      if (window.scrollY > 40) {
        setDesplazado(true);
      } else {
        setDesplazado(false);
      }
    };

    window.addEventListener('scroll', manejarScroll, { passive: true });
    manejarScroll(); // Verificar estado inicial

    return () => {
      window.removeEventListener('scroll', manejarScroll);
    };
  }, []);

  // Transparente en todas las páginas al inicio, sólida al hacer scroll
  const esTransparente = !desplazado && !abierto;

  return (
    <header
      className={`cabecera ${esTransparente ? 'cabecera-transparente' : 'cabecera-solida'}`}
      aria-label="Encabezado principal"
    >
      <div className="cabecera-contenedor">
        
        {/* Identidad / Logo */}
        <Link to="/" className="cabecera-logo" aria-label="Ir al inicio">
          <GraduationCap size={28} className="cabecera-logo-icono" />
          <div className="cabecera-logo-texto">
            <span className="cabecera-titulo">L.B. Antonio Lemus Pérez</span>
            <span className="cabecera-subtitulo">Plataforma Digital Escolar</span>
          </div>
        </Link>

        {/* Navegación Escritorio */}
        <div className="nav-wrapper">
          <NavegacionEscritorio esTransparente={esTransparente} />
        </div>

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

      {/* Menú Desplegable Móvil */}
      <DrawerMovil abierto={abierto} cerrar={toggle} />
    </header>
  );
};

export default Cabecera;