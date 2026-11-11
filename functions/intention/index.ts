// Cloudflare Pages Function: GET /intention/ відкриває форму інтенцій мовою відвідувача (cookie lang або мова браузера),
// якщо така мова є на сайті. Логіка — у src/utils/visitor-lang.ts.

import { defaultLang, intentionInVisitorLang } from '../../src/utils/visitor-lang';

export const onRequestGet = ({ request, next }: { request: Request; next: () => Promise<Response> }) =>
  intentionInVisitorLang(request, defaultLang, next);
