import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DrawerMovil.css';

interface Props {
  abierto: boolean;
  cerrar: () => void;
}

const DrawerMovil: React.FC<Props> = ({ abierto, cerrar }) => {
  const [secciones, setSecciones] = useState({
    modulos: false,
    guias: false,
    nosotros: false
  });

  const alternarSeccion = (seccion: keyof typeof secciones) => {
    setSecciones(prev => ({ ...prev, [seccion]: !prev[seccion] }));
  };

  return (
    <div className={`drawer-overlay ${abierto ? 'activo' : ''}`} onClick={cerrar}>
      <nav className="drawer-contenido" onClick={e => e.stopPropagation()}>
        <button className="btn-cerrar" onClick={cerrar}>X</button>
        <Link to="/" onClick={cerrar}>Inicio</Link>

        {/* Módulos */}
        <div className="menu-seccion">
          <button className="btn-seccion" onClick={() => alternarSeccion('modulos')}>Módulos</button>
          {secciones.modulos && (
            <div className="sub-menu">
              <Link to="/modulos/auditorias" onClick={cerrar}>Auditorías</Link>
              <Link to="/modulos/phishing" onClick={cerrar}>Phishing</Link>
              <Link to="/modulos/manual-completo" onClick={cerrar}>Manual completo</Link>
              <Link to="/modulos/guia-defensa" onClick={cerrar}>Guía de defensa</Link>
            </div>
          )}
        </div>

        {/* Guías */}
        <div className="menu-seccion">
          <button className="btn-seccion" onClick={() => alternarSeccion('guias')}>Guías</button>
          {secciones.guias && (
            <div className="sub-menu">
              <Link to="/guias/docentes" onClick={cerrar}>Docentes</Link>
              <Link to="/guias/padres" onClick={cerrar}>Padres</Link>
            </div>
          )}
        </div>

        {/* Nosotros */}
        <div className="menu-seccion">
          <button className="btn-seccion" onClick={() => alternarSeccion('nosotros')}>Nosotros</button>
          {secciones.nosotros && (
            <div className="sub-menu">
              <Link to="/nosotros/sobre-ue" onClick={cerrar}>Sobre la U.E.</Link>
              <Link to="/nosotros/sobre-devs" onClick={cerrar}>Sobre los Desarrolladores</Link>
            </div>
          )}
        </div>

        
      </nav>
    </div>
  );
};
export default DrawerMovil;
