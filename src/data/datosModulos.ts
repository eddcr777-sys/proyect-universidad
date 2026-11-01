/**
 * ============================================================================
 * CATÁLOGO DE DATOS LOCAL ESTÁTICO DE MÓDULOS DE CIBERSEGURIDAD
 * Complejo Educativo Antonio Lemus Pérez (LB-LEMUS)
 * ============================================================================
 */

export type GradoEscolar = '1ro' | '2do' | '3ro' | '4to' | '5to';

export interface ContenidoGrado {
  /** Mensaje de bienvenida personalizado por Grado, Categoría y Módulo */
  mensajeBienvenida: string;
  /** Explicación breve adaptada pedagógicamente a la edad y nivel del grado */
  explicacionBreve: string;
  /** Objetivos pedagógicos del nivel */
  objetivos: string[];
  /** Temas o lecciones clave */
  temas: string[];
}

export interface ModuloInfo {
  id: string;
  titulo: string;
  categoria: string;
  nombreCategoria: string;
  icono: string;
  resumenGeneral: string;
  duracionEstimada: string;
  grados: Record<GradoEscolar, ContenidoGrado>;
}

export const DICCIONARIO_GRADOS: Record<GradoEscolar, string> = {
  '1ro': '1er Año (Nivel Inicial)',
  '2do': '2do Año (Nivel Básico)',
  '3ro': '3er Año (Nivel Intermedio)',
  '4to': '4to Año (Nivel Avanzado)',
  '5to': '5to Año (Nivel Experto)',
};

