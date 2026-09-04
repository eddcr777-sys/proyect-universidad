import React from 'react';
import {
  ShieldAlert, ShieldCheck, Smartphone, KeyRound, ShoppingBag,
  Link as RouterLink, MessageSquareWarning, AlertTriangle, UserX, PhoneCall,
  Siren, Gavel, Scale, Lock, SmartphoneNfc, Users, Globe,
  CheckCircle2, ListOrdered, Eye, Shield, FileText, Download,
  PlayCircle, BookOpen, RefreshCw, AlertOctagon, HardDrive, Cpu,
  MessageSquareX, MicOff, School, Router, Gamepad2, Compass,
  EyeOff, ShieldOff, Flame, Bell, Key, Clock, Wrench,
  MessageSquare, Radio, Send,
  UserCheck,
  Mail,
  Server,
  ArrowRight,
  ArrowDown,
  Link
} from 'lucide-react';
import HeaderProyecto from '../../components/comunes/HeaderProyecto/HeaderProyecto';
import './Guias-padres.css';

const GuiaPadres: React.FC = () => {
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
    <main className="contenedor-principal">
      {/* Hero Unificado del Proyecto */}
      <HeaderProyecto
        categoria="Manual Integral de Ciberseguridad y Protección Familiar"
        titulo="ESCUDO FAMILIAR"
        tituloResaltado="DIGITAL"
        descripcion="Orientaciones fundamentales, glosario de términos y protocolos prácticos de protección en el hogar para padres, madres y representantes del Liceo Bolivariano Antonio Lemus Pérez."
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Explorar Diccionario Digital',
            href: '#diccionario-digital',
            icono: <ArrowDown size={18} />,
          },
          {
            label: 'Ver Guía para Docentes',
            ruta: '/proyectos/ciberseguridad/guias/docentes',
            icono: <ArrowRight size={20} />,
          },
        ]}
      />

      {/* 1. GLOSARIO EXPLICATIVO PARA PRINCIPIANTES */}
   {/* ========================================================================= */}
{/* SECCIÓN 1: DICCIONARIO DIGITAL AMPLIADO (CONCEPTOS QUE POCOS CONOCEN)     */}
{/* ========================================================================= */}
<section id="diccionario-digital" className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <BookOpen size={28} /> Diccionario Digital para Padres: Términos Explicados al Detalle
  </h2>
  <p className="texto-descriptivo">
    Para proteger su hogar, primero debe entender cómo piensan los cibercriminales. La mayoría de los ataques no ocurren por "hackeos mágicos", sino manipulando a las personas.
  </p>

  <div className="cuadricula-2-columnas">
    {/* 1.1 Phishing / Smishing / Vishing */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Ingeniería Social</span>
      <h3 className="titulo-tarjeta flex-centro"><AlertTriangle size={18} /> Phishing, Smishing y Vishing</h3>
      <p className="texto-pasos">
        <strong>¿Qué es?:</strong> Son métodos de engaño para "pescar" sus claves o dinero haciéndose pasar por instituciones de confianza.
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Cómo funciona cada uno con ejemplos reales?:</strong>
        <br />• <strong>Phishing (Correo):</strong> Recibe un e-mail idéntico al de su banco diciendo: <em>"Actualice sus datos en 24h o su cuenta será congelada"</em>. El enlace le lleva a una página falsa.
        <br />• <strong>Smishing (SMS):</strong> Recibe un mensaje de texto: <em>"Su paquete de MRW / Zoom está retenido. Ingrese aquí para pagar el flete"</em>. Al meter la tarjeta, le roban el saldo.
        <br />• <strong>Vishing (Llamada):</strong> Un estafador le llama fingiendo ser del soporte de su operadora móvil diciendo: <em>"Estamos actualizando la red 5G, dicteme el código que le llegó para activar el servicio"</em>. En realidad, está intentando instalar su WhatsApp en otro teléfono.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como identificar un mensaje de Phishing y Smishing falso"</code>
      </div>
    </div>

    {/* 1.2 Grooming, Sextorsión y Catfishing */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Peligros para Menores</span>
      <h3 className="titulo-tarjeta flex-centro"><ShieldAlert size={18} /> Grooming, Sextorsión y "Catfishing"</h3>
      <p className="texto-pasos">
        <strong>¿Qué es?:</strong> Estrategias que usan los adultos para engañar a niños y adolescentes en internet.
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Cómo funciona exactamente?:</strong>
        <br />• <strong>Catfishing:</strong> El acosador crea una cuenta falsa en redes o juegos con fotos de un joven atractivo de 13 años para caer bien.
        <br />• <strong>Grooming:</strong> Durante semanas, el adulto simula ser el "mejor amigo" del niño, le escucha, le regala cosas dentro de Roblox o Free Fire y se gana su confianza total.
        <br />• <strong>Sextorsión:</strong> Una vez ganada la confianza, le pide al niño una foto en ropa interior o privada. Al obtenerla, muestra su verdadera cara y lo amenaza: <em>"Si no me mandas más fotos o dinero, le enviaré esta foto a tus papás y compañeros de colegio"</em>.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Que es el Grooming y como detectarlo a tiempo en los hijos"</code>
      </div>
    </div>

    {/* 1.3 Malware, Spyware y Keyloggers */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Software Infectado</span>
      <h3 className="titulo-tarjeta flex-centro"><AlertOctagon size={18} /> Malware, Spyware y Keyloggers</h3>
      <p className="texto-pasos">
        <strong>¿Qué es?:</strong> Programas maliciosos que se instalan sin su permiso en teléfonos o computadoras.
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Cómo entra al teléfono y qué hace?:</strong>
        <br />• Entra cuando descarga juegos "piratas", películas gratis en páginas no oficiales o hace clic en anuncios flotantes.
        <br />• <strong>Spyware (Espía):</strong> Enciende el micrófono o la cámara en silencio y lee sus chats de WhatsApp.
        <br />• <strong>Keylogger (Registrador de teclas):</strong> Graba cada letra y número que usted escribe en la pantalla del teléfono, guardando usuarios, claves bancarias y números de tarjeta.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como saber si mi celular tiene virus o spyware instalado"</code>
      </div>
    </div>

    {/* 1.4 Ransomware (Secuestro de Archivos) */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Secuestro Digital</span>
      <h3 className="titulo-tarjeta flex-centro"><Lock size={18} /> Ransomware (Secuestro de Datos)</h3>
      <p className="texto-pasos">
        <strong>¿Qué es?:</strong> Un virus destructivo que "bloquea bajo candado" todos sus archivos, fotos familiares y documentos de la computadora.
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Cómo funciona el chantaje?:</strong> Cuando el virus entra, le cambia la clave a todos sus archivos para que no pueda abrirlos. Aparece una pantalla roja con un mensaje: <em>"Sus fotos y archivos han sido cifrados. Debe pagar $300 en Bitcoin antes de 48 horas para recuperar su clave"</em>.
      </p>
      <p className="texto-pasos mt-2">
        <strong>Nota importante:</strong> Pagar NUNCA garantiza que le devuelvan los archivos. La única defensa real es tener una copia de seguridad externa (backup).
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Que es el Ransomware y como proteger mis archivos"</code>
      </div>
    </div>

    {/* 1.5 Credential Stuffing y Filtración de Datos */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Fuga de Información</span>
      <h3 className="titulo-tarjeta flex-centro"><Server size={18} /> Filtraciones de Datos (Data Leaks)</h3>
      <p className="texto-pasos">
        <strong>¿Qué es?:</strong> Cuando atacantes roban las bases de datos de sitios web famosos (tiendas, foros, apps) y publican en internet millones de correos y contraseñas de los usuarios.
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Qué es el "Credential Stuffing"?:</strong> Los ciberdelincuentes toman la clave que se le filtró a usted en una página pequeña e intentan entrar automáticamente con esa misma clave en su Gmail, Facebook y banco. Por esto **NUNCA** debe repetir la misma clave.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como saber si mi correo o contraseña han sido filtrados en internet"</code>
      </div>
    </div>

    {/* 1.6 2FA, MFA y Código OTP */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Sistemas de Defensa</span>
      <h3 className="titulo-tarjeta flex-centro"><ShieldCheck size={18} /> 2FA / MFA y Código OTP</h3>
      <p className="texto-pasos">
        <strong>¿Qué es?:</strong> La **Doble Verificación** o **Doble Factor de Autenticación**.
      </p>
      <p className="texto-pasos mt-2">
        <strong>El concepto de las dos llaves:</strong> Imagine que la contraseña de su cuenta es la llave de la puerta principal. El 2FA es un candado adicional con una clave dinámica que cambia cada 30 segundos en su teléfono (OTP). Si un ladrón le roba la clave escrita, **no podrá entrar** porque le faltará el código de su celular.
      </p>
    </div>
  </div>
</section>

<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion-ambar flex-centro">
    <ShieldAlert className="icono-ambar" size={28} />
    Protección Directa para Padres: Reglas de Oro Explicadas
  </h2>
  <p className="texto-informativo-ambar">
    Usted es el pilar tecnológico del hogar. Si sus cuentas principales son comprometidas, los atacantes usarán su identidad para estafar a sus contactos y acceder a los dispositivos de sus hijos.
  </p>

  <div className="cuadricula-2-columnas">
    {/* 2.1 El mito del código SMS / OTP y la estafa del buzón de voz */}
    <div className="tarjeta-aviso-premium alerta-ambar">
      <h4>
        <Smartphone className="icono-ambar" size={20} /> 1. La Regla Inquebrantable del Código SMS / OTP
      </h4>
      <p>
        <strong>¿Por qué es tan peligroso?:</strong> Cuando usted solicita entrar a su WhatsApp o banca en línea, el sistema le envía un código numérico confidencial por SMS. Si otra persona le pide ese código por llamada o mensaje, **le está pidiendo la llave para apoderarse de su cuenta**.
      </p>
      <p className="mt-2">
        <strong>Peligro adicional (SIM Swapping):</strong> Los estafadores a veces van a las oficinas de telefonía con una cédula falsa con el nombre de usted para pedir un duplicado de su chip SIM. Si logran clonar su chip, recibirán sus códigos SMS. Por eso es vital usar **apps autenticadoras (Aegis / Google Authenticator)** en lugar de SMS.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Que es el SIM Swapping y como evitar que clonen mi numero"</code>
      </div>
    </div>

    {/* 2.2 Diversificación y anatomía de una contraseña fuerte */}
    <div className="tarjeta-aviso-premium alerta-azul">
      <h4>
        <KeyRound className="icono-azul" size={20} /> 2. El Peligro Fatal de Usar la Misma Contraseña
      </h4>
      <p>
        <strong>El error común:</strong> Tener una sola clave facil como <code>Carlos2024*</code> para el banco, el correo, la tienda en línea y el juego del niño.
      </p>
      <p className="mt-2">
        <strong>¿Qué ocurre si la página de compras sufre un hackeo?:</strong> Los hackers prueban ese usuario y clave en 100 páginas distintas en cuestión de segundos mediante robots informáticos. Si entra en su banco, le vacían las cuentas.
      </p>
      <p className="mt-2">
        <strong>Cómo crear una contraseña segura y fácil de recordar:</strong> Use frases largas con espacios o guiones.
        <br />• ❌ Incorrecto: <code>Casa1234</code>
        <br />• ✔️ Correcto: <code>El-Gato-Azul-Come-Pescado-2026!</code> (Es fácil de memorizar para usted, pero imposible de adivinar para un robot).
      </p>
    </div>

    {/* 2.3 Compras en Marketplace, Instagram y la Estafa del Pago Móvil Falso */}
    <div className="tarjeta-aviso-premium alerta-esmeralda">
      <h4>
        <ShoppingBag className="icono-verde" size={20} /> 3. Compras en Redes Sociales y la Estafa del Pago Falso
      </h4>
      <p>
        <strong>¿Cómo operan las estafas en Marketplace e Instagram?:</strong>
        <br />• <strong>El comprador/vendedor apurado:</strong> Le envían una captura de pantalla perfectamente editada en Photoshop que muestra una transferencia bancaria exitosa o Pago Móvil. Le exigen enviar el producto de inmediato mediante un delivery o motorizado.
      </p>
      <p className="mt-2">
        <strong>Regla de Verificación:</strong> **NUNCA entregue un producto ni confíe en capturas de pantalla de la otra persona.** Abra directamente la aplicación de su banco en su propio teléfono y verifique que el dinero **ya esté acreditado en su saldo disponible**.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como identificar un comprobante de pago falso en compras"</code>
      </div>
    </div>

    {/* 2.4 Verificación de Enlaces, HTTPS y Dominios Engañosos */}
    <div className="tarjeta-aviso-premium alerta-naranja">
      <h4>
        <Link className="icono-rojo" size={20} /> 4. Cómo Aprender a Leer Enlaces y Dominios Falsos
      </h4>
      <p>
        <strong>Aprenda a detectar trampas en la dirección web (URL):</strong>
      </p>
      <p className="mt-2">
        Los estafadores compran nombres de páginas casi idénticos a los reales para engañar a la vista:
        <br />• ❌ <strong>Falso:</strong> <code>bancodevenezuela.atencion-cliente-pagos.xyz</code> (La página real no es esa; el dominio verdadero es la última palabra antes del `.com`).
        <br />• ❌ <strong>Falso (Reemplazo de letras):</strong> <code>bancodevenezueIa.com</code> (Usan una `I` mayúscula en lugar de una `l` minúscula para simular el nombre).
        <br />• ✔️ <strong>Oficial:</strong> <code>bancodevenezuela.com</code>
      </p>
      <p className="mt-2">
        <strong>Qué hacer siempre:</strong> Guarde las páginas oficiales de su banco y trámites en los "Marcadores / Favoritos" de su navegador. Nunca busque "Banco X" en Google para hacer transferencias, ni toque enlaces recibidos por WhatsApp.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como identificar una pagina web falsa o de phishing"</code>
      </div>
    </div>

    {/* 2.5 Protección del Correo Electrónico Principal (El Correo Madre) */}
    <div className="tarjeta-aviso-premium alerta-azul">
      <h4>
        <Mail className="icono-azul" size={20} /> 5. El Correo "Madre": Su Activo Digital más Importante
      </h4>
      <p>
        <strong>¿Qué es el Correo Madre?:</strong> El correo electrónico (Gmail, Outlook, iCloud) con el que registró sus cuentas bancarias, redes sociales e identificaciones oficiales.
      </p>
      <p className="mt-2">
        <strong>Peligro común:</strong> Usar este mismo correo importante para registrarse en páginas de juegos gratis, descargar libros piratas o llenar encuestas en centros comerciales.
      </p>
      <p className="mt-2">
        <strong>Solución Práctica:</strong> Tenga al menos **dos correos electrónicos**:
        <br />1. **Correo Privado/Seguro:** Úselo ÚNICAMENTE para bancos, trámites de gobierno y claves principales. No lo comparta con nadie.
        <br />2. **Correo Púbico/Secundario:** Úselo para redes sociales, juegos de los niños, compras en tiendas y registros en internet.
      </p>
    </div>
  </div>
</section>

      {/* 3. VECTORES DE ATAQUE Y EXPLICACIÓN DE MÉTODOS */}
      <section className="seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <MessageSquareWarning size={24} /> Engaños Frecuentes: ¿Cómo Atacan y Cómo Evitarlo?
        </h2>
        <p className="texto-descriptivo">
          Los cibercriminales manipulan emociones como la urgencia, el miedo y la curiosidad para engañarle.
        </p>

        <div className="cuadricula-2-columnas">
          <div className="tarjeta-alerta-critica">
            <span className="etiqueta-critica">Secuestro de WhatsApp</span>
            <h3 className="titulo-tarjeta flex-centro">
              <PhoneCall size={20} /> El engaño del buzón de voz
            </h3>
            <p className="texto-pasos">
              <strong>El Método:</strong> El estafador solicita registrar su WhatsApp en otro teléfono a las 3:00 AM. Pide verificación por llamada. Como usted duerme, la llamada salta a su buzón de voz. El estafador llama a su buzón desde otro teléfono, oye el código y le roba la cuenta.
            </p>
            <p className="texto-pasos mt-2">
              <strong>La Solución:</strong> Active la verificación en 2 pasos de WhatsApp con un PIN de 6 dígitos y pida a su operadora desactivar el buzón de voz.
            </p>
          </div>

          <div className="tarjeta-alerta-critica">
            <span className="etiqueta-critica">Suplantación Familiar</span>
            <h3 className="titulo-tarjeta flex-centro">
              <Users size={20} /> El engaño del "Hola Mamá / Hola Papá"
            </h3>
            <p className="texto-pasos">
              <strong>El Método:</strong> Le escriben desde un número desconocido: <em>"Mamá, se me dañó el teléfono, guarda este número"</em>. Horas después le piden una transferencia urgente por un accidente o detención.
            </p>
            <p className="texto-pasos mt-2">
              <strong>La Solución:</strong> Cree una <strong>"Palabra Clave Familiar"</strong> secreta. Exija que se la digan por nota de voz o llame al número habitual de su hijo.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HERRAMIENTAS RECOMENDADAS: DÓNDE DESCARGAR Y CÓMO ACTIVAR */}
      <section className="seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <Download size={24} /> Herramientas de Seguridad: Descarga y Configuración
        </h2>
        <p className="texto-descriptivo">
          Aplicaciones gratuitas y probadas para proteger los dispositivos de la familia.
        </p>

        <div className="cuadricula-2-columnas">
          {/* BITWARDEN */}
          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Gestor de Contraseñas</span>
            <h3 className="titulo-tarjeta flex-centro"><Lock size={18} /> Bitwarden</h3>
            <p className="texto-pasos"><strong>¿Para qué sirve?:</strong> Es una caja fuerte digital que guarda y crea todas sus contraseñas de forma segura. Solo debe recordar una clave maestra.</p>
            <p className="texto-pasos mt-2"><strong>¿Dónde descargarlo?:</strong> Google Play Store, Apple App Store o en <code>bitwarden.com</code>.</p>
            <p className="texto-pasos mt-2"><strong>¿Cómo activarlo?:</strong> Cree una cuenta, configure una Contraseña Maestra larga que nunca olvide y active el desbloqueo por huella dactilar.</p>
            <div className="caja-video-tutorial mt-2">
              <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Cómo instalar y usar Bitwarden paso a paso desde cero"</code>
            </div>
          </div>

          {/* GOOGLE FAMILY LINK */}
          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Control Parental</span>
            <h3 className="titulo-tarjeta flex-centro"><Users size={18} /> Google Family Link</h3>
            <p className="texto-pasos"><strong>¿Para qué sirve?:</strong> Permite establecer límites de tiempo de pantalla, bloquear apps no aptas para la edad del menor y ver su ubicación GPS.</p>
            <p className="texto-pasos mt-2"><strong>¿Dónde descargarlo?:</strong> Google Play Store o Apple App Store en el teléfono del tutor.</p>
            <p className="texto-pasos mt-2"><strong>¿Cómo activarlo?:</strong> Abra la app, elija "Tutor", cree o vincule la cuenta de Google de su hijo y siga las instrucciones en pantalla para enlazar ambos dispositivos.</p>
            <div className="caja-video-tutorial mt-2">
              <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Tutorial completo configuración Google Family Link en Android y iPhone"</code>
            </div>
          </div>

          {/* CLOUDFLARE FAMILY DNS */}
          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Filtro de Contenido Nivel Red</span>
            <h3 className="titulo-tarjeta flex-centro"><Globe size={18} /> Cloudflare Family DNS (1.1.1.3)</h3>
            <p className="texto-pasos"><strong>¿Para qué sirve?:</strong> Bloquea automáticamente en todo el teléfono o red de la casa las páginas con contenido adulto y virus conocidos.</p>
            <p className="texto-pasos mt-2"><strong>¿Dónde descargarlo/configurarlo?:</strong> App "1.1.1.1: Faster & Safer Internet" en tiendas de apps, o directamente en los ajustes del teléfono.</p>
            <p className="texto-pasos mt-2"><strong>¿Cómo activarlo en Android?:</strong> Ajustes &gt; Red e Internet &gt; DNS Privado &gt; Escriba: <code>family.cloudflare-dns.com</code></p>
            <div className="caja-video-tutorial mt-2">
              <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Cómo activar DNS Privado Cloudflare Family 1.1.1.3 en celular"</code>
            </div>
          </div>

          {/* AEGIS / AUTHENTICATOR */}
          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Autenticador 2FA</span>
            <h3 className="titulo-tarjeta flex-centro"><SmartphoneNfc size={18} /> Aegis Authenticator / Google Authenticator</h3>
            <p className="texto-pasos"><strong>¿Para qué sirve?:</strong> Genera códigos de seguridad de 6 dígitos que cambian cada 30 segundos, reemplazando los SMS vulnerables.</p>
            <p className="texto-pasos mt-2"><strong>¿Dónde descargarlo?:</strong> Play Store (Aegis para Android es libre) o App Store (Google Authenticator / Microsoft Authenticator).</p>
            <p className="texto-pasos mt-2"><strong>¿Cómo activarlo?:</strong> En la app que desee proteger (ej. Facebook), elija "Verificación en 2 pasos por App", escanee el código QR con Aegis y listo.</p>
            <div className="caja-video-tutorial mt-2">
              <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Cómo usar una aplicación de autenticación 2FA paso a paso"</code>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TUTORIALES PASO A PASO EXPLICITOS */}
      <section className="seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <ListOrdered size={24} /> Guías Paso a Paso de Configuración en Aplicaciones
        </h2>
        <div className="cuadricula-2-columnas">
          <div className="tarjeta-paso">
            <span className="etiqueta-verde">WhatsApp</span>
            <h3 className="titulo-tarjeta">Activar Verificación en 2 Pasos</h3>
            <div className="lista-pasos">
              <div className="paso-item">
                <span className="icono-numero">1</span>
                <p>Abra WhatsApp &gt; Toque los 3 puntos superiores (Ajustes) o Configuración.</p>
              </div>
              <div className="paso-item">
                <span className="icono-numero">2</span>
                <p>Ingrese a <strong>Cuenta</strong> &gt; <strong>Verificación en dos pasos</strong>.</p>
              </div>
              <div className="paso-item">
                <span className="icono-numero">3</span>
                <p>Toque <strong>Activar</strong> &gt; Ingrese un PIN secreto de 6 dígitos que recuerde bien.</p>
              </div>
              <div className="paso-item">
                <span className="icono-numero">4</span>
                <p>Agregue su correo electrónico personal para recuperar el PIN si lo olvida.</p>
              </div>
            </div>
            <div className="caja-video-tutorial mt-2">
              <PlayCircle size={16} /> <strong>Video Tutorial:</strong> Busca en YouTube <code>"Cómo activar verificación en dos pasos en WhatsApp"</code>
            </div>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Instagram / TikTok</span>
            <h3 className="titulo-tarjeta">Hacer la Cuenta del Menor Privada</h3>
            <div className="lista-pasos">
              <div className="paso-item">
                <span className="icono-numero">1</span>
                <p>Abra la aplicación &gt; Diríjase al Perfil del menor.</p>
              </div>
              <div className="paso-item">
                <span className="icono-numero">2</span>
                <p>Toque el Menú (3 líneas) &gt; <strong>Configuración y privacidad</strong>.</p>
              </div>
              <div className="paso-item">
                <span className="icono-numero">3</span>
                <p>Busque <strong>Privacidad de la cuenta</strong> y active la opción <strong>Cuenta privada</strong>.</p>
              </div>
              <div className="paso-item">
                <span className="icono-numero">4</span>
                <p>Desactive la opción de recibir mensajes directos de usuarios desconocidos.</p>
              </div>
            </div>
            <div className="caja-video-tutorial mt-2">
              <PlayCircle size={16} /> <strong>Video Tutorial:</strong> Busca en YouTube <code>"Como poner la cuenta de Instagram o TikTok totalmente privada"</code>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRIMEROS AUXILIOS DIGITALES ANTE EMERGENCIAS */}
      <section className="tarjeta-pro border-rojo seccion-espaciada">
        <h2 className="titulo-seccion-roja flex-centro">
          <Siren className="icono-rojo" size={28} />
          Primeros Auxilios Digitales: Pasos Inmediatos ante Crisis
        </h2>
        <p className="texto-informativo-rojo">
          Si su hijo o usted están sufriendo ciberacoso, extorsión o secuestro de cuenta, ejecute esta lista de verificación inmediata:
        </p>

        <div className="lista-protocolo">
          <div className="paso-protocolo">
            <span className="numero-critico">1</span>
            <div>
              <strong>Contención y No Pago (Cero Rendición):</strong> No ceda al chantaje económico ni entregue más imágenes.
              Pagar no detiene al extorsionador; confirma que tiene dinero y continuará pidiendo más.
            </div>
          </div>

          <div className="paso-protocolo">
            <span className="numero-critico">2</span>
            <div>
              <strong>Preservación Forense de Evidencias:</strong> No borre los chats ni las fotos por vergüenza.
              Tome capturas de pantalla donde se vea el número de teléfono, nombre de usuario, fotos de perfil, fecha y hora.
            </div>
          </div>

          <div className="paso-protocolo">
            <span className="numero-critico">3</span>
            <div>
              <strong>Aislamiento y Cierre de Sesiones:</strong> Desconecte el teléfono del Wi-Fi si sospecha de virus.
              Entre a sus cuentas desde otra computadora y presione <em>"Cerrar todas las sesiones activas"</em>.
            </div>
          </div>

          <div className="paso-protocolo">
            <span className="numero-critico">4</span>
            <div>
              <strong>Apoyo Emocional Incondicional:</strong> Apoye al menor. No le grite ni le quite el teléfono como castigo.
              Un niño castigado nunca volverá a pedir ayuda si le ocurre un problema más grave.
            </div>
          </div>
        </div>
      </section>

      {/* 7. RUTAS DE DENUNCIA LEGAL */}
      <section className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <Gavel size={24} /> Ruta Legal e Institucional para Denuncias
        </h2>
        <p className="texto-descriptivo">
          Los delitos en internet son hechos punibles. Si es víctima de extorsión o ciberacoso grave:
        </p>

        <div className="cuadricula-2-columnas">
          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Denuncia Penal</span>
            <h3 className="titulo-tarjeta flex-centro"><Scale size={20} /> Órganos Policiales</h3>
            <p className="texto-pasos">
              Acuda a la División de Delitos Informáticos del <strong>CICPC</strong> o cuerpo policial especializado de su región. Llévelas pruebas guardadas en un pendrive USB e impresas en papel.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Protección de Menores</span>
            <h3 className="titulo-tarjeta flex-centro"><Shield size={20} /> Protección LOPNNA</h3>
            <p className="texto-pasos">
              El grooming y la difusión no consentida de imágenes violan la Ley Especial contra Delitos Informáticos y normativas de protección del menor. Puede solicitar medidas de protección inmediatas.
            </p>
          </div>
        </div>
      </section>

      {/* 8. ACUERDO DIGITAL FAMILIAR */}
      <section className="tarjeta-pro border-rojo">
        <h2 className="titulo-seccion flex-centro">
          <FileText size={24} /> Modelo de Acuerdo Digital Familiar
        </h2>
        <p className="texto-descriptivo">
          Imprima o acuerde estas reglas de convivencia tecnológica en casa:
        </p>
        <div className="lista-pasos">
          <div className="paso-item">
            <span className="icono-numero"><CheckCircle2 size={14} /></span>
            <p><strong>Carga nocturna fuera de dormitorios:</strong> Los teléfonos se cargan en la sala o cocina durante la noche para garantizar el descanso.</p>
          </div>
          <div className="paso-item">
            <span className="icono-numero"><CheckCircle2 size={14} /></span>
            <p><strong>Regla de cero castigos por pedir ayuda:</strong> Si el menor ve algo extraño o comete un error en Internet, puede acudir a los padres sin miedo a ser castigado.</p>
          </div>
          <div className="paso-item">
            <span className="icono-numero"><CheckCircle2 size={14} /></span>
            <p><strong>Cero desconocidos en listas de amigos:</strong> Solo se aceptan solicitudes de personas que el niño conozca en la vida real.</p>
          </div>
        </div>
      </section>

<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <Gamepad2 size={28} /> Peligros en Chats de Juegos y Estafas de Monedas Falsas
  </h2>
  <p className="texto-descriptivo">
    Los juegos en línea modernos (Roblox, Fortnite, Free Fire, Minecraft, Discord) integran salas de chat escritas y de voz donde cualquier desconocido en el mundo puede hablar directamente con su hijo.
  </p>

  <div className="cuadricula-2-columnas">
    {/* Peligro 1: Acosadores y Grooming en Chats de Voz */}
    <div className="tarjeta-alerta-critica">
      <span className="etiqueta-critica">Riesgo de Acoso Directo</span>
      <h3 className="titulo-tarjeta flex-centro">
        <UserX size={20} /> Predadores en Chats de Voz y Discord
      </h3>
      <p className="texto-pasos">
        <strong>¿Cómo funciona el peligro?:</strong> Los atacantes ganan la confianza de los menores jugando partidas diarias. Luego, los convence de salir del juego e ir a servidores privados de <strong>Discord</strong> o <strong>WhatsApp</strong>, donde no hay filtros de control parental. Allí comienzan las solicitudes de fotos privadas o datos de la familia a cambio de objetos digitales dentro del juego.
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Cómo desactivar el chat en Roblox?:</strong> Ingrese a la cuenta del niño &gt; Ajustes (engranaje) &gt; <strong>Privacidad</strong> &gt; En <em>"¿Quién puede comunicarse conmigo?"</em>, cambie a <strong>"Nadie"</strong> o <strong>"Solo amigos"</strong>. Active la opción <em>"PIN de la cuenta"</em> para que el niño no pueda volver a activar el chat por su cuenta.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como desactivar el chat y poner PIN de seguridad en Roblox"</code>
      </div>
    </div>

    {/* Peligro 2: Generadores de Robux / Pavos Gratis */}
    <div className="tarjeta-alerta-critica">
      <span className="etiqueta-critica">Robo de Cuentas</span>
      <h3 className="titulo-tarjeta flex-centro">
        <Flame size={20} /> Páginas Falsas de "Robux / V-Bucks Gratis"
      </h3>
      <p className="texto-pasos">
        <strong>¿Qué es?:</strong> Sitios web promocionados en videos de TikTok o YouTube que prometen regalar miles de monedas o skins gratis si el niño introduce su usuario, clave o llena una encuesta.
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Qué hace la amenaza?:</strong> Secuestran la cuenta del menor de inmediato (cambiando el correo y la clave) para vender sus objetos digitales en el mercado negro, o instalan virus en el teléfono al hacer clic en los botones de "descarga".
      </p>
      <p className="texto-pasos mt-2">
        <strong>Regla de Oro:</strong> En ningún juego existen las "monedas gratis". Toda página que pida la contraseña del juego para regalar cosas es 100% una estafa.
      </p>
    </div>
  </div>
</section>



<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <EyeOff size={28} /> Navegación Web: La Falsa Seguridad del "Modo Incógnito"
  </h2>
  <p className="texto-descriptivo">
    Existe la falsa creencia de que al usar la pestaña en privado o "incógnito", nadie puede ver lo que se hace en el teléfono. Esto es un mito peligroso.
  </p>

  <div className="cuadricula-2-columnas">
    {/* Mito del Modo Incógnito */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Desmitificando Tecnologías</span>
      <h3 className="titulo-tarjeta flex-centro">
        <ShieldOff size={18} /> ¿Qué hace y qué NO hace el Modo Incógnito?
      </h3>
      <p className="texto-pasos">
        <strong>Lo que SÍ hace:</strong> Solo evita que el historial de páginas web se guarde <em>en el archivo local de ese navegador específico</em> una vez que se cierra la pestaña.
      </p>
      <p className="texto-pasos mt-2">
        <strong>Lo que NO hace (Y por qué no protege):</strong> 
        <br />• <strong>NO oculta nada al proveedor de internet (CANTV, Movistar, etc.):</strong> La empresa telefónica sabe exactamente qué páginas visitó.
        <br />• <strong>NO oculta nada al Wi-Fi de la casa o colegio:</strong> El administrador del router puede ver el tráfico.
        <br />• <strong>NO evita la infección por virus:</strong> Si descarga un archivo infectado en privado, se infectará igual.
        <br />• <strong>NO lo hace anónimo ante la policía ni los sitios web:</strong> Su dirección IP real sigue expuesta.
      </p>
    </div>

    {/* Peligros en la Red: Redirecciones y Anuncios Engañosos */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Peligros de la Navegación Libre</span>
      <h3 className="titulo-tarjeta flex-centro">
        <AlertTriangle size={18} /> Ventanas Emergentes (Pop-ups) y Sitios de Piratería
      </h3>
      <p className="texto-pasos">
        <strong>¿Qué ocurre al buscar películas gratis o tareas?:</strong> Sitios de películas no oficiales (cuevana, anime, etc.) o de descargas están saturados de anuncios invisibles. Al hacer clic en cualquier parte de la pantalla, se abren ventanas con falsos avisos de: <em>"¡Su teléfono tiene 13 virus! Descargue aquí para limpiar"</em>.
      </p>
      <p className="texto-pasos mt-2">
        <strong>El Riesgo:</strong> Si el usuario presiona "Aceptar" o "Permitir notificaciones", autoriza a los atacantes a enviar publicidad porno o alertas falsas de bancos directo a la barra de notificaciones del teléfono.
      </p>
    </div>
  </div>
</section>

<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <Send size={28} /> Telegram: Blindaje de Seguridad y Privacidad
  </h2>
  <p className="texto-descriptivo">
    Telegram es una aplicación muy avanzada, pero por defecto puede dejar su número de teléfono expuesto a desconocidos o permitir que le agreguen a grupos de estafas automáticas.
  </p>

  <div className="cuadricula-2-columnas">
    {/* Contraseñas y 2FA en Telegram */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Capa de Autenticación</span>
      <h3 className="titulo-tarjeta flex-centro"><Lock size={18} /> Verificación en 2 Pasos y Código de Acceso</h3>
      <p className="texto-pasos">
        <strong>1. Contraseña Adicional (2FA):</strong> Exige una clave cada vez que inicie sesión en un teléfono nuevo, incluso si le envían un código por SMS.
        <br />• <em>Paso a paso:</em> Ajustes &gt; Privacidad y seguridad &gt; <strong>Verificación en dos pasos</strong> &gt; Crear contraseña.
      </p>
      <p className="texto-pasos mt-2">
        <strong>2. Bloqueo con Código en la App:</strong> Bloquea la app con un PIN si le prestas el teléfono a otra persona.
        <br />• <em>Paso a paso:</em> Ajustes &gt; Privacidad y seguridad &gt; <strong>Código de bloqueo</strong> &gt; Activar.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como activar la verificacion en dos pasos y bloqueo en Telegram"</code>
      </div>
    </div>

    {/* Ocultar Número y Grupos en Telegram */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Privacidad de Identidad</span>
      <h3 className="titulo-tarjeta flex-centro"><Eye size={18} /> Ocultar Número y Restringir Invitaciones</h3>
      <p className="texto-pasos">
        <strong>1. Ocultar Teléfono Real:</strong> Impide que extraños vean su número de celular en grupos.
        <br />• <em>Paso a paso:</em> Ajustes &gt; Privacidad y seguridad &gt; <strong>Número de teléfono</strong> &gt; Cambiar a <strong>"Nadie"</strong>.
      </p>
      <p className="texto-pasos mt-2">
        <strong>2. Evitar que lo metan en grupos raros:</strong>
        <br />• <em>Paso a paso:</em> Ajustes &gt; Privacidad y seguridad &gt; <strong>Grupos y canales</strong> &gt; Cambiar a <strong>"Mis contactos"</strong>.
      </p>
      <p className="texto-pasos mt-2">
        <strong>3. Proteger Llamadas (Ocultar IP):</strong>
        <br />• <em>Paso a paso:</em> Ajustes &gt; Privacidad y seguridad &gt; <strong>Llamadas</strong> &gt; Peer-to-Peer &gt; Cambiar a <strong>"Mis contactos"</strong> o <strong>"Nadie"</strong>.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Ajustes de privacidad imprescindibles en Telegram"</code>
      </div>
    </div>
  </div>
</section>

<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <MessageSquare size={28} /> WhatsApp: Escudo Avanzado Anti-Hackeo
  </h2>
  <p className="texto-descriptivo">
    Más allá del PIN de 6 dígitos, WhatsApp cuenta con nuevas funciones avanzadas para evitar el espiado de llamadas y la interceptación de archivos.
  </p>

  <div className="cuadricula-2-columnas">
    {/* Funciones Avanzadas de Privacidad */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Privacidad Avanzada</span>
      <h3 className="titulo-tarjeta flex-centro"><Radio size={18} /> Silenciar Llamadas y Proteger Dirección IP</h3>
      <p className="texto-pasos">
        <strong>1. Silenciar llamadas de desconocidos:</strong> Las llamadas de números fuera de su agenda no sonarán (evita estafas por voz).
        <br />• <em>Paso a paso:</em> Ajustes &gt; Privacidad &gt; <strong>Llamadas</strong> &gt; Activar <em>"Silenciar las llamadas de números desconocidos"</em>.
      </p>
      <p className="texto-pasos mt-2">
        <strong>2. Proteger dirección IP en llamadas:</strong> Oculta la ubicación geográfica real del teléfono durante una llamada de WhatsApp.
        <br />• <em>Paso a paso:</em> Ajustes &gt; Privacidad &gt; <strong>Avanzada</strong> &gt; Activar <em>"Proteger la dirección IP en las llamadas"</em>.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como activar silenciar llamadas desconocidas y proteger IP en WhatsApp"</code>
      </div>
    </div>

    {/* Copia de Seguridad Cifrada y Fotos de Perfil */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Cifrado de Extremo a Extremo</span>
      <h3 className="titulo-tarjeta flex-centro"><ShieldCheck size={18} /> Copia de Seguridad Cifrada y Foto Visible</h3>
      <p className="texto-pasos">
        <strong>1. Cifrar la Copia en la Nube:</strong> Ni Google ni Apple ni cibercriminales podrán leer sus chats respaldados en la nube.
        <br />• <em>Paso a paso:</em> Ajustes &gt; Chats &gt; Copia de seguridad &gt; <strong>Copia de seguridad cifrada de extremo a extremo</strong> &gt; Activar y crear contraseña.
      </p>
      <p className="texto-pasos mt-2">
        <strong>2. Proteger la Foto de Perfil (Evita Suplantación):</strong>
        <br />• <em>Paso a paso:</em> Ajustes &gt; Privacidad &gt; <strong>Foto de perfil</strong> &gt; Cambiar a <strong>"Mis contactos"</strong> (evita que estafadores usen su foto para crear perfiles falsos).
      </p>
    </div>
  </div>
</section>



<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <Wrench size={28} /> Facebook e Instagram: Blindaje de Cuentas Meta
  </h2>
  <p className="texto-descriptivo">
    Las cuentas de Facebook e Instagram suelen estar vinculadas al Centro de Cuentas de Meta. Si hackean una, pueden tomar el control de ambas y hacer estafas a su nombre.
  </p>

  <div className="cuadricula-2-columnas">
    {/* Autenticación y Alertas en Meta */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Centro de Cuentas</span>
      <h3 className="titulo-tarjeta flex-centro"><SmartphoneNfc size={18} /> 2FA con App Autenticadora y Alertas</h3>
      <p className="texto-pasos">
        <strong>1. Activar 2FA con App (NO por SMS):</strong> El SMS puede ser interceptado. Use apps como Google Authenticator o Bitwarden.
        <br />• <em>Paso a paso:</em> Configuración &gt; Centro de cuentas Meta &gt; Contraseña y seguridad &gt; <strong>Autenticación en dos pasos</strong> &gt; Seleccionar <em>"App de autenticación"</em>.
      </p>
      <p className="texto-pasos mt-2">
        <strong>2. Alertas de inicio de sesión no reconocido:</strong> Le notifica de inmediato al correo si alguien intenta entrar desde una ciudad o dispositivo extraño.
        <br />• <em>Paso a paso:</em> Centro de cuentas Meta &gt; Contraseña y seguridad &gt; <strong>Alertas de inicio de sesión</strong> &gt; Activar todas las notificaciones.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como proteger cuenta de Facebook e Instagram en Centro de Cuentas Meta"</code>
      </div>
    </div>

    {/* Desvinculación y Privacidad de Buscadores */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Ocultar de Motores de Búsqueda</span>
      <h3 className="titulo-tarjeta flex-centro"><UserCheck size={18} /> Ocultar Perfil de Google y Limpiar Accesos</h3>
      <p className="texto-pasos">
        <strong>1. Que su perfil no salga al buscar su nombre en Google:</strong>
        <br />• <em>Paso a paso en Facebook:</em> Configuración &gt; Cómo pueden encontrarte y contactarte &gt; <em>"¿Quieres que los motores de búsqueda fuera de Facebook enlacen a tu perfil?"</em> &gt; Desactivar.
      </p>
      <p className="texto-pasos mt-2">
        <strong>2. Desvincular Actividad Fuera de Facebook:</strong> Evita que Facebook rastree las apps de compras o juegos que usa en su celular.
        <br />• <em>Paso a paso:</em> Centro de cuentas &gt; Tu información y permisos &gt; <strong>Actividad fuera de las tecnologías de Meta</strong> &gt; Desconectar actividad futura.
      </p>
    </div>
  </div>
</section>



<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <Key size={28} /> La Cuenta Maestra del Teléfono (Google / Apple ID)
  </h2>
  <p className="texto-descriptivo">
    Su cuenta de Google (Gmail) o Apple ID (iCloud) es la **llave maestra** del dispositivo. Si un atacante entra a esta cuenta, puede formatear su celular a distancia, borrar fotos o recuperar las claves de sus bancos.
  </p>

  <div className="cuadricula-2-columnas">
    {/* Configuración de Recuperación */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Recuperación de Emergencia</span>
      <h3 className="titulo-tarjeta flex-centro"><Bell size={18} /> Datos de Recuperación Vigentes</h3>
      <p className="texto-pasos">
        <strong>¿Para qué sirve?:</strong> Si olvida la clave o le roban el teléfono, estos métodos le permiten demostrar su identidad y recuperar la cuenta.
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Qué debe configurar hoy mismo?:</strong>
        <br />• <strong>Correo de recuperación alternativo:</strong> Debe ser la cuenta de un cónyuge o familiar muy cercano.
        <br />• <strong>Número de teléfono de recuperación:</strong> Verifique que sea su número móvil actual y no uno antiguo que ya no use.
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Dónde configurarlo en Android?:</strong> Ajustes del teléfono &gt; Google &gt; Gestionar tu cuenta de Google &gt; Pestaña <strong>Seguridad</strong> &gt; Métodos para verificar tu identidad.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como asegurar tu cuenta de Google Gmail al 100 por ciento"</code>
      </div>
    </div>

    {/* Revisión de Aplicaciones con Acceso */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Auditoría de Permisos</span>
      <h3 className="titulo-tarjeta flex-centro"><Clock size={18} /> Revocar Permisos a Aplicaciones Viejas</h3>
      <p className="texto-pasos">
        <strong>El Peligro:</strong> A lo largo de los años, iniciamos sesión en juegos, sitios web y pruebas con el botón <em>"Iniciar sesión con Google"</em> o <em>"Apple ID"</em>. Esas aplicaciones mantienen acceso a sus datos.
      </p>
      <p className="texto-pasos mt-2">
        <strong>Cómo hacer la limpieza:</strong>
        <br />• <em>En Google:</em> Cuenta de Google &gt; Seguridad &gt; <strong>Conexiones con aplicaciones y servicios de terceros</strong> &gt; Toque las apps que ya no use y presione <strong>"Eliminar todas las conexiones"</strong>.
        <br />• <em>En iPhone / Apple ID:</em> Ajustes &gt; Su nombre &gt; Contraseña y seguridad &gt; <strong>Apps que usan el ID de Apple</strong> &gt; Dejar de usar el ID de Apple en las innecesarias.
      </p>
    </div>
  </div>
</section>

<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <Compass size={28} /> Guía de Navegadores: Recomendados vs. Inseguros
  </h2>
  <p className="texto-descriptivo">
    El navegador es la ventana al mundo digital. Utilizar la herramienta correcta previene el 90% de los anuncios maliciosos y rastreadores de datos.
  </p>

  <div className="cuadricula-2-columnas">
    {/* NAVEGADORES RECOMENDADOS */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Altamente Recomendados</span>
      <h3 className="titulo-tarjeta flex-centro">
        <Lock size={18} /> Navegadores Seguros y Privados
      </h3>

      <div className="texto-pasos">
        <p><strong>1. Brave Browser:</strong></p>
        <p>• <em>¿Para qué sirve?:</em> Bloquea automáticamente todos los anuncios, ventanas emergentes y rastreadores sin configurar nada.</p>
        <p>• <em>¿Dónde descargarlo?:</em> Play Store, App Store o <code>brave.com</code>.</p>
      </div>

      <div className="texto-pasos mt-2">
        <p><strong>2. Firefox + uBlock Origin:</strong></p>
        <p>• <em>¿Para qué sirve?:</em> Navegador de código abierto que respeta la privacidad. Al instalarle el complemento <strong>uBlock Origin</strong>, elimina toda la publicidad engañosa de la red.</p>
        <p>• <em>¿Dónde descargarlo?:</em> Tiendas oficiales de aplicaciones.</p>
      </div>

      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como instalar y configurar el navegador Brave para bloquear anuncios"</code>
      </div>
    </div>

    {/* NAVEGADORES Y PRÁCTICAS INSEGURAS */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Riesgo Alto / No Recomendados</span>
      <h3 className="titulo-tarjeta flex-centro">
        <Globe size={18} /> Navegadores Integrados y No Oficiales
      </h3>

      <div className="texto-pasos">
        <p><strong>1. Navegadores internos de Apps (TikTok / Instagram / Facebook):</strong></p>
        <p>• <em>El Peligro:</em> Cuando su hijo toca un enlace dentro de TikTok o Instagram, la página se abre dentro de la propia app. Estas apps utilizan un sistema llamado <em>"In-App Browser"</em> que permite a la red social registrar cada tecla que presiona el usuario (incluyendo contraseñas o tarjetas de crédito typedeadas allí).</p>
        <p>• <em>Solución:</em> Active en los ajustes de esas apps la opción <strong>"Abrir enlaces en el navegador externo predeterminado"</strong>.</p>
      </div>

      <div className="texto-pasos mt-2">
        <p><strong>2. Navegadores "Rápidos" o "Piratas" de tiendas no oficiales:</strong></p>
        <p>• <em>El Peligro:</em> Evite instalar navegadores desconocidos que prometen "acelerar el internet" o "dar Wi-Fi gratis". Suelen ser aplicaciones espía (spyware) diseñadas para vender todo el historial de búsqueda a empresas de marketing o estafadores.</p>
      </div>
    </div>
  </div>
</section>



<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <Cpu size={28} /> Amenazas con Inteligencia Artificial (Deepfakes y Vishing)
  </h2>
  <p className="texto-descriptivo">
    La tecnología actual permite clonar la voz de un familiar usando solo 3 segundos de un video publicado en redes sociales.
  </p>

  <div className="cuadricula-2-columnas">
    {/* Término: Clonación de Voz */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Técnica de Estafa</span>
      <h3 className="titulo-tarjeta">Clonación de Voz con IA (Vishing Avanzado)</h3>
      <p className="texto-pasos">
        <strong>¿Qué es?:</strong> Un software de IA que imita a la perfección el tono, acento y forma de hablar de su hijo o cónyuge a partir de audios públicos de redes sociales.
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Cómo operan?:</strong> Llaman por teléfono imitando la voz del menor gritando o pidiendo ayuda urgente por un secuestro o accidente para exigir dinero en minutos.
      </p>
    </div>

    {/* Protocolo de Contención */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Escudo Familiar</span>
      <h3 className="titulo-tarjeta flex-centro">
        <MicOff size={18} /> Código o Pregunta de Comprobación
      </h3>
      <p className="texto-pasos">
        <strong>¿Para qué sirve?:</strong> Desarticular en segundos un intento de extorsión con voz falsa.
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Cómo usarlo?:</strong> Acuerde en casa una palabra secreta (ejemplo: <em>"Abono"</em>) o una pregunta que solo la familia conozca (ejemplo: <em>"¿Cómo se llamaba la primera mascota de la casa?"</em>). Si recibe una llamada alarmista, exija la palabra clave. Si cuelgan o dudan, es una estafa.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como funcionan las extorsiones con voz clonada por Inteligencia Artificial"</code>
      </div>
    </div>
  </div>
</section>


<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <MessageSquareX size={28} /> Ciberbullying, Doxing y Acoso Digital
  </h2>
  <p className="texto-descriptivo">
    El acoso ya no se queda en el salón de clases; persigue al estudiante dentro de su propia habitación a través del teléfono.
  </p>

  <div className="cuadricula-2-columnas">
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Conceptos Clave</span>
      <h3 className="titulo-tarjeta">¿Qué es el "Doxing"?</h3>
      <p className="texto-pasos">
        <strong>Definición:</strong> Revelar en internet datos privados de una persona (dirección de su casa, número de teléfono personal, colegio al que va o fotos comprometedoras) con el fin de instigar al acoso masivo.
      </p>
      <p className="texto-pasos mt-2">
        <strong>Consecuencias:</strong> Pérdida total de la privacidad del menor, llamadas de acoso nocturnas e intoxicación de su reputación digital.
      </p>
    </div>

    {/* Protocolo Escolar y Legal */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Acción Institucional</span>
      <h3 className="titulo-tarjeta flex-centro">
        <School size={18} /> Protocolo de Actuación para Padres
      </h3>
      <p className="texto-pasos">
        <strong>Paso 1 (No borrar datos):</strong> Guarde capturas de pantalla con las URLs completas de los perfiles acosadores y los mensajes.
      </p>
      <p className="texto-pasos mt-2">
        <strong>Paso 2 (Notificación al plantel):</strong> Presente un informe por escrito ante la directiva del colegio exigiendo la aplicación del reglamento interno de convivencia contra el acoso escolar.
      </p>
      <p className="texto-pasos mt-2">
        <strong>Paso 3 (Bloqueo y Reporte):</strong> Reporte las cuentas en las plataformas (Instagram, TikTok, WhatsApp) por <em>"Acoso o Hostigamiento"</em>.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como denunciar y gestionar el ciberbullying en las escuelas"</code>
      </div>
    </div>
  </div>
</section>


<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <Router size={28} /> Protegiendo la Red Wi-Fi de la Casa
  </h2>
  <p className="texto-descriptivo">
    El router es la puerta de entrada a todos los teléfonos, televisores y computadoras del hogar. Si el router es vulnerable, toda la red lo es.
  </p>

  <div className="cuadricula-2-columnas">
    {/* Explicación de la Amenaza */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Concepto Básico</span>
      <h3 className="titulo-tarjeta">Acceso Administrativo al Router</h3>
      <p className="texto-pasos">
        <strong>¿Qué es?:</strong> Todos los routers vienen de fábrica con un usuario y clave idénticos para todo el mundo (ejemplo: usuario <code>admin</code>, clave <code>admin</code> o <code>1234</code>).
      </p>
      <p className="texto-pasos mt-2">
        <strong>El Peligro:</strong> Un vecino o atacante conectado al Wi-Fi puede tomar el control total del router y redirigir el tráfico bancario a páginas falsas.
      </p>
    </div>

    {/* Paso a paso para asegurar el Router */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Paso a Paso de Configuración</span>
      <h3 className="titulo-tarjeta">Cambiar Clave de Administración y Red de Invitados</h3>
      <p className="texto-pasos">
        <strong>1. Ingrese al Router:</strong> Abra un navegador e introduzca la IP <code>192.168.1.1</code> o <code>192.168.0.1</code>.
      </p>
      <p className="texto-pasos mt-2">
        <strong>2. Cambie la Clave Admin:</strong> Busque la opción <em>System Tools / Administration</em> y cambie la contraseña predeterminada por una segura.
      </p>
      <p className="texto-pasos mt-2">
        <strong>3. Active la Red de Invitados (Guest Network):</strong> Cree una red separada para las visitas o amigos de sus hijos, impidiendo que accedan a los archivos e impresoras de la casa.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como entrar a la configuracion del router y cambiar la contraseña admin"</code>
      </div>
    </div>
  </div>
</section>


<section className="tarjeta-pro seccion-espaciada">
  <h2 className="titulo-seccion flex-centro">
    <HardDrive size={28} /> Higiene Digital y Copias de Seguridad (Backups)
  </h2>
  <p className="texto-descriptivo">
    El mantenimiento preventivo evita la pérdida irreparable de fotos familiares y documentos importantes ante un ataque o robo del teléfono.
  </p>

  <div className="cuadricula-2-columnas">
    {/* Copias de Seguridad */}
    <div className="tarjeta-paso">
      <span className="etiqueta-verde">Prevención de Pérdida</span>
      <h3 className="titulo-tarjeta flex-centro">
        <RefreshCw size={18} /> Copias de Seguridad Cifradas (Backups)
      </h3>
      <p className="texto-pasos">
        <strong>¿Qué es?:</strong> Un respaldo automático que guarda sus contactos, fotos y chats en la nube (Google Drive o iCloud).
      </p>
      <p className="texto-pasos mt-2">
        <strong>¿Cómo activarlo en WhatsApp?:</strong> Ajustes &gt; Chats &gt; Copia de seguridad &gt; Guardar en Google Drive / iCloud &gt; Frecuencia: <em>Diaria o Semanal</em>. Active la opción <em>"Copia de seguridad cifrada de extremo a extremo"</em>.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Como hacer copia de seguridad cifrada de WhatsApp en Android y iPhone"</code>
      </div>
    </div>

    {/* Actualizaciones y Limpieza de APKs */}
    <div className="tarjeta-paso">
      <span className="etiqueta-rosa">Mantenimiento de Software</span>
      <h3 className="titulo-tarjeta flex-centro">
        <AlertOctagon size={18} /> Parches de Seguridad y Archivos APK
      </h3>
      <p className="texto-pasos">
        <strong>Actualizaciones:</strong> Mantenga el sistema operativo actualizado. Las actualizaciones no solo traen diseño, **corrigen los agujeros de seguridad** por donde entran los hackers.
      </p>
      <p className="texto-pasos mt-2">
        <strong>Peligro de APKs externas:</strong> En Android, jamás active la opción <em>"Instalar aplicaciones de fuentes desconocidas"</em> para descargar juegos hackeados o aplicaciones piratas. Son el vehículo principal de virus informáticos.
      </p>
      <div className="caja-video-tutorial mt-2">
        <PlayCircle size={16} /> <strong>Busque en YouTube:</strong> <code>"Por que es peligroso instalar archivos APK desconocidos en celular"</code>
      </div>
    </div>
  </div>
</section>
    </main>
  );
};

export default GuiaPadres;