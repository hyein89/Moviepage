import { MetadataRoute } from 'next'

export default function sitemapIndex(): MetadataRoute.SitemapIndex {
  const domain = 'https://www.xydntvdsg.eu.org'

  return [
    {
      url: `${domain}/sitemap.xml`,
    },
    {
      url: `${domain}/movie/sitemap.xml`,
    },
  ]
}
