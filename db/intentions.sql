-- Таблиця інтенцій із форми /intention/ (functions/api/intention.ts). Лежить у тій самій базі, що й кліки.
-- Створюється один раз: вставити в Cloudflare → D1 → база → Console і натиснути Execute.
-- Тут персональні дані: після паломництва таблицю очистити (DELETE FROM intentions;),
-- а один запис на прохання людини — DELETE FROM intentions WHERE id = …;
-- Консоль D1 склеює вставлений текст в один рядок, тому коментарів усередині запиту немає.
-- Поля: at — час за UTC; lang — мова сторінки, з якої надіслали форму (uk, en…).
CREATE TABLE IF NOT EXISTS intentions (id INTEGER PRIMARY KEY, at TEXT NOT NULL DEFAULT (datetime('now')), first_name TEXT NOT NULL, last_name TEXT NOT NULL, phone TEXT NOT NULL, intention TEXT NOT NULL, lang TEXT);
