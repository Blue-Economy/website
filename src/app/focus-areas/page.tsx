import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import { focusAreas } from '@/data/focusAreas'

export default function FocusAreasPage() {
  return (
    <>
      <Hero
        title="Blue Economy Focus Areas"
        subtitle="We operate across six high-impact verticals, identifying opportunities where technology meets ocean innovation."
        compact
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="space-y-16">
            {focusAreas.map((area, i) => {
              const Icon = area.icon
              const isEven = i % 2 === 0
              return (
                <div key={area.title} className={`flex flex-col md:flex-row items-center gap-12 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-ocean-accent/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-ocean-accent" />
                      </div>
                      <span className="text-ocean-accent/30 font-heading font-bold text-4xl">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="font-heading font-semibold text-white text-2xl md:text-3xl mb-4">{area.title}</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.opportunities.map((opp) => (
                        <span key={opp} className="px-3 py-1 bg-ocean-accent/10 text-ocean-accent text-xs font-semibold rounded-full">
                          {opp}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="h-48 flex items-center justify-center">
                      <Icon className="w-20 h-20 text-ocean-accent/20" />
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <CTA title="Ready to Build in the Blue Economy?" subtitle="We're looking for founders, partners, and innovators across all six verticals." />
    </>
  )
}
