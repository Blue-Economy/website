import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Pillars from '@/components/sections/Pillars'
import HowItWorks from '@/components/sections/HowItWorks'
import FocusAreas from '@/components/sections/FocusAreas'
import TeamPreview from '@/components/sections/TeamPreview'
import CTA from '@/components/sections/CTA'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { Rocket, TrendingUp, Building2 } from 'lucide-react'

const audiences = [
  { icon: Rocket, title: 'Startups', description: 'Build or scale your Blue Economy venture with our studio and accelerator programs.', cta: 'Start Building', href: '/apply' },
  { icon: TrendingUp, title: 'Investors', description: 'Access curated deal flow and co-investment opportunities in BlueTech.', cta: 'Explore Fund', href: '/invest' },
  { icon: Building2, title: 'Corporates', description: 'Innovate with speed through strategic partnerships and consulting.', cta: 'Partner With Us', href: '/consulting' },
]

export default function Home() {
  return (
    <>
      <Hero
        title="We Build, Scale, and Invest in the Blue Economy"
        subtitle="Venture studio, accelerator, and capital for ocean innovation. From oceans to opportunity — we build the future."
        primaryCta={{ text: 'Apply Now', href: '/apply' }}
        secondaryCta={{ text: 'Partner With Us', href: '/contact' }}
      />
      <TrustBar />
      <Pillars />
      <HowItWorks />
      <FocusAreas />

      <section className="py-20 md:py-28 bg-ocean-primary/20">
        <Container>
          <SectionTitle
            label="For You"
            title="Who We Work With"
            subtitle="Whether you're building, investing, or innovating — we have a path for you."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a) => {
              const Icon = a.icon
              return (
                <Card key={a.title} className="text-center p-8">
                  <div className="w-14 h-14 bg-ocean-accent/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-ocean-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-xl mb-2">{a.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{a.description}</p>
                  <Button href={a.href} variant="outline" size="sm">{a.cta}</Button>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <TeamPreview />
      <CTA />
    </>
  )
}