export const CATALAGO_MODULOS: Record<string, ModuloInfo> = {
  phishing: {
    id: 'phishing',
    titulo: 'Prevención de Phishing e Ingeniería Social',
    categoria: 'defensa-digital',
    nombreCategoria: 'Defensa Digital y Privacidad',
    icono: 'mark_email_unread',
    resumenGeneral: 'Aprende a identificar correos engañosos, mensajes falsos y sitios suplantados en internet.',
    duracionEstimada: '45 minutos',
    grados: {
      '1ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 1er Año a la categoría de Defensa Digital! En este módulo aprenderás a reconocer mensajes sospechosos y proteger tu información.',
        explicacionBreve: 'El Phishing es un truco que usan personas malintencionadas en internet enviando mensajes falsos para pedirte contraseñas o datos familiares. En 1er Año aprenderás a identificar las señales de alerta básicas.',
        objetivos: [
          'Reconocer qué es un mensaje sospechoso en correo o WhatsApp.',
          'Aprender a no hacer clic en enlaces desconocidos.',
          'Conocer la importancia de avisar a tus profesores o padres ante cualquier duda.',
        ],
        temas: [
          '¿Qué es el Phishing y cómo funciona?',
          'Señales de alerta en un mensaje falso',
          'Regla de oro: No compartas tus claves',
        ],
      },
      '2do': {
        mensajeBienvenida: '¡Bienvenido estudiante de 2do Año al módulo de Prevención de Phishing! Descubre cómo detectar sitios web suplantados y correos trampas.',
        explicacionBreve: 'En 2do Año profundizaremos en cómo los atacantes imitan páginas web de escuelas, juegos o redes sociales. Aprenderás a verificar las direcciones de enlace (URL) antes de ingresar datos.',
        objetivos: [
          'Diferenciar entre un sitio web legítimo y uno suplantado (Spoofing).',
          'Analizar el remitente verdadero de un correo electrónico.',
          'Práctica guiada para detectar intentos de suplantación.',
        ],
        temas: [
          'Páginas web clonadas: Cómo descubrirlas',
          'Inspección de la barra de direcciones (HTTPS y dominios)',
          'Casos reales de mensajes tramposos',
        ],
      },
      '3ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 3er Año a la categoría de Defensa Digital! Analiza las tácticas de Ingeniería Social y persuasión en internet.',
        explicacionBreve: 'La ingeniería social busca manipular tus emociones como la curiosidad, el miedo o la urgencia. En 3er Año entenderás la psicología detrás de los ciberataques.',
        objetivos: [
          'Identificar técnicas de urgencia o premios falsos en la red.',
          'Proteger los datos personales e institucionales del liceo.',
          'Aplicar protocolos de respuesta ante intentos de estafa.',
        ],
        temas: [
          'La psicología del engaño en la web',
          'Premios falsos, ofertas de trabajo engañosas y urgencias ficticias',
          'Reporte y bloqueo seguro de atacantes',
        ],
      },
      '4to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año! Aprende a detectar archivos adjuntos trampa, extensiones dobles y descargas engañosas.',
        explicacionBreve: 'En 4to Año aprenderás a identificar archivos peligrosos disfrazados de documentos escolares, tales como facturas falsas con doble extensión (.pdf.exe) o archivos comprimidos con virus.',
        objetivos: [
          'Detectar archivos adjuntos con doble extensión sospechosa (como tarea.pdf.exe).',
          'Identificar trampas en archivos comprimidos (.zip y .rar) que ocultan ejecutables.',
          'Reconocer enlaces de correo que intentan descargar archivos automáticamente.',
        ],
        temas: [
          'Archivos adjuntos maliciosos y la trampa de la doble extensión',
          'Peligros de archivos comprimidos (.zip/.rar) con scripts ocultos',
          'Protocolo de verificación de archivos antes de abrirlos',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año! Domina la verificación de documentos con macros y enlaces de descarga en la nube.',
        explicacionBreve: 'Como estudiante de 5to Año, aprenderás a neutralizar fraudes como documentos de Office con macros maliciosas y falsas páginas de Google Drive o Dropbox que bajan ejecutables.',
        objetivos: [
          'Reconocer el peligro de macros maliciosas en documentos (.docm y .xlsm).',
          'Identificar páginas clonadas de Google Drive o Dropbox que descargan ejecutables.',
          'Establecer protocolos de verificación con el remitente antes de abrir documentos dudosos.',
        ],
        temas: [
          'Documentos con macros: por qué nunca debes "Habilitar contenido"',
          'Falsos enlaces de almacenamiento en la nube (Drive/OneDrive trampas)',
          'Liderazgo liceísta: educar a la comunidad contra adjuntos maliciosos',
        ],
      },
    },
  },

  'proteccion-cuentas': {
    id: 'proteccion-cuentas',
    titulo: 'Gestión de Contraseñas y Autenticación 2FA',
    categoria: 'seguridad-cuentas',
    nombreCategoria: 'Protección de Cuentas y Accesos',
    icono: 'password',
    resumenGeneral: 'Descubre cómo crear contraseñas robustas y activar la verificación en dos pasos en todas tus cuentas.',
    duracionEstimada: '40 minutos',
    grados: {
      '1ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 1er Año al módulo de Protección de Cuentas! Aprende a crear claves secretas y fáciles de recordar para ti.',
        explicacionBreve: 'Una contraseña es la llave digital de tu casillero personal. En 1er Año aprenderás la importancia de no usar fechas de cumpleaños ni claves obvias como "123456".',
        objetivos: [
          'Entender por qué las claves sencillas son peligrosas.',
          'Aprender a combinar letras, números y símbolos.',
          'Mantener tus cuentas en privado.',
        ],
        temas: [
          'La importancia del secreto digital',
          'Cómo crear una frase clave segura',
          'Evitar guardar claves en computadoras públicas',
        ],
      },
      '2do': {
        mensajeBienvenida: '¡Bienvenido estudiante de 2do Año a Protección de Cuentas! Descubre el uso de gestores de contraseñas y claves de paso.',
        explicacionBreve: 'En 2do Año aprenderás la regla de tener una clave distinta para cada plataforma y cómo recordarlas sin riesgo de olvidarlas.',
        objetivos: [
          'Evitar la reutilización de claves en múltiples sitios.',
          'Conocer herramientas seguras para recordar contraseñas.',
          'Identificar inicios de sesión sospechosos.',
        ],
        temas: [
          'Peligro de repetir la misma contraseña',
          'Gestores de contraseñas seguros',
          'Alertas de inicio de sesión no reconocido',
        ],
      },
      '3ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 3er Año! Activa la Autenticación en Dos Pasos (2FA) como tu segundo escudo protector.',
        explicacionBreve: 'La autenticación en dos pasos agrega una segunda cerradura a tus cuentas: aunque alguien descubra tu contraseña, no podrá entrar sin tu código temporal.',
        objetivos: [
          'Configurar 2FA mediante aplicaciones autenticadoras.',
          'Comprender la diferencia entre SMS y códigos de aplicación.',
          'Resguardar los códigos de respaldo de emergencia.',
        ],
        temas: [
          '¿Qué es la verificación en dos pasos (2FA)?',
          'Configuración paso a paso en redes y correos',
          'Manejo responsable de códigos de recuperación',
        ],
      },
      '4to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año! Conoce cómo los ejecutables maliciosos (infostealers) pueden robar tus cuentas.',
        explicacionBreve: 'En 4to Año descubrirás cómo un simple archivo .exe o .bat descargado por error puede extraer todas las contraseñas guardadas en tu navegador en cuestión de segundos.',
        objetivos: [
          'Comprender el funcionamiento de los programas troyanos robacuentas (Infostealers).',
          'Evitar guardar contraseñas críticas en navegadores sin protección adicional.',
          'Activar la verificación en dos pasos (2FA) como escudo definitivo contra el robo de credenciales.',
        ],
        temas: [
          'Malware Infostealer: cómo los ejecutables extraen tus contraseñas',
          'Riesgos de autoguardar credenciales en el navegador',
          'El 2FA como barrera impenetrable ante el robo de datos',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año! Aprende a identificar aplicaciones y APKs modificadas que secuestran cuentas.',
        explicacionBreve: 'En 5to Año evaluarás los peligros de descargar instaladores no oficiales y archivos APK modificados para móviles (como supuestos WhatsApp Plus) que espían credenciales.',
        objetivos: [
          'Reconocer los riesgos de instalar archivos .apk de fuentes no verificadas en Android.',
          'Auditar los permisos concedidos a aplicaciones en el teléfono (cámara, SMS, contactos).',
          'Aplicar protocolos de recuperación y cierre de sesión remoto ante cuentas comprometidas.',
        ],
        temas: [
          'Archivos APK modificados y aplicaciones clonadas no oficiales',
          'Auditoría de permisos críticos en dispositivos móviles',
          'Respuesta inmediata ante el secuestro de sesiones y cuentas',
        ],
      },
    },
  },

  'redes-sociales': {
    id: 'redes-sociales',
    titulo: 'Privacidad y Protección en Redes Sociales',
    categoria: 'redes-y-comunicacion',
    nombreCategoria: 'Redes Sociales y Ciudadanía Digital',
    icono: 'share',
    resumenGeneral: 'Aprende a configurar la privacidad de tus perfiles, evitar el ciberacoso y cuidar tu huella digital.',
    duracionEstimada: '35 minutos',
    grados: {
      '1ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 1er Año a Redes Sociales y Ciudadanía Digital! Cuida lo que compartes y protege tu imagen en internet.',
        explicacionBreve: 'Las fotos y comentarios que publicas en internet pueden permanecer para siempre. En 1er Año aprenderás a configurar tus perfiles en modo privado y convivir con respeto (Netiqueta).',
        objetivos: [
          'Configurar cuentas en modo privado.',
          'Aprender la Netiqueta: Tratar a otros con respeto en la red.',
          'Reconocer qué fotos o datos NO deben publicarse jamás.',
        ],
        temas: [
          'Tu huella digital inicial',
          'Configuración de privacidad en redes',
          'Netiqueta: Convivencia digital sana',
        ],
      },
      '2do': {
        mensajeBienvenida: '¡Bienvenido estudiante de 2do Año! Protege tu ubicación y previene el ciberacoso en redes sociales.',
        explicacionBreve: 'Las fotos pueden incluir tu ubicación geográfica sin que lo notes. En 2do Año aprenderás a desactivar la geolocalización y a actuar contra el Grooming y el Ciberbullying.',
        objetivos: [
          'Desactivar metadatos y geolocalización en fotos.',
          'Identificar solicitudes de amistad sospechosas.',
          'Saber a quién acudir si sufres o presencias ciberacoso.',
        ],
        temas: [
          'Peligros de compartir tu ubicación en tiempo real',
          'Perfil de desconocidos y cuentas falsas',
          'Prevención del Ciberbullying',
        ],
      },
      '3ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 3er Año! Analiza los algoritmos de redes sociales y la privacidad de tus datos personales.',
        explicacionBreve: 'Las plataformas recolectan datos sobre tus gustos y hábitos. En 3er Año aprenderás cómo funcionan las sombras digitales y los anuncios personalizados.',
        objetivos: [
          'Comprender cómo las empresas usan tu información personal.',
          'Revisar y limitar los permisos de aplicaciones en tu teléfono.',
          'Evitar la difusión de cadenas y noticias falsas (Fake News).',
        ],
        temas: [
          'Algoritmos y la recolección masiva de datos',
          'Control de permisos de cámara, micrófono y contactos',
          'Combate contra las Fake News y la desinformación',
        ],
      },
      '4to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año! Aprende a identificar archivos trampa y enlaces engañosos en chats de redes sociales.',
        explicacionBreve: 'En 4to Año aprenderás a diferenciar archivos multimedia genuinos (fotos, videos) de archivos ejecutables o scripts camuflados que se comparten en WhatsApp, Telegram y Discord.',
        objetivos: [
          'Distinguir entre archivos multimedia reales (.jpg, .mp4) y archivos trampa (.scr, .bat, .zip).',
          'Evitar caer en el engaño social de "mira esta foto tuya" enviado por contactos o desconocidos.',
          'Verificar la autenticidad de archivos recibidos por canales de mensajería.',
        ],
        temas: [
          'Diferencia entre formatos multimedia y archivos ejecutables en chats',
          'Ingeniería social en mensajería: la trampa de "mira esta foto"',
          'Configuración de descarga automática de archivos en WhatsApp y Telegram',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año! Protégete de extensiones de navegador fraudulentas y descargas virales en redes.',
        explicacionBreve: 'En 5to Año analizarás cómo falsas promociones y filtros de redes invitan a descargar extensiones de navegador (.crx) o programas que suplantan tu identidad.',
        objetivos: [
          'Reconocer extensiones de navegador maliciosas que roban datos de navegación.',
          'Detectar campañas virales que condicionan premios o funciones a descargas de archivos.',
          'Fomentar la verificación de enlaces y archivos compartidos en grupos escolares.',
        ],
        temas: [
          'Extensiones maliciosas del navegador y falsos complementos',
          'Campañas virales de descarga y trampas de suplantación',
          'Liderazgo y prevención comunitaria de estafas en redes',
        ],
      },
    },
  },

  'software-pirata': {
    id: 'software-pirata',
    titulo: 'Riesgos de Software Pirata y Descargas No Seguras',
    categoria: 'amenazas-y-malware',
    nombreCategoria: 'Detección de Amenazas y Malware',
    icono: 'download_for_offline',
    resumenGeneral: 'Identifica los virus, troyanos y programas espía ocultos en descargas ilegales o no verificadas.',
    duracionEstimada: '50 minutos',
    grados: {
      '1ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 1er Año al módulo de Detección de Amenazas! Descubre cómo descargar juegos y programas de sitios oficiales.',
        explicacionBreve: 'Descargar juegos o programas desde páginas dudosas puede infectar tu computadora con virus. En 1er Año aprenderás a identificar sitios oficiales y seguros.',
        objetivos: [
          'Diferenciar entre descargas oficiales y no oficiales.',
          'Reconocer los avisos de tu antivirus.',
          'Evitar hacer clic en botones falsos de "Descargar aquí".',
        ],
        temas: [
          '¿Qué es un virus informático?',
          'Páginas oficiales vs páginas dudosas',
          'Botones tramposos de descarga en la web',
        ],
      },
      '2do': {
        mensajeBienvenida: '¡Bienvenido estudiante de 2do Año! Conoce el funcionamiento de los Troyanos y programas "Crack".',
        explicacionBreve: 'Los programas modificados o "cracks" casi siempre incluyen un virus troyano escondido que le da acceso a un extraño a tus archivos.',
        objetivos: [
          'Comprender qué es un Troyano y cómo se disfraza.',
          'Conocer alternativas de Software Libre e identidades oficiales.',
          'Mantener el sistema operativo actualizado.',
        ],
        temas: [
          'Los peligros de los programas "Crackeados"',
          'Introducción al Software Libre y de Código Abierto (FOSS)',
          'Importancia de las actualizaciones de seguridad',
        ],
      },
      '3ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 3er Año a Detección de Malware! Aprende sobre Ransomware y secuestro de información.',
        explicacionBreve: 'El Ransomware es un virus destructivo que encripta y bloquea tus tareas y fotos exigiendo dinero a cambio. Descubre cómo prevenirlo.',
        objetivos: [
          'Identificar los síntomas de una infección por Ransomware.',
          'Implementar copias de seguridad (Backup) periódicas.',
          'Usar herramientas de análisis de archivos como VirusTotal.',
        ],
        temas: [
          'Ransomware: El secuestro de datos digitales',
          'Análisis de archivos sospechosos en línea (VirusTotal)',
          'Estrategia de Copia de Seguridad 3-2-1',
        ],
      },
      '4to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año! Conviértete en un experto reconociendo formatos seguros y ejecutables peligrosos.',
        explicacionBreve: 'En 4to Año dominarás la anatomía de los archivos: cómo saber si descargaste un documento real o un ejecutable malicioso, y cómo activar extensiones visibles en tu computadora.',
        objetivos: [
          'Diferenciar extensiones de datos (.pdf, .docx, .png, .mp3) de ejecutables (.exe, .msi, .bat, .vbs, .iso).',
          'Configurar el explorador de Windows para mostrar extensiones de archivo ocultas.',
          'Detectar la trampa del icono cambiado: ejecutables disfrazados con icono de PDF o Word.',
        ],
        temas: [
          'Anatomía de las extensiones: Formatos seguros vs. Ejecutables',
          'Cómo mostrar las extensiones de archivos ocultas en el sistema',
          'Iconos falsificados: no te fíes de la imagen del archivo',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año! Aprende a verificar la seguridad e integridad de cualquier archivo descargado.',
        explicacionBreve: 'Como bachiller de 5to Año, aprenderás a usar herramientas profesionales gratuitas como VirusTotal para analizar descargas y comprobar la autenticidad de programas.',
        objetivos: [
          'Escanear archivos y enlaces sospechosos con VirusTotal antes de ejecutarlos.',
          'Entender qué es el Hash de un archivo (SHA-256) y para qué sirve verificarlo.',
          'Interpretar las alertas de Windows SmartScreen y advertencias de "Editor Desconocido".',
        ],
        temas: [
          'Análisis de archivos sospechosos en VirusTotal',
          'Verificación de firmas digitales y advertencias de seguridad del sistema',
          'Comprobación de integridad (Hash SHA-256) y software libre oficial',
        ],
      },
    },
  },

  videojuegos: {
    id: 'videojuegos',
    titulo: 'Ciberseguridad y Privacidad en Videojuegos',
    categoria: 'redes-y-comunicacion',
    nombreCategoria: 'Redes Sociales y Ciudadanía Digital',
    icono: 'sports_esports',
    resumenGeneral: 'Juega de forma segura evitando fraudes con monedas virtuales, trampas y acoso en chats de juegos en línea.',
    duracionEstimada: '35 minutos',
    grados: {
      '1ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 1er Año al módulo de Seguridad en Videojuegos! Juega, diviértete y mantén tus datos a salvo.',
        explicacionBreve: 'En los juegos en línea interactúas con personas de todo el mundo. En 1er Año aprenderás a no compartir tu nombre real, escuela o dirección en los chats de juegos.',
        objetivos: [
          'Usar un apodo o GamerTag en lugar de tu nombre real.',
          'No aceptar ofertas de "monedas o Robux/Pavos gratis".',
          'Jugar en horarios adecuados y balanceados.',
        ],
        temas: [
          'Tu identidad segura en los videojuegos',
          'Estafas de diamantes, Robux o monedas virtuales gratis',
          'Silenciar y reportar a jugadores tóxicos',
        ],
      },
      '2do': {
        mensajeBienvenida: '¡Bienvenido estudiante de 2do Año! Evita la descarga de Mods inseguros y trampas de juegos (Cheats).',
        explicacionBreve: 'Muchos programas de trucos (Cheats) para juegos contienen programas espía diseñados para robar tus cuentas de correo y redes.',
        objetivos: [
          'Reconocer los riesgos de instalar programas de trucos o hacks.',
          'Verificar la autenticidad de los modificadores de juegos (Mods).',
          'Proteger los datos de pago de tus padres o representantes.',
        ],
        temas: [
          'Peligro de los Hacks y Cheats en juegos',
          'Descarga segura de Mods en plataformas autorizadas',
          'Compras integradas y protección de tarjetas de pago',
        ],
      },
      '3ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 3er Año! Protégete del Phishing en plataformas de intercambio de items y Discord.',
        explicacionBreve: 'Los servidores de chat de juegos como Discord o Steam son usados por atacantes para enviar enlaces maliciosos de intercambio.',
        objetivos: [
          'Configurar la privacidad de tus servidores y chats de voz.',
          'Identificar enlaces de Phishing dirigidos a cuentas de juegos.',
          'Activar el autenticador móvil de tu plataforma de videojuegos.',
        ],
        temas: [
          'Seguridad en Discord, Steam y plataformas de juegos',
          'Estafas en intercambios de elementos digitales (Skins/Items)',
          'Autenticación en dos pasos para cuentas de videojuegos',
        ],
      },
      '4to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año! Descubre la verdad sobre los generadores de monedas, trucos y skins falsos.',
        explicacionBreve: 'En 4to Año aprenderás a identificar cómo supuestos programas de ventajas (aimbots, mods, generadores de Robux o Pavos) son ejecutables troyanos creados para robarte.',
        objetivos: [
          'Reconocer que los generadores de monedas virtuales y trampas son instaladores de virus.',
          'Inspeccionar el contenido de archivos comprimidos de mods antes de descomprimirlos.',
          'Diferenciar archivos de recursos limpios (texturas, sonidos) de ejecutables maliciosos.',
        ],
        temas: [
          'Falsos hacks y cheats: ejecutables con troyanos camuflados',
          'Inspección de archivos .zip y carpetas de mods',
          'Riesgos de ejecutar instaladores desconocidos en tu PC de juegos',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año! Aprende a gestionar descargas seguras en comunidades gamer y plataformas de mods.',
        explicacionBreve: 'En 5to Año dominarás el uso exclusivo de repositorios oficiales y verificados de mods, evitando enlaces directos compartidos por desconocidos en Discord o foros.',
        objetivos: [
          'Utilizar repositorios seguros y verificados para descargar mods (Steam Workshop, CurseForge).',
          'Rechazar archivos e instaladores que exijan desactivar el antivirus.',
          'Proteger cuentas de plataformas de juegos (Steam, Epic, Riot) ante descargas dudosas.',
        ],
        temas: [
          'Repositorios comunitarios verificados vs. descargas en foros o Discord',
          'La trampa de "desactiva tu antivirus para instalar el mod"',
          'Protección integral de cuentas de juego con inventario de valor',
        ],
      },
    },
  },

  auditorias: {
    id: 'auditorias',
    titulo: 'Auditoría e Higiene Digital Personal',
    categoria: 'auditoria-e-higiene',
    nombreCategoria: 'Auditoría e Higiene Digital',
    icono: 'fact_check',
    resumenGeneral: 'Realiza un diagnóstico de la seguridad de tus dispositivos, archivos y hábitos digitales cotidianos.',
    duracionEstimada: '45 minutos',
    grados: {
      '1ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 1er Año al módulo de Auditoría e Higiene Digital! Aprende a mantener tus equipos limpios y organizados.',
        explicacionBreve: 'Así como limpiamos nuestra habitación, nuestros teléfonos y computadoras necesitan orden y limpieza digital para funcionar bien y seguros.',
        objetivos: [
          'Borrar aplicaciones que ya no utilizas.',
          'Limpiar la memoria caché y archivos temporales.',
          'Desconectar tu sesión al usar equipos prestados.',
        ],
        temas: [
          '¿Qué es la Higiene Digital?',
          'Limpieza periódica de aplicaciones y archivos',
          'Cierre correcto de sesiones de usuario',
        ],
      },
      '2do': {
        mensajeBienvenida: '¡Bienvenido estudiante de 2do Año! Revisa las conexiones de red Wi-Fi y dispositivos bluetooth a los que te vinculas.',
        explicacionBreve: 'Conectarse a redes Wi-Fi públicas sin contraseña expone tus datos a miradas indiscretas. Aprende a conectarte de forma segura.',
        objetivos: [
          'Identificar los riesgos de las redes Wi-Fi públicas abiertas.',
          'Desactivar Bluetooth y Wi-Fi cuando no los uses.',
          'Comprobar qué dispositivos están conectados a tu cuenta.',
        ],
        temas: [
          'Peligros de las redes Wi-Fi abiertas y públicas',
          'Conexiones invisibles: Bluetooth y zonas de cobertura',
          'Lista de dispositivos vinculados a tu cuenta',
        ],
      },
      '3ro': {
        mensajeBienvenida: '¡Bienvenido estudiante de 3er Año! Realiza tu primera lista de verificación (Checklist) de ciberseguridad personal.',
        explicacionBreve: 'Una auditoría es una revisión organizada de tus puntos débiles en internet. En 3er Año aplicarás una guía paso a paso para proteger tu celular.',
        objetivos: [
          'Aplicar una lista de chequeo de seguridad a tu celular o computadora.',
          'Comprobar la presencia de antivirus y parches de actualización.',
          'Revisar las copias de seguridad de tus proyectos escolares.',
        ],
        temas: [
          'Lista de verificación de ciberseguridad escolar',
          'Verificación del estado del antivirus y cortafuegos (Firewall)',
          'Resguardo de proyectos e investigaciones importantes',
        ],
      },
      '4to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año! Realiza una auditoría completa de tu carpeta de descargas y hábitos de navegación.',
        explicacionBreve: 'En 4to Año aprenderás a auditar tu carpeta de "Descargas", identificando instaladores viejos, archivos residuales desconocidos y configurando descargas seguras.',
        objetivos: [
          'Auditar y limpiar periódicamente la carpeta de descargas de tu PC y teléfono.',
          'Configurar el navegador para que pregunte siempre la ubicación antes de guardar un archivo.',
          'Identificar archivos ejecutables residuales que se quedaron sin abrir o sin verificar.',
        ],
        temas: [
          'Auditoría y limpieza de la carpeta de descargas',
          'Configuración de seguridad y confirmación de descargas en el navegador',
          'Detección de archivos residuales sospechosos en el almacenamiento',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año! Diseña un plan de reacción ante descargas sospechosas y promueve la higiene digital.',
        explicacionBreve: 'Como estudiante graduando, aprenderás el protocolo paso a paso sobre qué hacer si descargaste o abriste un archivo malicioso, y crearás una guía para el liceo.',
        objetivos: [
          'Aplicar el protocolo de emergencia ante la apertura accidental de un archivo peligroso.',
          'Elaborar una lista de verificación (checklist) de descargas seguras para la comunidad.',
          'Fomentar la cultura de no ejecutar archivos a ciegas entre compañeros y familiares.',
        ],
        temas: [
          'Protocolo de respuesta ante un archivo malicioso ejecutado',
          'Lista de verificación (Checklist) de descargas seguras para el liceo',
          'Liderazgo en higiene digital: orientar a familiares y estudiantes menores',
        ],
      },
    },
  },
};
