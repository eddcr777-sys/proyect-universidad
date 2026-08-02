import React from "react";
import { Link } from "react-router-dom"; // O reemplaza por <a> si no usas react-router
import "./Indices.css";
import FormularioModulos from "../../components/comunes/Formularios/CampoTexto";

const Indices: React.FC = () => {
    // Definición de los módulos con sus rutas correspondientes
    const modulos = [
        {
            id: "phishing",
            titulo: "Phishing y Engaños Digitales",
            descripcion: "Aprende a identificar correos, mensajes y sitios web falsos creados para robar tu información personal.",
            ruta: "/modulos/phishing",
            icono: "🎣"
        },
        {
            id: "proteccion-cuentas",
            titulo: "Protección de Cuentas y Contraseñas",
            descripcion: "Estrategias esenciales para crear claves robustas y activar la verificación en dos pasos (2FA).",
            ruta: "/modulos/proteccion-cuentas",
            icono: "🔑"
        },
        {
            id: "redes-sociales",
            titulo: "Privacidad en Redes Sociales",
            descripcion: "Configura tus perfiles para proteger tu huella digital y evitar la exposición innecesaria de datos.",
            ruta: "/modulos/redes-sociales",
            icono: "📱"
        },
        {
            id: "software-pirata",
            titulo: "Riesgos del Software Pirata",
            descripcion: "Descubre los peligros ocultos tras las descargas no oficiales: malware, troyanos y vulnerabilidades.",
            ruta: "/modulos/software-pirata",
            icono: "⚠️"
        },
        {
            id: "videojuegos",
            titulo: "Ciberseguridad en Videojuegos",
            descripcion: "Protege tus cuentas de juego, compras en línea y evita estafas dentro de las comunidades gamer.",
            ruta: "/modulos/videojuegos",
            icono: "🎮"
        },
        {
            id: "auditorias",
            titulo: "Auditorías de Seguridad",
            descripcion: "Comprende cómo se evalúa la seguridad de los sistemas para diagnosticar y corregir debilidades.",
            ruta: "/modulos/auditorias",
            icono: "🛡️"
        }
    ];

    return (
        <main className="pagina-indices">
            {/* HERO SECTION */}
            <header className="hero-acceso-virtual">
                <div className="contenedor-hero-virtual">
                    <div className="contenedor-texto-hero">
                        <span className="badge-hero">Educación y Prevención</span>
                        <h1>Centro de Acceso Virtual</h1>
                        <p>
                            Tu espacio interactivo para desarrollar habilidades digitales seguras 
                            y proteger tu presencia en el entorno cibernético.
                        </p>
                    </div>
                    <div className="contenedor-visual-hero">
                        <div className="tarjeta-flotante-hero">
                            <span className="icono-tarjeta">🔒</span>
                            <div className="info-tarjeta">
                                <h3>Nivel de Protección</h3>
                                <p>Aprende las buenas prácticas hoy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* SECCIÓN 1: QUÉ ES LA CIBERSEGURIDAD */}
            <section className="seccion-info ciberseguridad-que-es">
                <div className="contenedor-seccion">
                    <h2>¿Qué es la Ciberseguridad?</h2>
                    <p className="texto-destacado">
                        La ciberseguridad es el conjunto de prácticas, tecnologías y procesos diseñados 
                        para proteger sistemas, redes, dispositivos y datos contra accesos no autorizados, 
                        ataques cibernéticos o daños.
                    </p>
                    <p>
                        No se trata solo de herramientas complejas para ingenieros; abarca desde la forma en 
                        que creas una contraseña hasta cómo identificas un mensaje sospechoso en tu teléfono. 
                        Es el escudo protector de nuestra vida cotidiana en el entorno digital.
                    </p>
                </div>
            </section>

            {/* SECCIÓN 2: POR QUÉ ES IMPORTANTE */}
            <section className="seccion-info ciberseguridad-importancia">
                <div className="contenedor-seccion">
                    <h2>¿Por qué es vital en la actualidad?</h2>
                    <div className="grid-beneficios">
                        <div className="tarjeta-beneficio">
                            <span className="icono">👤</span>
                            <h3>Protección de la Identidad</h3>
                            <p>Evita la suplantación de identidad y el mal uso de tu información personal o financiera.</p>
                        </div>
                        <div className="tarjeta-beneficio">
                            <span className="icono">💬</span>
                            <h3>Privacidad en las Comunicaciones</h3>
                            <p>Mantiene tus conversaciones, fotos y archivos compartidos fuera del alcance de terceros.</p>
                        </div>
                        <div className="tarjeta-beneficio">
                            <span className="icono">🛑</span>
                            <h3>Prevención de Extorsiones y Fraudis</h3>
                            <p>Reduce drásticamente el riesgo de caer en engaños económicos o secuestro de datos (ransomware).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3: CONEXIÓN CON EL PROYECTO */}
            <section className="seccion-info conexion-proyecto">
                <div className="contenedor-seccion">
                    <div className="caja-enfoque">
                        <h2>Nuestra Misión con este Centro de Acceso</h2>
                        <p>
                            Creemos firmemente que la mejor defensa cibernética es el <strong>conocimiento</strong>. 
                            Este proyecto nace para cerrar la brecha entre la teoría de la seguridad informática 
                            y el uso diario que le damos a la tecnología.
                        </p>
                        <p>
                            Queremos brindarte una guía clara, práctica y libre de modismos técnicos incomprensibles. 
                            A través de nuestros módulos interactivos, adquirirás el criterio necesario para navegar, 
                            comunicarte y trabajar en la red de forma consciente y segura.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4: MÓDULOS DE APRENDIZAJE */}
            <section className="seccion-modulos">
                <div className="contenedor-seccion">
                    <div className="encabezado-modulos">
                        <h2>Módulos de Formación</h2>
                        <p>Explora cada uno de los temas preparados para fortalecer tu cultura digital:</p>
                    </div>

                    <div className="grid-modulos">
                        {modulos.map((modulo) => (
                            <article key={modulo.id} className="tarjeta-modulo">
                                <div className="cabecera-tarjeta">
                                    <span className="icono-modulo">{modulo.icono}</span>
                                    <h3>{modulo.titulo}</h3>
                                </div>
                                <p>{modulo.descripcion}</p>
                                <Link to={modulo.ruta} className="boton-acceso-modulo">
                                    Ingresar al Módulo ➔
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="contenedor-seccion">
                    <div className="encabezado-seccion">
                        <h2>Te invitamos a los modulos</h2>
                        <p>Explora cada uno de los temas preparados para fortalecer tu cultura digital:</p>
                        <FormularioModulos />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Indices;