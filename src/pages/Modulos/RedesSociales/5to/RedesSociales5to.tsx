import React, { useState } from 'react';
import {
  Gavel,
  Network,
  Scale,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  EyeOff,
  Filter
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/RedesSociales1ro.css';

export const RedesSociales5to: React.FC = () => {
  const [burbujaActiva, setBurbujaActiva] = useState(true);
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const romperBurbuja = () => {
    setBurbujaActiva(false);
  };

  return (
    <main className="pagina-modulo-redes">
      <HeaderModulo
        grado="5to"
        modulo="5: Algoritmos y Derecho al Olvido"
        titulo="La Matrix de las Redes Sociales"
        subTitulo="Analiza cómo los algoritmos crean cámaras de eco para manipular tu atención, y comprende tus derechos jurídicos en el entorno digital."
        categoria="Redes Sociales e Identidad"
        tiempoEstimado="50 min"
        icono={<Gavel size={36} />}
      />

      <div className="contenedor-redes-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. El Algoritmo de Recomendación</h2>
          </div>
          <p className="texto-lectura-modulo">
            TikTok, Instagram y X (Twitter) utilizan Inteligencia Artificial para decidir qué videos ves. Su objetivo es mantenerte conectado el mayor tiempo posible mostrándote contenido que confirma tus sesgos (creencias previas).
          </p>

          <div className="grid-pilares-redes">
            <div className="caja-pilar-redes">
              <Filter className="icono-pilar azul" size={28} />
              <h3>Burbuja de Filtros</h3>
              <p>El estado en el que una plataforma solo te muestra opiniones que concuerdan contigo, ocultándote la realidad completa o los puntos de vista opuestos.</p>
            </div>

            <div className="caja-pilar-redes">
              <Network className="icono-pilar rojo" size={28} />
              <h3>Polarización Social</h3>
              <p>Los algoritmos descubrieron que el contenido que genera enojo o indignación retiene más la atención de los usuarios, fomentando el odio y las fake news.</p>
            </div>

            <div className="caja-pilar-redes">
              <Scale className="icono-pilar verde" size={28} />
              <h3>Derecho al Olvido</h3>
              <p>El derecho legal (en muchas jurisdicciones) a exigir que las empresas borren tu información personal o fotos antiguas que afectan tu reputación.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE BURBUJA DE FILTRO */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <Filter className="icono-bloque-azul" size={24} />
            <h2>2. Laboratorio: La Cámara de Eco (Echo Chamber)</h2>
          </div>
          <p className="subtitulo-bloque">
            Simularemos tu "Feed" de noticias. En la Burbuja, solo verás noticias polarizadas. Haz clic en "Romper Algoritmo" para ver el Feed Neutral.
          </p>

          <div style={{ backgroundColor: burbujaActiva ? '#fef2f2' : '#f0fdf4', border: `1px solid ${burbujaActiva ? '#ef4444' : '#10b981'}`, borderRadius: 'var(--radio-principal)', padding: '2rem', transition: 'all 0.5s' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0, color: burbujaActiva ? '#ef4444' : '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {burbujaActiva ? <Filter size={24}/> : <EyeOff size={24}/>}
                {burbujaActiva ? 'Algoritmo de Retención: ACTIVO' : 'Feed Neutral (Cronológico)'}
              </h3>
              {burbujaActiva && (
                <button onClick={romperBurbuja} className="btn-decision seguro" style={{ backgroundColor: '#ef4444', borderColor: '#ef4444' }}>
                  Romper Algoritmo
                </button>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              
              {/* Noticia 1 */}
              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                {burbujaActiva ? (
                  <>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#b91c1c' }}>¡El grupo rival quiere destruir nuestra escuela! [INDIGNANTE]</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569' }}>Noticia manipulada diseñada para generar rabia y likes rápidos.</p>
                  </>
                ) : (
                  <>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>Debate inter-escolar: Propuestas para mejorar el liceo</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569' }}>Noticia balanceada y objetiva de fuentes verificadas.</p>
                  </>
                )}
              </div>

              {/* Noticia 2 */}
              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                {burbujaActiva ? (
                  <>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#b91c1c' }}>Solo TÚ tienes la razón, mira como humillan a este experto</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569' }}>Contenido que refuerza el sesgo de confirmación.</p>
                  </>
                ) : (
                  <>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>Estudio científico revela nuevos descubrimientos de tecnología</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569' }}>Información educativa sin carga emocional extrema.</p>
                  </>
                )}
              </div>

            </div>

            {!burbujaActiva && (
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <p style={{ color: '#15803d', fontWeight: 'bold' }}>Has escapado de la burbuja. Para evitarla en la vida real: sigue a personas con opiniones diferentes, desactiva las recomendaciones basadas en IA o usa redes sociales de código abierto (Descentralizadas).</p>
                <button onClick={() => setBurbujaActiva(true)} className="btn-decision" style={{ margin: '1rem auto 0 auto' }}>
                  Volver a activar Algoritmo
                </button>
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 3: QUIZ */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Final de Grado</h2>
          </div>
          <p className="texto-lectura-modulo">
            <strong>Pregunta:</strong> De acuerdo con el concepto de "Derecho al Olvido", si un periódico web mantiene publicada una foto tuya de cuando eras niño y esto te perjudica actualmente...
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Tienes el derecho legal de exigirle al medio y a motores de búsqueda (como Google) que retiren el enlace porque afecta tu privacidad y reputación presente.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) No puedes hacer nada. Todo lo que se sube a internet es propiedad pública y la ley prohíbe borrar archivos históricos.
            </button>
          </div>

          {respuestaQuiz === 1 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto, Experto!</strong> El Derecho al Olvido busca proteger la dignidad de las personas, permitiéndoles solicitar la eliminación de datos personales u obsoletos que vulneren sus derechos fundamentales en el presente.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default RedesSociales5to;
