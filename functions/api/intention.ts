// Cloudflare Pages Function: POST /api/intention приймає форму зі сторінки /intention/
// (src/pages/[...lang]/intention.astro): ім’я, прізвище, телефон та інтенції.
// Запис іде в базу D1 (таблиця db/intentions.sql, той самий binding DB) і, якщо в Cloudflare задано
// TG_TOKEN і TG_CHAT, повідомленням у Telegram. Номер запису (id з бази) стоїть у заголовку повідомлення.
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

// Telegram приймає до 4096 символів у повідомленні
const TG_MAX = 4000;

const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function toTelegram(env: Env, message: string, html = false) {
  if (!env.TG_TOKEN || !env.TG_CHAT) return false;
  const response = await fetch(`https://api.telegram.org/bot${env.TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TG_CHAT, text: message.slice(0, TG_MAX), ...(html && { parse_mode: 'HTML' }) }),
  });
  return response.ok;
}

interface Entry {
  /** Номер запису в базі; null — база не записала. */
  number: number | null;
  firstName: string;
  lastName: string;
  phone: string;
  intention: string;
  lang: string | null;
}

// Повідомлення в Telegram: підписи жирним, далі текст інтенцій
function toTelegramEntry(env: Env, entry: Entry) {
  const card = (bold: (label: string) => string, value: (text: string) => string) =>
    [
      bold(entry.number ? `Інтенція № ${entry.number}` : 'Інтенція без номера'),
      '',
      `${bold('Ім’я та прізвище:')} ${value(`${entry.firstName} ${entry.lastName}`)}`,
      `${bold('Телефон:')} ${value(entry.phone)}`,
      `${bold('Мова:')} ${entry.lang ?? '—'}`,
      '',
      bold('Текст інтенцій:'),
      value(entry.intention),
    ].join('\n');
  const html = card((label) => `<b>${label}</b>`, escapeHtml);
  // Задовге повідомлення шлемо без розмітки: обрізаний тег Telegram не прийме
  return html.length <= TG_MAX ? toTelegram(env, html, true) : toTelegram(env, card(String, String));
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

  // Спершу база: її id — номер інтенції, він іде в Telegram
  const number = env.DB
    ? await env.DB.prepare('INSERT INTO intentions (first_name, last_name, phone, intention, lang) VALUES (?, ?, ?, ?, ?) RETURNING id')
        .bind(firstName, lastName, phone, intention, lang)
        .first<number>('id')
        .catch(() => null)
    : null;
  // База й Telegram незалежні: досить, щоб інтенції дійшли хоча б в одне місце
  const sent = await toTelegramEntry(env, { number, firstName, lastName, phone, intention, lang }).catch(() => false);
  // Якщо база не записала, а Telegram працює, — попереджаємо там же
  if (!number && sent) await toTelegram(env, 'Увага: ці інтенції не вдалося записати в базу, вони є лише тут.').catch(() => false);

  return reply(number || sent ? 204 : 500);
};
