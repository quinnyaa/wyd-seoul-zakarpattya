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
  giftsButton: 'Gifts',
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

  video: {
    title: 'Pope Leo\u00a0XIV’s invitation',
    text: 'The Holy Father’s video message to young people on the opening of registration for World Youth Day in Seoul.',
    play: 'Watch the video',
  },

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
        title: 'Finding light for our lives',
        text: 'We are living through a time of war, uncertainty and hardship. At times like these, it is especially important not to lose hope.',
      },
      {
        title: 'Discovering our vocation',
        text: 'Each of us is searching for answers to important questions: Who am I? What am I living for? What place has God prepared for me in this world?',
      },
      {
        title: 'Sharing the story of Ukraine',
        text: 'We carry Transcarpathia and Ukraine with us, along with our prayer for peace. We want to bear witness to the fact that God does not abandon us, and that even in the midst of suffering, life has meaning and hope does not die.',
      },
      {
        title: 'Returning to share what we have received',
        text: 'A journey like this changes us. We want to bring home what we receive there and share it with our families, parishes and our city.',
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
    'The fundraiser runs until December 20, 2026. The fundraising period may be extended if necessary, with the relevant information updated accordingly. After the trip, we will publish a report on this website: how much we raised, what we spent it on and how we used any remaining funds.',
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
        text: 'You hand over your donation in cash, we record it on the stub of the card, and you receive a Pilgrim Card.',
      },
    ],
    stub: 'On the stub of the card we record your name, phone number, the amount and the date. The stub stays with us — this is how we keep track of donations. We need your phone number only to invite you to the Thank-You Evening; we will delete it afterwards.',
    notice:
      'There are no card or account numbers on this site, and there never will be. With supporters abroad we make arrangements personally. If you are not sure a message really comes from us, check with us using the contacts below.',
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
    'As soon as we finish our fundraiser, we will invite everyone who supported us to an **online Thank-You Evening**. We will gather as a whole community in a live stream to sum up our fundraiser. **A donor who holds a Pilgrim Card may receive a gift from the participants**. Gifts are not drawn by lot and do not depend on the number of cards.',
  mockup: {
    thanks: 'Thank you!',
    note: 'The card design will go here!',
    alt: 'Pilgrim Card',
    open: 'Enlarge',
  },
};

/* ---------- 5а. Подарунки від благодійників ---------- */

export const gifts = {
  eyebrow: 'Gifts',
  title: 'Gifts from our supporters and benefactors',
  intro: 'Thanks to the generosity of our sponsors and benefactors, we have received some wonderful gifts:',
  items: {
    vacuum: 'Robot vacuum cleaner',
    projector: 'Projector',
    more: 'And many other lovely surprises',
  },
  text: 'Each of these gifts represents the generosity of individuals and businesses who believe in our initiative and are helping us get closer to our goal: making the young people’s trip to Seoul possible.',
  deadline: {
    label: 'Donations will be counted until',
    date: 'December 20, 2026',
  },
  evening: 'These gifts will be presented as a token of our gratitude to our benefactors and supporters. The results will be announced during our **online Thank-You Evening**.',
  thanks: 'We would like to express our heartfelt thanks to all our sponsors and benefactors for their generosity, trust, and willingness to be part of this initiative, regardless of the amount donated!',
  motto: 'Together, we can achieve so much more!',
  alt: 'An open golden gift box with a robot vacuum, a projector, a camera and a dinner voucher',
  certificates: {
    toggle: 'Lots of different vouchers',
    hint: 'Tap to have a look',
    note: 'Open any voucher to see it full size.',
    label: 'Voucher',
    items: {
      dinner: 'Dinner for two at Old Continent restaurant',
      photo: 'Professional photo shoot',
      english: 'Intensive English course, 10 lessons',
      cake: 'Cake up to 3 kg',
      honey: 'Jar of Transcarpathian organic honey',
      water: '100 liters of drinking water',
    },
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
  privacy: 'No cookies or trackers: we only count clicks, anonymously.',
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

/* ---------- Сторінка інтенцій (/intention/) ---------- */

export const intention = {
  title: 'Your intentions',
  eyebrow: 'Intentions',
  heading: 'Leave us your intentions',
  lead: 'Tell us who or what to pray for: we will carry your intentions with us to Seoul.',
  back: 'Back',
  invite: {
    title: 'Already helped us?',
    text: 'We would like to pray for you. Leave us your intentions, and we will carry them with us to Seoul.',
    button: 'Leave your intentions',
  },
  fields: {
    firstName: 'First name',
    lastName: 'Last name',
    phone: 'Phone',
    phoneHint: 'With the country code, e.g. +39…',
    intention: 'Intentions',
    intentionHint: 'Who or what you would like us to pray for.',
  },
  consent: 'I agree to the processing of my data.',
  privacyToggle: 'Which data, and why?',
  privacy:
    'We keep only what you write here: your first name, last name, phone number and intentions. We need your name and intentions to know who and what to pray for, and your phone number to invite you to the online Thank-You Evening. Only the organisers of the collection see this data; we do not pass it on to anyone else. After the pilgrimage all the data will be deleted; if you want it removed sooner, write to us using the [contacts](/#contacts).',
  submit: 'Send',
  sending: 'Sending…',
  success: {
    title: 'Thank you!',
    text: 'We have received your intentions and will carry them to Seoul.',
    button: 'Back to home page',
  },
  errors: {
    required: 'Please fill in “{field}” to send the form.',
    consent: 'Please tick the consent box: we cannot accept the form without it.',
    failed: 'Could not send. Please try again a little later, or write to us.',
  },
};

/* ---------- Правити не потрібно ---------- */

export const texts = { site, nav, hero, about, wyd, help, thanks, gifts, contacts, footer, photos, notFound, intention };

export default texts satisfies Texts;
