import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import { siteConfig } from '@/data/site'

const footerLinks = {
  Platform: [
    { name: 'Venture Studio', href: '/studio' },
    { name: 'Accelerator', href: '/accelerator' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'Fund', href: '/invest' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Focus Areas', href: '/focus-areas' },
    { name: 'Insights', href: '/insights' },
  ],
  Connect: [
    { name: 'Apply', href: '/apply' },
    { name: 'Contact', href: '/contact' },
    { name: 'LinkedIn', href: siteConfig.social.linkedin },
    { name: 'Twitter', href: siteConfig.social.twitter },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-ocean-deep border-t border-white/5">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Mursel Ventures" width={36} height={36} className="rounded" />
              <span className="font-heading font-semibold text-white text-lg">MURSEL VENTURES</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs mb-6 leading-relaxed">
              A global Blue Economy venture platform that builds, scales, advises, and invests in ocean innovation.
            </p>
            <p className="text-gray-500 text-sm">{siteConfig.email}</p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-ocean-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Mursel Ventures. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
