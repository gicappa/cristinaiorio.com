# Front-end refresh and mailto contact — design

Date: 2026-09-14

## Goal

Improve the visual impact and typesetting (*impaginazione*) of cristinaiorio.com
without changing its colour palette or its simplicity, keep it accessible on
phones, and replace the broken contact form with a link that opens the
visitor's mail client.

## Constraints

- **Colours do not change.** The existing red / amber / slate palette is
  preserved exactly.
- **Simplicity is preserved.** No new visual motifs, gradients, animations
  beyond a hover lift, or decorative imagery.
- **No invented copy.** All text on the site already exists. The only permitted
  text edits are typo and punctuation fixes, plus two sentences that become
  factually wrong once the form is removed.
- **Mobile accessibility is a requirement, not a nice-to-have.** 44px minimum
  tap targets, visible focus rings, working anchor navigation, no layout shift.

## Current state

React 19 + Vite, deployed to GitHub Pages via `gh-pages` (`public/CNAME` →
cristinaiorio.com). Tailwind arrives through the Play CDN
(`cdn.tailwindcss.com`); every component styles itself with template literals
such as `` className={`text-${AppConfig.colors.primary}`} ``, which only resolve
because the Play CDN re-scans the DOM at runtime.

Confirmed defects in the shipped site:

| # | Defect | Location |
|---|---|---|
| 1 | Contact form reports "Messaggio inviato con successo!" but only calls `console.log` — no mail is ever sent | `components/ContactSection.tsx` |
| 2 | `<link rel="stylesheet" href="./index.css">` points at a file that does not exist — 404 on every load. Confirmed by the build log. | `index.html` |
| 3 | Hero packs ~1,300 characters into a single `<p>`, with periods missing their following space (`sogni.È questo`, `accade.Persone che`, `giudizio.Credo`) | `components/HeroSection.tsx` |
| 4 | `<h3>Uno sguardo in avanti</h3>` has no `className`, so it renders smaller than its styled sibling `h3`s | `components/BioSection.tsx` |
| 5 | Keyword pills use a bare `mr-2` with no wrapper gap, so wrapped rows collide vertically | `components/ServicesSection.tsx` |
| 6 | Sticky navbar + `scroll-behavior: smooth` with no `scroll-margin-top`: every nav click hides the heading it jumped to | `index.html`, all sections |
| 7 | `focus:outline-none` on the menu button with no replacement ring — strands keyboard users | `components/Navbar.tsx` |
| 8 | Biografia and FAQ are both `bg-white` and adjacent, reading as one undifferentiated slab | `BioSection.tsx`, `FaqSection.tsx` |
| 9 | Prose capped at `max-w-3xl` ≈ 95 characters per line at 18px, well past a comfortable measure | Bio, FAQ, Hero |
| 10 | Placeholder strings live in production JSON-LD: `"alumniOf": "REPLACE_WITH_UNIVERSITY_INFO"`, `"sameAs": ["REPLACE_WITH_LINKEDIN_URL_IF_ANY"]` | `index.html` |
| 11 | JSON-LD `image` points at `logo.png`, which does not exist in `public/` | `index.html` |
| 12 | Street number disagrees: JSON-LD says `Vicolo Degli Orti 1`, visible text says `2` | `index.html` vs `constants.ts` |
| 13 | `family=Brush+Script+MT` is not a Google Font. The request is ignored and the claim falls back to a locally installed face that ships on no phone, so on mobile it renders as generic `cursive`. | `index.html` |
| 14 | Keyword typo: `"gpercorso terapeutico"` | `ServicesSection.tsx` |
| 15 | Play CDN adds ~110KB of render-blocking JS on top of the 210KB bundle and repaints after scanning the DOM | `index.html` |

## Decisions taken with the user

1. **Hero** — split. Photo beside name / profession / claim / CTAs; the long
   prose moves into a band directly below.
2. **Contatti** — keep the info card and the map; the form panel becomes a
   prominent mailto button.
3. **Mailto** — pre-fill a subject.
4. **Address** — `Vicolo Degli Orti 2` is correct; fix the JSON-LD.
5. **Tailwind** — switch from the Play CDN to a compiled build.
6. **The band below the hero carries no heading.** An invented title such as
   "Il mio approccio" is not how this site should speak. The band is untitled
   and reuses the existing paragraphs verbatim.

## Design

### 1. Compiled Tailwind with semantic colour tokens

