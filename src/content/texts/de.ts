/*
  ТЕКСТИ САЙТУ НІМЕЦЬКОЮ. Будова — як в основному файлі uk.ts, пояснення до кожного тексту — там.
  Змінюйте лише те, що в лапках.
*/

import type { PluralForms } from '../../utils/countdown';
import type { Texts } from '../../utils/i18n';

/* ---------- Загальне ---------- */

export const site = {
  name: 'Von den Karpaten nach Seoul',
  nameAccents: ['Karpaten', 'Seoul'],
  title: 'Von den Karpaten nach Seoul — die Pilgerreise der Jugend von Uschhorod zum Weltjugendtag 2027',
  description:
    'Jugendliche der neokatechumenalen Gemeinschaften Uschhorods sammeln Spenden für die Pilgerreise zum Weltjugendtag in Seoul (3.–8. August 2027). So können Sie helfen.',
  shareTitle: 'Pilgerreise der Jugend von Uschhorod zum WJT 2027',
  shareDescription: 'Seoul, 3.–8. August 2027. Unterstützen Sie unsere Reise.',
  helpButton: 'Helfen',
  homeLabel: 'zum Seitenanfang',
  skipLink: 'Zum Inhalt springen',
  newTab: '(öffnet in einem neuen Tab)',
  menu: {
    label: 'Hauptmenü',
    open: 'Menü öffnen',
    close: 'Menü schließen',
  },
  languages: 'Sprache der Website',
};

export const nav = [
  { label: 'Wer wir sind', href: '#about' },
  { label: 'Die Reise', href: '#wyd' },
  { label: 'Wie Sie helfen können', href: '#help' },
  { label: 'Dank', href: '#thanks' },
  { label: 'Kontakt', href: '#contacts' },
];

/* ---------- 1. Заголовок і вступ ---------- */

export const hero = {
  eventLine: ['Pilgerreise 2027', 'Seoul', '3.–8. August'],
  lead: 'Wir sammeln Spenden für unsere Pilgerreise nach Seoul im August 2027. Diese Reise beginnt schon heute, und wir laden Sie ein, Teil unserer Mission zu werden: Ihre Unterstützung macht diese Reise möglich, und wir tragen Ihre Anliegen dankbar mit nach Südkorea.',
  note: 'Mehr über die Veranstaltung selbst erfahren Sie auf der [offiziellen Website des Weltjugendtags 2027](https://wydseoul.org/en). Bitte beachten Sie: Dies ist die Website unserer Jugendgruppe und keine offizielle Seite der Veranstaltung.',
  buttons: {
    help: 'Wie Sie helfen können',
    about: 'Wer wir sind',
    wyd: 'Was ist der Weltjugendtag',
  },
  sticker: ['Seoul', '2027'],

  countdown: {
    title: 'Bis zum Treffen in Seoul bleiben',
    done: 'Das Treffen in Seoul hat begonnen. Danke an alle, die uns geholfen haben, hierherzukommen!',
    units: {
      days: { one: 'Tag', other: 'Tage' },
      hours: { one: 'Stunde', other: 'Stunden' },
      minutes: { one: 'Minute', other: 'Minuten' },
      seconds: { one: 'Sekunde', other: 'Sekunden' },
    } as Record<'days' | 'hours' | 'minutes' | 'seconds', PluralForms>,
  },
};

/* ---------- 2. Хто ми ---------- */

export const about = {
  eyebrow: 'Wer wir sind',
  title: 'Eine Gemeinschaft, in der wir Christus begegnen',
  text: 'Wir sind die Jugendlichen der neokatechumenalen Gemeinschaften von Uschhorod. Wir haben die Einladung von Papst Leo XIV. angenommen, nach Seoul aufzubrechen. Für uns ist diese Pilgerreise ein sehr ernster Moment der Begegnung mit Gott selbst. Wir möchten Licht für unsere Berufung und unsere Sendung empfangen, was in dieser Zeit so vieler Ängste und Unsicherheiten für uns entscheidend ist.',
  note: 'Mehr über diesen Weg der christlichen Initiation erfahren Sie auf der [offiziellen Website des Neokatechumenalen Weges](https://neocatechumenaleiter.org/de/).',

  organizer: {
    eyebrow: 'Organisator der Spendenaktion',
    name: 'Campomar Hernando Francisco Javier',
    text: 'Koordiniert die Spendenaktion. Bei Fragen wenden Sie sich gerne an ihn: die Kontaktdaten finden Sie im Abschnitt „Kontakt“.',
    link: 'Zu den Kontakten',
  },

  gallery: {
    title: 'Unsere Fotos',
    hint: 'Klicken Sie auf ein Foto, um es zu vergrößern.',
  },
};

