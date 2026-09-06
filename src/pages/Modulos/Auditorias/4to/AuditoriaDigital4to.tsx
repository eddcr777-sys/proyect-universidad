import React from 'react';
import {
  ShieldCheck,
  Lock,
  Globe,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  XCircle,
  Award,
  WifiOff,
  EyeOff
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import { CajaExplicacionDinamica } from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { useAuditoria4to, HABITOS_4TO } from '../../../../hooks/HooksAuditoria/useAuditoria4to';
import '../1ro/AuditoriaDigital1ro.css'; // Estilos base reutilizados
import './AuditoriaDigital4to.css'; // Estilos específicos de 4to

export const AuditoriaDigital4to: React.FC = () => {
  const {
    habitosComprobados,
    toggleHabito,
    totalHabitos,
    habitosCompletados,
    porcentajeHabitos,
    traficos,
    resultadoTrafico,
    evaluarTrafico,
    escenariosRed,
    respuestasRed,
    responderRed,
    resultadoRed,
    preguntasQuiz,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado
  } = useAuditoria4to();

  return (
    <main className="pagina-modulo-auditoria">
      <HeaderModulo
        grado="4to"
        modulo="4: Análisis de Tráfico"
        titulo="Auditoría de Tráfico de Red y Protocolos"
        subTitulo="Cada vez que navegas, tus datos viajan en paquetes. Aprende a distinguir entre comunicaciones seguras (HTTPS, VPN) e inseguras (HTTP, FTP) para protegerte de miradas indiscretas."
        categoria="Auditoría Avanzada"
        tiempoEstimado="55 min"
        icono={<Globe size={36} />}
      />

      <div className="contenedor-auditoria-contenido">
        {/* ========== SECCIÓN 1: TEORÍA ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. El viaje de tus datos</h2>
          </div>
          <p className="texto-lectura-modulo">
            Cuando envías un mensaje, una foto o una contraseña, todo se divide en <strong>paquetes</strong> que viajan por la red. Si esos paquetes no van cifrados, cualquier persona conectada a la misma red (Wi-Fi público, por ejemplo) puede capturarlos con un sniffer y leer su contenido.
          </p>

          <div className="grid-pilares-higiene">
            <div className="caja-pilar-higiene">
              <Lock className="icono-pilar verde" size={28} />
              <h3>HTTPS = Candado</h3>
              <p>El protocolo HTTPS cifra los datos entre tu navegador y el servidor. Así, aunque capturen los paquetes, no podrán entenderlos.</p>
            </div>

            <div className="caja-pilar-higiene">
              <WifiOff className="icono-pilar rojo" size={28} />
              <h3>HTTP = Texto plano</h3>
              <p>HTTP no cifra nada. Tus contraseñas, cookies y mensajes viajan en claro, legibles para cualquiera que espíe la red.</p>
            </div>

            <div className="caja-pilar-higiene">
              <EyeOff className="icono-pilar azul" size={28} />
              <h3>VPN = Túnel blindado</h3>
              <p>Una VPN cifra todo tu tráfico, incluso las consultas DNS, protegiéndote en redes abiertas.</p>
            </div>

            <div className="caja-pilar-higiene">
              <ShieldCheck className="icono-pilar morado" size={28} />
              <h3>Cifrado de extremo a extremo</h3>
              <p>En apps de mensajería como WhatsApp o Signal, ni siquiera la empresa puede leer tus conversaciones.</p>
            </div>
          </div>

          <div className="conceptos-clave-grid">
            <h3 className="titulo-mini-seccion">Glosario y Términos Clave</h3>
            <div className="lista-conceptos">
              <div className="item-concepto">
                <strong>📖 ¿Qué es un Sniffer (Analizador de Paquetes)?</strong>
                <p>Software (como Wireshark) que captura todos los paquetes que viajan por una red Wi-Fi o de cable.</p>
                <strong>⚙️ ¿Para qué sirve / Qué riesgo implica?</strong>
                <p>En manos de auditores sirve para diagnosticar fallas de red, pero atacantes lo usan para espiar contraseñas no cifradas.</p>
              </div>
              <div className="item-concepto">
                <strong>📖 ¿Qué es DNS sin Cifrar?</strong>
                <p>Consultas del sistema para traducir nombres de dominio (google.com) a IP en texto claro.</p>
                <strong>⚙️ ¿Para qué sirve / Qué riesgo implica?</strong>
                <p>Permite a terceros o proveedores ver exactamente qué sitios web visitas e incluso redireccionarte a sitios falsos (DNS Spoofing).</p>
              </div>
              <div className="item-concepto">
                <strong>📖 ¿Qué es un Gemelo Malvado (Evil Twin)?</strong>
                <p>Un punto de acceso Wi-Fi falso creado por un atacante con el mismo nombre (SSID) que una red legítima.</p>
                <strong>⚙️ ¿Para qué sirve / Qué riesgo implica?</strong>
                <p>Engaña a los celulares para que se conecten automáticamente y pasen todo su tráfico a través del atacante.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECCIÓN 2: SIMULADOR DE TRÁFICO ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Lock className="icono-bloque-rojo" size={24} />
            <h2>2. ¿Qué tráfico es seguro?</h2>
          </div>
          <CajaExplicacionDinamica
            enQueConsiste="Simulador interactivo de análisis de protocolos de red (HTTP vs HTTPS, FTP vs SFTP, DNS sin cifrar)."
            comoInteractuar="Analiza cada tipo de tráfico presentado y presiona 'Seguro' si la conexión está cifrada o 'Inseguro' si viaja en texto plano."
            paraQueSirve="Aprenderás a distinguir conexiones vulnerables antes de enviar datos confidenciales en la web."
          />

          <div className="traficos-lista">
            {traficos.map(trafico => (
              <div key={trafico.id} className="trafico-card">
                <div className="trafico-info">
                  <h3 className="trafico-protocolo">{trafico.protocolo}</h3>
                  <p className="trafico-descripcion">{trafico.descripcion}</p>
                </div>
                <div className="trafico-acciones">
                  <button
                    className={`boton-trafico seguro ${resultadoTrafico[trafico.id] === true && trafico.esSeguro === true ? 'acierto' : ''}`}
                    onClick={() => evaluarTrafico(trafico.id, true)}
                  >
                    <ShieldCheck size={18} /> Seguro
                  </button>
                  <button
                    className={`boton-trafico inseguro ${resultadoTrafico[trafico.id] === true && trafico.esSeguro === false ? 'acierto' : ''}`}
                    onClick={() => evaluarTrafico(trafico.id, false)}
                  >
                    <Lock size={18} /> Inseguro
                  </button>
                </div>
                {resultadoTrafico[trafico.id] !== undefined && (
                  <div className={`feedback-proceso ${resultadoTrafico[trafico.id] ? 'correcto' : 'incorrecto'}`}>
                    {resultadoTrafico[trafico.id] ? (
                      <><CheckCircle2 size={18} /> ¡Acertaste! </>
                    ) : (
                      <><XCircle size={18} /> Incorrecto: </>
                    )}
                    {trafico.explicacion}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========== SECCIÓN 3: ESCENARIOS DE RED PÚBLICA ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <WifiOff className="icono-bloque-amarillo" size={24} />
            <h2>3. Decisiones en redes abiertas</h2>
          </div>
          <CajaExplicacionDinamica
            enQueConsiste="Dilemas tácticos sobre navegación segura al conectarse a redes desconocidas o públicas."
            comoInteractuar="Lee la situación del escenario y selecciona la respuesta con la mejor práctica de protección."
            paraQueSirve="Fortalece tu juicio para navegar en cafeterías, plazas y transportes públicos sin exponer tu privacidad."
          />

          <div className="escenarios-lista">
            {escenariosRed.map(escenario => (
              <div key={escenario.id} className="escenario-card">
                <h3 className="escenario-titulo">{escenario.titulo}</h3>
                <p className="escenario-descripcion">{escenario.descripcion}</p>
                <div className="opciones-escenario">
                  {escenario.opciones.map((opcion, idx) => (
                    <button
                      key={idx}
                      className={`opcion-escenario-btn ${respuestasRed[escenario.id] === idx ? 'seleccionada' : ''}`}
                      onClick={() => responderRed(escenario.id, idx)}
                    >
                      {String.fromCharCode(65 + idx)}) {opcion}
                    </button>
                  ))}
                </div>
                {resultadoRed[escenario.id] !== undefined && (
                  <div className={`feedback-escenario ${resultadoRed[escenario.id] ? 'correcto' : 'incorrecto'}`}>
                    {resultadoRed[escenario.id] ? (
                      <><CheckCircle2 size={18} /> ¡Correcto! </>
                    ) : (
                      <><XCircle size={18} /> Atención: </>
                    )}
                    {escenario.explicacion}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========== SECCIÓN 4: CHECKLIST ========== */}
        <section className="bloque-modulo-tarjeta diagnostico-caja">
          <div className="encabezado-bloque">
            <ShieldCheck className="icono-bloque-verde" size={24} />
            <h2>4. Checklist de Navegación Segura</h2>
          </div>
          <CajaExplicacionDinamica
            enQueConsiste="Lista de autoevaluación de hábitos de cifrado y uso de protocolos de comunicación."
            comoInteractuar="Haz clic en los hábitos que ya pones en práctica diariamente para calcular tu porcentaje de inmunidad."
            paraQueSirve="Te brinda una hoja de ruta clara para elevar tus estándares de navegación segura."
          />

          <div className="lista-habitos-interactiva">
            {HABITOS_4TO.map((habito) => (
              <div
                key={habito.id}
                className={`item-habito-check ${habitosComprobados[habito.id] ? 'activo' : ''}`}
                onClick={() => toggleHabito(habito.id)}
              >
                <input
                  type="checkbox"
                  checked={!!habitosComprobados[habito.id]}
                  onChange={() => {}}
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
              <strong>Seguridad en la Navegación: {porcentajeHabitos}%</strong>
              <span>({habitosCompletados} de {totalHabitos} prácticas)</span>
            </div>
            <div className="barra-fondo-diagnostico">
              <div className="barra-relleno-diagnostico" style={{ width: `${porcentajeHabitos}%` }}></div>
            </div>
            {porcentajeHabitos === 100 ? (
              <div className="mensaje-resultado excelente">
                🏆 ¡Perfecto! Eres un navegante consciente y protegido.
              </div>
            ) : (
              <div className="mensaje-resultado inicial">
                💡 Completa todas las prácticas para reducir los riesgos al navegar.
              </div>
            )}
          </div>
        </section>

        {/* ========== SECCIÓN 5: QUIZ ========== */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-azul" size={24} />
            <h2>5. Evaluación Final</h2>
          </div>
          <p className="texto-lectura-modulo">
            Demuestra lo aprendido.
          </p>

          <div className="quiz-container">
            {preguntasQuiz.map(pregunta => (
              <div key={pregunta.id} className="pregunta-quiz">
                <h3 className="pregunta-titulo">{pregunta.id}. {pregunta.pregunta}</h3>
                <div className="opciones-quiz-modulo">
                  {pregunta.opciones.map((opcion, idx) => (
                    <button
                      key={idx}
                      className={`opcion-quiz-btn ${respuestasQuiz[pregunta.id] === idx ? 'seleccionada' : ''}`}
                      onClick={() => responderPreguntaQuiz(pregunta.id, idx)}
                    >
                      {String.fromCharCode(65 + idx)}) {opcion}
                    </button>
                  ))}
                </div>
                {quizEnviado && respuestasQuiz[pregunta.id] !== undefined && (
                  <div className={`feedback-quiz-item ${respuestasQuiz[pregunta.id] === pregunta.respuestaCorrecta ? 'correcto' : 'incorrecto'}`}>
                    {respuestasQuiz[pregunta.id] === pregunta.respuestaCorrecta ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <XCircle size={18} />
                    )}
                    <span>{pregunta.explicacion}</span>
                  </div>
                )}
              </div>
            ))}

            <div className="acciones-quiz">
              <button
                className="boton-enviar-quiz"
                onClick={enviarQuiz}
                disabled={quizEnviado}
              >
                Enviar respuestas
              </button>
              {puntajeQuiz && (
                <div className="resultado-quiz">
                  <Award size={24} className="icono-premio" />
                  <p>
                    Obtuviste {puntajeQuiz.correctas} de {puntajeQuiz.total} correctas.
                    {puntajeQuiz.correctas === puntajeQuiz.total ? ' 🏆 ¡Perfecto!' : ' ¡Sigue practicando!'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuditoriaDigital4to;