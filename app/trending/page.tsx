import { tmdbFetch } from '../../lib/tmdb'


export default async function Page() {
  const data = await tmdbFetch('/trending/movie/day?language=id-ID')

  return (
    <div>
      <h2>Trending</h2>
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
