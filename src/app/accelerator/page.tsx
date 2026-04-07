import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Container from '@/components/layout/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import { Users, Handshake, DollarSign, Globe, FileCheck, Award, CalendarDays, Rocket } from 'lucide-react'

const benefits = [
  { icon: Users, title: 'Dedicated Mentors', description: '3-5 matched mentors with deep maritime and venture expertise.' },
  { icon: Handshake, title: 'Pilot Access', description: 'Direct connections to corporate partners for real-world pilot programs.' },
  { icon: DollarSign, title: 'Investment', description: 'Funding support and investor introductions to fuel your growth.' },
  { icon: Globe, title: 'Global Network', description: 'Access to our international ecosystem of partners and collaborators.' },
]

const timeline = [
  { icon: FileCheck, phase: 'Apply', description: 'Submit your application and tell us about your venture.' },
  { icon: CalendarDays, phase: 'Selection', description: 'Interview process and cohort selection.' },
  { icon: Rocket, phase: 'Program', description: '3-month intensive: validation, growth, investment readiness.' },
  { icon: Award, phase: 'Demo Day', description: 'Present to investors and industry leaders.' },
]

export default function AcceleratorPage() {
  return (
    <>
      <Hero
        title="Scale Your Blue Economy Startup"
        subtitle="A 3-month intensive accelerator for BlueTech startups ready to grow. Mentorship, pilots, capital, and a global network."
        primaryCta={{ text: 'Apply to Accelerator', href: '/apply' }}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle label="Program" title="Program Overview" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <div className="font-heading text-3xl font-bold text-ocean-accent mb-2">3 Months</div>
              <p className="text-gray-400 text-sm">Intensive Program</p>
            </Card>
            <Card className="text-center p-8">
              <div className="font-heading text-3xl font-bold text-ocean-accent mb-2">Hybrid</div>
              <p className="text-gray-400 text-sm">Remote + In-Person</p>
            </Card>
            <Card className="text-center p-8">
              <div className="font-heading text-3xl font-bold text-ocean-accent mb-2">Global</div>
              <p className="text-gray-400 text-sm">Open to All Geographies</p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-ocean-primary/20">
        <Container>
          <SectionTitle label="Benefits" title="What You Get" subtitle="Everything your BlueTech startup needs to achieve product-market fit and scale." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <Card key={b.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-ocean-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-ocean-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg mb-1">{b.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle label="Journey" title="Your Timeline" subtitle="From application to Demo Day — every step is designed for maximum impact." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {timeline.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.phase} className="relative text-center">
                  <div className="w-16 h-16 bg-ocean-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-ocean-accent" />
                  </div>
                  <div className="text-ocean-accent/30 font-heading font-bold text-sm mb-1">Step {i + 1}</div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-2">{step.phase}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <CTA title="Ready to Scale?" subtitle="Join the next cohort of Blue Economy innovators." primaryText="Apply to Accelerator" />
    </>
  )
}
