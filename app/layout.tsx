// app/layout.tsx
import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'mov',
    template: '%s - mov',
  },
  description: 'dec',
  robots: 'index, follow',

  openGraph: {
    title: 'dec',
    description: 'dec',
    images: ['/img/home.jpg'],
    type: 'website',
    locale: 'en_US',
    siteName: 'dec',
  },

  twitter: {
    card: 'summary',
    title: 'dec',
    description: 'dec',
    images: ['/img/home.jpg'],
  },

  icons: {
    apple: '/favicon/apple-touch-icon.png',
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body>

        <Header />
        {children}
        <Footer />

        {/* JQUERY (DARI KODE LU) */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
          strategy="beforeInteractive"
        />

        {/* JS HEADER LU (KALAU ADA) */}
        <Script
          src="/js/header.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  )
}
