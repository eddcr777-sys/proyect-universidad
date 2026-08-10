import React, { useState } from 'react';
import {
  Trash2,
  LogOut,
  Smartphone,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Broom
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import './AuditoriaDigital1ro.css';

interface Habito1ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

const HABITOS_1RO: Habito1ro[] = [
  { id: '1', texto: 'He borrado los juegos o aplicaciones que ya no utilizo desde hace meses.', categoria: 'Limpieza', enfoque: 'Libera espacio y evita aplicaciones sin actualizar que puedan ser inseguras.' },
  { id: '2', texto: 'He cerrado mi sesión (Log Out) en computadoras prestadas o de la escuela.', categoria: 'Privacidad', enfoque: 'Evita que extraños accedan a tus cuentas personales.' },
  { id: '3', texto: 'Reviso mis fotos y archivos descargados, borrando lo que no necesito.', categoria: 'Organización', enfoque: 'Mantiene tu dispositivo rápido y libre de archivos basura.' },
];

export const AuditoriaDigital1ro: React.FC = () => {
  const [comprobados, setComprobados] = useState<Record<string, boolean>>({});
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const toggleHabito = (id: string) => {
    setComprobados(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalComprobados = Object.values(comprobados).filter(Boolean).length;
  const porcentaje = Math.round((totalComprobados / HABITOS_1RO.length) * 100);

  return (
    <main className="pagina-modulo-auditoria">
      <HeaderModulo
        grado="1ro"
        modulo="1: Higiene Básica"
        titulo="Auditoría e Higiene Digital Personal"
        subTitulo="Aprende a mantener tus equipos limpios y organizados en 1er Año. Una habitación ordenada es como un dispositivo seguro."
        categoria="Auditoría e Higiene"
        tiempoEstimado="35 min"
        icono={<Broom size={36} />}
      />

      <div className="contenedor-auditoria-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. ¿Qué es la Higiene Digital?</h2>
          </div>
          <p className="texto-lectura-modulo">
            Así como limpiamos nuestra habitación y nos lavamos las manos, nuestros teléfonos, tabletas y computadoras necesitan un <strong>mantenimiento constante</strong> para estar seguros y rápidos.
          </p>

          <div className="grid-pilares-higiene">
            <div className="caja-pilar-higiene">
              <Trash2 className="icono-pilar rojo" size={28} />
              <h3>Borrar lo Innecesario</h3>
              <p>Elimina apps y juegos que no usas. Si no los usas, no los necesitas, y solo ocupan espacio o pueden tener fallas de seguridad.</p>
            </div>

            <div className="caja-pilar-higiene">
              <LogOut className="icono-pilar azul" size={28} />
              <h3>Cerrar Sesión</h3>
              <p>Nunca dejes tu correo o red social abierta en una computadora que compartes con otras personas (ej. en el liceo o cibercafé).</p>
            </div>

            <div className="caja-pilar-higiene">
              <Smartphone className="icono-pilar verde" size={28} />
              <h3>Actualizar</h3>
              <p>Permite que tu dispositivo instale las actualizaciones. Estas contienen "parches" que arreglan errores de seguridad.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: CHECKLIST */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <Broom className="icono-bloque-verde" size={24} />
            <h2>2. Tu Primera Auditoría: Checklist</h2>
          </div>
          <p className="subtitulo-bloque">
            Marca las acciones que ya realizaste en tu dispositivo (celular, tableta o computadora):
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_1RO.map((habito) => (
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
              <strong>Progreso de Limpieza: {porcentaje}%</strong>
              <span>({totalComprobados} de {HABITOS_1RO.length} tareas completadas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentaje}%` }}></div>
            </div>
            {porcentaje === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Excelente! Tu dispositivo está limpio, organizado y seguro.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Intenta completar todas las tareas para mantener tu equipo al 100%.
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 3: QUIZ */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Rápida</h2>
          </div>
          <p className="texto-lectura-modulo">
            <strong>Pregunta:</strong> Vas a la biblioteca del liceo a usar una computadora. Entras a tu correo para enviar una tarea. ¿Qué debes hacer justo antes de irte?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Cerrar la pestaña del navegador dándole a la "X", eso es suficiente.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Hacer clic en "Cerrar sesión" o "Salir" dentro del correo, y luego cerrar el navegador.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> Cerrar la pestaña no cierra tu cuenta. Alguien que abra el navegador después de ti podría entrar a tu correo si no cierras la sesión correctamente.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default AuditoriaDigital1ro;
