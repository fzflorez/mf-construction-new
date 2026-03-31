'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import FilterButtons from '../components/FilterButtons'
import VideoModal from '../components/VideoModal'
import ImageGallery from '../components/ImageGallery'
import Footer from '../components/Footer'
import { projects, type Project } from '../data/projects'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null)

  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out',
      disable: 'mobile',
    })
  }, [])

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((project: Project) => project.category === activeFilter)

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl)
  }

  const handlePhotosClick = (images: string[]) => {
    setSelectedImages(images)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  const closeImageGallery = () => {
    setSelectedImages(null)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main className="container mx-auto max-w-7xl px-6 pt-32 pb-12 relative z-10">
        <section className="text-left mb-12" data-aos="fade-right">
          <h1 className="text-xl lg:text-2xl font-bold text-white mb-4 font-poppins">
            Trabajos Realizados
          </h1>
          <p className="text-gray-300 text-base lg:text-lg max-w-lg mb-8 font-inter">
            Galería de proyectos de construcción, remodelación y acabados.
            Selecciona una categoría para filtrar.
          </p>

          <div data-aos="fade-right" data-aos-delay="100">
            <FilterButtons
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                images={project.images}
                videoUrl={project.videoUrl}
                hasVideo={project.hasVideo}
                onVideoClick={handleVideoClick}
                onPhotosClick={handlePhotosClick}
              />
            </div>
          ))}
        </section>
      </main>

      {/* ✅ Video modal SOLO se renderiza cuando hay video */}
      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo}
          isOpen={true}
          onClose={closeVideoModal}
        />
      )}

      {/* ✅ Galería SOLO se renderiza cuando hay imágenes */}
      {selectedImages && (
        <ImageGallery
          images={selectedImages}
          isOpen={true}
          onClose={closeImageGallery}
        />
      )}

      <Footer />
    </div>
  )
}
