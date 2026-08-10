import React, { useState } from 'react';
import {
  Share2,
  Lock,
  Eye,
  MessageSquareWarning,
  Sparkles,
  HelpCircle,
  User,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import './RedesSociales1ro.css';

export const RedesSociales1ro: React.FC = () => {
  const [cuentaPrivada, setCuentaPrivada] = useState(false);
  const [ocultarUbicacion, setOcultarUbicacion] = useState(false);
  const [aprobarEtiquetas, setAprobarEtiquetas] = useState(false);
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const nivelPrivacidad = (cuentaPrivada ? 1 : 0) + (ocultarUbicacion ? 1 : 0) + (aprobarEtiquetas ? 1 : 0);
  
  let nivelTexto = "Bajo (Público)";
  let colorMedidor = "var(--color-ciber-alerta)";
  if (nivelPrivacidad === 3) {
    nivelTexto = "Alto (Seguro)";
    colorMedidor = "var(--color-ciber-secundario)";
  } else if (nivelPrivacidad > 0) {
    nivelTexto = "Medio (Mejorable)";
    colorMedidor = "#f59e0b";
  }

  return (
    <main className="pagina-modulo-redes">
      <HeaderModulo
        grado="1ro"
        modulo="1: Configuración de Privacidad y Netiqueta"
        titulo="Lo que compartes te define"
        subTitulo="Aprende a configurar tu perfil para que solo tus verdaderos amigos puedan ver tus fotos y publicaciones."
        categoria="Redes Sociales e Identidad"
        tiempoEstimado="35 min"
        icono={<Share2 size={36} />}
      />

      <div className="contenedor-redes-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Perfiles Públicos vs. Privados</h2>
          </div>
          <p className="texto-lectura-modulo">
            En internet, lo que publicas en una cuenta "Pública" puede ser visto, guardado y compartido por cualquier persona en el mundo, incluso desconocidos con malas intenciones.
          </p>

          <div className="grid-pilares-redes">
            <div className="caja-pilar-redes">
              <Eye className="icono-pilar rojo" size={28} />
              <h3>El Peligro de lo Público</h3>
              <p>Fotos en uniforme escolar, lugares que frecuentas y horarios quedan expuestos al mundo entero.</p>
            </div>

            <div className="caja-pilar-redes">
              <Lock className="icono-pilar verde" size={28} />
              <h3>Cuenta Privada</h3>
              <p>El primer escudo. Significa que tú decides quién puede seguirte y ver tus actualizaciones (solo gente que conoces en la vida real).</p>
            </div>

            <div className="caja-pilar-redes">
              <MessageSquareWarning className="icono-pilar naranja" size={28} />
              <h3>Netiqueta</h3>
              <p>Comportarse en internet igual que en persona: no insultar, no acosar y pensar antes de enviar un mensaje.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE PRIVACIDAD */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-azul" size={24} />
            <h2>2. Simulador: Blinda tu Perfil</h2>
          </div>
          <p className="subtitulo-bloque">
            Ajusta los interruptores de privacidad. Observa cómo cambia la exposición de tu perfil simulado.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
            {/* Panel de Configuración */}
            <div style={{ backgroundColor: '#fff', border: '1px solid var(--color-borde)', borderRadius: 'var(--radio-principal)' }}>
              <div style={{ padding: '1rem', borderBottom: '1px solid var(--color-borde)', backgroundColor: 'var(--color-fondo-tarjeta)' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>⚙️ Configuración</h3>
              </div>
              
              <div className="toggle-row" onClick={() => setCuentaPrivada(!cuentaPrivada)}>
                <div className="toggle-info">
                  <h4>Cuenta Privada</h4>
                  <p>Solo seguidores aprobados ven tu contenido.</p>
                </div>
                <div className={`toggle-switch ${cuentaPrivada ? 'activo' : ''}`}>
                  <div className="toggle-thumb"></div>
                </div>
              </div>

              <div className="toggle-row" onClick={() => setOcultarUbicacion(!ocultarUbicacion)}>
                <div className="toggle-info">
                  <h4>Ocultar Ubicación GPS</h4>
                  <p>No muestra en qué ciudad o lugar estás publicando.</p>
                </div>
                <div className={`toggle-switch ${ocultarUbicacion ? 'activo' : ''}`}>
                  <div className="toggle-thumb"></div>
                </div>
              </div>

              <div className="toggle-row" onClick={() => setAprobarEtiquetas(!aprobarEtiquetas)}>
                <div className="toggle-info">
                  <h4>Aprobar Etiquetas</h4>
                  <p>Decides si una foto tuya subida por otro sale en tu perfil.</p>
                </div>
                <div className={`toggle-switch ${aprobarEtiquetas ? 'activo' : ''}`}>
                  <div className="toggle-thumb"></div>
                </div>
              </div>
            </div>

            {/* Vista del Perfil (Mockup) */}
            <div>
              <div className="perfil-mockup">
                <div className="perfil-header"></div>
                <div className="perfil-avatar">
                  <User size={40} />
                </div>
                <div className="perfil-info">
                  <h4>Estudiante123 {cuentaPrivada && <Lock size={16} color="#64748b" style={{ display: 'inline', marginLeft: '0.25rem' }} />}</h4>
                  <p>Liceo Dr. Carlos Lemus 🎓</p>
                  
                  <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f1f5f9', borderRadius: 'var(--radio-principal)' }}>
                    {cuentaPrivada ? (
                      <div style={{ textAlign: 'center', color: '#64748b', padding: '1rem 0' }}>
                        <Lock size={32} style={{ margin: '0 auto 0.5rem auto' }} />
                        <p style={{ fontWeight: 'bold' }}>Esta cuenta es privada</p>
                        <p style={{ fontSize: '0.85rem' }}>Debes seguir a este usuario para ver sus fotos.</p>
                      </div>
                    ) : (
                      <div>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                          <div style={{ width: '40px', height: '40px', backgroundColor: '#cbd5e1', borderRadius: '50%' }}></div>
                          <div>
                            <p style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#334155' }}>Foto en el recreo</p>
                            {!ocultarUbicacion && <p style={{ fontSize: '0.75rem', color: '#ef4444' }}>📍 Patio del Liceo Lemus (Público)</p>}
                          </div>
                        </div>
                        <div style={{ width: '100%', height: '120px', backgroundColor: '#e2e8f0', borderRadius: 'var(--radio-principal)' }}></div>
                        
                        {!aprobarEtiquetas && (
                          <div style={{ marginTop: '1rem', borderTop: '1px solid #cbd5e1', paddingTop: '1rem' }}>
                            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>📌 Etiquetado en: "Fiesta de anoche" (Subida por UsuarioX)</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <span style={{ fontWeight: 'bold' }}>Nivel de Protección: </span>
                <span style={{ color: colorMedidor, fontWeight: '900' }}>{nivelTexto}</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 3: QUIZ */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Diagnóstica</h2>
          </div>
          <p className="texto-lectura-modulo">
            <strong>Pregunta:</strong> Acabas de crear tu primera cuenta de Instagram. Un desconocido te envía una solicitud de seguimiento. ¿Cuál es la regla básica de Netiqueta y Privacidad?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Aceptarlo de inmediato para tener más seguidores, mientras más personas vean mis fotos, mejor.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Rechazar la solicitud. En redes sociales solo debes aceptar a personas que conoces y confías en la vida real.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> Tener muchos seguidores puede parecer popular, pero los desconocidos pueden ser estafadores o utilizar tu información y fotos para acoso o robo de identidad. Tu seguridad es primero.
            </div>
          )}
        </section>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .interactivo-caja > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
};

export default RedesSociales1ro;
