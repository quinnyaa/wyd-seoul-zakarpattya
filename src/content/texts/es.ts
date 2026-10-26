/*
  ТЕКСТИ САЙТУ ІСПАНСЬКОЮ. Будова — як в основному файлі uk.ts, пояснення до кожного тексту — там.
  Змінюйте лише те, що в лапках.
*/

import type { PluralForms } from '../../utils/countdown';
import type { Texts } from '../../utils/i18n';

/* ---------- Загальне ---------- */

export const site = {
  name: 'De los Cárpatos a Seúl',
  nameAccents: ['Cárpatos', 'Seúl'],
  title: 'De los Cárpatos a Seúl — peregrinación de los jóvenes de Úzhgorod a la Jornada Mundial de la Juventud 2027',
  description:
    'Los jóvenes de las comunidades neocatecumenales de Úzhgorod recogen donativos para peregrinar a Seúl en la JMJ (3–8 de agosto de 2027). Descubre cómo ayudar.',
  shareTitle: 'Peregrinación de los jóvenes de Úzhgorod a la JMJ 2027',
  shareDescription: 'Seúl, 3–8 de agosto de 2027. Apoya nuestro viaje.',
  helpButton: 'Ayudar',
  homeLabel: 'al inicio de la página',
  skipLink: 'Ir al contenido',
  newTab: '(se abre en una pestaña nueva)',
  menu: {
    label: 'Menú principal',
    open: 'Abrir el menú',
    close: 'Cerrar el menú',
  },
  languages: 'Idioma de la web',
};

export const nav = [
  { label: 'Quiénes somos', href: '#about' },
  { label: 'El viaje', href: '#wyd' },
  { label: 'Cómo ayudar', href: '#help' },
  { label: 'Agradecimiento', href: '#thanks' },
  { label: 'Contacto', href: '#contacts' },
];

/* ---------- 1. Заголовок і вступ ---------- */

export const hero = {
  eventLine: ['Peregrinación 2027', 'Seúl', '3–8 de agosto'],
  lead: 'Estamos organizando una colecta benéfica para nuestra peregrinación a Seúl en agosto de 2027. Este viaje empieza ya hoy, y te invitamos a formar parte de nuestra misión: tu apoyo hace posible esta peregrinación, y nosotros llevaremos con gratitud tus intenciones hasta Corea del Sur.',
  note: 'Puedes conocer mejor el acontecimiento en la [web oficial de la Jornada Mundial de la Juventud 2027](https://wydseoul.org/en). Ten en cuenta que esta es la web de nuestro grupo de jóvenes, no un recurso oficial del evento.',
  buttons: {
    help: 'Cómo ayudar',
    about: 'Quiénes somos',
    wyd: 'Qué es la Jornada Mundial de la Juventud',
  },
  sticker: ['Seúl', '2027'],

  countdown: {
    title: 'Para el encuentro en Seúl falta',
    done: 'El encuentro en Seúl ya ha comenzado. ¡Gracias a todos los que nos han ayudado a llegar hasta aquí!',
    units: {
      days: { one: 'día', other: 'días' },
      hours: { one: 'hora', other: 'horas' },
      minutes: { one: 'minuto', other: 'minutos' },
      seconds: { one: 'segundo', other: 'segundos' },
    } as Record<'days' | 'hours' | 'minutes' | 'seconds', PluralForms>,
  },
};

/* ---------- 2. Хто ми ---------- */

export const about = {
  eyebrow: 'Quiénes somos',
  title: 'Una comunidad donde encontramos a Cristo',
  text: 'Somos los jóvenes de las comunidades neocatecumenales de Úzhgorod. Hemos respondido a la invitación del Papa León XIV de ponernos en camino hacia Seúl. Para nosotros esta peregrinación es un momento muy serio de encuentro con Dios mismo. Queremos recibir luz sobre nuestra vocación y nuestra misión, algo que en este tiempo de tantos miedos e incertidumbre nos resulta decisivo.',
  note: 'Puedes conocer mejor este itinerario cristiano en la [web oficial del Camino Neocatecumenal](https://neocatechumenaleiter.org/).',

  organizer: {
    eyebrow: 'Organizador de la colecta',
    name: 'Campomar Hernando Francisco Javier',
    text: 'Coordina la colecta benéfica. Si tienes alguna pregunta, escríbenos: los datos están en la sección «Contacto».',
    link: 'Ir a contactos',
  },

  gallery: {
    title: 'Nuestras fotos',
    hint: 'Haz clic en una foto para ampliarla.',
  },
};

