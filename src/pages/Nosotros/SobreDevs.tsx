// src/pages/TeamSection.tsx
import React from 'react';
import Members from '../../components/comunes/tarjetas/members';
import { TEAM_MEMBERS } from '../../data/datosPersonal';
import { Users, ShieldCheck, BookOpen, Code, GraduationCap, Award, Link, ArrowLeft } from 'lucide-react';
import './SobreDevs.css';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';

export const TeamSection: React.FC = () => {
  return (

      <>
    <HeroInstitucional
        imagenFondo={img5}
        titulo="Desarrolladores del proyecto"
        descripcion="Conoce a quienes han dedicado su labor al servicio de la educación en el Liceo Bolivariano Antonio Lemus Pérez."
        acciones={
           
          <Link to="/" className="sebre-devs-volver">
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          
        }
      />
    <main className="contenedor-nosotros">
     
      {/* 2. MÉTRICAS E IMPACTO DEL PROYECTO */}
      <section className="seccion-estadisticas">
        <div className="tarjeta-stat">
          <div className="stat-icono">
            <Award size={28} />
          </div>
          <div className="stat-numero">100%</div>
          <div className="stat-etiqueta">Software Libre y Accesible</div>
        </div>
        <div className="tarjeta-stat">
          <div className="stat-icono">
            <ShieldCheck size={28} />
          </div>
          <div className="stat-numero">+4</div>
          <div className="stat-etiqueta">Módulos de Ciberseguridad</div>
        </div>
        <div className="tarjeta-stat">
          <div className="stat-icono">
            <GraduationCap size={28} />
          </div>
          <div className="stat-numero">L.B.</div>
          <div className="stat-etiqueta">Antonio Lemus Pérez</div>
        </div>
      </section>

      {/* 3. PILARES DEL PROYECTO */}
      <section className="seccion-pilares">
        <div className="encabezado-seccion">
          <h2>Nuestros Pilares Tecnológicos</h2>
          <p>Estrategias orientadas a la concienciación y mitigación de riesgos informáticos.</p>
        </div>

        <div className="grid-pilares">
          <div className="tarjeta-pilar">
            <div className="icono-pilar">
              <ShieldCheck size={26} />
            </div>
            <h3>Prevención Digital</h3>
            <p>Proporcionamos herramientas explicativas para identificar fraudes, phishing y amenazas comunes en la red.</p>
          </div>

          <div className="tarjeta-pilar">
            <div className="icono-pilar">
              <BookOpen size={26} />
            </div>
            <h3>Alfabetización</h3>
            <p>Guías simplificadas y material educativo accesible para la formación continua de los estudiantes.</p>
          </div>

          <div className="tarjeta-pilar">
            <div className="icono-pilar">
              <Code size={26} />
            </div>
            <h3>Código Libre</h3>
            <p>Desarrollado bajo estándares abiertos para garantizar transparencia, adaptabilidad y sostenibilidad institucional.</p>
          </div>
        </div>
      </section>

          <section id="labores" className="seccion-labores-harvard">
        <div className="contenedor-harvard-ancho">
          <div className="encabezado-harvard-simple">
            <h2 className="titulo-seccion-editorial">Conoce a Nuestro Personal Directivo y Docente</h2>
            <p className="subtitulo-seccion-editorial">
              Conoce a quienes han dedicado su labor al servicio de la educación en el Liceo Bolivariano Antonio Lemus Pérez.
            </p>
          </div>
          <div className="grid-labores-harvard">
            <Members items={TEAM_MEMBERS} />
          </div>
        </div>
      </section>
      {/* 5. COMPROMISO FINAL */}
      <section className="seccion-compromiso">
        <h2>Compromiso UPTOS con la Comunidad</h2>
        <p>
          A través del trabajo colaborativo, buscamos cerrar la brecha del desconocimiento técnico en materia de ciberseguridad, brindando soluciones reales a las instituciones educativas de Cumaná.
        </p>
        <span className="insignia-compromiso">Moral y Luces</span>
      </section>
    </main>

    </>
  );
};

export default TeamSection;