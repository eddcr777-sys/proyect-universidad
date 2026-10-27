import React, { useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import HeaderProyecto from '../../components/comunes/HeaderProyecto/HeaderProyecto';
import imgHeroCiber from '../../assets/photo_2_2026-10-21_23-11-48.jpg';
import './Guias-padres.css';

const DICCIONARIO = [
  {
    titulo: 'Phishing, Smishing y Vishing',
    definicion:
      'Métodos de engaño para robar claves o dinero haciéndose pasar por instituciones de confianza.',
    ejemplo:
      'Phishing (correo): e-mail idéntico al del banco pidiendo "actualizar datos en 24h". Smishing (SMS): "paquete retenido en MRW, pague el flete aquí". Vishing (llamada): falso soporte técnico pide el "código de activación" que en realidad instala su WhatsApp en otro teléfono.',
  },
  {
    titulo: 'Grooming y Sextorsión',
    definicion:
      'Estrategias de adultos para engañar a niños y adolescentes en internet.',
    ejemplo:
      'Catfishing: perfil falso con fotos de otro joven. Grooming: simula ser "el mejor amigo", regala cosas en juegos y gana confianza total. Sextorsión: pide una foto privada y luego amenaza con enviarla a padres y compañeros si no envía más o paga dinero.',
  },
  {
    titulo: 'Malware, Spyware y Ransomware',
    definicion:
      'Programas maliciosos que se instalan sin permiso al descargar juegos piratas o hacer clic en anuncios.',
    ejemplo:
      'Spyware: enciende micrófono y cámara en silencio y lee sus chats. Keylogger: graba cada tecla que escribe, robando usuarios y contraseñas bancarias. Ransomware: bloquea bajo candado todos sus archivos y exige un pago en Bitcoin para liberarlos.',
  },
  {
    titulo: '2FA y Filtraciones de Datos',
    definicion:
      '2FA (Doble Factor): candado adicional con código dinámico que cambia cada 30 segundos. Filtraciones (Data Leaks): cuando hackean bases de datos y publican millones de correos y claves.',
    ejemplo:
      'Si un ladrón roba su contraseña, no podrá entrar sin el código de su celular. Por eso nunca repita la misma contraseña en distintos sitios.',
  },
];

const REGLAS_DE_ORO = [
  {
    titulo: 'El Código SMS/OTP es sagrado',
    detalle:
      'Si alguien le pide el código que le llegó por SMS, está pidiendo la llave para apoderarse de su WhatsApp o banca en línea. Peligro adicional (SIM Swapping): estafadores piden un duplicado de su chip en la operadora y reciben sus códigos SMS. Por eso es vital usar apps autenticadoras en lugar de SMS.',
  },
  {
    titulo: 'Nunca repita contraseñas',
    detalle:
      'Si hackean la página de compras donde usó "Carlos2024*", probarán esa misma clave en el banco. Use frases largas: "El-Gato-Azul-Come-Pescado-2026!" es fácil de memorizar pero imposible de adivinar para un robot.',
  },
  {
    titulo: 'Verifique pagos reales en Marketplace',
    detalle:
      'No confíe en capturas de pantalla de transferencias o Pago Móvil: los estafadores las editan en Photoshop. Abra la app del banco en su propio teléfono y confirme que el dinero ya esté acreditado antes de entregar el producto.',
  },
  {
    titulo: 'Aprenda a leer enlaces',
    detalle:
      'Los estafadores usan dominios casi idénticos: "bancodevenezuela.atencion-cliente-pagos.xyz" o reemplazan letras. Guarde las páginas oficiales en los marcadores de su navegador. Nunca busque "Banco X" en Google para hacer transferencias.',
  },
  {
    titulo: 'Tenga un correo público y un correo madre',
    detalle:
      'El correo madre es la llave de su banco, redes y trámites. Úselo solo para lo importante y no lo registre en juegos gratis ni encuestas. Tenga un segundo correo público para registros en tiendas y juegos de los niños.',
  },
];

const ENGAÑOS = [
  {
    titulo: 'El engaño del buzón de voz (WhatsApp)',
    metodo:
      'El estafador intenta registrar su WhatsApp a las 3:00 AM. Como usted duerme, la llamada de verificación salta al buzón de voz. El estafador escucha el código y roba su cuenta.',
    solucion:
      'Active la verificación en 2 pasos con PIN de 6 dígitos en WhatsApp y pida a su operadora desactivar el buzón de voz.',
  },
  {
    titulo: 'El "Hola mamá / Hola papá"',
    metodo:
      'Le escriben de un número desconocido: "Mamá, se me dañó el teléfono, guarda este número". Horas después piden una transferencia urgente por un accidente o detención.',
    solucion:
      'Cree una palabra clave familiar secreta y exíjala por nota de voz, o llame al número habitual de su hijo.',
  },
  {
    titulo: 'Voz clonada por IA (Deepfake)',
    metodo:
      'Con solo 3 segundos de un video público, la IA clona la voz de un familiar. Llaman simulando un accidente para exigir dinero en minutos.',
    solucion:
      'Acuerde en casa una palabra secreta o pregunta que solo la familia conozca. Si no la saben o dudan, es una estafa.',
  },
  {
    titulo: '"Robux / V-Bucks gratis"',
    metodo:
      'Páginas que prometen monedas gratis a cambio del usuario y contraseña del juego. Secuestran la cuenta o instalan virus al hacer clic.',
    solucion:
      'En ningún juego existen las "monedas gratis". Toda página que pida la contraseña del juego para regalar objetos es 100% una estafa.',
  },
];

const BLINDAJE = [
  {
    titulo: 'WhatsApp',
    detalle:
      'Ajustes → Cuenta → Verificación en dos pasos (activar PIN). Ajustes → Privacidad → Llamadas → Silenciar llamadas de desconocidos. Ajustes → Privacidad → Avanzada → Proteger dirección IP. Ajustes → Chats → Copia cifrada de extremo a extremo.',
  },
  {
    titulo: 'Telegram',
    detalle:
      'Ajustes → Privacidad → Número de teléfono → "Nadie". Ajustes → Privacidad → Grupos y canales → "Mis contactos". Ajustes → Privacidad → Verificación en dos pasos. Ajustes → Privacidad → Código de bloqueo (PIN en la app).',
  },
  {
    titulo: 'Facebook / Instagram',
    detalle:
      'Centro de Cuentas → Contraseña y seguridad → Autenticación en dos pasos (por App, no SMS). Centro de Cuentas → Alertas de inicio de sesión. Privacidad → Cuenta privada. Desactivar indexación en buscadores.',
  },
  {
    titulo: 'Google / Apple ID',
    detalle:
      'Configurar correo y teléfono de recuperación actualizados. Cuenta Google → Seguridad → Conexiones con apps de terceros. Activar 2FA con aplicación autenticadora (no SMS). En iPhone: Apple ID → Contraseña y seguridad → revisar apps conectadas.',
  },
];

const HERRAMIENTAS = [
  {
    titulo: 'Bitwarden',
    categoria: 'Gestor de contraseñas',
    detalle:
      'Caja fuerte digital que guarda y crea contraseñas seguras. Solo debe recordar una clave maestra. Descargue desde Play Store o bitwarden.com; cree la cuenta y active el desbloqueo por huella.',
  },
  {
    titulo: 'Google Family Link',
    categoria: 'Control parental',
    detalle:
      'Límites de tiempo de pantalla, bloqueo de apps no aptas por edad y ubicación GPS del menor. Instale en el teléfono del tutor, elija "Tutor", vincule la cuenta del hijo y enlace ambos dispositivos.',
  },
  {
    titulo: 'Cloudflare Family DNS (1.1.1.3)',
    categoria: 'Filtro de contenido',
    detalle:
      'Bloquea contenido adulto y virus en todo el teléfono o red de la casa. En Android: Ajustes → Red e Internet → DNS Privado → family.cloudflare-dns.com.',
  },
  {
    titulo: 'Aegis / Google Authenticator',
    categoria: 'Autenticador 2FA',
    detalle:
      'Genera códigos de 6 dígitos que cambian cada 30 segundos, reemplazando los SMS vulnerables. En cada cuenta (Facebook, Google, banco), elija "Verificación por App", escanee el QR y listo.',
  },
];

const PRIMEROS_AUXILIOS = [
  {
    titulo: 'Contención y no pago',
    detalle:
      'No ceda al chantaje. Pagar no detiene al extorsionador, solo confirma que usted pagará más.',
  },
  {
    titulo: 'Preservar evidencias',
    detalle:
      'No borre chats ni fotos por vergüenza. Tome capturas donde se vean números, usuarios, fecha y hora.',
  },
  {
    titulo: 'Aislamiento',
    detalle:
      'Desconecte el teléfono del Wi-Fi si sospecha virus. Desde otra computadora, cierre todas las sesiones activas de sus cuentas.',
  },
  {
    titulo: 'Apoyo emocional incondicional',
    detalle:
      'Apoye al menor. No le grite ni le quite el teléfono como castigo: un niño castigado nunca volverá a pedir ayuda.',
  },
  {
    titulo: 'Denuncia formal',
    detalle:
      'Acuda a la División de Delitos Informáticos del CICPC o cuerpo policial de su región. Lleve las pruebas en pendrive e impresas. El grooming y la difusión no consentida violan la LOPNNA y la Ley Especial contra Delitos Informáticos.',
  },
];

const ACUERDO_FAMILIAR = [
  'Carga nocturna fuera de dormitorios: los teléfonos se cargan en la sala o cocina durante la noche.',
  'Cero castigos por pedir ayuda: si el menor ve algo extraño o comete un error, puede acudir a los padres sin miedo.',
  'Cero desconocidos en listas de amigos: solo se aceptan solicitudes de personas que el niño conozca en la vida real.',
  'Palabra clave familiar: acuerden una palabra secreta para verificar identidad ante llamadas o mensajes sospechosos.',
  'Reglas claras para chats de juegos: desactivar chats con desconocidos en Roblox, Free Fire y Discord, y usar PIN de cuenta para que el menor no lo reactive.',
];

const SECCIONES_NAV = [
  { id: 'diccionario-digital', label: 'Diccionario' },
  { id: 'reglas-de-oro', label: 'Reglas de Oro' },
  { id: 'enganos-frecuentes', label: 'Engaños' },
  { id: 'blindaje-cuentas', label: 'Blindaje' },
  { id: 'herramientas', label: 'Herramientas' },
  { id: 'primeros-auxilios', label: 'Auxilios' },
  { id: 'acuerdo-familiar', label: 'Acuerdo' },
];

const GuiaPadres: React.FC = () => {
  const [seccionActiva, setSeccionActiva] = useState<string>('diccionario-digital');

  const scrollASeccion = (id: string) => {
    setSeccionActiva(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const enlacesSubNav = [
    { label: 'Inicio Proyecto', ruta: '/proyectos/ciberseguridad' },
    { label: 'Catálogo por Grado', ruta: '/proyectos/ciberseguridad/modulos' },
    { label: 'Justificación', ruta: '/proyectos/ciberseguridad/justificacion' },
    { label: 'Índices y Temario', ruta: '/proyectos/ciberseguridad/indices' },
    { label: 'Guía Docentes', ruta: '/proyectos/ciberseguridad/guias/docentes' },
    { label: 'Guía Padres', ruta: '/proyectos/ciberseguridad/guias/padres' },
    { label: 'Desarrolladores', ruta: '/proyectos/ciberseguridad/nosotros/sobre-devs' },
  ];

  return (
    <main className="portal-modulo-editorial">
      <HeaderProyecto
        categoria="Manual Integral de Ciberseguridad y Protección Familiar"
        titulo="ESCUDO FAMILIAR"
        tituloResaltado="DIGITAL"
        descripcion="Orientaciones, glosario de términos y protocolos prácticos de protección en el hogar para padres, madres y representantes del Complejo Educativo Antonio Lemus Pérez."
        imagenFondo={imgHeroCiber}
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Explorar Diccionario Digital',
            href: '#diccionario-digital',
            icono: <ArrowDown size={16} />,
          },
          {
            label: 'Ver Guía para Docentes',
            ruta: '/proyectos/ciberseguridad/guias/docentes',
            icono: <ArrowRight size={16} />,
          },
        ]}
      />

      {/* SUB-BARRA DE NAVEGACIÓN POR SECCIONES */}
      <div className="subnav-grados-editorial">
        <div className="contenedor-editorial">
          <div className="subnav-grados-inner">
            <span className="subnav-titulo">Secciones</span>
            <div className="subnav-pestanas">
              {SECCIONES_NAV.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`subnav-pestana-item ${
                    seccionActiva === s.id ? 'activa' : ''
                  }`}
                  onClick={() => scrollASeccion(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CUERPO EDITORIAL */}
      <div className="cuerpo-editorial-fondo">
        <div className="contenedor-editorial">
          <div className="cuerpo-editorial-layout">
            <article className="articulo-editorial-principal">
              {/* 01 — DICCIONARIO */}
              <section id="diccionario-digital" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">01 — Glosario</span>
                <h2 className="seccion-titulo-editorial">
                  Diccionario Digital para Padres
                </h2>
                <p className="parrafo-editorial">
                  La mayoría de los ataques no ocurren por "hackeos mágicos", sino
                  manipulando a las personas. Conocer los términos clave es el
                  primer paso para proteger su hogar.
                </p>
                <div className="lista-glosario-editorial">
                  {DICCIONARIO.map((item, idx) => (
                    <div key={idx} className="termino-editorial-item">
                      <div className="termino-editorial-encabezado">
                        <span className="termino-editorial-nombre">
                          {item.titulo}
                        </span>
                      </div>
                      <p className="termino-editorial-def">{item.definicion}</p>
                      <p className="termino-editorial-ejemplo">
                        <strong>Ejemplo:</strong> {item.ejemplo}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 02 — REGLAS DE ORO */}
              <section id="reglas-de-oro" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">02 — Protección Directa</span>
                <h2 className="seccion-titulo-editorial">
                  Reglas de Oro para Padres
                </h2>
                <p className="parrafo-editorial">
                  Usted es el pilar tecnológico del hogar. Si sus cuentas
                  principales son comprometidas, los atacantes usarán su
                  identidad para estafar a sus contactos.
                </p>
                <ol className="lista-protocolos-editorial">
                  {REGLAS_DE_ORO.map((r, idx) => (
                    <li key={idx} className="item-protocolo-editorial">
                      <span className="protocolo-numero">{idx + 1}</span>
                      <div className="protocolo-texto">
                        <strong>{r.titulo}.</strong> {r.detalle}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* 03 — ENGAÑOS FRECUENTES */}
              <section id="enganos-frecuentes" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">03 — Casos Reales</span>
                <h2 className="seccion-titulo-editorial">
                  Engaños Frecuentes: Método y Solución
                </h2>
                <p className="parrafo-editorial">
                  Los cibercriminales manipulan emociones como la urgencia, el
                  miedo y la curiosidad. Conocer el patrón es la mejor defensa.
                </p>
                <div className="reporte-amenazas-editorial">
                  {ENGAÑOS.map((e, idx) => (
                    <div key={idx} className="caso-amenaza-item">
                      <h3 className="caso-amenaza-titulo">{e.titulo}</h3>
                      <p className="caso-amenaza-descripcion">
                        <strong>El método:</strong> {e.metodo}
                      </p>
                      <p className="caso-amenaza-descripcion">
                        <strong>La solución:</strong> {e.solucion}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 04 — BLINDAJE */}
              <section id="blindaje-cuentas" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">04 — Configuración</span>
                <h2 className="seccion-titulo-editorial">
                  Blindaje de Cuentas Principales
                </h2>
                <p className="parrafo-editorial">
                  Configuración mínima recomendada en cada aplicación que use la
                  familia.
                </p>
                <div className="lista-glosario-editorial">
                  {BLINDAJE.map((b, idx) => (
                    <div key={idx} className="termino-editorial-item">
                      <div className="termino-editorial-encabezado">
                        <span className="termino-editorial-nombre">{b.titulo}</span>
                      </div>
                      <p className="termino-editorial-def">{b.detalle}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 05 — HERRAMIENTAS */}
              <section id="herramientas" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">05 — Recomendaciones</span>
                <h2 className="seccion-titulo-editorial">
                  Herramientas Recomendadas y Configuración
                </h2>
                <p className="parrafo-editorial">
                  Aplicaciones gratuitas y probadas para proteger los
                  dispositivos de la familia.
                </p>
                <div className="lista-glosario-editorial">
                  {HERRAMIENTAS.map((h, idx) => (
                    <div key={idx} className="termino-editorial-item">
                      <div className="termino-editorial-encabezado">
                        <span className="termino-editorial-nombre">{h.titulo}</span>
                      </div>
                      <p className="parrafo-editorial-guia">{h.categoria}</p>
                      <p className="termino-editorial-def">{h.detalle}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 06 — PRIMEROS AUXILIOS */}
              <section id="primeros-auxilios" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">06 — Protocolo de Crisis</span>
                <h2 className="seccion-titulo-editorial">
                  Primeros Auxilios Digitales y Ruta de Denuncia
                </h2>
                <p className="parrafo-editorial">
                  Si su hijo o usted están sufriendo ciberacoso, extorsión o
                  secuestro de cuenta, ejecute estas acciones inmediatas.
                </p>
                <ol className="lista-protocolos-editorial">
                  {PRIMEROS_AUXILIOS.map((p, idx) => (
                    <li key={idx} className="item-protocolo-editorial">
                      <span className="protocolo-numero">{idx + 1}</span>
                      <div className="protocolo-texto">
                        <strong>{p.titulo}.</strong> {p.detalle}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* 07 — ACUERDO FAMILIAR */}
              <section id="acuerdo-familiar" className="seccion-editorial-articulo">
                <span className="seccion-rotulo">07 — Convivencia</span>
                <h2 className="seccion-titulo-editorial">
                  Modelo de Acuerdo Digital Familiar
                </h2>
                <p className="parrafo-editorial">
                  Imprima o acuerde estas reglas de convivencia tecnológica en
                  casa.
                </p>
                <ul className="lista-competencias-editorial">
                  {ACUERDO_FAMILIAR.map((regla, idx) => (
                    <li key={idx} className="item-competencia-editorial">
                      <span className="indice-competencia">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>{regla}</div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* CIERRE */}
              <div className="caja-cierre-editorial">
                <h3 className="cierre-editorial-titulo">
                  Un hogar informado es un hogar protegido
                </h3>
                <p className="cierre-editorial-descripcion">
                  Comparta estas reglas con toda la familia y coordine con el
                  liceo las acciones preventivas. La ciberseguridad es un
                  esfuerzo conjunto entre escuela y hogar.
                </p>
                <div className="cierre-editorial-botones">
                  <a
                    href="/proyectos/ciberseguridad/guias/docentes"
                    className="boton-editorial-primario"
                  >
                    Ver Guía para Docentes
                  </a>
                  <a href="#diccionario-digital" className="boton-editorial-enlace">
                    Volver al inicio
                  </a>
                </div>
              </div>
            </article>

            {/* FICHA TÉCNICA LATERAL */}
            <aside className="aside-editorial-resumen">
              <div className="card-resumen-editorial">
                <h3 className="card-resumen-titulo">Ficha Técnica</h3>
                <dl className="resumen-lista-definiciones">
                  <div className="resumen-fila">
                    <dt>Dirigido a</dt>
                    <dd>Padres, madres y representantes</dd>
                  </div>
                  <div className="resumen-fila">
                    <dt>Secciones</dt>
                    <dd>07 capítulos prácticos</dd>
                  </div>
                  <div className="resumen-fila">
                    <dt>Cobertura</dt>
                    <dd>Todos los niveles del hogar</dd>
                  </div>
                  <div className="resumen-fila">
                    <dt>Herramientas</dt>
                    <dd>Gratuitas y multiplataforma</dd>
                  </div>
                  <div className="resumen-fila">
                    <dt>Marco legal</dt>
                    <dd>LOPNNA · LOE · Delitos Informáticos</dd>
                  </div>
                </dl>
             
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuiaPadres;