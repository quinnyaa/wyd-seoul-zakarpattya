/*
  КОНТАКТНІ ОСОБИ.
  Щоб змінити контакти, правте лише цей файл. Посилання на дзвінок і месенджери
  складаються самі з номера телефону та імені користувача.

  phone     — номер у міжнародному форматі, без пробілів: '+380501234567'
  telegram  — ім'я користувача без @ (або видаліть рядок, якщо Telegram немає)
  whatsapp  — true, якщо на цьому номері є WhatsApp
  viber     — true, якщо на цьому номері є Viber
  email     — адреса пошти (або видаліть рядок)
*/

export interface Contact {
  name: string;
  role?: string;
  phone: string;
  telegram?: string;
  whatsapp?: boolean;
  viber?: boolean;
  email?: string;
}

export const contacts: Contact[] = [
  {
    name: 'Кампомар Ернандо Франціско Хавієр',
    role: 'Організатор поїздки',
    phone: '+380000000001', // [TODO: телефон організатора]
    telegram: 'todo_username_1', // [TODO: Telegram організатора]
    whatsapp: true,
    viber: true,
    email: 'todo1@example.com', // [TODO: email організатора]
  },
  {
    name: '[TODO: ПІБ контактної особи 2]',
    role: '[TODO: роль]',
    phone: '+380000000002', // [TODO: телефон]
    telegram: 'todo_username_2', // [TODO: Telegram]
    whatsapp: true,
    viber: true,
    email: 'todo2@example.com', // [TODO: email]
  },
  {
    name: '[TODO: ПІБ контактної особи 3]',
    role: '[TODO: роль]',
    phone: '+380000000003', // [TODO: телефон]
    telegram: 'todo_username_3', // [TODO: Telegram]
    whatsapp: true,
    viber: true,
    email: 'todo3@example.com', // [TODO: email]
  },
];

/** Контакт для блоку «Ви за кордоном?» — за замовчуванням перша особа зі списку. */
export const abroadContact = contacts[0];

/* ---------- Посилання (правити не потрібно) ---------- */

const digits = (phone: string) => phone.replace(/\D/g, '');

export const links = {
  tel: (c: Contact) => `tel:+${digits(c.phone)}`,
  telegram: (c: Contact) => (c.telegram ? `https://t.me/${c.telegram}` : undefined),
  whatsapp: (c: Contact) => (c.whatsapp ? `https://wa.me/${digits(c.phone)}` : undefined),
  viber: (c: Contact) => (c.viber ? `viber://chat?number=%2B${digits(c.phone)}` : undefined),
  email: (c: Contact) => (c.email ? `mailto:${c.email}` : undefined),
};

/** '+380501234567' → '+380 50 123 45 67' */
export function formatPhone(phone: string): string {
  const d = digits(phone);
  const match = d.match(/^(380)(\d{2})(\d{3})(\d{2})(\d{2})$/);
  return match ? `+${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}` : `+${d}`;
}
