/*
  КОНТАКТИ.
  Щоб змінити контакти, правте лише цей файл. Посилання на дзвінок і месенджери
  складаються самі з номера телефону та імені користувача.

  phone     — номер у міжнародному форматі, без пробілів: '+380501234567'
  telegram  — ім’я користувача без @ (або видаліть рядок, якщо Telegram немає)
  viber     — true, якщо на цьому номері є Viber
  whatsapp  — true, якщо на цьому номері є WhatsApp

  name і role можна перекласти іншими мовами сайту: role: { uk: 'організатор', en: 'organizer' }.
  Якщо перекладу немає, показується українською.
*/
import type { Localized } from '../utils/i18n';

export interface Contact {
  name: Localized;
  role?: Localized;
  phone: string;
  telegram?: string;
  viber?: boolean;
  whatsapp?: boolean;
}

export const contacts: Contact[] = [
  {
    name: {
      uk: 'Кампомар Ернандо Франціско Хавієр',
      en: 'Campomar Hernando Francisco Javier',
      de: 'Campomar Hernando Francisco Javier',
      fr: 'Campomar Hernando Francisco Javier',
      es: 'Campomar Hernando Francisco Javier',
      it: 'Campomar Hernando Francisco Javier',
    },
    role: {
      uk: 'організатор благодійної збірки',
      en: 'charity fundraiser organiser',
      de: 'Organisator der Spendenaktion',
      fr: 'organisateur de la collecte de dons',
      es: 'organizador de la colecta benéfica',
      it: 'organizzatore della raccolta fondi',
    },
    phone: '+380634181041',
    viber: true,
    whatsapp: true,
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
  whatsapp: (c: Contact) => (c.whatsapp ? `https://wa.me/${digits(c.phone)}` : undefined),
};

/** '+380501234567' → '+380 50 123 45 67' */
export function formatPhone(phone: string): string {
  const d = digits(phone);
  const match = d.match(/^(380)(\d{2})(\d{3})(\d{2})(\d{2})$/);
  return match ? `+${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}` : `+${d}`;
}
