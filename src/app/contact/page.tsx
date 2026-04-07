'use client'
import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Mail } from 'lucide-react'
import { LinkedinIcon, TwitterIcon } from '@/components/icons'
import { siteConfig } from '@/data/site'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  return (
    <>
      <Hero title="Get In Touch" subtitle="We'd love to hear from you. Whether you're a founder, investor, or partner — let's connect." compact />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="p-6">
                <Mail className="w-6 h-6 text-ocean-accent mb-3" />
                <h3 className="font-heading font-semibold text-white text-sm mb-1">Email</h3>
                <a href={`mailto:${siteConfig.email}`} className="text-gray-400 text-sm hover:text-ocean-accent transition-colors">{siteConfig.email}</a>
              </Card>
              <Card className="p-6">
                <LinkedinIcon className="w-6 h-6 text-ocean-accent mb-3" />
                <h3 className="font-heading font-semibold text-white text-sm mb-1">LinkedIn</h3>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-ocean-accent transition-colors">Follow us</a>
              </Card>
              <Card className="p-6">
                <TwitterIcon className="w-6 h-6 text-ocean-accent mb-3" />
                <h3 className="font-heading font-semibold text-white text-sm mb-1">Twitter</h3>
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-ocean-accent transition-colors">Follow us</a>
              </Card>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <Card className="p-10 text-center">
                  <div className="w-16 h-16 bg-ocean-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-ocean-accent text-3xl">&#10003;</span>
                  </div>
                  <h3 className="font-heading font-semibold text-white text-xl mb-2">Message Sent</h3>
                  <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon.</p>
                </Card>
              ) : (
                <Card className="p-8">
                  <h3 className="font-heading font-semibold text-white text-xl mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Your Name" required value={form.name} onChange={e => update('name', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-ocean-accent focus:outline-none" />
                      <input type="email" placeholder="Email Address" required value={form.email} onChange={e => update('email', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-ocean-accent focus:outline-none" />
                    </div>
                    <input type="text" placeholder="Subject" required value={form.subject} onChange={e => update('subject', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-ocean-accent focus:outline-none" />
                    <textarea placeholder="Your Message" rows={5} required value={form.message} onChange={e => update('message', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-ocean-accent focus:outline-none resize-none" />
                    <Button type="submit" disabled={loading} className="w-full">
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
