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
  giftsButton: 'Cadeaux',
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
    title: 'Pourquoi est-ce important pour nous ?',
    items: [
      {
        title: 'Recevoir une lumière pour notre vie',
        text: 'Nous vivons une période de guerre, d’incertitude et d’épreuves. Dans ces moments-là, il est particulièrement important de ne pas perdre l’espérance.',
      },
      {
        title: 'Découvrir notre vocation',
        text: 'Chacun de nous cherche des réponses à des questions essentielles : qui suis-je ? Pourquoi est-ce que je vis ? Quelle place Dieu a-t-il préparée pour moi dans ce monde ?',
      },
      {
        title: 'Parler de l’Ukraine',
        text: 'Nous emportons avec nous la Transcarpatie et l’Ukraine, ainsi que notre prière pour la paix. Nous voulons témoigner que Dieu ne nous abandonne pas et que, même au milieu de la souffrance, la vie a un sens et l’espérance ne meurt pas.',
      },
      {
        title: 'Revenir pour partager ce que nous avons reçu',
        text: 'Un tel chemin nous transforme. Nous voulons rapporter chez nous ce que nous aurons reçu là-bas et le partager avec nos familles, nos paroisses et notre ville.',
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
    'La collecte se poursuit jusqu’au 20 décembre 2026. Cette période pourra être prolongée si nécessaire, avec une mise à jour des informations correspondantes. Après le voyage, nous publierons sur ce site un bilan : combien nous avons collecté, à quoi l’argent a servi et comment nous avons utilisé le solde éventuel.',
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
        text: 'Vous remettez votre don en espèces, nous l’inscrivons sur le talon de la carte et vous recevez une Carte du Pèlerin.',
      },
    ],
    stub: 'Sur le talon de la carte, nous notons votre nom, votre numéro de téléphone, le montant et la date. Le talon reste chez nous : c’est ainsi que nous tenons le registre des dons. Votre numéro ne sert qu’à vous inviter à la soirée de remerciement ; nous le supprimerons ensuite.',
    notice:
      'Ce site ne contient aucun numéro de carte ni de compte, et n’en contiendra jamais. Avec les personnes à l’étranger, nous convenons de tout personnellement. Si vous doutez qu’un message vienne vraiment de nous, vérifiez auprès de nous grâce aux contacts ci-dessous.',
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
    'Dès la fin de notre collecte, nous inviterons toutes les personnes qui nous ont soutenus à une **soirée de remerciement en ligne**. Nous nous retrouverons en direct, toute la communauté réunie, pour faire le bilan de notre collecte. **Un donateur détenteur d’une Carte du Pèlerin peut recevoir un cadeau de la part des participants**. Les cadeaux ne sont pas tirés au sort et ne dépendent pas du nombre de cartes.',
  mockup: {
    thanks: 'Merci !',
    note: 'La maquette de la carte sera ici !',
    alt: 'Carte du Pèlerin',
    open: 'Agrandir',
  },
};

/* ---------- 5а. Подарунки від благодійників ---------- */

export const gifts = {
  eyebrow: 'Cadeaux',
  title: 'Les cadeaux de nos bienfaiteurs',
  intro: 'Grâce au soutien de nos sponsors et de nos bienfaiteurs, nous avons reçu de très beaux cadeaux :',
  items: {
    vacuum: 'Aspirateur robot',
    projector: 'Vidéoprojecteur',
    more: 'Et d’autres belles surprises',
  },
  text: 'Chacun de ces cadeaux témoigne de la générosité des personnes et des entreprises qui ont cru en notre initiative et qui nous aident à nous rapprocher de notre objectif : permettre aux jeunes de partir à Séoul.',
  deadline: {
    label: 'Les dons seront pris en compte jusqu’au',
    date: '20 décembre 2026',
  },
  evening: 'Ces cadeaux seront offerts en signe de reconnaissance à nos bienfaiteurs et à toutes les personnes qui nous soutiennent. Les résultats seront annoncés lors de notre **soirée de remerciement en ligne**.',
  thanks: 'Nous adressons nos plus sincères remerciements à tous nos sponsors et bienfaiteurs pour leur générosité, leur confiance et leur volonté de prendre part à cette initiative, quel que soit le montant de leur don !',
  motto: 'Ensemble, nous pouvons accomplir de grandes choses !',
  alt: 'Une boîte cadeau dorée ouverte avec un aspirateur robot, un vidéoprojecteur, un appareil photo et un bon pour un dîner',
  certificates: {
    toggle: 'Plein de bons cadeaux différents',
    hint: 'Touchez pour les découvrir',
    note: 'Touchez un bon pour le voir en grand.',
    label: 'Bon cadeau',
    items: {
      dinner: 'Dîner pour deux au restaurant Old Continent',
      photo: 'Séance photo professionnelle',
      english: 'Cours intensif d’anglais, 10 séances',
      cake: 'Gâteau jusqu’à 3 kg',
      honey: 'Pot de miel bio de Transcarpatie',
      water: '100 litres d’eau potable',
    },
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
  privacy: 'Aucun cookie ni traceur : nous comptons seulement les clics, de façon anonyme.',
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

/* ---------- Сторінка інтенцій (/intention/) ---------- */

export const intention = {
  title: 'Vos intentions',
  eyebrow: 'Intentions',
  heading: 'Confiez-nous vos intentions',
  lead: 'Écrivez-nous pour qui ou pour quoi prier\u00a0: nous porterons vos intentions avec nous jusqu’à Séoul.',
  back: 'Retour',
  invite: {
    title: 'Vous nous avez déjà aidés\u00a0?',
    text: 'Nous voulons prier pour vous. Confiez-nous vos intentions\u00a0: nous les porterons avec nous jusqu’à Séoul.',
    button: 'Confier vos intentions',
  },
  fields: {
    firstName: 'Prénom',
    lastName: 'Nom',
    phone: 'Téléphone',
    phoneHint: 'Avec l’indicatif du pays, par exemple +33…',
    intention: 'Intentions',
    intentionHint: 'Pour qui ou pour quoi vous souhaitez que nous priions.',
  },
  consent: 'J’accepte le traitement de mes données.',
  privacyToggle: 'Quelles données, et pourquoi\u00a0?',
  privacy:
    'Nous ne conservons que ce que vous écrivez ici\u00a0: prénom, nom, téléphone et intentions. Le nom et les intentions nous servent à savoir pour qui et pour quoi prier, et le téléphone à vous inviter à la soirée de remerciement en ligne. Seuls les organisateurs de la collecte voient ces données, nous ne les transmettons à personne d’autre. Après le pèlerinage, toutes les données seront supprimées\u00a0; si vous le souhaitez plus tôt, écrivez-nous via les [contacts](/#contacts).',
  submit: 'Envoyer',
  sending: 'Envoi en cours…',
  success: {
    title: 'Merci\u00a0!',
    text: 'Nous avons bien reçu vos intentions et nous les porterons à Séoul.',
    button: 'Retour à l’accueil',
  },
  errors: {
    required: 'Remplissez le champ «\u00a0{field}\u00a0» pour envoyer le formulaire.',
    consent: 'Cochez la case de consentement\u00a0: sans elle, nous ne pouvons pas accepter le formulaire.',
    failed: 'L’envoi n’a pas abouti. Réessayez un peu plus tard ou écrivez-nous.',
  },
};

/* ---------- Правити не потрібно ---------- */

export const texts = { site, nav, hero, about, wyd, help, thanks, gifts, contacts, footer, photos, notFound, intention };

export default texts satisfies Texts;
