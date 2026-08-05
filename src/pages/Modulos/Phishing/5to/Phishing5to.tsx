import React, { useState } from 'react';
import { 
  Gavel, 
  Scale, 
  Megaphone, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2,
  ShieldCheck,
  FileText
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/Phishing1ro.css';

interface LeyItem {
  articulo: string;
  delito: string;
  sancion: string;
  aplicacionPhishing: string;
}

const LEYES_VENEZUELA: LeyItem[] = [
  {
    articulo: "Artículo 6°",
    delito: "Acceso Indebido",
    sancion: "Prisión de 1 a 5 años",
    aplicacionPhishing: "Sanciona a quien ingrese a sistemas informáticos o cuentas ajenas usando claves obtenidas mediante engaños."
  },
  {
    articulo: "Artículo 14°",
    delito: "Fraude o Estafa Electrónica",
    sancion: "Prisión de 3 a 7 años",
    aplicacionPhishing: "Penaliza la manipulación de datos o suplantación para obtener beneficios económicos o patrimoniales no autorizados."
  },
  {
    articulo: "Artículo 22°",
    delito: "Revelación Indebida de Datos",
    sancion: "Prisión de 2 a 6 años",
    aplicacionPhishing: "Sanciona a quien publique o comercialice información privada de terceros obtenida por técnicas de phishing."
  }
];

export const Phishing5to: React.FC = () => {
  const [articuloAbierto, setArticuloAbierto] = useState<Record<string, boolean>>({});
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const toggleArticulo = (art: string) => {
    setArticuloAbierto(prev => ({
      ...prev,
      [art]: !prev[art]
    }));
  };

  return (
    <main className="pagina-modulo-phishing">
      <HeaderModulo
        grado="5to"
        modulo="5: Marco Legal y Liderazgo"
        titulo="Delitos Informáticos y Prevención Institucional"
        subTitulo="Examina el marco legal venezolano sobre delitos informáticos, el impacto ético de la ciberseguridad y lidera campañas de prevención en 5to Año."
        categoria="Defensa Digital y Privacidad"
        tiempoEstimado="50 min"
        icono="⚖️"
      />

      <div className="contenedor-phishing-contenido">
        {/* SECCIÓN 1: MARCO LEGAL */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Marco Legal en Venezuela: Ley Especial contra Delitos Informáticos</h2>
          </div>
          <p className="texto-lectura-phishing">
            Como futuro bachiller de la República, es fundamental que conozcas que la suplantación de identidad y el phishing no son "travesuras en la red", sino <strong>delitos sancionados penalmente por la legislación venezolana</strong>.
          </p>

          <div className="grid-senales-phishing">
            <div className="caja-senal-item">
              <Gavel className="icono-senal rojo" size={28} />
              <h3>Responsabilidad Penal</h3>
              <p>El uso no autorizado de claves ajenas o creación de páginas falsas conlleva penas de prisión formal.</p>
            </div>

            <div className="caja-senal-item">
              <Scale className="icono-senal azul" size={28} />
              <h3>Protección a Víctimas</h3>
              <p>Los organismos de seguridad (CICPC - División de Delitos Informáticos) reciben y procesan denuncias cibernéticas.</p>
            </div>

            <div className="caja-senal-item">
              <Megaphone className="icono-senal verde" size={28} />
              <h3>Mentoría y Liderazgo</h3>
              <p>Los graduandos de 5to Año promueven campañas de concienciación para los estudiantes de 1er a 4to Año.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: EXAMEN DE LA LEY */}
        <section className="bloque-phishing-tarjeta interactivo-caja">
          <div className="encabezado-bloque-phishing">
            <FileText className="icono-bloque-verde" size={24} />
            <h2>2. Análisis de Artículos Legales Clave</h2>
          </div>
          <p className="subtitulo-bloque-phishing">
            Haz clic en cada artículo de la ley venezolana para analizar su penalización y cómo se aplica al Phishing:
          </p>

          <div className="lista-simuladores-phishing">
            {LEYES_VENEZUELA.map((ley) => (
              <div key={ley.articulo} className="tarjeta-mensaje-simulado">
                <div className="cabecera-mensaje-simulado">
                  <span className="badge-canal">{ley.articulo}</span>
                  <span className="remitente-texto">Delito: {ley.delito}</span>
                </div>

                <div className="cuerpo-mensaje-simulado">
                  <p>⚖️ <strong>Sanción Prevista:</strong> {ley.sancion}</p>
                </div>

                <button 
                  className="btn-decision seguro"
                  onClick={() => toggleArticulo(ley.articulo)}
                  style={{ width: 'fit-content' }}
                >
                  <ShieldCheck size={18} /> {articuloAbierto[ley.articulo] ? 'Ocultar Detalle' : 'Ver Aplicación al Phishing'}
                </button>

                {articuloAbierto[ley.articulo] && (
                  <div className="feedback-decision acierto">
                    <p style={{ margin: '0 0 0.5rem 0', fontWeight: '800' }}>
                      📜 Aplicación en Casos de Ciberseguridad:
                    </p>
                    <p style={{ margin: 0 }}>{ley.aplicacionPhishing}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: QUIZ FINAL DE GRADO */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Final de Nivel Experto</h2>
          </div>
          <p className="texto-lectura-phishing">
            <strong>Pregunta:</strong> Si un estudiante de tu liceo detecta una campaña masiva de correos engañosos dirigida a los alumnos del liceo, ¿cuál es el canal de denuncia oficial recomendado en Venezuela?
          </p>

          <div className="opciones-quiz-phishing">
            <button 
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Ignorarlo y borrar los correos en silencio.
            </button>
            <button 
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Notificar a la directiva del Liceo y acudir ante la División de Delitos Informáticos del CICPC para formalizar la denuncia.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Excelente respuesta!</strong> El conocimiento del marco legal y los canales institucionales permite proteger a la comunidad escolar.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Phishing5to;
