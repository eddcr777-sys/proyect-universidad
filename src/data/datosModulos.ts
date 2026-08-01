/**
 * ============================================================================
 * CATÁLOGO DE DATOS LOCAL ESTÁTICO DE MÓDULOS DE CIBERSEGURIDAD
 * Liceo Bolivariano Antonio Lemus Pérez (LB-LEMUS)
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
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año! Fortalece tus habilidades en detección avanzada de Smishing (SMS) y Phishing en plataformas de estudio.',
        explicacionBreve: 'En 4to Año abordaremos el phishing dirigido (Spear Phishing) y la suplantación en plataformas académicas y correos institucionales.',
        objetivos: [
          'Evaluar encabezados técnicos de correo para verificar firma digital.',
          'Prevenir ataques de Smishing en teléfonos móviles.',
          'Construir un criterio analítico frente a la desinformación cibernética.',
        ],
        temas: [
          'Spear Phishing: Ataques personalizados',
          'Smishing (SMS) y Vishing (Llamadas falsas)',
          'Verificación de seguridad en plataformas institucionales',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año al nivel experto de Defensa Digital! Conviértete en un líder digital capaz de orientar a tu comunidad.',
        explicacionBreve: 'Como futuro graduando de 5to Año, evaluarás normativas, ética digital y prevención de fraudes cibernéticos que afectan a estudiantes y organizaciones.',
        objetivos: [
          'Analizar casos de estudio de ciberestafas a nivel nacional e internacional.',
          'Diseñar estrategias comunitarias de concientización sobre el Phishing.',
          'Comprender el impacto legal del delito informático.',
        ],
        temas: [
          'Auditoría y análisis de casos reales de Phishing',
          'Leyes y marco legal de delitos informáticos en Venezuela',
          'Campañas comunitarias de concientización digital',
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
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año al módulo de Accesos Seguros! Domina la gestión de llaves criptográficas y Biometría.',
        explicacionBreve: 'Analiza los métodos de autenticación sin contraseña (Passkeys), huella dactilar y reconocimiento facial en dispositivos móviles.',
        objetivos: [
          'Evaluar la seguridad de la biometría frente a contraseñas tradicionales.',
          'Implementar Passkeys en plataformas modernas.',
          'Auditar permisos de aplicaciones vinculadas a tus cuentas.',
        ],
        temas: [
          'El futuro de la autenticación: Passkeys',
          'Biometría y privacidad de datos sensibles',
          'Desvinculación de aplicaciones de terceros peligrosas',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año! Administra identidades y accesos institucionales con estándares profesionales.',
        explicacionBreve: 'Como estudiante avanzado, comprenderás los conceptos de Control de Acceso Basado en Roles (RBAC) y la gestión de credenciales académicas.',
        objetivos: [
          'Comprender arquitecturas de identidad digital en entornos universitarios.',
          'Diseñar políticas de claves seguras para grupos u organizaciones.',
          'Prevenir secuestros de cuentas mediante filtración de datos.',
        ],
        temas: [
          'Gestión de identidades y accesos en la educación superior',
          'Qué hacer cuando una clave se filtra en internet (Data Breach)',
          'Protocolos de recuperación segura de identidad digital',
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
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año! Proyecta una identidad digital académica y profesional limpia.',
        explicacionBreve: 'Tu huella digital actual afectará tus futuras postulaciones universitarias y laborales. En 4to Año aprenderás a limpiar y destacar tu reputación en la web.',
        objetivos: [
          'Auditar la propia presencia en buscadores de internet.',
          'Construir un perfil académico positivo.',
          'Manejar situaciones de suplantación de identidad en redes.',
        ],
        temas: [
          'Tu reputación digital de cara a la universidad',
          'Auditoría personal en motores de búsqueda',
          'Protocolos de denegación y reporte de perfiles falsos',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año! Lidera el uso ético y seguro de las redes en tu comunidad escolar.',
        explicacionBreve: 'Debatirás sobre la libertad de expresión, el derecho al olvido digital y la responsabilidad social del creador de contenido.',
        objetivos: [
          'Conocer las leyes de protección a niños, niñas y adolescentes en entornos digitales.',
          'Analizar el impacto del ciberacoso a nivel legal.',
          'Promover la ciudadanía digital activa en el liceo.',
        ],
        temas: [
          'Marco regulatorio de redes sociales y protección de datos',
          'El derecho al olvido y la eliminación de rastro digital',
          'Proyecto de ciudadanía digital para 5to año',
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
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año! Profundiza en el análisis de ejecutable y amenazas de Cryptojacking.',
        explicacionBreve: 'El software pirata puede usar la potencia de tu equipo para minar criptomonedas sin tu permiso, sobrecalentando y dañando tu computadora.',
        objetivos: [
          'Detectar procesos anómalos que ralentizan el equipo.',
          'Comprender los riesgos del minado de criptomonedas no autorizado.',
          'Utilizar licencias educativas oficiales gratuitas.',
        ],
        temas: [
          'Cryptojacking: Uso indebido de tu hardware',
          'Monitoreo del Administrador de Tareas y Procesos',
          'Licencias de software para estudiantes y educación',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año! Aplica políticas de seguridad de software y gestión de parches.',
        explicacionBreve: 'Como estudiante avanzado, estudiarás los vectores de ataque en redes escolares y corporativas debido al software sin licencia.',
        objetivos: [
          'Analizar el impacto económico y legal del uso de software ilegal.',
          'Diseñar un plan de respuesta a incidentes de malware.',
          'Fomentar la adopción de herramientas libres en el liceo.',
        ],
        temas: [
          'Impacto institucional del software no autorizado',
          'Modelos de licenciamiento y legislación de propiedad intelectual',
          'Protocolo institucional de respuesta ante infecciones',
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
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año! Conoce el impacto del Doxing y ataques DDoS en el entorno Gaming.',
        explicacionBreve: 'El Doxing consiste en investigar y publicar la información privada de un jugador sin su permiso. Aprende a prevenirlo.',
        objetivos: [
          'Comprender qué es el Doxing y cómo proteger tu huella en comunidades.',
          'Evitar revelar la dirección IP personal en servidores de juegos no oficiales.',
          'Promover el juego limpio y saludable.',
        ],
        temas: [
          'Doxing: Revelación maliciosa de información privada',
          'Ataques de denegación de servicio (DDoS) en partidas',
          'Uso responsable de redes VPN en el ámbito gaming',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año! Analiza la economía digital de los videojuegos y la ciberseguridad en esports.',
        explicacionBreve: 'Los videojuegos son hoy una industria millonaria con torneos profesionales (eSports). Analiza los aspectos de ciberseguridad financiera e intelectual.',
        objetivos: [
          'Analizar los modelos de negocio y protección en eSports.',
          'Evaluar la privacidad en transmisiones en vivo (Streaming).',
          'Fomentar la mentoría digital hacia estudiantes menores.',
        ],
        temas: [
          'Seguridad en plataformas de Streaming (Twitch/YouTube Gaming)',
          'Economía digital, cuentas valiosas y propiedad de activos',
          'Liderazgo y juego ético en la comunidad liceísta',
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
        mensajeBienvenida: '¡Bienvenido estudiante de 4to Año! Ejecuta auditorías de privacidad avanzadas en redes y navegadores web.',
        explicacionBreve: 'Aprende a revisar las galletas (cookies) de rastreo, los permisos de cámara en tu navegador y el historial de navegación acumulado.',
        objetivos: [
          'Eliminar cookies de rastreo publicitario masivo.',
          'Configurar navegadores enfocados en privacidad (Brave, Firefox).',
          'Auditar contraseñas guardadas en el navegador.',
        ],
        temas: [
          'Galletas (Cookies) de seguimiento y cómo eliminarlas',
          'Navegación privada y navegadores centrados en privacidad',
          'Auditoría de claves expuestas en filtraciones de datos',
        ],
      },
      '5to': {
        mensajeBienvenida: '¡Bienvenido estudiante de 5to Año! Diseña e imparte una auditoría de higiene digital para tu liceo o comunidad.',
        explicacionBreve: 'Como estudiante culminante, aplicarás un diagnóstico de ciberseguridad a nivel institucional o familiar para identificar vulnerabilidades.',
        objetivos: [
          'Diseñar un instrumento de auditoría de ciberseguridad para la escuela.',
          'Evaluar la postura de seguridad de un grupo de usuarios.',
          'Presentar recomendaciones técnicas claras para la prevención.',
        ],
        temas: [
          'Metodología de auditoría de ciberseguridad comunitaria',
          'Diagnóstico de vulnerabilidades cotidianas',
          'Presentación del plan de mejoras y mejores prácticas digitales',
        ],
      },
    },
  },
};
