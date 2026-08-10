import React, { useState } from 'react';
import { 
  Target, 
  Smartphone, 
  PhoneCall, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2,
  ShieldCheck,
  MailCheck
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/Phishing1ro.css';

interface VectorAtaque {
  id: number;
  tipo: string;
  canal: string;
  ejemplo: string;
  tecnicaMitigacion: string;
}

const VECTORES_4TO: VectorAtaque[] = [
  {
    id: 1,
    tipo: "Spear Phishing (Ataque Dirigido)",
    canal: "Correo Institucional / Personal",
    ejemplo: "Hola Carlos (estudiante de 4to A del L.B. Lemus Pérez), según tu informe de Química entregado ayer con el profesor Roberto, debes corregir este archivo adjunto malicioso.",
    tecnicaMitigacion: "El atacante recopiló tu nombre y materias en redes sociales. Confirma siempre con tu profesor en persona antes de abrir adjuntos sospechosos."
  },
  {
    id: 2,
    tipo: "Smishing (SMS Engañoso)",
    canal: "Mensajería SMS de Teléfono Móvil",
    ejemplo: "MRW Informa: Su paquete con guía #88921 no pudo ser entregado por dirección incompleta. Pague $1 de flete aquí: http://mrw-rastreo-envios.top",
    tecnicaMitigacion: "Las empresas de envíos jamás piden pagos por enlaces cortos desconocidos (.top / .xyz) vía SMS."
  },
  {
    id: 3,
    tipo: "Vishing (Suplantación Telefónica)",
    canal: "Llamada de Voz",
    ejemplo: "Llamada del soporte técnico de Movistar: 'Estamos actualizando su línea a 5G. Por favor dícteme el código de 6 dígitos que le acaba de llegar por mensaje'.",
    tecnicaMitigacion: "Nunca dictes códigos SMS de 6 dígitos por llamada; ese código es para registrar tu cuenta de WhatsApp o correo en otro equipo."
  }
];

export const Phishing4to: React.FC = () => {
  const [vectorAbierto, setVectorAbierto] = useState<Record<number, boolean>>({});
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const toggleVector = (id: number) => {
    setVectorAbierto(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="pagina-modulo-phishing">
      <HeaderModulo
        grado="4to"
        modulo="4: Phishing Avanzado"
        titulo="Spear Phishing, Smishing y Vishing"
        subTitulo="Aprende a identificar ataques dirigidos personalizados, engaños mediante mensajes de texto (SMS) y suplantación en llamadas de voz en 4to Año."
        categoria="Defensa Digital y Privacidad"
        tiempoEstimado="45 min"
        icono={<Target size={36} />}
      />

      <div className="contenedor-phishing-contenido">
        {/* SECCIÓN 1: CONCEPTOS AVANZADOS */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Vectores Modernos de Ciberataque</h2>
          </div>
          <p className="texto-lectura-phishing">
            Con el avance tecnológico, los ciberdelincuentes ya no solo envían correos masivos genéricos. Ahora investigan a la víctima para diseñar engaños altamente personalizados.
          </p>

          <div className="grid-senales-phishing">
            <div className="caja-senal-item">
              <Target className="icono-senal rojo" size={28} />
              <h3>Spear Phishing</h3>
              <p>Ataques hiperpersonalizados que usan tu nombre verdadero, colegio y nombres de amigos recopilados de tu huella digital.</p>
            </div>

            <div className="caja-senal-item">
              <Smartphone className="icono-senal azul" size={28} />
              <h3>Smishing (SMS)</h3>
              <p>Mensajes de texto falsos sobre paquetes retenidos, premios de operadoras telefónicas o alertas de bancos.</p>
            </div>

            <div className="caja-senal-item">
              <PhoneCall className="icono-senal amarillo" size={28} />
              <h3>Vishing (Llamadas de Voz)</h3>
              <p>Llamadas falsas de supuesto soporte para convencerte de dictar códigos de verificación de WhatsApp o claves.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: ANALIZADOR DE VECTORES */}
        <section className="bloque-phishing-tarjeta interactivo-caja">
          <div className="encabezado-bloque-phishing">
            <MailCheck className="icono-bloque-verde" size={24} />
            <h2>2. Análisis de Vectores de Ataque</h2>
          </div>
          <p className="subtitulo-bloque-phishing">
            Inspecciona cada tipo de ataque avanzado y descubre cómo neutralizarlo:
          </p>

          <div className="lista-simuladores-phishing">
            {VECTORES_4TO.map((vec) => (
              <div key={vec.id} className="tarjeta-mensaje-simulado">
                <div className="cabecera-mensaje-simulado">
                  <span className="badge-canal">{vec.tipo}</span>
                  <span className="remitente-texto">Canal: {vec.canal}</span>
                </div>

                <div className="cuerpo-mensaje-simulado">
                  <p>"{vec.ejemplo}"</p>
                </div>

                <button 
                  className="btn-decision seguro"
                  onClick={() => toggleVector(vec.id)}
                  style={{ width: 'fit-content' }}
                >
                  <ShieldCheck size={18} /> {vectorAbierto[vec.id] ? 'Ocultar Estrategia' : 'Ver Estrategia de Mitigación'}
                </button>

                {vectorAbierto[vec.id] && (
                  <div className="feedback-decision acierto">
                    <p style={{ margin: '0 0 0.5rem 0', fontWeight: '800' }}>
                      🛡️ Medida de Protección:
                    </p>
                    <p style={{ margin: 0 }}>{vec.tecnicaMitigacion}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: QUIZ RÁPIDO */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Diagnóstica</h2>
          </div>
          <p className="texto-lectura-phishing">
            <strong>Pregunta:</strong> Recibes una llamada diciéndote que te enviaron un código por SMS para actualizar tu línea telefónica y te piden que se los leas. ¿Qué debes hacer?
          </p>

          <div className="opciones-quiz-phishing">
            <button 
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) Dictar el código rápidamente para no perder el servicio telefónico.
            </button>
            <button 
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Colgar la llamada inmediatamente. Los códigos recibidos por SMS son privados y nunca deben dictarse a terceros.
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> Los códigos de verificación de 6 dígitos sirven para proteger o tomar el control de tus cuentas. Jamás deben compartirse.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Phishing4to;
