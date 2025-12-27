
export const dynamic = 'force-dynamic'

import { tmdbFetch } from '../lib/tmdb'
import { slugify } from '../lib/slug'

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

export default async function Page() {
  const movies = await tmdbFetch('/movie/popular?language=en-EN')

  if (!movies || !movies.results) {
    return <div>Gagal mengambil data movie</div>
  }

  const results: Movie[] = movies.results

  return (
    <div id="container">
      <div className="module">
        <div className="content right full">
          <h1 className="Featured widget-title">Featured Movies <span><a href="/populer" className="see-all">See all</a></span></h1>
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

                  <a href={`/movie/${movie.id}/${slugify(movie.title)}`}>
                    <div className="see play3" />
                  </a>
                </div>

                <div className="data">
                  <h3>
                    <a href={`/movie/${movie.id}/${slugify(movie.title)}`}>
                      {movie.title}
                    </a>
                  </h3>
                  <span>{movie.release_date || 'N/A'}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="clearfix" />

      <div className="breadcrumb">
        
      </div>
    </div>
  )
}