/* ---------- 3. Що таке Всесвітній день молоді ---------- */

export const wyd = {
  eyebrow: 'El viaje',
  title: 'Qué es la Jornada Mundial de la Juventud',
  text: [
    'La Jornada Mundial de la Juventud (JMJ) es una gran peregrinación internacional que el Papa Juan Pablo II puso en marcha en 1985. Es el momento en que la Iglesia reúne a jóvenes de todo el mundo junto al Sucesor de Pedro (el Papa) para fortalecerlos en la fe mediante la escucha de la Palabra, la oración común y la eucaristía. Después de Lisboa (2023), la siguiente parada será Seúl (Corea del Sur), en agosto de 2027.',
  ],
  facts: [
    { label: 'Dónde', value: 'Seúl, Corea del Sur' },
    { label: 'Cuándo', value: '3–8 de agosto de 2027' },
  ],

  why: {
    title: 'Por qué es importante para nosotros',
    items: [
      {
        title: 'Ver que no estamos solos',
        text: 'En Seúl se reunirán jóvenes de todo el mundo que creen igual que nosotros. Eso da fuerzas.',
      },
      {
        title: 'Hablar de Ucrania',
        text: 'Llevamos con nosotros Transcarpacia y Ucrania: nuestra lengua, nuestras canciones y nuestra oración por la paz.',
      },
      {
        title: 'Volver siendo otros',
        text: 'Un camino así cambia. Lo que recibamos allí queremos traerlo a casa: a nuestras familias, a nuestras parroquias y a nuestra ciudad.',
      },
    ],
  },

  cost: {
    title: 'Cuánto cuesta',
    prefix: 'unos',
    value: '2.000 €',
    label: 'por persona',
    includesTitle: 'Qué incluye esa cantidad',
    includes: ['Vuelo', 'Alojamiento', 'Inscripción', 'Visado', 'Comidas'],
    text: [
      'Para escolares y estudiantes es muchísimo dinero. Muchas familias no pueden costear por sí solas un viaje así.',
      'Por eso reunimos los fondos juntos. Todo lo que logremos recaudar reduce la aportación de cada participante.',
    ],
  },
};

/* ---------- 4. Як допомогти ---------- */

export const help = {
  eyebrow: 'Apoyo',
  title: 'Cómo ayudarnos a llegar a Seúl',
  text: [
    'No hay una cantidad objetivo, y no existe un donativo «demasiado pequeño». Cada grivna es un ladrillo de nuestro camino a Seúl.',
    '**Solo aceptamos donativos en efectivo y en persona, en cualquier lugar de Transcarpacia.** Nos alegrará encontrarnos contigo para darte las gracias personalmente.',
  ],
  button: 'Contacta con nosotros',

  steps: {
    title: 'Cómo funciona',
    items: [
      {
        title: 'Ponte en contacto',
        text: 'Llámanos o escríbenos por la aplicación que prefieras. Los contactos están más abajo en esta página.',
      },
      {
        title: 'Quedamos',
        text: 'Nos vemos donde te venga bien, en cualquier lugar de Transcarpacia.',
      },
      {
        title: 'Entrega tu donativo',
        text: 'Entregas el donativo en efectivo y recibes Postales del Peregrino.',
      },
    ],
    notice:
      'En esta web no hay ni habrá números de tarjeta ni de cuenta. Si alguien pide que se transfiera dinero en nuestro nombre, no somos nosotros.',
  },

  fundraising: {
    eyebrow: 'No solo pedimos',
    title: 'Cómo recaudamos nosotros mismos',
    lead: 'No esperamos a que otros lo hagan todo por nosotros. Trabajamos para que este viaje sea posible.',
    events: [
      {
        title: 'Concierto benéfico',
        text: 'Cantamos y tocamos para todos los que quieran apoyarnos.',
        note: 'Anunciaremos más adelante la fecha, la hora y el lugar del concierto.',
      },
      {
        title: 'Mercadillos',
        text: 'Vendemos cosas hechas con nuestras propias manos.',
        note: 'Anunciaremos más adelante las fechas y los lugares de los mercadillos.',
      },
    ],
  },

  other: {
    title: 'Otras formas de ayudar',
    items: [
      {
        title: 'Ven a un concierto o a un mercadillo',
        text: 'Escúchanos cantar o compra algo hecho por nuestras manos.',
      },
      {
        title: 'Comparte la web',
        text: 'Envía el enlace a tus amigos y a tu familia. Cuanta más gente nos conozca, mejor.',
      },
      {
        title: 'Ayúdanos con la organización',
        text: '¿Tienes una sala, equipo de sonido o una buena idea para un acto? Escríbenos.',
      },
    ],
  },
};

