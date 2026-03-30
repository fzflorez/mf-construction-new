'use client'

import { cn } from '../lib/utils'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    ghost:
      'bg-transparent text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10 focus:ring-gray-500',
    icon: 'bg-white bg-opacity-20 backdrop-blur-md text-white hover:bg-opacity-30 border border-white border-opacity-20',
  }

  const sizes = {
    sm: 'px-3 py-1.5 rounded-md',
    md: 'px-4 py-2 rounded-lg',
    lg: 'px-6 py-3 rounded-lg',
    icon: 'w-10 h-10 rounded-full',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
