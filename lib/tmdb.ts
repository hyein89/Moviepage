
export async function tmdbFetch(endpoint: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3${endpoint}`,
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER}`,
        'Content-Type': 'application/json'
      }
    }
  )

  if (!res.ok) {
    console.error(res.status)
    return null
  }

  return res.json()
}