Add `tailwind.config.js` (content globs over `index.html`, `./*.{ts,tsx}`,
`./components/**/*.{ts,tsx}`) and `postcss.config.js`. Create a real
`index.css` holding the `@tailwind` directives plus the handful of custom rules
(`.brand-claim`, smooth scroll, `scroll-margin-top`, reduced-motion). Import it
from `index.tsx` so Vite hashes and inlines it; this resolves defect 2. Remove
the CDN `<script>` and the dead `<link>`.

Colours must come out byte-identical, so the theme aliases semantic names to
Tailwind's own palette objects rather than hand-copied hex values:

```js
import colors from 'tailwindcss/colors'
// theme.extend.colors
brand:  { DEFAULT: colors.red[700], hover: colors.red[800], light: colors.red[600], soft: colors.red[50] }
accent: { DEFAULT: colors.amber[600], soft: colors.amber[50], softText: colors.amber[800] }
```

`text-brand` therefore compiles to exactly today's `red-700`.
`AppConfig.colors` becomes dead and is deleted — a compiled build cannot see
interpolated class names, and the Tailwind theme is the idiomatic owner of this
data.

**Fonts.** Keep Poppins. Append Google's *Dancing Script* to the brand-claim
stack **after** `Brush Script MT`, so desktops holding that face look exactly
as they do today while phones get a real brush script instead of falling back
to generic `cursive` (defect 13).

### 2. Shared `Section` component

Five files repeat `py-16 md:py-20 px-4 sm:px-6 lg:px-8` + `container mx-auto`
plus an identically styled `<h2>`. Extract `components/Section.tsx` exposing
`<Section id tone>` and `<SectionHeading title subtitle>`. One unit owns
vertical rhythm and gutters; the navbar's mismatched `px-6` aligns to the same
scale.

Backgrounds alternate strictly, resolving defect 8:

| Hero | (untitled band) | Servizi | Biografia | FAQ | Contatti |
|---|---|---|---|---|---|
| white | slate-100 | white | slate-100 | white | slate-100 |

Servizi moves onto white, so its cards can no longer lean on background
contrast: they trade `shadow-lg` for `border border-slate-200 shadow-sm` with a
hover lift. Prose measure drops from `max-w-3xl` to `65ch` (defect 9) — the
single largest typesetting improvement available.

### 3. Hero and the untitled band

`HeroSection` renders two bands inside one `<section id="home">`. The band is
**not** its own `<section>`: an unnamed landmark is noise for screen readers,
and keeping it inside `#home` also avoids inventing a nav label.

Band A (white): photo left / text right at `md+`, stacked and centred below
that. The photo caps at 256px on mobile so name, claim and both CTAs clear a
375×667 viewport. It gains explicit `width`/`height` and `fetchpriority="high"`
to eliminate layout shift. The redundant `aria-describedby` and its sr-only
caption are dropped, since `alt` already carries that information. Two CTAs:
primary mailto, secondary quiet link to `#servizi`.

Band B (slate-100), untitled: the four existing paragraphs, split into real
`<p>` elements, verbatim apart from the missing-space fixes in defect 3. The
first paragraph is set at `text-xl` so it reads as a lede — a typographic
device, adding no copy.

### 4. Per-section work

**Servizi** — icon and title align on `items-start gap-3` so two-line titles
stop displacing the icon; pills move into a `flex flex-wrap gap-2` wrapper
(defect 5); `sm:grid-cols-2` is added so the one-to-two column step is not held
back to `md`; the `gpercorso` typo is fixed (defect 14).

**Biografia** — the unstyled `<h3>` is matched to its siblings (defect 4). Both
lists move from `list-inside` to `list-outside pl-5` so wrapped bullets hang
correctly instead of sliding under the marker.

**FAQ** — `aria-controls` / `id` wiring between button and panel, 44px minimum
tap targets, and one rotating chevron in place of swapping two icons. The answer
directing visitors to "*il modulo di contatto presente su questo sito*" becomes
false once the form is removed, so it points at email instead.

**Navbar** — restore a visible `focus-visible` ring (defect 7), add
`aria-expanded` / `aria-controls`, close on Escape, 44px menu targets. Add
`scroll-margin-top` to anchored sections (defect 6) and a skip-to-content link.

**index.html** — remove the CDN script, the dead `<link>`, and the now-vestigial
importmap (Vite bundles React itself). Fix the address to `Orti 2` (defect 12).
Fill `alumniOf` from the Bio's existing "Università degli Studi di Torino", drop
the valueless `sameAs` key (defect 10), and repoint `image` at the real profile
photo (defect 11).

