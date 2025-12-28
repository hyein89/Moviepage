import { NextResponse } from 'next/server'

export async function GET() {
  const domain = 'https://www.xydntvdsg.eu.org'

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${domain}/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${domain}/movie/sitemap.xml</loc>
  </sitemap>
</sitemapindex>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
