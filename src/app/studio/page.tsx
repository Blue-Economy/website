import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Container from '@/components/layout/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import { Lightbulb, Code, Rocket, TrendingUp, DollarSign, Users, Globe, Server } from 'lucide-react'

const process = [
  { icon: Lightbulb, title: 'Ideation', description: 'Problem validation, market research, and opportunity mapping within the Blue Economy.' },
  { icon: Code, title: 'Build', description: 'MVP development, team formation, and product-market fit exploration.' },
  { icon: Rocket, title: 'Launch', description: 'Go-to-market execution, pilot partnerships, and initial traction.' },
  { icon: TrendingUp, title: 'Scale', description: 'Growth strategy, follow-on funding, and global expansion.' },
]

const benefits = [
  { icon: DollarSign, title: 'Capital', description: 'Initial capital and resource allocation to get your venture off the ground.' },
  { icon: Users, title: 'Team', description: 'Access to in-house expertise across product, technology, and business.' },
  { icon: Globe, title: 'Network', description: 'Connection to our global mentor and partner ecosystem.' },
  { icon: Server, title: 'Infrastructure', description: 'Tools, workspace, and operational support to move fast.' },
]

export default function StudioPage() {
  return (
    <>
      <Hero
        title="We Build Startups From Zero"
        subtitle="Our venture studio co-creates BlueTech companies with exceptional founders, providing the capital, team, and infrastructure to go from idea to scale."
        primaryCta={{ text: 'Build With Us', href: '/apply' }}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle
            label="Venture Studio"
            title="What Is a Venture Studio?"
            subtitle="Unlike traditional accelerators, we don't just support startups — we build them. From ideation through spin-out, we're co-founders from day one."
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-400 text-center leading-relaxed">
              A venture studio systematically creates companies by identifying market opportunities, assembling teams, and building products internally. We combine deep Blue Economy domain expertise with venture building methodology to create high-impact startups that solve real maritime and ocean challenges.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-ocean-primary/20">
        <Container>
          <SectionTitle label="Our Process" title="From Idea to Scale" subtitle="A proven four-phase methodology for building Blue Economy ventures." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative">
                  <div className="text-ocean-accent/20 font-heading font-bold text-6xl mb-2">{String(i + 1).padStart(2, '0')}</div>
                  <div className="w-12 h-12 bg-ocean-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-ocean-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle label="For Founders" title="What You Get" subtitle="Everything a BlueTech founder needs to build a world-class company." />
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

      <CTA title="Start Building With Mursel" subtitle="Have an idea in the Blue Economy? Let's build it together." primaryText="Apply to Studio" />
    </>
  )
}
