import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, GraduationCap, ArrowRight, Sparkles, BookOpen, Shield } from 'lucide-react';
import './CampoTexto.css';

interface CampoTextoProps {
  etiqueta: string;
  nombre: string;
  valor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
}

export const CampoTexto: React.FC<CampoTextoProps> = ({
  etiqueta,
  nombre,
  valor,
  onChange,
  placeholder = 'Ej. María Pérez',
}) => {
  return (
    <div className="campo-texto-grupo">
      <label htmlFor={nombre} className="campo-texto-etiqueta">
        {etiqueta}
      </label>
      <input
        type="text"
        id={nombre}
        name={nombre}
        value={valor}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="campo-texto-input"
      />
    </div>
  );
};

// Mapeo pedagógico oficial por año escolar del L.B. Antonio Lemus Pérez
const MODULOS_POR_GRADO: Record<string, { id: string; titulo: string; categoria: string; icono: string }[]> = {
  '1ro': [
    { id: 'redes-sociales', titulo: 'Introducción al Uso Seguro de Internet', categoria: 'Redes Sociales', icono: '📱' },
    { id: 'proteccion-cuentas', titulo: 'Identidad Digital y Reputación Online', categoria: 'Protección de Cuentas', icono: '🔑' },
    { id: 'phishing', titulo: 'Privacidad y Detección de Engaños (Phishing)', categoria: 'Phishing', icono: '🎣' },
    { id: 'videojuegos', titulo: 'Alfabetización Digital y Entretenimiento', categoria: 'VideoJuegos', icono: '🎮' },
  ],
  '2do': [
    { id: 'proteccion-cuentas', titulo: 'Protección de Datos Personales y Claves', categoria: 'Protección de Cuentas', icono: '🔒' },
    { id: 'redes-sociales', titulo: 'Seguridad en Redes Sociales y Grooming', categoria: 'Redes Sociales', icono: '📱' },
    { id: 'videojuegos', titulo: 'Prevención de Ciberacoso y Riesgos Gamer', categoria: 'VideoJuegos', icono: '🎮' },
    { id: 'software-pirata', titulo: 'Derechos y Ciudadanía Digital', categoria: 'Software Pirata', icono: '⚠️' },
  ],
  '3ro': [
    { id: 'phishing', titulo: 'Ciberdelincuencia y Phishing Avanzado', categoria: 'Phishing', icono: '🎣' },
    { id: 'proteccion-cuentas', titulo: 'Protección de Información Sensible', categoria: 'Protección de Cuentas', icono: '🔑' },
    { id: 'software-pirata', titulo: 'Riesgos del Software No Autorizado', categoria: 'Software Pirata', icono: '⚠️' },
    { id: 'auditorias', titulo: 'Auditoría y Gestión de Riesgos I', categoria: 'Auditorías', icono: '🛡️' },
  ],
  '4to': [
    { id: 'proteccion-cuentas', titulo: 'Gestión Avanzada de Identidad Digital', categoria: 'Protección de Cuentas', icono: '🔐' },
    { id: 'auditorias', titulo: 'Navegación Segura y Protección de Dispositivos', categoria: 'Auditorías', icono: '🛡️' },
    { id: 'phishing', titulo: 'Ciberdelincuencia: Amenazas Complejas', categoria: 'Phishing', icono: '🎣' },
    { id: 'software-pirata', titulo: 'Seguridad en Sistemas y Software Pirata', categoria: 'Software Pirata', icono: '⚠️' },
  ],
  '5to': [
    { id: 'redes-sociales', titulo: 'Seguridad en Redes Sociales Nivel Profesional', categoria: 'Redes Sociales', icono: '📱' },
    { id: 'videojuegos', titulo: 'Prevención de Ciberacoso y Riesgos Digitales', categoria: 'VideoJuegos', icono: '🎮' },
    { id: 'auditorias', titulo: 'Auditoría Digital y Gestión de Diagnósticos', categoria: 'Auditorías', icono: '🛡️' },
    { id: 'phishing', titulo: 'Protección Cibernética Institucional', categoria: 'Phishing', icono: '🎣' },
  ],
};

export const FormularioModulos: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    grado: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setEnviado(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nombre.trim() && formData.grado) {
      setEnviado(true);
    }
  };

  const modulosActuales = MODULOS_POR_GRADO[formData.grado] || [];

  return (
    <div className="contenedor-formulario-estudiante">
      <div className="formulario-cabecera">
        <div className="insignia-form">
          <GraduationCap size={18} />
          <span>Acceso Personalizado por Grado</span>
        </div>
        <h3 className="formulario-titulo">Portal de Registro del Estudiante</h3>
        <p className="formulario-subtitulo">
          Ingresa tus datos para obtener la presentación del plan de estudio adaptado a tu año académico.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="formulario-cuerpo">
        <CampoTexto
          etiqueta="Nombre y Apellido:"
          nombre="nombre"
          valor={formData.nombre}
          onChange={handleChange}
          placeholder="Ej. Carlos Rodríguez"
        />

        <div className="campo-texto-grupo">
          <label htmlFor="grado" className="campo-texto-etiqueta">
            Año / Grado Escolar:
          </label>
          <select
            id="grado"
            name="grado"
            value={formData.grado}
            onChange={handleChange}
            required
            className="campo-texto-select"
          >
            <option value="">-- Selecciona tu grado --</option>
            <option value="1ro">1er Año de Bachillerato</option>
            <option value="2do">2do Año de Bachillerato</option>
            <option value="3ro">3er Año de Bachillerato</option>
            <option value="4to">4to Año de Bachillerato</option>
            <option value="5to">5to Año de Bachillerato</option>
          </select>
        </div>

        <button type="submit" className="boton-submit-estudiante" disabled={!formData.nombre || !formData.grado}>
          <UserCheck size={18} /> Generar Presentación de Mi Grado
        </button>
      </form>

      {enviado && (
        <div className="resultado-presentacion-grado">
          <div className="resultado-header">
            <Sparkles size={24} className="icono-sparkles" />
            <div>
              <h4>¡Bienvenido(a), {formData.nombre}!</h4>
              <p>
                Se ha generado la presentación del plan de lecciones para <strong>{formData.grado} Año</strong>.
              </p>
            </div>
          </div>

          {/* Enlace destacado directo a la Presentación del Grado */}
          <div className="caja-cta-presentacion">
            <div className="info-cta">
              <BookOpen size={24} />
              <div>
                <strong>Presentación Principal de {formData.grado} Año</strong>
                <p>Ver catálogo completo de módulos para tu nivel</p>
              </div>
            </div>
            <Link to={`/presentacion/${formData.grado}`} className="boton-ir-presentacion">
              Ver Presentación de {formData.grado} <ArrowRight size={18} />
            </Link>
          </div>

          <h5 className="titulo-lista-modulos">Módulos Asignados para tu Nivel:</h5>
          <div className="lista-modulos-estudiante">
            {modulosActuales.map((modulo) => (
              <div key={modulo.id} className="tarjeta-modulo-item">
                <span className="icono-modulo-item">{modulo.icono}</span>
                <div className="info-modulo-item">
                  <span className="categoria-modulo-item">{modulo.categoria}</span>
                  <span className="titulo-modulo-item">{modulo.titulo}</span>
                </div>
                <Link to={`/modulos/${modulo.id}/${formData.grado}`} className="btn-ir-modulo">
                  Ir <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormularioModulos;