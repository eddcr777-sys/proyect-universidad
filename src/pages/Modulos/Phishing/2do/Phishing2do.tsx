import React, { useState } from 'react';
import { 
  Globe, 
  Lock, 
  ShieldAlert, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2,
  XCircle,
  Search
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/Phishing1ro.css';

interface SitioSimulado {
  id: number;
  url: string;
  nombreServicio: string;
  esReal: boolean;
  explicacion: string;
}

const SITIOS_2DO: SitioSimulado[] = [
  {
    id: 1,
    url: "http://moodle-lemus-perez-verificacion.free-site.net/login",
    nombreServicio: "Aula Virtual Moodle Liceo Antonio Lemus Pérez",
    esReal: false,
    explicacion: "¡Es una URL Falsa! No usa protocolo seguro (HTTP en vez de HTTPS) y el dominio oficial no es 'free-site.net'."
  },
  {
    id: 2,
    url: "https://accounts.google.com/signin/v2/identifier",
    nombreServicio: "Inicio de Sesión de Google",
    esReal: true,
    explicacion: "¡Es el Sitio Oficial! Cuenta con candado de seguridad HTTPS y el dominio principal pertenece a google.com."
  },
  {
    id: 3,
    url: "https://instagram.seguridad-verificar-cuentas.com/auth",
    nombreServicio: "Verificación de Cuenta de Instagram",
    esReal: false,
    explicacion: "¡Es un Clon (Spoofing)! La palabra 'instagram' está al inicio como subdominio, pero el dominio real que te cobrará los datos es 'seguridad-verificar-cuentas.com'."
  }
];

export const Phishing2do: React.FC = () => {
  const [respuestas, setRespuestas] = useState<Record<number, boolean | null>>({});
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const evaluarSitio = (id: number, eleccionReal: boolean) => {
    setRespuestas(prev => ({
      ...prev,
      [id]: eleccionReal
    }));
  };

  return (
    <main className="pagina-modulo-phishing">
      <HeaderModulo
        grado="2do"
        modulo="2: Sitio Clonados y URLs"
        titulo="Páginas Web Clonadas y Suplantación (Spoofing)"
        subTitulo="Aprende a inspeccionar las barras de direcciones web (URL), identificar el candado de seguridad HTTPS y descubrir páginas falsas en 2do Año."
        categoria="Defensa Digital y Privacidad"
        tiempoEstimado="40 min"
        icono={<Globe size={36} />}
      />

      <div className="contenedor-phishing-contenido">
        {/* SECCIÓN 1: ANÁLISIS DE URL */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. ¿Cómo Funciona el Web Spoofing?</h2>
          </div>
          <p className="texto-lectura-phishing">
            El <strong>Web Spoofing</strong> ocurre cuando un ciberdelincuente diseña una página exactamente idéntica a la del liceo, tu correo o red social. La única forma infalible de descubrir la trampa es **examinar la barra de direcciones del navegador**.
          </p>

          <div className="grid-senales-phishing">
            <div className="caja-senal-item">
              <Lock className="icono-senal verde" size={28} />
              <h3>Protocolo HTTPS y Candado</h3>
              <p>Las páginas legítimas usan <code>https://</code> para cifrar tu conexión. Desconfía de sitios que usen <code>http://</code> en logins.</p>
            </div>

            <div className="caja-senal-item">
              <Globe className="icono-senal azul" size={28} />
              <h3>El Dominio Principal</h3>
              <p>Mira siempre lo que está antes del final. En <code>soporte.facebook.com</code> el dominio es <strong>facebook.com</strong>. En <code>facebook.soporte-falso.com</code> el dominio es <strong>soporte-falso.com</strong>.</p>
            </div>

            <div className="caja-senal-item">
              <ShieldAlert className="icono-senal rojo" size={28} />
              <h3>Errores Ortográficos</h3>
              <p>Reemplazo de letras por números parecidos (ej. <code>g00gle.com</code> o <code>paypa1.com</code>).</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR INSPECTOR DE URL */}
        <section className="bloque-phishing-tarjeta interactivo-caja">
          <div className="encabezado-bloque-phishing">
            <Search className="icono-bloque-verde" size={24} />
            <h2>2. Inspecciona las Direcciones Web</h2>
          </div>
          <p className="subtitulo-bloque-phishing">
            Examina la URL de cada uno de los sitios mostrados y determina si se trata del **Sitio Oficial Real** o de una **Página Clonada Falsa**:
          </p>

          <div className="lista-simuladores-phishing">
            {SITIOS_2DO.map((sitio) => {
              const resEleccion = respuestas[sitio.id];

              return (
                <div key={sitio.id} className="tarjeta-mensaje-simulado">
                  <div className="cabecera-mensaje-simulado">
                    <span className="badge-canal">Navegador Web</span>
                    <span className="remitente-texto">Servicio: {sitio.nombreServicio}</span>
                  </div>

                  <div className="cuerpo-mensaje-simulado">
                    <p style={{ fontFamily: 'monospace', fontSize: '1rem', fontStyle: 'normal', color: '#1e293b' }}>
                      🔗 <strong>Barra de Dirección:</strong> {sitio.url}
                    </p>
                  </div>

                  <div className="acciones-decision-phishing">
                    <button 
                      className={`btn-decision seguro ${resEleccion === true ? 'seleccionado' : ''}`}
                      onClick={() => evaluarSitio(sitio.id, true)}
                    >
                      <CheckCircle2 size={18} /> Es el Sitio Oficial Real
                    </button>
                    <button 
                      className={`btn-decision phishing ${resEleccion === false ? 'seleccionado' : ''}`}
                      onClick={() => evaluarSitio(sitio.id, false)}
                    >
                      <XCircle size={18} /> Es una Página Clonada Falsa
                    </button>
                  </div>

                  {resEleccion !== undefined && (
                    <div className={`feedback-decision ${resEleccion === sitio.esReal ? 'acierto' : 'fallo'}`}>
                      {resEleccion === sitio.esReal ? (
                        <div className="flex-resultado">
                          <CheckCircle2 size={20} className="icono-acierto" />
                          <span><strong>¡Excelente análisis!</strong> {sitio.explicacion}</span>
                        </div>
                      ) : (
                        <div className="flex-resultado">
                          <XCircle size={20} className="icono-fallo" />
                          <span><strong>Verificación:</strong> {sitio.explicacion}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN 3: QUIZ RÁPIDO */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Diagnóstica</h2>
          </div>
          <p className="texto-lectura-phishing">
            <strong>Pregunta:</strong> Observas la siguiente URL en tu navegador: <code>https://instagram.cuentas-bloqueadas-verificar.net</code>. ¿Cuál es el dominio real que recibiría tu contraseña?
          </p>

          <div className="opciones-quiz-phishing">
            <button 
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) instagram.com
            </button>
            <button 
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) cuentas-bloqueadas-verificar.net
            </button>
          </div>

          {respuestaQuiz === 2 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto!</strong> El dominio principal es lo que se encuentra justo antes de la extensión (.net), por lo que es una página clonada maliciosa.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Phishing2do;
