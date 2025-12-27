const BASE = 'https://api.themoviedb.org/3'

export async function tmdbFetch(url: string) {
  const res = await fetch(
    `${BASE}${url}${url.includes('?') ? '&' : '?'}api_key=${process.env.TMDB_API_KEY}`,
    { cache: 'no-store' }
  )

  if (!res.ok) return null
  return res.json()
}
