import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lightbulb, 
  Target, 
  CheckCircle, 
  Play, 
  ArrowLeft, 
  ListOrdered,
  BookOpenCheck,
  BookMarked,
  AlertTriangle,
  Award
} from 'lucide-react';
import type { ContextoModuloExtendido } from '../../../../data/glosarioModulos';
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
  icono: React.ReactNode;
  nombreCategoria: string;
  duracionEstimada: string;
}

export interface DescripcionModuloProps {
  // Datos
  moduloInfo: ModuloInfoBasica;
  contenidoGrado: ContenidoGradoInfo;
  contextoExtendido?: ContextoModuloExtendido;
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
  contextoExtendido,
  gradoActual,
  nombreGradoLegible,
  gradosDisponibles = ['1ro', '2do', '3ro', '4to', '5to'],
  colorPrimario = '#0284c7',     // Azul Ciberseguridad
  colorSecundario = '#0369a1',   // Azul Oscuro
  rutaInicio = '/',
  rutaPresentacion = `/modulos/grado/${gradoActual}`,
  onCambiarGrado,
  onIniciarModulo,
  onVolver,
}) => {

  const estilosTematica = {
    '--color-primario': colorPrimario,
    '--color-secundario': colorSecundario,
  } as React.CSSProperties;

  return (
    <div className="descripcion-modulo-contenedor" style={estilosTematica}>

      <header className="banner-descripcion-modulo">
        <div className="contenedor-descripcion-modulo">
          
          <nav className="miga-pan-modulo" aria-label="Miga de pan">
            <Link to={rutaInicio}>Inicio</Link>
            <span className="separador">/</span>
            <Link to="/modulos">Módulos</Link>
            <span className="separador">/</span>
            <Link to={rutaPresentacion}>{nombreGradoLegible}</Link>
            <span className="separador">/</span>
            <span className="miga-activa">{moduloInfo.titulo}</span>
          </nav>

          <div className="bloque-cabecera-modulo">
            <div className="icono-modulo-gigante">
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
              <span className="subtitulo-bienvenida">Mensaje de Bienvenida ({nombreGradoLegible})</span>
              <p className="texto-mensaje-bienvenida">
                {contenidoGrado.mensajeBienvenida}
              </p>
            </div>
          </div>

          {/* Selector de Grados */}
          <div className="selector-grados-descripcion">
            <span className="texto-selector-grado">Cambiar explicación según tu año escolar:</span>
            <div className="grupo-botones-grados">
              {gradosDisponibles.map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`boton-grado-selector ${g === gradoActual ? 'activo' : ''}`}
                  onClick={() => onCambiarGrado(g)}
                >
                  {g} Año
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL EXTENDIDO */}
     <main className="seccion-cuerpo-descripcion estilo-ciberseguridad">
  <div className="contenedor-descripcion-modulo cuadricula-detalles-modulo">
    
    {/* COLUMNA IZQUIERDA: Toda la teoría */}
    <div className="columna-principal-modulo">
      
      {/* 1. ¿De qué se trata este módulo? */}
      {contextoExtendido && (
        <article className="bloque-tarjeta-descripcion tarjeta-ciberseguridad">
          <h2 className="titulo-bloque-descripcion">
            <BookOpenCheck className="icono-bloque" size={28} color="#0284c7" />
            ¿De qué trata este tema?
          </h2>
          <p className="texto-explicacion-breve" style={{ marginBottom: '1.25rem' }}>
            {contextoExtendido.queEsElTema}
          </p>
          <div className="caja-importancia-fundamental">
            <strong>🎯 Por qué es fundamental aprenderlo:</strong>
            <p>{contextoExtendido.porQueEsFundamental}</p>
          </div>
        </article>
      )}

      {/* 2. GLOSARIO */}
      {contextoExtendido && contextoExtendido.glosario.length > 0 && (
        <article className="bloque-tarjeta-descripcion tarjeta-ciberseguridad">
          <h2 className="titulo-bloque-descripcion">
            <BookMarked className="icono-bloque" size={28} color="#0284c7" />
            Glosario de Términos Clave
          </h2>
          <p className="subtitulo-bloque">
            Domina el vocabulario técnico de este módulo para comprender los conceptos en el entorno digital:
          </p>
          <div className="grid-glosario-terminos">
            {contextoExtendido.glosario.map((item, idx) => (
              <div key={idx} className="tarjeta-termino-glosario">
                <div className="cabecera-termino">
                  <span className="badge-termino">Término #{idx + 1}</span>
                  <h4>{item.termino}</h4>
                </div>
                <p className="definicion-termino">{item.definicion}</p>
                {item.ejemploPráctico && (
                  <div className="ejemplo-termino">
                    <strong>💡 Ejemplo:</strong> {item.ejemploPráctico}
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>
      )}

      {/* 3. Amenazas Comunes y Casos Reales */}
      {contextoExtendido && contextoExtendido.amenazasYCasos.length > 0 && (
        <article className="bloque-tarjeta-descripcion tarjeta-ciberseguridad tarjeta-amenazas">
          <h2 className="titulo-bloque-descripcion">
            <AlertTriangle className="icono-bloque" size={28} style={{ color: '#eab308' }} />
            Amenazas Frecuentes y Casos Reales
          </h2>
          <div className="grid-amenazas-casos">
            {contextoExtendido.amenazasYCasos.map((caso, idx) => (
              <div key={idx} className="caja-amenaza-caso">
                <h4>⚠️ {caso.titulo}</h4>
                <p>{caso.descripcion}</p>
              </div>
            ))}
          </div>
        </article>
      )}

      {/* 4. Enfoque y Objetivos para el Grado Seleccionado */}
      <article className="bloque-tarjeta-descripcion tarjeta-ciberseguridad">
        <h2 className="titulo-bloque-descripcion">
          <Lightbulb className="icono-bloque" size={28} color="#0284c7" />
          Enfoque de Aprendizaje para {nombreGradoLegible}
        </h2>
        <p className="texto-explicacion-breve" style={{ marginBottom: '1.5rem' }}>
          <strong>Enfoque {gradoActual} Año:</strong> {contenidoGrado.explicacionBreve}
        </p>

        <h3 className="subtitulo-objetivos">
          <Target size={22} color="#0284c7" /> Lo que aprenderás en {gradoActual} Año:
        </h3>
        <ul className="lista-objetivos-grado">
          {contenidoGrado.objetivos.map((objetivo, index) => (
            <li key={index} className="item-objetivo-grado">
              <CheckCircle className="icono-check" size={22} />
              <span>{objetivo}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* 5. Reglas de Oro de Ciberseguridad */}
      {contextoExtendido && contextoExtendido.reglasDeOro.length > 0 && (
        <article className="bloque-tarjeta-descripcion tarjeta-ciberseguridad tarjeta-reglas-oro">
          <h2 className="titulo-bloque-descripcion" style={{ color: '#15803d' }}>
            <Award className="icono-bloque" size={28} style={{ color: '#22c55e' }} />
            Reglas de Oro para tu Protección
          </h2>
          <ul className="lista-objetivos-grado">
            {contextoExtendido.reglasDeOro.map((regla, idx) => (
              <li key={idx} className="item-objetivo-grado">
                <ShieldCheck size={22} color="#22c55e" style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: 500, color: '#1e293b' }}>{regla}</span>
              </li>
            ))}
          </ul>
        </article>
      )}

    </div>

    {/* COLUMNA DERECHA: Solo Temario (sticky) */}
    <aside className="columna-lateral-modulo">
      <div className="tarjeta-temario-modulo">
        <h3 className="titulo-temario-modulo">
          <ListOrdered className="icono-temario" size={24} />
          Temario de {gradoActual} Año
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

  {/* SECCIÓN CTA FINAL: Botón para ir al módulo al final de toda la teoría */}
  <div className="seccion-cta-final">
    <div className="contenedor-cta">
      <ShieldCheck size={48} className="icono-cta" />
      <h3 className="titulo-cta">¿Listo para poner a prueba tus conocimientos?</h3>
      <p className="texto-cta">
        Accede a la lección práctica e interactiva adaptada para <strong>{nombreGradoLegible}</strong>.
        ¡Comienza ahora y conviértete en un experto en ciberseguridad!
      </p>
      <div className="caja-botones-accion">
        <Boton
          variante="ciberseguridad"
          tamano="grande"
          anchoCompleto
          onClick={onIniciarModulo}
        >
          <Play size={20} style={{ marginRight: '8px' }} />
          Iniciar Lección de {gradoActual} Año
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
  </div>
</main>

</div>



  );
};

export default DescripcionModuloUI;