### 5. Contatti

Delete the form, its three `useState` hooks, `handleSubmit`, and
`ContactFormData` in `types.ts`. The component becomes stateless and purely
presentational. One column on mobile, two at `md+`:

1. **Scrivimi una email** — a full-width `min-h-[44px]` primary anchor to
   `mailto:cristinaiorio@tiscali.it?subject=Richiesta%20informazioni`. The
   address also appears as selectable text beneath it, so a visitor with no
   configured mail client can still copy it.
2. **Informazioni di contatto** — address linking out to Maps, `tel:`, and the
   same `mailto:`.
3. The map iframe, unchanged.

The privacy-consent sentence was scoped to form submission and goes with it.

## Out of scope

- Footer `#privacy-policy` and `#cookie-policy` jump nowhere. Deleting them is
  the honest fix, but a practising psychologist in Italy plausibly needs a real
  privacy policy for GDPR, and that text must not be invented. Left untouched
  and raised with the user.
- `openingHoursSpecification` claims Mon–Fri 09:00–19:00 in the structured
  data. Unverified; raised with the user.
- No dark mode, no Open Graph tags, no new sections, no content rewriting.

## Verification

1. `npm run build` passes under `strict` and `noUnusedLocals`.
2. Grep asserts **zero** surviving interpolated class names, i.e. no `className`
   whose value is a template literal containing `${`. This is the one way the
   Tailwind migration can silently drop styling, so it is a hard gate.
3. Grep asserts no reference to `AppConfig.colors` remains.
4. Dev server screenshots at desktop width and 375px, compared against the
   pre-change site, to confirm nothing lost its styles.

## What implementation changed relative to this design

Five things came out differently once the work was measured rather than reasoned
about. All are in the shipped code.

1. **The profile photo was the site's worst mobile defect, and it is not in the
   defect table above.** `public/cristina_iorio_profile.jpg` was 3992×3988 and
   **7.3 MB**, downloaded whole to render at roughly 300px. Fixed
   non-destructively: square-cropped, then resampled to 1024px (133 KB) and
   512px (45 KB) at quality 80, wired up through `srcSet` / `sizes`. The
   untouched original moved to `assets-src/cristina_iorio_profile-original.jpg`
   and also remains in git history at `6e98dcb`. A phone now fetches 45 KB in
   place of 7.3 MB.

2. **`components/BlogSection.tsx` was deleted.** It styled itself from
   `AppConfig.colors` and so broke the build, and it was already orphaned —
   `App.tsx` had commented its import out as "Removed", and grep found no other
   reference. Recoverable from git history if the blog is ever revived.

3. **`vite-env.d.ts` was added.** Without `/// <reference types="vite/client" />`
   the new `import './index.css'` fails type-checking with TS2307.

4. **Contatti is two equal-height cards with the map spanning both**, not the
   two-column stack sketched in §5. A screenshot showed the shorter left card
   leaving a large void beside the right column, so the mailto card and the
   info card sit side by side (`md:grid-cols-2`) and the map takes
   `md:col-span-2` beneath them.

5. **Tap-target fixes were driven by measurement, not by inspection.** The phone
   link (149×28), the email link (190×28) and both footer policy links (~20px
   tall) were all under 44px and are now `min-h-[44px]`. Two sub-44px targets
   were left deliberately: the inline "contattarmi" link inside a sentence
   (exempt under WCAG 2.5.8) and the 36px desktop nav links, which are
   `md:`-only, never touched, and already clear the 24px AA minimum.

Verification went further than §4 of the plan: a `puppeteer-core` harness driving
system Chrome over CDP replaced eyeballed screenshots. It asserted nine computed
RGB values against the original Tailwind palette (all identical), zero horizontal
overflow at 390/768/1440, every anchor settling at 96px against a 73–77px
navbar, `{"forms":0,"inputs":0,"submitButtons":0}`, all three mailto hrefs
resolving to the subject-prefilled address, and no console errors or failed
requests. The harness lives in `/tmp/vis`, outside the repo, so no diagnostic
dependency entered `package.json`.

## Follow-up owed to the user

The user asked to be told, *after* the visual work lands, whether the site's
tone of voice reads correctly — explicitly declining any content invention
during this change. Observations on communication and tone are therefore
reported at the end, as notes, not applied as edits.
