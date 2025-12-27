import { notFound } from 'next/navigation'
import { tmdbFetch } from '@/lib/tmdb'

export async function generateMetadata({ params }: any) {
  const movie = await tmdbFetch(`/movie/${params.id}?language=id-ID`)
  if (!movie) return {}

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [
        `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
      ]
    }
  }
}

export default async function Page({ params }: any) {
  const movie = await tmdbFetch(`/movie/${params.id}?language=id-ID`)
  if (!movie) notFound()

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
    </div>
  )
}
