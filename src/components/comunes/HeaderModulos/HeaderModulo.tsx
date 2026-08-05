import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, ShieldCheck } from "lucide-react";
import "./HeaderModulo.css";

/**
 * Propiedades para el componente HeaderModulo
 */
export interface HeaderModuloProps {
  titulo: string;
  subTitulo: string;
  grado: string;
  modulo: string;
  icono?: string;
  img?: string;
  categoria?: string;
  tiempoEstimado?: string;
  mostrarBotonVolver?: boolean;
}

/**
 * Componente de Encabezado Reutilizable para Páginas de Módulos Educativos.
 * Incluye insignias de grado, navegación de retorno e información resumida.
 */
export const HeaderModulo: React.FC<HeaderModuloProps> = ({
  titulo,
  subTitulo,
  grado,
  modulo,
  icono = "🛡️",
  img,
  categoria = "Ciberseguridad",
  tiempoEstimado = "15-20 min",
  mostrarBotonVolver = true,
}) => {
  return (
    <header className="header-modulo-contenedor">
      {/* Botón de retorno al panel del grado */}
      {mostrarBotonVolver && (
        <div className="header-modulo-navegacion">
          <Link to={`/presentacion/${grado}`} className="boton-volver-grado">
            <ArrowLeft size={18} />
            <span>Volver a la Presentación de {grado} Año</span>
          </Link>
        </div>
      )}

      <div className="header-modulo-tarjeta">
        <div className="header-modulo-info">
          {/* Insignias de Grado, Módulo y Categoría */}
          <div className="header-modulo-etiquetas">
            <span className="etiqueta-grado">{grado} Año</span>
            <span className="etiqueta-modulo">Módulo {modulo}</span>
            <span className="etiqueta-categoria">
              <ShieldCheck size={14} /> {categoria}
            </span>
          </div>

          {/* Título e Ícono */}
          <div className="header-modulo-titulo-container">
            <span className="header-modulo-icono" role="img" aria-label="Icono del módulo">
              {icono}
            </span>
            <h1 className="header-modulo-titulo">{titulo}</h1>
          </div>

          {/* Subtítulo descriptivo */}
          <p className="header-modulo-subtitulo">{subTitulo}</p>

          {/* Metadatos adicionales (Duración estimada) */}
          <div className="header-modulo-metadatos">
            <span className="item-metadato">
              <Clock size={16} /> Duración: {tiempoEstimado}
            </span>
            <span className="item-metadato">
              <BookOpen size={16} /> Lección Teórico-Práctica
            </span>
          </div>
        </div>

        {/* Imagen o Ilustración opcional */}
        {img && (
          <div className="header-modulo-imagen-container">
            <img src={img} alt={`Ilustración del módulo ${titulo}`} className="header-modulo-img" />
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderModulo;