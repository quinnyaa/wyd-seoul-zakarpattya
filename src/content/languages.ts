/*
  МОВИ САЙТУ.
  Перша мова в списку — основна: її сторінки лежать у корені сайту (/), решта — у підтеках (/en/, /pl/…).
  Вибір мови в шапці (прапор і назва) з’являється сам, щойно в списку більше однієї мови.

  Щоб додати мову:
    1. Скопіюйте src/content/texts/uk.ts у файл з кодом мови, наприклад src/content/texts/en.ts,
       і перекладіть усе, що в лапках.
    2. Додайте рядок у список нижче (або розкоментуйте приклад).
    3. Запустіть npm run check: він покаже, якщо в перекладі бракує якогось тексту.

  code    — код мови за ISO 639-1 (uk, en, pl, de…). Він же назва файлу з текстами й адреса: /en/
  name    — назва мови нею самою: так її показує вибір мови
  short   — коротка назва на кнопці вибору мови на широкому екрані
  flag    — код країни для прапора (ua, gb, us, pl, de, kr…), список — node_modules/flag-icons/flags/4x3/
  locale  — мова й країна для прев’ю в соцмережах (og:locale)
*/

export const languages = [
  { code: 'uk', name: 'Українська', short: 'УКР', flag: 'ua', locale: 'uk_UA' },
  { code: 'en', name: 'English', short: 'EN', flag: 'gb', locale: 'en_GB' },
  { code: 'de', name: 'Deutsch', short: 'DE', flag: 'de', locale: 'de_DE' },
  { code: 'fr', name: 'Français', short: 'FR', flag: 'fr', locale: 'fr_FR' },
  { code: 'es', name: 'Español', short: 'ES', flag: 'es', locale: 'es_ES' },
  { code: 'it', name: 'Italiano', short: 'IT', flag: 'it', locale: 'it_IT' },
] as const;
