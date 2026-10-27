import React from 'react';
import {
  ShieldAlert, ShieldCheck, Smartphone, KeyRound, ShoppingBag, Mail,
  AlertTriangle, Siren, Lock, Users, Globe, PhoneCall,
  CheckCircle2, BookOpen, ArrowRight, ArrowDown, Link as LinkIcon,
  MessageSquareWarning, MessageSquare, Send, Shield, FileText,
  Gamepad2, Cpu
} from 'lucide-react';
import HeaderProyecto from '../../components/comunes/HeaderProyecto/HeaderProyecto';
import imgHeroCiber from '../../assets/photo_2_2026-10-21_23-11-48.jpg';
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
      <HeaderProyecto
        categoria="Manual Integral de Ciberseguridad y Protección Familiar"
        titulo="ESCUDO FAMILIAR"
        tituloResaltado="DIGITAL"
        descripcion="Orientaciones, glosario de términos y protocolos prácticos de protección en el hogar para padres, madres y representantes del Complejo Educativo Antonio Lemus Pérez."
        imagenFondo={imgHeroCiber}
        enlacesSubNav={enlacesSubNav}
        acciones={[
          { label: 'Explorar Diccionario Digital', href: '#diccionario-digital', icono: <ArrowDown size={18} /> },
          { label: 'Ver Guía para Docentes', ruta: '/proyectos/ciberseguridad/guias/docentes', icono: <ArrowRight size={20} /> },
        ]}
      />

      {/* 1. DICCIONARIO DIGITAL */}
      <section id="diccionario-digital" className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <BookOpen size={28} /> Diccionario Digital para Padres
        </h2>
        <p className="texto-descriptivo">
          La mayoría de los ataques no ocurren por "hackeos mágicos", sino manipulando a las personas. Conocer los términos clave es el primer paso para proteger su hogar.
        </p>

        <div className="cuadricula-2-columnas">
          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Ingeniería Social</span>
            <h3 className="titulo-tarjeta flex-centro"><AlertTriangle size={18} /> Phishing, Smishing y Vishing</h3>
            <p className="texto-pasos">
              <strong>¿Qué es?:</strong> Métodos de engaño para robar sus claves o dinero haciéndose pasar por instituciones de confianza.
            </p>
            <p className="texto-pasos mt-2">
              • <strong>Phishing (correo):</strong> E-mail idéntico al de su banco pidiendo "actualizar datos en 24h". El enlace lleva a una página falsa.
              <br />• <strong>Smishing (SMS):</strong> Mensaje de "paquete retenido en MRW, pague el flete aquí". Al meter la tarjeta, le roban el saldo.
              <br />• <strong>Vishing (llamada):</strong> Falso soporte técnico pide el "código de activación" que en realidad instala su WhatsApp en otro teléfono.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Peligros para Menores</span>
            <h3 className="titulo-tarjeta flex-centro"><ShieldAlert size={18} /> Grooming y Sextorsión</h3>
            <p className="texto-pasos">
              <strong>¿Qué es?:</strong> Estrategias de adultos para engañar a niños y adolescentes en internet.
            </p>
            <p className="texto-pasos mt-2">
              • <strong>Catfishing:</strong> El acosador crea un perfil falso con fotos de otro joven para ganar confianza.
              <br />• <strong>Grooming:</strong> Simula ser "el mejor amigo" del niño, le regala cosas dentro de juegos y se gana su confianza total.
              <br />• <strong>Sextorsión:</strong> Pide una foto privada y luego amenaza con enviarla a los padres y compañeros si no envía más o paga dinero.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Software Infectado</span>
            <h3 className="titulo-tarjeta flex-centro"><AlertTriangle size={18} /> Malware, Spyware y Ransomware</h3>
            <p className="texto-pasos">
              <strong>¿Qué es?:</strong> Programas maliciosos que se instalan sin permiso al descargar juegos piratas o hacer clic en anuncios.
            </p>
            <p className="texto-pasos mt-2">
              • <strong>Spyware:</strong> Enciende micrófono y cámara en silencio y lee sus chats.
              <br />• <strong>Keylogger:</strong> Graba cada tecla que escribe, robando usuarios y contraseñas bancarias.
              <br />• <strong>Ransomware:</strong> Bloquea bajo candado todos sus archivos y exige un pago en Bitcoin para liberarlos. Pagar nunca garantiza recuperarlos.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Defensas Básicas</span>
            <h3 className="titulo-tarjeta flex-centro"><ShieldCheck size={18} /> 2FA y Filtraciones de Datos</h3>
            <p className="texto-pasos">
              <strong>2FA (Doble Factor):</strong> Candado adicional con código dinámico que cambia cada 30 segundos. Si un ladrón roba su contraseña, no podrá entrar sin el código de su celular.
            </p>
            <p className="texto-pasos mt-2">
              <strong>Filtraciones (Data Leaks):</strong> Cuando hackean bases de datos de sitios y publican millones de correos y claves. Por eso nunca repita la misma contraseña en distintos sitios.
            </p>
          </div>
        </div>
      </section>

      {/* 2. REGLAS DE ORO */}
      <section className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <ShieldAlert size={28} /> Reglas de Oro: Protección Directa para Padres
        </h2>
        <p className="texto-descriptivo">
          Usted es el pilar tecnológico del hogar. Si sus cuentas principales son comprometidas, los atacantes usarán su identidad para estafar a sus contactos.
        </p>

        <div className="cuadricula-2-columnas">
          <div className="tarjeta-aviso-premium alerta-ambar">
            <h4><Smartphone size={20} /> 1. El Código SMS/OTP es Sagrado</h4>
            <p>
              Si alguien le pide el código que le llegó por SMS, está pidiendo la llave para apoderarse de su WhatsApp o banca en línea. <strong>Peligro adicional (SIM Swapping):</strong> estafadores piden un duplicado de su chip en la operadora y reciben sus códigos SMS. Por eso es vital usar apps autenticadoras en lugar de SMS.
            </p>
          </div>

          <div className="tarjeta-aviso-premium alerta-azul">
            <h4><KeyRound size={20} /> 2. Nunca Repita Contraseñas</h4>
            <p>
              Si hackean la página de compras donde usó <code>Carlos2024*</code>, probarán esa misma clave en el banco. Use frases largas: <code>El-Gato-Azul-Come-Pescado-2026!</code> es fácil de memorizar pero imposible de adivinar para un robot.
            </p>
          </div>

          <div className="tarjeta-aviso-premium alerta-esmeralda">
            <h4><ShoppingBag size={20} /> 3. Verifique Pagos Reales en Marketplace</h4>
            <p>
              No confíe en capturas de pantalla de transferencias o Pago Móvil: los estafadores las editan en Photoshop. Abra la app del banco en su propio teléfono y confirme que el dinero <strong>ya esté acreditado</strong> antes de entregar el producto.
            </p>
          </div>

          <div className="tarjeta-aviso-premium alerta-naranja">
            <h4><LinkIcon size={20} /> 4. Aprenda a Leer Enlaces</h4>
            <p>
              Los estafadores usan dominios casi idénticos: <code>bancodevenezuela.atencion-cliente-pagos.xyz</code> o reemplazan letras. Guarde las páginas oficiales en los <strong>marcadores de su navegador</strong>. Nunca busque "Banco X" en Google para hacer transferencias.
            </p>
          </div>

          <div className="tarjeta-aviso-premium alerta-azul">
            <h4><Mail size={20} /> 5. Tenga un Correo "Público" y un Correo "Madre"</h4>
            <p>
              El correo "madre" es la llave de su banco, redes y trámites. Úselo solo para lo importante y <strong>no lo registre en juegos gratis ni encuestas</strong>. Tenga un segundo correo público para registros en tiendas y juegos de los niños.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ENGAÑOS FRECUENTES */}
      <section className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <MessageSquareWarning size={28} /> Engaños Frecuentes: ¿Cómo Atacan y Cómo Evitarlo?
        </h2>
        <p className="texto-descriptivo">
          Los cibercriminales manipulan emociones como la urgencia, el miedo y la curiosidad.
        </p>

        <div className="cuadricula-2-columnas">
          <div className="tarjeta-alerta-critica">
            <span className="etiqueta-critica">WhatsApp</span>
            <h3 className="titulo-tarjeta flex-centro"><PhoneCall size={20} /> El Engaño del Buzón de Voz</h3>
            <p className="texto-pasos">
              <strong>El Método:</strong> El estafador intenta registrar su WhatsApp a las 3:00 AM. Como usted duerme, la llamada de verificación salta al buzón de voz. El estafador escucha el código y roba su cuenta.
            </p>
            <p className="texto-pasos mt-2">
              <strong>La Solución:</strong> Active la verificación en 2 pasos con PIN de 6 dígitos en WhatsApp y pida a su operadora desactivar el buzón de voz.
            </p>
          </div>

          <div className="tarjeta-alerta-critica">
            <span className="etiqueta-critica">Suplantación Familiar</span>
            <h3 className="titulo-tarjeta flex-centro"><Users size={20} /> El "Hola Mamá / Hola Papá"</h3>
            <p className="texto-pasos">
              <strong>El Método:</strong> Le escriben de un número desconocido: <em>"Mamá, se me dañó el teléfono, guarda este número"</em>. Horas después piden una transferencia urgente por un accidente o detención.
            </p>
            <p className="texto-pasos mt-2">
              <strong>La Solución:</strong> Cree una <strong>"Palabra Clave Familiar"</strong> secreta y exíjala por nota de voz, o llame al número habitual de su hijo.
            </p>
          </div>

          <div className="tarjeta-alerta-critica">
            <span className="etiqueta-critica">Inteligencia Artificial</span>
            <h3 className="titulo-tarjeta flex-centro"><Cpu size={20} /> Voz Clonada por IA (Deepfake)</h3>
            <p className="texto-pasos">
              <strong>El Método:</strong> Con solo 3 segundos de un video público, la IA clona la voz de un familiar. Llaman simulando un accidente para exigir dinero en minutos.
            </p>
            <p className="texto-pasos mt-2">
              <strong>La Solución:</strong> Acuerde en casa una <strong>palabra secreta</strong> o pregunta que solo la familia conozca. Si no la saben o dudan, es una estafa.
            </p>
          </div>

          <div className="tarjeta-alerta-critica">
            <span className="etiqueta-critica">Juegos en Línea</span>
            <h3 className="titulo-tarjeta flex-centro"><Gamepad2 size={20} /> "Robux / V-Bucks Gratis"</h3>
            <p className="texto-pasos">
              <strong>El Método:</strong> Páginas que prometen monedas gratis a cambio del usuario y contraseña del juego. Secuestran la cuenta o instalan virus al hacer clic.
            </p>
            <p className="texto-pasos mt-2">
              <strong>La Solución:</strong> En ningún juego existen las "monedas gratis". Toda página que pida la contraseña del juego para regalar objetos es 100% una estafa.
            </p>
          </div>
        </div>
      </section>

      {/* 4. BLINDAJE DE CUENTAS */}
      <section className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <Lock size={28} /> Blindaje de Cuentas Principales
        </h2>
        <p className="texto-descriptivo">
          Configuración mínima recomendada en cada aplicación que use la familia:
        </p>

        <div className="cuadricula-2-columnas">
          <div className="tarjeta-paso">
            <span className="etiqueta-verde">WhatsApp</span>
            <h3 className="titulo-tarjeta flex-centro"><MessageSquare size={18} /> Ajustes Esenciales</h3>
            <p className="texto-pasos mt-2">
              • Ajustes → Cuenta → <strong>Verificación en dos pasos</strong> (activar PIN de 6 dígitos).<br />
              • Ajustes → Privacidad → Llamadas → <strong>Silenciar llamadas de desconocidos</strong>.<br />
              • Ajustes → Privacidad → Avanzada → <strong>Proteger dirección IP</strong> en llamadas.<br />
              • Ajustes → Chats → Copia de seguridad → <strong>Copia cifrada de extremo a extremo</strong>.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Telegram</span>
            <h3 className="titulo-tarjeta flex-centro"><Send size={18} /> Ajustes Esenciales</h3>
            <p className="texto-pasos mt-2">
              • Ajustes → Privacidad → <strong>Número de teléfono</strong> → "Nadie".<br />
              • Ajustes → Privacidad → <strong>Grupos y canales</strong> → "Mis contactos".<br />
              • Ajustes → Privacidad → <strong>Verificación en dos pasos</strong> (contraseña adicional).<br />
              • Ajustes → Privacidad → <strong>Código de bloqueo</strong> (PIN en la app).
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Facebook / Instagram</span>
            <h3 className="titulo-tarjeta flex-centro"><Users size={18} /> Centro de Cuentas Meta</h3>
            <p className="texto-pasos mt-2">
              • Centro de Cuentas → Contraseña y seguridad → <strong>Autenticación en dos pasos</strong> (por App, no SMS).<br />
              • Centro de Cuentas → <strong>Alertas de inicio de sesión</strong> (activar todas).<br />
              • Configuración → Privacidad → <strong>Cuenta privada</strong> (especialmente en menores).<br />
              • Desactivar la opción de que los buscadores enlacen al perfil.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Google / Apple ID</span>
            <h3 className="titulo-tarjeta flex-centro"><KeyRound size={18} /> Cuenta Maestra del Teléfono</h3>
            <p className="texto-pasos mt-2">
              • Configurar <strong>correo y teléfono de recuperación</strong> actualizados.<br />
              • Revisar apps con acceso: Cuenta Google → Seguridad → <strong>Conexiones con apps de terceros</strong> → eliminar las que no se usen.<br />
              • Activar <strong>2FA con aplicación autenticadora</strong> (no SMS).<br />
              • En iPhone: Ajustes → Apple ID → Contraseña y seguridad → revisar apps conectadas.
            </p>
          </div>
        </div>
      </section>

      {/* 5. HERRAMIENTAS RECOMENDADAS */}
      <section className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <Shield size={28} /> Herramientas Recomendadas y Configuración
        </h2>
        <p className="texto-descriptivo">
          Aplicaciones gratuitas y probadas para proteger los dispositivos de la familia:
        </p>

        <div className="cuadricula-2-columnas">
          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Gestor de Contraseñas</span>
            <h3 className="titulo-tarjeta flex-centro"><Lock size={18} /> Bitwarden</h3>
            <p className="texto-pasos">
              <strong>¿Para qué sirve?:</strong> Caja fuerte digital que guarda y crea contraseñas seguras. Solo debe recordar una clave maestra.
            </p>
            <p className="texto-pasos mt-2">
              <strong>¿Cómo activarlo?:</strong> Descargue desde Play Store o <code>bitwarden.com</code>. Cree la cuenta, configure una contraseña maestra larga y active el desbloqueo por huella.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Control Parental</span>
            <h3 className="titulo-tarjeta flex-centro"><Users size={18} /> Google Family Link</h3>
            <p className="texto-pasos">
              <strong>¿Para qué sirve?:</strong> Límites de tiempo de pantalla, bloqueo de apps no aptas por edad y ubicación GPS del menor.
            </p>
            <p className="texto-pasos mt-2">
              <strong>¿Cómo activarlo?:</strong> Instale en el teléfono del tutor, elija "Tutor", cree o vincule la cuenta del hijo y enlace ambos dispositivos.
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-verde">Filtro de Contenido</span>
            <h3 className="titulo-tarjeta flex-centro"><Globe size={18} /> Cloudflare Family DNS (1.1.1.3)</h3>
            <p className="texto-pasos">
              <strong>¿Para qué sirve?:</strong> Bloquea contenido adulto y virus en todo el teléfono o red de la casa.
            </p>
            <p className="texto-pasos mt-2">
              <strong>¿Cómo activarlo en Android?:</strong> Ajustes → Red e Internet → DNS Privado → <code>family.cloudflare-dns.com</code>
            </p>
          </div>

          <div className="tarjeta-paso">
            <span className="etiqueta-rosa">Autenticador 2FA</span>
            <h3 className="titulo-tarjeta flex-centro"><Smartphone size={18} /> Aegis / Google Authenticator</h3>
            <p className="texto-pasos">
              <strong>¿Para qué sirve?:</strong> Genera códigos de 6 dígitos que cambian cada 30 segundos, reemplazando los SMS vulnerables.
            </p>
            <p className="texto-pasos mt-2">
              <strong>¿Cómo activarlo?:</strong> En cada cuenta (Facebook, Google, banco), elija "Verificación por App", escanee el QR con Aegis y listo.
            </p>
          </div>
        </div>
      </section>

      {/* 6. PRIMEROS AUXILIOS Y DENUNCIA */}
      <section className="tarjeta-pro border-rojo seccion-espaciada">
        <h2 className="titulo-seccion-roja flex-centro">
          <Siren size={28} /> Primeros Auxilios Digitales y Ruta de Denuncia
        </h2>
        <p className="texto-informativo-rojo">
          Si su hijo o usted están sufriendo ciberacoso, extorsión o secuestro de cuenta, ejecute estas acciones inmediatas:
        </p>

        <div className="lista-protocolo">
          <div className="paso-protocolo">
            <span className="numero-critico">1</span>
            <div>
              <strong>Contención y No Pago:</strong> No ceda al chantaje. Pagar no detiene al extorsionador, solo confirma que usted pagará más.
            </div>
          </div>
          <div className="paso-protocolo">
            <span className="numero-critico">2</span>
            <div>
              <strong>Preservar Evidencias:</strong> No borre chats ni fotos por vergüenza. Tome capturas donde se vean números, usuarios, fecha y hora.
            </div>
          </div>
          <div className="paso-protocolo">
            <span className="numero-critico">3</span>
            <div>
              <strong>Aislamiento:</strong> Desconecte el teléfono del Wi-Fi si sospecha virus. Desde otra computadora, cierre <strong>todas las sesiones activas</strong> de sus cuentas.
            </div>
          </div>
          <div className="paso-protocolo">
            <span className="numero-critico">4</span>
            <div>
              <strong>Apoyo Emocional Incondicional:</strong> Apoye al menor. No le grite ni le quite el teléfono como castigo: un niño castigado nunca volverá a pedir ayuda.
            </div>
          </div>
          <div className="paso-protocolo">
            <span className="numero-critico">5</span>
            <div>
              <strong>Denuncia Formal:</strong> Acuda a la División de Delitos Informáticos del <strong>CICPC</strong> o cuerpo policial de su región. Lleve las pruebas en pendrive e impresas. El grooming y la difusión no consentida violan la <strong>LOPNNA</strong> y la <strong>Ley Especial contra Delitos Informáticos</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* 7. ACUERDO DIGITAL FAMILIAR */}
      <section className="tarjeta-pro seccion-espaciada">
        <h2 className="titulo-seccion flex-centro">
          <FileText size={28} /> Modelo de Acuerdo Digital Familiar
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
            <p><strong>Cero castigos por pedir ayuda:</strong> Si el menor ve algo extraño o comete un error en internet, puede acudir a los padres sin miedo.</p>
          </div>
          <div className="paso-item">
            <span className="icono-numero"><CheckCircle2 size={14} /></span>
            <p><strong>Cero desconocidos en listas de amigos:</strong> Solo se aceptan solicitudes de personas que el niño conozca en la vida real.</p>
          </div>
          <div className="paso-item">
            <span className="icono-numero"><CheckCircle2 size={14} /></span>
            <p><strong>Palabra clave familiar:</strong> Acuerden una palabra secreta para verificar identidad ante llamadas o mensajes sospechosos.</p>
          </div>
          <div className="paso-item">
            <span className="icono-numero"><CheckCircle2 size={14} /></span>
            <p><strong>Reglas claras para chats de juegos:</strong> Desactivar chats con desconocidos en Roblox, Free Fire y Discord, y usar "PIN de cuenta" para que el menor no lo reactive.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GuiaPadres;