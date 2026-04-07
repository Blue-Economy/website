import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import { founders } from '@/data/team'
import { LinkedinIcon, TwitterIcon } from '@/components/icons'

export default function TeamPage() {
  return (
    <>
      <Hero
        title="The Team Behind Mursel"
        subtitle="Combining venture building expertise with deep maritime industry knowledge to create the world's leading Blue Economy platform."
        compact
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map((founder) => (
              <Card key={founder.name} className="p-10">
                <div className="w-24 h-24 bg-ocean-accent/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-heading font-bold text-3xl text-ocean-accent">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h2 className="font-heading font-semibold text-white text-2xl mb-1">{founder.name}</h2>
                <p className="text-ocean-accent text-sm font-semibold mb-4">{founder.role}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{founder.bio}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {founder.focus.map((f) => (
                    <span key={f} className="px-3 py-1 bg-ocean-accent/10 text-ocean-accent text-xs font-semibold rounded-full">{f}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ocean-accent transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ocean-accent transition-colors">
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <blockquote className="text-gray-300 text-lg italic leading-relaxed">
              &ldquo;The future is what we make it. Making it better by supporting BlueTech ventures that focus on human, environmental, and business success.&rdquo;
            </blockquote>
          </div>
        </Container>
      </section>

      <CTA title="Join Our Team" subtitle="We're always looking for talented people passionate about the Blue Economy." primaryText="Get In Touch" primaryHref="/contact" secondaryText="" />
    </>
  )
}
