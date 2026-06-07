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
    imageUrl:
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_800,h_450,f_auto,q_auto,c_fill,g_auto/v1780796282/habitacion-estuco-1_q0lqhv.webp',
    images: [
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-1_q0lqhv.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-2_kxvkbq.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-3_a7awes.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-4_lb7ou0.webp',
    ],
    videoUrl:
      'https://res.cloudinary.com/dn3kjinrh/video/upload/q_auto,w_1280/v1780798044/habitacion-estuco_zai3qm.mp4',
    hasVideo: true,
    category: 'Estuco y Pintura',
  },
  {
    id: 2,
    title: 'Enchape en Fachada',
    description:
      'Instalación de enchapes de piedra natural en fachada comercial con acabado profesional.',
    imageUrl:
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_800,h_450,f_auto,q_auto,c_fill,g_auto/v1780796282/habitacion-estuco-1_q0lqhv.webp',
    images: [
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-1_q0lqhv.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-2_kxvkbq.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-3_a7awes.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-4_lb7ou0.webp',
    ],
    videoUrl:
      'https://res.cloudinary.com/dn3kjinrh/video/upload/q_auto,w_1280/v1780798044/habitacion-estuco_zai3qm.mp4',
    hasVideo: true,
    category: 'Enchapes',
  },
  {
    id: 3,
    title: 'Estuco y Pintura Interior',
    description:
      'Aplicación de estuco de alta calidad y sistema de pintura duradero en interiores.',
    imageUrl:
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_800,h_450,f_auto,q_auto,c_fill,g_auto/v1780796282/habitacion-estuco-1_q0lqhv.webp',
    images: [
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-1_q0lqhv.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-2_kxvkbq.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-3_a7awes.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780796282/habitacion-estuco-4_lb7ou0.webp',
    ],
    videoUrl:
      'https://res.cloudinary.com/dn3kjinrh/video/upload/q_auto,w_1280/v1780798044/habitacion-estuco_zai3qm.mp4',
    hasVideo: true,
    category: 'Estuco y Pintura',
  },
  {
    id: 4,
    title: 'Remodelación de Baño con Cerámica',
    description:
      'Instalación de cerámica en baño completo con acabado profesional. Trabajo de remodelación integral con materiales de alta calidad.',
    imageUrl:
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_800,h_450,f_auto,q_auto,c_fill,g_auto/v1780796282/habitacion-estuco-1_q0lqhv.webp',
    images: [
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780798284/remodelacion-ba%C3%B1o-2_wdjx14.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780798285/remodelacion-ba%C3%B1o-1_kf2vmh.webp',
    ],
    videoUrl:
      'https://res.cloudinary.com/dn3kjinrh/video/upload/q_auto,w_1280/v1780798637/remodelacion-ba%C3%B1o_og4xvp.mp4',
    hasVideo: true,
    category: 'Enchapes',
  },
  {
    id: 5,
    title: 'Enchape de Baño con Instalación Completa',
    description:
      'Instalación de enchapes en piso y paredes con acabado profesional. Instalación completa de inodoro, lavamanos y accesorios con acabados de alta calidad.',
    imageUrl:
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_800,h_450,f_auto,q_auto,c_fill,g_auto/v1780799950/enchape-ba%C3%B1o-1.1_zqyksp.webp',
    images: [
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780799950/enchape-ba%C3%B1o-1.1_zqyksp.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780799950/enchape-ba%C3%B1o-1.2_qam8gg.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780799950/enchape-ba%C3%B1o-1.3_cq4yra.webp',
    ],
    hasVideo: false,
    category: 'Enchapes',
  },
  {
    id: 6,
    title: 'Enchape de Baño con Instalación Completa',
    description:
      'Instalación de enchapes en piso y paredes con acabado profesional. Instalación completa de inodoro, lavamanos y accesorios con acabados de alta calidad.',
    imageUrl:
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_800,h_450,f_auto,q_auto,c_fill,g_auto/v1780800579/enchape-ba%C3%B1o-2.1_qa35sp.webp',
    images: [
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780800579/enchape-ba%C3%B1o-2.1_qa35sp.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780800579/enchape-ba%C3%B1o-2.2_scpcis.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780800580/enchape-ba%C3%B1o-2.3_s7nfop.webp',
    ],
    hasVideo: false,
    category: 'Enchapes',
  },
]
