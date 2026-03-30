'use client'

import Image from 'next/image'
import { Play, Camera } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  images: string[]
  videoUrl?: string
  hasVideo?: boolean
  onVideoClick?: (videoUrl: string) => void
  onPhotosClick?: (images: string[]) => void
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  images,
  videoUrl,
  hasVideo = false,
  onVideoClick,
  onPhotosClick,
}: ProjectCardProps) {
  const handleVideoClick = () => {
    if (videoUrl && onVideoClick) {
      onVideoClick(videoUrl)
    }
  }

  const handlePhotosClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onPhotosClick) {
      onPhotosClick(images)
    }
  }

  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent"
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        const title = e.currentTarget.querySelector(
          '.card-title',
        ) as HTMLElement
        if (title) {
          title.style.color = '#65a30d'
        }
        e.currentTarget.style.borderColor = '#65a30d'
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        const title = e.currentTarget.querySelector(
          '.card-title',
        ) as HTMLElement
        if (title) {
          title.style.color = '#ffffff'
        }
        e.currentTarget.style.borderColor = 'transparent'
      }}
    >
      <div className="relative aspect-video">
        {hasVideo ? (
          <video
            className="w-full h-full object-cover"
            poster={images.length > 0 ? images[0] : imageUrl}
            muted
            preload="metadata"
            playsInline
            onClick={handleVideoClick}
            aria-label="Reproducir video"
          >
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-colors">
              <Play
                className="w-8 h-8 text-gray-900 ml-1"
                fill="currentColor"
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="card-title text-white text-lg font-semibold mb-2 transition-colors duration-300 font-poppins">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 font-inter">
          {description}
        </p>
        <a
          href="#"
          onClick={handlePhotosClick}
          className="inline-flex items-center text-sm font-medium transition-all duration-300 cursor-pointer relative"
          style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.color = '#ffffff'
            const progressBar = e.currentTarget.querySelector(
              '.progress-bar',
            ) as HTMLElement
            if (progressBar) {
              progressBar.style.width = '100%'
            }
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
            const progressBar = e.currentTarget.querySelector(
              '.progress-bar',
            ) as HTMLElement
            if (progressBar) {
              progressBar.style.width = '0%'
            }
          }}
        >
          <Camera className="w-4 h-4 mr-2" />
          Ver fotos
          <div
            className="progress-bar absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-500 ease-out"
            style={{
              width: '0%',
              position: 'absolute',
              bottom: '-4px',
              left: '0',
              height: '2px',
              backgroundColor: 'white',
              transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </a>
      </div>
    </div>
  )
}
