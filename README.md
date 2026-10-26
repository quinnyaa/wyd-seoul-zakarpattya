# Від Карпат до Сеула (From the Carpathians to Seoul)

A one-page fundraising site for the pilgrimage of young people from the Neocatechumenal communities of Uzhhorod, Ukraine, to World Youth Day in Seoul (3–8 August 2027).

It's a static [Astro](https://astro.build) site hosted on Cloudflare Pages at https://wyd-seoul-uzhhorod.org. The site's content is in Ukrainian. Donations are accepted only in cash, in person, so the site has no forms, payment details or trackers. The only statistics are Cloudflare's own visit counts and a counter of clicks on links and buttons (see [Click counter](#click-counter)).

## License

The site's code is released under the [MIT License](LICENSE). The license does not cover the content: the photos (`src/assets/photos/` and the social media image `public/og.jpg` made from them), the postcard design (`src/assets/card/`), the texts (`src/content/texts.ts`) and the contact details (`src/data/contacts.ts`). The content belongs to the young people of the Uzhhorod communities and may not be used or shared without permission. The World Youth Day Seoul 2027 logo on the postcard belongs to its owners.

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

The site is a single page, `/`. The sections come in this order:

| # | Section | Anchor | Texts in `texts.ts` |
|---|---|---|---|
| 1 | Title and intro, scene, countdown | `#top` | `hero` |
| 2 | About us: community, organizer, gallery | `#about` | `about` |
| 3 | What World Youth Day is, costs | `#wyd` | `wyd` |
| 4 | How to help: steps, our events, other ways | `#help` | `help` |
| 5 | Our thanks: the pilgrim postcard | `#thanks` | `thanks` |
| 6 | Contacts, "Living abroad?" | `#contacts` | `contacts` |
| 7 | Footer | — | `footer` |

The header and footer menus are anchor links (`nav` in `texts.ts`). The old addresses `/about/`, `/trip/` and `/help/` redirect to the matching sections; see `redirects` in [astro.config.mjs](astro.config.mjs).

## Editing texts

All texts live in one file, [src/content/texts.ts](src/content/texts.ts), grouped by section. Only edit what's inside the quotes.

- **Project name**: `site.name` at the top of the file. It's used in the header, footer, page title and meta tags. The words highlighted in color on the first screen are in `site.nameAccents`.
- After changing the name or `hero.eventLine`, run `npm run og` to update the social media image.
- The countdown target date is `site.eventStart`.
- Longer texts support `**bold**` and `[link text](url)`. External links open in a new tab and get an icon automatically.
- ` ` is a non-breaking space between a number and its unit (`200 грн`). Don't remove it.

## Editing contacts

Edit [src/data/contacts.ts](src/data/contacts.ts). For the contact person, set:

- `name`: their name (optionally `role` too);
- `phone`: the number as `+380501234567`, no spaces;
- `telegram`: the username without `@`;
- `viber`: `true` if this number has Viber.

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
- Alt text for screen reader users is in [src/data/photos.ts](src/data/photos.ts). Update it when you add a photo.
- To change which photos are in the gallery, edit the `ids` list in [src/pages/index.astro](src/pages/index.astro).
- After replacing `hero`, run `npm run og`.

## Adding the postcard design

The design is `src/assets/card/card.jpg` (`.png` and `.webp` also work). It is shown in the "Our thanks" section, and a click opens it full size. The frame takes its proportions from the file, so a new design can be dropped in as is. Without the file, an A6 placeholder is shown.

## Changing the style

Colors, fonts, spacing and radii are all in one file: [src/styles/tokens.css](src/styles/tokens.css). To match the site to the postcard design, adjusting the colors there is enough.

## Deployment

The site is hosted on Cloudflare Pages at https://wyd-seoul-uzhhorod.org. Cloudflare builds it from this GitHub repository after every `git push` to `main` (settings: build command `npm run build`, build output directory `dist`).

The site address is set by the `SITE` line in [astro.config.mjs](astro.config.mjs).

## Click counter

Every click on a link or button is counted: menu, "Help" buttons, contacts, external links, gallery photos. For each click the page sends to `/api/click`, a Cloudflare Pages Function ([functions/api/click.ts](functions/api/click.ts)):

- `link`: what was clicked, either the element's `data-link` name (`tel`, `viber`, `abroad`, `menu`, `photo-hero`, `photo-next`…) or the link's address (`/#help`, `https://wydseoul.org/en`);
- `place`: where on the page (`header`, `footer`, `sticky`, `lightbox` or the section id: `top`, `about`, `help`…);
- `label`: the button's text;
- `contact`: the name on the contact card, if the click was on it;
- `source`: where the visitor came from, either the `?from=` tag of the link they opened or the referring site.

To compare channels, share the site with a tag, e.g. `https://wyd-seoul-uzhhorod.org/?from=telegram`, `?from=viber`, `?from=instagram`, `?from=poster`. Use lowercase Latin letters, digits, `-` and `_`. Each visit through a tagged link is stored as `landing`, and all clicks during that visit carry the same `source`.

The function stores the click in a D1 database with the time. No IP addresses, cookies or other visitor data are stored. New links and buttons are counted automatically. Give a button a `data-link` name if its address alone doesn't say what it is. A click only means someone pressed the button, not that they actually called or wrote.

One-time setup in the Cloudflare dashboard:

1. **Storage & Databases → D1 → Create database**, name it `wyd-clicks`.
2. Open the database → **Console**, paste the contents of [db/clicks.sql](db/clicks.sql) and run it.
3. **Workers & Pages → the site's project → Settings → Bindings → Add → D1 database**: variable name `DB`, database `wyd-clicks`. Add it for Production (and Preview, if you want clicks from preview deploys too).
4. Redeploy the site (push to `main` or **Deployments → Retry deployment**) so the binding takes effect.

To see the numbers, open the database → **Console** and run one of the queries from [db/queries.sql](db/queries.sql). Until the binding is set up, the site works as usual and clicks are simply not saved.

## Project structure

```
src/
  content/texts.ts     all texts
  data/contacts.ts     contact details
  data/photos.ts       photo list and alt text
  assets/photos/       photos
  assets/card/         postcard design
  styles/tokens.css    colors, fonts, spacing
  components/          header, footer, countdown, cards, gallery
  layouts/Base.astro   shared page layout
  pages/index.astro    the single page with all sections
  pages/404.astro      "not found" page
public/                favicon, social media image, Cloudflare _headers and _redirects
functions/api/click.ts click counter (Cloudflare Pages Function)
db/                    click table and ready-made queries
scripts/               tests, screenshots, social media image
```

## TODO

**Contacts**: [src/data/contacts.ts](src/data/contacts.ts):

- [x] contact person's name, phone and Viber
- [ ] Telegram (`telegram`), optional: without it the Telegram button is hidden

**Photos**: [src/assets/photos/](src/assets/photos/):

- [ ] `gallery-2`, `gallery-4` (two photos; `hero`, `community`, `gallery-1`, `gallery-3` are done)

**Postcard design**: [src/assets/card/](src/assets/card/):

- [x] `card.jpg`
