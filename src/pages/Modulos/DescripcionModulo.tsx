import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CATALAGO_MODULOS, DICCIONARIO_GRADOS, GradoEscolar } from '../../data/datosModulos';
import Boton from '../../components/comunes/Botones/Boton';
import './DescripcionModulo.css';

/**
 * Pantalla de Descripción del Módulo adaptada por Grado Escolar.
 * Muestra el mensaje de bienvenida dinámico (Grado + Categoría + Módulo), 
 * la explicación breve del grado, los objetivos y las lecciones.
 */
export const DescripcionModulo: React.FC = () => {
  const { moduloId, grado } = useParams<{ moduloId?: string; grado?: string }>();
  const navigate = useNavigate();

  // Obtener la información del catálogo estático local
  const idValido = moduloId && CATALAGO_MODULOS[moduloId] ? moduloId : 'phishing';
  const moduloInfo = CATALAGO_MODULOS[idValido];

  // Validar y normalizar el grado escolar
  const gradoActual: GradoEscolar = (
    grado && ['1ro', '2do', '3ro', '4to', '5to'].includes(grado)
      ? grado
      : '1ro'
  ) as GradoEscolar;

  const contenidoGrado = moduloInfo.grados[gradoActual];
  const nombreGradoLegible = DICCIONARIO_GRADOS[gradoActual];

  const cambiarGrado = (nuevoGrado: GradoEscolar) => {
    navigate(`/modulos/${idValido}/${nuevoGrado}`);
  };

  return (
    <div className="descripcion-modulo-contenedor">
      {/* Banner Principal de Bienvenida del Módulo */}
      <header className="banner-descripcion-modulo">
        <div className="contenedor-descripcion-modulo">
          {/* Navegación Miga de Pan (Breadcrumb) */}
          <nav className="miga-pan-modulo" aria-label="Miga de pan">
            <Link to="/">Inicio</Link>
            <span className="separador">/</span>
            <Link to={`/presentacion/${gradoActual}`}>Módulos {gradoActual} Año</Link>
            <span className="separador">/</span>
            <span className="miga-activa">{moduloInfo.titulo}</span>
          </nav>

          {/* Encabezado con Icono e Insignias */}
          <div className="bloque-cabecera-modulo">
            <div className="icono-modulo-gigante">
              <span className="material-symbols-outlined">{moduloInfo.icono}</span>
            </div>

            <div className="titulos-cabecera-modulo">
              <div className="insignias-modulo-grupo">
                <span className="insignia-categoria-modulo">{moduloInfo.nombreCategoria}</span>
                <span className="insignia-grado-modulo">{nombreGradoLegible}</span>
                <span className="insignia-duracion-modulo">⏱ {moduloInfo.duracionEstimada}</span>
              </div>

              <h1 className="titulo-principal-modulo">{moduloInfo.titulo}</h1>
            </div>
          </div>

          {/* Caja con Mensaje de Bienvenida Personalizado */}
          <div className="caja-mensaje-bienvenida">
            <div className="icono-bienvenida-alerta">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <div className="texto-bienvenida-contenedor">
              <span className="subtitulo-bienvenida">Mensaje de Bienvenida</span>
              <p className="texto-mensaje-bienvenida">
                {contenidoGrado.mensajeBienvenida}
              </p>
            </div>
          </div>

          {/* Selector de Grados para alternar nivel */}
          <div className="selector-grados-descripcion">
            <span className="texto-selector-grado">Ver explicación para otro grado:</span>
            <div className="grupo-botones-grados">
              {(['1ro', '2do', '3ro', '4to', '5to'] as GradoEscolar[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`boton-grado-selector ${g === gradoActual ? 'activo' : ''}`}
                  onClick={() => cambiarGrado(g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal de la Descripción */}
      <main className="seccion-cuerpo-descripcion">
        <div className="contenedor-descripcion-modulo cuadricula-detalles-modulo">
          {/* Columna Izquierda: Explicación y Objetivos */}
          <div className="columna-principal-modulo">
            {/* Explicación Didáctica para el Grado */}
            <article className="bloque-tarjeta-descripcion">
              <h2 className="titulo-bloque-descripcion">
                <span className="material-symbols-outlined icono-bloque">lightbulb</span>
                Explicación del Módulo para {gradoActual} Año
              </h2>
              <p className="texto-explicacion-breve">
                {contenidoGrado.explicacionBreve}
              </p>
            </article>

            {/* Objetivos Pedagógicos del Grado */}
            <article className="bloque-tarjeta-descripcion">
              <h2 className="titulo-bloque-descripcion">
                <span className="material-symbols-outlined icono-bloque">target</span>
                Lo que aprenderás en este grado
              </h2>
              <ul className="lista-objetivos-grado">
                {contenidoGrado.objetivos.map((objetivo, index) => (
                  <li key={index} className="item-objetivo-grado">
                    <span className="material-symbols-outlined icono-check">check_circle</span>
                    <span>{objetivo}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Columna Derecha: Temario de Lecciones y Panel de Acción */}
          <aside className="columna-lateral-modulo">
            <div className="tarjeta-panel-accion">
              <h3 className="titulo-panel-accion">¿Listo para comenzar?</h3>
              <p className="texto-panel-accion">
                Accede a la lección práctica y pon a prueba tus conocimientos sobre {moduloInfo.titulo.toLowerCase()}.
              </p>

              {/* Botón de Iniciar Módulo */}
              <div className="caja-botones-accion">
                <Boton
                  variante="ciberseguridad"
                  tamano="grande"
                  anchoCompleto
                  onClick={() => navigate(`/modulos/${idValido}/aprender/${gradoActual}`)}
                >
                  <span className="material-symbols-outlined" style={{ marginRight: '8px' }}>play_arrow</span>
                  Iniciar Módulo
                </Boton>

                <Boton
                  variante="secundario"
                  tamano="mediano"
                  anchoCompleto
                  onClick={() => navigate(`/presentacion/${gradoActual}`)}
                >
                  <span className="material-symbols-outlined" style={{ marginRight: '8px' }}>arrow_back</span>
                  Volver a Módulos de {gradoActual}
                </Boton>
              </div>
            </div>

            {/* Temario del Grado */}
            <div className="tarjeta-temario-modulo">
              <h3 className="titulo-temario-modulo">
                <span className="material-symbols-outlined icono-temario">format_list_bulleted</span>
                Temas de {gradoActual} Año
              </h3>
              <ol className="lista-temas-grado">
                {contenidoGrado.temas.map((tema, idx) => (
                  <li key={idx} className="item-tema-grado">
                    <span className="numero-tema">{idx + 1}</span>
                    <span className="texto-tema">{tema}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default DescripcionModulo;
