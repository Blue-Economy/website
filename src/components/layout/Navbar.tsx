'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/data/navigation'
import Container from './Container'
import Button from '../ui/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ocean-deep/80 backdrop-blur-lg border-b border-white/5">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Mursel Ventures" width={40} height={40} className="rounded" />
            <span className="font-heading font-semibold text-white text-lg hidden sm:block">MURSEL</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.filter(n => n.name !== 'Apply').map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-ocean-accent transition-colors font-body"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href="/apply" size="sm">Apply Now</Button>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden bg-ocean-deep border-t border-white/5">
          <Container className="py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-gray-300 hover:text-ocean-accent transition-colors border-b border-white/5 last:border-0"
              >
                {item.name}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </nav>
  )
}
