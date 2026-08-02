import React, { useState } from 'react';
import './CampoTexto.css';

interface CampoTextoProps {
  etiqueta: string;
  nombre: string;
  valor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const CampoTexto: React.FC<CampoTextoProps> = ({ etiqueta, nombre, valor, onChange }) => {
  return (
    <div className="campo-texto">
      <label htmlFor={nombre}>{etiqueta}</label>
      <input
        type="text"
        id={nombre}
        name={nombre}
        value={valor}
        onChange={onChange}
        required
      />
    </div>
  );
};

// Estructura de tipo para los módulos con su nombre y ruta dinámica
interface ModuloItem {
  nombre: string;
  path: string;
}

// Mapeo completo ajustado a tu árbol de directorios
const MODULOS_POR_GRADO: Record<string, ModuloItem[]> = {
  '1ro': [
    { nombre: 'Introducción al Uso de Internet (Redes Sociales)', path: '/Modulos/RedesSociales/1ro/RedesSociales1ro' },
    { nombre: 'Identidad Digital y Reputación Online (Protección de Cuentas)', path: '/Modulos/ProteccionCuentas/1ro/ProteccionCuentas1ro' },
    { nombre: 'Privacidad, Riesgos y Amenazas (Phishing)', path: '/Modulos/Phishing/1ro/Phishing1ro' },
    { nombre: 'Alfabetización Mediática (VideoJuegos)', path: '/Modulos/VideoJuegos/1ro/VideoJuegos1ro' },
  ],
  '2do': [
    { nombre: 'Protección de Datos Personales (Protección Cuentas)', path: '/Modulos/ProteccionCuentas/2do/ProteccionCuentas2do' },
    { nombre: 'Seguridad en Redes Sociales', path: '/Modulos/RedesSociales/2do/RedesSociales2do' },
    { nombre: 'Prevención de Ciberacoso y Riesgos en Juegos', path: '/Modulos/VideoJuegos/2do/VideoJuegos2do' },
    { nombre: 'Derechos y Ciudadanía Digital (Software Pirata)', path: '/Modulos/SoftwarePiratas/2do/SoftwarePirata2do' },
  ],
  '3ro': [
    { nombre: 'Ciberdelincuencia y Amenazas (Phishing)', path: '/Modulos/Phishing/3ro/Phishing3ro' },
    { nombre: 'Protección de Información Personal', path: '/Modulos/ProteccionCuentas/3ro/ProteccionCuentas3ro' },
    { nombre: 'Riesgos en Software No Autorizado', path: '/Modulos/SoftwarePiratas/3ro/SoftwarePirata3ro' },
    { nombre: 'Auditoría y Gestión de Riesgos', path: '/Modulos/Auditorias/3ro/AuditoriaDigital3ro' },
  ],
  '4to': [
    { nombre: 'Gestión de la Identidad Digital', path: '/Modulos/ProteccionCuentas/4to/ProteccionCuentas4to' },
    { nombre: 'Navegación Segura y Protección de Dispositivos', path: '/Modulos/Auditorias/4to/AuditoriaDigital4to' },
    { nombre: 'Ciberdelincuencia: Amenazas y Prevención (Phishing)', path: '/Modulos/Phishing/4to/Phishing4to' },
    { nombre: 'Seguridad y Software Pirata', path: '/Modulos/SoftwarePiratas/4to/SoftwarePirata4to' },
  ],
  '5to': [
    { nombre: 'Seguridad en Redes Sociales Avanzada', path: '/Modulos/RedesSociales/5to/RedesSociales5to' },
    { nombre: 'Prevención del Ciberacoso y Grooming', path: '/Modulos/VideoJuegos/5to/VideoJuegos5to' },
    { nombre: 'Auditoría y Gestión de Riesgos Digitales', path: '/Modulos/Auditorias/5to/AuditoriaDigital5to' },
    { nombre: 'Ciberdelincuencia y Protección Empresarial', path: '/Modulos/Phishing/5to/Phishing5to' },
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
    <div className="contenedor-formulario">
      <h2>Registro de Estudiante</h2>

      <form onSubmit={handleSubmit} className="formulario">
        <CampoTexto
          etiqueta="Nombre Completo:"
          nombre="nombre"
          valor={formData.nombre}
          onChange={handleChange}
        />

        <div className="campo-texto">
          <label htmlFor="grado">Grado:</label>
          <select
            id="grado"
            name="grado"
            value={formData.grado}
            onChange={handleChange}
            required
          >
            <option value="">-- Selecciona un grado --</option>
            <option value="1ro">1ro</option>
            <option value="2do">2do</option>
            <option value="3ro">3ro</option>
            <option value="4to">4to</option>
            <option value="5to">5to</option>
          </select>
        </div>

        <button type="submit" disabled={!formData.nombre || !formData.grado}>
          Ver Módulos
        </button>
      </form>

      {enviado && (
        <div className="resultado-modulos">
          <h3>¡Hola, {formData.nombre}!</h3>
          <p>
            Estos son los módulos asignados para <strong>{formData.grado} año/grado</strong>:
          </p>
          <ul className="lista-modulos">
            {modulosActuales.map((modulo, index) => (
              <li key={index} className="item-modulo">
                <span className="nombre-modulo">{modulo.nombre}</span>
                {/* Enlace o botón para navegar hacia el archivo/componente según la ruta */}
                <a href={modulo.path} className="btn-ir-modulo">
                  Acceder al Módulo →
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormularioModulos;