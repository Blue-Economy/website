import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Container from '@/components/layout/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import { Target, Globe, TrendingUp, Anchor, Leaf, Truck, Users, Briefcase } from 'lucide-react'

const thesis = [
  { icon: Target, title: 'Blue Economy Focus', description: 'Exclusively investing in maritime, ocean, and Blue Economy innovation.' },
  { icon: Globe, title: 'Global Ambition', description: 'Backing founders with the vision and capability to build globally.' },
  { icon: TrendingUp, title: 'Early-Stage', description: 'Pre-seed to Series A — getting in early on transformative ventures.' },
]

const sectors = [
  { icon: Anchor, title: 'Maritime Technology', description: 'Smart shipping, autonomous vessels, and maritime AI.' },
  { icon: Leaf, title: 'Ocean Sustainability', description: 'Climate solutions, aquaculture tech, and marine conservation.' },
  { icon: Truck, title: 'Logistics Innovation', description: 'Supply chain digitization and last-mile maritime logistics.' },
]

export default function InvestPage() {
  return (
    <>
      <Hero
        title="Investing in the Future of the Blue Economy"
        subtitle="Strategic capital for the ventures shaping the next era of ocean innovation. We invest in founders solving maritime and ocean challenges at scale."
        primaryCta={{ text: 'Partner With Us', href: '/contact' }}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle label="Thesis" title="Investment Thesis" subtitle="A focused strategy for high-impact Blue Economy returns." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {thesis.map((t) => {
              const Icon = t.icon
              return (
                <Card key={t.title} className="text-center p-8">
                  <div className="w-14 h-14 bg-ocean-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-ocean-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-2">{t.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.description}</p>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-ocean-primary/20">
        <Container>
          <SectionTitle label="Sectors" title="What We Invest In" subtitle="Three core verticals driving the Blue Economy transformation." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sectors.map((s) => {
              const Icon = s.icon
              return (
                <Card key={s.title} className="p-8">
                  <div className="w-12 h-12 bg-ocean-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-ocean-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle label="For Investors" title="Partner With Mursel" subtitle="Access curated Blue Economy deal flow and co-investment opportunities." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="flex gap-4 items-start p-8">
              <div className="w-12 h-12 bg-ocean-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-ocean-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">Co-Invest</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Join us in backing the most promising BlueTech ventures across our portfolio.</p>
              </div>
            </Card>
            <Card className="flex gap-4 items-start p-8">
              <div className="w-12 h-12 bg-ocean-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-ocean-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">LP Opportunities</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Become a limited partner and gain exposure to the full Blue Economy portfolio.</p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <CTA title="Access the Blue Economy" subtitle="Connect with us to explore investment partnerships and deal flow." primaryText="Get In Touch" primaryHref="/contact" secondaryText="" />
    </>
  )
}
