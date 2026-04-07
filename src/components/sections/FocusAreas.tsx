import Container from '../layout/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { focusAreas } from '@/data/focusAreas'

export default function FocusAreas() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle
          label="Blue Economy Sectors"
          title="Focus Areas"
          subtitle="We operate across six high-impact verticals within the Blue Economy."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area) => {
            const Icon = area.icon
            return (
              <Card key={area.title}>
                <div className="w-12 h-12 bg-ocean-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-ocean-accent" />
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