/* ---------- 5. Наша подяка ---------- */

export const thanks = {
  eyebrow: 'Nuestro agradecimiento',
  title: 'Nos ponemos en camino juntos: la Postal del Peregrino',
  intro: 'No queremos solo pedir ayuda: queremos compartir contigo nuestra alegría.',
  text: 'A todo el que apoye nuestro camino con un donativo a partir de 200 UAH (unos 4 €) le regalamos una **Postal del Peregrino**. Es la señal de que peregrinas espiritualmente con nosotros.',
  rule: 'Cada 200 UAH de donativo, una postal',
  evening:
    'En cuanto cerremos la colecta, invitaremos a quienes tengan la postal a una **Velada de agradecimiento en línea**. Nos reuniremos toda la comunidad en directo para hacer balance de la colecta. Y entre quienes tengan postal repartiremos **regalos especiales de parte de nuestros jóvenes** como señal de nuestra enorme gratitud.',
  mockup: {
    thanks: '¡Gracias!',
    note: '¡Aquí irá el diseño de la postal!',
    alt: 'Postal del Peregrino',
    open: 'Ampliar',
  },
};

/* ---------- 6. Контакти ---------- */

export const contacts = {
  eyebrow: 'Contacto',
  title: 'Contactos',
  lead: 'Escríbenos o llámanos y quedamos para vernos.',
  callLabel: 'Llamar',

  abroad: {
    title: '¿Estás en el extranjero?',
    text: 'Escríbenos y lo organizamos de forma individual.',
    button: 'Escríbenos',
  },
};

/* ---------- 7. Підвал ---------- */

export const footer = {
  legalLang: 'es',
  about: 'Jóvenes de las comunidades neocatecumenales de Úzhgorod.',
  disclaimer: 'Esta es la web de nuestro grupo de jóvenes, no un recurso oficial de la Jornada Mundial de la Juventud.',
  navTitle: 'Secciones de la página',
  privacy: 'Sin cookies ni datos personales: solo contamos clics, de forma anónima.',
  sourceLabel: 'Código abierto en GitHub',
  rights: '© 2026 · Código publicado bajo licencia MIT.',
  sourceHref: 'https://github.com/quinnyaa/wyd-seoul-zakarpattya',
};

/* ---------- Фото ---------- */

export const photos = {
  alt: {
    hero: 'Foto de grupo de nuestros jóvenes: unas treinta personas de pie y sentadas juntas en una sala luminosa',
    community:
      'Encuentro de jóvenes en una sala con vigas de madera: unas treinta personas sentadas en semicírculo escuchan a dos presentadores junto a una pantalla con un mapa',
    gallery1: 'Una chica en la cocina coloca con pinzas cáscara de naranja confitada para un mercadillo benéfico',
    gallery2: 'Jóvenes de excursión por los Cárpatos',
    gallery3: 'Jóvenes junto a la mesa de un mercadillo benéfico con bollería en bolsitas y una pancarta que dice «Seúl 2027 para el encuentro de jóvenes»',
    gallery4: 'Jóvenes cantando en un concierto benéfico',
  },
  placeholder: 'Espacio para una foto',
  open: 'Ampliar foto',
  viewer: 'Visor de fotos',
  close: 'Cerrar',
  prev: 'Foto anterior',
  next: 'Foto siguiente',
};

/* ---------- 404 ---------- */

export const notFound = {
  title: 'Página no encontrada',
  heading: 'Aquí no hay nada',
  text: 'Parece que esta página se ha perdido en algún punto entre los Cárpatos y Seúl.',
  button: 'Ir al inicio',
};

/* ---------- Правити не потрібно ---------- */

export const texts = { site, nav, hero, about, wyd, help, thanks, contacts, footer, photos, notFound };

export default texts satisfies Texts;
