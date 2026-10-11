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
        titulo="Complejo Educativo 'Antonio Lemus Pérez'"
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
                Conoce a quienes han dedicado su labor al servicio de la educación en el Complejo Educativo Antonio Lemus Pérez.
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
            <div className="encabezado-harvard-simple" style={{marginTop: '4rem'}}>
              <h2 className="titulo-seccion-editorial">Cartografía Institucional</h2>
              <p className="subtitulo-seccion-editorial">
                Ubicación geográfica de nuestra institución y sus alrededores.
              </p>
            </div>
            <div className='parrafo-homenaje' style={{textAlign: 'justify', lineHeight: '1.8'}}>
              <p>El <strong>Complejo Educativo Antonio Lemus Pérez</strong> se encuentra ubicado en un punto estratégico rodeado por comunidades importantes de Cumaná, como el <em>Barrio Venezuela, Cascajal, Barrio El Valle, Franja de la Llanada</em>, y adyacente a importantes arterias viales como la <em>Av. Las Industrias</em> y la <em>Av. Panamericana</em>.</p>
              <p style={{marginTop: '1rem'}}>En nuestra cartografía destacamos la cercanía con instituciones aliadas como el INCES y espacios comunitarios (Super Bloques, Iglesia, etc.), lo que nos permite un constante acercamiento e integración directa con las realidades socioproductivas y sociales de la comunidad.</p>
              
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <img 
                  src="/src/assets/cartografia_institucional.jpg" 
                  alt="Cartografía Institucional" 
                  style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </section>

    </main>

    </>
  );
};


export default SobreUE;