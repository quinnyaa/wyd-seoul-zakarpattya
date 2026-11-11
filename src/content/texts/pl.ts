/*
  ТЕКСТИ САЙТУ ПОЛЬСЬКОЮ. Будова — як в основному файлі uk.ts, пояснення до кожного тексту — там.
  Змінюйте лише те, що в лапках.
*/

import type { PluralForms } from '../../utils/countdown';
import type { Texts } from '../../utils/i18n';

/* ---------- Загальне ---------- */

export const site = {
  name: 'Od Karpat do Seulu',
  nameAccents: ['Karpat', 'Seulu'],
  title: 'Od Karpat do Seulu — pielgrzymka młodzieży z Użhorodu na Światowe Dni Młodzieży 2027',
  description:
    'Młodzież ze wspólnot neokatechumenalnych w Użhorodzie zbiera ofiary na pielgrzymkę do Seulu na Światowe Dni Młodzieży (3–8 sierpnia 2027). Zobaczcie, jak możecie pomóc.',
  shareTitle: 'Pielgrzymka młodzieży z Użhorodu na ŚDM 2027',
  shareDescription: 'Seul, 3–8 sierpnia 2027. Wesprzyjcie nasz wyjazd.',
  helpButton: 'Pomóżcie',
  giftsButton: 'Prezenty',
  homeLabel: 'na początek strony',
  skipLink: 'Przejdź do treści',
  newTab: '(otwiera się w nowej karcie)',
  menu: {
    label: 'Menu główne',
    open: 'Otwórz menu',
    close: 'Zamknij menu',
  },
  languages: 'Język strony',
};

export const nav = [
  { label: 'O nas', href: '#about' },
  { label: 'Wyjazd', href: '#wyd' },
  { label: 'Jak pomóc', href: '#help' },
  { label: 'Podziękowanie', href: '#thanks' },
  { label: 'Kontakt', href: '#contacts' },
];

/* ---------- 1. Заголовок і вступ ---------- */

export const hero = {
  eventLine: ['Pielgrzymka 2027', 'Seul', '3–8 sierpnia'],
  lead: 'Organizujemy zbiórkę pieniędzy na naszą pielgrzymkę do Seulu w sierpniu 2027 roku. Ta droga zaczyna się już dziś i zapraszamy was do udziału w naszej misji: dzięki waszemu wsparciu ten wyjazd stanie się możliwy, a my z wdzięcznością zaniesiemy wasze intencje do Korei Południowej.',
  note: 'Więcej o samym wydarzeniu dowiecie się na [oficjalnej stronie Światowych Dni Młodzieży 2027](https://wydseoul.org/en). Zwróćcie uwagę: to strona naszej grupy młodzieżowej, a nie oficjalny serwis wydarzenia.',
  buttons: {
    help: 'Jak pomóc',
    about: 'O nas',
    wyd: 'Czym są Światowe Dni Młodzieży',
  },
  sticker: ['Seul', '2027'],

  countdown: {
    title: 'Do spotkania w Seulu zostało',
    done: 'Spotkanie w Seulu już się rozpoczęło. Dziękujemy wszystkim, którzy pomogli nam tu dotrzeć!',
    units: {
      days: { one: 'dzień', few: 'dni', many: 'dni', other: 'dnia' },
      hours: { one: 'godzina', few: 'godziny', many: 'godzin', other: 'godziny' },
      minutes: { one: 'minuta', few: 'minuty', many: 'minut', other: 'minuty' },
      seconds: { one: 'sekunda', few: 'sekundy', many: 'sekund', other: 'sekundy' },
    } as Record<'days' | 'hours' | 'minutes' | 'seconds', PluralForms>,
  },
};

/* ---------- 2. Хто ми ---------- */

