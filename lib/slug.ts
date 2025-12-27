export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/:/g, '')        // hapus :
    .replace(/[^a-z0-9\s-]/g, '') // hapus simbol aneh
    .trim()
    .replace(/\s+/g, '-')     // spasi -> -
}
