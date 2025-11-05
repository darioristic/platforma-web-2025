import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Product & platform innovation',
  description:
    'Platforma Digital Agency is a design and engineering agency building brands, systems, and products.',
  openGraph: {
    title: 'Platforma Digital Agency',
    description:
      'Platforma Digital Agency is a design and engineering agency building brands, systems, and products.',
    url: 'https://platforma.rs',
    siteName: 'Platforma Digital Agency',
    images: [
      {
        url: 'https://loganliffick.com/og.jpg',
        alt: '© logan_liffick',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@logan_liffick',
    creator: '@logan_liffick',
    images: [
      {
        url: 'https://loganliffick.com/og.jpg',
        alt: '© logan_liffick',
      },
    ],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`bg-base-bg ${inter.variable} text-base-strong selection:bg-base-selection/50 antialiased transition-colors`}
    >
      <body className="flex min-h-screen flex-col">
        <Nav />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
