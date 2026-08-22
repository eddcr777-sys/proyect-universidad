// Explicaciones detalladas y contextuales por cada tema
const DETALLES_CONTEXTUALES: Record<string, {
  queAprenderas: string;
  porQueEsImportante: string;
  subtemasClave: string[];
  teoriaAdicional: string;
  conceptosClave: { titulo: string; descripcion: string }[];
  ejemplosReales: string[];
}> = {
  'phishing': {
    queAprenderas: "Aprenderás a detectar correos, mensajes de WhatsApp y páginas web fraudulentas que buscan engañarte para robar tus contraseñas y datos personales o institucionales.",
    porQueEsImportante: "El Phishing es la causa del 90% de los incidentes de ciberseguridad a nivel mundial. Saber identificar engaños protege tu dinero, identidad y reputación digital.",
    subtemasClave: [
      "Detección de enlaces sospechosos y dominios falsos (Spoofing)",
      "Smishing (SMS engañosos) y Vishing (llamadas fraudulentas)",
      "Ingeniería Social: la psicología detrás del engaño digital",
      "Leyes y reportes institucionales ante ciberestafas"
    ],
    teoriaAdicional: "El phishing es una técnica de ingeniería social que utiliza mensajes que parecen legítimos para manipular a la víctima y obtener información confidencial, como contraseñas o números de tarjeta. Los atacantes suelen imitar marcas conocidas (bancos, redes sociales, juegos) y crean una sensación de urgencia para que actúes sin pensar. También existen variantes como el spear phishing, que se dirige a una persona específica, y el whaling, que ataca a altos ejecutivos. La defensa más eficaz es la desconfianza sana y la verificación directa con el emisor real.",
    conceptosClave: [
      { titulo: "Suplantación de identidad", descripcion: "El atacante finge ser una entidad confiable para robar datos." },
      { titulo: "Ingeniería social", descripcion: "Manipulación psicológica para que reveles información." },
      { titulo: "URL maliciosa", descripcion: "Enlace que imita a un sitio legítimo pero roba credenciales." }
    ],
    ejemplosReales: [
      "Correos falsos de 'tu cuenta será bloqueada' que llevan a páginas clonadas de bancos.",
      "Mensajes de WhatsApp que prometen premios por el Día del Estudiante a cambio de un código.",
      "Llamadas telefónicas que se hacen pasar por soporte técnico y piden acceso remoto."
    ]
  },
  'proteccion-cuentas': {
    queAprenderas: "Dominarás la creación de contraseñas robustas, el uso de gestores de claves, la biometría y la activación del doble factor de autenticación (2FA).",
    porQueEsImportante: "Tus cuentas de correo y redes sociales son la puerta de entrada a tu vida privada. Una sola clave débil expone toda tu información personal.",
    subtemasClave: [
      "Frases clave robustas y gestores de contraseñas",
      "Verificación en Dos Pasos (2FA) con aplicaciones autenticadoras",
      "Tecnologías del futuro: Passkeys y Autenticación Biométrica",
      "Protocolos de recuperación cuando se filtra una contraseña"
    ],
    teoriaAdicional: "La autenticación es el proceso de verificar que eres quien dices ser. Más allá de la clásica contraseña, existen métodos como la biometría (huella, rostro), tokens de seguridad y llaves FIDO2. Se recomienda usar frases de contraseña largas y únicas, almacenadas en un gestor como Bitwarden. El doble factor de autenticación (2FA) añade una capa extra: incluso si un atacante obtiene tu contraseña, no podrá entrar sin el código temporal. Los métodos más seguros son las aplicaciones autenticadoras y las llaves físicas.",
    conceptosClave: [
      { titulo: "Contraseña robusta", descripcion: "Frase larga, única e impredecible." },
      { titulo: "2FA", descripcion: "Segundo paso de verificación además de la contraseña." },
      { titulo: "Gestor de contraseñas", descripcion: "Herramienta que almacena y genera claves seguras." }
    ],
    ejemplosReales: [
      "Filtración de LinkedIn en 2012 expuso millones de contraseñas débiles.",
      "Ataques de credential stuffing usando contraseñas reutilizadas en distintos servicios.",
      "Uso de Google Authenticator para proteger cuentas de correo institucional."
    ]
  },
  'redes-sociales': {
    queAprenderas: "Configurarás adecuadamente la privacidad en plataformas sociales, gestionarás tu rastro en internet (huella digital) y aprenderás a prevenir el ciberacoso y Grooming.",
    porQueEsImportante: "Lo que publicas en redes sociales permanece en internet para siempre y puede influir en tu futuro académico, laboral y personal.",
    subtemasClave: [
      "Configuración avanzada de privacidad en Instagram, TikTok y WhatsApp",
      "Protección contra el Ciberbullying, Grooming y filtrado de ubicación",
      "Combate a las noticias falsas (Fake News) y algoritmos de recolección",
      "Derecho al olvido y construcción de una reputación digital positiva"
    ],
    teoriaAdicional: "Las redes sociales recopilan enormes cantidades de datos: ubicación, contactos, intereses, hábitos de navegación. Esta información puede ser usada para publicidad dirigida, pero también para acoso, suplantación o discriminación. Es vital revisar la configuración de privacidad, limitar quién puede ver tus publicaciones, desactivar la geolocalización automática y aprobar etiquetas manualmente. Además, el ciberacoso es un delito en muchos países y puede denunciarse ante la plataforma y las autoridades.",
    conceptosClave: [
      { titulo: "Huella digital", descripcion: "Rastro de actividad e información que dejas en línea." },
      { titulo: "Privacidad por defecto", descripcion: "Configurar perfiles como privados y limitar el público." },
      { titulo: "Ciberacoso", descripcion: "Uso de medios digitales para hostigar o humillar." }
    ],
    ejemplosReales: [
      "Caso de suplantación en Instagram para pedir dinero a contactos.",
      "Publicación de fotos con uniforme escolar que revelan ubicación y horarios.",
      "Denuncias de grooming a través de juegos en línea con chat."
    ]
  },
  'software-pirata': {
    queAprenderas: "Comprenderás los peligros ocultos tras los programas modificados (cracks), virus troyanos, ransomware y software descargado de fuentes no oficiales.",
    porQueEsImportante: "El software pirata casi siempre contiene programas maliciosos que pueden secuestrar tus archivos o dañar tus dispositivos electrónicos.",
    subtemasClave: [
      "Diferencias entre descargas oficiales y sitios dudosos",
      "Ransomware: Prevención del secuestro de información y copias 3-2-1",
      "Cryptojacking: Uso no autorizado de tu computadora para minar",
      "Alternativas seguras: Software Libre y licencias estudiantiles"
    ],
    teoriaAdicional: "El software pirata es una de las principales vías de infección de malware. Los 'cracks' y 'keygens' a menudo incluyen troyanos, spyware o ransomware. Al instalar una versión ilegítima, el usuario pierde actualizaciones de seguridad y soporte técnico, quedando expuesto a vulnerabilidades conocidas. Además, puede estar sujeto a sanciones legales por violación de derechos de autor. La mejor defensa es usar software legal, ya sea propietario con licencia, freeware o de código abierto.",
    conceptosClave: [
      { titulo: "Ransomware", descripcion: "Malware que cifra archivos y pide rescate." },
      { titulo: "Troyano", descripcion: "Programa que se disfraza de legítimo y permite acceso remoto." },
      { titulo: "Software libre", descripcion: "Aplicaciones con licencia que permite usar, modificar y compartir." }
    ],
    ejemplosReales: [
      "El ataque WannaCry en 2017 afectó hospitales y empresas por no actualizar sistemas.",
      "Descargas de 'Photoshop gratis' que resultan ser mineros de criptomonedas.",
      "Uso de LibreOffice y GIMP como alternativas legales y gratuitas."
    ]
  },
  'videojuegos': {
    queAprenderas: "Aprenderás a proteger tus perfiles de juego, evitar fraudes con monedas virtuales (Robux, Pavos), prevenir trampas (cheats) infectadas y jugar con privacidad.",
    porQueEsImportante: "Las comunidades de videojuegos en línea son blanco frecuente de estafadores que buscan acceder a tarjetas de pago o cuentas valiosas de jugadores.",
    subtemasClave: [
      "Seguridad en Discord, Steam y plataformas de videojuegos",
      "Prevención de estafas de monedas virtuales y trucos infectados",
      "Doxing y protección de la dirección IP en partidas online",
      "Seguridad en transmisiones en vivo (Streaming) y juego ético"
    ],
    teoriaAdicional: "En los videojuegos en línea, tu cuenta puede tener valor monetario (skins, niveles, monedas). Los atacantes usan phishing, falsos sorteos, mods maliciosos y bots de Discord para robar credenciales o instalar malware. También el 'doxing' (revelar datos personales) es una amenaza real durante las partidas. Para protegerte, activa 2FA, no compres cuentas, evita enlaces acortados y utiliza VPN si juegas en redes públicas.",
    conceptosClave: [
      { titulo: "Robo de cuenta", descripcion: "Acceso no autorizado a tu perfil de juego." },
      { titulo: "Keylogger", descripcion: "Malware que registra todo lo que escribes." },
      { titulo: "Doxing", descripcion: "Publicación de información personal sin consentimiento." }
    ],
    ejemplosReales: [
      "Falsos generadores de Robux que roban cuentas de Roblox.",
      "Trampas para Free Fire que incluyen spyware.",
      "Denuncias de ciberacoso en partidas de League of Legends."
    ]
  },
  'auditorias': {
    queAprenderas: "Ejecutarás diagnósticos periódicos de tus dispositivos, redes Wi-Fi, cookies de seguimiento y hábitos digitales para mantener una higiene tecnológica óptima.",
    porQueEsImportante: "Al igual que la salud física, tu entorno digital requiere revisiones periódicas para detectar vulnerabilidades antes de que sean explotadas.",
    subtemasClave: [
      "Limpieza de archivos temporales, caché y sesiones abiertas",
      "Riesgos y precauciones en redes Wi-Fi públicas abiertas",
      "Listas de chequeo (Checklist) de ciberseguridad personal",
      "Navegación privada, bloqueo de cookies de rastreo y cortafuegos"
    ],
    teoriaAdicional: "La auditoría digital personal es un proceso sistemático de revisión de la seguridad y privacidad en tus dispositivos y cuentas. Incluye: actualizar software, revisar permisos de aplicaciones, analizar dispositivos conectados a la red, configurar cortafuegos y realizar copias de seguridad. Realizar estas auditorías con regularidad reduce significativamente la superficie de ataque y te mantiene un paso adelante de las amenazas.",
    conceptosClave: [
      { titulo: "Checklist de seguridad", descripcion: "Lista de verificación para auditar dispositivos y cuentas." },
      { titulo: "Firewall", descripcion: "Barrera que filtra el tráfico de red no autorizado." },
      { titulo: "Wi-Fi pública", descripcion: "Red abierta que puede ser interceptada por atacantes." }
    ],
    ejemplosReales: [
      "Revisión de dispositivos desconocidos en la red Wi-Fi hogareña.",
      "Limpieza de permisos excesivos en aplicaciones móviles.",
      "Activación del cortafuegos en Windows y Linux."
    ]
  }
};

export default DETALLES_CONTEXTUALES;