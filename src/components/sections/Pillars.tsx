import Link from 'next/link'
import { ArrowRight, Building2, Rocket, Briefcase, TrendingUp } from 'lucide-react'
import Container from '../layout/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { PILLARS } from '@/lib/constants'

const icons = [Building2, Rocket, Briefcase, TrendingUp]

export default function Pillars() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle
          label="What We Do"
          title="Four Integrated Pillars"
          subtitle="The full-stack platform designed to build, scale, advise, and invest in Blue Economy innovation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = icons[i]
            return (
              <Link key={pillar.title} href={pillar.href}>
                <Card className="h-full group">
                  <div className="w-12 h-12 bg-ocean-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-ocean-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-ocean-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-2">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">{pillar.description}</p>
                  <span className="text-ocean-accent text-xs font-semibold uppercase tracking-wider">{pillar.stage}</span>
                  <div className="mt-4 flex items-center text-ocean-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
