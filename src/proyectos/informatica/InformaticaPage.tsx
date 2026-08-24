import React, { useState } from 'react';
import { Code, Terminal, Cpu, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import fotoFachada from '../../assets/lb.jpeg';
import './InformaticaPage.css';

interface ModuloInformatica {
  id: number;
  titulo: string;
  resumen: string;
  detalles: string[];
  icono: string;
}

const MODULOS_INFORMATICA: ModuloInformatica[] = [
  {
    id: 1,
    titulo: 'Fundamentos de Computación y Hardware',
    resumen: 'Comprende el funcionamiento interno del computador: procesador, memoria RAM, almacenamiento y periféricos.',
    detalles: [
      'Arquitectura de von Neumann y ciclo de instrucción.',
      'Componentes esenciales: CPU, GPU, Placa Base y Fuente.',
      'Mantenimiento preventivo básico de equipos informáticos.'
    ],
    icono: 'Cpu'
  },
  {
    id: 2,
    titulo: 'Pensamiento Algorítmico y Lógica',
    resumen: 'Desarrolla la habilidad de resolver problemas mediante diagramas de flujo y pseudocódigo.',
    detalles: [
      'Variables, tipos de datos y estructuras condicionales (if/else).',
      'Bucles y repeticiones (for/while).',
      'Descomposición de problemas complejos en pasos sencillos.'
    ],
    icono: 'Terminal'
  },
  {
    id: 3,
    titulo: 'Desarrollo Web Estático (HTML & CSS)',
    resumen: 'Aprende las bases de la creación de páginas web para publicar tus propios proyectos escolares.',
    detalles: [
      'Estructuración semántica con HTML5.',
      'Diseño visual, colores y layouts con CSS3.',
      'Publicación gratuita de sitios en GitHub Pages.'
    ],
    icono: 'Code'
  }
];

/**
 * Página principal del Proyecto de Informática y Programación.
 * Demuestra la extensibilidad modular de la plataforma escolar.
 */
const InformaticaPage: React.FC = () => {
  const [moduloActivo, setModuloActivo] = useState<number | null>(null);

  const alternarModulo = (id: number) => {
    setModuloActivo((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pagina-informatica">
      <HeroInstitucional
        imagenFondo={fotoFachada}
        altura="compacto"
        cintillo={
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Code size={18} />
            Proyecto Estudiantil #2 — Área de Informática
          </span>
        }
        titulo="Iniciación a la Informática y Programación"
        descripcion="Una guía interactiva diseñada por estudiantes para introducir a la comunidad escolar en los principios del pensamiento computacional y la tecnología."
      />

      <main className="contenedor-informatica cuerpo-informatica">
        <section className="seccion-intro-informatica">
          <h2>¿Por qué aprender Informática en la Escuela?</h2>
          <p>
            La informática no consiste solo en usar computadores, sino en desarrollar habilidades lógicas,
            capacidad de análisis y pensamiento estructurado para resolver problemas reales.
          </p>
        </section>

        <section className="seccion-modulos-informatica">
          <h2>Módulos del Proyecto de Informática</h2>
          <div className="grid-modulos-informatica">
            {MODULOS_INFORMATICA.map((modulo) => (
              <div
                key={modulo.id}
                className={`tarjeta-modulo-informatica ${moduloActivo === modulo.id ? 'activa' : ''}`}
                onClick={() => alternarModulo(modulo.id)}
              >
                <div className="encabezado-tarjeta-inf">
                  {modulo.icono === 'Cpu' && <Cpu size={32} className="icono-mod-inf" />}
                  {modulo.icono === 'Terminal' && <Terminal size={32} className="icono-mod-inf" />}
                  {modulo.icono === 'Code' && <Code size={32} className="icono-mod-inf" />}
                  <h3>{modulo.titulo}</h3>
                </div>
                <p className="resumen-tarjeta-inf">{modulo.resumen}</p>

                {moduloActivo === modulo.id && (
                  <div className="detalles-tarjeta-inf">
                    <hr />
                    <h4>Temas Clave:</h4>
                    <ul>
                      {modulo.detalles.map((detalle, idx) => (
                        <li key={idx}>
                          <CheckCircle size={16} className="icono-check" />
                          <span>{detalle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="boton-expandir-inf">
                  {moduloActivo === modulo.id ? 'Ver menos' : 'Explorar módulo'}
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="seccion-colaboracion-inf">
          <div className="caja-colaboracion-inf">
            <BookOpen size={40} className="icono-libro" />
            <div>
              <h3>¿Quieres aportar a este proyecto?</h3>
              <p>
                Este contenido es de código abierto. Si eres estudiante y deseas agregar ejercicios o módulos de programación, 
                revisa la <strong>Guía de Contribución</strong> disponible en el repositorio de GitHub.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InformaticaPage;
