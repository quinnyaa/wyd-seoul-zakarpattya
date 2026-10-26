-- Готові запити для Cloudflare → D1 → база → Console. Вставляйте по одному.

-- Найпопулярніші кліки за весь час: що, де і з яким підписом
SELECT link, place, label, count(*) AS clicks FROM clicks
GROUP BY link, place, label ORDER BY clicks DESC;

-- Тільки контакти: телефон, месенджери, «Живете за кордоном?»
SELECT contact, link, count(*) AS clicks FROM clicks
WHERE link IN ('tel', 'viber', 'telegram', 'abroad')
GROUP BY contact, link ORDER BY clicks DESC;

-- Тільки зовнішні посилання
SELECT link, label, count(*) AS clicks FROM clicks
WHERE link LIKE 'http%'
GROUP BY link, label ORDER BY clicks DESC;

-- Кнопки «Допомогти»: яка спрацьовує найчастіше
SELECT place, label, count(*) AS clicks FROM clicks
WHERE link LIKE '%#help'
GROUP BY place, label ORDER BY clicks DESC;

-- Канали (?from=telegram тощо): скільки прийшло і скільки з них натиснули контакти
SELECT source,
  sum(link = 'landing') AS came,
  sum(link IN ('tel', 'viber', 'telegram', 'abroad')) AS contacts,
  sum(link <> 'landing') AS all_clicks
FROM clicks WHERE source IS NOT NULL
GROUP BY source ORDER BY came DESC;

-- По днях за останні 30 днів
SELECT date(at) AS day, count(*) AS clicks FROM clicks
WHERE at >= datetime('now', '-30 days')
GROUP BY day ORDER BY day DESC;

-- Останні 50 кліків
SELECT at, link, place, label, contact FROM clicks ORDER BY id DESC LIMIT 50;
