# Від Карпат до Сеула (From the Carpathians to Seoul)

A one-page fundraising site for the pilgrimage of young people from the Neocatechumenal communities of Uzhhorod, Ukraine, to World Youth Day in Seoul (3–8 August 2027).

It's a static [Astro](https://astro.build) site hosted on Cloudflare Pages at https://wyd-seoul-uzhhorod.org. The site's content is in Ukrainian, with translations into English, German, French, Spanish and Italian (see [Languages](#languages)). Donations are accepted only in cash, in person, so the site has no forms, payment details or trackers. The Pope's video in the "Who we are" section shows a local cover image, and the YouTube player (from `youtube-nocookie.com`) loads only after a click. The only statistics are Cloudflare's own visit counts and a counter of clicks on links and buttons (see [Click counter](#click-counter)).

## License

The site's code is released under the [MIT License](LICENSE). The license does not cover the content: the photos (`src/assets/photos/` and the social media image `public/og.jpg` made from them), the postcard design (`src/assets/card/`), the texts (`src/content/texts/`) and the contact details (`src/data/contacts.ts`). The content belongs to the young people of the Uzhhorod communities and may not be used or shared without permission. The World Youth Day Seoul 2027 logo on the postcard belongs to its owners.

## Running locally

You need Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

The site opens at the address the command prints (http://localhost:4321/). Changes to files show up right away. To stop the server: `npx astro dev stop`.

| Command | What it does |
|---|---|
| `npm run dev` | local development server |
| `npm run build` | builds the site into `dist/` |
| `npm run preview` | serves the built site locally |
| `npm run check` | checks the code for errors |
| `npm run og` | regenerates the social media preview image |
| `npm test` | Playwright tests (needs `npm run preview` running) |
| `npm run lighthouse` | Lighthouse in mobile mode (needs `npm run preview` running) |
| `npm run shots` | page screenshots (375 and 1440 px) into `screenshots/` |

## Page structure

The site is a single page: `/` in Ukrainian and `/en/`, `/de/`… for other languages. The sections come in this order:

| # | Section | Anchor | Texts in `texts/uk.ts` |
|---|---|---|---|
| 1 | Title and intro, scene, countdown | `#top` | `hero` |
| 2 | About us: community, organizer, gallery | `#about` | `about` |
| 3 | What World Youth Day is, costs | `#wyd` | `wyd` |
| 4 | How to help: steps, our events, other ways | `#help` | `help` |
| 5 | Our thanks: the pilgrim postcard | `#thanks` | `thanks` |
| 6 | Contacts, "Living abroad?" | `#contacts` | `contacts` |
| 7 | Footer | — | `footer` |

The header and footer menus are anchor links (`nav` in `texts/uk.ts`). The old addresses `/about/`, `/trip/` and `/help/` redirect to the matching sections; see `redirects` in [astro.config.mjs](astro.config.mjs).

## Editing texts

All Ukrainian texts live in one file, [src/content/texts/uk.ts](src/content/texts/uk.ts), grouped by section. Translations are files next to it (`en.ts`, `de.ts`…) with the same structure. Only edit what's inside the quotes.

- **Project name**: `site.name` at the top of the file. It's used in the header, footer, page title and meta tags. The words highlighted in color on the first screen are in `site.nameAccents`.
- After changing the name or `hero.eventLine`, run `npm run og` to update the social media image.
- The countdown target date is `eventStart` in [src/data/event.ts](src/data/event.ts).
- Longer texts support `**bold**` and `[link text](url)`. External links open in a new tab and get an icon automatically.
- ` ` is a non-breaking space between a number and its unit (`200 грн`). Don't remove it.

## Languages

The site is in six languages: Ukrainian, English, German, French, Spanish and Italian. Ukrainian is the main language and lives at `/`. Every other language gets its own copy of the page under its code: `/en/`, `/de/`, `/fr/`, `/es/`, `/it/`. The list of languages is [src/content/languages.ts](src/content/languages.ts).

Visitors who open `/` are sent to their browser's language if the site has it: an Italian browser goes to `/it/`, an English one to `/en/`. Any other browser language stays on Ukrainian. This is a Cloudflare Pages Function, [functions/index.ts](functions/index.ts), so it only works on Cloudflare, not in `npm run dev`. A language picked in the language picker is remembered in a `lang` cookie and wins over the browser language. Links from other pages of the site, search engines and messenger link previews are never redirected, so previews stay in Ukrainian.

To add a language:

1. Copy `src/content/texts/uk.ts` to a file named with the language code, e.g. `src/content/texts/pl.ts`, and translate everything inside the quotes. Keep `href` values in `nav` as they are.
2. Add a line to `languages` in [src/content/languages.ts](src/content/languages.ts), following the existing ones: the code, the language's name in that language, a short label for the button, the flag's country code and the locale for social media previews.
3. Run `npm run check`. It reports any text missing from the translation.

Once there are two or more languages, a language picker appears in the header: a button with the current flag that opens a list of flags and language names. On phones it sits at the top of the menu. Switching keeps the visitor on the same section. Flags come from the [flag-icons](https://github.com/lipis/flag-icons) package; the available country codes are the file names in `node_modules/flag-icons/flags/4x3/`.

Also handled for each language: `<html lang>`, `hreflang` links between translations (in the page head and in the sitemap), `og:locale`, a "not found" page (`/en/404.html`), plural forms in the countdown (via `Intl.PluralRules`, see `hero.countdown.units`) and photo alt text (`photos.alt`). A language's social media image is `public/og-<code>.jpg` (e.g. `og-en.jpg`); until it exists, the Ukrainian `og.jpg` is used. The contact's `name` and `role` in `src/data/contacts.ts` can be translated as `{ uk: '…', en: '…' }`.

The fonts include Cyrillic and Latin only. A language in another script (Greek, Georgian…) needs its font files added in [src/layouts/Base.astro](src/layouts/Base.astro).

## Editing contacts

Edit [src/data/contacts.ts](src/data/contacts.ts). For the contact person, set:

- `name`: their name (optionally `role` too);
- `phone`: the number as `+380501234567`, no spaces;
- `telegram`: the username without `@`;
- `viber`: `true` if this number has Viber;
- `whatsapp`: `true` if this number has WhatsApp.

Call and messenger links are built automatically. If a channel isn't available, delete its line and the button disappears.

## Replacing photos

Put the file in [src/assets/photos/](src/assets/photos/) with the right name. The extension can be `.jpg`, `.jpeg`, `.png` or `.webp`. The site generates smaller WebP copies on its own.

| File name | Where it appears | What photo |
|---|---|---|
| `hero` | first screen, gallery | group photo of all the young people (done) |
| `community` | "About us" section, gallery | group photo of our youth, landscape, 4:3 (done) |
| `gallery-1` | gallery | preparing for a fair (done) |
| `gallery-2` | gallery | a trip or hike together |
| `gallery-3` | gallery | a fair or handmade items (done) |
| `gallery-4` | gallery | a concert or rehearsal |

Until a file is added, a placeholder with a hint is shown in its place. Missing gallery photos are simply not shown.

- Landscape photos 2000 px wide or more work best. Very large files (over 3–4 MB) are better downsized before adding.
- Alt text for screen reader users is `photos.alt` in [src/content/texts/uk.ts](src/content/texts/uk.ts) (and in each translation). Update it when you add a photo.
- To change which photos are in the gallery, edit the `ids` list in [src/pages/[...lang]/index.astro](src/pages/[...lang]/index.astro).
- After replacing `hero`, run `npm run og`.

## Adding the postcard design

The design is `src/assets/card/card.png` (`.jpg` and `.webp` also work). It is shown in the "Our thanks" section, and a click opens it full size. The frame takes its proportions from the file, so a new design can be dropped in as is. Without the file, an A6 placeholder is shown.

## Changing the style

Colors, fonts, spacing and radii are all in one file: [src/styles/tokens.css](src/styles/tokens.css). To match the site to the postcard design, adjusting the colors there is enough.

## Deployment

The site is hosted on Cloudflare Pages at https://wyd-seoul-uzhhorod.org. Cloudflare builds it from this GitHub repository after every `git push` to `main` (settings: build command `npm run build`, build output directory `dist`).

The site address is set by the `SITE` line in [astro.config.mjs](astro.config.mjs). After the build, `astro.config.mjs` also renames each language's `404/index.html` to `404.html`, because Cloudflare Pages shows the nearest `404.html` for missing pages.

## Click counter

Every click on a link or button is counted: menu, "Help" buttons, contacts, external links, gallery photos. For each click the page sends to `/api/click`, a Cloudflare Pages Function ([functions/api/click.ts](functions/api/click.ts)):

- `link`: what was clicked, either the element's `data-link` name (`tel`, `viber`, `whatsapp`, `abroad`, `menu`, `lang`, `lang-en`, `photo-hero`, `photo-next`…) or the link's address (`/#help`, `/en/#help`, `https://wydseoul.org/en`);
- `place`: where on the page (`header`, `footer`, `sticky`, `lightbox` or the section id: `top`, `about`, `help`…);
- `label`: the button's text;
- `contact`: the name on the contact card, if the click was on it (always in Ukrainian, so clicks from all languages add up);
- `source`: where the visitor came from (see below);
- `lang`: the language of the page the click happened on (`uk`, `en`…).
- `visit`: a random visit id, the same for all clicks while the browser tab stays open, so a visit's clicks can be read in order (`landing` → `/#help` → `tel`…).
- `seconds`: time on the page, for `time` rows. Every time the page is hidden (closed, or the visitor switched to another tab or app) it sends `time` with the seconds the page was visible since the last `time`, so the sum over a visit is the whole time spent.

Language switches are counted too: opening the language picker is `lang`, picking a language is `lang-en`, `lang-it`… with the language switched *from* in `lang`. When the site itself opens the browser's language instead of Ukrainian (see [Languages](#languages)), [functions/index.ts](functions/index.ts) stores `lang-auto` with the opened language in `lang` and, in `label`, why: `browser` (browser language) or `cookie` (language picked earlier in the picker).

The source is worked out in this order:

1. The `?from=` tag of the link the visitor opened, e.g. `https://wyd-seoul-uzhhorod.org/?from=poster`. Use lowercase Latin letters, digits, `-` and `_`.
2. The in-app browser of Facebook, Messenger, Instagram, TikTok and some others, recognised from the User-Agent (the User-Agent itself isn't stored).
3. The referring site or Android app, with familiar ones given short names: `telegram`, `viber`, `whatsapp`, `facebook`, `google`… Other sites are stored by their address.

Messengers on iPhone pass nothing, so those visits stay without a source unless the link has a tag. The first page load of every visit is stored as `landing`, and all clicks during that visit carry the same `source` and `visit`. A visit starts when the site is first opened in a tab, or when it's opened again in the same tab from a different source. `lang-auto` happens on the server before the page loads, so it has no `visit`; the visit starts with the `landing` on the opened language's page. Clicks stored before `visit` was added have none.

The function stores the click in a D1 database with the time. No IP addresses, cookies or other visitor data are stored: the visit id is a random number kept in the tab's `sessionStorage` and forgotten when the tab is closed. New links and buttons are counted automatically. Give a button a `data-link` name if its address alone doesn't say what it is. A click only means someone pressed the button, not that they actually called or wrote.

One-time setup in the Cloudflare dashboard:

1. **Storage & Databases → D1 → Create database**, name it `wyd-clicks`.
2. Open the database → **Console**, paste the contents of [db/clicks.sql](db/clicks.sql) and run it.
3. **Workers & Pages → the site's project → Settings → Bindings → Add → D1 database**: variable name `DB`, database `wyd-clicks`. Add it for Production (and Preview, if you want clicks from preview deploys too).
4. Redeploy the site (push to `main` or **Deployments → Retry deployment**) so the binding takes effect.

If the table was created before the `lang`, `visit` or `seconds` columns existed, add them once in the database **Console** before deploying, using the `ALTER TABLE` lines at the top of [db/clicks.sql](db/clicks.sql). Without them new clicks fail to save.

To see the numbers, open the database → **Console** and run one of the queries from [db/queries.sql](db/queries.sql). Until the binding is set up, the site works as usual and clicks are simply not saved.

## Project structure

```
src/
  content/texts/uk.ts  all texts in Ukrainian (translations: en.ts, de.ts…)
  content/languages.ts list of site languages
  data/contacts.ts     contact details
  data/event.ts        countdown target date
  data/photos.ts       photo file list
  assets/photos/       photos
  assets/card/         postcard design
  assets/video/        cover image for the Pope's video
  styles/tokens.css    colors, fonts, spacing
  components/          header, language picker, footer, countdown, cards, gallery, video
  layouts/Base.astro   shared page layout
  utils/i18n.ts        page language, texts and links for it
  pages/[...lang]/index.astro  the single page with all sections, one per language
  pages/[...lang]/404.astro    "not found" page, one per language
public/                favicon, social media image, Cloudflare _headers and _redirects
functions/index.ts     redirect from / to the browser's language (Cloudflare Pages Function)
functions/api/click.ts click counter (Cloudflare Pages Function)
db/                    click table and ready-made queries
scripts/               tests, screenshots, social media image
```

## TODO

**Contacts**: [src/data/contacts.ts](src/data/contacts.ts):

- [x] contact person's name, phone, Viber and WhatsApp
- [ ] Telegram (`telegram`), optional: without it the Telegram button is hidden

**Photos**: [src/assets/photos/](src/assets/photos/):

- [ ] `gallery-2`, `gallery-4` (two photos; `hero`, `community`, `gallery-1`, `gallery-3` are done)

**Postcard design**: [src/assets/card/](src/assets/card/):

- [x] `card.png`
