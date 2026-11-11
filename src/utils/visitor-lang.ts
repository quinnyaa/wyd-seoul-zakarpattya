// Якою мовою відкрити сайт людині, що прийшла ззовні. Для Cloudflare Pages Functions:
// functions/index.ts (головна) і functions/intention/, functions/[lang]/intention/ (форма інтенцій).
// Мова, обрана в перемикачі (cookie lang, див. LangSwitch.astro), важить більше за мову браузера.
// Перехід з іншої сторінки сайту не чіпаємо: людина вже обрала мову.
// Пошуковики й месенджери, що збирають прев’ю, лишаються на сторінці, яку відкрили.

import { languages } from '../content/languages';

const BOTS = /bot|crawl|spider|slurp|facebookexternalhit|facebookcatalog|meta-externalagent|whatsapp|viber|telegram|skype|embedly|preview/i;

export const codes: string[] = languages.map(({ code }) => code);
export const defaultLang = codes[0]!;

// 'it-IT,it;q=0.9,en;q=0.8' → перша мова сайту в порядку бажаності: 'it'
function fromHeader(header: string) {
  return header
    .split(',')
    .map((part, index) => {
      const [tag = '', ...params] = part.trim().split(';');
      const q = Number(params.find((p) => p.trim().startsWith('q='))?.trim().slice(2) ?? 1);
      return { code: tag.trim().split('-')[0]!.toLowerCase(), q: Number.isNaN(q) ? 0 : q, index };
    })
    .filter(({ q }) => q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index)
    .find(({ code }) => codes.includes(code))?.code;
}

/** Мова для відвідувача й звідки вона відома; undefined — лишаємо сторінку, яку відкрили. */
export function visitorLang(request: Request): { lang: string; from: 'cookie' | 'browser' } | undefined {
  const url = new URL(request.url);
  const referrer = request.headers.get('Referer');
  const sameSite = referrer !== null && URL.canParse(referrer) && new URL(referrer).host === url.host;
  if (sameSite || BOTS.test(request.headers.get('User-Agent') ?? '')) return undefined;

  const chosen = /(?:^|;\s*)lang=([a-z]+)/.exec(request.headers.get('Cookie') ?? '')?.[1];
  if (chosen && codes.includes(chosen)) return { lang: chosen, from: 'cookie' };
  const lang = fromHeader(request.headers.get('Accept-Language') ?? '');
  return lang ? { lang, from: 'browser' } : undefined;
}

/** Перенаправлення на сторінку іншою мовою: відповідь залежить від людини, тож не кешується. */
export function langRedirect(location: string) {
  return new Response(null, {
    status: 302,
    headers: { Location: location, Vary: 'Accept-Language, Cookie', 'Cache-Control': 'private, no-store' },
  });
}

/**
  Форма інтенцій мовою відвідувача: посилання /it/intention/ поляк відкриє польською (/pl/intention/).
  current — мова сторінки з адреси.
*/
export function intentionInVisitorLang(request: Request, current: string, next: () => Promise<Response>) {
  const lang = visitorLang(request)?.lang;
  if (!lang || lang === current) return next();
  return langRedirect(`${lang === defaultLang ? '' : `/${lang}`}/intention/${new URL(request.url).search}`);
}
