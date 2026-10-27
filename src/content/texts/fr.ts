/*
  ТЕКСТИ САЙТУ ФРАНЦУЗЬКОЮ. Будова — як в основному файлі uk.ts, пояснення до кожного тексту — там.
  Змінюйте лише те, що в лапках.
  Перед «:», «!», «?» і всередині лапок « » стоїть нерозривний пробіл ( ), як прийнято у французькій:
  так розділовий знак не перенесеться сам на новий рядок.
*/

import type { PluralForms } from '../../utils/countdown';
import type { Texts } from '../../utils/i18n';

/* ---------- Загальне ---------- */

export const site = {
  name: 'Des Carpates à Séoul',
  nameAccents: ['Carpates', 'Séoul'],
  title: 'Des Carpates à Séoul — le pèlerinage des jeunes d’Oujhorod à la Journée Mondiale de la Jeunesse 2027',
  description:
    'Les jeunes des communautés néocatéchuménales d’Oujhorod récoltent des dons pour leur pèlerinage à Séoul pour la JMJ (3–8 août 2027). Découvrez comment aider.',
  shareTitle: 'Le pèlerinage des jeunes d’Oujhorod à la JMJ 2027',
  shareDescription: 'Séoul, 3–8 août 2027. Soutenez notre voyage.',
  helpButton: 'Aider',
  homeLabel: 'revenir en haut de la page',
  skipLink: 'Aller au contenu',
  newTab: '(s’ouvre dans un nouvel onglet)',
  menu: {
    label: 'Menu principal',
    open: 'Ouvrir le menu',
    close: 'Fermer le menu',
  },
  languages: 'Langue du site',
};

export const nav = [
  { label: 'Qui sommes-nous', href: '#about' },
  { label: 'Le voyage', href: '#wyd' },
  { label: 'Comment aider', href: '#help' },
  { label: 'Remerciement', href: '#thanks' },
  { label: 'Contact', href: '#contacts' },
];

/* ---------- 1. Заголовок і вступ ---------- */

export const hero = {
  eventLine: ['Pèlerinage 2027', 'Séoul', '3–8 août'],
  lead: 'Nous organisons une collecte de dons pour notre pèlerinage à Séoul en août 2027. Ce voyage commence dès aujourd’hui, et nous vous invitons à faire partie de notre mission : votre soutien rend ce pèlerinage possible, et nous porterons avec gratitude vos intentions jusqu’en Corée du Sud.',
  note: 'Pour en savoir plus sur l’événement lui-même, consultez le [site officiel de la Journée Mondiale de la Jeunesse 2027](https://wydseoul.org/en). Attention : ceci est le site de notre groupe de jeunes, et non une ressource officielle de l’événement.',
  buttons: {
    help: 'Comment aider',
    about: 'Qui sommes-nous',
    wyd: 'Qu’est-ce que la Journée Mondiale de la Jeunesse',
  },
  sticker: ['Séoul', '2027'],

  countdown: {
    title: 'Avant le rendez-vous de Séoul, il reste',
    done: 'Le rassemblement de Séoul a déjà commencé. Merci à tous ceux qui nous ont aidés à arriver jusqu’ici !',
    units: {
      days: { one: 'jour', other: 'jours' },
      hours: { one: 'heure', other: 'heures' },
      minutes: { one: 'minute', other: 'minutes' },
      seconds: { one: 'seconde', other: 'secondes' },
    } as Record<'days' | 'hours' | 'minutes' | 'seconds', PluralForms>,
  },
};

/* ---------- 2. Хто ми ---------- */

export const about = {
  eyebrow: 'Qui sommes-nous',
  title: 'Une communauté où nous rencontrons le Christ',
  text: 'Nous sommes les jeunes des communautés néocatéchuménales d’Oujhorod. Nous avons répondu à l’invitation du pape Léon XIV à partir pour Séoul. Pour nous, ce pèlerinage est un moment très sérieux de rencontre avec Dieu lui-même. Nous désirons recevoir une lumière sur notre vocation et notre mission, ce qui, en ce temps de tant de peurs et d’incertitudes, est décisif pour nous.',
  note: 'Pour en savoir plus sur cet itinéraire chrétien, consultez le [site officiel du Chemin Néocatéchuménal](https://neocatechumenaleiter.org/fr/).',

  video: {
    title: 'L’invitation du pape Léon\u00a0XIV',
    text: 'Le message vidéo du Saint-Père aux jeunes à l’occasion de l’ouverture des inscriptions aux JMJ de Séoul.',
    play: 'Regarder la vidéo',
  },

  organizer: {
    eyebrow: 'Organisateur de la collecte',
    name: 'Campomar Hernando Francisco Javier',
    text: 'Il coordonne la collecte de dons. Si vous avez des questions, écrivez-nous : les coordonnées se trouvent dans la section « Contact ».',
    link: 'Voir les contacts',
  },

  gallery: {
    title: 'Nos photos',
    hint: 'Cliquez sur une photo pour l’agrandir.',
  },
};