export const about = {
  eyebrow: 'O nas',
  title: 'Wspólnota, w której spotykamy Chrystusa',
  text: 'Jesteśmy młodzieżą ze wspólnot neokatechumenalnych w Użhorodzie. Odpowiedzieliśmy na zaproszenie papieża Leona XIV, by wyruszyć do Seulu. Ta pielgrzymka jest dla nas bardzo poważnym momentem spotkania z samym Bogiem. Pragniemy otrzymać światło co do naszego powołania i misji, a w obecnym czasie tak wielu lęków i niepewności jest to dla nas sprawa decydująca.',
  note: 'Więcej o tym chrześcijańskim itinerarium dowiecie się na [oficjalnej stronie Drogi Neokatechumenalnej](https://neocatechumenaleiter.org/pl/).',

  video: {
    title: 'Zaproszenie papieża Leona XIV',
    text: 'Orędzie wideo Ojca Świętego do młodzieży z okazji otwarcia rejestracji na Światowe Dni Młodzieży w Seulu.',
    play: 'Obejrzyjcie film',
  },

  organizer: {
    eyebrow: 'Organizator zbiórki',
    name: 'Campomar Hernando Francisco Javier',
    text: 'Koordynuje zbiórkę. Jeśli macie pytania, piszcie śmiało: dane kontaktowe znajdziecie w części „Kontakt”.',
    link: 'Przejdź do kontaktu',
  },

  gallery: {
    title: 'Nasze zdjęcia',
    hint: 'Kliknijcie zdjęcie, aby je powiększyć.',
  },
};

/* ---------- 3. Що таке Всесвітній день молоді ---------- */

export const wyd = {
  eyebrow: 'Wyjazd',
  title: 'Czym są Światowe Dni Młodzieży',
  text: [
    'Światowe Dni Młodzieży (ŚDM) to wielka międzynarodowa pielgrzymka, którą w 1985 roku zapoczątkował papież Jan Paweł II. To czas, gdy Kościół gromadzi młodych z całego świata wraz z Następcą Piotra (papieżem), aby przez słuchanie Słowa, wspólną modlitwę i Eucharystię umacniać ich w wierze. Po Lizbonie (2023) kolejnym etapem będzie Seul (Korea Południowa) w sierpniu 2027 roku.',
  ],
  facts: [
    { label: 'Gdzie', value: 'Seul, Korea Południowa' },
    { label: 'Kiedy', value: '3–8 sierpnia 2027' },
  ],

  why: {
    title: 'Dlaczego to dla nas ważne',
    items: [
      {
        title: 'Otrzymać światło dla naszego życia',
        text: 'Żyjemy w czasie wojny, niepewności i prób. W takich chwilach szczególnie ważne jest, by nie stracić nadziei.',
      },
      {
        title: 'Odkryć swoje powołanie',
        text: 'Każdy z nas szuka odpowiedzi na ważne pytania: kim jestem? Po co żyję? Jakie miejsce przygotował dla mnie Bóg w tym świecie?',
      },
      {
        title: 'Opowiedzieć o Ukrainie',
        text: 'Zabieramy ze sobą Zakarpacie i Ukrainę, a z nimi modlitwę o pokój. Chcemy być świadkami tego, że Bóg nas nie opuszcza i że nawet pośród cierpienia życie ma sens, a nadzieja nie umiera.',
      },
      {
        title: 'Wrócić i podzielić się tym, co otrzymamy',
        text: 'Taka droga przemienia. To, co tam otrzymamy, chcemy przywieźć do domu — do naszych rodzin, parafii i miasta.',
      },
    ],
  },

  cost: {
    title: 'Ile to kosztuje',
    prefix: 'około',
    value: '2000 €',
    label: 'na osobę',
    includesTitle: 'Na co składa się ta kwota',
    includes: ['Przelot', 'Zakwaterowanie', 'Rejestracja', 'Wiza', 'Wyżywienie'],
    text: [
      'Dla uczniów i studentów to bardzo duże pieniądze. Wiele rodzin nie jest w stanie samodzielnie opłacić takiego wyjazdu.',
      'Dlatego zbieramy pieniądze razem. Wszystko, co uda się zebrać, zmniejszy wkład własny każdego uczestnika.',
    ],
  },
};

/* ---------- 4. Як допомогти ---------- */

