export interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  images: string[]
  videoUrl?: string
  hasVideo: boolean
  category: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Remodelación Completa Habitación',
    description:
      'Aplicación de estuco plástico y pintura vinílica tipo 2. Instalación de panel para cielo raso con acabado en estuco plástico.',
    imageUrl: '/images/habitacion-estuco-1.webp',
    images: [
      '/images/habitacion-estuco-1.webp',
      '/images/habitacion-estuco-2.webp',
      '/images/habitacion-estuco-3.webp',
    ],
    videoUrl: '/videos/habitacion-estuco.mp4',
    hasVideo: true,
    category: 'Estuco y Pintura',
  },
  {
    id: 2,
    title: 'Enchape en Fachada',
    description:
      'Instalación de enchapes de piedra natural en fachada comercial con acabado profesional.',
    imageUrl: '/images/habitacion-estuco-1.webp',
    images: [
      '/images/habitacion-estuco-1.webp',
      '/images/habitacion-estuco-2.webp',
      '/images/habitacion-estuco-3.webp',
    ],
    hasVideo: true,
    category: 'Enchapes',
  },
  {
    id: 3,
    title: 'Estuco y Pintura Interior',
    description:
      'Aplicación de estuco de alta calidad y sistema de pintura duradero en interiores.',
    imageUrl: '/images/habitacion-estuco-1.webp',
    images: [
      '/images/habitacion-estuco-1.webp',
      '/images/habitacion-estuco-2.webp',
      '/images/habitacion-estuco-3.webp',
    ],
    hasVideo: true,
    category: 'Estuco y Pintura',
  },
  // {
  //   id: 4,
  //   title: 'Repello de Exteriores',
  //   description:
  //     'Preparación y aplicación de repello en muros exteriores con técnica profesional.',
  //   imageUrl: '/images/habitacion-estuco-1.webp',
  //   images: [
  //     '/images/habitacion-estuco-1.webp',
  //     '/images/habitacion-estuco-2.webp',
  //     '/images/habitacion-estuco-3.webp',
  //   ],
  //   videoUrl: '/videos/habitacion-estuco.mp4',
  //   hasVideo: true,
  //   category: 'Repello / Pañete',
  // },
  // {
  //   id: 5,
  //   title: 'Construcción de Losa',
  //   description:
  //     'Ejecución de losa de concreto armado para estructura residencial con refuerzo adecuado.',
  //   imageUrl: '/images/habitacion-estuco-1.webp',
  //   images: [
  //     '/images/habitacion-estuco-1.webp',
  //     '/images/habitacion-estuco-2.webp',
  //     '/images/habitacion-estuco-3.webp',
  //   ],
  //   hasVideo: true,
  //   category: 'Obra Civil',
  // },
]
