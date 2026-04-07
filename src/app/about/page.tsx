import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Container from '@/components/layout/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import TeamPreview from '@/components/sections/TeamPreview'
import { Target, Eye, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Hero
        title="From First Admiral to Future Oceans"
        subtitle="Named after Kara Mursel Alp, the first Ottoman Admiral, Mursel Ventures carries forward a 700-year legacy of maritime leadership into the era of sustainable ocean innovation."
        compact
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionTitle label="Our Story" title="Why Mursel?" center={false} />
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                In the early 14th century, Kara Mursel Alp established the foundations of Ottoman naval power. His strategic vision transformed a regional force into a Mediterranean powerhouse.
              </p>
              <p>
                At Mursel Ventures, we believe that same strategic thinking is needed today — not for conquest, but for sustainable ocean innovation. The Blue Economy represents a $1.5 trillion annual opportunity globally.
              </p>
              <p>
                Turkey, with its unique geographic position spanning three seas and centuries of maritime heritage, is poised to lead this transformation. We exist to connect visionary entrepreneurs with the capital, expertise, and networks they need to turn ocean challenges into global opportunities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-ocean-primary/20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8">
              <div className="w-14 h-14 bg-ocean-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-ocean-accent" />
              </div>
              <h3 className="font-heading font-semibold text-white text-lg mb-3">Mission</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Future is what we make it. Making it better by supporting BlueTech ventures that focus on human, environmental, and business success.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="w-14 h-14 bg-ocean-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-7 h-7 text-ocean-accent" />
              </div>
              <h3 className="font-heading font-semibold text-white text-lg mb-3">Vision</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Make the challenge an opportunity for entrepreneurs. Become the leading global platform for Blue Economy innovation.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="w-14 h-14 bg-ocean-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-ocean-accent" />
              </div>
              <h3 className="font-heading font-semibold text-white text-lg mb-3">Values</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sustainability, Innovation, Collaboration, and Impact drive everything we do.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <TeamPreview />
      <CTA />
    </>
  )
}
