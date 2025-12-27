export const dynamic = 'force-dynamic'

import { tmdbFetch } from '../../lib/tmdb'

export default async function Page() {
  const data = await tmdbFetch('/movie/popular')

  if (!data) return <p>TMDB NULL</p>
  if (!data.results) return <p>NO RESULTS</p>

  return (
    <div>
      {data.results.map((m: any) => (
        <p key={m.id}>{m.title}</p>
      ))}
    </div>
  )
}
