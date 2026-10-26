/*
  ТЕКСТИ САЙТУ АНГЛІЙСЬКОЮ. Будова — як в основному файлі uk.ts, пояснення до кожного тексту — там.
  Змінюйте лише те, що в лапках.
*/

import type { PluralForms } from '../../utils/countdown';
import type { Texts } from '../../utils/i18n';

/* ---------- Загальне ---------- */

export const site = {
  name: 'From the Carpathians to Seoul',
  nameAccents: ['Carpathians', 'Seoul'],
  title: 'From the Carpathians to Seoul — the Uzhhorod youth pilgrimage to World Youth Day 2027',
  description:
    'Young people of the Neocatechumenal communities in Uzhhorod are raising funds for a pilgrimage to Seoul for World Youth Day (3–8 August 2027). See how to help.',
  shareTitle: 'The Uzhhorod youth pilgrimage to WYD 2027',
  shareDescription: 'Seoul, 3–8 August 2027. Support our journey.',
  helpButton: 'Help us',
  homeLabel: 'back to top of page',
  skipLink: 'Skip to content',
  newTab: '(opens in a new tab)',
  menu: {
    label: 'Main menu',
    open: 'Open menu',
    close: 'Close menu',
  },
  languages: 'Site language',
};

export const nav = [
  { label: 'Who we are', href: '#about' },
  { label: 'The trip', href: '#wyd' },
  { label: 'How to help', href: '#help' },
  { label: 'Thank you', href: '#thanks' },
  { label: 'Contact', href: '#contacts' },
];

/* ---------- 1. Заголовок і вступ ---------- */

export const hero = {
  eventLine: ['Pilgrimage 2027', 'Seoul', '3–8 August'],
  lead: 'We are holding a charity fundraiser for our pilgrimage to Seoul in August 2027. The journey begins today, and we invite you to become part of our mission: your support makes this trip possible, and we will gratefully carry your intentions with us to South Korea.',
  note: 'You can find out more about the event itself on the [official website of World Youth Day 2027](https://wydseoul.org/en). Please note: this is the website of our youth group, not an official resource of the event.',
  buttons: {
    help: 'How to help',
    about: 'Who we are',
    wyd: 'What is World Youth Day',
  },
  sticker: ['Seoul', '2027'],

  countdown: {
    title: 'Until we meet in Seoul',
    done: 'The gathering in Seoul has begun. Thank you to everyone who helped us get here!',
    units: {
      days: { one: 'day', other: 'days' },
      hours: { one: 'hour', other: 'hours' },
      minutes: { one: 'minute', other: 'minutes' },
      seconds: { one: 'second', other: 'seconds' },
    } as Record<'days' | 'hours' | 'minutes' | 'seconds', PluralForms>,
  },
};

/* ---------- 2. Хто ми ---------- */

export const about = {
  eyebrow: 'Who we are',
  title: 'A community where we meet Christ',
  text: 'We are the young people of the Neocatechumenal communities of Uzhhorod. We have responded to Pope Leo XIV’s invitation to set out for Seoul. For us this pilgrimage is a very serious moment of encounter with God himself. We want to receive light on our vocation and our mission, which in these times of so much fear and uncertainty is decisive for us.',
  note: 'You can find out more about this Christian itinerary on the [official website of the Neocatechumenal Way](https://neocatechumenaleiter.org/en/).',

  organizer: {
    eyebrow: 'Fundraising organiser',
    name: 'Campomar Hernando Francisco Javier',
    text: 'Coordinates the charity fundraiser. If you have any questions, get in touch — the details are in the “Contact” section.',
    link: 'Go to contacts',
  },

  gallery: {
    title: 'Our photos',
    hint: 'Click on a photo to enlarge it.',
  },
};

/* ---------- 3. Що таке Всесвітній день молоді ---------- */

export const wyd = {
  eyebrow: 'The trip',
  title: 'What is World Youth Day',
  text: [
    'World Youth Day (WYD) is a great international pilgrimage begun in 1985 by Pope John Paul II. It is a time when the Church gathers young people from all over the world together with the Successor of Peter (the Pope) to strengthen them in the faith through listening to the Word, praying together and the Eucharist. After Lisbon (2023), the next stop will be Seoul (South Korea) in August 2027.',
  ],
  facts: [
    { label: 'Where', value: 'Seoul, South Korea' },
    { label: 'When', value: '3–8 August 2027' },
  ],

  why: {
    title: 'Why this matters to us',
    items: [
      {
        title: 'To see that we are not alone',
        text: 'Young people from all over the world who believe as we do will gather in Seoul. That gives us strength.',
      },
      {
        title: 'To tell people about Ukraine',
        text: 'We are bringing Transcarpathia and Ukraine with us: our language, our songs and our prayer for peace.',
      },
      {
        title: 'To come back changed',
        text: 'A journey like this changes you. What we receive there we want to bring home — to our families, our parishes and our city.',
      },
    ],
  },

  cost: {
    title: 'What it costs',
    prefix: 'about',
    value: '€2,000',
    label: 'per person',
    includesTitle: 'What the amount covers',
    includes: ['Flights', 'Accommodation', 'Registration', 'Visa', 'Meals'],
    text: [
      'For schoolchildren and students this is a very large sum. Many families cannot pay for a trip like this on their own.',
      'So we are raising the money together. Everything we manage to collect reduces the amount each participant has to pay.',
    ],
  },
};

