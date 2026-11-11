/*
  ТЕКСТИ САЙТУ ІТАЛІЙСЬКОЮ. Будова — як в основному файлі uk.ts, пояснення до кожного тексту — там.
  Змінюйте лише те, що в лапках.
*/

import type { PluralForms } from '../../utils/countdown';
import type { Texts } from '../../utils/i18n';

/* ---------- Загальне ---------- */

export const site = {
  name: 'Dai Carpazi a Seul',
  nameAccents: ['Carpazi', 'Seul'],
  title: 'Dai Carpazi a Seul — il pellegrinaggio dei giovani di Užhorod alla Giornata Mondiale della Gioventù 2027',
  description:
    'I giovani delle comunità neocatecumenali di Užhorod raccolgono offerte per il pellegrinaggio a Seul per la GMG (3–8 agosto 2027). Scopri come aiutarci.',
  shareTitle: 'Il pellegrinaggio dei giovani di Užhorod alla GMG 2027',
  shareDescription: 'Seul, 3–8 agosto 2027. Sostieni il nostro viaggio.',
  helpButton: 'Aiutaci',
  giftsButton: 'Regali',
  homeLabel: 'torna all’inizio della pagina',
  skipLink: 'Vai al contenuto',
  newTab: '(si apre in una nuova scheda)',
  menu: {
    label: 'Menu principale',
    open: 'Apri il menu',
    close: 'Chiudi il menu',
  },
  languages: 'Lingua del sito',
};

export const nav = [
  { label: 'Chi siamo', href: '#about' },
  { label: 'Il viaggio', href: '#wyd' },
  { label: 'Come aiutare', href: '#help' },
  { label: 'Ringraziamento', href: '#thanks' },
  { label: 'Contatti', href: '#contacts' },
];

/* ---------- 1. Заголовок і вступ ---------- */

export const hero = {
  eventLine: ['Pellegrinaggio 2027', 'Seul', '3–8 agosto'],
  lead: 'Stiamo organizzando una raccolta fondi per il nostro pellegrinaggio a Seul ad agosto 2027. Questo viaggio comincia già oggi, e ti invitiamo a far parte della nostra missione: il tuo sostegno rende possibile questo pellegrinaggio, e noi porteremo con gratitudine le tue intenzioni fino in Corea del Sud.',
  note: 'Puoi saperne di più sull’evento nel [sito ufficiale della Giornata Mondiale della Gioventù 2027](https://wydseoul.org/en). Attenzione: questo è il sito del nostro gruppo giovanile, non una risorsa ufficiale dell’evento.',
  buttons: {
    help: 'Come aiutare',
    about: 'Chi siamo',
    wyd: 'Che cos’è la Giornata Mondiale della Gioventù',
  },
  sticker: ['Seul', '2027'],

  countdown: {
    title: 'All’incontro di Seul manca',
    done: 'L’incontro di Seul è già cominciato. Grazie a tutti quelli che ci hanno aiutato ad arrivare fin qui!',
    units: {
      days: { one: 'giorno', other: 'giorni' },
      hours: { one: 'ora', other: 'ore' },
      minutes: { one: 'minuto', other: 'minuti' },
      seconds: { one: 'secondo', other: 'secondi' },
    } as Record<'days' | 'hours' | 'minutes' | 'seconds', PluralForms>,
  },
};

/* ---------- 2. Хто ми ---------- */

export const about = {
  eyebrow: 'Chi siamo',
  title: 'Una comunità dove incontriamo Cristo',
  text: 'Siamo i giovani delle comunità neocatecumenali di Užhorod. Abbiamo risposto all’invito di Papa Leone XIV a metterci in cammino verso Seul. Per noi questo pellegrinaggio è un momento molto serio di incontro con Dio stesso. Desideriamo ricevere luce sulla nostra vocazione e sulla nostra missione, cosa che in questo tempo di tante paure e incertezze è per noi decisiva.',
  note: 'Puoi saperne di più su questo itinerario cristiano nel [sito ufficiale del Cammino Neocatecumenale](https://neocatechumenaleiter.org/it/).',

  video: {
    title: 'L’invito di papa Leone\u00a0XIV',
    text: 'Il videomessaggio del Santo Padre ai giovani per l’apertura delle iscrizioni alla GMG di Seul.',
    play: 'Guarda il video',
  },

  organizer: {
    eyebrow: 'Organizzatore della raccolta',
    name: 'Campomar Hernando Francisco Javier',
    text: 'Coordina la raccolta fondi. Se hai domande, scrivici: i contatti sono nella sezione «Contatti».',
    link: 'Vai ai contatti',
  },

  gallery: {
    title: 'Le nostre foto',
    hint: 'Clicca su una foto per ingrandirla.',
  },
};

