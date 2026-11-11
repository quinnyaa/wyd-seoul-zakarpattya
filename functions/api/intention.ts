// Cloudflare Pages Function: POST /api/intention приймає форму зі сторінки /intention/
// (src/pages/[...lang]/intention.astro): ім’я, прізвище, телефон та інтенцію.
// Запис іде в базу D1 (таблиця db/intentions.sql, той самий binding DB) і, якщо в Cloudflare задано
// TG_TOKEN і TG_CHAT, повідомленням у Telegram.
// IP, cookies та інші дані про людину не зберігаються.

import { languages } from '../../src/content/languages';
import type { Env as ClickEnv } from './click';

interface Env extends ClickEnv {
  /** Токен бота від @BotFather і номер чату, куди бот пише (див. README). */
  TG_TOKEN?: string;
  TG_CHAT?: string;
}

// Непорожній рядок, обрізаний до max символів, або null
const text = (value: unknown, max: number) =>
  typeof value === 'string' && value.trim() ? value.trim().slice(0, max) : null;

// Код однієї з мов сайту або null
const langCode = (value: unknown) =>
  languages.find(({ code }) => code === value)?.code ?? null;

const reply = (status: number) => new Response(null, { status });

async function toTelegram(env: Env, message: string) {
  if (!env.TG_TOKEN || !env.TG_CHAT) return false;
  const response = await fetch(`https://api.telegram.org/bot${env.TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TG_CHAT, text: message.slice(0, 4000) }),
  });
  return response.ok;
}

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  // Приймаємо форму тільки з нашого сайту
  const origin = request.headers.get('Origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return reply(403);

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(await request.text());
  } catch {
    return reply(400);
  }
  if (!data || typeof data !== 'object') return reply(400);

  // Поле-пастка: людина його не бачить, а бот заповнює. Відповідаємо «прийнято», але нічого не зберігаємо
  if (text(data.website, 1)) return reply(204);

  const firstName = text(data.firstName, 80);
  const lastName = text(data.lastName, 80);
  const phone = text(data.phone, 40);
  const intention = text(data.intention, 2000);
  if (!firstName || !lastName || !phone || !intention || data.consent !== true) return reply(400);
  const lang = langCode(data.lang);

  // База й Telegram незалежні: досить, щоб інтенція дійшла хоча б в одне місце
  const [saved, sent] = await Promise.all([
    env.DB
      ? env.DB.prepare('INSERT INTO intentions (first_name, last_name, phone, intention, lang) VALUES (?, ?, ?, ?, ?)')
          .bind(firstName, lastName, phone, intention, lang)
          .run()
          .then(() => true, () => false)
      : false,
    toTelegram(env, `Нова інтенція\n\n${firstName} ${lastName}\n${phone}\nМова: ${lang ?? '—'}\n\n${intention}`).catch(() => false),
  ]);
  // Якщо база не записала, а Telegram працює, — попереджаємо там же
  if (!saved && sent) await toTelegram(env, 'Увага: цю інтенцію не вдалося записати в базу, вона є лише тут.').catch(() => false);

  return reply(saved || sent ? 204 : 500);
};
