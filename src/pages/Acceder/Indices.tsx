import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Lock, 
  Share2, 
  Download, 
  Gamepad2, 
  CheckSquare, 
  ArrowRight,
  BookOpen,
  Clock,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  HelpCircle,
  FileText,
  Lightbulb,
  Target,
  BookMarked
} from "lucide-react";
import { CATALAGO_MODULOS } from "../../data/datosModulos";
import type { GradoEscolar } from "../../data/datosModulos";
import "./Indices.css";

// Mapeo de iconos Lucide por ID de módulo
const ICONOS_MODULOS: Record<string, React.ReactNode> = {
  'phishing': <ShieldCheck size={28} className="icono-modulo-lucide" />,
  'proteccion-cuentas': <Lock size={28} className="icono-modulo-lucide" />,
  'redes-sociales': <Share2 size={28} className="icono-modulo-lucide" />,
  'software-pirata': <Download size={28} className="icono-modulo-lucide" />,
  'videojuegos': <Gamepad2 size={28} className="icono-modulo-lucide" />,
  'auditorias': <CheckSquare size={28} className="icono-modulo-lucide" />,
};

// Explicaciones detalladas y contextuales por cada tema
const DETALLES_CONTEXTUALES: Record<string, {
  queAprenderas: string;
  porQueEsImportante: string;
  subtemasClave: string[];
}> = {
  'phishing': {
    queAprenderas: "Aprenderás a detectar correos, mensajes de WhatsApp y páginas web fraudulentas que buscan engañarte para robar tus contraseñas y datos personales o institucionales.",
    porQueEsImportante: "El Phishing es la causa del 90% de los incidentes de ciberseguridad a nivel mundial. Saber identificar engaños protege tu dinero, identidad y reputación digital.",
    subtemasClave: [
      "Detección de enlaces sospechosos y dominios falsos (Spoofing)",
      "Smishing (SMS engañosos) y Vishing (llamadas fraudulentas)",
      "Ingeniería Social: la psicología detrás del engaño digital",
      "Leyes y reportes institucionales ante ciberestafas"
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
    ]
  }
};

const GRADOS: GradoEscolar[] = ['1ro', '2do', '3ro', '4to', '5to'];

