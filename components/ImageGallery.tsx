'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Button from './Button'

interface ImageGalleryProps {
  images: string[]
  isOpen: boolean
  onClose: () => void
  initialIndex?: number
}

export default function ImageGallery({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0px' // Prevenir jump
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  if (!isOpen || images.length === 0) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'Escape') onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative w-full max-w-4xl transform transition-all duration-300 scale-100">
        {/* Botón X para cerrar */}
        <Button
          onClick={onClose}
          variant="icon"
          size="icon"
          ariaLabel="Cerrar galería"
          className="absolute top-2 right-2 z-10"
        >
          <X className="w-6 h-6 text-white" />
        </Button>

        {/* Contenedor principal del carrusel - Responsive orientation */}
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border border-white border-opacity-10">
          {/* Contenedor responsive: vertical en móvil, horizontal en desktop */}
          <div className="w-full h-[60vh] md:h-[80vh] lg:aspect-video">
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex]}
                alt={`Imagen ${currentIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Flechas de navegación */}
          {images.length > 1 && (
            <>
              <Button
                onClick={goToPrevious}
                variant="icon"
                size="icon"
                ariaLabel="Imagen anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent border border-white hover:bg-white hover:bg-opacity-20"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </Button>

              <Button
                onClick={goToNext}
                variant="icon"
                size="icon"
                ariaLabel="Siguiente imagen"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border border-white hover:bg-white hover:bg-opacity-20"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </Button>
            </>
          )}
        </div>

        {/* Barra inferior del modal */}
        <div className="absolute -bottom-2 left-0 right-0 h-4 bg-linear-to-t from-black to-transparent opacity-50 rounded-b-xl"></div>

        {/* Controles inferiores */}
        <div className="mt-4 text-center">
          {/* Indicadores */}
          <div className="flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="text-center mt-2 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  )
}
