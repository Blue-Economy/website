'use client'
import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const tabs = ['Startup', 'Partner', 'Mentor']

export default function ApplyPage() {
  const [activeTab, setActiveTab] = useState('Startup')
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', website: '', stage: '', sector: '', description: '', type: 'Startup' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  if (submitted) {
    return (
      <>
        <Hero title="Application Received" subtitle="Thank you for your interest. We review applications on a rolling basis and will be in touch soon." compact />
        <section className="py-20">
          <Container>
            <div className="text-center">
              <div className="w-20 h-20 bg-ocean-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-ocean-accent text-4xl">&#10003;</span>
              </div>
              <p className="text-gray-400 mb-8">We typically respond within 5 business days.</p>
              <Button href="/">Return Home</Button>
            </div>
          </Container>
        </section>
      </>
    )
  }

  return (
    <>
      <Hero
        title="Apply to Mursel"
        subtitle="Whether you're a startup, potential partner, or mentor — we'd love to hear from you. Applications reviewed on a rolling basis."
        compact
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2 mb-8 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setStep(1); setForm(prev => ({ ...prev, type: tab })) }}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-ocean-accent text-ocean-deep'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <Card className="p-8">
              <div className="flex items-center gap-4 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= s ? 'bg-ocean-accent text-ocean-deep' : 'bg-white/10 text-gray-500'
                    }`}>
                      {s}
                    </div>
                    {s < 3 && <div className={`flex-1 h-px ${step > s ? 'bg-ocean-accent' : 'bg-white/10'}`} />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-white text-lg mb-4">Basic Information</h3>
                    <input type="text" placeholder="Full Name" required value={form.name} onChange={e => update('name', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-ocean-accent focus:outline-none" />
                    <input type="email" placeholder="Email Address" required value={form.email} onChange={e => update('email', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-ocean-accent focus:outline-none" />
                    <input type="text" placeholder="Company / Organization" value={form.company} onChange={e => update('company', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-ocean-accent focus:outline-none" />
                    <div className="flex justify-end">
                      <Button onClick={() => setStep(2)}>Next</Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-white text-lg mb-4">Details</h3>
                    <input type="url" placeholder="Website (optional)" value={form.website} onChange={e => update('website', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-ocean-accent focus:outline-none" />
                    <select value={form.stage} onChange={e => update('stage', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ocean-accent focus:outline-none">
                      <option value="" className="bg-ocean-deep">Select Stage</option>
                      <option value="idea" className="bg-ocean-deep">Idea</option>
                      <option value="mvp" className="bg-ocean-deep">MVP</option>
                      <option value="revenue" className="bg-ocean-deep">Revenue</option>
                      <option value="scaling" className="bg-ocean-deep">Scaling</option>
                    </select>
                    <select value={form.sector} onChange={e => update('sector', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ocean-accent focus:outline-none">
                      <option value="" className="bg-ocean-deep">Select Sector</option>
                      <option value="smart-ports" className="bg-ocean-deep">Smart Ports</option>
                      <option value="maritime-tech" className="bg-ocean-deep">Maritime Tech</option>
                      <option value="ocean-sustainability" className="bg-ocean-deep">Ocean Sustainability</option>
                      <option value="defense" className="bg-ocean-deep">Defense & Naval</option>
                      <option value="offshore-energy" className="bg-ocean-deep">Offshore Energy</option>
                      <option value="logistics" className="bg-ocean-deep">Maritime Logistics</option>
                      <option value="other" className="bg-ocean-deep">Other</option>
                    </select>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                      <Button onClick={() => setStep(3)}>Next</Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-white text-lg mb-4">Tell Us More</h3>
                    <textarea placeholder="Describe your venture, partnership idea, or mentoring expertise..." rows={5} required value={form.description} onChange={e => update('description', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-ocean-accent focus:outline-none resize-none" />
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                      <Button type="submit">Submit Application</Button>
                    </div>
                  </div>
                )}
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
