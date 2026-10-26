-- Таблиця кліків по посиланнях і кнопках (functions/api/click.ts).
-- Створюється один раз: вставити в Cloudflare → D1 → база → Console і натиснути Execute.
-- Якщо таблиця вже є без колонки lang, додайте її окремо (один раз, до деплою нової версії сайту):
--   ALTER TABLE clicks ADD COLUMN lang TEXT;
CREATE TABLE IF NOT EXISTS clicks (
  id INTEGER PRIMARY KEY,
  at TEXT NOT NULL DEFAULT (datetime('now')), -- час за UTC
  link TEXT NOT NULL,  -- що натиснули: tel, viber, whatsapp, abroad, menu, photo-… або адреса посилання (#help, https://…);
                       -- landing — прихід на сайт із відомого джерела (один раз за візит);
                       -- lang — відкрили вибір мови, lang-en — перемкнули на англійську (з мови в колонці lang);
                       -- lang-auto — сайт сам відкрив мову браузера замість української (functions/index.ts)
  place TEXT,          -- де на сторінці: header, footer, sticky, lightbox або id секції (top, about, help…)
  label TEXT,          -- підпис кнопки чи посилання
  contact TEXT,        -- ім’я на картці контакту, якщо клік на ній
  source TEXT,         -- звідки прийшли: мітка ?from=…, застосунок (telegram, facebook…) або сайт-джерело
  lang TEXT            -- мова сторінки, на якій клікнули (uk, en…); для lang-auto — мова, яку відкрив сайт
);
CREATE INDEX IF NOT EXISTS clicks_at ON clicks (at);
