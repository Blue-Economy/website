import Container from '../layout/Container'
import Button from '../ui/Button'

type HeroProps = {
  title: string
  subtitle?: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  compact?: boolean
}

export default function Hero({ title, subtitle, primaryCta, secondaryCta, compact = false }: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? 'pt-32 pb-16' : 'pt-32 pb-24 md:pt-40 md:pb-32'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep via-ocean-primary/40 to-ocean-deep" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ocean-secondary/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryCta && <Button href={primaryCta.href} size="lg">{primaryCta.text}</Button>}
              {secondaryCta && <Button href={secondaryCta.href} variant="secondary" size="lg">{secondaryCta.text}</Button>}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
