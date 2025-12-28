import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const domain = 'https://www.xydntvdsg.eu.org'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/search',
          '/search?',
        ],
      },
    ],
    sitemap: [
      `${domain}/sitemap.xml`,
      `${domain}/movie/sitemap.xml`,
    ],
  }
}
