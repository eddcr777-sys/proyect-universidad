import React from 'react';
import { 
  ArrowDown 
} from 'lucide-react';
import Members from '../../components/comunes/tarjetas/members';
import './SobreU.E.css';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import { TEAM_INST_MEMBER } from '../../data/datosPersonal';
import { BanderaVenezuela } from '../../components/comunes/Extras/Bandera/BanderaVenezuela';

export const SobreUE: React.FC = () => {
  return (
    <>
      <HeroInstitucional
        imagenFondo={img5}
        titulo="Liceo Bolivariano 'Antonio Lemus Pérez'"
        subtitulo="Formando líderes para el futuro"
        descripcion="Un espacio de excelencia académica y formación integral"
        acciones={[
          <a href="#Directivos" className="boton-hero-principal">
            Conoce a Nuestro Personal
            <ArrowDown size={20} />
          </a>
        ]}
      />

      <main className="contenedor-nosotros">
        {/* --- HOMENAJE A PROFESORES --- */}
        <section id="labores" className="seccion-labores-harvard">
          <div className="contenedor-harvard-ancho">
            <div className="encabezado-harvard-simple">
              <h2 className="titulo-seccion-editorial">Conoce a Nuestro Personal Directivo y Docente</h2>
              <p className="subtitulo-seccion-editorial">
                Conoce a quienes han dedicado su labor al servicio de la educación en el Liceo Bolivariano Antonio Lemus Pérez.
              </p>
            </div>

            <div className='centro-bandera'>
              <BanderaVenezuela />
            </div>

            <h2 id='Directivos' className="titulo-seccion-homenaje">Personal Directivo</h2>
            <p className='parrafo-homenaje'>En esta sección rendimos homenaje a nuestros directivos, quienes con su dedicación y esfuerzo han formado a generaciones de estudiantes. Su labor es fundamental para el desarrollo de nuestra institución y para el futuro de nuestros alumnos.</p>
            <div className='grid-labores-harvard'>
              <Members items={TEAM_INST_MEMBER} />
            </div>

            <h2 className="titulo-seccion-homenaje">Personal Docente</h2>
            <p className='parrafo-homenaje'>En esta sección rendimos homenaje a nuestros docentes, quienes con su dedicación y esfuerzo han formado a generaciones de estudiantes. Su labor es fundamental para el desarrollo de nuestra institución y para el futuro de nuestros alumnos.</p>
            <div id="docentes" className='grid-labores-harvard'>
              <Members items={TEAM_INST_MEMBER} />
            </div>
          </div>
        </section>

    </main>

    </>
  );
};


export default SobreUE;