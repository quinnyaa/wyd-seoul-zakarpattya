// Cloudflare Pages Function: POST /api/click записує клік по посиланню чи кнопці в базу D1.
// Зберігаємо лише що натиснули, де на сторінці, підпис кнопки, ім’я з картки контакту,
// звідки прийшли (мітка ?from= або сайт) і час — без IP, cookies та інших даних про людину.
// Таблиця — db/clicks.sql, база підключається в Cloudflare як binding DB.

interface Env {
  DB?: {
    prepare(sql: string): { bind(...values: unknown[]): { run(): Promise<unknown> } };
  };
}

// Непорожній рядок, обрізаний до max символів, або null
const text = (value: unknown, max: number) =>
  typeof value === 'string' && value.trim() ? value.trim().slice(0, max) : null;

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  // Приймаємо кліки тільки з нашого сайту
  const origin = request.headers.get('Origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return new Response(null, { status: 403 });
  }

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(await request.text());
  } catch {
    return new Response(null, { status: 400 });
  }
  if (!data || typeof data !== 'object') return new Response(null, { status: 400 });

  const link = text(data.link, 300);
  if (!link) return new Response(null, { status: 400 });

  // Без підключеної бази (наприклад, на тестовому деплої) клік просто не записується
  await env.DB?.prepare('INSERT INTO clicks (link, place, label, contact, source) VALUES (?, ?, ?, ?, ?)')
    .bind(link, text(data.place, 40), text(data.label, 120), text(data.contact, 80), text(data.source, 60))
    .run();
  return new Response(null, { status: 204 });
};
