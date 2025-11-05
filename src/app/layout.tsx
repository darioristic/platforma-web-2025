import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Platforma - Product and Engineering Innovation',
  description:
    'Platforma Digital Agency is a design and engineering agency building brands, systems, and products.',
  openGraph: {
    title: 'Platforma - Product and Engineering Innovation',
    description:
      'Platforma Digital Agency is a design and engineering agency building brands, systems, and products.',
    url: 'https://platforma.rs',
    siteName: 'Platforma - Product and Engineering Innovation',
    images: [
      {
        url: 'https://platforma.rs/og.jpg',
        alt: '© Platforma',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@platforma_ai',
    creator: '@platforma_ai',
    images: [
      {
        url: 'https://platforma.rs/og.jpg',
        alt: '© dario_ristic',
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
