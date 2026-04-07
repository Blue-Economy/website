import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Container from '@/components/layout/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import { Compass, Building2, Cpu, Handshake, Anchor, Truck, Shield, Landmark } from 'lucide-react'

const services = [
  { icon: Compass, title: 'Innovation Strategy', description: 'Design and implement innovation programs tailored to maritime and Blue Economy sectors.' },
  { icon: Building2, title: 'Venture Building', description: 'Corporate venture building — turn internal ideas into standalone companies.' },
  { icon: Cpu, title: 'Digital Transformation', description: 'Technology roadmaps and digital modernization for maritime organizations.' },
  { icon: Handshake, title: 'Market Entry', description: 'Strategic guidance for entering Turkey, Europe, and emerging Blue Economy markets.' },
]

const industries = [
  { icon: Anchor, title: 'Ports & Harbors' },
  { icon: Truck, title: 'Logistics & Shipping' },
  { icon: Landmark, title: 'Government & Regulation' },
  { icon: Shield, title: 'Defense & Naval' },
]

export default function ConsultingPage() {
  return (
    <>
      <Hero
        title="Innovation for Maritime and Beyond"
        subtitle="Strategic advisory that bridges the gap between industry challenges and venture-driven solutions."
        primaryCta={{ text: 'Book a Call', href: '/contact' }}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle label="Services" title="What We Offer" subtitle="Specialized consulting at the intersection of maritime industry and innovation." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <Card key={s.title} className="flex gap-4 items-start p-8">
                  <div className="w-12 h-12 bg-ocean-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-ocean-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-ocean-primary/20">
        <Container>
          <SectionTitle label="Industries" title="Who We Work With" subtitle="Deep expertise across the maritime value chain." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <Card key={ind.title} className="text-center p-6">
                  <div className="w-14 h-14 bg-ocean-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-7 h-7 text-ocean-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm">{ind.title}</h3>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <CTA title="Let's Solve Your Challenges" subtitle="Book a consultation to explore how Mursel can drive innovation in your organization." primaryText="Book a Call" primaryHref="/contact" secondaryText="" />
    </>
  )
}
