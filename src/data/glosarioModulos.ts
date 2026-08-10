/**
 * ============================================================================
 * GLOSARIO Y CONTEXTO EXTENDIDO POR MÓDULO DE CIBERSEGURIDAD
 * Liceo Bolivariano Antonio Lemus Pérez
 * ============================================================================
 */

export interface TerminoGlosario {
  termino: string;
  definicion: string;
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
    queEsElTema: 'El Phishing e Ingeniería Social abarca un conjunto de técnicas cibernéticas fraudulentas donde atacantes se disfrazan de entidades legítimas (bancos, liceos, redes sociales o servicios públicos) para engañar al usuario y lograr que este entregue voluntariamente información sensible como contraseñas, credenciales institucionales o datos financieros.',
    porQueEsFundamental: 'El 90% de las violaciones de seguridad en internet comienzan con un correo o mensaje engañoso. Entender la psicología del engaño digital es la primera línea de defensa para proteger la identidad del estudiante y la red institucional.',
    glosario: [
      {
        termino: 'Phishing',
        definicion: 'Técnica de suplantación de identidad mediante correos o mensajes masivos engañosos diseñados para engañar al usuario.',
        ejemploPráctico: 'Un correo que dice ser de tu plataforma de estudios pidiéndote confirmar tu clave urgentemente.',
      },
      {
        termino: 'Spear Phishing',
        definicion: 'Ataque de phishing altamente personalizado dirigido a una persona específica o grupo escolar utilizando datos detallados del objetivo.',
        ejemploPráctico: 'Un mensaje con tu nombre completo y nombre de tu profesor pidiéndote abrir un archivo PDF infectado.',
      },
      {
        termino: 'Smishing',
        definicion: 'Variante del Phishing realizada exclusivamente a través de mensajes de texto (SMS) o aplicaciones de mensajería instantánea como WhatsApp.',
        ejemploPráctico: 'Un SMS: "Su paquete del liceo fue retenido, ingrese a este enlace para verificar".',
      },
      {
        termino: 'Vishing',
        definicion: 'Phishing realizado mediante llamadas telefónicas fraudulentas utilizando voz humana o inteligencia artificial para suplantar identidades.',
        ejemploPráctico: 'Una llamada donde alguien dice ser un técnico del banco pidiéndote un código enviado a tu teléfono.',
      },
      {
        termino: 'Spoofing (Suplantación de Dominio)',
        definicion: 'Técnica que altera la dirección web o el remitente para imitar exactamente la apariencia de un sitio web oficial.',
        ejemploPráctico: 'Una dirección falsa como "www.lemusperez-liceo.com" en lugar del dominio oficial.',
      },
      {
        termino: 'Ingeniería Social',
        definicion: 'La manipulación psicológica de las personas para que ejecuten acciones o divulguen información confidencial en lugar de vulnerar sistemas.',
        ejemploPráctico: 'Crear una falsa urgencia como "Su cuenta será suspendida en 10 minutos si no inicia sesión".',
      },
    ],
    amenazasYCasos: [
      {
        titulo: 'Correos de Actualización Urgente de Claves',
        descripcion: 'Simulaciones de correos institucionales donde se exige validar datos en un sitio falso.',
      },
      {
        titulo: 'Premios y Concursos Falsos en Redes Sociales',
        descripcion: 'Mensajes masivos sobre sorteos de teléfonos o becas que solicitan datos personales para participar.',
      },
    ],
    reglasDeOro: [
      'Inspecciona siempre la dirección URL completa del navegador antes de escribir tu clave.',
      'Nunca hagas clic en enlaces recibidos en correos de remitentes no verificados.',
      'Duda de cualquier mensaje que exija una acción urgente o prometa premios extravagantes.',
      'Ante cualquier mensaje sospechoso, consulta directamente con tus profesores o autoridades del liceo.',
    ],
  },

  'proteccion-cuentas': {
    moduloId: 'proteccion-cuentas',
    queEsElTema: 'La Protección de Cuentas comprende las metodologías, estándares y tecnologías necesarias para controlar quién tiene acceso a tus perfiles digitales. Abarca desde la creación de contraseñas resistentes hasta mecanismos avanzados como la verificación en dos pasos (2FA), la biometría y las llaves de acceso (Passkeys).',
    porQueEsFundamental: 'Tus cuentas representan tu identidad en el mundo digital. Si un atacante vulnera tu cuenta principal de correo o redes, puede suplantarte, acceder a tus archivos y comprometer las cuentas de tus contactos.',
    glosario: [
      {
        termino: 'Autenticación de Dos Factores (2FA)',
        definicion: 'Capa adicional de seguridad que requiere dos tipos de pruebas para iniciar sesión: algo que sabes (contraseña) y algo que tienes (un código en tu celular).',
        ejemploPráctico: 'Ingresar tu contraseña y luego un código temporal de 6 dígitos enviado a tu app autenticadora.',
      },
      {
        termino: 'Contraseña Robusta (Passphrase)',
        definicion: 'Secuencia larga de caracteres (más de 12 a 16 caracteres) que combina letras mayúsculas, minúsculas, números y símbolos para resistir ataques automatizados.',
        ejemploPráctico: 'Usar una frase como "Liceo#Lemus2026!Seguro" en lugar de "contraseña123".',
      },
      {
        termino: 'Gestor de Contraseñas',
        definicion: 'Aplicación cifrada que genera, almacena y autocompleta contraseñas seguras y únicas para cada uno de tus sitios web.',
        ejemploPráctico: 'Usar herramientas como Bitwarden para no tener que memorizar decenas de claves complejas.',
      },
      {
        termino: 'Ataque de Fuerza Bruta',
        definicion: 'Método automatizado utilizado por hackers para adivinar contraseñas probando millones de combinaciones por segundo.',
        ejemploPráctico: 'Un programa probando todas las palabras del diccionario hasta dar con tu clave corta.',
      },
      {
        termino: 'Passkeys (Llaves de Paso)',
        definicion: 'Estándar moderno de autenticación criptográfica sin contraseña que utiliza tu rostro, huella dactilar o PIN del dispositivo para validar el acceso.',
        ejemploPráctico: 'Desbloquear tu sesión en una web usando el lector de huellas de tu teléfono móvil.',
      },
      {
        termino: 'Filtración de Datos (Data Breach)',
        definicion: 'Incidente donde datos confidenciales de una empresa o plataforma son robados y expuestos públicamente en internet.',
        ejemploPráctico: 'Cuando un sitio de juegos sufre un hackeo y las claves de sus usuarios terminan filtradas.',
      },
    ],
    amenazasYCasos: [
      {
        titulo: 'Reutilización de Contraseñas en Múltiples Sitios',
        descripcion: 'Si usas la misma clave en 10 sitios y uno sufre un hackeo, los atacantes probarán esa clave en tus demás cuentas.',
      },
      {
        titulo: 'Inicios de Sesión en Dispositivos Públicos',
        descripcion: 'Olvidar cerrar sesión en computadoras compartidas o cybercafés dejando la cuenta abierta.',
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
        termino: 'Huella Digital',
        definicion: 'El rastro o conjunto de datos e interacciones que dejas en internet a través de tus publicaciones, comentarios, me gusta y búsquedas.',
        ejemploPráctico: 'Tus fotos antiguas, comentarios en foros y registros que pueden ser vistos por cualquier persona años después.',
      },
      {
        termino: 'Netiqueta',
        definicion: 'Conjunto de normas de comportamiento y respeto mutuo que rigen la convivencia sana en entornos virtuales y redes sociales.',
        ejemploPráctico: 'Evitar escribir en mayúsculas sostenidas (que equivale a gritar) y respetar las opiniones ajenas.',
      },
      {
        termino: 'Ciberacoso (Ciberbullying)',
        definicion: 'Uso de medios digitales para intimidar, hostigar, humillar o amenazar de forma repetida a un compañero o persona.',
        ejemploPráctico: 'Crear memes malintencionados o difundir rumores falsos en grupos de mensajería.',
      },
      {
        termino: 'Grooming',
        definicion: 'Proceso de manipulación ejecutado por un adulto que crea un perfil falso para ganarse la confianza de un menor con fines de abuso.',
        ejemploPráctico: 'Alguien que simula tener tu misma edad en redes para pedirte fotos personales o coordinar encuentros.',
      },
      {
        termino: 'Geotagging (Geolocalización)',
        definicion: 'Metadatos adjuntos a fotografías o publicaciones que revelan las coordenadas geográficas exactas de dónde fueron tomadas.',
        ejemploPráctico: 'Publicar una foto en la fachada de tu casa donde se lee la calle o se guarda el GPS automático.',
      },
      {
        termino: 'Derecho al Olvido',
        definicion: 'El derecho de un ciudadano a solicitar que se eliminen o desvinculen enlaces con información personal obsoleta o dañina en buscadores.',
        ejemploPráctico: 'Solicitar a Google que no muestre un sitio con información falsa sobre tu persona.',
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
    queEsElTema: 'El estudio de los Riesgos del Software Pirata analiza los peligros de descargar e instalar programas modificados, juegos "crackeados", activadores ilegales o extensiones no oficiales. Explora la naturaleza del malware, virus informáticos, ransomware y las alternativas seguras basadas en Software Libre.',
    porQueEsFundamental: 'Los programas piratas son la principal vía de distribución de virus destructivos en computadoras personales y escolares. Un solo ejecutable modificado puede destruir tus proyectos académicos o secuestrar los archivos de tu hogar.',
    glosario: [
      {
        termino: 'Malware (Software Malicioso)',
        definicion: 'Término general para cualquier programa informático diseñado con intenciones dañinas, como robar datos, espiar o destruir sistemas.',
        ejemploPráctico: 'Virus, troyanos, gusanos, spyware y ransomware.',
      },
      {
        termino: 'Troyano (Trojan)',
        definicion: 'Programa dañino que se camufla como un archivo o juego legítimo para engañar al usuario e instalar un acceso secreto a su equipo.',
        ejemploPráctico: 'Un instalador de un juego famoso que al ejecutarse instala en segundo plano un registrador de teclas.',
      },
      {
        termino: 'Ransomware',
        definicion: 'Malware destructivo que encripta (bloquea con contraseña) todos tus archivos personales y exige el pago de un rescate para desbloquearlos.',
        ejemploPráctico: 'Un aviso que dice "Sus fotos y documentos fueron cifrados. Pague 500$ para obtener la clave".',
      },
      {
        termino: 'Crack / Keygen',
        definicion: 'Herramienta no oficial creada para eludir la protección de licencias de un programa de pago. Casi siempre contiene virus ocultos.',
        ejemploPráctico: 'Un archivo `.exe` descargado para activar una suite de oficina sin comprar la licencia.',
      },
      {
        termino: 'Cryptojacking',
        definicion: 'Uso no autorizado de los recursos de tu procesador (CPU) y tarjeta gráfica (GPU) para minar criptomonedas para el atacante.',
        ejemploPráctico: 'Tu computadora se vuelve extremadamente lenta y ventiladores ruidosos incluso sin estar jugando.',
      },
      {
        termino: 'Software Libre y FOSS',
        definicion: 'Programas informáticos que respetan la libertad del usuario, permitiendo su uso, estudio, modificación y redistribución gratuita y segura.',
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
    queEsElTema: 'La Ciberseguridad en Videojuegos examina las amenazas digitales que afectan a los jugadores en plataformas online, comunidades de chat (Discord, Twitch, Steam) y servidores multijugador. Incluye la prevención de estafas con activos virtuales, trampas (cheats) maliciosas, robo de cuentas y ataques de denegación de servicio.',
    porQueEsFundamental: 'Los videojuegos son hoy plataformas sociales multimillonarias donde los jóvenes pasan horas. El robo de cuentas de juegos, fraudes con tarjetas de representantes y el ciberacoso en salas de voz son riesgos cotidianos que requieren educación preventiva.',
    glosario: [
      {
        termino: 'Doxing (Doxxing)',
        definicion: 'Práctica maliciosa de rastrear, investigar y publicar información personal y privada de un usuario en internet sin su consentimiento.',
        ejemploPráctico: 'Publicar el nombre real, dirección de la casa y liceo de un rival tras perder una partida.',
      },
      {
        termino: 'Cheats / Hacks Infectados',
        definicion: 'Programas de trampas promocionados para ganar ventajas en juegos que contienen virus diseñados para robar sesiones de usuario.',
        ejemploPráctico: 'Descargar un "Aimbot" que termina robando la sesión de tu cuenta de correo y Discord.',
      },
      {
        termino: 'Estafas de Monedas Virtuales',
        definicion: 'Engaños en sitios no oficiales que prometen regalar divisas del juego (Robux, Pavos, Diamantes) a cambio de datos personales o contraseñas.',
        ejemploPráctico: 'Páginas falsas que dicen "Ingresa tu usuario y contraseña para recibir 5000 diamantes gratis".',
      },
      {
        termino: 'Ataques DDoS (Denegación de Servicio)',
        definicion: 'Envío masivo de tráfico falso a la conexión de internet de un usuario para saturar su router y desconectarlo de una partida.',
        ejemploPráctico: 'Sufrir caídas de internet arbitrarias mientras juegas un torneo por revelar tu IP.',
      },
      {
        termino: 'GamerTag / Apodo Digital',
        definicion: 'Nombre de usuario seudónimo utilizado en videojuegos para proteger la identidad real del jugador en salas públicas.',
        ejemploPráctico: 'Usar "CyberShield_99" en lugar de tu nombre y apellido reales.',
      },
      {
        termino: 'Ingeniería Social en Discord y Steam',
        definicion: 'Mensajes fraudulentos de bots o usuarios falsos ofreciendo intercambios de elementos (Skins) o probadores beta dudosos.',
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
        termino: 'Higiene Digital',
        definicion: 'Conjunto de rutinas cotidianas orientadas a mantener limpios, actualizados y ordenados tus dispositivos y cuentas de internet.',
        ejemploPráctico: 'Eliminar aplicaciones en desuso y borrar la caché periódicamente.',
      },
      {
        termino: 'Auditoría de Seguridad',
        definicion: 'Evaluación sistemática de los puntos de acceso, contraseñas, permisos y configuraciones de un equipo o red.',
        ejemploPráctico: 'Revisar una lista de chequeo para verificar si tu teléfono tiene todas las actualizaciones al día.',
      },
      {
        termino: 'Cookies de Rastreo',
        definicion: 'Pequeños archivos de datos que los sitios web guardan en tu navegador para seguir tu comportamiento y mostrarte publicidad dirigida.',
        ejemploPráctico: 'Ver anuncios de zapatos en todas las webs tras buscar zapatos una sola vez.',
      },
      {
        termino: 'Cortafuegos (Firewall)',
        definicion: 'Sistema de defensa que analiza el tráfico de red entrante y saliente para bloquear conexiones no autorizadas hacia tu equipo.',
        ejemploPráctico: 'El aviso de Windows que te pregunta si deseas permitir la conexión a internet de un nuevo programa.',
      },
      {
        termino: 'Red Wi-Fi Pública Abierta',
        definicion: 'Redes de internet sin contraseña en plazas o comercios donde cualquier persona puede interceptar el tráfico no cifrado.',
        ejemploPráctico: 'Conectarse al Wi-Fi de una plaza y revisar tu cuenta bancaria o correo sin cifrado.',
      },
      {
        termino: 'Estrategia de Respaldos 3-2-1',
        definicion: 'Regla de oro para copias de seguridad: tener 3 copias de tus datos en 2 medios diferentes con 1 copia fuera de la casa.',
        ejemploPráctico: 'Guardar tus fotos en tu laptop, en un disco duro externo y en una cuenta de nube cifrada.',
      },
    ],
    amenazasYCasos: [
      {
        titulo: 'Fuga de Datos en Redes Wi-Fi Abiertas',
        descripcion: 'Interceptación de contraseñas por parte de atacantes conectados a la misma red Wi-Fi pública sin protección.',
      },
      {
        titulo: 'Aplicaciones Espía con Permisos Excesivos',
        descripcion: 'Juegos o linternas descargadas en el celular que solicitan acceso a tus contactos, micrófono y ubicación.',
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
