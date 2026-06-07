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
    id: 2,
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
    id: 3,
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
  {
    id: 4,
    title: 'Diseño de Pared en Repello Tipo Piedra',
    description:
      'Diseño de pared con repello tipo piedra y acabado en pintura. Textura natural con acabado profesional para interiores.',
    imageUrl:
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_800,h_450,f_auto,q_auto,c_fill,g_auto/v1780849411/pared-dise%C3%B1o-piedra-1_bxblep.webp',
    images: [
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780849411/pared-dise%C3%B1o-piedra-1_bxblep.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780849411/pared-dise%C3%B1o-piedra-2_gdcjje.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780849409/pared-dise%C3%B1o-piedra-3_jwggqz.webp',
    ],
    hasVideo: false,
    category: 'Repello',
  },
  {
    id: 5,
    title: 'Enchape de Gradas con Cerámica Tipo Madera',
    description:
      'Instalación de cerámica tipo madera en gradas con acabado profesional. Trabajo de enchape en escaleras con materiales de alta calidad y acabado natural.',
    imageUrl:
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_800,h_450,f_auto,q_auto,c_fill,g_auto/v1780852289/enchape-gradas-1_xxkkky.webp',
    images: [
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780852289/enchape-gradas-1_xxkkky.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780852289/enchape-gradas-2_n4oyho.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780852290/enchape-gradas-3_fjcbdk.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780852290/enchape-gradas-4_lhri9e.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780852289/enchape-gradas-5_cnfetb.webp',
    ],
    hasVideo: false,
    category: 'Enchapes',
  },
  {
    id: 6,
    title: 'Enchape de Barra-Mesón de Cocina',
    description:
      'Instalación de enchape en barra y mesón de cocina con acabado profesional. Trabajo de remodelación con materiales de alta calidad y acabado duradero.',
    imageUrl:
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_800,h_450,f_auto,q_auto,c_fill,g_auto/v1780853761/enchape-barra-1_alq60l.webp',
    images: [
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780853761/enchape-barra-1_alq60l.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780853761/enchape-barra-2_fxr9hl.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780853761/enchape-barra-3_a2shqe.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780853761/enchape-barra-4_myr93p.webp',
    ],
    videoUrl:
      'https://res.cloudinary.com/dn3kjinrh/video/upload/q_auto,w_1280/v1780865882/enchape-barra_zjugw3.mp4',
    hasVideo: true,
    category: 'Enchapes',
  },
  {
    id: 7,
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
    id: 8,
    title: 'Instalación de iluminación LED en vestier moderno de lujo',
    description:
      'Instalación de iluminación LED integrada en vestier moderno, resaltando el diseño del mobiliario, aportando una estética elegante y contemporánea al espacio.',
    imageUrl:
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_800,h_450,f_auto,q_auto,c_fill,g_auto/v1780861817/instalacion-iluminacion-led-1_e194qr.webp',
    images: [
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780861817/instalacion-iluminacion-led-1_e194qr.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780861815/instalacion-iluminacion-led-2_i1hibf.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780861818/instalacion-iluminacion-led-3_bkpvf3.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780861819/instalacion-iluminacion-led-4_vsz8fr.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780861818/instalacion-iluminacion-led-5_nmaxla.webp',
    ],
    videoUrl:
      'https://res.cloudinary.com/dn3kjinrh/video/upload/q_auto,w_1280/v1780861862/instalacion-iluminacion-led_kxwk1f.mp4',
    hasVideo: true,
    category: 'Iluminación',
  },
  {
    id: 9,
    title: 'Repello y Nivelación de Muros para Acabados Cerámicos',
    description:
      'Trabajo de repello realizado para corregir irregularidades, mejorar el alineamiento de las superficies y garantizar una base adecuada para la instalación de cerámica.',
    imageUrl:
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_800,h_450,f_auto,q_auto,c_fill,g_auto/v1780863785/repello-muro-1_y6ylee.webp',
    images: [
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780863785/repello-muro-1_y6ylee.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780863786/repello-muro-2_q43o78.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780863785/repello-muro-3_gvmlrz.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780863785/repello-muro-4_dzatcu.webp',
      'https://res.cloudinary.com/dn3kjinrh/image/upload/w_1200,f_auto,q_auto,c_limit/v1780863786/repello-muro-5_acct8r.webp',
    ],
    hasVideo: false,
    category: 'Repello',
  },
]
