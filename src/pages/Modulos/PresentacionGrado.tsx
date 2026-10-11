import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  School, 
  Clock, 
  CheckSquare, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Lock,
  Share2,
  Download,
  Gamepad2,
  BookOpen
} from 'lucide-react';
import { CATALAGO_MODULOS, DICCIONARIO_GRADOS } from '../../data/datosModulos';
import type { GradoEscolar } from '../../data/datosModulos';
import Boton from '../../components/comunes/Botones/Boton';
import HeroCiberseguridad from '../../components/comunes/HeroCiberseguridad/HeroCiberseguridad';
import imgHero3 from '../../assets/pbk-Hero-3.jpg';
import './PresentacionGrado.css';

// Mapeo de iconos Lucide por módulo
const ICONOS_MODULOS: Record<string, React.ReactNode> = {
  'phishing': <ShieldCheck size={28} />,
  'proteccion-cuentas': <Lock size={28} />,
  'redes-sociales': <Share2 size={28} />,
  'software-pirata': <Download size={28} />,
  'videojuegos': <Gamepad2 size={28} />,
  'auditorias': <CheckSquare size={28} />,
};

/**
 * Pantalla de Presentación del Grado Escolar (1ro a 5to Año).
 * Muestra el catálogo de módulos pedagógicos adaptados al año seleccionado.
 */
export const PresentacionGrado: React.FC = () => {
  const { grado } = useParams<{ grado?: string }>();
  const navigate = useNavigate();

  // Validar y normalizar el grado escolar desde los parámetros de la URL
  const gradoActual: GradoEscolar = (
    grado && ['1ro', '2do', '3ro', '4to', '5to'].includes(grado) 
      ? grado 
      : '1ro'
  ) as GradoEscolar;

  const nombreGradoLegible = DICCIONARIO_GRADOS[gradoActual] || '1er Año';
  const listaModulos = Object.values(CATALAGO_MODULOS);

  /** Navega al catálogo del nuevo grado seleccionado */
  const cambiarGrado = (nuevoGrado: GradoEscolar) => {
    navigate(`/proyectos/ciberseguridad/grado/${nuevoGrado}`);
  };

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
    <div className="presentacion-grado-contenedor pagina-ciberseguridad">
      {/* HERO DE CIBERSEGURIDAD Y SELECCIÓN DE GRADO */}
      <HeroCiberseguridad
        titulo="MÓDULOS DE CIBERSEGURIDAD PARA"
        tituloResaltado={nombreGradoLegible.toUpperCase()}
        categoria="CATÁLOGO POR GRADO ESCOLAR"
        descripcion="¡Bienvenido(a) a tu portal de aprendizaje! A continuación se presentan las lecciones y temas adaptados a tu nivel."
        imagenFondo={imgHero3}
        enlacesSubNav={enlacesSubNav}
      />

      {/* CATÁLOGO DE MÓDULOS DE ESTE GRADO */}
      <section className="seccion-modulos-grado">
        <div className="contenedor-presentacion-grado">
          
          <div className="selector-grados-pestanas">
            {(['1ro', '2do', '3ro', '4to', '5to'] as GradoEscolar[]).map((g) => (
              <button
                key={g}
                type="button"
                className={`pestana-grado ${g === gradoActual ? 'pestana-grado-activa' : ''}`}
                onClick={() => cambiarGrado(g)}
              >
                {g} Año
              </button>
            ))}
          </div>

          <div className="encabezado-seccion-modulos">
            <div>
              <h2 className="titulo-seccion-modulos">Ruta de Lecciones de {gradoActual} Año</h2>
              <p className="subtitulo-seccion-modulos">
                Contenidos pedagógicos y talleres prácticos diseñados para tu desarrollo tecnológico seguro.
              </p>
            </div>
            <div className="insignia-conteo-modulos">
      
              <span>{listaModulos.length} Módulos Activos</span>
            </div>
          </div>

          {/* Cuadrícula de Tarjetas de Módulo */}
          <div className="cuadricula-tarjetas-modulo">
            {listaModulos.map((modulo) => {
              const contenidoDelGrado = modulo.grados[gradoActual];

              return (
                <article key={modulo.id} className="tarjeta-modulo-grado">
                  {/* Cabecera con Categoría */}
                  <div className="tarjeta-modulo-cabecera">
                    <div className="tarjeta-modulo-icono">
                      {ICONOS_MODULOS[modulo.id] || <ShieldCheck size={28} />}
                    </div>
                    <div className="tarjeta-modulo-categoria">
                      {modulo.nombreCategoria}
                    </div>
                  </div>

                  {/* Cuerpo con Título y Breve Explicación */}
                  <div className="tarjeta-modulo-cuerpo">
                    <h3 className="tarjeta-modulo-titulo">{modulo.titulo}</h3>
                    
                    <div className="caja-bienvenida-corta">
                      <p className="texto-bienvenida-corta">
                        <strong>Enfoque {gradoActual} Año:</strong> {contenidoDelGrado.explicacionBreve}
                      </p>
                    </div>

                    <div className="detalles-rapidos-modulo">
                     
                      <span className="item-detalle-rapido">
                        <CheckSquare size={16} />
                        {contenidoDelGrado.temas.length} Lecciones
                      </span>
                    </div>
                  </div>

                  {/* Pie con Acción */}
                  <div className="tarjeta-modulo-pie">
                    <Boton
                      variante="ciberseguridad"
                      tamano="mediano"
                      anchoCompleto
                      onClick={() => navigate(`/proyectos/ciberseguridad/info/${modulo.id}/${gradoActual}`)}
                    >
                      Ingresar al Módulo 
                    </Boton>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Enlace de Retorno */}
          <div className="caja-pie-retorno">
            <Link to="/proyectos/ciberseguridad" className="enlace-volver-inicio">
              <ArrowLeft size={18} />
              Volver a Ciberseguridad
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PresentacionGrado;
