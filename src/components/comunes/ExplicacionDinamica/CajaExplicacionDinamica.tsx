import React from 'react';
import { Compass, Target, PlayCircle, HelpCircle } from 'lucide-react';
import './CajaExplicacionDinamica.css';

export interface CajaExplicacionDinamicaProps {
  tituloDinamica?: string;
  enQueConsiste: string;
  comoInteractuar: string;
  paraQueSirve: string;
}

/**
 * Parsea un texto con pasos numerados ("1. ... 2. ... 3. ...") y los devuelve
 * como un array de strings, uno por cada paso.
 */
const parsearPasos = (texto: string): string[] => {
  const partes = texto.split(/\s*\d+\.\s+/).filter(Boolean);
  // Si solo hay un elemento no había pasos numerados → devolver el texto completo
  return partes.length > 1 ? partes : [texto];
};

/**
 * Componente reutilizable para explicar la dinámica, instrucciones e interactividad
 * de cada recurso interactivo presente en los módulos pedagógicos.
 */
export const CajaExplicacionDinamica: React.FC<CajaExplicacionDinamicaProps> = ({
  tituloDinamica = 'Guía de la Dinámica e Instrucciones de Uso',
  enQueConsiste,
  comoInteractuar,
  paraQueSirve,
}) => {
  const pasos = parsearPasos(comoInteractuar);
  const tienePasos = pasos.length > 1;

  return (
    <div className="caja-explicacion-dinamica">
      <div className="cabecera-explicacion-dinamica">
        <Compass className="icono-brujula-dinamica" size={22} />
        <h3>{tituloDinamica}</h3>
      </div>

      <div className="grid-bloques-dinamica">
        <div className="bloque-item-dinamica consiste">
          <div className="encabezado-item-dinamica">
            <Target size={18} className="icono-item-dinamica" />
            <strong>¿En qué consiste?</strong>
          </div>
          <p>{enQueConsiste}</p>
        </div>

        <div className="bloque-item-dinamica interactuar">
          <div className="encabezado-item-dinamica">
            <PlayCircle size={18} className="icono-item-dinamica" />
            <strong>¿Cómo participar? — Pasos a seguir</strong>
          </div>
          {tienePasos ? (
            <ol className="pasos-interaccion">
              {pasos.map((paso, idx) => (
                <li key={idx}>
                  <span className="num-paso">{idx + 1}</span>
                  <span>{paso.trim()}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p>{comoInteractuar}</p>
          )}
        </div>

        <div className="bloque-item-dinamica sirve">
          <div className="encabezado-item-dinamica">
            <HelpCircle size={18} className="icono-item-dinamica" />
            <strong>¿Para qué sirve practicar esto?</strong>
          </div>
          <p>{paraQueSirve}</p>
        </div>
      </div>
    </div>
  );
};

export default CajaExplicacionDinamica;
