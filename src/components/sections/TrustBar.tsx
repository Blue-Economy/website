import Container from '../layout/Container'
import { STATS } from '@/lib/constants'

export default function TrustBar() {
  return (
    <section className="py-12 bg-ocean-primary/30 border-y border-white/5">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-semibold text-3xl md:text-4xl text-ocean-accent mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
