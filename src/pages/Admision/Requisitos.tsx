import React from 'react';
import { ArrowLeft, UserPlus, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import '../ElLiceo/ElLiceo.css';
import './Requisitos.css';

export const Requisitos: React.FC = () => {
  const seccionesRequisitos = [
    {
      categoria: 'Requisitos para Estudiantes Nuevos Ingresos',
      icono: <UserPlus size={24} />,
      items: [
        'Partida de Nacimiento Original y 2 copias.',
        '2 copias de Cédula de Identidad del estudiante.',
        '2 copias de Cédula de Identidad del representante.',
        '4 Fotos del estudiante con la camisa del uniforme.',
        '2 fotos del representante.',
        'Papeles de 6to grado.',
        'Copia de Informe médico en caso de que el o la estudiante tenga alguna patología.',
        'Talla y Peso del o de la estudiante.',
        'Compra de formatos (acta compromiso, inscripción) en la misma institución.',
        'Correo Electrónico del estudiante y representante.',
        '1 Carpeta Marrón tipo oficio con gancho.',
        '1 Sobre de Manila tipo oficio.',
        'El estudiante debe estar presente para la inscripción.'
      ]
    },
    {
      categoria: 'Requisitos para Inscripción de Estudiantes Regulares',
      icono: <Users size={24} />,
      items: [
        'Consignar cualquier documento pendiente de su representado al momento de inscribir.',
        'Boletín del año escolar culminado.',
        'Talla y Peso del o de la estudiante.',
        'Correo Electrónico del o de la estudiante.',
        'Al momento de la inscripción el estudiante debe estar presente.',
        'Solvencia de la colaboración voluntaria del año escolar 2025-2026.',
        'Correo Electrónico del representante.',
        '1 Carpeta marrón tipo oficio con gancho.',
        '1 Sobre de manila tipo oficio (aplica para los estudiantes promovidos a 4to año).',
        'Las fotos de los estudiantes deben ser con la camisa del año escolar a cursar (Marrón o Azul).',
        'Compra de formato de acta de compromiso.'
      ]
    }
  ];

  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Requisitos de Inscripción"
        subtitulo="Complejo Educativo 'Antonio Lemus Pérez'"
        descripcion="Información y documentación necesaria para el proceso de admisión y regularización estudiantil (Año Escolar: 2026-2027)."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="contenedor-liceo-ancho">
        <div className="encabezado-seccion-liceo">
          <h2 className="titulo-seccion-liceo">Proceso de Admisión</h2>
          <p className="subtitulo-seccion-liceo">
            A continuación se detallan los recaudos exigidos para formalizar la inscripción en nuestra institución.
          </p>
        </div>

        <section className="requisitos-seccion">
          {seccionesRequisitos.map((sec, idx) => (
            <div key={idx} className="requisitos-categoria-bloque">
              <h3 className="requisitos-categoria-titulo">
                <span className="requisitos-icono-categoria">
                  {sec.icono}
                </span>
                {sec.categoria}
              </h3>

              <div className="requisitos-grid-items">
                {sec.items.map((item, iIdx) => (
                  <div key={iIdx} className="requisito-tarjeta-item">
                    <CheckCircle2 size={20} className="requisito-icono-check" />
                    <div className="requisito-contenido-texto">
                      <p>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Requisitos;
