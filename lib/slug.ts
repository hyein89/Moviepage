export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFKD')                 // normalize unicode
    .replace(/[\u0300-\u036f]/g, '')   // hapus accent latin
    .replace(/[^\p{L}\p{N}\s-]/gu, '') // SUPPORT SEMUA BAHASA
    .trim()
    .replace(/\s+/g, '-')
}
