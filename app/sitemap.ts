import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'https://www.xydntvdsg.eu.org'

  return [
    {
      url: `${domain}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${domain}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${domain}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${domain}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${domain}/terms`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${domain}/dmca`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
