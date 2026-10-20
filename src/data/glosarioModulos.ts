/**
 * ============================================================================
 * GLOSARIO Y CONTEXTO EXTENDIDO POR MÓDULO DE CIBERSEGURIDAD
 * Complejo Educativo Antonio Lemus Pérez
 * ============================================================================
 */

export interface TerminoGlosario {
  termino: string;
  definicion: string;
  paraQueSirve: string;
  ejemploPráctico?: string;
}

export interface AmenazaCaso {
  titulo: string;
  descripcion: string;
}

export interface ContextoModuloExtendido {
  moduloId: string;
  queEsElTema: string;
  porQueEsFundamental: string;
  glosario: TerminoGlosario[];
  amenazasYCasos: AmenazaCaso[];
  reglasDeOro: string[];
}

export const GLOSARIOS_MODULOS: Record<string, ContextoModuloExtendido> = {
  phishing: {
    moduloId: 'phishing',
    queEsElTema: 'El Phishing (Suplantación de Identidad) e Ingeniería Social abarca un conjunto de técnicas cibernéticas fraudulentas donde atacantes se disfrazan de entidades legítimas (bancos, liceos, redes sociales o servicios públicos) para engañar al usuario y lograr que este entregue voluntariamente información sensible como contraseñas, credenciales institucionales o datos financieros.',
    porQueEsFundamental: 'El 90% de las violaciones de seguridad en internet comienzan con un correo o mensaje engañoso. Entender la psicología del engaño digital es la primera línea de defensa para proteger la identidad del estudiante y la red del Complejo Educativo "Antonio Lemus Pérez".',
    glosario: [
      {
        termino: 'Phishing (Suplantación Digital)',
        definicion: 'Técnica de ingeniería social mediante correos o mensajes masivos engañosos diseñados para suplantar la identidad de una institución y engañar al usuario.',
        paraQueSirve: 'Sirve a los atacantes para engañarte y lograr que les entregues contraseñas, números bancarios o datos de acceso a plataformas sin usar virus.',
        ejemploPráctico: 'Un correo que dice ser de tu plataforma escolar pidiéndote confirmar tu clave urgentemente.',
      },
      {
        termino: 'Spear Phishing (Phishing Dirigido)',
        definicion: 'Ataque de phishing altamente personalizado dirigido a una persona específica o grupo escolar utilizando datos detallados (nombre, curso, liceo) del objetivo.',
        paraQueSirve: 'Sirve para engañar a personas clave (como un profesor o director) haciéndoles creer que el mensaje viene de un colega o estudiante conocido.',
        ejemploPráctico: 'Un mensaje dirigido con tu nombre completo y nombre de tu profesor pidiéndote abrir un archivo PDF infectado.',
      },
      {
        termino: 'Smishing (Phishing por SMS)',
        definicion: 'Variante del Phishing realizada exclusivamente a través de mensajes de texto cortos (SMS - Short Message Service) o mensajería instantánea como WhatsApp.',
        paraQueSirve: 'Sirve para interceptar usuarios móviles desprevenidos que hacen clic rápido en enlaces recibidos en su teléfono personal.',
        ejemploPráctico: 'Un SMS: "Su paquete del liceo fue retenido, ingrese a este enlace para verificar".',
      },
      {
        termino: 'Vishing (Phishing por Voz)',
        definicion: 'Phishing realizado mediante llamadas telefónicas fraudulentas utilizando voz humana o inteligencia artificial para engañar a la víctima.',
        paraQueSirve: 'Sirve para manipular emocionalmente al usuario mediante la voz en vivo para que dicte claves secretas o códigos SMS recibidos.',
        ejemploPráctico: 'Una llamada donde alguien dice ser un técnico bancario solicitándote un código enviado a tu celular.',
      },
      {
        termino: 'Spoofing de Dominio / URL (Dirección Web Falsa)',
        definicion: 'Técnica que altera la URL (Localizador Uniforme de Recursos o Dirección Web) para imitar exactamente la apariencia de un sitio web oficial.',
        paraQueSirve: 'Sirve para confundir visualmente al usuario y hacerle escribir sus datos reales en una página de captura idéntica a la original.',
        ejemploPráctico: 'Una dirección falsa como "www.lemusperez-liceo.com" en lugar del dominio oficial del liceo.',
      },
      {
        termino: 'Ingeniería Social (Manipulación Humana)',
        definicion: 'La manipulación psicológica de las personas para que ejecuten acciones engañosas o divulguen información confidencial en lugar de vulnerar sistemas.',
        paraQueSirve: 'Sirve para vulnerar el eslabón más débil de la seguridad (las emociones humanas como miedo, curiosidad o urgencia) sin hackear código informático.',
        ejemploPráctico: 'Crear una falsa urgencia como "Su cuenta será suspendida en 10 minutos si no inicia sesión".',
      },
    ],
    amenazasYCasos: [
      {
        titulo: 'Correos de Actualización Urgente de Claves',
        descripcion: 'Simulaciones de correos institucionales donde se exige validar datos en una dirección URL falsa.',
      },
      {
        titulo: 'Premios y Concursos Falsos en Redes Sociales',
        descripcion: 'Mensajes masivos sobre sorteos de teléfonos o becas que solicitan datos personales para participar.',
      },
    ],
    reglasDeOro: [
      'Inspecciona siempre la dirección URL completa en la barra del navegador antes de escribir tu clave.',
      'Nunca hagas clic en enlaces recibidos en correos de remitentes no verificados.',
      'Duda de cualquier mensaje que exija una acción urgente o prometa premios extravagantes.',
      'Ante cualquier mensaje sospechoso, consulta directamente con tus profesores o autoridades del liceo.',
    ],
  },

  'proteccion-cuentas': {
    moduloId: 'proteccion-cuentas',
    queEsElTema: 'La Protección de Cuentas comprende las metodologías, estándares y tecnologías necesarias para controlar quién tiene acceso a tus perfiles digitales. Abarca desde la creación de contraseñas resistentes hasta mecanismos avanzados como la Verificación en Dos Pasos (2FA), la biometría y las Llaves de Acceso (Passkeys).',
    porQueEsFundamental: 'Tus cuentas representan tu identidad en el mundo digital. Si un atacante vulnera tu cuenta principal de correo o redes, puede suplantarte, acceder a tus archivos y comprometer las cuentas de tus contactos.',
    glosario: [
      {
        termino: 'Autenticación de Dos Factores (2FA - Two-Factor Authentication)',
        definicion: 'Capa adicional de seguridad que requiere dos tipos de pruebas para iniciar sesión: algo que sabes (contraseña) y algo que tienes (código temporal en tu celular o PIN).',
        paraQueSirve: 'Sirve para impedir el acceso no autorizado incluso si un atacante logra averiguar o robar tu contraseña principal.',
        ejemploPráctico: 'Ingresar tu contraseña y luego un código temporal de 6 dígitos generado por tu teléfono.',
      },
      {
        termino: 'Contraseña Robusta (Passphrase)',
        definicion: 'Secuencia larga de caracteres (más de 12 a 16 caracteres) que combina letras mayúsculas, minúsculas, números y símbolos para resistir ataques informáticos.',
        paraQueSirve: 'Sirve para hacer matemáticamente imposible que un programa automatizado adivine tu clave mediante combinaciones rápidas.',
        ejemploPráctico: 'Usar una frase como "Liceo#Lemus2026!Seguro" en lugar de "contraseña123".',
      },
      {
        termino: 'Gestor de Contraseñas (Password Manager)',
        definicion: 'Aplicación cifrada que genera, almacena y autocompleta contraseñas seguras y únicas para cada uno de tus sitios web sin tener que memorizarlas.',
        paraQueSirve: 'Sirve para mantener claves hiperseguras y diferentes en 50 páginas distintas recordando únicamente una sola clave maestra.',
        ejemploPráctico: 'Usar herramientas confiables como Bitwarden para guardar tus claves en una bóveda cifrada.',
      },
      {
        termino: 'Ataque de Fuerza Bruta',
        definicion: 'Método automatizado utilizado por programas dañinos para adivinar contraseñas probando millones de combinaciones por segundo.',
        paraQueSirve: 'Es un mecanismo usado por piratas informáticos para vulnerar cuentas que poseen palabras simples o claves cortas.',
        ejemploPráctico: 'Un programa probando todas las palabras del diccionario hasta dar con una clave corta o común.',
      },
      {
        termino: 'Passkeys (Llaves de Paso / Biometría)',
        definicion: 'Estándar moderno de autenticación criptográfica sin contraseña que utiliza tu rostro (Face ID), huella dactilar o PIN del dispositivo para validar el acceso.',
        paraQueSirve: 'Sirve para iniciar sesión de forma instantánea e inmune a phishing sin necesidad de tipear textos ni recordar claves.',
        ejemploPráctico: 'Desbloquear tu sesión en una web usando el lector de huellas de tu teléfono celular.',
      },
      {
        termino: 'Filtración de Datos (Data Breach)',
        definicion: 'Incidente donde datos confidenciales de una empresa o plataforma son robados y expuestos públicamente en internet por piratas informáticos.',
        paraQueSirve: 'Alertar al usuario de que sus bases de datos fueron hackeadas para que cambie sus claves de inmediato en otros sitios.',
        ejemploPráctico: 'Cuando un sitio de juegos sufre un hackeo y las claves de sus usuarios terminan publicadas.',
      },
    ],
    amenazasYCasos: [
      {
        titulo: 'Reutilización de Contraseñas en Múltiples Sitios',
        descripcion: 'Si usas la misma clave en 10 sitios y uno sufre un hackeo, los atacantes probarán esa clave en tus demás cuentas.',
      },
      {
        titulo: 'Inicios de Sesión en Dispositivos Públicos',
        descripcion: 'Olvidar cerrar sesión en computadoras compartidas dejando tu perfil abierto.',
      },
    ],
    reglasDeOro: [
      'Crea una contraseña única para cada una de tus cuentas importantes.',
      'Activa la verificación en dos pasos (2FA) en tu correo y redes sociales.',
      'Nunca compartas tus contraseñas con amigos ni las anotes en papeles visibles.',
      'Cierra siempre tu sesión al terminar de usar equipos compartidos o públicos.',
    ],
  },

  'redes-sociales': {
    moduloId: 'redes-sociales',
    queEsElTema: 'La Privacidad y Protección en Redes Sociales aborda la gestión consciente de la información que compartes en plataformas digitales (Instagram, TikTok, WhatsApp, etc.), la configuración de privacidad de perfiles, el cuidado de la huella digital y la convivencia ética y segura en comunidades virtuales.',
    porQueEsFundamental: 'El uso desmedido o descuidado de las redes sociales expone información sensible como tu ubicación física, rutina diaria e imagen personal, haciéndote vulnerable a ciberacoso, extorsión o suplantación de identidad.',
    glosario: [
      {
        termino: 'Huella Digital (Rastro Virtual)',
        definicion: 'El rastro o conjunto de datos e interacciones que dejas en internet a través de tus publicaciones, comentarios, fotos, me gusta y búsquedas.',
        paraQueSirve: 'Sirve para tomar conciencia sobre cómo te ven las empresas, escuelas y personas en el presente y en el futuro.',
        ejemploPráctico: 'Tus fotos antiguas, comentarios en foros y registros que pueden ser vistos por cualquier persona años después.',
      },
      {
        termino: 'Netiqueta (Etiqueta en la Red)',
        definicion: 'Conjunto de normas de comportamiento, cortesía y respeto mutuo que rigen la convivencia sana en entornos virtuales y redes sociales.',
        paraQueSirve: 'Sirve para prevenir malentendidos, evitar la violencia digital y construir comunidades virtuales respetuosas.',
        ejemploPráctico: 'Evitar escribir en mayúsculas sostenidas (que equivale a gritar) y respetar las opiniones ajenas.',
      },
      {
        termino: 'Ciberacoso (Ciberbullying)',
        definicion: 'Uso de medios digitales para intimidar, hostigar, humillar o amenazar de forma repetida e intencionada a una persona.',
        paraQueSirve: 'Identificar agresiones digitales sistemáticas para activar protocolos escolares de denuncia y protección psicológica.',
        ejemploPráctico: 'Crear memes malintencionados o difundir rumores falsos en grupos de mensajería.',
      },
      {
        termino: 'Grooming (Acoso de Adultos a Menores)',
        definicion: 'Proceso de manipulación ejecutado por un adulto que crea un perfil falso para ganarse la confianza de un menor con fines de abuso.',
        paraQueSirve: 'Detectar comportamientos sospechosos de desconocidos en internet para detener la manipulación antes de que ocurra un daño.',
        ejemploPráctico: 'Alguien que simula tener tu misma edad en redes para pedirte fotos personales o coordinar encuentros.',
      },
      {
        termino: 'Geotagging (Geolocalización GPS)',
        definicion: 'Metadatos adjuntos a fotografías o publicaciones que revelan las coordenadas de posicionamiento global (GPS) de dónde fueron tomadas.',
        paraQueSirve: 'Permite ubicar el lugar exacto de una foto, por lo que desactivarlo sirve para proteger tu domicilio e itinerario personal.',
        ejemploPráctico: 'Publicar una foto en la fachada de tu casa o liceo con la ubicación exacta activada.',
      },
      {
        termino: 'Derecho al Olvido',
        definicion: 'El derecho legal de un ciudadano a solicitar que se eliminen o desvinculen enlaces con información personal obsoleta o dañina en buscadores.',
        paraQueSirve: 'Sirve para proteger tu reputación eliminando enlaces con contenidos falsos o lesivos que ya no corresponden con la realidad.',
        ejemploPráctico: 'Solicitar a buscadores como Google que desvinculen un sitio con datos falsos sobre tu persona.',
      },
    ],
    amenazasYCasos: [
      {
        titulo: 'Exposición inintencionada de Rutinas Diarias',
        descripcion: 'Publicar fotos con el uniforme escolar o lugares que frecuentas a diario revela tus horarios a desconocidos.',
      },
      {
        titulo: 'Cuentas Clonadas o Falsas',
        descripcion: 'Creación de perfiles impostores que usan tus fotos para enviar mensajes en tu nombre a tus amigos.',
      },
    ],
    reglasDeOro: [
      'Mantén tus perfiles en redes sociales configurados en modo Privado.',
      'Desactiva el acceso a tu ubicación GPS en la cámara y aplicaciones sociales.',
      'No aceptes solicitudes de amistad de personas que no conozcas personalmente.',
      'Recuerda la regla de oro: No publiques nada que no mostrarías en la cartelera del liceo.',
    ],
  },

  'software-pirata': {
    moduloId: 'software-pirata',
    queEsElTema: 'El estudio de los Riesgos del Software Pirata analiza los peligros de descargar e instalar programas modificados, juegos "crackeados", activadores ilegales o extensiones no oficiales. Explora la naturaleza del malware, virus informáticos, ransomware y las alternativas seguras basadas en Software Libre (FOSS).',
    porQueEsFundamental: 'Los programas piratas son la principal vía de distribución de virus destructivos en computadoras personales y escolares. Un solo ejecutable modificado puede destruir tus proyectos académicos o secuestrar los archivos de tu hogar.',
    glosario: [
      {
        termino: 'Malware (Software Malicioso)',
        definicion: 'Término general para cualquier programa informático diseñado con intenciones dañinas, como robar datos, espiar o destruir sistemas.',
        paraQueSirve: 'Sirve a los atacantes para infectar dispositivos informáticos, robar contraseñas y controlar remotamente equipos.',
        ejemploPráctico: 'Virus, troyanos, gusanos, spyware y ransomware.',
      },
      {
        termino: 'Troyano (Trojan Horse)',
        definicion: 'Programa dañino que se camufla como un archivo o juego legítimo para engañar al usuario e instalar un acceso secreto a su equipo.',
        paraQueSirve: 'Sirve para engañar a la víctima haciendo que ejecute una app aparentemente útil mientras en segundo plano abre una puerta trasera.',
        ejemploPráctico: 'Un instalador de un juego famoso que al ejecutarse instala en segundo plano un registrador de teclas.',
      },
      {
        termino: 'Ransomware (Secuestro de Datos)',
        definicion: 'Malware destructivo que encripta (bloquea con clave) todos tus archivos personales y exige el pago de un rescate para desbloquearlos.',
        paraQueSirve: 'Sirve a cibercriminales para extorsionar a personas e instituciones exigiendo pagos de dinero bajo la amenaza de destruir sus datos.',
        ejemploPráctico: 'Un aviso que dice "Sus fotos y documentos fueron cifrados. Pague dinero para obtener la clave".',
      },
      {
        termino: 'Crack / Keygen (Generador de Licencias Falsas)',
        definicion: 'Herramienta no oficial creada para eludir la protección de licencias de un programa de pago. Casi siempre contiene virus ocultos.',
        paraQueSirve: 'Promete desbloquear programas comerciales gratis, pero sirve como vehículo principal para ocultar virus en la instalación.',
        ejemploPráctico: 'Un archivo `.exe` descargado para activar una suite de oficina sin comprar la licencia.',
      },
      {
        termino: 'Cryptojacking (Minería Maliciosa de Criptomonedas)',
        definicion: 'Uso no autorizado de los recursos del procesador (CPU - Central Processing Unit) y tarjeta gráfica (GPU) para minar criptomonedas para el atacante.',
        paraQueSirve: 'Sirve al atacante para lucrarse abusando del consumo eléctrico y componentes de tu computadora sin que lo sepas.',
        ejemploPráctico: 'Tu computadora se vuelve extremadamente lenta y los ventiladores hacen ruido incluso sin estar jugando.',
      },
      {
        termino: 'Software Libre y FOSS (Free and Open Source Software)',
        definicion: 'Programas de código abierto que respetan la libertad del usuario, permitiendo su uso, estudio, modificación y redistribución gratuita y segura.',
        paraQueSirve: 'Sirve para reemplazar software comercial costoso o pirata por programas comunitarios totalmente legítimos, seguros y gratuitos.',
        ejemploPráctico: 'Usar LibreOffice en lugar de activar copias piratas de software comercial.',
      },
    ],
    amenazasYCasos: [
      {
        titulo: 'Infección Masiva por Descarga de "Juegos Gratis"',
        descripcion: 'Sitios web que ofrecen juegos comerciales gratis incluyendo troyanos que roban las claves guardadas en tu navegador.',
      },
      {
        titulo: 'Pérdida Total de Tareas Escolares por Ransomware',
        descripcion: 'Ejecutar un instalador dudoso que cifra todos tus archivos `.pdf`, `.docx` e imágenes en cuestión de segundos.',
      },
    ],
    reglasDeOro: [
      'Descarga programas y juegos únicamente desde tiendas y sitios oficiales.',
      'Reemplaza programas de pago por alternativas de Software Libre (FOSS) gratuitas y seguras.',
      'Mantén tu antivirus y sistema operativo siempre actualizados.',
      'Aplica la regla de copia de seguridad 3-2-1 para no perder nunca tus archivos importantes.',
    ],
  },

  videojuegos: {
    moduloId: 'videojuegos',
    queEsElTema: 'La Ciberseguridad en Videojuegos examina las amenazas digitales que afectan a los jugadores en plataformas online, comunidades de chat (Discord, Twitch, Steam) y servidores multijugador. Incluye la prevención de estafas con activos virtuales, trampas (cheats) maliciosas, robo de cuentas y ataques de denegación de servicio (DDoS).',
    porQueEsFundamental: 'Los videojuegos son hoy plataformas sociales multimillonarias donde los jóvenes pasan horas. El robo de cuentas de juegos, fraudes con tarjetas de representantes y el ciberacoso en salas de voz son riesgos cotidianos que requieren educación preventiva.',
    glosario: [
      {
        termino: 'Doxing / Doxxing (Filtración de Datos Privados)',
        definicion: 'Práctica maliciosa de rastrear, investigar y publicar información personal y privada (nombre real, dirección, teléfono) de un usuario en internet sin su consentimiento.',
        paraQueSirve: 'Es usado por jugadores tóxicos para intimidar y avergonzar públicamente a otros usuarios publicando su vida real.',
        ejemploPráctico: 'Publicar el nombre real, dirección de la casa y liceo de un rival tras perder una partida.',
      },
      {
        termino: 'Cheats / Hacks Infectados (Trampas Maliciosas)',
        definicion: 'Programas de trampas promocionados para ganar ventajas en juegos que contienen virus diseñados para robar sesiones de usuario.',
        paraQueSirve: 'Prometen ventajas tramposas en juegos, pero sirven para infectar la máquina del usuario y secuestrar sus cuentas.',
        ejemploPráctico: 'Descargar un "Aimbot" que termina robando la sesión de tu cuenta de correo y Discord.',
      },
      {
        termino: 'Estafas de Monedas Virtuales (Scams)',
        definicion: 'Engaños en sitios no oficiales que prometen regalar divisas del juego (Robux, Pavos, Diamantes) a cambio de datos personales o contraseñas.',
        paraQueSirve: 'Sirve a estafadores para apoderarse de cuentas con ítems o compras guardadas solicitando datos de login con promesas engañosas.',
        ejemploPráctico: 'Páginas falsas que dicen "Ingresa tu usuario y contraseña para recibir 5000 diamantes gratis".',
      },
      {
        termino: 'Ataques DDoS (Distributed Denial of Service / Denegación de Servicio)',
        definicion: 'Envío masivo de tráfico falso a la dirección de red (IP - Internet Protocol) de un usuario para saturar su router y desconectarlo de una partida.',
        paraQueSirve: 'Sirve a atacantes para sacar de combate la conexión de internet de un rival para hacerle perder la partida.',
        ejemploPráctico: 'Sufrir caídas de internet arbitrarias mientras juegas un torneo por revelar tu IP.',
      },
      {
        termino: 'GamerTag / Apodo Digital',
        definicion: 'Nombre de usuario seudónimo utilizado en videojuegos para proteger la identidad real del jugador en salas públicas.',
        paraQueSirve: 'Sirve para identificarte en salas multijugador manteniendo oculto tu nombre verdadero, edad e institución educativa.',
        ejemploPráctico: 'Usar "CyberShield_99" en lugar de tu nombre y apellido reales.',
      },
      {
        termino: 'Ingeniería Social en Discord y Steam',
        definicion: 'Mensajes fraudulentos de bots o usuarios falsos ofreciendo intercambios de elementos (Skins) o probadores beta dudosos.',
        paraQueSirve: 'Sirve para engañar a los jugadores para que autoricen transferencias de objetos valiosos o ingresen sus datos en enlaces clonados.',
        ejemploPráctico: 'Un bot en Discord enviándote un enlace a una prueba gratuita de Steam que suplanta la web oficial.',
      },
    ],
    amenazasYCasos: [
      {
        titulo: 'Robo de Cuentas Valiosas de Videojuegos',
        descripcion: 'Atacantes que cambian el correo de recuperación de tus perfiles de juego para vender tus avances o ítems.',
      },
      {
        titulo: 'Ciberacoso y Acoso en Chats de Voz',
        descripcion: 'Insultos, discriminación o amenazas repetidas por parte de jugadores tóxicos en salas públicas.',
      },
    ],
    reglasDeOro: [
      'Nunca uses tu nombre real, colegio o edad como tu GamerTag.',
      'Jamás confíes en promociones que prometan monedas virtuales gratis a cambio de tu clave.',
      'Activa la verificación en dos pasos (2FA) en todas tus cuentas de juegos y Discord.',
      'Aprende a usar de inmediato las herramientas de Silenciar, Bloquear y Reportar.',
    ],
  },

  auditorias: {
    moduloId: 'auditorias',
    queEsElTema: 'La Auditoría e Higiene Digital Personal aborda las metodologías de auto-diagnóstico tecnológico. Enseña a evaluar el estado de seguridad de computadoras y teléfonos celulares, auditar permisos de aplicaciones, limpiar rastreadores (cookies), administrar redes Wi-Fi y mantener hábitos saludables en el entorno digital.',
    porQueEsFundamental: 'La seguridad no es un producto que se compra una sola vez, sino un proceso continuo de hábitos. Realizar auditorías periódicas permite identificar vulnerabilidades en tus dispositivos antes de que sean explotadas por virus o atacantes.',
    glosario: [
      {
        termino: 'Higiene Digital (Mantenimiento Preventivo)',
        definicion: 'Conjunto de rutinas cotidianas orientadas a mantener limpios, actualizados y ordenados tus dispositivos y cuentas de internet.',
        paraQueSirve: 'Sirve para prevenir fallos técnicos, fugas de privacidad y ralentización de equipos manteniendo buenas prácticas continuas.',
        ejemploPráctico: 'Eliminar aplicaciones en desuso y borrar la memoria caché periódicamente.',
      },
      {
        termino: 'Auditoría de Seguridad (Auto-evaluación)',
        definicion: 'Evaluación sistemática de los puntos de acceso, contraseñas, permisos y configuraciones de un equipo o red.',
        paraQueSirve: 'Sirve para descubrir brechas de seguridad o configuraciones inseguras antes de que las aproveche un virus o pirata informático.',
        ejemploPráctico: 'Revisar una lista de chequeo para verificar si tu teléfono tiene todas las actualizaciones al día.',
      },
      {
        termino: 'Cookies de Rastreo (Trackers Web)',
        definicion: 'Pequeños archivos de datos que los sitios web guardan en tu navegador para seguir tu comportamiento y mostrarte publicidad dirigida.',
        paraQueSirve: 'Sirven a las empresas publicitarias para elaborar un perfil comercial de tus gustos y hábitos de navegación.',
        ejemploPráctico: 'Ver anuncios de zapatos en todas las webs tras buscar zapatos una sola vez.',
      },
      {
        termino: 'Cortafuegos (Firewall)',
        definicion: 'Sistema de defensa que analiza el tráfico de red entrante y saliente para bloquear conexiones no autorizadas hacia tu equipo.',
        paraQueSirve: 'Sirve como un portero digital que frena conexiones sospechosas que intenten ingresar a tu computadora desde internet.',
        ejemploPráctico: 'El aviso de tu sistema operativo que te pregunta si deseas permitir la conexión a internet de un nuevo programa.',
      },
      {
        termino: 'Red Wi-Fi Pública Abierta (Sin Cifrado)',
        definicion: 'Redes de internet sin contraseña en plazas o comercios donde cualquier persona puede interceptar el tráfico no cifrado.',
        paraQueSirve: 'Brinda conexión rápida en sitios públicos, pero exige precauciones ya que cualquiera puede espiar los datos transmitidos.',
        ejemploPráctico: 'Conectarse al Wi-Fi de una plaza y revisar tu cuenta personal o correo sin protección.',
      },
      {
        termino: 'Estrategia de Respaldos 3-2-1 (Backup)',
        definicion: 'Regla de oro para copias de seguridad: tener 3 copias de tus datos en 2 medios diferentes (ej: laptop y pendrive) con 1 copia fuera de la casa (ej: nube).',
        paraQueSirve: 'Sirve para garantizar que jamás perderás tus tareas, fotos o proyectos aunque tu teléfono o laptop sufran un accidente o virus.',
        ejemploPráctico: 'Guardar tus fotos en tu computadora, en un disco externo y en una cuenta de nube cifrada.',
      },
    ],
    amenazasYCasos: [
      {
        titulo: 'Fuga de Datos en Redes Wi-Fi Abiertas',
        descripcion: 'Interceptación de contraseñas por parte de atacantes conectados a la misma red Wi-Fi pública sin protección.',
      },
      {
        titulo: 'Aplicaciones Espía con Permisos Excesivos',
        descripcion: 'Juegos o aplicaciones descargadas en el celular que solicitan acceso no justificado a tus contactos, micrófono y ubicación GPS.',
      },
    ],
    reglasDeOro: [
      'Revisa y elimina al menos una vez al mes las aplicaciones que no utilices.',
      'Evita realizar transacciones o ingresar claves conectado a redes Wi-Fi públicas.',
      'Audita regularmente los permisos de cámara, micrófono y contactos en tu smartphone.',
      'Realiza una copia de seguridad (backup) de tus proyectos escolares al menos una vez por semana.',
    ],
  },
};
