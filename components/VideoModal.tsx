'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import Button from './Button'

interface VideoModalProps {
  videoUrl: string
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({
  videoUrl,
  isOpen,
  onClose,
}: VideoModalProps) {
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

  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handlePlay = () => {
    videoRef.current?.play()
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl transform transition-all duration-300 scale-100">
        {/* Botón X para cerrar */}
        <Button
          onClick={onClose}
          variant="icon"
          size="icon"
          ariaLabel="Cerrar video"
          className="absolute top-2 right-2 z-10"
        >
          <X className="w-6 h-6 text-white" />
        </Button>

        {/* Contenedor del video con aspect ratio responsive */}
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border border-white border-opacity-10">
          <div className="w-full h-[60vh] md:h-[80vh] lg:aspect-video relative">
            {/* VIDEO */}
            <video
              ref={videoRef}
              key={videoUrl}
              className="w-full h-full object-contain"
              controls
              playsInline
              preload="none"
              onPlay={() => setIsPlaying(true)}
              onPause={handlePause}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>

            {/* BOTÓN PLAY (overlay) */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
              >
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-colors">
                  <Play
                    className="w-8 h-8 text-gray-900 ml-1"
                    fill="currentColor"
                  />
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Barra inferior del modal */}
        <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-t from-black to-transparent opacity-50 rounded-b-xl"></div>
      </div>
    </div>
  )
}
