import { tmdbFetch } from '../../lib/tmdb'


export default async function Page() {
  const data = await tmdbFetch('/movie/popular?language=id-ID')

  return (
    <div>
      <h2>Populer</h2>
      {data?.results.map((m: any) => (
        <div key={m.id}>
          <a href={`/movie/${m.id}/${m.title}.html`}>
            {m.title}
          </a>
        </div>
      ))}
    </div>
  )
}
