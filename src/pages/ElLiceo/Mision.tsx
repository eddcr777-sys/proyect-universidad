import React from 'react';
import { Target, Compass, BookOpen, Users, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import './ElLiceo.css';

export const Mision: React.FC = () => {
  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Nuestra Misión"
        subtitulo="Liceo Bolivariano 'Antonio Lemus Pérez'"
        descripcion="El propósito fundamental que orienta cada una de nuestras acciones socioeducativas."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="contenedor-liceo">
        <div className="encabezado-seccion-liceo">
          <span className="badge-liceo">Identidad Institucional</span>
          <h2 className="titulo-seccion-liceo">Propósito Educativo</h2>
          <p className="subtitulo-seccion-liceo">
            Comprometidos con el desarrollo socio-ético y cultural de la juventud sucrense.
          </p>
        </div>

        <div className="caja-destacada-liceo">
          <h3>Declaración de Misión</h3>
          <p>
            "Promover y desarrollar un alto nivel socio-ético-cultural mediante la formación integral de estudiantes capaces de enfrentar los retos de la vida, garantizando el acceso a una educación pública, inclusiva y de calidad respaldada por valores de responsabilidad, solidaridad y pensamiento crítico."
          </p>
        </div>

        <div className="grid-tarjetas-liceo">
          <div className="tarjeta-liceo">
            <div className="icono-tarjeta-liceo">
              <Target size={28} />
            </div>
            <h3 className="titulo-tarjeta-liceo">Formación Integral</h3>
            <p className="texto-tarjeta-liceo">
              Desarrollamos competencias científicas, humanísticas y tecnológicas centradas en el desarrollo humano armónico.
            </p>
          </div>

          <div className="tarjeta-liceo">
            <div className="icono-tarjeta-liceo">
              <Compass size={28} />
            </div>
            <h3 className="titulo-tarjeta-liceo">Orientación Ética</h3>
            <p className="texto-tarjeta-liceo">
              Inculcamos principios y valores fundamentales para el ejercicio transparente y responsable de la ciudadanía.
            </p>
          </div>

          <div className="tarjeta-liceo">
            <div className="icono-tarjeta-liceo">
              <Users size={28} />
            </div>
            <h3 className="titulo-tarjeta-liceo">Vinculación Comunitaria</h3>
            <p className="texto-tarjeta-liceo">
              Integramos activamente a la familia y la comunidad en los procesos de aprendizaje e iniciativas socioproductivas.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mision;
