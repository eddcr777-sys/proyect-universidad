import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  ShieldCheck,
  Timer,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  KeyRound
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/ProteccionCuentas1ro.css';

export const ProteccionCuentas3ro: React.FC = () => {
  const [faseSimulador, setFaseSimulador] = useState(1); // 1: Login, 2: 2FA, 3: Éxito
  const [codigoGenerado, setCodigoGenerado] = useState('');
  const [inputCodigo, setInputCodigo] = useState('');
  const [error2FA, setError2FA] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(30);
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  // Generar código aleatorio
  const generarNuevoCodigo = () => {
    const num = Math.floor(100000 + Math.random() * 900000);
    setCodigoGenerado(num.toString());
    setTiempoRestante(30);
  };

  useEffect(() => {
    if (faseSimulador === 2) {
      generarNuevoCodigo();
      const intervalo = setInterval(() => {
        setTiempoRestante(prev => {
          if (prev <= 1) {
            generarNuevoCodigo();
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(intervalo);
    }
  }, [faseSimulador]);

  const simularLogin = () => {
    setFaseSimulador(2);
  };

  const verificarCodigo = () => {
    if (inputCodigo === codigoGenerado) {
      setFaseSimulador(3);
      setError2FA(false);
    } else {
      setError2FA(true);
    }
  };

  const reiniciarSimulador = () => {
    setFaseSimulador(1);
    setInputCodigo('');
    setError2FA(false);
  };

  return (
    <main className="pagina-modulo-proteccion">
      <HeaderModulo
        grado="3ro"
        modulo="3: Autenticación en Dos Pasos (2FA)"
        titulo="Tu Segundo Escudo Protector"
        subTitulo="La autenticación en dos pasos agrega una segunda cerradura a tus cuentas: aunque descubran tu contraseña, no podrán entrar sin tu código temporal."
        categoria="Protección de Cuentas y Accesos"
        tiempoEstimado="45 min"
        icono={<Smartphone size={36} />}
      />

      <div className="contenedor-proteccion-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. ¿Qué es el 2FA?</h2>
          </div>
          <p className="texto-lectura-modulo">
            El 2FA (Two-Factor Authentication) significa que para entrar a tu cuenta necesitas dos cosas: algo que <strong>sabes</strong> (tu contraseña) y algo que <strong>tienes</strong> (tu celular).
          </p>

          <div className="grid-pilares-proteccion">
            <div className="caja-pilar-proteccion">
              <KeyRound className="icono-pilar azul" size={28} />
              <h3 style={{ fontSize: '1rem' }}>Paso 1: La Contraseña</h3>
              <p>Tu clave secreta habitual. Si un hacker la descubre, pasará esta primera barrera.</p>
            </div>

            <div className="caja-pilar-proteccion">
              <Smartphone className="icono-pilar verde" size={28} />
              <h3 style={{ fontSize: '1rem' }}>Paso 2: El Código Temporal</h3>
              <p>Un número de 6 dígitos que cambia cada 30 segundos en tu App Autenticadora (ej. Google Authenticator o Authy).</p>
            </div>

            <div className="caja-pilar-proteccion">
              <ShieldCheck className="icono-pilar verde" size={28} />
              <h3 style={{ fontSize: '1rem' }}>Bloqueo Total</h3>
              <p>Como el hacker no tiene tu celular físico, la cuenta no le permite entrar y tus datos quedan a salvo.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR 2FA */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <Smartphone className="icono-bloque-azul" size={24} />
            <h2>2. Simulador: Inicia Sesión con 2FA</h2>
          </div>
          <p className="subtitulo-bloque">
            Prueba cómo funciona este segundo escudo al intentar entrar a tu correo.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
            
            {/* Dispositivo de Login */}
            <div style={{ backgroundColor: '#fff', padding: '1.5rem', border: '1px solid var(--color-borde)', borderRadius: 'var(--radio-principal)' }}>
              <h3 style={{ marginTop: 0, marginBottom: '1.5rem', textAlign: 'center' }}>Pantalla de tu Computadora</h3>
              
              {faseSimulador === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="text" value="estudiante@liceolemus.edu.ve" readOnly className="input-password-simulador" style={{ fontSize: '1rem', color: '#64748b' }} />
                  <input type="password" value="********" readOnly className="input-password-simulador" style={{ fontSize: '1rem', color: '#64748b' }} />
                  <button onClick={simularLogin} className="btn-decision seguro" style={{ justifyContent: 'center' }}>
                    Iniciar Sesión
                  </button>
                </div>
              )}

              {faseSimulador === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <ShieldCheck size={48} color="var(--color-ciber-primario)" />
                  <h4 style={{ margin: 0, textAlign: 'center' }}>Verificación en Dos Pasos</h4>
                  <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>Ingresa el código temporal generado en tu aplicación móvil.</p>
                  
                  <input 
                    type="text" 
                    placeholder="000000" 
                    maxLength={6}
                    value={inputCodigo}
                    onChange={(e) => setInputCodigo(e.target.value.replace(/[^0-9]/g, ''))}
                    className="input-password-simulador" 
                    style={{ fontSize: '2rem', textAlign: 'center', letterSpacing: '0.5rem', fontWeight: 'bold' }} 
                  />
                  
                  {error2FA && <span style={{ color: 'var(--color-ciber-alerta)', fontSize: '0.9rem', fontWeight: 'bold' }}>❌ Código incorrecto o expirado</span>}
                  
                  <button onClick={verificarCodigo} className="btn-decision seguro" style={{ justifyContent: 'center', width: '100%' }}>
                    Verificar
                  </button>
                </div>
              )}

              {faseSimulador === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', padding: '2rem 0' }}>
                  <CheckCircle2 size={64} color="var(--color-ciber-secundario)" />
                  <h4 style={{ margin: 0, textAlign: 'center', color: 'var(--color-ciber-secundario)' }}>¡Acceso Concedido!</h4>
                  <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>Has ingresado a tu cuenta de forma segura.</p>
                  <button onClick={reiniciarSimulador} className="btn-decision" style={{ marginTop: '1rem' }}>
                    Volver a probar
                  </button>
                </div>
              )}
            </div>

            {/* App Autenticadora en Celular */}
            <div style={{ backgroundColor: '#1e293b', color: '#fff', padding: '1.5rem', border: '8px solid #0f172a', borderRadius: '24px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ width: '40px', height: '5px', backgroundColor: '#334155', borderRadius: '10px', alignSelf: 'center', marginBottom: '1.5rem' }}></div>
              <h3 style={{ marginTop: 0, marginBottom: '1.5rem', textAlign: 'center', fontSize: '1rem', color: '#94a3b8' }}>📱 App Autenticadora</h3>
              
              {faseSimulador === 2 ? (
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '12px', marginTop: 'auto', marginBottom: 'auto' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 'bold' }}>Correo Liceo</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: tiempoRestante < 5 ? '#ef4444' : '#38bdf8' }}>
                      <Timer size={16} /> {tiempoRestante}s
                    </span>
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '0.3rem', color: '#f8fafc', textAlign: 'center' }}>
                    {codigoGenerado.slice(0,3)} {codigoGenerado.slice(3,6)}
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', color: '#64748b', marginTop: 'auto', marginBottom: 'auto' }}>
                  Esperando solicitud de inicio de sesión...
                </div>
              )}
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
            <strong>Pregunta:</strong> Es mejor usar una aplicación autenticadora (como Google Authenticator) en lugar de recibir los códigos 2FA por Mensajes de Texto (SMS). ¿Por qué?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Porque la aplicación gasta menos saldo del celular.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Porque los SMS pueden ser interceptados o pueden clonar tu línea telefónica (SIM Swapping), mientras que la App genera códigos sin necesitar señal.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> El ataque "SIM Swapping" permite a un delincuente robar tu número de teléfono en la operadora y recibir tus SMS. Las Apps Autenticadoras son mucho más seguras.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProteccionCuentas3ro;