export const help = {
  eyebrow: 'Wsparcie',
  title: 'Jak pomóc nam dotrzeć do Seulu',
  text: [
    'Nie ma kwoty docelowej i nie ma „zbyt małej” ofiary. Każda hrywna to cegiełka na naszej drodze do Seulu.',
    'Zbiórka trwa do 20 grudnia 2026 roku. W razie potrzeby termin może zostać przedłużony, o czym poinformujemy na tej stronie. Po wyjeździe opublikujemy tu sprawozdanie: ile zebraliśmy, na co wydaliśmy pieniądze i jak wykorzystaliśmy ewentualną nadwyżkę.',
    '**Ofiary przyjmujemy wyłącznie w gotówce, podczas osobistego spotkania — w dowolnym miejscu na Zakarpaciu.** Z radością się z wami spotkamy, aby osobiście podziękować.',
  ],
  button: 'Skontaktujcie się z nami',

  steps: {
    title: 'Jak to działa',
    items: [
      {
        title: 'Skontaktujcie się z nami',
        text: 'Zadzwońcie albo napiszcie w wygodnym dla was komunikatorze. Dane kontaktowe znajdziecie niżej na tej stronie.',
      },
      {
        title: 'Umówimy się na spotkanie',
        text: 'Spotkamy się tam, gdzie wam wygodnie — w dowolnym miejscu na Zakarpaciu.',
      },
      {
        title: 'Przekażcie ofiarę',
        text: 'Przekazujecie ofiarę w gotówce, my zapisujemy ją na odcinku kontrolnym pocztówki, a wy otrzymujecie Pocztówkę Pielgrzyma.',
      },
    ],
    stub: 'Na odcinku kontrolnym pocztówki zapisujemy imię darczyńcy, numer telefonu, kwotę i datę. Odcinek zostaje u nas — tak prowadzimy rejestr wpłat. Numer telefonu jest nam potrzebny tylko po to, by zaprosić was na Wieczór Wdzięczności; potem go usuniemy.',
    notice:
      'Na tej stronie nie ma i nie będzie numerów kart ani kont bankowych. Z osobami za granicą wszystko ustalamy osobiście. Jeśli nie macie pewności, czy wiadomość naprawdę pochodzi od nas — zapytajcie, korzystając z kontaktów poniżej.',
  },

  fundraising: {
    eyebrow: 'Nie tylko prosimy',
    title: 'Jak sami zbieramy pieniądze',
    lead: 'Nie czekamy, aż ktoś zrobi wszystko za nas. Sami pracujemy, żeby ten wyjazd doszedł do skutku.',
    events: [
      {
        title: 'Koncert charytatywny',
        text: 'Śpiewamy i gramy dla wszystkich, którzy chcą nas wesprzeć.',
        note: 'Datę, godzinę i miejsce koncertu podamy później.',
      },
      {
        title: 'Kiermasze',
        text: 'Sprzedajemy rzeczy, które zrobiliśmy własnymi rękami.',
        note: 'Daty i miejsca kiermaszów podamy później.',
      },
    ],
  },

  other: {
    title: 'Inne sposoby pomocy',
    items: [
      {
        title: 'Przyjdźcie na koncert lub kiermasz',
        text: 'Posłuchajcie, jak śpiewamy, albo kupcie coś, co zrobiliśmy własnymi rękami.',
      },
      {
        title: 'Udostępnijcie stronę',
        text: 'Wyślijcie link przyjaciołom i bliskim. Im więcej osób się o nas dowie, tym lepiej.',
      },
      {
        title: 'Pomóżcie w organizacji',
        text: 'Macie salę, sprzęt nagłośnieniowy albo dobry pomysł na wydarzenie? Napiszcie do nas.',
      },
    ],
  },
};

/* ---------- 5. Наша подяка ---------- */

