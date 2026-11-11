// Cloudflare Pages Function: GET / веде на сторінку мовою браузера (/en/, /it/…), якщо така мова є на сайті.
// Решта — українська сторінка, як і раніше. Як визначається мова відвідувача — src/utils/visitor-lang.ts.
// Кожне таке перенаправлення записується в лічильник кліків як lang-auto з мовою, яку відкрили.

import { defaultLang, langRedirect, visitorLang } from '../src/utils/visitor-lang';
import type { Env } from './api/click';

interface Context {
  request: Request;
  env: Env;
  next: () => Promise<Response>;
  waitUntil: (promise: Promise<unknown>) => void;
}

export const onRequestGet = async ({ request, env, next, waitUntil }: Context) => {
  const url = new URL(request.url);
  const visitor = visitorLang(request);
  if (!visitor || visitor.lang === defaultLang) return next();
  const { lang } = visitor;

  // Запис у базу не затримує перехід. Мітку ?from= чистимо так само, як сторінка (Base.astro)
  const source = (url.searchParams.get('from') ?? '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 30) || null;
  const saved = env.DB?.prepare('INSERT INTO clicks (link, place, label, contact, source, lang) VALUES (?, ?, ?, ?, ?, ?)')
    .bind('lang-auto', null, visitor.from, null, source, lang)
    .run();
  if (saved) waitUntil(saved.catch(() => {}));

  // Мітка ?from= лишається в адресі, а #секцію браузер перенесе сам
  return langRedirect(`/${lang}/${url.search}`);
};
