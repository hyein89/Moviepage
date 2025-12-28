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

/**
 * Pagination helper
 * Output contoh:
 * < 1 2 3 … 9 10 >
 */
function getPaginationPages(
  current: number,
  total: number
): (number | 'dots')[] {
  const pages: (number | 'dots')[] = []

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
    return pages
  }

  pages.push(1)

  if (current > 4) pages.push('dots')

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (current < total - 3) pages.push('dots')

  pages.push(total)

  return pages
}

export default async function Page({
  searchParams,
}: {
  searchParams?: { q?: string; page?: string }
}) {
  const query = searchParams?.q || ''
  const page = Number(searchParams?.page || 1)

  // ===== TANPA KEYWORD =====
  if (!query) {
    return (
      <div id="container">
        <div className="module">
          <div className="content right full">
            <h1 className="Featured">Search</h1>
            <p>Enter search keywords.</p>
          </div>
        </div>
      </div>
    )
  }

  // ===== FETCH SEARCH =====
  const data = await tmdbFetch(
    `/search/movie?language=en-EN&query=${encodeURIComponent(
      query
    )}&page=${page}`
  )

  if (!data || !Array.isArray(data.results)) {
    return (
      <div id="container">
        <div className="module">
          <div className="content right full">
            <p>Failed to retrieve search data.</p>
          </div>
        </div>
      </div>
    )
  }

  const results: Movie[] = data.results
  const totalPages: number = data.total_pages || 1

  return (
    <div id="container">
      <div className="module">
        <div className="content right full">
          <h1 className="Featured">
            SEARCH RESULTS: <span>{query}</span>
          </h1>

          {/* ===== LIST MOVIE ===== */}
          <div className="animation-2 items full arch">
            {results.length === 0 && (
              <p>Movie tidak ditemukan.</p>
            )}

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
                    <a
                      href={`/movie/${movie.id}/${slugify(movie.title)}.html`}
                    >
                      {movie.title}
                    </a>
                  </h3>
                  <span>{movie.release_date || 'N/A'}</span>
                </div>
              </article>
            ))}
          </div>

          {/* ===== PAGINATION (MODEL LAMA) ===== */}
          {results.length > 0 && totalPages > 1 && (
            <div className="pagination">
              <ul className="pagination">
                {page > 1 && (
                  <li className="previous">
                    <a href={`/search?q=${query}&page=${page - 1}`}>
                      {'<'}
                    </a>
                  </li>
                )}

                {getPaginationPages(page, totalPages).map((p, i) =>
                  p === 'dots' ? (
                    <li key={`dots-${i}`} className="dots">
                      …
                    </li>
                  ) : (
                    <li
                      key={p}
                      className={p === page ? 'active' : ''}
                    >
                      <a href={`/search?q=${query}&page=${p}`}>
                        {p}
                      </a>
                    </li>
                  )
                )}

                {page < totalPages && (
                  <li className="next">
                    <a href={`/search?q=${query}&page=${page + 1}`}>
                      {'>'}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="clearfix" />
    </div>
  )
}
