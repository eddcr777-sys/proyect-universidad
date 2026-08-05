import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lightbulb, 
  Target, 
  CheckCircle, 
  Play, 
  ArrowLeft, 
  ListOrdered 
} from 'lucide-react';
import Boton from '../../Botones/Boton';
import './DescripModuls.css';

export interface ContenidoGradoInfo {
  mensajeBienvenida: string;
  explicacionBreve: string;
  objetivos: string[];
  temas: string[];
}

export interface ModuloInfoBasica {
  titulo: string;
  icono: React.ReactNode; // Ahora recibe un componente de React (ej. <Shield />)
  nombreCategoria: string;
  duracionEstimada: string;
}

export interface DescripcionModuloProps {
  // Datos
  moduloInfo: ModuloInfoBasica;
  contenidoGrado: ContenidoGradoInfo;
  gradoActual: string;
  nombreGradoLegible: string;
  gradosDisponibles?: string[];
  
  // Colores dinámicos para CSS Variables
  colorPrimario?: string;
  colorSecundario?: string;
  
  // Rutas
  rutaInicio?: string;
  rutaPresentacion?: string;

  // Acciones
  onCambiarGrado: (nuevoGrado: string) => void;
  onIniciarModulo: () => void;
  onVolver: () => void;
}

export const DescripcionModuloUI: React.FC<DescripcionModuloProps> = ({
  moduloInfo,
  contenidoGrado,
  gradoActual,
  nombreGradoLegible,
  gradosDisponibles = ['1ro', '2do', '3ro', '4to', '5to'],
  colorPrimario = '#3b82f6',     // Azul (Por defecto)
  colorSecundario = '#1e40af',   // Azul oscuro (Por defecto)
  rutaInicio = '/',
  rutaPresentacion = `/presentacion/${gradoActual}`,
  onCambiarGrado,
  onIniciarModulo,
  onVolver,
}) => {

  // Inyectamos las variables CSS en el contenedor principal
  const estilosTematica = {
    '--color-primario': colorPrimario,
    '--color-secundario': colorSecundario,
  } as React.CSSProperties;

  return (
    <div className="descripcion-modulo-contenedor" style={estilosTematica}>
      {/* Banner Principal */}
      <header className="banner-descripcion-modulo">
        <div className="contenedor-descripcion-modulo">
          
          <nav className="miga-pan-modulo" aria-label="Miga de pan">
            <Link to={rutaInicio}>Inicio</Link>
            <span className="separador">/</span>
            <Link to={rutaPresentacion}>Módulos {gradoActual} Año</Link>
            <span className="separador">/</span>
            <span className="miga-activa">{moduloInfo.titulo}</span>
          </nav>

          <div className="bloque-cabecera-modulo">
            <div className="icono-modulo-gigante">
              {/* Aquí se renderiza el icono inyectado desde los datos */}
              {moduloInfo.icono}
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

          <div className="caja-mensaje-bienvenida">
            <div className="icono-bienvenida-alerta">
              <ShieldCheck size={32} />
            </div>
            <div className="texto-bienvenida-contenedor">
              <span className="subtitulo-bienvenida">Mensaje de Bienvenida</span>
              <p className="texto-mensaje-bienvenida">
                {contenidoGrado.mensajeBienvenida}
              </p>
            </div>
          </div>

          <div className="selector-grados-descripcion">
            <span className="texto-selector-grado">Ver explicación para otro grado:</span>
            <div className="grupo-botones-grados">
              {gradosDisponibles.map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`boton-grado-selector ${g === gradoActual ? 'activo' : ''}`}
                  onClick={() => onCambiarGrado(g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="seccion-cuerpo-descripcion">
        <div className="contenedor-descripcion-modulo cuadricula-detalles-modulo">
          
          {/* Columna Izquierda */}
          <div className="columna-principal-modulo">
            <article className="bloque-tarjeta-descripcion">
              <h2 className="titulo-bloque-descripcion">
                <Lightbulb className="icono-bloque" size={28} />
                Explicación del Módulo para {gradoActual} Año
              </h2>
              <p className="texto-explicacion-breve">
                {contenidoGrado.explicacionBreve}
              </p>
            </article>

            <article className="bloque-tarjeta-descripcion">
              <h2 className="titulo-bloque-descripcion">
                <Target className="icono-bloque" size={28} />
                Lo que aprenderás en este grado
              </h2>
              <ul className="lista-objetivos-grado">
                {contenidoGrado.objetivos.map((objetivo, index) => (
                  <li key={index} className="item-objetivo-grado">
                    <CheckCircle className="icono-check" size={24} />
                    <span>{objetivo}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Columna Derecha */}
          <aside className="columna-lateral-modulo">
            <div className="tarjeta-panel-accion">
              <h3 className="titulo-panel-accion">¿Listo para comenzar?</h3>
              <p className="texto-panel-accion">
                Accede a la lección práctica y pon a prueba tus conocimientos sobre {moduloInfo.titulo.toLowerCase()}.
              </p>

              <div className="caja-botones-accion">
                <Boton
                  variante="ciberseguridad"
                  tamano="grande"
                  anchoCompleto
                  onClick={onIniciarModulo}
                >
                  <Play size={20} style={{ marginRight: '8px' }} />
                  Iniciar Módulo
                </Boton>

                <Boton
                  variante="secundario"
                  tamano="mediano"
                  anchoCompleto
                  onClick={onVolver}
                >
                  <ArrowLeft size={20} style={{ marginRight: '8px' }} />
                  Volver a Módulos
                </Boton>
              </div>
            </div>

            <div className="tarjeta-temario-modulo">
              <h3 className="titulo-temario-modulo">
                <ListOrdered className="icono-temario" size={24} />
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

export default DescripcionModuloUI;