/* ---------- 3. Що таке Всесвітній день молоді ---------- */

export const wyd = {
  eyebrow: 'Die Reise',
  title: 'Was ist der Weltjugendtag',
  text: [
    'Der Weltjugendtag (WJT) ist eine große internationale Wallfahrt, die Papst Johannes Paul II. 1985 ins Leben gerufen hat. Es ist die Zeit, in der die Kirche junge Menschen aus aller Welt zusammen mit dem Nachfolger Petri (dem Papst) versammelt, um sie durch das Hören des Wortes, das gemeinsame Gebet und die Eucharistie im Glauben zu stärken. Nach Lissabon (2023) ist die nächste Station Seoul (Südkorea) im August 2027.',
  ],
  facts: [
    { label: 'Wo', value: 'Seoul, Südkorea' },
    { label: 'Wann', value: '3.–8. August 2027' },
  ],

  why: {
    title: 'Warum uns das wichtig ist',
    items: [
      {
        title: 'Sehen, dass wir nicht allein sind',
        text: 'In Seoul kommen junge Menschen aus aller Welt zusammen, die so glauben wie wir. Das gibt Kraft.',
      },
      {
        title: 'Von der Ukraine erzählen',
        text: 'Wir nehmen Transkarpatien und die Ukraine mit: unsere Sprache, unsere Lieder und unser Gebet um Frieden.',
      },
      {
        title: 'Verändert zurückkommen',
        text: 'Ein solcher Weg verändert. Was wir dort empfangen, wollen wir mit nach Hause bringen: in unsere Familien, unsere Pfarreien und unsere Stadt.',
      },
    ],
  },

  cost: {
    title: 'Was das kostet',
    prefix: 'etwa',
    value: '2.000 €',
    label: 'pro Person',
    includesTitle: 'Woraus sich der Betrag zusammensetzt',
    includes: ['Flug', 'Unterkunft', 'Anmeldung', 'Visum', 'Verpflegung'],
    text: [
      'Für Schülerinnen, Schüler und Studierende ist das sehr viel Geld. Viele Familien können eine solche Reise nicht allein bezahlen.',
      'Deshalb sammeln wir gemeinsam. Alles, was zusammenkommt, verringert den Eigenanteil jedes Teilnehmers.',
    ],
  },
};

/* ---------- 4. Як допомогти ---------- */

export const help = {
  eyebrow: 'Unterstützung',
  title: 'Wie Sie uns helfen können, nach Seoul zu kommen',
  text: [
    'Es gibt keine Zielsumme, und es gibt keine Spende, die „zu klein“ wäre. Jede Hrywnja ist ein Baustein unseres Weges nach Seoul.',
    '**Spenden nehmen wir ausschließlich in bar bei einem persönlichen Treffen entgegen, überall in Transkarpatien.** Wir freuen uns, Ihnen persönlich danken zu können.',
  ],
  button: 'Kontakt aufnehmen',

  steps: {
    title: 'So läuft es ab',
    items: [
      {
        title: 'Nehmen Sie Kontakt auf',
        text: 'Rufen Sie an oder schreiben Sie über den Messenger Ihrer Wahl. Die Kontaktdaten finden Sie weiter unten auf dieser Seite.',
      },
      {
        title: 'Wir vereinbaren ein Treffen',
        text: 'Wir treffen uns dort, wo es Ihnen passt, überall in Transkarpatien.',
      },
      {
        title: 'Übergeben Sie Ihre Spende',
        text: 'Sie übergeben die Spende in bar und erhalten Pilgerkarten.',
      },
    ],
    notice:
      'Auf dieser Website stehen keine Karten- oder Kontonummern, und das wird auch so bleiben. Wenn jemand Sie bittet, in unserem Namen Geld zu überweisen, sind wir das nicht.',
  },

  fundraising: {
    eyebrow: 'Wir bitten nicht nur',
    title: 'Wie wir selbst Geld sammeln',
    lead: 'Wir warten nicht darauf, dass andere alles für uns tun. Wir arbeiten selbst dafür, dass diese Reise zustande kommt.',
    events: [
      {
        title: 'Benefizkonzert',
        text: 'Wir singen und spielen für alle, die uns unterstützen möchten.',
        note: 'Datum, Uhrzeit und Ort des Konzerts geben wir später bekannt.',
      },
      {
        title: 'Märkte',
        text: 'Wir verkaufen Dinge, die wir selbst gemacht haben.',
        note: 'Termine und Orte der Märkte geben wir später bekannt.',
      },
    ],
  },

  other: {
    title: 'Andere Möglichkeiten zu helfen',
    items: [
      {
        title: 'Kommen Sie zum Konzert oder zum Markt',
        text: 'Hören Sie uns singen oder kaufen Sie etwas, das wir selbst gemacht haben.',
      },
      {
        title: 'Teilen Sie die Website',
        text: 'Schicken Sie den Link an Freunde und Familie. Je mehr Menschen von uns erfahren, desto besser.',
      },
      {
        title: 'Helfen Sie bei der Organisation',
        text: 'Haben Sie einen Saal, Technik oder eine gute Idee für eine Veranstaltung? Schreiben Sie uns.',
      },
    ],
  },
};

