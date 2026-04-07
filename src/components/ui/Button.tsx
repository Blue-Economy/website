'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({ children, href, variant = 'primary', size = 'md', className, onClick, type = 'button', disabled }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all duration-300'
  const variants = {
    primary: 'bg-ocean-accent text-ocean-deep hover:bg-ocean-accent/90 hover:shadow-lg hover:shadow-ocean-accent/25',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm',
    outline: 'border-2 border-ocean-accent text-ocean-accent hover:bg-ocean-accent hover:text-ocean-deep',
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(base, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className)

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }
  return <button type={type} onClick={onClick} className={classes} disabled={disabled}>{children}</button>
}
