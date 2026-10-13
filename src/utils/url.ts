const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Додає до внутрішнього шляху підшлях GitHub Pages: '/#about' → '/repo-name/#about'. */
export function url(path = '/'): string {
  if (/^([a-z]+:|#)/i.test(path)) return path;
  return base + (path.startsWith('/') ? path : `/${path}`);
}
