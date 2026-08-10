import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UserCheck,
  GraduationCap,
  ArrowRight,
  Sparkles,
  BookOpen,
  Shield,
  Smartphone,
  Key,
  ShieldCheck,
  Gamepad2,
  Lock,
  TriangleAlert,
  Mail,
  User,
  CheckCircle,
  ExternalLink,
  Award,
} from 'lucide-react';
import './CampoTexto.css';

// ============================================================
// COMPONENTE CAMPO TEXTO (Input reutilizable)
// ============================================================
interface CampoTextoProps {
  etiqueta: string;
  nombre: string;
  valor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
}

export const CampoTexto: React.FC<CampoTextoProps> = ({
  etiqueta,
  nombre,
  valor,
  onChange,
  placeholder = 'Ej. María Pérez',
  type = 'text',
  icon,
}) => {
  return (
    <div className="campo-texto-grupo">
      <label htmlFor={nombre} className="campo-texto-etiqueta">
        {etiqueta}
      </label>
      <div className="campo-input-wrapper">
        {icon && <span className="campo-icono">{icon}</span>}
        <input
          type={type}
          id={nombre}
          name={nombre}
          value={valor}
          onChange={onChange}
          placeholder={placeholder}
          required
          className={`campo-texto-input ${icon ? 'con-icono' : ''}`}
        />
      </div>
    </div>
  );
};

// ============================================================
// MAPEO DE MÓDULOS POR GRADO (con iconos Lucide)
// ============================================================
const MODULOS_POR_GRADO: Record<
  string,
  { id: string; titulo: string; categoria: string; icono: React.ReactNode }[]
> = {
  '1ro': [
    {
      id: 'redes-sociales',
      titulo: 'Introducción al Uso Seguro de Internet',
      categoria: 'Redes Sociales',
      icono: <Smartphone size={20} />,
    },
    {
      id: 'proteccion-cuentas',
      titulo: 'Identidad Digital y Reputación Online',
      categoria: 'Protección de Cuentas',
      icono: <Key size={20} />,
    },
    {
      id: 'phishing',
      titulo: 'Privacidad y Detección de Engaños (Phishing)',
      categoria: 'Phishing',
      icono: <Shield size={20} />,
    },
    {
      id: 'videojuegos',
      titulo: 'Alfabetización Digital y Entretenimiento',
      categoria: 'VideoJuegos',
      icono: <Gamepad2 size={20} />,
    },
  ],
  '2do': [
    {
      id: 'proteccion-cuentas',
      titulo: 'Protección de Datos Personales y Claves',
      categoria: 'Protección de Cuentas',
      icono: <Lock size={20} />,
    },
    {
      id: 'redes-sociales',
      titulo: 'Seguridad en Redes Sociales y Grooming',
      categoria: 'Redes Sociales',
      icono: <Smartphone size={20} />,
    },
    {
      id: 'videojuegos',
      titulo: 'Prevención de Ciberacoso y Riesgos Gamer',
      categoria: 'VideoJuegos',
      icono: <Gamepad2 size={20} />,
    },
    {
      id: 'software-pirata',
      titulo: 'Derechos y Ciudadanía Digital',
      categoria: 'Software Pirata',
      icono: <TriangleAlert size={20} />,
    },
  ],
  '3ro': [
    {
      id: 'phishing',
      titulo: 'Ciberdelincuencia y Phishing Avanzado',
      categoria: 'Phishing',
      icono: <Shield size={20} />,
    },
    {
      id: 'proteccion-cuentas',
      titulo: 'Protección de Información Sensible',
      categoria: 'Protección de Cuentas',
      icono: <Key size={20} />,
    },
    {
      id: 'software-pirata',
      titulo: 'Riesgos del Software No Autorizado',
      categoria: 'Software Pirata',
      icono: <TriangleAlert size={20} />,
    },
    {
      id: 'auditorias',
      titulo: 'Auditoría y Gestión de Riesgos I',
      categoria: 'Auditorías',
      icono: <ShieldCheck size={20} />,
    },
  ],
  '4to': [
    {
      id: 'proteccion-cuentas',
      titulo: 'Gestión Avanzada de Identidad Digital',
      categoria: 'Protección de Cuentas',
      icono: <ShieldCheck size={20} />,
    },
    {
      id: 'auditorias',
      titulo: 'Navegación Segura y Protección de Dispositivos',
      categoria: 'Auditorías',
      icono: <ShieldCheck size={20} />,
    },
    {
      id: 'phishing',
      titulo: 'Ciberdelincuencia: Amenazas Complejas',
      categoria: 'Phishing',
      icono: <Shield size={20} />,
    },
    {
      id: 'software-pirata',
      titulo: 'Seguridad en Sistemas y Software Pirata',
      categoria: 'Software Pirata',
      icono: <TriangleAlert size={20} />,
    },
  ],
  '5to': [
    {
      id: 'redes-sociales',
      titulo: 'Seguridad en Redes Sociales Nivel Profesional',
      categoria: 'Redes Sociales',
      icono: <Smartphone size={20} />,
    },
    {
      id: 'videojuegos',
      titulo: 'Prevención de Ciberacoso y Riesgos Digitales',
      categoria: 'VideoJuegos',
      icono: <Gamepad2 size={20} />,
    },
    {
      id: 'auditorias',
      titulo: 'Auditoría Digital y Gestión de Diagnósticos',
      categoria: 'Auditorías',
      icono: <ShieldCheck size={20} />,
    },
    {
      id: 'phishing',
      titulo: 'Protección Cibernética Institucional',
      categoria: 'Phishing',
      icono: <Shield size={20} />,
    },
  ],
};

