
import { notFound } from 'next/navigation'
import Script from 'next/script'
import type { Metadata } from 'next'
import { tmdbFetch } from '../../../../lib/tmdb'
import { slugify } from '../../../../lib/slug'
import { OFFER_LINKS } from '../../../../lib/offers'

export const dynamic = 'force-dynamic'



/* ================= METADATA ================= */
export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
  const movie = await tmdbFetch(
    `/movie/${params.id}?language=en-EN`
  )

  if (!movie) {
    return {}
  }

  const domain = 'https://www.xydntvdsg.eu.org'

  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : `${domain}/og-default.jpg`

  const canonicalUrl = `${domain}/movie/${movie.id}/${slugify(movie.title)}`
  
  return {
    metadataBase: new URL(domain),

    title: `${movie.title} (${movie.release_date?.slice(0, 4)})`,
    description: movie.overview,

    openGraph: {
      type: 'video.movie',
      url: `${domain}/movie/${movie.id}/${slugify(movie.title)}`,
      title: movie.title,
      description: movie.overview,
      images: [
        {
          url: imageUrl,
          width: 1280,
          height: 720,
          alt: movie.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: movie.title,
      description: movie.overview,
      images: [imageUrl],
    },
  }
}

/* ================= PAGE ================= */
export default async function Page({ params }: any) {
  const movie = await tmdbFetch(
    `/movie/${params.id}?language=en-EN`
  )

  if (!movie) notFound()

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

  const year = movie.release_date?.slice(0, 4) || 'N/A'
  const runtime = movie.runtime
    ? `${movie.runtime} min`
    : 'N/A'

  const embedUrl = `https://vidsrc.to/embed/movie/${movie.id}`

  const trending = await tmdbFetch(
    `/movie/popular?language=id-ID`
  )

  const domain = 'https://moviepage-ten.vercel.app'
  const movieUrl = `${domain}/movie/${movie.id}/${slugify(movie.title)}`

  return (
    <>
      {/* ================= JSON-LD SEO ================= */}
      <Script
        id="movie-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Movie',
            '@id': movieUrl,
            name: movie.title,
            description: movie.overview,
            dateCreated: movie.release_date,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            aggregateRating: {
              '@type': 'AggregateRating',
              bestRating: '10',
              ratingValue: movie.vote_average?.toFixed(1),
              ratingCount: movie.vote_count,
            },
          }),
        }}
      />

      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: domain,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${domain}/search?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: domain,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Movies',
                item: `${domain}/movies`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: movie.title,
                item: movieUrl,
              },
            ],
          }),
        }}
      />

      {/* ================= PAGE CONTENT ================= */}
      <div id="container">
        <div className="module">
          <div className="content">

            {/* LEFT */}
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
                </div>

                <div className="dst">
  {trailer && (
    <a
      href={`https://www.youtube.com/watch?v=${trailer.key}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fas fa-play-circle"></i> Watch Trailer
    </a>
  )}

  <a
    href={OFFER_LINKS.torrent}
    target="_blank"
    rel="nofollow noopener noreferrer"
    title={`Download torrent ${movie.title}`}
  >
    <i className="fas fa-download"></i> Download torrent
  </a>

  <a
    href={OFFER_LINKS.subtitle}
    target="_blank"
    rel="nofollow noopener noreferrer"
    title={`Download subtitle ${movie.title}`}
  >
    <i className="fas fa-download"></i> Download subtitle
  </a>
</div>

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
                        <br /><br />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="video-info-right">
              <h2 className="widget-title">Trending Movies</h2>

              <div className="animation-2 items">
                {trending?.results?.slice(0, 9).map((m: any) => (
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
                      <a href={`/movie/${m.id}/${slugify(m.title)}.html`}>
                        <div className="see play3"></div>
                      </a>
                    </div>
                    <div className="data">
                      <h3>{m.title}</h3>
                      <span>{m.release_date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
