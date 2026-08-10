import React, { useState } from 'react';
import {
  Boxes,
  DatabaseBackup,
  AlertOctagon,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  Copy,
  LockKeyhole
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/ProteccionCuentas1ro.css'; // Reutilizamos estilos base

interface CuentaSimulada {
  id: number;
  servicio: string;
  passwordActual: string;
  esReutilizada: boolean;
}

const CUENTAS_INICIALES: CuentaSimulada[] = [
  { id: 1, servicio: 'Instagram', passwordActual: 'Liceo2024!', esReutilizada: true },
  { id: 2, servicio: 'Facebook', passwordActual: 'Liceo2024!', esReutilizada: true },
  { id: 3, servicio: 'Correo Gmail', passwordActual: 'Liceo2024!', esReutilizada: true },
];

export const ProteccionCuentas2do: React.FC = () => {
  const [cuentas, setCuentas] = useState<CuentaSimulada[]>(CUENTAS_INICIALES);
  const [gestorActivo, setGestorActivo] = useState(false);
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const activarGestor = () => {
    setGestorActivo(true);
    setCuentas([
      { id: 1, servicio: 'Instagram', passwordActual: 'XyZ#99$pLq!', esReutilizada: false },
      { id: 2, servicio: 'Facebook', passwordActual: 'tR4%mK1@vBn', esReutilizada: false },
      { id: 3, servicio: 'Correo Gmail', passwordActual: '8bF*2wQ!hLm', esReutilizada: false },
    ]);
  };

  const restablecer = () => {
    setGestorActivo(false);
    setCuentas(CUENTAS_INICIALES);
  };

  return (
    <main className="pagina-modulo-proteccion">
      <HeaderModulo
        grado="2do"
        modulo="2: Gestores de Contraseñas"
        titulo="El Riesgo de Reutilizar Claves"
        subTitulo="Aprende por qué debes tener una clave distinta para cada plataforma y cómo recordarlas usando gestores de contraseñas."
        categoria="Protección de Cuentas y Accesos"
        tiempoEstimado="40 min"
        icono={<Boxes size={36} />}
      />

      <div className="contenedor-proteccion-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. El Efecto Dominó de las Contraseñas</h2>
          </div>
          <p className="texto-lectura-modulo">
            Si usas la misma contraseña para tu correo, tus redes sociales y tus juegos, y un atacante descubre esa clave en un sitio web poco seguro, <strong>tendrá acceso instantáneo a toda tu vida digital.</strong>
          </p>

          <div className="grid-pilares-proteccion">
            <div className="caja-pilar-proteccion">
              <AlertOctagon className="icono-pilar rojo" size={28} />
              <h3>Reutilización de Claves</h3>
              <p>El error número uno en ciberseguridad. Una clave vulnerada significa todas las cuentas vulneradas.</p>
            </div>

            <div className="caja-pilar-proteccion">
              <DatabaseBackup className="icono-pilar azul" size={28} />
              <h3>Gestores de Contraseñas</h3>
              <p>Aplicaciones seguras (como Bitwarden o Google Password Manager) que crean y guardan claves difíciles por ti.</p>
            </div>

            <div className="caja-pilar-proteccion">
              <LockKeyhole className="icono-pilar verde" size={28} />
              <h3>Clave Maestra</h3>
              <p>Con un gestor, solo necesitas memorizar <strong>una única contraseña fuerte (La Clave Maestra)</strong> para acceder a todas las demás.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR DE GESTOR */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <Boxes className="icono-bloque-azul" size={24} />
            <h2>2. Simulador: Activa el Gestor de Contraseñas</h2>
          </div>
          <p className="subtitulo-bloque">
            {gestorActivo 
              ? "¡Excelente! Ahora cada cuenta tiene una clave robusta y única guardada de forma segura." 
              : "Observa cómo todas tus cuentas usan la misma clave vulnerable. Haz clic en 'Activar Gestor' para solucionar esto."}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            {cuentas.map(cuenta => (
              <div 
                key={cuenta.id} 
                style={{
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '1rem',
                  backgroundColor: gestorActivo ? 'rgba(5, 150, 105, 0.05)' : 'rgba(220, 38, 38, 0.05)',
                  border: `1px solid ${gestorActivo ? 'var(--color-ciber-secundario)' : 'var(--color-ciber-alerta)'}`,
                  borderRadius: 'var(--radio-principal)'
                }}
              >
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>{cuenta.servicio}</h4>
                  <code style={{ fontSize: '1.1rem', backgroundColor: '#fff', padding: '0.25rem 0.5rem', border: '1px solid #ccc' }}>
                    {cuenta.passwordActual}
                  </code>
                </div>
                <div>
                  {cuenta.esReutilizada ? (
                    <span style={{ color: 'var(--color-ciber-alerta)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 'bold' }}>
                      <AlertOctagon size={20} /> Vulnerable
                    </span>
                  ) : (
                    <span style={{ color: 'var(--color-ciber-secundario)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 'bold' }}>
                      <CheckCircle2 size={20} /> Protegida
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            {!gestorActivo ? (
              <button 
                onClick={activarGestor}
                className="btn-decision seguro"
                style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.1rem' }}
              >
                <Sparkles size={20} /> Activar Gestor de Contraseñas
              </button>
            ) : (
              <button 
                onClick={restablecer}
                className="btn-decision"
                style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.1rem' }}
              >
                Restablecer Simulador
              </button>
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
            <strong>Pregunta:</strong> Si utilizas un gestor de contraseñas, este generará claves muy complejas para ti. ¿Qué pasa si olvidas la "Clave Maestra" que abre el gestor?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Perderé el acceso a todas mis contraseñas guardadas. Por eso la Clave Maestra debe ser fuerte pero fácil de recordar para mí (como una frase larga).
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) No pasa nada, siempre puedo pedirle a los creadores del gestor que me envíen mis contraseñas por correo.
            </button>
          </div>

          {respuestaQuiz === 1 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> Los buenos gestores de contraseñas (Zero-Knowledge) no guardan una copia de tu Clave Maestra en sus servidores. Si la olvidas, nadie podrá recuperar tus datos. ¡Cuídala bien!
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProteccionCuentas2do;
