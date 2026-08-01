import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CATALAGO_MODULOS, DICCIONARIO_GRADOS, GradoEscolar } from '../../data/datosModulos';
import Boton from '../../components/comunes/Botones/Boton';
import './PresentacionGrado.css';

/**
 * Pantalla de Presentación del Grado Escolar (1ro a 5to Año).
 * Muestra todos los módulos pedagógicos adaptados al grado seleccionado.
 */
export const PresentacionGrado: React.FC = () => {
  const { grado } = useParams<{ grado?: string }>();
  const navigate = useNavigate();

  // Validar y normalizar el grado escolar desde los parámetros
  const gradoActual: GradoEscolar = (
    grado && ['1ro', '2do', '3ro', '4to', '5to'].includes(grado) 
      ? grado 
      : '1ro'
  ) as GradoEscolar;

  const nombreGradoLegible = DICCIONARIO_GRADOS[gradoActual] || '1er Año';
  const listaModulos = Object.values(CATALAGO_MODULOS);

  const cambiarGrado = (nuevoGrado: GradoEscolar) => {
    navigate(`/presentacion/${nuevoGrado}`);
  };

  return (
    <div className="presentacion-grado-contenedor">
      {/* Banner Superior de Bienvenida al Grado */}
      <section className="banner-presentacion-grado">
        <div className="contenedor-presentacion-grado">
          <div className="etiqueta-bienvenida-grado">
            <span className="material-symbols-outlined icono-etiqueta">school</span>
            <span>Ruta de Aprendizaje Digital</span>
          </div>

          <h1 className="titulo-presentacion-grado">
            Módulos de Ciberseguridad para {nombreGradoLegible}
          </h1>

          <p className="descripcion-presentacion-grado">
            ¡Bienvenido al portal institucional del Liceo Bolivariano "Antonio Lemus Pérez"! 
            Aquí encontrarás los módulos preparados especialmente para tu nivel escolar. 
            Selecciona un módulo para ver su descripción y comenzar tu lección.
          </p>

          {/* Selector Rápido de Grado */}
          <div className="selector-grados-pestanas">
            {(['1ro', '2do', '3ro', '4to', '5to'] as GradoEscolar[]).map((g) => (
              <button
                key={g}
                type="button"
                className={`pestana-grado ${g === gradoActual ? 'pestana-grado-activa' : ''}`}
                onClick={() => cambiarGrado(g)}
              >
                {g} Año
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Módulos del Grado */}
      <section className="seccion-modulos-grado">
        <div className="contenedor-presentacion-grado">
          <div className="encabezado-seccion-modulos">
            <div>
              <h2 className="titulo-seccion-modulos">Tus Módulos de {gradoActual} Año</h2>
              <p className="subtitulo-seccion-modulos">
                Explora cada tema adaptado a tus necesidades académicas y de protección en internet.
              </p>
            </div>
            <div className="insignia-conteo-modulos">
              {listaModulos.length} Módulos Disponibles
            </div>
          </div>

          {/* Cuadrícula de Tarjetas de Módulo */}
          <div className="cuadricula-tarjetas-modulo">
            {listaModulos.map((modulo) => {
              const contenidoDelGrado = modulo.grados[gradoActual];

              return (
                <div key={modulo.id} className="tarjeta-modulo-grado">
                  {/* Cabecera de la Tarjeta */}
                  <div className="tarjeta-modulo-cabecera">
                    <div className="tarjeta-modulo-icono">
                      <span className="material-symbols-outlined">{modulo.icono}</span>
                    </div>
                    <div className="tarjeta-modulo-categoria">
                      {modulo.nombreCategoria}
                    </div>
                  </div>

                  {/* Cuerpo de la Tarjeta */}
                  <div className="tarjeta-modulo-cuerpo">
                    <h3 className="tarjeta-modulo-titulo">{modulo.titulo}</h3>
                    
                    <div className="caja-bienvenida-corta">
                      <p className="texto-bienvenida-corta">
                        <strong>Para {gradoActual} Año:</strong> {contenidoDelGrado.explicacionBreve}
                      </p>
                    </div>

                    <div className="detalles-rapidos-modulo">
                      <span className="item-detalle-rapido">
                        <span className="material-symbols-outlined icono-mini">schedule</span>
                        {modulo.duracionEstimada}
                      </span>
                      <span className="item-detalle-rapido">
                        <span className="material-symbols-outlined icono-mini">checklist</span>
                        {contenidoDelGrado.temas.length} Lecciones
                      </span>
                    </div>
                  </div>

                  {/* Pie de la Tarjeta con Botón de Acción */}
                  <div className="tarjeta-modulo-pie">
                    <Boton
                      variante="ciberseguridad"
                      tamano="mediano"
                      anchoCompleto
                      onClick={() => navigate(`/modulos/${modulo.id}/${gradoActual}`)}
                    >
                      Ver Descripción del Módulo
                    </Boton>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enlace de Retorno */}
          <div className="caja-pie-retorno">
            <Link to="/" className="enlace-volver-inicio">
              <span className="material-symbols-outlined">arrow_back</span>
              Volver a la Página Principal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PresentacionGrado;
