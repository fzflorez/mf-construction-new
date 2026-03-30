'use client'

interface FilterButtonsProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function FilterButtons({
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) {
  const filters = [
    'Todos',
    'Enchapes',
    'Estuco y Pintura',
    'Repello / Pañete',
    'Obra Civil',
  ]

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`rounded-full text-xs lg:text-sm px-5 py-2 font-medium transition-colors cursor-pointer ${
            activeFilter === filter
              ? 'bg-lime-600 text-white'
              : 'bg-gray-700 text-gray-300 border border-gray-500'
          }`}
          style={{
            backgroundColor:
              activeFilter === filter ? '#65a30d' : 'transparent',
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (activeFilter !== filter) {
              e.currentTarget.style.backgroundColor = '#6b7280'
            }
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (activeFilter === filter) {
              e.currentTarget.style.backgroundColor = '#65a30d'
            } else {
              e.currentTarget.style.backgroundColor = 'transparent'
            }
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
