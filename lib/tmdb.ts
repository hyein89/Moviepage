
export async function tmdbFetch(endpoint: string) {
  console.log('BEARER:', process.env.TMDB_BEARER)

  const res = await fetch(
    `https://api.themoviedb.org/3${endpoint}`,
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER}`,
        Accept: 'application/json',
      },
    }
  )

  console.log('STATUS:', res.status)

  if (!res.ok) return null
  return res.json()
}
