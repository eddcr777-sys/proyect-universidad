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
      "Adjuntos trampa: la técnica de la doble extensión (.pdf.exe)",
      "Smishing (SMS engañosos) y Vishing (llamadas fraudulentas)",
      "Ingeniería Social: la psicología detrás del engaño digital"
    ],
    teoriaAdicional: "El phishing es una técnica de ingeniería social que utiliza mensajes que parecen legítimos para manipular a la víctima y obtener información confidencial o inducirla a descargar archivos maliciosos. Los atacantes suelen imitar marcas conocidas o instituciones educativas, creando urgencia para que abras archivos adjuntos que en realidad son ejecutables camuflados. La defensa más eficaz es verificar siempre la extensión real del archivo y desconfiar de peticiones no solicitadas.",
    conceptosClave: [
      { titulo: "Suplantación de identidad", descripcion: "El atacante finge ser una entidad confiable para robar datos o infectar equipos." },
      { titulo: "Doble extensión", descripcion: "Técnica que añade extensiones falsas (ej. tarea.pdf.exe) para ocultar un ejecutable." },
      { titulo: "Ingeniería social", descripcion: "Manipulación psicológica para que reveles información o abras un archivo." }
    ],
    ejemplosReales: [
      "Correos con un archivo adjunto 'factura_urgente.pdf.exe' que infecta la computadora.",
      "Mensajes de WhatsApp que prometen premios escolares mediante enlaces de descarga.",
      "Llamadas telefónicas que se hacen pasar por soporte técnico y piden acceso remoto."
    ]
  },
  'proteccion-cuentas': {
    queAprenderas: "Dominarás la creación de contraseñas robustas, el uso de gestores de claves, la biometría y la activación del doble factor de autenticación (2FA).",
    porQueEsImportante: "Tus cuentas de correo y redes sociales son la puerta de entrada a tu vida privada. Una sola clave débil expone toda tu información personal.",
    subtemasClave: [
      "Frases clave robustas y gestores de contraseñas",
      "Verificación en Dos Pasos (2FA) como protección contra malware robacuentas",
      "Riesgos de aplicaciones APK modificadas y permisos excesivos",
      "Protocolos de recuperación cuando se filtra una contraseña"
    ],
    teoriaAdicional: "La autenticación es el proceso de verificar que eres quien dices ser. Además de contraseñas fuertes, el mayor riesgo actual proviene de malware 'infostealer' descargado por error que extrae claves del navegador. Por ello, activar el doble factor de autenticación (2FA) es indispensable: incluso si un archivo malicioso roba tu contraseña, el atacante no podrá ingresar sin el código secundario en tu teléfono.",
    conceptosClave: [
      { titulo: "Contraseña robusta", descripcion: "Frase larga, única e impredecible." },
      { titulo: "2FA", descripcion: "Segundo paso de verificación indispensable además de la contraseña." },
      { titulo: "Infostealer", descripcion: "Malware especializado en extraer contraseñas y sesiones guardadas." }
    ],
    ejemplosReales: [
      "Infección por descargar un activador que extrajo todas las claves guardadas en Chrome.",
      "Descarga de APK falsa de WhatsApp que secuestró la cuenta y reenvió spam a contactos.",
      "Uso de Google Authenticator para proteger cuentas de correo institucional."
    ]
  },
  'redes-sociales': {
    queAprenderas: "Configurarás adecuadamente la privacidad en plataformas sociales, gestionarás tu rastro en internet (huella digital) y aprenderás a prevenir el ciberacoso y Grooming.",
    porQueEsImportante: "Lo que publicas en redes sociales permanece en internet para siempre y puede influir en tu futuro académico, laboral y personal.",
    subtemasClave: [
      "Configuración avanzada de privacidad en Instagram, TikTok y WhatsApp",
      "Diferenciar archivos multimedia genuinos de ejecutables y scripts en chats",
      "Protección contra el Ciberbullying, Grooming y filtrado de ubicación",
      "Prevención ante extensiones de navegador fraudulentas y cadenas virales"
    ],
    teoriaAdicional: "Las redes sociales son el principal medio de comunicación entre jóvenes, pero también un canal habitual para propagar archivos maliciosos mediante engaños como 'mira esta foto tuya' o falsos paquetes de stickers. Aprender a verificar el formato de lo que recibes y no abrir archivos comprimidos enviados por desconocidos protege tu privacidad y tus dispositivos.",
    conceptosClave: [
      { titulo: "Huella digital", descripcion: "Rastro de actividad e información que dejas en línea." },
      { titulo: "Formato multimedia", descripcion: "Archivos de datos como imágenes (.png, .jpg) o videos (.mp4) que no contienen código ejecutable." },
      { titulo: "Ciberacoso", descripcion: "Uso de medios digitales para hostigar o humillar." }
    ],
    ejemplosReales: [
      "Envío masivo en Telegram de archivos comprimidos supuestamente con fotos que eran virus.",
      "Publicación de fotos con uniforme escolar que revelan ubicación y horarios.",
      "Instalación de extensiones falsas en el navegador que publicaban anuncios sin permiso."
    ]
  },
  'software-pirata': {
    queAprenderas: "Comprenderás los peligros ocultos tras los programas modificados (cracks), virus troyanos y aprenderás a identificar formatos seguros vs ejecutables peligrosos.",
    porQueEsImportante: "El software pirata casi siempre contiene programas maliciosos que pueden secuestrar tus archivos o dañar tus dispositivos electrónicos.",
    subtemasClave: [
      "Diferencias entre formatos de datos (.pdf, .docx) y ejecutables (.exe, .bat, .iso)",
      "Cómo activar la visualización de extensiones ocultas en Windows",
      "Análisis de archivos sospechosos en VirusTotal antes de abrirlos",
      "Alternativas seguras: Software Libre y licencias estudiantiles oficiales"
    ],
    teoriaAdicional: "El software pirata y las descargas de sitios dudosos son la principal vía de infección en computadoras. Los atacantes aprovechan que Windows oculta las extensiones por defecto para disfrazar archivos ejecutables con iconos de documentos inocentes. Al aprender a leer extensiones y verificar archivos con herramientas como VirusTotal, evitas infectar tu equipo con troyanos y ransomware.",
    conceptosClave: [
      { titulo: "Extensión de archivo", descripcion: "Sufijo al final del nombre (.pdf, .exe) que indica el formato y comportamiento real del archivo." },
      { titulo: "Archivo ejecutable", descripcion: "Archivo de programa (.exe, .bat, .msi) que ejecuta instrucciones directas en la computadora." },
      { titulo: "VirusTotal", descripcion: "Herramienta gratuita en la nube que escanea archivos con más de 70 motores antivirus." }
    ],
    ejemplosReales: [
      "Descarga de una supuesta tarea 'trabajo.pdf.exe' con icono falso de Adobe Reader.",
      "Análisis en VirusTotal de un 'keygen' que reveló contener un troyano robacuentas.",
      "Uso de LibreOffice y GIMP como alternativas legales y seguras a programas comerciales."
    ]
  },
  'videojuegos': {
    queAprenderas: "Aprenderás a proteger tus perfiles de juego, evitar fraudes con monedas virtuales (Robux, Pavos), prevenir trampas (cheats) infectadas y jugar con privacidad.",
    porQueEsImportante: "Las comunidades de videojuegos en línea son blanco frecuente de estafadores que buscan acceder a tarjetas de pago o cuentas valiosas de jugadores.",
    subtemasClave: [
      "Seguridad en Discord, Steam y plataformas de videojuegos",
      "Peligros de los falsos hacks, cheats y generadores de monedas (son troyanos)",
      "Descarga segura de Mods en plataformas y repositorios oficiales (CurseForge, Steam Workshop)",
      "Doxing y protección de la privacidad en partidas online"
    ],
    teoriaAdicional: "En los videojuegos en línea, los atacantes crean falsos programas de trucos (aimbots, hacks) o generadores de recursos que en realidad son ejecutables maliciosos programados para robar cuentas de Steam o Discord. Para protegerte, nunca instales mods de enlaces en chats y desconfía de cualquier instalador que te pida desactivar el antivirus.",
    conceptosClave: [
      { titulo: "Mod seguro", descripcion: "Modificación de juego descargada desde repositorios oficiales verificados." },
      { titulo: "Falso Hack / Cheat", descripcion: "Programa ejecutable prometiendo ventajas que en realidad infecta el equipo." },
      { titulo: "Keylogger", descripcion: "Malware que registra todo lo que escribes para robar tus claves de juego." }
    ],
    ejemplosReales: [
      "Falsos generadores de Robux que descargan ejecutables espías en la computadora.",
      "Descarga de supuestos trucos para Free Fire que contenían software para robar sesiones de Discord.",
      "Instalación segura de mods para Minecraft a través de plataformas oficiales como CurseForge."
    ]
  },
  'auditorias': {
    queAprenderas: "Ejecutarás diagnósticos periódicos de tus dispositivos, tu carpeta de descargas, extensiones del navegador y hábitos de higiene digital.",
    porQueEsImportante: "Al igual que la salud física, tu entorno digital requiere revisiones periódicas para detectar archivos sospechosos antes de que causen daños.",
    subtemasClave: [
      "Auditoría y limpieza periódica de la carpeta de descargas",
      "Configuración de confirmación de descargas y extensiones visibles",
      "Riesgos y precauciones en redes Wi-Fi públicas abiertas",
      "Protocolo de reacción ante la ejecución accidental de un archivo sospechoso"
    ],
    teoriaAdicional: "La higiene digital incluye revisar con regularidad los archivos descargados que quedan olvidados en el almacenamiento. Muchos usuarios descargan instaladores o archivos sospechosos sin verificar y los dejan allí. Auditar periódicamente la carpeta de descargas y configurar el navegador para que solicite confirmación antes de guardar cualquier archivo reduce drásticamente las infecciones accidentales.",
    conceptosClave: [
      { titulo: "Auditoría de descargas", descripcion: "Revisión periódica de archivos descargados para eliminar ejecutables desconocidos." },
      { titulo: "Protocolo de emergencia", descripcion: "Pasos inmediatos (desconectar red, analizar equipo) si abres un archivo malicioso." },
      { titulo: "Confirmación de descarga", descripcion: "Ajuste del navegador que evita descargas automáticas sin tu permiso expreso." }
    ],
    ejemplosReales: [
      "Detección y eliminación de 15 archivos ejecutables viejos acumulados en la carpeta de descargas.",
      "Configuración del navegador para advertir siempre antes de descargar archivos potencialmente dañinos.",
      "Aplicación de una lista de chequeo de seguridad digital en los equipos de la sala de computación."
    ]
  }
};

export default DETALLES_CONTEXTUALES;