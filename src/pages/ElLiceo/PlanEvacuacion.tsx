import React from 'react';
import { ArrowLeft, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroInstitucional from '../../components/comunes/HeroInstitucional/HeroInstitucional';
import img5 from '../../assets/pbk-Hero-3.jpg';
import './ElLiceo.css';

export const PlanEvacuacion: React.FC = () => {
  return (
    <div className="pagina-liceo">
      <HeroInstitucional
        imagenFondo={img5}
        variante="compacto"
        titulo="Plan de Evacuación y Mapa de Riesgo"
        subtitulo="Complejo Educativo 'Antonio Lemus Pérez'"
        descripcion="Protocolos y rutas de escape para salvaguardar la vida de nuestros estudiantes y personal ante eventos sísmicos."
        acciones={
          <Link to="/" className="boton-hero-principal">
            <ArrowLeft size={18} />
            Volver al Inicio
          </Link>
        }
      />

      <main className="contenedor-liceo-ancho">
        <div className="encabezado-seccion-liceo">
          <h2 className="titulo-seccion-liceo">Mapa de Riesgo y Rutas de Evacuación Sísmica</h2>
          <p className="subtitulo-seccion-liceo" style={{ textAlign: 'justify', marginBottom: '2rem' }}>
            Nuestro mapa de riesgo establece claramente las vías de escape primarias y secundarias hacia los Puntos de Reunión seguros.
          </p>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <img 
              src="/src/assets/mapa_riesgo.jpg" 
              alt="Mapa de Riesgo y Evacuación" 
              style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </div>

        <div className="bloque-contenido-liceo" style={{ marginBottom: '3rem' }}>
          <h3><Map size={24} style={{ display: 'inline', marginRight: '10px' }} />Estructura del Plan de Evacuación</h3>
          <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', marginTop: '1rem', color: 'var(--color-texto-secundario)' }}>
            <li><strong>Rutas de Salida:</strong> Contamos con rutas principales y secundarias señalizadas que conducen al Patio Delantero y a la Zona Segura principal (Canchas).</li>
            <li><strong>Zonas de Riesgo:</strong> El mapa identifica las áreas de riesgo alto y crítico (como la cocina y ciertos muros).</li>
            <li><strong>Puntos de Reunión:</strong> 
              <ul>
                <li><em>Punto de Reunión Principal:</em> Canchas deportivas (Zona Segura).</li>
                <li><em>Punto de Reunión Secundario:</em> Patio Delantero.</li>
              </ul>
            </li>
            <li><strong>Estación de Primeros Auxilios:</strong> Ubicada estratégicamente cerca de las oficinas de dirección para atención inmediata.</li>
            <li><strong>Reunión de Brigadas:</strong> Frente a las rejas de acceso principal, coordinando las salidas.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default PlanEvacuacion;
