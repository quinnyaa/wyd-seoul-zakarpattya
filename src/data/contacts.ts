/*
  КОНТАКТИ.
  Щоб змінити контакти, правте лише цей файл. Посилання на дзвінок і месенджери
  складаються самі з номера телефону та імені користувача.

  phone     — номер у міжнародному форматі, без пробілів: '+380501234567'
  telegram  — ім’я користувача без @ (або видаліть рядок, якщо Telegram немає)
  viber     — true, якщо на цьому номері є Viber
*/

export interface Contact {
  name: string;
  role?: string;
  phone: string;
  telegram?: string;
  viber?: boolean;
}

export const contacts: Contact[] = [
  {
    name: 'Кампомар Ернандо Франціско Хавієр',
    role: 'організатор благодійної збірки',
    phone: '+380634181041',
    viber: true,
  },
];

/** Контакт для блоку «Ви за кордоном?» — за замовчуванням перша особа зі списку. */
export const abroadContact = contacts[0];

/* ---------- Посилання (правити не потрібно) ---------- */

const digits = (phone: string) => phone.replace(/\D/g, '');

export const links = {
  tel: (c: Contact) => `tel:+${digits(c.phone)}`,
  telegram: (c: Contact) => (c.telegram ? `https://t.me/${c.telegram}` : undefined),
  viber: (c: Contact) => (c.viber ? `viber://chat?number=%2B${digits(c.phone)}` : undefined),
};

/** '+380501234567' → '+380 50 123 45 67' */
export function formatPhone(phone: string): string {
  const d = digits(phone);
  const match = d.match(/^(380)(\d{2})(\d{3})(\d{2})(\d{2})$/);
  return match ? `+${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}` : `+${d}`;
}
