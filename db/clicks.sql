-- Таблиця кліків по посиланнях і кнопках (functions/api/click.ts).
-- Створюється один раз: вставити в Cloudflare → D1 → база → Console і натиснути Execute.
-- Якщо таблиця вже є без колонок lang, visit чи seconds, додайте їх окремо (один раз, до деплою нової версії сайту):
--   ALTER TABLE clicks ADD COLUMN lang TEXT;
--   ALTER TABLE clicks ADD COLUMN visit TEXT;
--   ALTER TABLE clicks ADD COLUMN seconds INTEGER;
--   CREATE INDEX IF NOT EXISTS clicks_visit ON clicks (visit);
CREATE TABLE IF NOT EXISTS clicks (
  id INTEGER PRIMARY KEY,
  at TEXT NOT NULL DEFAULT (datetime('now')), -- час за UTC
  link TEXT NOT NULL,  -- що натиснули: tel, viber, whatsapp, abroad, menu, photo-… або адреса посилання (#help, https://…);
                       -- landing — прихід на сайт (один раз за візит);
                       -- time — сторінку сховали (закрили, перейшли в іншу вкладку чи застосунок), секунди в колонці seconds;
                       -- lang — відкрили вибір мови, lang-en — перемкнули на англійську (з мови в колонці lang);
                       -- lang-auto — сайт сам відкрив мову браузера замість української (functions/index.ts)
  place TEXT,          -- де на сторінці: header, footer, sticky, lightbox або id секції (top, about, help…)
  label TEXT,          -- підпис кнопки чи посилання
  contact TEXT,        -- ім’я на картці контакту, якщо клік на ній
  source TEXT,         -- звідки прийшли: мітка ?from=…, застосунок (telegram, facebook…) або сайт-джерело
  lang TEXT,           -- мова сторінки, на якій клікнули (uk, en…); для lang-auto — мова, яку відкрив сайт
  visit TEXT,          -- випадковий номер візиту: однаковий у всіх кліків, поки відкрита вкладка; у lang-auto порожній
  seconds INTEGER      -- для time: скільки секунд сторінку було видно від минулого time
);
CREATE INDEX IF NOT EXISTS clicks_at ON clicks (at);
CREATE INDEX IF NOT EXISTS clicks_visit ON clicks (visit);
