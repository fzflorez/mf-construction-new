'use client'

import Button from './Button'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const whatsappContact = () => {
    window.open('https://wa.me/573167043836', '_blank')
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/70 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-lime-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg font-inter">
                  MF
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-white hidden sm:block font-poppins">
                MF Construction
              </h1>
            </div>

            {/* Desktop Button */}
            <button
              className="border border-white border-opacity-50 rounded-full hidden sm:flex items-center px-4 py-2 text-sm font-medium transition-colors cursor-pointer text-white"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor = '#6b7280'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
              onClick={whatsappContact}
            >
              <Phone className="w-4 h-4 mr-2 text-white" />
              Contactar
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden p-2 text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 sm:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={toggleMobileMenu}
          />
          <div className="fixed top-0 left-0 right-0 bg-gray-900 shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-lime-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm font-inter">
                    MF
                  </span>
                </div>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 flex flex-col">
              <Button
                variant="ghost"
                size="sm"
                className="border border-white border-opacity-50 rounded-full w-full justify-center"
                onClick={whatsappContact}
              >
                <Phone className="w-5 h-5 mr-2" />
                Contactar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
