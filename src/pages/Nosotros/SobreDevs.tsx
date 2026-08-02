// src/pages/TeamSection.tsx
import React from 'react';
import { MemberCard } from '../../components/comunes/tarjetas/members';
import type { TeamMember } from '../../components/comunes/tarjetas/members';
import { Users, ShieldCheck, BookOpen, Code, GraduationCap, Award } from 'lucide-react';
import './SobreDevs.css';

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Elvis Cordova',
    role: 'Desarrollador',
    description: 'Encargado del desarrollo web y la creación de entornos digitales seguros para las nuevas generaciones.',
  },
  {
    name: 'Henyer Guipe',
    role: 'Desarrollador',
    description: 'Comprometido con la creación de herramientas que protejan a los estudiantes del Lemus Pérez.',
  },
  {
    name: 'Jesus Giraldo',
    role: 'Desarrollador',
    description: 'Enfocado en la investigación técnica y la alfabetización digital para la prevención.',
  },
  {
    name: 'Luis Ruiz',
    role: 'Desarrollador',
    description: 'Buscando democratizar el acceso a la ciberseguridad mediante recursos simples y efectivos.',
  },
];

export const TeamSection: React.FC = () => {
  return (
    <main className="contenedor-nosotros">
      {/* 1. SECCIÓN PRINCIPAL: DESCRIPCIÓN Y META */}
      <section className="seccion-hero">
        <div className="insignia-badget">
          <Users size={18} />
          <span>Proyecto Académico & Social</span>
        </div>
        
        <h1 className="titulo-hero">
          Fortaleciendo la <span className="resaltado-rojo">Seguridad Digital</span>
        </h1>
        
        <p className="descripcion-hero">
          Somos estudiantes de la <strong>UPTOS "Clodosbaldo Russián"</strong>. Este proyecto representa nuestro aporte y compromiso con la comunidad del Liceo Bolivariano Antonio Lemus Pérez para garantizar un entorno digital accesible, preventivo y seguro.
        </p>

        <div className="colaboracion-caja">
          <span className="texto-sub">En colaboración institucional con</span>
          <p className="texto-institucion">UPTOS "CLODOSBALDO RUSSIÁN" — CUMANÁ</p>
        </div>
      </section>

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

      {/* 4. SECCIÓN DE DESARROLLADORES */}
      <section className="seccion-equipo">
        <div className="encabezado-equipo">
          <h2>Conoce al Equipo Creador</h2>
          <p>Los desarrolladores detrás de la ingeniería, diseño y mantenimiento de este portal.</p>
        </div>

        <div className="grid-creadores">
          {TEAM_MEMBERS.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
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
  );
};

export default TeamSection;