export const thanks = {
  eyebrow: 'Nasze podziękowanie',
  title: 'Wyruszamy razem: Pocztówka Pielgrzyma',
  intro: 'Nie chcemy tylko prosić o pomoc — pragniemy dzielić z wami naszą radość.',
  text: 'Wszystkim, którzy wesprą naszą drogę ofiarą od 200 UAH (około 4 €), dajemy w prezencie **Pocztówkę Pielgrzyma**. To znak, że duchowo pielgrzymujecie razem z nami.',
  rule: 'Za każde 200 UAH ofiary — jedna pocztówka',
  evening:
    'Gdy tylko zakończymy zbiórkę, zaprosimy wszystkich, którzy nas wsparli, na **Wieczór Wdzięczności online**. Spotkamy się całą wspólnotą na transmisji na żywo, aby podsumować wyniki zbiórki. **Dobroczyńca, który ma pocztówkę, może otrzymać prezent od uczestników**. Prezenty nie są losowane i nie zależą od liczby pocztówek.',
  mockup: {
    thanks: 'Dziękujemy!',
    note: 'Tu będzie projekt pocztówki!',
    alt: 'Pocztówka Pielgrzyma',
    open: 'Powiększ',
  },
};

/* ---------- 5а. Подарунки від благодійників ---------- */

export const gifts = {
  eyebrow: 'Prezenty',
  title: 'Prezenty od naszych dobroczyńców',
  intro: 'Dzięki wsparciu naszych sponsorów i dobroczyńców otrzymaliśmy wyjątkowe prezenty:',
  items: {
    vacuum: 'Robot sprzątający',
    projector: 'Projektor',
    more: 'I inne miłe niespodzianki',
  },
  text: 'Każdy z tych prezentów to wkład osób i firm, które uwierzyły w naszą inicjatywę i pomagają nam zbliżyć się do celu — wyjazdu młodzieży do Seulu.',
  deadline: {
    label: 'Liczą się ofiary złożone do',
    date: '20 grudnia 2026 roku',
  },
  evening: 'Te prezenty wręczymy jako podziękowanie naszym dobroczyńcom i pomocnikom. Wyniki ogłosimy podczas **Wieczoru Wdzięczności online**.',
  thanks:
    'Z całego serca dziękujemy wszystkim naszym sponsorom i dobroczyńcom za hojność, zaufanie i chęć włączenia się w to dzieło, bez względu na kwotę!',
  motto: 'Razem możemy więcej!',
  alt: 'Otwarte złote pudełko z prezentami: robot sprzątający, projektor, aparat fotograficzny i bon na kolację',
  certificates: {
    toggle: 'Wiele bonów podarunkowych',
    hint: 'Kliknijcie, by zobaczyć',
    note: 'Kliknijcie bon, aby go powiększyć.',
    label: 'Bon podarunkowy',
    items: {
      dinner: 'Kolacja dla dwojga w restauracji Old Continent',
      photo: 'Profesjonalna sesja zdjęciowa',
      english: 'Intensywny kurs angielskiego, 10 zajęć',
      cake: 'Tort do 3 kg',
      honey: 'Słoik zakarpackiego miodu ekologicznego',
      water: '100 l wody pitnej',
    },
  },
};

/* ---------- 6. Контакти ---------- */

export const contacts = {
  eyebrow: 'Odezwijcie się',
  title: 'Kontakt',
  lead: 'Napiszcie lub zadzwońcie do nas, a umówimy się na spotkanie.',
  callLabel: 'Zadzwońcie',

  abroad: {
    title: 'Jesteście za granicą?',
    text: 'Napiszcie do nas, a ustalimy wszystko indywidualnie.',
    button: 'Napiszcie do nas',
  },
};

/* ---------- 7. Підвал ---------- */

export const footer = {
  legalLang: 'pl',
  about: 'Młodzież ze wspólnot neokatechumenalnych w Użhorodzie.',
  disclaimer: 'To strona naszej grupy młodzieżowej, a nie oficjalny serwis Światowych Dni Młodzieży.',
  navTitle: 'Sekcje strony',
  privacy: 'Bez plików cookie i bez trackerów: liczymy tylko kliknięcia, anonimowo.',
  sourceLabel: 'Otwarty kod na GitHubie',
  rights: '© 2026 · Kod udostępniony na licencji MIT.',
  sourceHref: 'https://github.com/quinnyaa/wyd-seoul-zakarpattya',
};

