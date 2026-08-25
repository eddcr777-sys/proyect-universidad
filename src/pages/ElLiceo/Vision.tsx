import React from 'react';
import { Eye, Lightbulb, ShieldCheck, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import './ElLiceo.css';

export const Vision: React.FC = () => {
  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Nuestra Visión"
        subtitulo="Liceo Bolivariano 'Antonio Lemus Pérez'"
        descripcion="Hacia dónde caminamos: inspirando el futuro educativo del Estado Sucre."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="contenedor-liceo">
        <div className="encabezado-seccion-liceo">
          <span className="badge-liceo">Visión de Futuro</span>
          <h2 className="titulo-seccion-liceo">Horizonte Institucional</h2>
          <p className="subtitulo-seccion-liceo">
            Consolidándonos como una comunidad de aprendizaje referente en excelencia y desarrollo humano.
          </p>
        </div>

        <div className="caja-destacada-liceo">
          <h3>Declaración de Visión</h3>
          <p>
            "Ser un referente colectivo e integrador que forme ciudadanos integrales, socializando la relación entre escuela, familia y comunidad, mediante un modelo pedagógico innovador, tecnológico y transformador que inspire el desarrollo regional y nacional."
          </p>
        </div>

        <div className="grid-tarjetas-liceo">
          <div className="tarjeta-liceo">
            <div className="icono-tarjeta-liceo">
              <Eye size={28} />
            </div>
            <h3 className="titulo-tarjeta-liceo">Referente Educativo</h3>
            <p className="texto-tarjeta-liceo">
              Posicionarnos como el liceo de mayor impacto positivo en la formación académica y vocacional en Cumaná.
            </p>
          </div>

          <div className="tarjeta-liceo">
            <div className="icono-tarjeta-liceo">
              <Lightbulb size={28} />
            </div>
            <h3 className="titulo-tarjeta-liceo">Innovación Digital</h3>
            <p className="texto-tarjeta-liceo">
              Fomentar el uso ético y productivo de la tecnología como herramienta clave para la resolución de problemas reales.
            </p>
          </div>

          <div className="tarjeta-liceo">
            <div className="icono-tarjeta-liceo">
              <Globe size={28} />
            </div>
            <h3 className="titulo-tarjeta-liceo">Sostenibilidad Social</h3>
            <p className="texto-tarjeta-liceo">
              Construir proyectos pedagógicos con conciencia ecológica y compromiso transformador para nuestra sociedad.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vision;
