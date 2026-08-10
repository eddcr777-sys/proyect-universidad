import React, { useState } from 'react';
import {
  Fingerprint,
  ScanFace,
  KeySquare,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  Settings
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/ProteccionCuentas1ro.css'; // Reutilizamos estilos base

export const ProteccionCuentas4to: React.FC = () => {
  const [pasoBiometria, setPasoBiometria] = useState(0); // 0: Inicial, 1: Escaneando, 2: Passkey Generada
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const simularBiometria = () => {
    setPasoBiometria(1);
    setTimeout(() => {
      setPasoBiometria(2);
    }, 2000);
  };

  const reiniciar = () => {
    setPasoBiometria(0);
  };

  return (
    <main className="pagina-modulo-proteccion">
      <HeaderModulo
        grado="4to"
        modulo="4: Biometría y Passkeys"
        titulo="El Futuro sin Contraseñas"
        subTitulo="Analiza los métodos de autenticación sin contraseña (Passkeys), huella dactilar y reconocimiento facial en dispositivos móviles para 4to Año."
        categoria="Protección de Cuentas y Accesos"
        tiempoEstimado="40 min"
        icono={<ScanFace size={36} />}
      />

      <div className="contenedor-proteccion-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Más allá de las Contraseñas</h2>
          </div>
          <p className="texto-lectura-modulo">
            Las contraseñas pueden olvidarse o ser robadas mediante Phishing. Por eso, los expertos en ciberseguridad crearon los <strong>Passkeys</strong> (Llaves de acceso), un sistema que usa la biometría de tu teléfono para iniciar sesión de manera segura.
          </p>

          <div className="grid-pilares-proteccion">
            <div className="caja-pilar-proteccion">
              <Fingerprint className="icono-pilar verde" size={28} />
              <h3>Biometría Local</h3>
              <p>Tu huella o rostro nunca viajan por internet. El teléfono las revisa localmente y le dice a la página web: "Sí, es el dueño".</p>
            </div>

            <div className="caja-pilar-proteccion">
              <KeySquare className="icono-pilar azul" size={28} />
              <h3>Passkeys (Criptografía)</h3>
              <p>Una llave matemática única generada entre tu dispositivo y el sitio web. Es inmune al Phishing porque solo funciona en el sitio real.</p>
            </div>

            <div className="caja-pilar-proteccion">
              <Settings className="icono-pilar rojo" size={28} />
              <h3>Desvincular Apps</h3>
              <p>Aprender a revisar qué aplicaciones de terceros (Juegos, Tests de personalidad) tienen permiso para leer tus datos de cuenta.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR PASSKEYS */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <ScanFace className="icono-bloque-azul" size={24} />
            <h2>2. Simulador: Creación de Passkey</h2>
          </div>
          <p className="subtitulo-bloque">
            Experimenta cómo iniciarías sesión en un sitio moderno usando tu sensor biométrico en lugar de escribir una contraseña.
          </p>

          <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: 'var(--radio-principal)', border: '1px solid var(--color-borde)', textAlign: 'center' }}>
            {pasoBiometria === 0 && (
              <div>
                <KeySquare size={48} color="var(--color-texto-secundario)" style={{ marginBottom: '1rem' }} />
                <h3>Configurar inicio de sesión rápido</h3>
                <p style={{ color: 'var(--color-texto-secundario)', marginBottom: '1.5rem' }}>
                  Usa tu huella digital, rostro o bloqueo de pantalla para iniciar sesión en "LiceoVirtual" sin contraseñas.
                </p>
                <button onClick={simularBiometria} className="btn-decision seguro" style={{ fontSize: '1.1rem' }}>
                  Crear Passkey
                </button>
              </div>
            )}

            {pasoBiometria === 1 && (
              <div>
                <Fingerprint size={64} color="var(--color-ciber-primario)" style={{ marginBottom: '1rem', animation: 'pulse 1.5s infinite' }} />
                <h3>Escaneando biometría...</h3>
                <p style={{ color: 'var(--color-texto-secundario)' }}>Verificando identidad en el dispositivo.</p>
              </div>
            )}

            {pasoBiometria === 2 && (
              <div>
                <CheckCircle2 size={64} color="var(--color-ciber-secundario)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: 'var(--color-ciber-secundario)' }}>Passkey Creado Exitosamente</h3>
                <p style={{ color: 'var(--color-texto-secundario)', marginBottom: '1.5rem' }}>
                  Tu dispositivo ha generado un par de claves criptográficas. La llave privada nunca salió de tu equipo.
                </p>
                <div style={{ backgroundColor: '#fff', padding: '1rem', fontFamily: 'monospace', color: '#64748b', wordBreak: 'break-all', marginBottom: '1.5rem', border: '1px solid #e2e8f0' }}>
                  0x7A9B3C...[Llave Pública registrada en el Servidor]
                </div>
                <button onClick={reiniciar} className="btn-decision">
                  Reiniciar Simulador
                </button>
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
            <strong>Pregunta:</strong> Cuando utilizas tu huella dactilar para iniciar sesión en una aplicación bancaria a través de un Passkey, ¿A dónde se envía la imagen de tu huella dactilar?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Se envía a los servidores del banco para que ellos comprueben que eres tú.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) A ninguna parte. El teléfono verifica la huella de forma local y solo envía un mensaje de "Aprobado" (junto con la llave criptográfica) al banco.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> La biometría es segura precisamente porque los datos físicos de tu huella o rostro nunca abandonan el chip de seguridad (Secure Enclave) de tu dispositivo.
            </div>
          )}
        </section>
      </div>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </main>
  );
};

export default ProteccionCuentas4to;