/* ---------- Фото ---------- */

export const photos = {
  alt: {
    hero: 'Wspólne zdjęcie naszej młodzieży: około trzydziestu osób stoi i siedzi razem w jasnej sali',
    community:
      'Spotkanie młodzieży w sali pod drewnianymi belkami: około trzydziestu osób siedzi w półkolu i słucha dwóch prowadzących przy ekranie z mapą',
    gallery1: 'Dziewczyna w kuchni układa szczypcami kandyzowaną skórkę pomarańczową na kiermasz charytatywny',
    gallery2: 'Młodzież na wędrówce w Karpatach',
    gallery3: 'Młodzież przy stoisku kiermaszu charytatywnego z wypiekami w woreczkach i banerem „Seul 2027 na spotkanie młodzieży”',
    gallery4: 'Młodzież śpiewa na koncercie charytatywnym',
  },
  placeholder: 'Miejsce na zdjęcie',
  open: 'Powiększ zdjęcie',
  viewer: 'Podgląd zdjęcia',
  close: 'Zamknij',
  prev: 'Poprzednie zdjęcie',
  next: 'Następne zdjęcie',
};

/* ---------- 404 ---------- */

export const notFound = {
  title: 'Nie znaleziono strony',
  heading: 'Nic tu nie ma',
  text: 'Wygląda na to, że ta strona zgubiła się gdzieś między Karpatami a Seulem.',
  button: 'Na stronę główną',
};

/* ---------- Сторінка інтенцій (/intention/) ---------- */

export const intention = {
  title: 'Wasza intencja',
  eyebrow: 'Intencja',
  heading: 'Powierzcie nam swoją intencję',
  lead: 'Napiszcie, za kogo lub w jakiej sprawie mamy się modlić: zabierzemy waszą intencję ze sobą do Seulu.',
  back: 'Wróć',
  invite: {
    title: 'Już nam pomogliście?',
    text: 'Chcemy się za was modlić. Powierzcie nam swoją intencję — zabierzemy ją ze sobą do Seulu.',
    button: 'Zostaw intencję',
  },
  fields: {
    firstName: 'Imię',
    lastName: 'Nazwisko',
    phone: 'Telefon',
    phoneHint: 'Z numerem kierunkowym kraju, np. +48…',
    intention: 'Intencja',
    intentionHint: 'Za kogo lub w jakiej sprawie mamy się modlić.',
  },
  consent: 'Wyrażam zgodę na przetwarzanie moich danych.',
  privacyToggle: 'Jakie dane i po co?',
  privacy:
    'Przechowujemy tylko to, co tu wpiszecie: imię, nazwisko, telefon i intencję. Imię i intencja są potrzebne, żebyśmy wiedzieli, za kogo i w jakiej sprawie się modlić, a telefon — żeby zaprosić was na Wieczór Wdzięczności online. Te dane widzą tylko organizatorzy zbiórki i nikomu innemu ich nie przekazujemy. Po pielgrzymce wszystkie dane zostaną usunięte; jeśli chcecie wcześniej — napiszcie do nas, korzystając z [kontaktów](/#contacts).',
  submit: 'Wyślij',
  sending: 'Wysyłanie…',
  success: {
    title: 'Dziękujemy!',
    text: 'Otrzymaliśmy waszą intencję i zabierzemy ją do Seulu.',
    button: 'Na stronę główną',
  },
  errors: {
    consent: 'Zaznaczcie zgodę na przetwarzanie danych — bez niej nie możemy przyjąć formularza.',
    failed: 'Nie udało się wysłać. Spróbujcie ponownie za chwilę albo napiszcie do nas.',
  },
};

/* ---------- Правити не потрібно ---------- */

export const texts = { site, nav, hero, about, wyd, help, thanks, gifts, contacts, footer, photos, notFound, intention };

export default texts satisfies Texts;