/* ---------- 3. Що таке Всесвітній день молоді ---------- */

export const wyd = {
  eyebrow: 'Le voyage',
  title: 'Qu’est-ce que la Journée Mondiale de la Jeunesse',
  text: [
    'La Journée Mondiale de la Jeunesse (JMJ) est un grand pèlerinage international lancé en 1985 par le pape Jean-Paul II. C’est le moment où l’Église rassemble des jeunes du monde entier autour du Successeur de Pierre (le pape) pour les affermir dans la foi par l’écoute de la Parole, la prière commune et l’eucharistie. Après Lisbonne (2023), la prochaine étape sera Séoul (Corée du Sud), en août 2027.',
  ],
  facts: [
    { label: 'Où', value: 'Séoul, Corée du Sud' },
    { label: 'Quand', value: '3–8 août 2027' },
  ],

  why: {
    title: 'Pourquoi c’est important pour nous',
    items: [
      {
        title: 'Voir que nous ne sommes pas seuls',
        text: 'À Séoul se rassembleront des jeunes du monde entier qui croient comme nous. Cela donne des forces.',
      },
      {
        title: 'Parler de l’Ukraine',
        text: 'Nous emportons avec nous la Transcarpatie et l’Ukraine : notre langue, nos chants et notre prière pour la paix.',
      },
      {
        title: 'Revenir différents',
        text: 'Un tel chemin transforme. Ce que nous recevrons là-bas, nous voulons le rapporter à la maison : dans nos familles, nos paroisses et notre ville.',
      },
    ],
  },

  cost: {
    title: 'Combien cela coûte',
    prefix: 'environ',
    value: '2 000 €',
    label: 'par personne',
    includesTitle: 'Ce que comprend cette somme',
    includes: ['Vol', 'Hébergement', 'Inscription', 'Visa', 'Repas'],
    text: [
      'Pour des lycéens et des étudiants, c’est une somme énorme. Beaucoup de familles ne peuvent pas financer seules un tel voyage.',
      'C’est pourquoi nous collectons ensemble. Tout ce que nous réussirons à réunir réduit la part de chaque participant.',
    ],
  },
};

/* ---------- 4. Як допомогти ---------- */

export const help = {
  eyebrow: 'Soutien',
  title: 'Comment nous aider à arriver à Séoul',
  text: [
    'Il n’y a pas de somme à atteindre, et aucun don n’est « trop petit ». Chaque hryvnia est une brique de notre route vers Séoul.',
    '**Nous n’acceptons les dons qu’en espèces, lors d’une rencontre en personne, partout en Transcarpatie.** Nous serons heureux de vous rencontrer pour vous remercier personnellement.',
  ],
  button: 'Nous contacter',

  steps: {
    title: 'Comment ça marche',
    items: [
      {
        title: 'Contactez-nous',
        text: 'Appelez-nous ou écrivez-nous sur la messagerie de votre choix. Les coordonnées se trouvent plus bas sur cette page.',
      },
      {
        title: 'Nous convenons d’un rendez-vous',
        text: 'Nous nous retrouvons là où cela vous arrange, partout en Transcarpatie.',
      },
      {
        title: 'Remettez votre don',
        text: 'Vous remettez votre don en espèces et vous recevez des Cartes du Pèlerin.',
      },
    ],
    notice:
      'Ce site ne contient aucun numéro de carte ni de compte, et n’en contiendra jamais. Si quelqu’un vous demande de virer de l’argent en notre nom, ce n’est pas nous.',
  },

  fundraising: {
    eyebrow: 'Nous ne faisons pas que demander',
    title: 'Comment nous récoltons nous-mêmes des fonds',
    lead: 'Nous n’attendons pas que d’autres fassent tout à notre place. Nous travaillons nous-mêmes pour que ce voyage ait lieu.',
    events: [
      {
        title: 'Concert de bienfaisance',
        text: 'Nous chantons et jouons pour tous ceux qui veulent nous soutenir.',
        note: 'Nous communiquerons plus tard la date, l’heure et le lieu du concert.',
      },
      {
        title: 'Marchés',
        text: 'Nous vendons des objets faits de nos mains.',
        note: 'Nous communiquerons plus tard les dates et les lieux des marchés.',
      },
    ],
  },

  other: {
    title: 'D’autres façons d’aider',
    items: [
      {
        title: 'Venez à un concert ou à un marché',
        text: 'Écoutez-nous chanter ou achetez un objet fait de nos mains.',
      },
      {
        title: 'Partagez le site',
        text: 'Envoyez le lien à vos amis et à votre famille. Plus il y a de gens qui nous connaissent, mieux c’est.',
      },
      {
        title: 'Aidez-nous à organiser',
        text: 'Vous avez une salle, du matériel de sonorisation ou une bonne idée d’événement ? Écrivez-nous.',
      },
    ],
  },
};