const Indices: React.FC = () => {
    const modulosLista = Object.values(CATALAGO_MODULOS);

    return (
        <main className="pagina-indices">
            {/* HERO SECTION */}
            <header className="hero-acceso-virtual">
                <div className="contenedor-hero-virtual">
                    <div className="contenedor-texto-hero">
                        <span className="badge-hero">
                            <GraduationCap size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            Plataforma Educativa Sociotecnológica
                        </span>
                        <h1>Índice Contextual de Ciberseguridad</h1>
                        <p>
                            Guía completa e interactiva sobre los temas de seguridad digital abordados en el 
                            L.B. "Antonio Lemus Pérez". Conoce qué enseña cada módulo y accede directamente a las lecciones de tu año escolar.
                        </p>
                    </div>
                    <div className="contenedor-visual-hero">
                        <div className="tarjeta-flotante-hero">
                            <BookOpen size={36} color="#38bdf8" />
                            <div className="info-tarjeta">
                                <h3>6 Temáticas Clave</h3>
                                <p>5 Niveles Académicos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* SECCIÓN INTRODUCTORIA: ¿A QUÉ SE DEDICA ESTE PROYECTO? */}
            <section className="seccion-info ciberseguridad-que-es">
                <div className="contenedor-seccion">
                    <h2>¿A qué se dedica esta plataforma?</h2>
                    <p className="texto-destacado">
                        Este portal está diseñado para desarrollar una cultura de prevención digital en los estudiantes, 
                        docentes y familias del L.B. Antonio Lemus Pérez en Cumaná, Estado Sucre.
                    </p>
                    <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7' }}>
                        A través de un enfoque pedagógico progresivo, dividimos la formación en <strong>6 áreas fundamentales</strong>. 
                        En cada módulo encontrarás lecciones teóricas, análisis de casos reales de Venezuela y el mundo, y actividades 
                        prácticas adaptadas exactamente al año escolar en el que estudias.
                    </p>
                </div>
            </section>

            {/* SECCIÓN DE MÓDULOS CON EXPLICACIONES CONTEXTUALES Y ENLACES DIRECTOS */}
            <section className="seccion-modulos">
                <div className="contenedor-seccion">
                    <div className="encabezado-modulos">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <FileText size={28} color="#0284c7" />
                            <h2 style={{ margin: 0 }}>Índice de Temas y Módulos de Estudio</h2>
                        </div>
                        <p style={{ color: '#64748b' }}>
                            Selecciona cualquier módulo para leer su descripción completa o haz clic en tu año escolar para entrar directamente a la lección:
                        </p>
                    </div>

                    <div className="grid-modulos">
                        {modulosLista.map((mod) => {
                            const detalle = DETALLES_CONTEXTUALES[mod.id] || {
                                queAprenderas: mod.resumenGeneral,
                                porQueEsImportante: "Fomenta la prevención digital.",
                                subtemasClave: []
                            };

                            return (
                                <article key={mod.id} className="tarjeta-modulo">
                                    <div>
                                        {/* Cabecera del Módulo */}
                                        <div className="cabecera-tarjeta">
                                            <span className="icono-modulo-wrapper">
                                                {ICONOS_MODULOS[mod.id] || <ShieldCheck size={28} />}
                                            </span>
                                            <div>
                                                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#0284c7', fontWeight: 700 }}>
                                                    {mod.nombreCategoria}
                                                </span>
                                                <h3 style={{ margin: '0.2rem 0 0 0', fontSize: '1.2rem', color: '#0f172a' }}>{mod.titulo}</h3>
                                            </div>
                                        </div>

                                        {/* Resumen Contextual */}
                                        <p style={{ fontWeight: 500, color: '#334155', marginBottom: '0.75rem' }}>
                                            {mod.resumenGeneral}
                                        </p>

                                        {/* Explicación Detallada: ¿Qué aprenderás? */}
                                        <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '8px', borderLeft: '3px solid #0284c7', marginBottom: '1rem' }}>
                                            <strong style={{ fontSize: '0.85rem', color: '#0369a1', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                                                <Lightbulb size={16} /> ¿Qué aprenderás en este tema?
                                            </strong>
                                            <p style={{ fontSize: '0.88rem', margin: 0, color: '#475569' }}>
                                                {detalle.queAprenderas}
                                            </p>
                                        </div>

                                        {/* ¿Por qué es importante? */}
                                        <div style={{ marginBottom: '1rem' }}>
                                            <strong style={{ fontSize: '0.85rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                                                <Target size={16} color="#0284c7" /> Importancia en tu vida digital:
                                            </strong>
                                            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                                                {detalle.porQueEsImportante}
                                            </p>
                                        </div>

                                        {/* Lista de Subtemas Destacados */}
                                        <div style={{ marginBottom: '1.25rem' }}>
                                            <strong style={{ fontSize: '0.85rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.4rem' }}>
                                                <BookMarked size={16} color="#0284c7" /> Lecciones y Tópicos Clave:
                                            </strong>
                                            <ul className="lista-subtemas-indice">
                                                {detalle.subtemasClave.map((subtema, idx) => (
                                                    <li key={idx}>
                                                        <CheckCircle2 size={14} color="#0284c7" style={{ flexShrink: 0 }} />
                                                        <span>{subtema}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Selector Rápido de Año Escolar para este módulo */}
                                        <div className="selector-grados-rapido">
                                            <span className="selector-grados-rapido-titulo">
                                                Entrar a este módulo según tu año:
                                            </span>
                                            <div className="grupo-botones-grados-rapido">
                                                {GRADOS.map((g) => (
                                                    <Link 
                                                        key={g} 
                                                        to={`/modulos/info/${mod.id}/${g}`}
                                                        className="btn-grado-mini"
                                                        title={`Ir a ${mod.titulo} para ${g} Año`}
                                                    >
                                                        {g} Año
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Metadatos */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: '#64748b', marginBottom: '1.25rem' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                <Clock size={14} /> {mod.duracionEstimada}
                                            </span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                <BookOpen size={14} /> 5 Grados Disponibles
                                            </span>
                                        </div>
                                    </div>

                                    {/* Botón Principal al Pre-Lobby del Módulo */}
                                    <Link 
                                        to={`/modulos/info/${mod.id}/1ro`} 
                                        className="boton-acceso-modulo" 
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                    >
                                        Explorar Presentación del Módulo <ArrowRight size={16} />
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECCIÓN FINAL CON PREGUNTAS Y NAVEGACIÓN A MÓDULOS GENERALES */}
            <section className="seccion-info ciberseguridad-importancia">
                <div className="contenedor-seccion" style={{ textAlign: 'center' }}>
                    <HelpCircle size={36} color="#0284c7" style={{ marginBottom: '1rem' }} />
                    <h2>¿Dudas sobre cómo empezar?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem auto', color: '#475569' }}>
                        También puedes visitar el portal general de módulos para ver una vista panorámica de todas las tarjetas de grados escolares.
                    </p>
                    <Link to="/modulos" className="boton-acceso-modulo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.8rem', fontSize: '1rem' }}>
                        Ir a Selección General de Grado <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Indices;