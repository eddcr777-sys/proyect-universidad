import React from 'react';
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
  moduloInfo: ModuloInfoBasica;
  contenidoGrado: ContenidoGradoInfo;
  contextoExtendido?: ContextoModuloExtendido;
  gradoActual: string;
  nombreGradoLegible: string;
  gradosDisponibles?: string[];
  colorPrimario?: string;
  colorSecundario?: string;
  rutaInicio?: string;
  rutaPresentacion?: string;
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
  onCambiarGrado,
  onIniciarModulo,
  onVolver,
}) => {
  return (
    <div className="portal-modulo-editorial">

      {/* ====================================================================
          1. HEADER CORPORATIVO (ESTILO FORTINET THREAT INTELLIGENCE)
          ==================================================================== */}
      <section className="hero-editorial-ciber">
        <div className="contenedor-editorial">
          
          <div className="hero-editorial-meta">
            <span className="categoria-ticker">DOCUMENTO TÉCNICO DE SEGURIDAD</span>
            <span className="separador-ticker">/</span>
            <span className="categoria-ticker">{nombreGradoLegible}</span>
          </div>

          <h1 className="hero-editorial-titulo">
            {moduloInfo.titulo}
          </h1>

          <p className="hero-editorial-bajada">
            {contenidoGrado.mensajeBienvenida}
          </p>

          <div className="hero-editorial-acciones">
            <button
              type="button"
              className="boton-editorial-primario"
              onClick={onIniciarModulo}
            >
              Iniciar Módulo Práctico ({gradoActual} Año)
            </button>
            <button
              type="button"
              className="boton-editorial-enlace"
              onClick={onVolver}
            >
              Volver al catálogo de módulos
            </button>
          </div>

        </div>
      </section>

      {/* ====================================================================
          2. SUB-BARRA DE NAVEGACIÓN Y SELECTOR DE GRADO (TABS LIMPIOS)
          ==================================================================== */}
      <nav className="subnav-grados-editorial" aria-label="Selección de grado escolar">
        <div className="contenedor-editorial subnav-grados-inner">
          <span className="subnav-titulo">Plan de estudio según año:</span>
          <div className="subnav-pestanas">
            {gradosDisponibles.map((g) => (
              <button
                key={g}
                type="button"
                className={`subnav-pestana-item ${g === gradoActual ? 'activa' : ''}`}
                onClick={() => onCambiarGrado(g)}
              >
                {g} Año
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ====================================================================
          3. CONTENIDO EDITORIAL WHITEPAPER (DOS COLUMNAS O LINEAL ESTRUCTURADO)
          ==================================================================== */}
      <div className="cuerpo-editorial-fondo">
        <div className="contenedor-editorial cuerpo-editorial-layout">

          {/* Columna Principal de Lectura */}
          <main className="articulo-editorial-principal">

            {/* SECCIÓN A: Definición y concepto */}
            {contextoExtendido && (
              <article className="seccion-editorial-articulo">
                <span className="seccion-rotulo">01. Fundamentos del tema</span>
                <h2 className="seccion-titulo-editorial">Definición conceptual y propósito</h2>
                <p className="parrafo-editorial">
                  {contextoExtendido.queEsElTema}
                </p>

                <div className="bloque-cita-editorial">
                  <h3 className="bloque-cita-titulo">Importancia estratégica</h3>
                  <p className="bloque-cita-texto">
                    {contextoExtendido.porQueEsFundamental}
                  </p>
                </div>
              </article>
            )}

            {/* SECCIÓN B: Objetivos específicos del grado */}
            <article className="seccion-editorial-articulo">
              <span className="seccion-rotulo">02. Nivel formativo</span>
              <h2 className="seccion-titulo-editorial">Enfoque pedagógico para {nombreGradoLegible}</h2>
              <p className="parrafo-editorial">
                {contenidoGrado.explicacionBreve}
              </p>

              <h3 className="subtitulo-editorial-medio">Competencias a desarrollar</h3>
              <ul className="lista-competencias-editorial">
                {contenidoGrado.objetivos.map((objetivo, idx) => (
                  <li key={idx} className="item-competencia-editorial">
                    <span className="indice-competencia">{String(idx + 1).padStart(2, '0')}.</span>
                    <span>{objetivo}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* SECCIÓN C: Temario del grado */}
            <article className="seccion-editorial-articulo">
              <span className="seccion-rotulo">03. Contenido programático</span>
              <h2 className="seccion-titulo-editorial">Temario oficial de {gradoActual} Año</h2>
              
              <div className="tabla-temario-editorial">
                {contenidoGrado.temas.map((tema, idx) => (
                  <div key={idx} className="fila-temario-editorial">
                    <span className="col-modulo-idx">Módulo {String(idx + 1).padStart(2, '0')}</span>
                    <span className="col-modulo-nombre">{tema}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* SECCIÓN D: Glosario Técnico */}
            {contextoExtendido && contextoExtendido.glosario.length > 0 && (
              <article className="seccion-editorial-articulo">
                <span className="seccion-rotulo">04. Terminología de seguridad</span>
                <h2 className="seccion-titulo-editorial">Glosario de conceptos técnicos</h2>
                <p className="parrafo-editorial-guia">
                  Definiciones estándar utilizadas en la industria de ciberseguridad para este dominio:
                </p>

                <div className="lista-glosario-editorial">
                  {contextoExtendido.glosario.map((item, idx) => (
                    <div key={idx} className="termino-editorial-item">
                      <div className="termino-editorial-encabezado">
                        <span className="termino-editorial-nombre">{item.termino}</span>
                      </div>
                      <p className="termino-editorial-def">
                        <strong>Definición:</strong> {item.definicion}
                      </p>
                      {item.paraQueSirve && (
                        <p className="termino-editorial-funcion">
                          <strong>Aplicación técnica:</strong> {item.paraQueSirve}
                        </p>
                      )}
                      {item.ejemploPráctico && (
                        <p className="termino-editorial-ejemplo">
                          <strong>Escenario real:</strong> {item.ejemploPráctico}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            )}

            {/* SECCIÓN E: Amenazas frecuentes y casos reales */}
            {contextoExtendido && contextoExtendido.amenazasYCasos.length > 0 && (
              <article className="seccion-editorial-articulo">
                <span className="seccion-rotulo">05. Vectores de ataque</span>
                <h2 className="seccion-titulo-editorial">Amenazas detectadas y casos reales</h2>
                
                <div className="reporte-amenazas-editorial">
                  {contextoExtendido.amenazasYCasos.map((caso, idx) => (
                    <div key={idx} className="caso-amenaza-item">
                      <h4 className="caso-amenaza-titulo">{caso.titulo}</h4>
                      <p className="caso-amenaza-descripcion">{caso.descripcion}</p>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {/* SECCIÓN F: Protocolos de protección */}
            {contextoExtendido && contextoExtendido.reglasDeOro.length > 0 && (
              <article className="seccion-editorial-articulo">
                <span className="seccion-rotulo">06. Controles defensivos</span>
                <h2 className="seccion-titulo-editorial">Protocolos y mejores prácticas de protección</h2>
                
                <ol className="lista-protocolos-editorial">
                  {contextoExtendido.reglasDeOro.map((regla, idx) => (
                    <li key={idx} className="item-protocolo-editorial">
                      <span className="protocolo-numero">{idx + 1}</span>
                      <span className="protocolo-texto">{regla}</span>
                    </li>
                  ))}
                </ol>
              </article>
            )}

            {/* ==================================================================
                CTA DE CIERRE (WHITEPAPER ACTION BOX)
                ================================================================== */}
            <div className="caja-cierre-editorial">
              <h3 className="cierre-editorial-titulo">
                Evaluación práctica de {nombreGradoLegible}
              </h3>
              <p className="cierre-editorial-descripcion">
                Ponga a prueba los conocimientos adquiridos mediante los ejercicios interactivos y simuladores del laboratorio.
              </p>
              <div className="cierre-editorial-botones">
                <Boton
                  variante="ciberseguridad"
                  tamano="grande"
                  onClick={onIniciarModulo}
                >
                  Iniciar Laboratorio Práctico
                </Boton>
              </div>
            </div>

          </main>

          {/* Columna Lateral de Resumen Técnico */}
          <aside className="aside-editorial-resumen">
            <div className="card-resumen-editorial">
              <h4 className="card-resumen-titulo">Ficha del Módulo</h4>
              <dl className="resumen-lista-definiciones">
                <div className="resumen-fila">
                  <dt>Materia</dt>
                  <dd>{moduloInfo.titulo}</dd>
                </div>
                <div className="resumen-fila">
                  <dt>Nivel Escolar</dt>
                  <dd>{nombreGradoLegible}</dd>
                </div>
                <div className="resumen-fila">
                  <dt>Duración Estimada</dt>
                  <dd>{moduloInfo.duracionEstimada || '45 minutos'}</dd>
                </div>
                <div className="resumen-fila">
                  <dt>Total de Lecciones</dt>
                  <dd>{contenidoGrado.temas.length} lecciones prácticas</dd>
                </div>
                <div className="resumen-fila">
                  <dt>Modalidad</dt>
                  <dd>Simulación de amenazas interactiva</dd>
                </div>
              </dl>

              <div className="resumen-boton-wrapper">
                <button
                  type="button"
                  className="boton-resumen-accion"
                  onClick={onIniciarModulo}
                >
                  Ir al simulador
                </button>
              </div>
            </div>
          </aside>

        </div>
      </div>

    </div>
  );
};

export default DescripcionModuloUI;