import { notFound } from 'next/navigation'
import { tmdbFetch } from '../../../../lib/tmdb'
import { slugify } from '../../../../lib/slug'

export const dynamic = 'force-dynamic'

/* ================= METADATA ================= */
export async function generateMetadata({ params }: any) {
  const movie = await tmdbFetch(
    `/movie/${params.id}?language=en-EN`
  )

  if (!movie) return {}

  return {
    title: `${movie.title} (${movie.release_date?.slice(0, 4)})`,
    description: movie.overview,
    openGraph: {
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

/* ================= PAGE ================= */
export default async function Page({ params }: any) {
  const movie = await tmdbFetch(
    `/movie/${params.id}?language=en-EN`
  )

  if (!movie) notFound()

  // EXTRA DATA
  const credits = await tmdbFetch(
    `/movie/${params.id}/credits`
  )

  const videos = await tmdbFetch(
    `/movie/${params.id}/videos`
  )

  const trailer = videos?.results?.find(
    (v: any) =>
      v.type === 'Trailer' && v.site === 'YouTube'
  )

  const director = credits?.crew?.find(
    (c: any) => c.job === 'Director'
  )

  const cast = credits?.cast?.slice(0, 8) || []

  const year = movie.release_date?.slice(0, 4) || 'N/A'
  const runtime = movie.runtime
    ? `${movie.runtime} min`
    : 'N/A'

  const embedUrl = `https://vidsrc.to/embed/movie/${movie.id}`

  const trending = await tmdbFetch(
    `/movie/popular?language=id-ID`
  )

  return (
    <div id="container">
      <div className="module">
        <div className="content">

          {/* ================= LEFT ================= */}
          <div className="video-info-left">
            <div className="content-more-js" id="rmjs-1">

              {/* PLAYER */}
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

              {/* ACTION */}
              <div className="dst">
                {trailer && (
                  <a
                    href={`https://www.youtube.com/watch?v=${trailer.key}`}
                    target="_blank"
                  >
                    <i className="fas fa-play-circle"></i>{' '}
                    Watch Trailer
                  </a>
                )}
              </div>

              <div className="clr"></div>

              {/* INFO */}
              <div className="rgt">
                <div className="rgtp">
                  <h1>
                    {movie.title} - {year}
                  </h1>

                  <p>
                    {movie.release_date} • {runtime}
                  </p>

                  <ul className="genre">
                    {movie.genres?.map((g: any) => (
                      <li key={g.id}>{g.name}</li>
                    ))}
                  </ul>

                  <p>{movie.overview}</p>

                  {/* DETAIL TABLE */}
                  <ul className="movie-meta">
                    <li>
                      <strong>Rating:</strong>{' '}
                      {movie.vote_average?.toFixed(1)} (
                      {movie.vote_count} votes)
                    </li>
                    <li>
                      <strong>Status:</strong> {movie.status}
                    </li>
                    <li>
                      <strong>Director:</strong>{' '}
                      {director?.name || 'N/A'}
                    </li>
                    <li>
                      <strong>Country:</strong>{' '}
                      {movie.production_countries
                        ?.map((c: any) => c.name)
                        .join(', ')}
                    </li>
                    <li>
                      <strong>Language:</strong>{' '}
                      {movie.spoken_languages
                        ?.map((l: any) => l.english_name)
                        .join(', ')}
                    </li>
                  </ul>

                  
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
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

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Movies</a></li>
          <li>{movie.title}</li>
        </ul>
      </div>
    </div>
  )
}
