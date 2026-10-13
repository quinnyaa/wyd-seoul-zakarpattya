/** Форми слова: для 1, для 2–4, для 5 і більше. */
export type Forms = readonly string[];

/** Українська множина: 1 день, 2 дні, 5 днів. */
export function plural(n: number, forms: Forms): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0] ?? '';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1] ?? '';
  return forms[2] ?? '';
}

export function timeLeft(target: number, now: number) {
  const total = Math.max(0, Math.floor((target - now) / 1000));
  return {
    done: target <= now,
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}
