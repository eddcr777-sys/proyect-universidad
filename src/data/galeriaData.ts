export interface FotoGaleria {
  id: number;
  src: string;
  alt: string;
  titulo?: string;
  descripcion?: string;
  categoria: string; // Añadimos categoría
}

import foto1 from '../assets/lb.jpeg';
import foto2 from '../assets/lemu.jpeg';
import foto3 from '../assets/le.jpeg';
import foto4 from '../assets/pbk-Hero-3.jpg';

export const GALERIA_FOTOS: FotoGaleria[] = [
  {
    id: 1,
    src: foto1,
    alt: 'Fachada principal',
    titulo: 'Fachada Principal',
    descripcion: 'Nuestra sede en Av. Las Industrias.',
    categoria: 'Instalaciones',
  },
  {
    id: 2,
    src: foto2,
    alt: 'Cancha deportiva',
    titulo: 'Cancha Deportiva',
    descripcion: 'Espacio para el deporte y la integración.',
    categoria: 'Instalaciones',
  },
  {
    id: 3,
    src: foto3,
    alt: 'Aulas',
    titulo: 'Aulas',
    descripcion: 'Ambientes de aprendizaje modernos.',
    categoria: 'Instalaciones',
  },
  {
    id: 4,
    src: foto4,
    alt: 'Actividades',
    titulo: 'Actividades',
    descripcion: 'Momentos que construyen comunidad.',
    categoria: 'Jornadas Educativas',
  },
  // Agrega más fotos con su categoría correspondiente
];