// src/pages/TeamSection.tsx
import React from 'react';
import Members from '../../components/comunes/tarjetas/members';
import { TEAM_MEMBERS } from '../../data/datosPersonal';
import { Users, ShieldCheck, BookOpen, Code, GraduationCap, Award, Link, ArrowLeft } from 'lucide-react';
import './SobreDevs.css';
import HeroCiberseguridad from '../../components/comunes/HeroCiberseguridad/HeroCiberseguridad';
import img5 from '../../assets/pbk-Hero-3.jpg';

export const TeamSection: React.FC = () => {
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
    <div className="pagina-ciberseguridad">
      <HeroCiberseguridad
        imagenFondo={img5}
        titulo="Desarrolladores del"
        tituloResaltado="PROYECTO DE CIBERSEGURIDAD"
        categoria="EQUIPO DE DESARROLLO PNFI"
        descripcion="Conoce a los desarrolladores y docentes que han dedicado su labor sociotecnológica a la concientización y prevención de riesgos digitales en el L.B. Antonio Lemus Pérez."
        enlacesSubNav={enlacesSubNav}
        acciones={[
          {
            label: 'Volver a Ciberseguridad',
            ruta: '/proyectos/ciberseguridad',
            icono: <ArrowLeft size={18} />,
          },
        ]}
      />
    <main className="contenedor-nosotros">
     
      {/* 1. EQUIPO DE DESARROLLO (FONDO BLANCO) */}
      <section id="labores" className="seccion-labores-harvard">
        <div className="contenedor-seccion-ancho">
          <div className="encabezado-harvard-simple">
            <h2 className="titulo-seccion-editorial">Conoce a Nuestro equipo de desarrollo</h2>
            <p className="subtitulo-seccion-editorial">
              Conoce a quienes han dedicado su labor al desarrollo del proyecto para la concientización, formación y mitigación de riesgos informáticos en el estado Sucre.
            </p>
          </div>
          <div className="grid-labores-harvard">
            <Members items={TEAM_MEMBERS} />
          </div>
        </div>
      </section>

      {/* 2. MÉTRICAS E IMPACTO / FILOSOFÍA (FONDO AZUL) */}
      <section className="seccion-estadisticas">
       
          <div className="encabezado-seccion encabezado-seccion-blanco">
            <h2>Nuestra Filosofía</h2>
            <p>
              Principios que guían nuestro compromiso con la comunidad educativa y la seguridad digital.
            </p>
          </div>

          <div className="grid-estadisticas">
            <div className="tarjeta-stat">
              <div className="stat-icono">
                <Code size={28} />
              </div>
              <div className="stat-numero">100%</div>
              <div className="stat-etiqueta">Software Libre</div>
              <p className="stat-descripcion">
                Libertad para usar, estudiar, distribuir y mejorar las herramientas digitales. Sin barreras económicas ni técnicas.
              </p>
            </div>

            <div className="tarjeta-stat">
              <div className="stat-icono">
                <BookOpen size={28} />
              </div>
              <div className="stat-numero">+4</div>
              <div className="stat-etiqueta">Formación y Concienciación</div>
              <p className="stat-descripcion">
                Programas de alfabetización continua para empoderar a estudiantes y docentes en la toma de decisiones responsables.
              </p>
            </div>

            <div className="tarjeta-stat">
              <div className="stat-icono">
                <ShieldCheck size={28} />
              </div>
              <div className="stat-numero">+10</div>
              <div className="stat-etiqueta">Seguridad Digital</div>
              <p className="stat-descripcion">
                Integramos medidas preventivas, educativas y tecnológicas para proteger la información y la identidad digital de todos.
              </p>
            </div>
          </div>
      
      </section>

      {/* 3. PILARES DEL PROYECTO (FONDO BLANCO) */}
      <section className="seccion-pilares">
        <div className="contenedor-seccion-ancho">
          <div className="encabezado-seccion">
            <h2>Nuestros Pilares Tecnológicos</h2>
            <p>
              Estrategias orientadas a la <strong>concienciación, formación y mitigación de riesgos informáticos</strong>, fundamentadas
              en el uso y promoción del <strong>software libre</strong> como base para una seguridad digital inclusiva.
            </p>
          </div>

          <div className="grid-pilares">
            <div className="tarjeta-pilar">
              <h3>Prevención Digital</h3>
              <p>
                Proporcionamos herramientas explicativas y <strong>concienciamos</strong> a la comunidad sobre fraudes, phishing y
                amenazas comunes en la red, promoviendo hábitos seguros desde la educación básica.
              </p>
            </div>

            <div className="tarjeta-pilar">
              <h3>Alfabetización</h3>
              <p>
                Guías simplificadas y material educativo <strong>accesible y libre</strong> para la formación continua de estudiantes y
                docentes, empoderándolos para tomar decisiones responsables en el entorno digital.
              </p>
            </div>

            <div className="tarjeta-pilar">
              <h3>Código Libre</h3>
              <p>
                Desarrollado bajo <strong>estándares abiertos</strong> que garantizan transparencia, adaptabilidad y sostenibilidad
                institucional, permitiendo a la comunidad estudiar, modificar y mejorar las herramientas de seguridad digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPROMISO FINAL (FONDO AZUL) */}
      <section className="seccion-compromiso">
        <div className="contenedor-seccion-ancho">
          <h2>Compromiso de la UPTOS CR con la Comunidad</h2>
          <p>
            Proteger la información y la identidad digital es un derecho de todos, y la misión de los estudiantes de la UPTOS CR (Universidad Politécnica Territorial del Oeste de Sucre "Clodosbaldo Russian") es hacerlo realidad en cada institución educativa de Cumaná.
          </p>
          <span className="insignia-compromiso">Moral y Luces</span>
        </div>
      </section>
    </main>
    </div>
  );
};

export default TeamSection;