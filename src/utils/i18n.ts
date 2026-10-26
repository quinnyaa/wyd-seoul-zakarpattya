import { languages } from '../content/languages';
import { url } from './url';

export type Lang = (typeof languages)[number]['code'];
export type Language = (typeof languages)[number];

export const defaultLang: Lang = languages[0].code;

/** Будова текстів задана основною мовою: переклади мають збігатися з нею. */
export type Texts = (typeof import('../content/texts/uk'))['texts'];

// Тексти кожної мови — у src/content/texts/<код мови>.ts
const files = import.meta.glob<{ default: Texts }>('../content/texts/*.ts', { eager: true });
const texts = Object.fromEntries(
  languages.map(({ code }) => {
    const file = files[`../content/texts/${code}.ts`];
    if (!file) throw new Error(`Мову «${code}» додано в src/content/languages.ts, але немає файлу src/content/texts/${code}.ts`);
    return [code, file.default];
  }),
) as Record<Lang, Texts>;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Мова сторінки з її адреси: '/en/…' → 'en', усе інше — основна мова. */
export function langFromUrl(pageUrl: URL): Lang {
  const first = pageUrl.pathname.slice(base.length).split('/')[1];
  return languages.find((language) => language.code === first && first !== defaultLang)?.code ?? defaultLang;
}

/** Шлях до сторінки іншою мовою: ('en', '/#help') → '/en/#help'. Основна мова — без префікса. */
export function localePath(lang: Lang, path = '/'): string {
  if (/^([a-z]+:|#)/i.test(path) || lang === defaultLang) return path;
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Та сама сторінка без префікса мови й підшляху сайту: '/en/' → '/'. */
export function stripLang(pathname: string): string {
  const path = pathname.slice(base.length) || '/';
  const lang = langFromUrl(new URL(pathname, 'http://localhost'));
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return path.slice(prefix.length) || '/';
}

/**
  Мова, тексти й посилання для поточної сторінки. У компоненті:
    const { lang, t, link } = useI18n(Astro);
  link('/#help') веде на ту саму секцію сторінки цією ж мовою.
*/
export function useI18n(astro: { url: URL }) {
  const lang = langFromUrl(astro.url);
  return {
    lang,
    t: texts[lang],
    link: (path: string) => url(localePath(lang, path)),
  };
}

/** Текст, який може відрізнятися між мовами: 'текст' або { uk: 'текст', en: 'text' }. */
export type Localized = string | Partial<Record<Lang, string>>;

/** Вибирає текст потрібною мовою; якщо перекладу немає — основною. */
export function translate(value: Localized, lang: Lang): string {
  return typeof value === 'string' ? value : (value[lang] ?? value[defaultLang] ?? '');
}

/**
  Ця сама сторінка всіма мовами сайту: для перемикача мов і hreflang.
  home: true — посилання на головні сторінки (для 404, у якої немає перекладів за тією ж адресою).
*/
export function alternates(pageUrl: URL, home = false) {
  const path = home ? '/' : stripLang(pageUrl.pathname);
  return languages.map((language) => ({ ...language, href: url(localePath(language.code, path)) }));
}
