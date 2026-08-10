import React, { useState } from 'react';
import {
  Wifi,
  Bluetooth,
  MonitorSmartphone,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ShieldAlert
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/AuditoriaDigital1ro.css'; // Reutilizamos los estilos base

interface Habito2do {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

const HABITOS_2DO: Habito2do[] = [
  { id: '1', texto: 'Tengo desactivado el Wi-Fi y el Bluetooth cuando salgo de mi casa y no los estoy usando.', categoria: 'Conexiones', enfoque: 'Evita conexiones automáticas a redes maliciosas.' },
  { id: '2', texto: 'Nunca realizo compras ni inicio sesión en redes sociales estando conectado a un Wi-Fi público (plazas, cafés).', categoria: 'Redes Abiertas', enfoque: 'Las redes sin contraseña permiten a otros interceptar lo que envías.' },
  { id: '3', texto: 'He revisado la lista de "Dispositivos conectados" en mi cuenta de Google/redes y he borrado los que no reconozco.', categoria: 'Cuentas', enfoque: 'Asegura que nadie más tenga acceso a tus sesiones activas.' },
];

export const AuditoriaDigital2do: React.FC = () => {
  const [comprobados, setComprobados] = useState<Record<string, boolean>>({});
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const toggleHabito = (id: string) => {
    setComprobados(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalComprobados = Object.values(comprobados).filter(Boolean).length;
  const porcentaje = Math.round((totalComprobados / HABITOS_2DO.length) * 100);

  return (
    <main className="pagina-modulo-auditoria">
      <HeaderModulo
        grado="2do"
        modulo="2: Redes y Conexiones"
        titulo="Auditoría de Redes y Dispositivos Vinculados"
        subTitulo="Conectarse a redes Wi-Fi públicas sin contraseña expone tus datos a miradas indiscretas. Aprende a conectarte de forma segura en 2do Año."
        categoria="Auditoría e Higiene"
        tiempoEstimado="40 min"
        icono={<Wifi size={36} />}
      />

      <div className="contenedor-auditoria-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Peligros de las Conexiones Invisibles</h2>
          </div>
          <p className="texto-lectura-modulo">
            Nuestro teléfono se comunica constantemente con el mundo exterior. A veces, si no somos cuidadosos, se conecta a redes o dispositivos que pueden intentar extraer nuestra información personal.
          </p>

          <div className="grid-pilares-higiene">
            <div className="caja-pilar-higiene">
              <Wifi className="icono-pilar rojo" size={28} />
              <h3>Wi-Fi Públicas Abiertas</h3>
              <p>Las redes de plazas o aeropuertos sin clave no cifran tu información. Un ciberdelincuente conectado a la misma red puede "escuchar" todo lo que envías.</p>
            </div>

            <div className="caja-pilar-higiene">
              <Bluetooth className="icono-pilar azul" size={28} />
              <h3>Bluetooth Innecesario</h3>
              <p>Dejar el Bluetooth encendido todo el tiempo gasta batería y puede permitir intentos de conexión de dispositivos desconocidos.</p>
            </div>

            <div className="caja-pilar-higiene">
              <MonitorSmartphone className="icono-pilar verde" size={28} />
              <h3>Sesiones Vinculadas</h3>
              <p>Muchos servicios te permiten ver en qué otros celulares o computadoras está abierta tu cuenta. Debes revisar esta lista frecuentemente.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: CHECKLIST DE CONEXIONES */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <ShieldAlert className="icono-bloque-rojo" size={24} />
            <h2>2. Checklist de Conexiones Seguras</h2>
          </div>
          <p className="subtitulo-bloque">
            Audita tus hábitos de conexión marcando las prácticas que ya realizas:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_2DO.map((habito) => (
              <div
                key={habito.id}
                className={`item-habito-check ${comprobados[habito.id] ? 'activo' : ''}`}
                onClick={() => toggleHabito(habito.id)}
              >
                <input
                  type="checkbox"
                  checked={!!comprobados[habito.id]}
                  onChange={() => { }}
                  className="checkbox-custom"
                />
                <div className="info-item-habito">
                  <span className="categoria-badge-mini">{habito.categoria}</span>
                  <p className="texto-habito">{habito.texto}</p>
                  <span className="importancia-habito">📌 Por qué es importante: {habito.enfoque}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="resultado-diagnostico-bar">
            <div className="info-porcentaje">
              <strong>Seguridad de Conexión: {porcentaje}%</strong>
              <span>({totalComprobados} de {HABITOS_2DO.length} verificaciones)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentaje}%` }}></div>
            </div>
            {porcentaje === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Genial! Tus conexiones están bien controladas.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Desactiva el Wi-Fi cuando salgas de casa para protegerte de redes falsas.
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
            <strong>Pregunta:</strong> Estás en una cafetería y necesitas revisar un mensaje urgente en tu correo, pero no tienes datos móviles. La cafetería tiene un Wi-Fi gratuito sin contraseña. ¿Qué precaución debes tomar?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Evitar iniciar sesión o escribir contraseñas, ya que la red abierta no es segura y alguien podría interceptar los datos.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Conectarte y hacer lo que necesites rápido; como es un lugar público, la red seguro está protegida por los dueños.
            </button>
          </div>

          {respuestaQuiz === 1 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> Las redes abiertas envían tu información "en texto claro". Es mejor esperar a tener datos o usar una red segura con contraseña conocida para iniciar sesiones.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default AuditoriaDigital2do;
