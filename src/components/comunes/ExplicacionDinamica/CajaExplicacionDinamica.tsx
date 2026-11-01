import React from 'react';
import { Info } from 'lucide-react';
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
  return partes.length > 1 ? partes : [texto];
};

/**
 * Componente de instrucciones para las dinámicas interactivas.
 * Diseño limpio, sobrio y optimizado para móviles y escritorio, sin anidamiento pesado de tarjetas.
 */
export const CajaExplicacionDinamica: React.FC<CajaExplicacionDinamicaProps> = ({
  tituloDinamica = 'Instrucciones del Laboratorio Práctico',
  enQueConsiste,
  comoInteractuar,
  paraQueSirve,
}) => {
  const pasos = parsearPasos(comoInteractuar);
  const tienePasos = pasos.length > 1;

  return (
    <div className="caja-explicacion-dinamica">
      <div className="cabecera-explicacion-dinamica">
        <Info className="icono-info-dinamica" size={18} />
        <h3>{tituloDinamica}</h3>
      </div>

      <div className="grid-bloques-dinamica">
        <div className="bloque-item-dinamica consiste">
          <span className="etiqueta-item-dinamica">¿En qué consiste?</span>
          <p>{enQueConsiste}</p>
        </div>

        <div className="bloque-item-dinamica interactuar">
          <span className="etiqueta-item-dinamica">¿Cómo participar?</span>
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
          <span className="etiqueta-item-dinamica">¿Para qué sirve?</span>
          <p>{paraQueSirve}</p>
        </div>
      </div>
    </div>
  );
};

export default CajaExplicacionDinamica;

