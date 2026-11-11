// Cloudflare Pages Function: GET /en/intention/, /it/intention/… відкриває форму інтенцій мовою відвідувача:
// посилання /it/intention/ людина з польським браузером побачить польською. Логіка — у src/utils/visitor-lang.ts.

import { codes, defaultLang, intentionInVisitorLang } from '../../../src/utils/visitor-lang';

interface Context {
  request: Request;
  params: { lang?: string | string[] };
  next: () => Promise<Response>;
}

export const onRequestGet = ({ request, params, next }: Context) => {
  const current = typeof params.lang === 'string' ? params.lang : '';
  // Невідома мова в адресі — звичайна сторінка «не знайдено»
  if (current === defaultLang || !codes.includes(current)) return next();
  return intentionInVisitorLang(request, current, next);
};
