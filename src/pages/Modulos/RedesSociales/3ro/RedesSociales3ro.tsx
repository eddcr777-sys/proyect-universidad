import React, { useState } from 'react';
import {
  ShieldAlert,
  Smartphone,
  Mic,
  Camera,
  MapPin,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  ToggleRight
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/RedesSociales1ro.css';

export const RedesSociales3ro: React.FC = () => {
  // Estado de permisos para la app "Linterna Ultra Flash"
  const [permisos, setPermisos] = useState({
    camara: true, // Justificado (usa el flash de la cámara)
    microfono: true, // Abusivo
    contactos: true, // Abusivo
    ubicacion: true // Abusivo
  });
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const togglePermiso = (clave: keyof typeof permisos) => {
    setPermisos(prev => ({ ...prev, [clave]: !prev[clave] }));
  };

  const permisosAbusivosActivos = permisos.microfono || permisos.contactos || permisos.ubicacion;
  const esConfiguracionPerfecta = permisos.camara && !permisosAbusivosActivos;

  return (
    <main className="pagina-modulo-redes">
      <HeaderModulo
        grado="3ro"
        modulo="3: Auditoría de Permisos Móviles"
        titulo="Si es gratis, el producto eres tú"
        subTitulo="Analiza por qué aplicaciones simples solicitan acceso a funciones que no necesitan, y aprende a revocar permisos invasivos."
        categoria="Redes Sociales e Identidad"
        tiempoEstimado="45 min"
        icono={<ShieldAlert size={36} />}
      />

      <div className="contenedor-redes-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. El Negocio de los Datos Personales</h2>
          </div>
          <p className="texto-lectura-modulo">
            Muchas aplicaciones de la tienda se ofrecen gratis, pero ganan dinero recolectando y vendiendo tus datos personales a empresas de publicidad. Lo hacen pidiendo "Permisos" abusivos en tu celular.
          </p>

          <div className="grid-pilares-redes">
            <div className="caja-pilar-redes">
              <ToggleRight className="icono-pilar rojo" size={28} />
              <h3>Permisos Injustificados</h3>
              <p>Una app de calculadora no necesita saber tu ubicación GPS. Si lo pide, es para rastrearte y vender esa data.</p>
            </div>

            <div className="caja-pilar-redes">
              <Smartphone className="icono-pilar azul" size={28} />
              <h3>El Producto Eres Tú</h3>
              <p>Las redes sociales son gratis porque usan todo lo que publicas (y los permisos que les das) para perfilarte y mostrarte anuncios.</p>
            </div>

            <div className="caja-pilar-redes">
              <ShieldAlert className="icono-pilar verde" size={28} />
              <h3>Revocación (iOS / Android)</h3>
              <p>Puedes ir a "Ajustes  Privacidad" y apagar el acceso al micrófono y cámara a cualquier app que ya tengas instalada.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE PERMISOS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <Smartphone className="icono-bloque-azul" size={24} />
            <h2>2. Simulador: Ajustes de App SOS</h2>
          </div>
          <p className="subtitulo-bloque">
            Estás auditando los permisos de una aplicación llamada <strong>"Linterna Ultra Flash"</strong>. Apaga (revoca) los permisos que sean excesivos e injustificados para su función.
          </p>

          <div style={{ backgroundColor: '#f8fafc', border: '1px solid var(--color-borde)', borderRadius: 'var(--radio-principal)', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #cbd5e1' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#eab308', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem' }}>🔦</span>
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Linterna Ultra Flash</h3>
                <p style={{ margin: 0, color: '#64748b' }}>Permisos de la Aplicación</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              
              <div className="toggle-row" style={{ backgroundColor: '#fff', border: '1px solid var(--color-borde)', borderRadius: '8px' }} onClick={() => togglePermiso('camara')}>
                <div className="toggle-info">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Camera size={18}/> Cámara</h4>
                  <p>Permite encender el LED flash de la cámara trasera.</p>
                </div>
                <div className={`toggle-switch ${permisos.camara ? 'activo' : ''}`}>
                  <div className="toggle-thumb"></div>
                </div>
              </div>

              <div className="toggle-row" style={{ backgroundColor: '#fff', border: '1px solid var(--color-borde)', borderRadius: '8px' }} onClick={() => togglePermiso('microfono')}>
                <div className="toggle-info">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mic size={18}/> Micrófono</h4>
                  <p>Grabar audio en segundo plano.</p>
                </div>
                <div className={`toggle-switch ${permisos.microfono ? 'activo' : ''}`}>
                  <div className="toggle-thumb"></div>
                </div>
              </div>

              <div className="toggle-row" style={{ backgroundColor: '#fff', border: '1px solid var(--color-borde)', borderRadius: '8px' }} onClick={() => togglePermiso('contactos')}>
                <div className="toggle-info">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Users size={18}/> Contactos</h4>
                  <p>Leer tu lista de contactos telefónicos y correos.</p>
                </div>
                <div className={`toggle-switch ${permisos.contactos ? 'activo' : ''}`}>
                  <div className="toggle-thumb"></div>
                </div>
              </div>

              <div className="toggle-row" style={{ backgroundColor: '#fff', border: '1px solid var(--color-borde)', borderRadius: '8px' }} onClick={() => togglePermiso('ubicacion')}>
                <div className="toggle-info">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={18}/> Ubicación Precisa</h4>
                  <p>Obtener ubicación GPS en todo momento.</p>
                </div>
                <div className={`toggle-switch ${permisos.ubicacion ? 'activo' : ''}`}>
                  <div className="toggle-thumb"></div>
                </div>
              </div>

            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: esConfiguracionPerfecta ? 'rgba(16, 185, 129, 0.1)' : 'white', border: `2px solid ${esConfiguracionPerfecta ? '#10b981' : 'transparent'}`, borderRadius: 'var(--radio-principal)', textAlign: 'center' }}>
              {esConfiguracionPerfecta ? (
                <div>
                  <CheckCircle2 color="#10b981" size={48} style={{ margin: '0 auto 0.5rem auto' }}/>
                  <h3 style={{ color: '#10b981', margin: 0 }}>¡Auditoría Perfecta!</h3>
                  <p style={{ marginTop: '0.5rem' }}>Dejaste solo el permiso de cámara (necesario para activar el flash) y eliminaste los permisos invasivos.</p>
                </div>
              ) : permisosAbusivosActivos ? (
                <div>
                  <ShieldAlert color="#ef4444" size={48} style={{ margin: '0 auto 0.5rem auto' }}/>
                  <h3 style={{ color: '#ef4444', margin: 0 }}>Riesgo de Privacidad</h3>
                  <p style={{ marginTop: '0.5rem' }}>Una linterna NO necesita tu micrófono, GPS ni contactos. Revoca esos permisos de inmediato.</p>
                </div>
              ) : !permisos.camara ? (
                <div>
                  <XCircle color="#f59e0b" size={48} style={{ margin: '0 auto 0.5rem auto' }}/>
                  <h3 style={{ color: '#f59e0b', margin: 0 }}>App Inutilizable</h3>
                  <p style={{ marginTop: '0.5rem' }}>Revocaste todos los permisos, pero la linterna requiere acceso a la cámara para poder encender el LED.</p>
                </div>
              ) : null}
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
            <strong>Pregunta:</strong> Acabas de descargar un juego de carreras muy famoso. Al abrirlo por primera vez, te pide "Acceso a tu Micrófono". ¿Qué debes hacer?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Aceptar (Permitir). Todos los juegos piden esos permisos para funcionar mejor.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Rechazar (Denegar). Un juego de carreras no tiene una justificación lógica para usar el micrófono, a menos que tenga chat de voz activo. Es preferible denegarlo.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> El Principio de Mínimo Privilegio también aplica para tu teléfono: no otorgues permisos a menos que sean estrictamente lógicos y necesarios para el funcionamiento central de la app.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default RedesSociales3ro;
