import { LinkedinIcon, TwitterIcon } from '../icons'
import Container from '../layout/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { founders } from '@/data/team'

export default function TeamPreview() {
  return (
    <section className="py-20 md:py-28 bg-ocean-primary/20">
      <Container>
        <SectionTitle
          label="Leadership"
          title="Meet the Founders"
          subtitle="Combined expertise in venture building, maritime industry, and strategic capital."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder) => (
            <Card key={founder.name} className="p-8">
              <div className="w-20 h-20 bg-ocean-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="font-heading font-bold text-2xl text-ocean-accent">
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-heading font-semibold text-white text-xl mb-1">{founder.name}</h3>
                <p className="text-ocean-accent text-sm mb-4">{founder.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{founder.bio}</p>
                <div className="flex items-center justify-center gap-3">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ocean-accent transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ocean-accent transition-colors">
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
