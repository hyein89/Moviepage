import { tmdbFetch } from '../../lib/tmdb'
import { slugify } from '../../lib/slug'

export const dynamic = 'force-dynamic'

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
    `/movie/popular?language=en-EN&page=${page}`
  )

  if (!data || !data.results) {
    return <div>Gagal mengambil data movie populer</div>
  }

  const results: Movie[] = data.results
  const nextPage = page + 1
  const prevPage = page - 1

  return (
    <div id="container">
      <div className="module">
        <div className="content right full">
          <h1 className="Featured">Populer</h1>

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

                  <a href={`/movies/${movie.id}/${slugify(movie.title)}`}>
                    <div className="see play3" />
                  </a>
                </div>

                <div className="data">
                  <h3>
                    <a href={`/movies/${movie.id}/${slugify(movie.title)}`}>
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
                  <a href={`/populer?page=${prevPage}`}>{'<'}</a>
                </li>
              )}

              {Array.from({ length: 5 }).map((_, i) => {
                const p = page - 1 + i
                if (p <= 0) return null

                return (
                  <li key={p} className={p === page ? 'active' : ''}>
                    <a href={`/populer?page=${p}`}>{p}</a>
                  </li>
                )
              })}

              <li className="next">
                <a href={`/populer?page=${nextPage}`}>{'>'}</a>
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
          <li>Populer</li>
        </ul>
      </div>
    </div>
  )
}
