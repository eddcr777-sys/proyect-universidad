import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Code, BookOpen, Layers, Users, FileText } from 'lucide-react';
import './HeaderProyecto.css';

interface EnlaceNavegacionProyecto {
  label: string;
  ruta: string;
  icono?: React.ReactNode;
}

interface HeaderProyectoProps {
  titulo: string;
  categoria: string;
  descripcion: string;
  autores: string;
  icono?: 'ShieldCheck' | 'Code' | string;
  colorTema?: string;
  enlacesSubNav?: EnlaceNavegacionProyecto[];
  imagenFondo?: string;
}

/**
 * Componente de encabezado de identidad propia para cada proyecto estudiantil.
 * Muestra el banner, metadatos, imagen temática y barra de sub-navegación propia del proyecto.
 */
const HeaderProyecto: React.FC<HeaderProyectoProps> = ({
  titulo,
  categoria,
  descripcion,
  autores,
  icono = 'ShieldCheck',
  enlacesSubNav = [],
  imagenFondo
}) => {
  const location = useLocation();

  return (
    <div className="header-proyecto-contenedor">
      <div
        className="header-proyecto-banner"
        style={imagenFondo ? { backgroundImage: `url(${imagenFondo})` } : undefined}
      >
        <div className="header-proyecto-overlay" />
        <div className="contenedor header-proyecto-contenido">
          <div className="header-proyecto-meta">
            <span className="badge-categoria-proyecto">
              {icono === 'ShieldCheck' && <ShieldCheck size={16} />}
              {icono === 'Code' && <Code size={16} />}
              <span>{categoria}</span>
            </span>
            <span className="badge-autores-proyecto">
              <Users size={14} />
              <span>{autores}</span>
            </span>
          </div>

          <h1 className="titulo-proyecto-header">{titulo}</h1>
          <p className="descripcion-proyecto-header">{descripcion}</p>
        </div>
      </div>

      {/* Sub-Navegación propia del Proyecto */}
      {enlacesSubNav.length > 0 && (
        <nav className="header-proyecto-subnav" aria-label="Navegación interna del proyecto">
          <div className="contenedor subnav-flex">
            {enlacesSubNav.map((enlace, index) => {
              const esActivo = location.pathname === enlace.ruta;
              return (
                <Link
                  key={index}
                  to={enlace.ruta}
                  className={`subnav-item ${esActivo ? 'activo' : ''}`}
                >
                  {enlace.icono}
                  <span>{enlace.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
};

export default HeaderProyecto;
