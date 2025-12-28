import { MetadataRoute } from 'next'
import { tmdbFetch } from '../../lib/tmdb'
import { slugify } from '../../lib/slug'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = 'https://www.xydntvdsg.eu.org'

  // Ambil beberapa halaman populer (aman & ringan)
  const pages = [1, 2, 3, 4, 5]

  const responses = await Promise.all(
    pages.map((page) =>
      tmdbFetch(`/movie/popular?language=en-EN&page=${page}`)
    )
  )

  const urls: MetadataRoute.Sitemap = responses
    .flatMap((res: any) => res?.results || [])
    .map((movie: any) => ({
      url: `${domain}/movie/${movie.id}/${slugify(movie.title)}.html`,
      lastModified: movie.release_date
        ? new Date(movie.release_date)
        : new Date(),
      changeFrequency: 'weekly', // ✅ LITERAL TYPE
      priority: 0.8,
    }))

  return urls
}
