
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        {/* PENTING: viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>

      <body>
        <Header />

        <main id="app">
          {children}
        </main>

        <Footer />

        {/* JQUERY */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/header.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
