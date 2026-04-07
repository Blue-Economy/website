import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mursel Ventures — Blue Economy Venture Platform',
  description: 'We build, scale, advise, and invest in the future of the Blue Economy. Venture Studio, Accelerator, Consulting, and Fund.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ocean-deep">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