/* ---------- 3. Що таке Всесвітній день молоді ---------- */

export const wyd = {
  eyebrow: 'Il viaggio',
  title: 'Che cos’è la Giornata Mondiale della Gioventù',
  text: [
    'La Giornata Mondiale della Gioventù (GMG) è un grande pellegrinaggio internazionale, avviato nel 1985 da Papa Giovanni Paolo II. È il tempo in cui la Chiesa raduna i giovani di tutto il mondo insieme al Successore di Pietro (il Papa) per fortificarli nella fede attraverso l’ascolto della Parola, la preghiera comune e l’eucaristia. Dopo Lisbona (2023), la tappa successiva sarà Seul (Corea del Sud), ad agosto 2027.',
  ],
  facts: [
    { label: 'Dove', value: 'Seul, Corea del Sud' },
    { label: 'Quando', value: '3–8 agosto 2027' },
  ],

  why: {
    title: 'Perché è importante per noi',
    items: [
      {
        title: 'Ricevere luce per la nostra vita',
        text: 'Viviamo in un tempo di guerra, incertezza e prove. In momenti come questi è particolarmente importante non perdere la speranza.',
      },
      {
        title: 'Scoprire la nostra vocazione',
        text: 'Ognuno di noi cerca risposte a domande importanti: chi sono? Perché vivo? Quale posto ha preparato Dio per me in questo mondo?',
      },
      {
        title: 'Raccontare l’Ucraina',
        text: 'Portiamo con noi la Transcarpazia e l’Ucraina, insieme alla nostra preghiera per la pace. Vogliamo essere testimoni del fatto che Dio non ci abbandona e che, anche in mezzo alla sofferenza, la vita ha un senso e la speranza non muore.',
      },
      {
        title: 'Tornare per condividere ciò che abbiamo ricevuto',
        text: 'Un cammino come questo cambia la vita. Vogliamo portare a casa ciò che riceveremo e condividerlo con le nostre famiglie, le nostre parrocchie e la nostra città.',
      },
    ],
  },

  cost: {
    title: 'Quanto costa',
    prefix: 'circa',
    value: '2.000 €',
    label: 'a persona',
    includesTitle: 'Da che cosa è composta la cifra',
    includes: ['Volo', 'Alloggio', 'Iscrizione', 'Visto', 'Pasti'],
    text: [
      'Per studenti delle scuole e dell’università è una cifra enorme. Molte famiglie non possono pagare da sole un viaggio così.',
      'Per questo raccogliamo i fondi insieme. Tutto quello che riusciremo a raccogliere riduce la quota di ogni partecipante.',
    ],
  },
};

/* ---------- 4. Як допомогти ---------- */

export const help = {
  eyebrow: 'Sostegno',
  title: 'Come aiutarci ad arrivare a Seul',
  text: [
    'Non c’è una cifra da raggiungere e non esiste un’offerta «troppo piccola». Ogni grivnia è un mattone della nostra strada verso Seul.',
    'La raccolta è aperta fino al 20 dicembre 2026. Il termine potrà essere prorogato, se necessario, aggiornando di conseguenza le informazioni. Dopo il viaggio pubblicheremo su questo sito un resoconto: quanto abbiamo raccolto, come lo abbiamo speso e come abbiamo utilizzato l’eventuale avanzo.',
    '**Accettiamo offerte solo in contanti e di persona, ovunque in Transcarpazia.** Saremo felici di incontrarti per ringraziarti di persona.',
  ],
  button: 'Contattaci',

  steps: {
    title: 'Come funziona',
    items: [
      {
        title: 'Mettiti in contatto',
        text: 'Chiamaci o scrivici sull’app di messaggistica che preferisci. I contatti sono più sotto in questa pagina.',
      },
      {
        title: 'Ci mettiamo d’accordo',
        text: 'Ci incontriamo dove ti è più comodo, ovunque in Transcarpazia.',
      },
      {
        title: 'Consegna l’offerta',
        text: 'Ci consegni la tua offerta in contanti, la annotiamo sulla matrice della cartolina e ricevi una Cartolina del Pellegrino.',
      },
    ],
    stub: 'Sulla matrice della cartolina annotiamo il tuo nome, il numero di telefono, l’importo e la data. La matrice resta a noi: così teniamo il registro delle offerte. Il numero di telefono ci serve solo per invitarti alla Serata di ringraziamento; dopo lo cancelleremo.',
    notice:
      'Su questo sito non ci sono e non ci saranno numeri di carta o di conto. Con chi è all’estero ci accordiamo personalmente. Se hai dubbi che un messaggio venga davvero da noi, chiedi conferma ai contatti qui sotto.',
  },

  fundraising: {
    eyebrow: 'Non solo chiediamo',
    title: 'Come raccogliamo fondi noi stessi',
    lead: 'Non aspettiamo che siano gli altri a fare tutto al posto nostro. Lavoriamo noi, perché il viaggio si realizzi.',
    events: [
      {
        title: 'Concerto di beneficenza',
        text: 'Cantiamo e suoniamo per tutti quelli che vogliono sostenerci.',
        note: 'Comunicheremo più avanti data, ora e luogo del concerto.',
      },
      {
        title: 'Mercatini',
        text: 'Vendiamo cose fatte con le nostre mani.',
        note: 'Comunicheremo più avanti date e luoghi dei mercatini.',
      },
    ],
  },

  other: {
    title: 'Altri modi per aiutare',
    items: [
      {
        title: 'Vieni a un concerto o a un mercatino',
        text: 'Ascoltaci cantare o compra qualcosa fatto con le nostre mani.',
      },
      {
        title: 'Condividi il sito',
        text: 'Manda il link ad amici e parenti. Più persone ci conoscono, meglio è.',
      },
      {
        title: 'Aiutaci con l’organizzazione',
        text: 'Hai una sala, un impianto audio o una buona idea per un evento? Scrivici.',
      },
    ],
  },
};

