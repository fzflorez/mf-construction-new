# MF Construction

Portafolio web de MF Construction - Empresa especializada en construcción, remodelación y acabados de alta calidad.

## 🏗️ Sobre el Proyecto

MF Construction es un sitio web moderno desarrollado con Next.js que muestra nuestros proyectos de construcción, remodelación y acabados. Los clientes pueden explorar nuestro trabajo a través de videos e imágenes, y contactarnos directamente vía WhatsApp.

## ✨ Características

- **Galería de Proyectos**: Visualización de trabajos con videos e imágenes
- **Filtrado por Categorías**:
  - Enchapes
  - Estuco y Pintura
  - Repello / Pañete
  - Obra Civil
- **Videos e Imágenes**: Galería multimedia con modales
- **Contacto Directo**: Integración con WhatsApp
- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Animaciones**: Efectos AOS para mejor experiencia

## 🛠️ Tecnologías

- **Frontend**: Next.js 14 (App Router)
- **Estilos**: Tailwind CSS
- **Fuentes**: Inter y Poppins (Google Fonts)
- **Animaciones**: AOS (Animate On Scroll)
- **Iconos**: Lucide React
- **Optimización**: Next.js Image optimization

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página de inicio
├── components/
│   ├── Header.tsx           # Navegación y header
│   ├── Footer.tsx           # Pie de página
│   ├── ProjectCard.tsx      # Cards de proyectos
│   ├── FilterButtons.tsx    # Botones de filtrado
│   ├── VideoModal.tsx       # Modal para videos
│   └── ImageGallery.tsx     # Galería de imágenes
└── data/
    └── projects.ts          # Datos de proyectos
```

## 🎨 Diseño y UX

- **Paleta de Colores**: Tema oscuro con acentos verdes (lima y verde oscuro)
- **Tipografía**: Inter para texto, Poppins para encabezados
- **Interacciones**: Hover effects, transiciones suaves, animaciones scroll
- **Accesibilidad**: Optimizado para WCAG, navegación por teclado

## 📱 Contacto

- **WhatsApp**: +57 316 704 3836
- **Email**: [Tu email aquí]
- **Ubicación**: [Tu ubicación aquí]

## 🔧 Personalización

### Modificar Colores

Edita las clases de color en los componentes:

- Verde lima: `bg-lime-600`, `text-lime-600`
- Verde oscuro: `#65a30d`
- Tema oscuro: `bg-gray-900`, `bg-gray-800`

## 🚀 Deploy

El sitio está optimizado para deploy en Netlify:

### Opción 1: Netlify CLI (Recomendado)

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Build del proyecto
npm run build

# Deploy a Netlify
netlify deploy --prod --dir=.next
```

### Opción 2: Arrastrar y Soltar

1. **Build del proyecto:**

```bash
npm run build
```

2. **Comprimir la carpeta `.next`**
3. **Subir a Netlify** mediante drag & drop

### Opción 3: GitHub Integration

1. Conectar tu repositorio a Netlify
2. Configurar build command: `npm run build`
3. Configurar publish directory: `.next`
4. Deploy automático en cada push

### Variables de Entorno (si son necesarias)

Configura en Netlify:

- `NEXT_PUBLIC_SITE_URL=https://tudominio.netlify.app`

### Configuración Adicional

Para Next.js en Netlify, asegúrate de:

- Usar Static Site Generation cuando sea posible
- Configurar redirects si usas rutas dinámicas
- Optimizar imágenes para el CDN de Netlify

## 📄 Licencia

© 2024 MF Construction. Todos los derechos reservados.

---

**Calidad y confianza en cada acabado**