/* ---------- 5. Наша подяка ---------- */

export const thanks = {
  eyebrow: 'Notre merci',
  title: 'Partons ensemble : la Carte du Pèlerin',
  intro: 'Nous ne voulons pas seulement demander de l’aide : nous voulons partager avec vous notre joie.',
  text: 'À tous ceux qui soutiennent notre chemin par un don à partir de 200 UAH (environ 4 €), nous offrons une **Carte du Pèlerin**. Elle est le signe que vous cheminez spirituellement avec nous.',
  rule: 'Chaque don de 200 UAH donne une carte',
  evening:
    'Dès que notre collecte sera terminée, nous inviterons les détenteurs des cartes à une **soirée de remerciement en ligne**. Nous nous retrouverons en communauté, en direct, pour faire le bilan de la collecte. Et parmi les détenteurs des cartes, nous répartirons des **cadeaux particuliers offerts par nos jeunes**, en signe de notre immense gratitude.',
  mockup: {
    thanks: 'Merci !',
    note: 'La maquette de la carte sera ici !',
    alt: 'Carte du Pèlerin',
    open: 'Agrandir',
  },
};

/* ---------- 6. Контакти ---------- */

export const contacts = {
  eyebrow: 'Contact',
  title: 'Contacts',
  lead: 'Écrivez-nous ou appelez-nous, et nous conviendrons d’un rendez-vous.',
  callLabel: 'Appeler',

  abroad: {
    title: 'Vous êtes à l’étranger ?',
    text: 'Écrivez-nous et nous trouverons une solution personnalisée.',
    button: 'Écrivez-nous',
  },
};

/* ---------- 7. Підвал ---------- */

export const footer = {
  legalLang: 'fr',
  about: 'Les jeunes des communautés néocatéchuménales d’Oujhorod.',
  disclaimer: 'Ceci est le site de notre groupe de jeunes, et non une ressource officielle de la Journée Mondiale de la Jeunesse.',
  navTitle: 'Sections de la page',
  privacy: 'Aucun cookie ni donnée personnelle : nous comptons seulement les clics, de façon anonyme.',
  sourceLabel: 'Code open source sur GitHub',
  rights: '© 2026 · Code publié sous licence MIT.',
  sourceHref: 'https://github.com/quinnyaa/wyd-seoul-zakarpattya',
};

/* ---------- Фото ---------- */

export const photos = {
  alt: {
    hero: 'Photo de groupe de nos jeunes : une trentaine de personnes debout et assises ensemble dans une salle lumineuse',
    community:
      'Rencontre de jeunes dans une salle aux poutres de bois : une trentaine de personnes assises en demi-cercle écoutent deux animateurs près d’un écran affichant une carte',
    gallery1: 'Une jeune fille dispose à la pince des écorces d’orange confites dans une cuisine, pour un marché de bienfaisance',
    gallery2: 'Des jeunes en randonnée dans les Carpates',
    gallery3: 'Des jeunes près du stand d’un marché de bienfaisance avec des pâtisseries en sachets et une banderole « Séoul 2027 pour la rencontre des jeunes »',
    gallery4: 'Des jeunes qui chantent lors d’un concert de bienfaisance',
  },
  placeholder: 'Emplacement pour une photo',
  open: 'Agrandir la photo',
  viewer: 'Visionneuse de photos',
  close: 'Fermer',
  prev: 'Photo précédente',
  next: 'Photo suivante',
};

/* ---------- 404 ---------- */

export const notFound = {
  title: 'Page introuvable',
  heading: 'Il n’y a rien ici',
  text: 'On dirait que cette page s’est perdue quelque part entre les Carpates et Séoul.',
  button: 'Retour à l’accueil',
};

/* ---------- Правити не потрібно ---------- */

export const texts = { site, nav, hero, about, wyd, help, thanks, contacts, footer, photos, notFound };

export default texts satisfies Texts;
