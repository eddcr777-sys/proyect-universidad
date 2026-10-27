import React, { useState } from 'react';
import { ArrowLeft, Download, ExternalLink, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Requisitos.css';

/**
 * Página: Proceso de Admisión — Complejo Educativo "Antonio Lemus Pérez"
 * Estructura tomada de la Captura 1 (Colegio Los Arcos):
 * - Título del proceso de admisión
 * - Párrafo descriptivo introductorio
 * - Paso 1: Enlace y botón con forma de píldora para solicitud de admisión / formatos
 * - Paso 2: Recaudos necesarios ordenados numéricamente con alta legibilidad
 */
export const Requisitos: React.FC = () => {
  const [pestañaActiva, setPestañaActiva] = useState<'nuevos' | 'regulares'>('nuevos');

  const recaudosNuevosIngresos = [
    'Foto del grupo familiar o constancia de convivencia.',
    '4 fotos tipo carnet del estudiante con la camisa del uniforme escolar.',
    '2 fotos tipo carnet del representante legal.',
    'Partida de Nacimiento original y 2 copias legibles.',
    '2 copias de la Cédula de Identidad del estudiante (o comprobante en trámite).',
    '2 copias de la Cédula de Identidad del representante.',
    'Copia de calificaciones o certificado de promoción de 6to grado de Educación Primaria.',
    'En el caso de aspirantes a Educación Media General procedentes de otros planteles, consignar notas certificadas y constancia de buena conducta.',
    'Todo aspirante que presente cualquier tipo de condición o diagnóstico médico debe entregar el informe correspondiente emitido por el especialista.',
    'Constancia de niño sano o control pediátrico actualizado (talla y peso del estudiante).',
    'Correo electrónico activo tanto del estudiante como del representante para notificaciones académicas.',
    '1 carpeta marrón tipo oficio con gancho y 1 sobre de manila tipo oficio.',
    'Presencia obligatoria del estudiante al momento de la formalización de la inscripción.'
  ];

  const recaudosRegulares = [
    'Boletín o registro de calificaciones del año escolar culminado.',
    'Consignar cualquier documento pendiente en el expediente de su representado.',
    '2 fotos del estudiante con la camisa del año escolar a cursar (marrón para ciclo diversificado, azul para ciclo básico).',
    'Actualización de datos médicos, talla, peso y correos electrónicos del estudiante y representante.',
    'Solvencia o comprobante de la colaboración voluntaria institucional.',
    '1 carpeta marrón tipo oficio con gancho y 1 sobre de manila tipo oficio (aplica para estudiantes promovidos a 4to año).',
    'Adquisición y firma del acta de compromiso institucional en secretaría.',
    'Presencia obligatoria del estudiante y representante al momento del proceso.'
  ];

  const recaudosAMostrar = pestañaActiva === 'nuevos' ? recaudosNuevosIngresos : recaudosRegulares;

  return (
    <div className="pagina-admision-proceso">
      <div className="admision-contenedor-ancho">
        {/* ── ENLACE DE RETORNO DISCRETO ── */}
        <div style={{ marginBottom: '24px' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#64748b',
              fontSize: '0.9rem',
              textDecoration: 'none',
              fontWeight: 500
            }}
          >
            <ArrowLeft size={16} />
            Volver al Inicio
          </Link>
        </div>

        {/* ── ENCABEZADO PRINCIPAL (Captura 1) ── */}
        <header className="admision-encabezado-editorial">
          <h1 className="admision-titulo-principal">
            Proceso de Admisión del Complejo Educativo "Antonio Lemus Pérez"
          </h1>
          <p className="admision-descripcion-intro">
            Para iniciar el proceso de admisión, debe ingresar al enlace y consignar los siguientes recaudos:
          </p>
        </header>

        {/* ── LISTA DE PASOS ── */}
        <div className="admision-pasos-lista">

          {/* PASO 2: RECAUDOS NECESARIOS (Captura 1) */}
          <article className="admision-paso-card">
            <div className="admision-paso-numero">1</div>
            <div className="admision-paso-contenido">
              <p className="admision-paso-texto" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                Recaudos necesarios:
              </p>

              {/* Selector de categoría */}
              <div className="admision-tabs-contenedor">
                <button
                  type="button"
                  className={`admision-tab-boton ${pestañaActiva === 'nuevos' ? 'activo' : ''}`}
                  onClick={() => setPestañaActiva('nuevos')}
                >
                  Estudiantes Nuevos Ingresos (1er Año / Traslados)
                </button>
                <button
                  type="button"
                  className={`admision-tab-boton ${pestañaActiva === 'regulares' ? 'activo' : ''}`}
                  onClick={() => setPestañaActiva('regulares')}
                >
                  Estudiantes Regulares (Prosecución 2do a 5to Año)
                </button>
              </div>

              {/* Lista numerada */}
              <ol className="admision-lista-recaudos">
                {recaudosAMostrar.map((recaudo, indice) => (
                  <li key={indice} className="admision-item-recaudo">
                    <span className="admision-numero-orden">{indice + 1}.</span>
                    <span>{recaudo}</span>
                  </li>
                ))}
              </ol>

              <div className="admision-nota-adicional">
                <strong>Importante:</strong> Los formatos institucionales (acta de compromiso y planilla oficial) 
                se adquieren en la sede del liceo. Todo trámite administrativo es presencial y debe ser formalizado por el 
                padre, madre o representante legal junto con el estudiante.
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Requisitos;
