/**
 * @file registroProyectos.ts
 * @description Registro centralizado de proyectos estudiantiles de la institución.
 * Permite la incorporación modular de nuevos proyectos (ej. Ciberseguridad, Informática, Robótica).
 */

export interface ProyectoEstudiantil {
  id: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  autores: string;
  gradoOComunidad: string;
  icono: string;
  rutaBase: string;
  activo: boolean;
  fechaCreacion: string;
  etiquetas: string[];
}

/**
 * Listado de proyectos registrados en la plataforma.
 * Para agregar un nuevo proyecto, basta con incluir su configuración en este arreglo.
 */
export const PROYECTOS_REGISTRADOS: ProyectoEstudiantil[] = [
  {
    id: 'ciberseguridad',
    titulo: 'Ciberseguridad Escolar y Conciencia Digital',
    categoria: 'Ciberseguridad y Privacidad',
    descripcion: 'Módulos interactivos y guías orientadas a la protección de datos, prevención de phishing y seguridad en redes sociales.',
    autores: 'Equipo de Ciberseguridad C.E. Lemus',
    gradoOComunidad: '1ro a 5to Año y Comunidad Escolar',
    icono: 'ShieldCheck',
    rutaBase: '/proyectos/ciberseguridad',
    activo: true,
    fechaCreacion: '2026',
    etiquetas: ['Seguridad', 'Phishing', 'Protección de Datos', 'Redes Sociales']
  }

];

/**
 * Función de utilidad para obtener los proyectos activos.
 * @returns Lista de proyectos habilitados en el portal.
 */
export const obtenerProyectosActivos = (): ProyectoEstudiantil[] => {
  return PROYECTOS_REGISTRADOS.filter((proyecto) => proyecto.activo);
};

/**
 * Función de utilidad para buscar un proyecto por su ID único.
 * @param id Identificador único del proyecto.
 * @returns Objeto de proyecto o undefined si no existe.
 */
export const obtenerProyectoPorId = (id: string): ProyectoEstudiantil | undefined => {
  return PROYECTOS_REGISTRADOS.find((proyecto) => proyecto.id === id);
};
