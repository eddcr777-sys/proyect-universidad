import img1 from '../assets/images.jpeg';
import img2 from '../assets/lem.jpeg';
import img3 from '../assets/le.jpeg';
import img4 from '../assets/lemu.jpeg';
import img5 from '../assets/pbk-Hero-3.jpg';


export interface Labor {
  id: number;
  titulo: string;
  resumen: string;
  detalle: string;
  imagen: string;
}

export interface Personal {
  id: number;
  cargo: string;
  subtitulo: string;
  resumen: string;
  detalle: string;
  imagen: string;
}

export interface Diapositiva {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}

export const LABORES_DATA: Labor[] = [
  {
    id: 1,
    titulo: 'Formación Académica',
    resumen: 'Impartición de Educación Media General con altos estándares éticos, científicos y culturales orientados al desarrollo.',
    detalle: 'Nuestro programa académico está enfocado en dotar a los estudiantes de competencias críticas y analíticas, promoviendo proyectos científicos y humanistas que preparan de forma sólida a cada joven para la educación universitaria.',
    imagen: img1
  },
  {
    id: 2,
    titulo: 'Tecnología y Ciberseguridad',
    resumen: 'Proyectos de inclusión y alfabetización digital en alianza estratégica con universidades e instituciones tecnológicas.',
    detalle: 'Implementamos talleres de uso seguro de internet, programación básica y resguardo de la identidad digital, educando a toda la comunidad escolar frente a los desafíos tecnológicos actuales.',
    imagen: img2
  },
  {
    id: 3,
    titulo: 'Atención Nutricional',
    resumen: 'Garantía del Programa de Alimentación Escolar (PAE) para fortalecer el bienestar integral de la comunidad estudiantil.',
    detalle: 'A través de una gestión coordinada con los comités de alimentación, aseguramos raciones alimenticias balanceadas diariamente para optimizar el rendimiento cognitivo y físico de los alumnos.',
    imagen: img3
  },
  {
    id: 4,
    titulo: 'Atención Nutricional',
    resumen: 'Garantía del Programa de Alimentación Escolar (PAE) para fortalecer el bienestar integral de la comunidad estudiantil.',
    detalle: 'A través de una gestión coordinada con los comités de alimentación, aseguramos raciones alimenticias balanceadas diariamente para optimizar el rendimiento cognitivo y físico de los alumnos.',
    imagen: img3
  },
  
];

export const PERSONAL_DATA: Personal[] = [
  {
    id: 1,
    cargo: 'Equipo Directivo',
    subtitulo: 'Gestión y Liderazgo',
    resumen: 'Encargados de coordinar la excelencia pedagógica, administrativa e institucional.',
    detalle: 'El equipo directivo guía las políticas educativas de la institución con un enfoque humanista y de apertura tecnológica, asegurando una atención directa y cercana con los representantes y la comunidad escolar.',
    imagen: img4
  },
  {
    id: 2,
    cargo: 'Cuerpo Docente',
    subtitulo: 'Profesorado Multidisciplinario',
    resumen: 'Educadores guiados fuertemente por la enseñanza socio-ética y tecnológica.',
    detalle: 'Nuestros profesores combinan la vocación tradicional de la enseñanza con metodologías modernas, promoviendo el pensamiento crítico, la investigación científica y la ciberseguridad en cada aula.',
    imagen: img1
  },
  {
    id: 3,
    cargo: 'Personal Administrativo',
    subtitulo: 'Soporte Operativo',
    resumen: 'Garantizan el funcionamiento diario, control de matrícula y mantenimiento.',
    detalle: 'El personal de apoyo administrativo y operativo asegura la correcta gestión de trámites estudiantiles, el orden de las instalaciones y el mantenimiento constante de los espacios escolares.',
    imagen: img2
  },
  {
    id: 4,
    cargo: 'Personal Administrativo',
    subtitulo: 'Soporte Operativo',
    resumen: 'Garantizan el funcionamiento diario, control de matrícula y mantenimiento.',
    detalle: 'El personal de apoyo administrativo y operativo asegura la correcta gestión de trámites estudiantiles, el orden de las instalaciones y el mantenimiento constante de los espacios escolares.',
    imagen: img2
  }
];

export const CARRUSEL_LABORES_DATA: Diapositiva[] = [
  { id: 1, titulo: 'Jornadas Educativas', descripcion: 'Acompañamiento cercano y personalizado para el enriquecimiento intelectual.', imagen: img1 },
  { id: 2, titulo: 'Talleres Tecnológicos', descripcion: 'Espacios prácticos orientados a la ciberseguridad y alfabetización digital.', imagen: img2 },
  { id: 3, titulo: 'Comunidad Activa', descripcion: 'Trabajo conjunto entre docentes, estudiantes y representantes.', imagen: img3 }
];

export const CARRUSEL_GALERIA_DATA: Diapositiva[] = [
  { id: 1, titulo: 'Campus Principal', descripcion: 'Áreas comunes amplias y espacios abiertos diseñados para el desarrollo armónico de la juventud sucrense.', imagen: img1 },
  { id: 2, titulo: 'Laboratorio Tecnológico', descripcion: 'Espacios adaptados para las prácticas de alfabetización digital y ciberseguridad enlazados con la educación moderna.', imagen: img2 },
  { id: 3, titulo: 'Clases Magistrales', descripcion: 'Dinamismo y constante participación activa de los alumnos bajo la guía de un cuerpo docente altamente preparado.', imagen: img3 }
];

export const CARRUSEL_PERSONAL_DATA: Diapositiva[] = [
  { id: 1, titulo: 'Equipo Directivo', descripcion: 'Gestión y Liderazgo Institucional', imagen: img4 },
  { id: 2, titulo: 'Cuerpo Docente', descripcion: 'Profesorado Multidisciplinario', imagen: img1 },
  { id: 3, titulo: 'Personal Administrativo', descripcion: 'Soporte Operativo y Técnico', imagen: img2 }
];