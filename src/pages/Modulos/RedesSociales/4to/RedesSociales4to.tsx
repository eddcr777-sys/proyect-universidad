import React, { useState } from 'react';
import {
  Search,
  Fingerprint,
  MessageCircleOff,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Trash2
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/RedesSociales1ro.css';

interface ResultadoBusqueda {
  id: number;
  titulo: string;
  url: string;
  fragmento: string;
  riesgo: string; // 'alto' | 'medio' | 'bajo'
  accionSugerida: string;
  eliminado?: boolean;
}

const RESULTADOS_INICIALES: ResultadoBusqueda[] = [
  {
    id: 1,
    titulo: 'Perfil en Instagram: @EstudianteLiceo123',
    url: 'https://instagram.com/EstudianteLiceo123',
    fragmento: 'Cuenta pública. Biografía: "Estudiando en Carlos Lemus, 16 años, siempre en el mismo parque los viernes". 240 fotos públicas.',
    riesgo: 'alto',
    accionSugerida: 'Hacer cuenta privada y quitar detalles específicos de ubicación de la biografía.'
  },
  {
    id: 2,
    titulo: 'Foro de Videojuegos - Usuario "LiceoL3mUs"',
    url: 'https://foro-juegos.com/usuarios/LiceoL3mUs',
    fragmento: 'Comentario (2023): "Jajaja eres un perdedor, te odio". Discusión tóxica en un hilo público de videojuegos.',
    riesgo: 'medio',
    accionSugerida: 'Eliminar el comentario o solicitar a los moderadores borrar la cuenta del foro (Reputación Tóxica).'
  },
  {
    id: 3,
    titulo: 'Blog Escolar Oficial - Cuadro de Honor 2025',
    url: 'https://liceolemus.edu.ve/noticias/honor',
    fragmento: 'Felicitaciones al estudiante por su excelente desempeño en la Feria de Ciencias Nacional.',
    riesgo: 'bajo',
    accionSugerida: 'Mantener. Es un resultado positivo que mejora tu reputación digital (Huella Positiva).'
  }
];

export const RedesSociales4to: React.FC = () => {
  const [resultados, setResultados] = useState<ResultadoBusqueda[]>(RESULTADOS_INICIALES);
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const simularBusqueda = () => {
    setBusquedaRealizada(true);
  };

  const aplicarAccion = (id: number) => {
    setResultados(resultados.map(r => r.id === id ? { ...r, eliminado: true } : r));
  };

  return (
    <main className="pagina-modulo-redes">
      <HeaderModulo
        grado="4to"
        modulo="4: Reputación Digital (Egosurfing)"
        titulo="Tu Huella Digital Imborrable"
        subTitulo="Aprende a rastrear tu propia huella digital en internet y a manejar tu reputación online frente a universidades y empresas."
        categoria="Redes Sociales e Identidad"
        tiempoEstimado="45 min"
        icono={<Search size={36} />}
      />

      <div className="contenedor-redes-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Todo queda registrado</h2>
          </div>
          <p className="texto-lectura-modulo">
            Tu <strong>Huella Digital</strong> es el rastro que dejas al usar internet: fotos, comentarios, likes y foros. Las universidades y empleadores revisan esta huella antes de aceptarte.
          </p>

          <div className="grid-pilares-redes">
            <div className="caja-pilar-redes">
              <Search className="icono-pilar azul" size={28} />
              <h3>Egosurfing</h3>
              <p>Práctica de buscar tu propio nombre en Google para descubrir qué información pública existe sobre ti.</p>
            </div>

            <div className="caja-pilar-redes">
              <Fingerprint className="icono-pilar verde" size={28} />
              <h3>Gestión de Reputación</h3>
              <p>Limpiar activamente comentarios tóxicos del pasado y destacar logros positivos (como proyectos escolares).</p>
            </div>

            <div className="caja-pilar-redes">
              <MessageCircleOff className="icono-pilar rojo" size={28} />
              <h3>Ciberacoso y Denuncia</h3>
              <p>Si encuentras información falsa o humillante sobre ti, no respondas con agresión; bloquea, guarda capturas y reporta a la plataforma.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE EGOSURFING */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <Search className="icono-bloque-azul" size={24} />
            <h2>2. Simulador: Auditoría Personal</h2>
          </div>
          <p className="subtitulo-bloque">
            Simulemos que el departamento de admisiones de una universidad te busca en internet. Haz clic en "Buscar mi Nombre".
          </p>

          <div style={{ backgroundColor: '#f8fafc', border: '1px solid var(--color-borde)', borderRadius: 'var(--radio-principal)', padding: '2rem' }}>
            
            {!busquedaRealizada ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <Search size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
                <h3>Buscador Web Simulado</h3>
                <div style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '1rem auto' }}>
                  <input type="text" value='"Tu Nombre Completo"' readOnly className="input-password-simulador" style={{ margin: 0 }} />
                  <button onClick={simularBusqueda} className="btn-decision seguro">Buscar</button>
                </div>
              </div>
            ) : (
              <div>
                <h3 style={{ marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 color="#10b981" /> Resultados Encontrados (3)
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {resultados.map(resultado => (
                    <div key={resultado.id} style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', position: 'relative', opacity: resultado.eliminado ? 0.5 : 1 }}>
                      {resultado.eliminado && (
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                          <span style={{ backgroundColor: '#10b981', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 'bold' }}>✅ Acción Aplicada y Resuelto</span>
                        </div>
                      )}
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <a href="#" style={{ color: '#2563eb', fontSize: '1.1rem', textDecoration: 'none', fontWeight: 'bold' }}>{resultado.titulo}</a>
                        {resultado.riesgo === 'alto' && <span style={{ backgroundColor: '#fef2f2', color: '#ef4444', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><AlertTriangle size={14}/> Peligro</span>}
                        {resultado.riesgo === 'medio' && <span style={{ backgroundColor: '#fffbeb', color: '#f59e0b', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>Precaución</span>}
                        {resultado.riesgo === 'bajo' && <span style={{ backgroundColor: '#f0fdf4', color: '#10b981', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>Positivo</span>}
                      </div>
                      <p style={{ color: '#16a34a', fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>{resultado.url}</p>
                      <p style={{ color: '#475569', fontSize: '0.95rem', margin: '0 0 1rem 0' }}>{resultado.fragmento}</p>

                      {!resultado.eliminado && resultado.riesgo !== 'bajo' && (
                        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                          <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}><strong>Recomendación:</strong> {resultado.accionSugerida}</p>
                          <button onClick={() => aplicarAccion(resultado.id)} className="btn-decision" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
                            <Trash2 size={16} /> Aplicar Corrección
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 3: QUIZ */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Diagnóstica</h2>
          </div>
          <p className="texto-lectura-modulo">
            <strong>Pregunta:</strong> Estás siendo víctima de ciberacoso: alguien creó un perfil falso en Instagram para insultarte y subir fotos editadas tuyas. ¿Cuál de las siguientes acciones es la correcta?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Responderle con insultos en los comentarios y luego borrar mi cuenta de Instagram para siempre.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) No responder, tomar capturas de pantalla de todo como evidencia, bloquear el perfil falso y reportarlo a Instagram por acoso. Luego, hablar con un adulto de confianza.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> Nunca debes alimentar al acosador respondiendo. Las capturas de pantalla sirven como evidencia para que las autoridades del liceo o las plataformas puedan intervenir.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default RedesSociales4to;