// ============================================================
// COMPONENTE PRINCIPAL: FormularioModulos
// ============================================================
export const FormularioModulos: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    grado: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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

  // Obtener el nombre del grado para mostrarlo bonito
  const getGradoLabel = (grado: string) => {
    const map: Record<string, string> = {
      '1ro': '1er Año',
      '2do': '2do Año',
      '3ro': '3er Año',
      '4to': '4to Año',
      '5to': '5to Año',
    };
    return map[grado] || grado;
  };

  return (
    <div className="contenedor-formulario-estudiante">
      <div className="formulario-cabecera">
        <div className="insignia-form">
          <GraduationCap size={18} />
          <span>Acceso Personalizado por Grado</span>
        </div>
        <h3 className="formulario-titulo">Portal de Registro del Estudiante</h3>
        <p className="formulario-subtitulo">
          Ingresa tus datos para obtener la presentación del plan de estudio
          adaptado a tu año académico.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="formulario-cuerpo">
        <CampoTexto
          etiqueta="Nombre y Apellido:"
          nombre="nombre"
          valor={formData.nombre}
          onChange={handleChange}
          placeholder="Ej. Carlos Rodríguez"
          icon={<User size={18} />}
        />

        <div className="campo-texto-grupo">
          <label htmlFor="grado" className="campo-texto-etiqueta">
            Año / Grado Escolar:
          </label>
          <div className="campo-input-wrapper">
            <span className="campo-icono">
              <GraduationCap size={18} />
            </span>
            <select
              id="grado"
              name="grado"
              value={formData.grado}
              onChange={handleChange}
              required
              className="campo-texto-select con-icono"
            >
              <option value="">-- Selecciona tu grado --</option>
              <option value="1ro">1er Año de Bachillerato</option>
              <option value="2do">2do Año de Bachillerato</option>
              <option value="3ro">3er Año de Bachillerato</option>
              <option value="4to">4to Año de Bachillerato</option>
              <option value="5to">5to Año de Bachillerato</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="boton-submit-estudiante"
          disabled={!formData.nombre || !formData.grado}
        >
          <UserCheck size={18} /> Generar Presentación de Mi Grado
        </button>
      </form>

      {enviado && (
        <div className="resultado-presentacion-grado animacion-entrada">
          <div className="resultado-header">
            <Sparkles size={24} className="icono-sparkles" />
            <div>
              <h4>¡Bienvenido(a), {formData.nombre}!</h4>
              <p>
                Se ha generado la presentación del plan de lecciones para{' '}
                <strong>{getGradoLabel(formData.grado)}</strong>.
              </p>
            </div>
          </div>

          {/* CTA principal: Ver Presentación */}
          <div className="caja-cta-presentacion">
            <div className="info-cta">
              <BookOpen size={24} />
              <div>
                <strong>Presentación Principal de {getGradoLabel(formData.grado)}</strong>
                <p>Ver catálogo completo de módulos para tu nivel</p>
              </div>
            </div>
            <Link
              to={`/modulos/grado/${formData.grado}`}
              className="boton-ir-presentacion"
            >
              Ver Presentación <ArrowRight size={18} />
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
                <Link
                  to={`/modulos/info/${modulo.id}/${formData.grado}`}
                  className="btn-ir-modulo"
                >
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