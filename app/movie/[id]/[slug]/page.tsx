import { notFound } from 'next/navigation'
import { tmdbFetch } from '../../../../lib/tmdb'
import { slugify } from '../../../../lib/slug'

export const dynamic = 'force-dynamic'

/* ===== METADATA (SEO + OG IMAGE) ===== */
export async function generateMetadata({ params }: any) {
  const movie = await tmdbFetch(
    `/movie/${params.id}?language=id-ID`
  )

  if (!movie) return {}

  return {
    title: `${movie.title} (${movie.release_date?.slice(0, 4)})`,
    description: movie.overview,
    openGraph: {
      title: movie.title,
      description: movie.overview,
      images: movie.backdrop_path
        ? [
            {
              url: `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`,
            },
          ]
        : [],
    },
  }
}

export default async function Page({ params }: any) {
  const movie = await tmdbFetch(
    `/movie/${params.id}?language=id-ID`
  )

  if (!movie) notFound()

  /* ===== DATA TURUNAN ===== */
  const year = movie.release_date
    ? movie.release_date.slice(0, 4)
    : 'N/A'

  const embedUrl = `https://vidsrc.to/embed/movie/${movie.id}`

  /* ===== TRENDING MOVIES (KANAN) ===== */
  const trending = await tmdbFetch(
    `/movie/popular?language=id-ID`
  )

  return (
    <div id="container">
      <div className="module">
        <div className="content">
          {/* ===== LEFT CONTENT ===== */}
          <div className="video-info-left">
            <div className="content-more-js" id="rmjs-1">
              <div className="watch_play">
                <div className="play-video">
                  <iframe
                    id="player"
                    src={embedUrl}
                    allowFullScreen
                    frameBorder="0"
                    scrolling="no"
                  />
                </div>
                <div className="clr"></div>
              </div>

              {/* ===== BUTTONS ===== */}
              <div className="dst">
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                    movie.title + ' trailer'
                  )}`}
                  target="_blank"
                >
                  <i className="fas fa-play-circle"></i> Watch Trailer
                </a>
              </div>

              <div className="clr"></div>

              {/* ===== MOVIE INFO ===== */}
              <div className="rgt">
                <div className="rgtp">
                  <h1>
                    {movie.title} - {year}
                  </h1>
                  <p>{movie.release_date}</p>

                  <ul className="genre">
                    {movie.genres?.map((g: any) => (
                      <li key={g.id}>{g.name}</li>
                    ))}
                  </ul>

                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>

            <div className="clr"></div>
          </div>

          {/* ===== RIGHT SIDEBAR ===== */}
          <div className="video-info-right">
            <h2 className="widget-title">Trending Movies</h2>

            <div className="animation-2 items">
              {trending?.results
                ?.slice(0, 6)
                .map((m: any) => (
                  <article className="item movies" key={m.id}>
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
                        <i className="fa fa-star"></i>{' '}
                        {m.vote_average?.toFixed(1)}
                      </div>

                      <div className="mepo"></div>

                      <a
                        href={`/movie/${m.id}/${slugify(
                          m.title
                        )}`}
                      >
                        <div className="see play3"></div>
                      </a>
                    </div>

                    <div className="data">
                      <h3>
                        <a
                          href={`/movie/${m.id}/${slugify(
                            m.title
                          )}`}
                        >
                          {m.title}
                        </a>
                      </h3>
                      <span>{m.release_date}</span>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>{movie.title}</li>
        </ul>
      </div>
    </div>
  )
}
