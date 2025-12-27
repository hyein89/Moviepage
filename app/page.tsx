
export const dynamic = 'force-dynamic'
import { tmdbFetch } from '../lib/tmdb'

export default async function Page() {
  const data = await tmdbFetch('/movie/popular')

  if (!data) return <h1>TMDB NULL</h1>

  return (
    <ul>
      {data.results.map((m: any) => (
        <li key={m.id}>{m.title}</li>
      ))}
    </ul>
  )
}
