import React, { useState } from 'react';
import {
  Users,
  Database,
  UserCheck,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Building2
} from 'lucide-react';
import HeaderModulo from '../../../../components/comunes/HeaderModulos/HeaderModulo';
import '../1ro/ProteccionCuentas1ro.css'; // Reutilizamos estilos base

interface RolUsuario {
  id: string;
  nombre: string;
  descripcion: string;
  permisosPermitidos: string[];
}

const ROLES: RolUsuario[] = [
  { id: 'estudiante', nombre: 'Estudiante', descripcion: 'Puede ver sus notas e inscribirse.', permisosPermitidos: ['ver_notas', 'editar_perfil'] },
  { id: 'profesor', nombre: 'Profesor', descripcion: 'Puede modificar notas de sus clases.', permisosPermitidos: ['ver_notas', 'editar_notas', 'editar_perfil'] },
  { id: 'admin', nombre: 'Administrador IT', descripcion: 'Puede modificar toda la plataforma.', permisosPermitidos: ['ver_notas', 'editar_notas', 'editar_perfil', 'borrar_sistemas'] },
];

export const ProteccionCuentas5to: React.FC = () => {
  const [rolSeleccionado, setRolSeleccionado] = useState<string>('estudiante');
  const [respuestaQuiz, setRespuestaQuiz] = useState<number | null>(null);

  const rolActivo = ROLES.find(r => r.id === rolSeleccionado);

  const verificarPermiso = (permisoRequerido: string) => {
    return rolActivo?.permisosPermitidos.includes(permisoRequerido);
  };

  return (
    <main className="pagina-modulo-proteccion">
      <HeaderModulo
        grado="5to"
        modulo="5: Accesos a Nivel Experto"
        titulo="Gestión de Identidades y RBAC"
        subTitulo="Administra identidades y accesos institucionales con estándares profesionales. Aprende sobre Control de Acceso Basado en Roles (RBAC)."
        categoria="Protección de Cuentas y Accesos"
        tiempoEstimado="50 min"
        icono={<Building2 size={36} />}
      />

      <div className="contenedor-proteccion-contenido">
        {/* SECCIÓN 1: CONCEPTOS */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <Sparkles className="icono-bloque-azul" size={24} />
            <h2>1. Control de Acceso Basado en Roles (RBAC)</h2>
          </div>
          <p className="texto-lectura-modulo">
            En organizaciones grandes como una universidad o un liceo, no todos los usuarios pueden tener los mismos permisos. El sistema <strong>RBAC</strong> asigna permisos a "Roles" (ej. Profesor) y luego asigna usuarios a esos roles.
          </p>

          <div className="grid-pilares-proteccion">
            <div className="caja-pilar-proteccion">
              <Building2 className="icono-pilar azul" size={28} />
              <h3>Principio de Mínimo Privilegio</h3>
              <p>Otorgar a un usuario estrictamente los permisos mínimos necesarios para que pueda hacer su trabajo, y nada más.</p>
            </div>

            <div className="caja-pilar-proteccion">
              <Database className="icono-pilar rojo" size={28} />
              <h3>Filtración de Datos (Data Breach)</h3>
              <p>Cuando la base de datos de contraseñas de una empresa es robada. Si un usuario repite su clave, los atacantes la probarán en otros sitios.</p>
            </div>

            <div className="caja-pilar-proteccion">
              <ShieldCheck className="icono-pilar verde" size={28} />
              <h3>Políticas de Seguridad</h3>
              <p>Definir reglas en la institución: Obligar a usar claves de 12 caracteres y forzar el uso del 2FA para el personal docente.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: SIMULADOR RBAC */}
        <section className="bloque-modulo-tarjeta interactivo-caja">
          <div className="encabezado-bloque">
            <Users className="icono-bloque-azul" size={24} />
            <h2>2. Laboratorio: Simulador RBAC</h2>
          </div>
          <p className="subtitulo-bloque">
            Selecciona un Rol de la base de datos del Liceo y observa qué acciones le permite ejecutar el sistema.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {ROLES.map(rol => (
              <button
                key={rol.id}
                onClick={() => setRolSeleccionado(rol.id)}
                className={`btn-decision ${rolSeleccionado === rol.id ? 'seguro' : ''}`}
                style={{ flex: '1', justifyContent: 'center' }}
              >
                <UserCheck size={18} /> {rol.nombre}
              </button>
            ))}
          </div>

          <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radio-principal)', border: '1px solid var(--color-borde)' }}>
            <h3 style={{ marginTop: 0 }}>Rol Seleccionado: {rolActivo?.nombre}</h3>
            <p style={{ color: 'var(--color-texto-secundario)', marginBottom: '1.5rem' }}>{rolActivo?.descripcion}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1rem', backgroundColor: '#fff', border: `1px solid ${verificarPermiso('ver_notas') ? 'var(--color-ciber-secundario)' : 'var(--color-ciber-alerta)'}`, borderRadius: 'var(--radio-principal)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {verificarPermiso('ver_notas') ? <CheckCircle2 color="var(--color-ciber-secundario)" /> : <XCircle color="var(--color-ciber-alerta)" />}
                Consultar Calificaciones
              </div>
              
              <div style={{ padding: '1rem', backgroundColor: '#fff', border: `1px solid ${verificarPermiso('editar_perfil') ? 'var(--color-ciber-secundario)' : 'var(--color-ciber-alerta)'}`, borderRadius: 'var(--radio-principal)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {verificarPermiso('editar_perfil') ? <CheckCircle2 color="var(--color-ciber-secundario)" /> : <XCircle color="var(--color-ciber-alerta)" />}
                Editar Perfil Propio
              </div>

              <div style={{ padding: '1rem', backgroundColor: '#fff', border: `1px solid ${verificarPermiso('editar_notas') ? 'var(--color-ciber-secundario)' : 'var(--color-ciber-alerta)'}`, borderRadius: 'var(--radio-principal)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {verificarPermiso('editar_notas') ? <CheckCircle2 color="var(--color-ciber-secundario)" /> : <XCircle color="var(--color-ciber-alerta)" />}
                Modificar Notas de Alumnos
              </div>

              <div style={{ padding: '1rem', backgroundColor: '#fff', border: `1px solid ${verificarPermiso('borrar_sistemas') ? 'var(--color-ciber-secundario)' : 'var(--color-ciber-alerta)'}`, borderRadius: 'var(--radio-principal)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {verificarPermiso('borrar_sistemas') ? <CheckCircle2 color="var(--color-ciber-secundario)" /> : <XCircle color="var(--color-ciber-alerta)" />}
                Borrar Base de Datos
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: QUIZ */}
        <section className="bloque-modulo-tarjeta">
          <div className="encabezado-bloque">
            <HelpCircle className="icono-bloque-amarillo" size={24} />
            <h2>3. Evaluación Final de Grado</h2>
          </div>
          <p className="texto-lectura-modulo">
            <strong>Pregunta:</strong> Aplicando el Principio del Mínimo Privilegio, si un profesor necesita registrar las notas de su materia en el sistema, ¿Debería dársele acceso de Administrador al sistema completo por comodidad?
          </p>

          <div className="opciones-quiz-modulo">
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 1 ? 'correcta' : ''}`}
              onClick={() => setRespuestaQuiz(1)}
            >
              A) No. Solo debe tener un Rol que le permita editar las notas de su curso. Darle permisos de Administrador es un riesgo innecesario si su cuenta es comprometida.
            </button>
            <button
              className={`opcion-quiz-btn ${respuestaQuiz === 2 ? 'incorrecta' : ''}`}
              onClick={() => setRespuestaQuiz(2)}
            >
              B) Sí. Dar permisos completos ahorra problemas de configuración técnica y agiliza el trabajo del profesor.
            </button>
          </div>

          {respuestaQuiz === 1 && (
            <div className="feedback-quiz correcto">
              ✅ <strong>¡Correcto, Experto!</strong> Si la cuenta del profesor sufre un ataque de Phishing, el atacante solo podrá afectar una clase. Si tuviese acceso de Administrador, el atacante destruiría todo el sistema. ¡El mínimo privilegio salva organizaciones!
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProteccionCuentas5to;
