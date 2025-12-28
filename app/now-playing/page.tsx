import { notFound } from "next/navigation";
import { tmdbFetch } from '../../lib/tmdb'
import { slugify } from '../../lib/slug'

import type { Metadata } from 'next'
export const dynamic = 'force-dynamic'
export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { page?: string }
}): Promise<Metadata> {
  const domain = 'https://www.xydntvdsg.eu.org'

  return {
    alternates: {
      canonical: `${domain}/now-playing`,
    },
  }
}

type Movie = {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
  release_date: string | null
}

function ratingTwo(vote: number) {
  return vote ? vote.toFixed(1) : '0.0'
}

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string }
}) {
  const page = Number(searchParams?.page || 1)

  const data = await tmdbFetch(
    `/movie/now_playing?language=en-EN&page=${page}`
  )

  if (!data || !data.results || data.results.length === 0) {
  notFound();
}
  const results: Movie[] = data.results
  const nextPage = page + 1
  const prevPage = page - 1

  return (
    <div id="container">
      <div className="module">
        <div className="content right full">
          <h1 className="Featured">Now Playing</h1>

          <div className="animation-2 items full arch">
            {results.map((movie) => (
              <article className="item" key={movie.id}>
                <div className="poster">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                        : '/img/noposter.png'
                    }
                    alt={movie.title}
                  />

                  <div className="rating">
                    <i className="fa fa-star" />{' '}
                    {ratingTwo(movie.vote_average)}
                  </div>

                  <div className="mepo" />

                  <a href={`/movie/${movie.id}/${slugify(movie.title)}.html`}>
                    <div className="see play3" />
                  </a>
                </div>

                <div className="data">
                  <h3>
                    <a href={`/movie/${movie.id}/${slugify(movie.title)}.html`}>
                      {movie.title}
                    </a>
                  </h3>
                  <span>{movie.release_date || 'N/A'}</span>
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="pagination">
            <ul className="pagination">
              {page > 1 && (
                <li className="previous">
                  <a href={`/now-playing?page=${prevPage}`}>{'<'}</a>
                </li>
              )}

              {Array.from({ length: 5 }).map((_, i) => {
                const p = page - 1 + i
                if (p <= 0) return null

                return (
                  <li key={p} className={p === page ? 'active' : ''}>
                    <a href={`/now-playing?page=${p}`}>{p}</a>
                  </li>
                )
              })}

              <li className="next">
                <a href={`/now-playing?page=${nextPage}`}>{'>'}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="clearfix" />

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>Now Playing</li>
        </ul>
      </div>
    </div>
  )
}
