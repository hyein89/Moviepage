import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AdsTopX from '../components/AdsTopX'
import './globals.css'


const SITE_NAME = 'WTS Movies'
const SITE_URL = 'https://www.xydntvdsg.eu.org'
const SITE_DESCRIPTION =
  'Watch popular movies, latest releases, trailers, and trending films online. Explore detailed movie information, ratings, and reviews.'

/* ================= METADATA SEO ================= */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: '%s | ' + SITE_NAME,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  generator: 'Next.js',

  keywords: [
    'movies',
    'watch movies online',
    'latest movies',
    'popular movies',
    'movie trailers',
    'film streaming',
    'HD movies',
    'cinema',
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/img/home.jpg',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/img/home.jpg'],
  },

  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },

  category: 'entertainment',
}

/* ================= ROOT LAYOUT ================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        {/* Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#000000" />
      </head>

      <body>
{/* ADS AREA */}
  <AdsTopX />
        
        <Header />

        <main id="app">{children}</main>

        <Footer />

        {/* ================= GOOGLE ANALYTICS ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q8PD5TJ92F"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q8PD5TJ92F');
          `}
        </Script>

        {/* ================= HISTATS ================= */}
        <Script id="histats-script" strategy="afterInteractive">
          {`
            var _Hasync = _Hasync || [];
            _Hasync.push(['Histats.start', '1,4828760,4,0,0,0,00010000']);
            _Hasync.push(['Histats.fasi', '1']);
            _Hasync.push(['Histats.track_hits', '']);
            (function() {
              var hs = document.createElement('script');
              hs.type = 'text/javascript';
              hs.async = true;
              hs.src = '//s10.histats.com/js15_as.js';
              (document.head || document.body).appendChild(hs);
            })();
          `}
        </Script>

        {/* ================= LEGACY SCRIPT ================= */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
          strategy="afterInteractive"
        />

{/* POPUNDER */}
  <Script
    src="https://signingunwilling.com/54/07/c5/5407c59607ecdd93748e27b4442c7d89.js"
    strategy="afterInteractive"
  />
        
        <Script
          src="/js/header.js"
          strategy="afterInteractive"
        />
          {/* script-script lu BIARIN */}
      </body>
    </html>
  )
}