/* ---------- 5. Наша подяка ---------- */

export const thanks = {
  eyebrow: 'Unser Dank',
  title: 'Gemeinsam aufbrechen: die Pilgerkarte',
  intro: 'Wir wollen nicht einfach nur um Hilfe bitten: Wir möchten unsere Freude mit Ihnen teilen.',
  text: 'Allen, die unseren Weg mit einer Spende ab 200 UAH (etwa 4 €) unterstützen, schenken wir eine **Pilgerkarte**. Sie ist das Zeichen dafür, dass Sie geistlich mit uns unterwegs sind.',
  rule: 'Je 200 UAH Spende eine Karte',
  evening:
    'Sobald unsere Sammlung abgeschlossen ist, laden wir alle, die eine Karte haben, zu einem **Online-Dankabend** ein. Wir treffen uns als ganze Gemeinschaft live, um Bilanz unserer Sammlung zu ziehen. Und unter den Karteninhabern verteilen wir **besondere Geschenke unserer Jugendlichen** als Zeichen unserer großen Dankbarkeit.',
  mockup: {
    thanks: 'Danke!',
    note: 'Hier kommt das Design der Karte hin!',
    alt: 'Pilgerkarte',
    open: 'Vergrößern',
  },
};

/* ---------- 6. Контакти ---------- */

export const contacts = {
  eyebrow: 'Kontakt',
  title: 'Kontakte',
  lead: 'Schreiben Sie uns oder rufen Sie an, dann vereinbaren wir ein Treffen.',
  callLabel: 'Anrufen',

  abroad: {
    title: 'Sind Sie im Ausland?',
    text: 'Schreiben Sie uns, dann finden wir eine individuelle Lösung.',
    button: 'Schreiben Sie uns',
  },
};

/* ---------- 7. Підвал ---------- */

export const footer = {
  legalLang: 'de',
  about: 'Jugendliche der neokatechumenalen Gemeinschaften von Uschhorod.',
  disclaimer: 'Dies ist die Website unserer Jugendgruppe und keine offizielle Seite des Weltjugendtags.',
  navTitle: 'Abschnitte der Seite',
  privacy: 'Keine Cookies und keine personenbezogenen Daten: Wir zählen nur Klicks, anonym.',
  sourceLabel: 'Open Source auf GitHub',
  rights: '© 2026 · Code veröffentlicht unter der MIT-Lizenz.',
  sourceHref: 'https://github.com/quinnyaa/wyd-seoul-zakarpattya',
};

/* ---------- Фото ---------- */

export const photos = {
  alt: {
    hero: 'Gruppenfoto unserer Jugendlichen: etwa dreißig Personen stehen und sitzen zusammen in einem hellen Saal',
    community:
      'Jugendtreffen in einem Saal unter Holzbalken: etwa dreißig Personen sitzen im Halbkreis und hören zwei Moderatoren neben einer Leinwand mit einer Karte zu',
    gallery1: 'Ein Mädchen legt in der Küche mit einer Zange kandierte Orangenschalen für einen Benefizmarkt zurecht',
    gallery2: 'Jugendliche bei einer Wanderung in den Karpaten',
    gallery3: 'Jugendliche an einem Benefizmarktstand mit Gebäck in Tüten und einem Banner „Seoul 2027 für das Jugendtreffen“',
    gallery4: 'Jugendliche singen bei einem Benefizkonzert',
  },
  placeholder: 'Platz für ein Foto',
  open: 'Foto vergrößern',
  viewer: 'Fotoansicht',
  close: 'Schließen',
  prev: 'Vorheriges Foto',
  next: 'Nächstes Foto',
};

/* ---------- 404 ---------- */

export const notFound = {
  title: 'Seite nicht gefunden',
  heading: 'Hier ist nichts',
  text: 'Diese Seite hat sich wohl irgendwo zwischen den Karpaten und Seoul verlaufen.',
  button: 'Zur Startseite',
};

/* ---------- Правити не потрібно ---------- */

export const texts = { site, nav, hero, about, wyd, help, thanks, contacts, footer, photos, notFound };

export default texts satisfies Texts;
