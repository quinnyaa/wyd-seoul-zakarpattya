/** Форми слова за правилами множини мови: { one: 'день', few: 'дні', many: 'днів' } або { one: 'day', other: 'days' }. */
export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>>;

/** Слово у формі, яка пасує до числа: 1 день, 2 дні, 5 днів; 1 day, 2 days. */
export function plural(n: number, forms: PluralForms, lang: string): string {
  return forms[new Intl.PluralRules(lang).select(n)] ?? forms.other ?? forms.many ?? '';
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
