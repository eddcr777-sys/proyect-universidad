import React from 'react';
import './PlantillaPage.css';

/**
 * Componente plantilla para nuevos proyectos estudiantiles.
 * Los futuros estudiantes pueden usar este componente como punto de partida.
 */
const PlantillaPage: React.FC = () => {
  return (
    <div className="pagina-plantilla">
      <div className="contenedor-plantilla">
        <span className="etiqueta-plantilla">Proyecto Estudiantil</span>
        <h1 className="titulo-plantilla">Nombre de tu Proyecto Aquí</h1>
        <p className="descripcion-plantilla">
          Esta es la estructura base de tu nuevo proyecto. Puedes añadir componentes, 
          módulos de aprendizaje, experimentos o guías interactivas.
        </p>
        
        <div className="tarjeta-ejemplo-plantilla">
          <h3>Sección de Contenido</h3>
          <p>Sustituye este texto con la información principal de tu trabajo educativo.</p>
        </div>
      </div>
    </div>
  );
};

export default PlantillaPage;