/* ---------- 4. Як допомогти ---------- */

export const help = {
  eyebrow: 'Support',
  title: 'How to help us get to Seoul',
  text: [
    'There is no target amount, and there is no such thing as a donation that is too small. Every hryvnia is a brick in our road to Seoul.',
    '**We accept donations only in cash, in person — anywhere in Transcarpathia.** We will be glad to meet you and thank you personally.',
  ],
  button: 'Contact us',

  steps: {
    title: 'How it works',
    items: [
      {
        title: 'Get in touch',
        text: 'Call us or write on whichever messenger suits you. The contact details are further down this page.',
      },
      {
        title: 'We arrange a meeting',
        text: 'We will meet wherever is convenient for you — anywhere in Transcarpathia.',
      },
      {
        title: 'Hand over your donation',
        text: 'You give your donation in cash and receive Pilgrim Cards.',
      },
    ],
    notice:
      'There are no card or account numbers on this site, and there never will be. If someone asks you to transfer money on our behalf, it is not us.',
  },

  fundraising: {
    eyebrow: 'Not only asking',
    title: 'How we are raising money ourselves',
    lead: 'We are not waiting for someone else to do it all for us. We are working ourselves to make this trip happen.',
    events: [
      {
        title: 'Charity concert',
        text: 'We sing and play for everyone who wants to support us.',
        note: 'We will announce the date, time and place of the concert later.',
      },
      {
        title: 'Fairs',
        text: 'We sell things we have made with our own hands.',
        note: 'We will announce the dates and places of the fairs later.',
      },
    ],
  },

  other: {
    title: 'Other ways to help',
    items: [
      {
        title: 'Come to a concert or a fair',
        text: 'Listen to us sing, or buy something made by our own hands.',
      },
      {
        title: 'Share the site',
        text: 'Send the link to your friends and family. The more people hear about us, the better.',
      },
      {
        title: 'Help with the organisation',
        text: 'Do you have a hall, sound equipment or a good idea for an event? Write to us.',
      },
    ],
  },
};

/* ---------- 5. Наша подяка ---------- */

export const thanks = {
  eyebrow: 'Our thanks',
  title: 'Setting out together: the Pilgrim Card',
  intro: 'We do not simply want to ask for help — we want to share our joy with you.',
  text: 'To everyone who supports our journey with a donation of 200 UAH (about €4) or more, we give a **Pilgrim Card**. It is a sign that you are travelling with us spiritually.',
  rule: 'Every 200 UAH donated — one card',
  evening:
    'As soon as we close our fundraiser, we will invite the cardholders to an **online Thank-You Evening**. We will gather as a whole community, live, to sum up our fundraiser. And among the cardholders we will share out **special gifts from our young people** as a sign of our boundless gratitude.',
  mockup: {
    thanks: 'Thank you!',
    note: 'The card design will go here!',
    alt: 'Pilgrim Card',
    open: 'Enlarge',
  },
};

/* ---------- 6. Контакти ---------- */

export const contacts = {
  eyebrow: 'Get in touch',
  title: 'Contacts',
  lead: 'Write or call us and we will arrange a meeting.',
  callLabel: 'Call',

  abroad: {
    title: 'Are you abroad?',
    text: 'Write to us and we will arrange something individually.',
    button: 'Write to us',
  },
};

/* ---------- 7. Підвал ---------- */

export const footer = {
  legalLang: 'en',
  about: 'The young people of the Neocatechumenal communities of Uzhhorod.',
  disclaimer: 'This is the website of our youth group, not an official resource of World Youth Day.',
  navTitle: 'Page sections',
  privacy: 'No cookies and no personal data: we only count clicks, anonymously.',
  sourceLabel: 'Open source on GitHub',
  rights: '© 2026 · Code released under the MIT License.',
  sourceHref: 'https://github.com/quinnyaa/wyd-seoul-zakarpattya',
};

/* ---------- Фото ---------- */

export const photos = {
  alt: {
    hero: 'A group photo of our young people: about thirty people standing and sitting together in a bright hall',
    community:
      'A youth meeting in a hall under wooden beams: about thirty people sitting in a semicircle and listening to two speakers beside a screen with a map',
    gallery1: 'A girl in a kitchen using tongs to lay out candied orange peel for a charity fair',
    gallery2: 'Young people hiking in the Carpathians',
    gallery3: 'Young people at a charity fair table with baked goods in bags and a banner reading “Seoul 2027 for the youth gathering”',
    gallery4: 'Young people singing at a charity concert',
  },
  placeholder: 'Photo placeholder',
  open: 'Enlarge photo',
  viewer: 'Photo viewer',
  close: 'Close',
  prev: 'Previous photo',
  next: 'Next photo',
};

/* ---------- 404 ---------- */

export const notFound = {
  title: 'Page not found',
  heading: 'There is nothing here',
  text: 'It looks like this page got lost somewhere between the Carpathians and Seoul.',
  button: 'Back to home page',
};

/* ---------- Правити не потрібно ---------- */

export const texts = { site, nav, hero, about, wyd, help, thanks, contacts, footer, photos, notFound };

export default texts satisfies Texts;
