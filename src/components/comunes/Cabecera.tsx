import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import escudoLiceo from '../../assets/lbefd.png';
import { useMenuMovil } from '../../hooks/useMenuMovil';
import NavegacionEscritorio from './Navegacion/NavegacionEscritorio';
import DrawerMovil from './Navegacion/DrawerMovil';
import './Cabecera.css';

/**
 * Cabecera institucional escolar venezolana:
 * - Cintillo tricolor (amarillo, azul, rojo) en la parte superior
 * - Identidad centrada: escudo + nombre completo + municipio
 * - Navegación escritorio a la izquierda
 * - Botón menú móvil a la derecha
 */
const Cabecera: React.FC = () => {
  const { abierto, toggle } = useMenuMovil();

  return (
    <>
      {/* Cintillo tricolor venezolano */}
      <div className="cintillo-tricolor" aria-hidden="true">
        <span className="cintillo-franja cintillo-amarillo" />
        <span className="cintillo-franja cintillo-azul" />
        <span className="cintillo-franja cintillo-rojo" />
      </div>

      <header
        className="cabecera cabecera-solida"
        aria-label="Encabezado principal"
      >
        <div className="cabecera-contenedor">
           <Link to="/" className="cabecera-logo" aria-label="Ir al inicio">
            <div className="cabecera-escudo-caja" aria-hidden="true">
              <img
                src={escudoLiceo}
                alt="Escudo C.E. Antonio Lemus Pérez"
                className="cabecera-escudo-img"
              />
            </div>
            <div className="cabecera-logo-texto">
              <span className="cabecera-titulo">C.E. Antonio Lemus Pérez</span>
              <span className="cabecera-subtitulo">Parroquia Altagracia · Cumaná · Venezuela</span>
            </div>
          </Link>


          {/* IZQUIERDA — Navegación escritorio */}
          <div className="nav-wrapper">
            <NavegacionEscritorio esTransparente={false} />
          </div>

          {/* CENTRO — Identidad institucional */}
      
          {/* DERECHA — Acciones / Menú móvil */}
          <div className="cabecera-derecha-acciones">
          
            <button
              className="menu-hamburguesa"
              onClick={toggle}
              aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={abierto}
            >
              {abierto ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Menú Desplegable Móvil */}
        <DrawerMovil abierto={abierto} cerrar={toggle} />
      </header>
    </>
  );
};

export default Cabecera;