
const BASE = 'https://api.themoviedb.org/3'

export async function tmdbFetch(endpoint: string) {
  const url =
    `${BASE}${endpoint}` +
    (endpoint.includes('?') ? '&' : '?') +
    `api_key=${process.env.TMDB_API_KEY}`

  console.log('FETCH TMDB:', url)

  const res = await fetch(url, {
    cache: 'no-store', // ⬅️ INI WAJIB
  })

  if (!res.ok) {
    console.error('TMDB STATUS:', res.status)
    return null
  }

  return res.json()
}
