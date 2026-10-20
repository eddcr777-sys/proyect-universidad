import React from 'react';
import {
  AlertTriangle,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Mail,
  Link as LinkIcon,
  CheckCircle2,
  XCircle,
  Award,
  Search,
  FileCode,
  BookOpen,
  Lock,
  Info,
  Eye
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import CajaExplicacionDinamica from '../../../../components/comunes/ExplicacionDinamica/CajaExplicacionDinamica';
import { usePhishing4to } from '../../../../hooks/HooksPhishing/usePhishing4to';
import './Phishing4to.css';

/* ─────────────────────────────────────────────────────────────
   Helper: desglosa una URL en sus partes visibles
   ───────────────────────────────────────────────────────────── */
const analizarUrl = (url: string) => {
  try {
    const protocolo = url.startsWith('https') ? 'https' : 'http';
    const sinProtocolo = url.replace(/^https?:\/\//, '');
    const [dominioCompleto, ...resto] = sinProtocolo.split('/');
    const partes = dominioCompleto.split('.');
    const tld = partes.pop() || '';
    const dominioPrincipal = partes.pop() || '';
    const subdominios = partes.join('.');
    const ruta = resto.length ? '/' + resto.join('/') : '/';
    return {
      protocolo,
      subdominios,
      dominioPrincipal,
      tld,
      ruta,
    };
  } catch {
    return null;
  }
};

/* ─────────────────────────────────────────────────────────────
   Componente
   ───────────────────────────────────────────────────────────── */
export const Phishing4to: React.FC = () => {
  const {
    correos,
    respuestasCorreos,
    evaluarCorreo,
    urls,
    respuestasUrl,
    evaluarUrl,
    preguntasQuiz,
    respuestasQuiz,
    responderPreguntaQuiz,
    enviarQuiz,
    puntajeQuiz,
    quizEnviado,
  } = usePhishing4to();

  return (
    <main className="pagina-modulo-phishing-4to">
      <HeaderModulo
        grado="4to"
        modulo="4: Análisis Técnico de Phishing"
        titulo="Inspección de Encabezados, URLs y Dominios"
        subTitulo="Aprende a verificar técnicamente un correo sospechoso: SPF, DKIM, DMARC, dominios homógrafos y herramientas de análisis como VirusTotal."
        categoria="Defensa Digital y Privacidad"
        tiempoEstimado="55 min"
        icono={<Search size={36} />}
      />

      <div className="contenedor-phishing-contenido">
        {/* ══════════════════════════════════════════════════════════
            SECCIÓN 1: CONCEPTOS
            ══════════════════════════════════════════════════════════ */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. ¿Cómo se verifica un correo por dentro?</h2>
          </div>

          <p className="texto-lectura-phishing">
            En 4to año pasamos de la identificación visual a la{' '}
            <strong>inspección técnica</strong>. Aprenderás a leer los encabezados de
            un correo (SPF, DKIM, DMARC), analizar URLs sospechosas y usar
            herramientas como <strong>VirusTotal</strong> y <strong>URLVoid</strong>{' '}
            para verificar enlaces sin hacer clic.
          </p>

          <div className="grid-senales-phishing">
            {/* ── Tarjeta 1: SPF / DKIM / DMARC ── */}
            <div className="caja-senal-item">
              <FileCode className="icono-senal rojo" size={28} />
              <h3>SPF, DKIM y DMARC</h3>
              <p>
                <strong>📖 ¿Qué son?:</strong> Son 3 estándares que viajan ocultos en
                la cabecera de cada correo, como un "sello de autenticidad".
              </p>
              <ul className="lista-tecnica">
                <li>
                  <strong>SPF:</strong> verifica si el servidor que envió el correo
                  tiene permiso del dominio. <em>No usa criptografía.</em>
                </li>
                <li>
                  <strong>DKIM:</strong> firma digital que garantiza que el mensaje
                  no fue alterado. <em>Sí usa criptografía.</em>
                </li>
                <li>
                  <strong>DMARC:</strong> regla que decide qué hacer si SPF o DKIM
                  fallan (<code>rechazar</code>, <code>marcar spam</code> o{' '}
                  <code>no hacer nada</code>).
                </li>
              </ul>
              <p className="texto-accion-senal">
                <strong>⚙️ ¿Para qué sirve?:</strong> Bloquear automáticamente correos
                que suplantan a tu banco, al liceo o a cualquier empresa.
              </p>
            </div>

            {/* ── Tarjeta 2: Encabezado real ── */}
            <div className="caja-senal-item">
              <Eye className="icono-senal azul" size={28} />
              <h3>¿Cómo se ve un encabezado real?</h3>
              <p>
                <strong>📖 ¿Qué es?:</strong> Cada correo trae una cabecera técnica
                invisible para el usuario común. Así se ve:
              </p>
              <pre className="bloque-encabezado-ejemplo">
{`Authentication-Results: mx.google.com;
   spf=pass smtp.mailfrom=banco.com
   dkim=pass header.d=banco.com
   dmarc=pass header.from=banco.com`}
              </pre>
              <p className="texto-accion-senal">
                <strong>⚙️ ¿Para qué sirve?:</strong> Si los 3 dicen{' '}
                <code>pass</code>, es muy probable que el correo sea legítimo. Si
                alguno dice <code>fail</code>, hay que sospechar.
              </p>
            </div>

            {/* ── Tarjeta 3: Typosquatting ── */}
            <div className="caja-senal-item">
              <LinkIcon className="icono-senal amarillo" size={28} />
              <h3>Typosquatting (Dominios Engañosos)</h3>
              <p>
                <strong>📖 ¿Qué es?:</strong> Dominios que imitan a otro legítimo
                usando errores tipográficos o visuales parecidos.
              </p>
              <ul className="lista-tecnica">
                <li>Cambiar una letra: <code>g00gle.com</code></li>
                <li>Omitir una letra: <code>gogle.com</code></li>
                <li>Añadir palabras: <code>micolegio-oficial.com</code></li>
                <li>Cambiar extensión: <code>micolegio.xyz</code></li>
                <li>Homoglifos: <code>rn</code> en lugar de <code>m</code></li>
              </ul>
              <p className="texto-accion-senal">
                <strong>⚙️ ¿Para qué sirve?:</strong> Engañar a quien lee rápido y
                hacerle creer que está en el sitio oficial.
              </p>
            </div>

            {/* ── Tarjeta 4: VirusTotal ── */}
            <div className="caja-senal-item">
              <Search className="icono-senal rojo" size={28} />
              <h3>Analizadores de Enlaces (VirusTotal)</h3>
              <p>
                <strong>📖 ¿Qué es?:</strong> Herramientas web (VirusTotal, URLVoid)
                que escanean URLs sospechosas con ~70 motores antivirus, listas
                negras y sandboxes, <strong>sin abrir el enlace</strong>.
              </p>
              <ul className="lista-tecnica">
                <li>Te dice cuántos antivirus la detectan como maliciosa.</li>
                <li>Muestra la antigüedad del dominio (los de phishing suelen tener días).</li>
                <li>Revela redirecciones y scripts ocultos.</li>
              </ul>
              <p className="texto-accion-senal">
                <strong>⚙️ ¿Para qué sirve?:</strong> Inspeccionar un enlace sin
                arriesgar tu equipo. Si tiene muchas detecciones o es un dominio
                recién creado, <strong>no lo abras</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECCIÓN 2: LABORATORIO DE CORREOS
            ══════════════════════════════════════════════════════════ */}
        <section className="bloque-phishing-tarjeta interactivo-caja">
          <div className="encabezado-bloque-phishing">
            <Mail className="icono-bloque-verde" size={24} />
            <h2>2. Laboratorio: Inspecciona los Encabezados</h2>
          </div>

          <CajaExplicacionDinamica
            tituloDinamica="¿Cómo funciona este laboratorio? — Guía paso a paso"
            enQueConsiste="Te mostraremos 3 correos electrónicos simulados. Cada uno incluye remitente, asunto, contenido, los 3 indicadores de autenticidad (SPF, DKIM, DMARC) y la URL a la que te llevaría el enlace."
            comoInteractuar="1. Lee el remitente y el asunto. 2. Mira los 3 indicadores de autenticidad (verde = pasa, rojo = falla). 3. Analiza el desglose de la URL: ¿el dominio principal es el oficial? 4. Pulsa 'Es real' o 'Es phishing'. 5. Lee el feedback para entender el porqué."
            paraQueSirve="Aprenderás a analizar correos con los mismos criterios técnicos que un experto en ciberseguridad, sin riesgo de abrir nada peligroso."
          />

          {/* ══ GUÍA DE REFERENCIA (siempre visible) ══ */}
          <div className="guia-laboratorio">
            <div className="guia-titulo">
              <BookOpen size={20} />
              <strong>Antes de empezar: guía rápida de referencia</strong>
            </div>

            <div className="guia-columnas">
              {/* ── Columna izquierda: indicadores ── */}
              <div className="guia-columna">
                <h4>🚦 ¿Cómo leer los 3 indicadores?</h4>
                <div className="leyenda-items">
                  <span className="leyenda-item leyenda-pass">
                    <CheckCircle2 size={14} /> Verde = la verificación pasó (buena señal)
                  </span>
                  <span className="leyenda-item leyenda-fail">
                    <XCircle size={14} /> Rojo = la verificación falló (mala señal)
                  </span>
                  <span className="leyenda-item leyenda-neutral">
                    <Info size={14} /> Gris = sin información
                  </span>
                </div>
                <ul className="lista-tecnica">
                  <li>
                    <strong>SPF:</strong> ¿el servidor tiene permiso del dominio?
                  </li>
                  <li>
                    <strong>DKIM:</strong> ¿el mensaje llegó intacto (no fue alterado)?
                  </li>
                  <li>
                    <strong>DMARC:</strong> ¿el dominio del remitente coincide con el
                    que se ve?
                  </li>
                </ul>
              </div>

              {/* ── Columna derecha: cómo leer una URL ── */}
              <div className="guia-columna">
                <h4>🔍 ¿Cómo leer una URL?</h4>
                <p className="texto-guia">
                  Toda URL se puede partir en pedazos. Mira este ejemplo
                  (<code>https://login.banco-seguro.xyz/pay</code>):
                </p>

                <div className="guia-url-tabla">
                  <div className="guia-url-fila">
                    <span className="guia-url-label">Protocolo</span>
                    <code className="guia-url-valor proto">https://</code>
        
                    <span className="guia-url-nota">La conexión es segura</span>
                  </div>

                  <div className="guia-url-fila">
                    <span className="guia-url-label">Subdominio</span>
                    <code className="guia-url-valor sub">login.</code>
                    <span className="guia-url-nota">
                      <strong>Ojo:</strong> puede ser falso para engañar
                    </span>
                  </div>

                  <div className="guia-url-fila destacada">
                    <span className="guia-url-label">Dominio</span>
                    <code className="guia-url-valor dom">banco-seguro</code>
                    <span className="guia-url-nota"><strong>Lo más importante</strong></span>
                  </div>

                  <div className="guia-url-fila">
                    <span className="guia-url-label">Extensión</span>
                    <code className="guia-url-valor tld">.xyz</code>
                    <span className="guia-url-nota">
                      .xyz, .top, .info = <strong>sospechosas</strong>
                    </span>
                  </div>

                  <div className="guia-url-fila">
                    <span className="guia-url-label">Ruta</span>
                    <code className="guia-url-valor ruta">/pay</code>
                    <span className="guia-url-nota">Página dentro del sitio</span>
                  </div>
                </div>

                <ul className="lista-tecnica" style={{ marginTop: '0.75rem' }}>
                  <li>
                    <strong>Dominio principal</strong> = la palabra antes de la
                    extensión (<em>banco-seguro</em>). Aquí va lo importante.
                  </li>
                  <li>
                    <strong>Extensión</strong> = <code>.com</code>,{' '}
                    <code>.edu</code>, <code>.gob</code>... Las raras como{' '}
                    <code>.xyz</code> son sospechosas.
                  </li>
                  <li>
                    <strong>Subdominio</strong> = lo que va antes del dominio
                    (<em>login.</em>). Puede ser falso para engañar.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ══ TARJETAS DE CORREOS ══ */}
          <div className="lista-simuladores-phishing">
            {correos.map((correo, idx) => {
              const resEleccion = respuestasCorreos[correo.id];
              const spfPass = correo.encabezados.spf.toUpperCase().includes('PASS');
              const dkimPass = correo.encabezados.dkim.toUpperCase().includes('PASS');
              const dmarcPass = correo.encabezados.dmarc.toUpperCase().includes('PASS');
              const alertasRojas = [!spfPass, !dkimPass, !dmarcPass].filter(Boolean).length;
              const partesUrl = analizarUrl(correo.urlIncluida);

              return (
                <div key={correo.id} className="tarjeta-mensaje-simulado">
                  {/* Encabezado del correo */}
                  <div className="cabecera-mensaje-simulado">
                    <span className="badge-canal">✉ Correo #{idx + 1}</span>
                    <span className="remitente-texto">
                      De: <strong>{correo.remitente}</strong>
                    </span>
                  </div>

                  {/* ── PASO 1: CONTENIDO ── */}
                  <div className="paso-analisis">
                    <span className="paso-numero">Paso 1</span>
                    <span className="paso-titulo">Lee el contenido del correo</span>
                  </div>
                  <div className="cuerpo-mensaje-simulado">
                    <h4>Asunto: {correo.asunto}</h4>
                    <p>"{correo.contenido}"</p>
                  </div>

                  {/* ── PASO 2: ENCABEZADOS ── */}
                  <div className="paso-analisis">
                    <span className="paso-numero">Paso 2</span>
                    <span className="paso-titulo">
                      Revisa los 3 indicadores de autenticidad
                    </span>
                  </div>

                  <div className="seccion-verificacion-lab">
                    <div className="encabezados-info">
                      <div className={`badge-encabezado-v2 ${spfPass ? 'pass' : 'fail'}`}>
                        <div className="badge-v2-header">
                          {spfPass ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                          <strong>SPF</strong>
                        </div>
                        <span className="badge-v2-text">
                          {spfPass
                            ? 'El servidor tiene permiso del dominio.'
                            : 'El servidor NO tiene permiso del dominio.'}
                        </span>
                      </div>

                      <div className={`badge-encabezado-v2 ${dkimPass ? 'pass' : 'fail'}`}>
                        <div className="badge-v2-header">
                          {dkimPass ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                          <strong>DKIM</strong>
                        </div>
                        <span className="badge-v2-text">
                          {dkimPass
                            ? 'El mensaje llegó intacto, no fue alterado.'
                            : 'El mensaje pudo haber sido alterado en el camino.'}
                        </span>
                      </div>

                      <div className={`badge-encabezado-v2 ${dmarcPass ? 'pass' : 'fail'}`}>
                        <div className="badge-v2-header">
                          {dmarcPass ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                          <strong>DMARC</strong>
                        </div>
                        <span className="badge-v2-text">
                          {dmarcPass
                            ? 'El dominio del remitente es coherente.'
                            : 'El dominio del remitente no coincide.'}
                        </span>
                      </div>
                    </div>

                    {alertasRojas > 0 && (
                      <p className="aviso-fallo-encabezado">
                        ⚠️{' '}
                        {alertasRojas === 3
                          ? 'Los 3 indicadores fallaron. Este correo es casi con certeza falso.'
                          : `${alertasRojas} indicador${alertasRojas > 1 ? 'es fallaron' : ' falló'}. Analiza la URL con cuidado antes de decidir.`}
                      </p>
                    )}
                  </div>

                  {/* ── PASO 3: URL DESGLOSADA ── */}
                  <div className="paso-analisis">
                    <span className="paso-numero">Paso 3</span>
                    <span className="paso-titulo">
                      Examina la URL a la que te llevaría el enlace
                    </span>
                  </div>

                  <div className="url-incluida-v2">
                    <div className="url-completa">
                      <strong>🔗 URL incluida:</strong>
                      <code>{correo.urlIncluida}</code>
                    </div>

                    {partesUrl && (
                      <>
                        <p className="url-instruccion">
                          👉 Así se descompone esa URL. Fíjate especialmente en el{' '}
                          <strong>dominio principal</strong>:
                        </p>
                        <div className="desglose-url-v2">
                          <div className="parte-url-v2 parte-proto">
                            <span className="parte-label">Protocolo</span>
                            <span className="parte-valor">{partesUrl.protocolo}://</span>
                          </div>
                          {partesUrl.subdominios && (
                            <div className="parte-url-v2 parte-sub">
                              <span className="parte-label">Subdominio</span>
                              <span className="parte-valor">{partesUrl.subdominios}.</span>
                            </div>
                          )}
                          <div className="parte-url-v2 parte-dom">
                            <span className="parte-label">Dominio principal</span>
                            <span className="parte-valor">{partesUrl.dominioPrincipal}</span>
                          </div>
                          <div className="parte-url-v2 parte-tld">
                            <span className="parte-label">Extensión</span>
                            <span className="parte-valor">.{partesUrl.tld}</span>
                          </div>
                          <div className="parte-url-v2 parte-ruta">
                            <span className="parte-label">Ruta</span>
                            <span className="parte-valor">{partesUrl.ruta}</span>
                          </div>
                        </div>
                        <p className="url-tip">
                          💡 <strong>Pregunta clave:</strong> ¿El dominio principal
                          coincide con la empresa o institución que dice enviar el
                          correo? Si el correo dice ser de <code>micolegio.edu</code>{' '}
                          pero el dominio es otro, <strong>es phishing</strong>.
                        </p>
                      </>
                    )}
                  </div>

                  {/* ── PASO 4: DECISIÓN ── */}
                  <div className="paso-analisis">
                    <span className="paso-numero">Paso 4</span>
                    <span className="paso-titulo">
                      Toma una decisión basándote en todo lo anterior
                    </span>
                  </div>

                  <div className="acciones-decision-phishing">
                    <button
                      className={`btn-decision seguro ${resEleccion === false ? 'seleccionado' : ''}`}
                      onClick={() => evaluarCorreo(correo.id, false)}
                    >
                      <ShieldCheck size={18} /> Es un correo real y seguro
                    </button>
                    <button
                      className={`btn-decision phishing ${resEleccion === true ? 'seleccionado' : ''}`}
                      onClick={() => evaluarCorreo(correo.id, true)}
                    >
                      <AlertTriangle size={18} /> Es un intento de Phishing
                    </button>
                  </div>

                  {/* ── FEEDBACK ── */}
                  {resEleccion !== undefined && (
                    <div
                      className={`feedback-decision ${resEleccion === correo.esPhishing ? 'acierto' : 'fallo'}`}
                    >
                      <div className="flex-resultado">
                        {resEleccion === correo.esPhishing ? (
                          <CheckCircle2 size={20} className="icono-acierto" />
                        ) : (
                          <XCircle size={20} className="icono-fallo" />
                        )}
                        <span>
                          <strong>
                            {resEleccion === correo.esPhishing
                              ? '¡Correcto!'
                              : 'No era eso.'}
                          </strong>{' '}
                          {correo.explicacion}
                        </span>
                      </div>
                      <span className="badge-tipo-phishing">{correo.tipoPhishing}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECCIÓN 3: ANÁLISIS DE URLS
            ══════════════════════════════════════════════════════════ */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <LinkIcon className="icono-bloque-amarillo" size={24} />
            <h2>3. Juzga la URL: ¿Oficial o Falsa?</h2>
          </div>

          <p className="subtitulo-bloque-phishing">
            Observa cada URL. Fíjate sobre todo en el <strong>dominio principal</strong>{' '}
            (la palabra justo antes de la extensión). Decide si es{' '}
            <strong>legítima</strong> o <strong>maliciosa</strong>.
          </p>

          <div className="lista-simuladores-phishing">
            {urls.map((url) => {
              const resEleccion = respuestasUrl[url.id];
              const partes = analizarUrl(url.url);

              return (
                <div key={url.id} className="tarjeta-url-analisis">
                  <div className="url-texto">
                    <code>{url.url}</code>
                  </div>

                  {partes && (
                    <div className="desglose-url-v2">
                      <div className="parte-url-v2 parte-proto">
                        <span className="parte-label">Protocolo</span>
                        <span className="parte-valor">
                          {partes.protocolo === 'https' ? (
                            <>
                              <Lock size={12} /> {partes.protocolo}://
                            </>
                          ) : (
                            partes.protocolo + '://'
                          )}
                        </span>
                      </div>
                      {partes.subdominios && (
                        <div className="parte-url-v2 parte-sub">
                          <span className="parte-label">Subdominio</span>
                          <span className="parte-valor">{partes.subdominios}.</span>
                        </div>
                      )}
                      <div className="parte-url-v2 parte-dom">
                        <span className="parte-label">Dominio principal</span>
                        <span className="parte-valor">{partes.dominioPrincipal}</span>
                      </div>
                      <div className="parte-url-v2 parte-tld">
                        <span className="parte-label">Extensión</span>
                        <span className="parte-valor">.{partes.tld}</span>
                      </div>
                      {partes.ruta !== '/' && (
                        <div className="parte-url-v2 parte-ruta">
                          <span className="parte-label">Ruta</span>
                          <span className="parte-valor">{partes.ruta}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="acciones-decision-phishing">
                    <button
                      className={`btn-decision seguro ${resEleccion === true ? 'seleccionado' : ''}`}
                      onClick={() => evaluarUrl(url.id, true)}
                    >
                      <ShieldCheck size={18} /> Legítima
                    </button>
                    <button
                      className={`btn-decision phishing ${resEleccion === false ? 'seleccionado' : ''}`}
                      onClick={() => evaluarUrl(url.id, false)}
                    >
                      <AlertTriangle size={18} /> Maliciosa
                    </button>
                  </div>

                  {resEleccion !== undefined && (
                    <div
                      className={`feedback-decision ${resEleccion === url.esLegitima ? 'acierto' : 'fallo'}`}
                    >
                      <div className="flex-resultado">
                        {resEleccion === url.esLegitima ? (
                          <CheckCircle2 size={18} className="icono-acierto" />
                        ) : (
                          <XCircle size={18} className="icono-fallo" />
                        )}
                        <span>{url.explicacion}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECCIÓN 4: QUIZ
            ══════════════════════════════════════════════════════════ */}
        <section className="bloque-phishing-tarjeta">
          <div className="encabezado-bloque-phishing">
            <HelpCircle className="icono-bloque-azul" size={24} />
            <h2>4. Evaluación Final</h2>
          </div>

          <div className="quiz-container phishing">
            {preguntasQuiz.map((pregunta) => (
              <div key={pregunta.id} className="pregunta-quiz phishing">
                <h3 className="pregunta-titulo">
                  {pregunta.id}. {pregunta.pregunta}
                </h3>
                <div className="opciones-quiz-phishing">
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
                  <div
                    className={`feedback-quiz-item ${
                      respuestasQuiz[pregunta.id] === pregunta.respuestaCorrecta
                        ? 'correcto'
                        : 'incorrecto'
                    }`}
                  >
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
                className="boton-enviar-quiz phishing"
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
                    {puntajeQuiz.correctas === puntajeQuiz.total
                      ? ' 🏆 ¡Perfecto!'
                      : ' ¡Sigue practicando!'}
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

export default Phishing4to;