/* ---------- 5. Наша подяка ---------- */

export const thanks = {
  eyebrow: 'Il nostro grazie',
  title: 'Partiamo insieme: la Cartolina del Pellegrino',
  intro: 'Non vogliamo solo chiedere aiuto: desideriamo condividere con te la nostra gioia.',
  text: 'A chi sostiene il nostro cammino con un’offerta a partire da 200 UAH (circa 4 €) regaliamo una **Cartolina del Pellegrino**. È il segno che stai camminando spiritualmente insieme a noi.',
  rule: 'Ogni 200 UAH di offerta, una cartolina',
  evening:
    'Appena conclusa la nostra raccolta, inviteremo tutti coloro che ci hanno sostenuto a una **Serata di ringraziamento online**. Ci ritroveremo in diretta, tutta la comunità insieme, per fare il bilancio della raccolta. **Chi possiede una Cartolina del Pellegrino può ricevere un regalo dai partecipanti**. I regali non vengono estratti a sorte e non dipendono dal numero di cartoline.',
  mockup: {
    thanks: 'Grazie!',
    note: 'Qui ci sarà il bozzetto della cartolina!',
    alt: 'Cartolina del Pellegrino',
    open: 'Ingrandisci',
  },
};

/* ---------- 5а. Подарунки від благодійників ---------- */

export const gifts = {
  eyebrow: 'Regali',
  title: 'I regali dei nostri benefattori',
  intro: 'Grazie al sostegno dei nostri sponsor e benefattori, abbiamo ricevuto dei regali davvero speciali:',
  items: {
    vacuum: 'Robot aspirapolvere',
    projector: 'Proiettore',
    more: 'E tante altre piacevoli sorprese',
  },
  text: 'Ognuno di questi regali è un segno concreto della generosità di persone e aziende che hanno creduto nella nostra iniziativa e che ci aiutano ad avvicinarci al nostro obiettivo: rendere possibile il viaggio dei giovani a Seoul.',
  deadline: {
    label: 'Le donazioni saranno conteggiate fino al',
    date: '20 dicembre 2026',
  },
  evening: 'Questi regali saranno consegnati come segno di gratitudine ai nostri benefattori e sostenitori. I risultati saranno annunciati durante la nostra **Serata di ringraziamento online**.',
  thanks: 'Un grazie di cuore a tutti i nostri sponsor e benefattori per la generosità, la fiducia e il desiderio di partecipare a questa iniziativa, indipendentemente dall’importo della donazione!',
  motto: 'Insieme possiamo fare molto di più!',
  alt: 'Una scatola regalo dorata aperta con un robot aspirapolvere, un proiettore, una fotocamera e un buono per una cena',
  certificates: {
    toggle: 'Tanti buoni regalo diversi',
    hint: 'Tocca per vederli',
    note: 'Tocca un buono per vederlo ingrandito.',
    label: 'Buono regalo',
    items: {
      dinner: 'Cena per due al ristorante Old Continent',
      photo: 'Servizio fotografico professionale',
      english: 'Corso intensivo di inglese, 10 lezioni',
      cake: 'Torta fino a 3 kg',
      honey: 'Barattolo di miele biologico della Transcarpazia',
      water: '100 litri di acqua potabile',
    },
  },
};

