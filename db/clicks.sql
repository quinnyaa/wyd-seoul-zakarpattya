-- Таблиця кліків по посиланнях і кнопках (functions/api/click.ts).
-- Створюється один раз: вставити в Cloudflare → D1 → база → Console і натиснути Execute.
CREATE TABLE IF NOT EXISTS clicks (
  id INTEGER PRIMARY KEY,
  at TEXT NOT NULL DEFAULT (datetime('now')), -- час за UTC
  link TEXT NOT NULL,  -- що натиснули: tel, viber, abroad, menu, photo-… або адреса посилання (#help, https://…);
                       -- landing — перехід на сайт за посиланням із міткою ?from=
  place TEXT,          -- де на сторінці: header, footer, sticky, lightbox або id секції (top, about, help…)
  label TEXT,          -- підпис кнопки чи посилання
  contact TEXT,        -- ім’я на картці контакту, якщо клік на ній
  source TEXT          -- звідки прийшли: мітка ?from=telegram або сайт-джерело (l.facebook.com…)
);
CREATE INDEX IF NOT EXISTS clicks_at ON clicks (at);
