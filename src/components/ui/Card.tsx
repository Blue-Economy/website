import { cn } from '@/lib/utils'

type CardProps = {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn(
      'bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm',
      hover && 'hover:border-ocean-accent/30 hover:bg-white/10 transition-all duration-300',
      className
    )}>
      {children}
    </div>
  )
}
