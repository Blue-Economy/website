import Container from '../layout/Container'
import Button from '../ui/Button'

type CTAProps = {
  title?: string
  subtitle?: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
}

export default function CTA({
  title = 'Join the Future of the Blue Economy',
  subtitle = 'Whether you\'re a founder, investor, or industry partner — there\'s a place for you at Mursel.',
  primaryText = 'Apply Now',
  primaryHref = '/apply',
  secondaryText = 'Partner With Us',
  secondaryHref = '/contact',
}: CTAProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-primary to-ocean-secondary" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-accent/20 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-4">{title}</h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={primaryHref} size="lg">{primaryText}</Button>
              {secondaryText && (
                <Button href={secondaryHref} variant="secondary" size="lg">{secondaryText}</Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
