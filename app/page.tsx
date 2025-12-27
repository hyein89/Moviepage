
export const dynamic = 'force-dynamic'
import { tmdbFetch } from '../lib/tmdb'
import { slugify } from '../lib/slug'
// helper ganti fungsi PHP


function ratingTwo(vote: number) {
  return vote ? vote.toFixed(1) : '0.0'
}

export default async function Page() {
  const movies = await tmdbFetch('/movie/popular?language=en-EN')


  if (!movies) return <h1>TMDB NULL</h1>

  return (
    <div id="container">
      <div className="module">
        <div className="content right full">

          {/* FEATURED MOVIES */}
          <div className="animation-2 items full">
            <h1 className="Featured widget-title">
              Featured Movies <span><a href="/populer" className="see-all">See all</a></span>
            </h1>

            {movies.results.map((m: any) => (
              <article className="item" key={m.id}>
                <div className="poster">
                  <img
                    src={
                      m.poster_path
                        ? `https://image.tmdb.org/t/p/w185${m.poster_path}`
                        : '/img/noposter.png'
                    }
                    alt={m.title}
                  />

                  <div className="rating">
                    <i className="fa fa-star"></i> {ratingTwo(m.vote_average)}
                  </div>

                  <div className="mepo"></div>

                  <a href={`/movie/${m.id}/${slugify(m.title)}.html`}>
                    <div className="see play3"></div>
                  </a>
                </div>

                <div className="data">
                  <h3>
                    <a href={`/movie/${m.id}/${slugify(m.title)}.html`}>
                      {m.title}
                    </a>
                  </h3>
                  <span>{m.release_date || 'N/A'}</span>
                </div>
              </article>
            ))}
          </div>

         

        </div>
      </div>
    </div>
  )
}
