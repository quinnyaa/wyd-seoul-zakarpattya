// Cloudflare Pages Function: GET / веде на сторінку мовою браузера (/en/, /it/…), якщо така мова є на сайті.
// Решта — українська сторінка, як і раніше. Мова, обрана в перемикачі (cookie lang, див. LangSwitch.astro),
// важить більше за мову браузера. Перехід з іншої сторінки сайту не перенаправляємо: людина вже обрала мову.
// Пошуковики й месенджери, що збирають прев’ю, лишаються на українській сторінці.
// Кожне таке перенаправлення записується в лічильник кліків як lang-auto з мовою, яку відкрили.

import { languages } from '../src/content/languages';
import type { Env } from './api/click';

const BOTS = /bot|crawl|spider|slurp|facebookexternalhit|facebookcatalog|meta-externalagent|whatsapp|viber|telegram|skype|embedly|preview/i;

const codes: string[] = languages.map(({ code }) => code);
const defaultLang = codes[0];

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

interface Context {
  request: Request;
  env: Env;
  next: () => Promise<Response>;
  waitUntil: (promise: Promise<unknown>) => void;
}

export const onRequestGet = async ({ request, env, next, waitUntil }: Context) => {
  const url = new URL(request.url);
  const referrer = request.headers.get('Referer');
  const sameSite = referrer !== null && URL.canParse(referrer) && new URL(referrer).host === url.host;
  if (sameSite || BOTS.test(request.headers.get('User-Agent') ?? '')) return next();

  const chosen = /(?:^|;\s*)lang=([a-z]+)/.exec(request.headers.get('Cookie') ?? '')?.[1];
  const lang = chosen && codes.includes(chosen) ? chosen : fromHeader(request.headers.get('Accept-Language') ?? '');
  if (!lang || lang === defaultLang) return next();

  // Запис у базу не затримує перехід. Мітку ?from= чистимо так само, як сторінка (Base.astro)
  const source = (url.searchParams.get('from') ?? '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 30) || null;
  const saved = env.DB?.prepare('INSERT INTO clicks (link, place, label, contact, source, lang) VALUES (?, ?, ?, ?, ?, ?)')
    .bind('lang-auto', null, chosen ? 'cookie' : 'browser', null, source, lang)
    .run();
  if (saved) waitUntil(saved.catch(() => {}));

  // Мітка ?from= лишається в адресі, а #секцію браузер перенесе сам
  return new Response(null, {
    status: 302,
    headers: {
      Location: `/${lang}/${url.search}`,
      Vary: 'Accept-Language, Cookie',
      'Cache-Control': 'private, no-store',
    },
  });
};
