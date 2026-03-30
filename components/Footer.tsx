'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center text-white space-y-2 md:space-y-0 md:space-x-2">
            <span className="text-sm font-inter">
              {currentYear} MF | Construcción.
            </span>
            <span className="text-sm text-gray-300 font-inter">
              Todos los derechos reservados.
            </span>
          </div>

          <div className="text-sm text-white font-inter">
            Calidad y confianza en cada acabado
          </div>
        </div>
      </div>
    </footer>
  )
}
