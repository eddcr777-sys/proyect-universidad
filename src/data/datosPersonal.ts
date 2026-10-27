import type { MemberItem } from '../components/comunes/tarjetas/members';

import foto1 from '../assets/guipe.png';
import foto2 from '../assets/elvis.png';
import foto3 from '../assets/le.jpeg';
import foto4 from '../assets/pbk-Hero-3.jpg';


export const TEAM_INST_MEMBER: MemberItem[] = [
  {
    id: 1,
    name: 'Belén Campos de Santos',
    role: 'Directora Fundadora (1984)',
    description: 'Primera directora asignada por decreto del Ministerio de Educación.',
    imagen: foto1
  },
  {
    id: 2,
    name: 'Juan Navarro Carvajal',
    role: 'Subdirector / Director (1988)',
    description: 'Pilar fundamental en los inicios y en la transición al nombre actual.',
    imagen: foto2
  },
  {
    id: 3,
    name: 'Eudys Hidalgo',
    role: 'Directora Actual',
    description: 'Encargada de la gestión educativa, académica y el bienestar estudiantil en la actualidad.',
    imagen: foto3
  },
  {
    id: 4,
    name: 'Antonio Lemus Pérez',
    role: 'Epónimo de la Institución',
    description: 'Insigne educador sucrense cuyo nombre honra a la institución desde 1988.',
    imagen: foto4
  }
];

export const TEAM_MEMBERS: MemberItem[] = [
  {
    id: 1,
    name: 'Henyer Guipe',
    role: 'Desarrollador',
    description: 'Desarrollador del proyecto de ciberseguridad en el Complejo Educativo Antonio Lemus Pérez.',
    imagen: foto1,
    redesSociales: [
      { id: 1, nombre: 'GitHub', tipo: 'github', url: 'https://github.com' },
      { id: 2, nombre: 'LinkedIn', tipo: 'linkedin', url: 'https://linkedin.com' },
      { id: 3, nombre: 'Instagram', tipo: 'instagram', url: 'https://instagram.com' },
      { id: 4, nombre: 'Facebook', tipo: 'facebook', url: 'https://facebook.com' }
    ]
  },
  {
    id: 2,
    name: 'Elvis Cordova',
    role: 'Desarrollador',
    description: 'Desarrollador del proyecto de ciberseguridad en el Complejo Educativo Antonio Lemus Pérez.',
    imagen: foto2,
    redesSociales: [
      { id: 1, nombre: 'GitHub', tipo: 'github', url: 'https://github.com' },
      { id: 2, nombre: 'LinkedIn', tipo: 'linkedin', url: 'https://linkedin.com' },
      { id: 3, nombre: 'Instagram', tipo: 'instagram', url: 'https://instagram.com' },
      { id: 4, nombre: 'Facebook', tipo: 'facebook', url: 'https://facebook.com' }
    ]
  }
];