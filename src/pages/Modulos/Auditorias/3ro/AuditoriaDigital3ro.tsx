import React, { useState } from 'react';
import {
  ShieldCheck,
  Save,
  Activity,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  FileSearch
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/AuditoriaDigital1ro.css'; // Reutilizamos los estilos base

interface Habito3ro {
  id: string;
  texto: string;
  categoria: string;
  enfoque: string;
}

const HABITOS_3RO: Habito3ro[] = [
  { id: '1', texto: 'He revisado que el antivirus o Windows Defender de mi equipo esté activo y actualizado.', categoria: 'Protección Base', enfoque: 'El antivirus es tu primera línea de defensa contra software malicioso.' },
  { id: '2', texto: 'Realizo copias de seguridad (Backups) de mis proyectos escolares importantes en la nube (ej. Google Drive) o en un pendrive.', categoria: 'Resguardo', enfoque: 'Te salva de perder todo si tu computadora se daña o sufre un ataque de Ransomware.' },
  { id: '3', texto: 'Compruebo que el cortafuegos (Firewall) de mi computadora esté habilitado.', categoria: 'Filtro de Red', enfoque: 'Bloquea intentos de conexión no autorizados desde internet hacia tu equipo.' },
  { id: '4', texto: 'He configurado las opciones de recuperación (correo alternativo, teléfono) en mis cuentas más importantes.', categoria: 'Recuperación', enfoque: 'Garantiza que puedas recuperar tu cuenta si olvidas la contraseña.' },
];

export const AuditoriaDigital3ro: React.FC = () => {
  const [comprobados, setComprobados] = useState<Record<string, boolean>>({});
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const toggleHabito = (id: string) => {
    setComprobados(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalComprobados = Object.values(comprobados).filter(Boolean).length;
  const porcentaje = Math.round((totalComprobados / HABITOS_3RO.length) * 100);

  return (
    <main className="pagina-modulo-auditoria">
      <HeaderModulo
        grado="3ro"
        modulo="3: Auditoría y Resguardo"
        titulo="Checklist de Ciberseguridad y Copias de Seguridad"
        subTitulo="Una auditoría es una revisión organizada de tus puntos débiles. Aplica tu primera lista de chequeo (Checklist) para proteger tu información en 3er Año."
        categoria="Auditoría e Higiene"
        tiempoEstimado="45 min"
        icono={<FileSearch size={36} />}
      />

      <div className="contenedor-auditoria-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Evaluando nuestras Defensas</h2>
          </div>
          <p className="texto-lectura-modulo">
            En 3er Año, no basta con limpiar el dispositivo; necesitamos comprobar que nuestras "murallas" (antivirus, copias de seguridad y cortafuegos) estén fuertes y preparadas para defendernos.
          </p>

          <div className="grid-pilares-higiene">
            <div className="caja-pilar-higiene">
              <Activity className="icono-pilar verde" size={28} />
              <h3>Estado del Antivirus</h3>
              <p>Un antivirus desactualizado es como un guardia de seguridad dormido. Debes verificar periódicamente que esté escaneando tu equipo.</p>
            </div>

            <div className="caja-pilar-higiene">
              <Save className="icono-pilar azul" size={28} />
              <h3>Regla de los Backups (3-2-1)</h3>
              <p>Tener 3 copias de tu información, en 2 medios distintos (computadora y nube), y al menos 1 copia fuera de tu casa.</p>
            </div>

            <div className="caja-pilar-higiene">
              <ShieldCheck className="icono-pilar rojo" size={28} />
              <h3>El Cortafuegos (Firewall)</h3>
              <p>Funciona como un filtro en la puerta de tu computadora que decide qué conexiones de internet entran y cuáles se bloquean.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: CHECKLIST TÉCNICO */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <FileSearch className="icono-bloque-azul" size={24} />
            <h2>2. Checklist Técnico de Resguardo</h2>
          </div>
          <p className="subtitulo-bloque">
            Audita el estado de protección técnica de tus dispositivos:
          </p>

          <div className="lista-habitos-interactiva">
            {HABITOS_3RO.map((habito) => (
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
              <strong>Índice de Resguardo: {porcentaje}%</strong>
              <span>({totalComprobados} de {HABITOS_3RO.length} controles técnicos)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentaje}%` }}></div>
            </div>
            {porcentaje === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Estupendo! Tu información y sistemas están debidamente respaldados.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Asegúrate de realizar tu copia de seguridad esta misma semana.
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
            <strong>Pregunta:</strong> Llevas semanas trabajando en el trabajo final de lapso en tu computadora, pero esta repentinamente se apaga y el disco duro se daña. ¿Qué medida preventiva debiste tomar para no perder tu trabajo?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Haber actualizado el antivirus la noche anterior.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Haber realizado copias de seguridad (Backups) regulares del archivo en la nube o en un pendrive.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> El antivirus protege contra software malicioso, pero solo un Backup te salva contra fallas de hardware, daños físicos o secuestro de datos.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default AuditoriaDigital3ro;
