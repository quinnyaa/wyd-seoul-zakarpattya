const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Додає до внутрішнього шляху підшлях GitHub Pages: '/about/' → '/repo-name/about/'. */
export function url(path = '/'): string {
  if (/^([a-z]+:|#)/i.test(path)) return path;
  return base + (path.startsWith('/') ? path : `/${path}`);
}

/** Чи є шлях поточною сторінкою (для підсвічування пункту меню). */
export function isCurrent(path: string, pathname: string): boolean {
  const strip = (value: string) => value.replace(/\/+$/, '');
  return strip(url(path)) === strip(pathname);
}
