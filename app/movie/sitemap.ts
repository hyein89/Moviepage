import { MetadataRoute } from 'next'
import { tmdbFetch } from '../../lib/tmdb'
import { slugify } from '../../lib/slug'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = 'https://www.xydntvdsg.eu.org'

  // ambil 5 halaman movie populer (100 movie)
  const pages = [1, 2, 3, 4, 5]

  const movies = await Promise.all(
    pages.map((page) =>
      tmdbFetch(`/movie/popular?language=en-EN&page=${page}`)
    )
  )

  const urls = movies
    .flatMap((res: any) => res?.results || [])
    .map((movie: any) => ({
      url: `${domain}/movie/${movie.id}/${slugify(movie.title)}`,
      lastModified: new Date(movie.release_date || Date.now()),
      changeFrequency: 'weekly',
      priority: 0.8,
    }))

  return urls
}
