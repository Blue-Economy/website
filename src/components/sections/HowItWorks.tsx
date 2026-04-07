import Container from '../layout/Container'
import SectionTitle from '../ui/SectionTitle'
import { STEPS } from '@/lib/constants'

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-ocean-primary/20">
      <Container>
        <SectionTitle
          label="Our Process"
          title="How It Works"
          subtitle="From opportunity identification to global scale — a proven path."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-ocean-accent/30 to-transparent" />
              )}
              <div className="font-heading text-5xl font-bold text-ocean-accent/20 mb-3">{step.number}</div>
              <h3 className="font-heading font-semibold text-white text-xl mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
