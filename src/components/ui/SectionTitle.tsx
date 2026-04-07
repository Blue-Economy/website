import { cn } from '@/lib/utils'

type SectionTitleProps = {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionTitle({ label, title, subtitle, center = true, light = true }: SectionTitleProps) {
  return (
    <div className={cn(center && 'text-center', 'mb-12')}>
      {label && (
        <span className="inline-block text-ocean-accent font-heading text-sm font-semibold tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className={cn(
        'font-heading font-semibold text-3xl md:text-4xl mb-4',
        light ? 'text-white' : 'text-ocean-deep'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'max-w-2xl text-lg',
          center && 'mx-auto',
          light ? 'text-gray-400' : 'text-gray-600'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
