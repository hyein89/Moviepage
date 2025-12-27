const BASE = 'https://api.themoviedb.org/3'

export async function tmdbFetch(endpoint: string) {
  try {
    const url =
      `${BASE}${endpoint}` +
      (endpoint.includes('?') ? '&' : '?') +
      `api_key=${process.env.TMDB_API_KEY}`

    const res = await fetch(url)

    if (!res.ok) {
      console.error('TMDB ERROR:', res.status)
      return null
    }

    return await res.json()
  } catch (err) {
    console.error('FETCH ERROR:', err)
    return null
  }
}
