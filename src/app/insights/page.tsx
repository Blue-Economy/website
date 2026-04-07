import Hero from '@/components/sections/Hero'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import { posts } from '@/data/posts'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'Blue Economy', 'Maritime Tech', 'Reports']

export default function InsightsPage() {
  return (
    <>
      <Hero
        title="Insights & Research"
        subtitle="Exploring the trends, technologies, and opportunities shaping the Blue Economy."
        compact
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-ocean-accent/30 hover:text-ocean-accent cursor-pointer transition-all"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.slug} className="group cursor-pointer">
                <div className="h-40 bg-ocean-primary/30 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-ocean-accent/30 font-heading text-sm">{post.category}</span>
                </div>
                <span className="text-ocean-accent text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                <h3 className="font-heading font-semibold text-white text-lg mt-2 mb-2 group-hover:text-ocean-accent transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <ArrowRight className="w-4 h-4 text-ocean-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
