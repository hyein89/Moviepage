import { tmdbFetch } from '../../lib/tmdb'

export default async function Page() {
  const data = await tmdbFetch('/movie/popular?language=id-ID')

  if (!data) {
    return <p>Gagal memuat data</p>
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Home</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
        {data.results.map((movie: any) => (
          <a
            key={movie.id}
            href={`/movie/${movie.id}/${movie.title}.html`}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p>{movie.title}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

