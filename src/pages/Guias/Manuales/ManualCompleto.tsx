import React, { useState } from 'react';
import {
  BookOpen,
  Download,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Lock,
  Share2,
  Gamepad2,
  CheckSquare,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Printer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroCiberseguridad from '../../../components/comunes/HeroCiberseguridad/HeroCiberseguridad';
import './ManualCompleto.css';

interface ModuloManual {
  id: string;
  num: string;
  titulo: string;
  icono: React.ReactNode;
  resumen: string;
  contenidosClave: string[];
}

const MODULOS_MANUAL: ModuloManual[] = [
  {
    id: 'phishing',
    num: '01',
    titulo: 'Phishing e Ingeniería Social',
    icono: <ShieldCheck size={24} />,
    resumen: 'Identificación y prevención de correos fraudulentos, mensajes engañosos (SMS/WhatsApp) y suplantación de identidad institucional.',
    contenidosClave: [
      'Análisis de remitentes y URLs sospechosas.',
      'Técnicas de manipulación psicológica e ingeniería social.',
      'Protocolo de reporte inmediato de incidentes de phishing.'
    ]
  },
  {
    id: 'proteccion-cuentas',
    num: '02',
    titulo: 'Protección de Cuentas y Contraseñas',
    icono: <Lock size={24} />,
    resumen: 'Gestión segura de credenciales académicas y personales, uso de gestores de contraseñas y autenticación de doble factor (2FA).',
    contenidosClave: [
      'Creación de frases de paso robustas.',
      'Configuración e importancia del factor de doble autenticación (2FA).',
      'Riesgos del almacenamiento de credenciales en navegadores públicos.'
    ]
  },
  {
    id: 'redes-sociales',
    num: '03',
    titulo: 'Privacidad y Redes Sociales',
    icono: <Share2 size={24} />,
    resumen: 'Configuración de privacidad en plataformas digitales, control de la huella digital y prevención de ciberacoso escolar.',
    contenidosClave: [
      'Auditoría de ajustes de privacidad en redes sociales.',
      'Prevención del oversharing y protección de la huella digital.',
      'Estrategias contra el grooming y la ciberviolencia.'
    ]
  },
  {
    id: 'software-pirata',
    num: '04',
    titulo: 'Software Libre vs. Software Pirata',
    icono: <Download size={24} />,
    resumen: 'Impacto del malware oculto en instaladores no oficiales y promoción del software libre como alternativa ética y segura.',
    contenidosClave: [
      'Vectores de infección por troyanos en software pirata.',
      'Filosofía y ventajas de las licencias de software libre.',
      'Repositorios oficiales y verificación de integridad de descargas.'
    ]
  },
  {
    id: 'videojuegos',
    num: '05',
    titulo: 'Seguridad en Videojuegos y Plataformas en Línea',
    icono: <Gamepad2 size={24} />,
    resumen: 'Manejo de compras dentro del juego, prevención de estafas de ítems virtuales y protección del tiempo de pantalla.',
    contenidosClave: [
      'Identificación de microtransacciones engañosas.',
      'Protección de datos de pago en consolas y PC.',
      'Hábitos saludables de uso e higiene digital gamer.'
    ]
  },
  {
    id: 'auditorias',
    num: '06',
    titulo: 'Auditoría Digital Escolar y Ética TI',
    icono: <CheckSquare size={24} />,
    resumen: 'Procedimientos básicos de revisión de seguridad en equipos institucionales y formación en ética tecnológica.',
    contenidosClave: [
      'Lista de chequeo de hardening básico en computadoras del liceo.',
      'Responsabilidad legal y ética en el uso de la red escolar.',
      'Formación de líderes de ciberseguridad estudiantil.'
    ]
  }
];

export const ManualCompleto: React.FC = () => {
  const [moduloActivo, setModuloActivo] = useState<string>('phishing');

  const manejarImpresion = () => {
    window.print();
  };

  const enlacesSubNav = [
    { label: 'Inicio Proyecto', ruta: '/proyectos/ciberseguridad' },
    { label: 'Catálogo por Grado', ruta: '/proyectos/ciberseguridad/modulos' },
    { label: 'Justificación', ruta: '/proyectos/ciberseguridad/justificacion' },
    { label: 'Índices y Temario', ruta: '/proyectos/ciberseguridad/indices' },
    { label: 'Guía Docentes', ruta: '/proyectos/ciberseguridad/guias/docentes' },
    { label: 'Guía Padres', ruta: '/proyectos/ciberseguridad/guias/padres' },
    { label: 'Manual Completo', ruta: '/proyectos/ciberseguridad/guias/manual-completo' },
  ];

  return (
    <div className="manual-completo-pagina pagina-ciberseguridad">
      {/* HERO DE CIBERSEGURIDAD DEL MANUAL COMPLETO */}
      <HeroCiberseguridad
        categoria="DOCUMENTO OFICIAL DE CIBERSEGURIDAD"
        titulo="MANUAL COMPLETO DE"
        tituloResaltado="SEGURIDAD Y CONCIENCIA DIGITAL"
        descripcion="Compilación pedagógica integral para el Liceo Bolivariano Antonio Lemus Pérez. Contiene los 6 módulos normativos y guías metodológicas."
        imagenFondo="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Imprimir / Descargar Manual',
            href: '#imprimir',
            icono: <Printer size={18} />,
          },
        ]}
      />

      <main className="contenedor-manual">
        {/* ENCABEZADO Y BARRA DE ACCIÓN */}
        <section className="seccion-manual-barra">
          <div className="info-manual-encabezado">
            <h2>Índice General de Módulos Pedagógicos</h2>
            <p>Selecciona una unidad tematica para revisar su síntesis metodológica y contenidos clave.</p>
          </div>

          <button onClick={manejarImpresion} className="btn-imprimir-manual">
            <Printer size={18} /> Imprimir / Guardar en PDF
          </button>
        </section>

        {/* NAVEGACIÓN Y SELECCIÓN DE MÓDULOS */}
        <section className="seccion-modulos-manual">
          <div className="grid-selector-manual">
            {MODULOS_MANUAL.map((mod) => (
              <div
                key={mod.id}
                className={`item-selector-manual ${moduloActivo === mod.id ? 'activo' : ''}`}
                onClick={() => setModuloActivo(mod.id)}
              >
                <div className="icono-mod-manual">{mod.icono}</div>
                <div className="textos-mod-manual">
                  <span className="num-mod-manual">Módulo {mod.num}</span>
                  <h4>{mod.titulo}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* DETALLE DEL MÓDULO SELECCIONADO */}
          {MODULOS_MANUAL.filter((m) => m.id === moduloActivo).map((mod) => (
            <div key={mod.id} className="tarjeta-detalle-manual animacion-entrada-ciber">
              <div className="cabecera-detalle-manual">
                <span className="badge-num-manual">Módulo {mod.num}</span>
                <h3>{mod.titulo}</h3>
              </div>

              <p className="resumen-detalle-manual">{mod.resumen}</p>

              <div className="bloque-contenidos-manual">
                <h4><BookOpen size={18} /> Ejes Temáticos Fundamentales:</h4>
                <ul>
                  {mod.contenidosClave.map((punto, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={16} className="icono-check-manual" />
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cta-modulo-manual">
                <Link to="/proyectos/ciberseguridad/modulos" className="btn-acceder-modulo-manual">
                  Ver lecciones interactivas de este módulo <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* NAVEGACIÓN INFERIOR */}
        <div className="pie-manual-acciones">
          <Link to="/proyectos/ciberseguridad/guias/docentes" className="btn-manual-retorno">
            <ArrowLeft size={18} /> Ir a Guía Docentes
          </Link>
          <Link to="/proyectos/ciberseguridad/guias/padres" className="btn-manual-retorno">
            Ir a Guía Padres <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ManualCompleto;
