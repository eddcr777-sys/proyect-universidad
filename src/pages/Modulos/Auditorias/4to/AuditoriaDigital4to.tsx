import React, { useState } from 'react';
import {
  Eye,
  Cookie,
  Lock,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Globe
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/AuditoriaDigital1ro.css';

interface Habito4to {
  id: string;
  texto: string;
  categoria: string;
  explicacion: string;
}

const HABITOS_4TO: Habito4to[] = [
  { id: '1', texto: 'Reviso los permisos concedidos a extensiones instaladas en el navegador web', categoria: 'Extensiones', explicacion: 'Extensiones maliciosas pueden leer las páginas que visitas y robar credenciales.' },
  { id: '2', texto: 'Bloqueo o borro periódicamente las cookies de rastreo de terceros (Third-Party Cookies)', categoria: 'Privacidad Web', explicacion: 'Evita que empresas publicitarias creen un perfil detallado de tus hábitos de navegación.' },
  { id: '3', texto: 'Audito si alguna de mis contraseñas ha aparecido en filtraciones masivas de datos', categoria: 'Filtraciones', explicacion: 'Herramientas como HaveIBeenPwned permiten saber si tu correo estuvo en un hackeo masivo.' },
  { id: '4', texto: 'Desactivo los permisos de cámara y micrófono a sitios web que no lo requieren', categoria: 'Permisos del Sistema', explicacion: 'Previene el espionaje no autorizado mediante la cámara del equipo.' },
];

export const AuditoriaDigital4to: React.FC = () => {
  const [comprobados, setComprobados] = useState<Record<string, boolean>>({});
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const toggleHabito = (id: string) => {
    setComprobados(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalComprobados = Object.values(comprobados).filter(Boolean).length;
  const porcentaje = Math.round((totalComprobados / HABITOS_4TO.length) * 100);

  return (
    <main className="pagina-modulo-auditoria">
      <HeaderModulo
        grado="4to"
        modulo="4: Auditoría de Navegación"
        titulo="Privacidad en Navegadores y Filtraciones"
        subTitulo="Conoce cómo auditar las cookies de rastreo, controlar permisos de navegador y verificar si tus credenciales han sido filtradas."
        categoria="Auditoría e Higiene"
        tiempoEstimado="45 min"
        icono="🌐"
      />

      <div className="contenedor-auditoria-contenido">
        {/* SECCIÓN 1: CONCEPTOS AVANZADOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. El Rastreo Digital en la Navegación Web</h2>
          </div>
          <p className="texto-lectura-modulo">
            Cada vez que navegas por internet, los servidores recolectan pequeños fragmentos de datos llamados <strong>Cookies</strong> y huellas de dispositivo para rastrear tus intereses y comportamiento.
          </p>

          <div className="grid-pilares-higiene">
            <div className="caja-pilar-higiene">
              <Cookie className="icono-pilar rojo" size={28} />
              <h3>Cookies de Seguimiento</h3>
              <p>Archivos guardados por terceros que registran qué páginas visitas, tus compras y búsquedas.</p>
            </div>

            <div className="caja-pilar-higiene">
              <Eye className="icono-pilar azul" size={28} />
              <h3>Permisos Sensibles</h3>
              <p>Sitios web no confiables pueden solicitar acceso a tu ubicación, cámara o archivos locales.</p>
            </div>

            <div className="caja-pilar-higiene">
              <Lock className="icono-pilar verde" size={28} />
              <h3>Bases de Datos Filtradas</h3>
              <p>Cuando un servicio en la nube es vulnerado, millones de nombres y contraseñas quedan expuestas.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: TEST AUDITORÍA */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <CheckCircle2 className="icono-bloque-verde" size={24} />
            <h2>2. Auditoría Avanzada de Navegación (4to Año)</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las verificaciones de privacidad que aplicas en tu navegador:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_4TO.map((habito) => (
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
                  <span className="importancia-habito">🛡️ Explicación: {habito.explicacion}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="resultado-diagnostico-bar">
            <div className="info-porcentaje">
              <strong>Control de Privacidad: {porcentaje}%</strong>
              <span>({totalComprobados} de {HABITOS_4TO.length} controles aplicados)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentaje}%` }}></div>
            </div>
            {porcentaje === 100 ? (
              <div className="mensaje-resultado excelente">
                🎉 ¡Excelente auditoría! Proteges tu privacidad contra el rastreo masivo en la web.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Revisa la configuración de privacidad de tu navegador para evitar filtraciones.
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 3: QUIZ RÁPIDO */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Desafío de Ciberseguridad</h2>
          </div>
          <p className="texto-lectura-modulo">
            <strong>Pregunta:</strong> Descubres que una plataforma donde estabas registrado sufrió una filtración de datos de millones de usuarios. ¿Cuál debe ser tu primera acción inmediata?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Desinstalar el navegador web y formatear el celular.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Cambiar de inmediato la contraseña en ese servicio y en cualquier otra cuenta donde la hayas reutilizado.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> Ante una filtración, el cambio de clave inmediato impide que utilicen tus credenciales vulneradas.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default AuditoriaDigital4to;