/* ---------- 6. Контакти ---------- */

export const contacts = {
  eyebrow: 'Contatto',
  title: 'Contatti',
  lead: 'Scrivici o chiamaci e ci mettiamo d’accordo per incontrarci.',
  callLabel: 'Chiamare',

  abroad: {
    title: 'Sei all’estero?',
    text: 'Scrivici e ci organizziamo in modo personalizzato.',
    button: 'Scrivici',
  },
};

/* ---------- 7. Підвал ---------- */

export const footer = {
  legalLang: 'it',
  about: 'Giovani delle comunità neocatecumenali di Užhorod.',
  disclaimer: 'Questo è il sito del nostro gruppo giovanile, non una risorsa ufficiale della Giornata Mondiale della Gioventù.',
  navTitle: 'Sezioni della pagina',
  privacy: 'Niente cookie né tracker: contiamo solo i clic, in forma anonima.',
  sourceLabel: 'Codice open source su GitHub',
  rights: '© 2026 · Codice rilasciato con licenza MIT.',
  sourceHref: 'https://github.com/quinnyaa/wyd-seoul-zakarpattya',
};

/* ---------- Фото ---------- */

export const photos = {
  alt: {
    hero: 'Foto di gruppo dei nostri giovani: una trentina di persone in piedi e sedute insieme in una sala luminosa',
    community:
      'Incontro di giovani in una sala con travi di legno: una trentina di persone sedute in semicerchio ascoltano due relatori accanto a uno schermo con una mappa',
    gallery1: 'Una ragazza in cucina dispone con le pinze scorze d’arancia candite per un mercatino di beneficenza',
    gallery2: 'Giovani in escursione sui Carpazi',
    gallery3: 'Giovani accanto al banco di un mercatino di beneficenza con dolci in sacchetti e uno striscione con la scritta «Seul 2027 per l’incontro dei giovani»',
    gallery4: 'Giovani che cantano a un concerto di beneficenza',
  },
  placeholder: 'Spazio per una foto',
  open: 'Ingrandisci la foto',
  viewer: 'Visualizzazione foto',
  close: 'Chiudi',
  prev: 'Foto precedente',
  next: 'Foto successiva',
};

/* ---------- 404 ---------- */

export const notFound = {
  title: 'Pagina non trovata',
  heading: 'Qui non c’è niente',
  text: 'Sembra che questa pagina si sia persa da qualche parte tra i Carpazi e Seul.',
  button: 'Torna alla home',
};

/* ---------- Сторінка інтенцій (/intention/) ---------- */

export const intention = {
  title: 'La tua intenzione',
  eyebrow: 'Intenzione',
  heading: 'Affidaci la tua intenzione',
  lead: 'Scrivici per chi o per che cosa pregare: porteremo la tua intenzione con noi a Seul.',
  back: 'Indietro',
  invite: {
    title: 'Ci hai già aiutato?',
    text: 'Vogliamo pregare per te. Affidaci la tua intenzione: la porteremo con noi a Seul.',
    button: 'Lascia un’intenzione',
  },
  fields: {
    firstName: 'Nome',
    lastName: 'Cognome',
    phone: 'Telefono',
    phoneHint: 'Con il prefisso del paese, per esempio +39…',
    intention: 'Intenzione',
    intentionHint: 'Per chi o per che cosa vuoi che preghiamo.',
  },
  consent: 'Acconsento al trattamento dei miei dati.',
  privacyToggle: 'Quali dati e perché?',
  privacy:
    'Conserviamo solo ciò che scrivi qui: nome, cognome, telefono e intenzione. Il nome e l’intenzione ci servono per sapere per chi e per che cosa pregare, il telefono per invitarti alla Serata di ringraziamento online. Questi dati li vedono solo gli organizzatori della raccolta e non li comunichiamo a nessun altro. Dopo il pellegrinaggio tutti i dati saranno cancellati; se vuoi che lo facciamo prima, scrivici tramite i [contatti](/#contacts).',
  submit: 'Invia',
  sending: 'Invio in corso…',
  success: {
    title: 'Grazie!',
    text: 'Abbiamo ricevuto la tua intenzione e la porteremo a Seul.',
    button: 'Torna alla home',
  },
  errors: {
    consent: 'Spunta la casella del consenso: senza non possiamo accettare il modulo.',
    failed: 'Invio non riuscito. Riprova tra poco oppure scrivici.',
  },
};

/* ---------- Правити не потрібно ---------- */

export const texts = { site, nav, hero, about, wyd, help, thanks, gifts, contacts, footer, photos, notFound, intention };

export default texts satisfies Texts;
