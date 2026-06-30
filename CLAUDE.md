# CLAUDE.md — Andresen & Aas kursportal

Dette dokumentet styrer alt arbeid i repoet. Les det før du gjør endringer.

## 1. Hva dette er

En **premium kursportal** for firmaet **Andresen & Aas**, publisert på
`https://kurs.aogaa.no` via GitHub Pages.

Portalen kommer først; **frittstående kurs legges til over tid**. Hvert kurs skal
være selvstendig innhold som arver portalens felles ramme (meny, footer, stil),
slik at nye kurs automatisk ser like eksklusive ut som resten av siden.

Følelsen vi er ute etter: **kvalitet og eksklusivitet** — rolig, dyp, forseggjort.
Ikke et "billig nettkurs"-uttrykk. Tenk privat fagbibliotek, ikke MOOC-fabrikk.

## 2. Merkevare

- **Firmanavn:** Andresen & Aas (skriv alltid fullt ut; aldri "A&A" i brødtekst).
- **Domene:** kurs.aogaa.no

### Fargepalett (design-tokens)

Definer disse som CSS-variabler i `src/styles/tokens.css` og bruk **kun** dem —
ingen løse hex-verdier i komponenter.

| Rolle | Token | Hex | Bruk |
|---|---|---|---|
| Dyp mørk blå (bunn) | `--navy-900` | `#07131F` | Sidebakgrunn, dype flater |
| Mørk blå | `--navy-800` | `#0B1B2E` | Kort, seksjoner |
| Blå (fra vannet) | `--blue-600` | `#15426B` | Aksent, hover, lenker |
| Krem (lys) | `--cream-100` | `#F6F0E2` | Brødtekst på mørk bunn, lyse flater |
| Krem (dempet) | `--cream-200` | `#E7DCC4` | Sekundærtekst, kantlinjer |
| Gull | `--gold-500` | `#C9A24B` | Detaljer, CTA, skillelinjer, logo-aksent |
| Gull (lys) | `--gold-400` | `#DCBA6B` | Hover på gull, fine highlights |

Gull brukes **sparsomt** — som edelt aksentmetall, ikke flatefarge. Det er det som
gir eksklusivitetsfølelsen sammen med god luft og typografi.

### Typografi

- **Overskrifter:** en forfinet serif (f.eks. *Cormorant Garamond* eller
  *Playfair Display*) — gir det edle, redaksjonelle preget.
- **Brødtekst:** en ren, lettlest sans (f.eks. *Inter* eller *Source Sans 3*).
- Generøs linjeavstand og marg. Luft er en del av luksusen.

### Hero-bilde

`images/hero.png` (1254×1254) — en vanndråpe med jordkloden speilet, mot dypblått
vann. Brukes på forsiden. Du har lov til å **tilpasse bildet** (beskjæring,
gradient-overlegg mot `--navy-900`, vignett) slik at det glir sømløst inn i
designet. Behold originalen; lag tilpassede varianter ved siden av.

## 3. Teknisk oppsett

- **Rammeverk:** [Astro](https://astro.build) (statisk output).
- **Hosting:** GitHub Pages, custom domene `kurs.aogaa.no`.
- **Deploy:** GitHub Actions bygger Astro og publiserer til Pages.
  Pages-kilden settes til **"GitHub Actions"** (ikke "branch") når vi går live
  med Astro. Inntil da kjører repoet på Jekyll default-tema.
- **CNAME:** legg `kurs.aogaa.no` i `public/CNAME` så domenet bevares i hver
  bygging. Sertifikatet (HTTPS) er allerede utstedt og gyldig.

### Kommandoer

```bash
npm install        # installer avhengigheter
npm run dev        # lokal utviklingsserver
npm run build      # produksjonsbygg til ./dist
npm run preview    # forhåndsvis produksjonsbygg lokalt
```

## 4. Mappestruktur (mål)

```
/
├── CLAUDE.md
├── README.md
├── astro.config.mjs
├── package.json
├── .github/workflows/deploy.yml
├── public/
│   └── CNAME                     # kurs.aogaa.no
├── images/
│   └── hero.png                  # original hero (ikke slett)
└── src/
    ├── assets/                   # bilder som prosesseres av Astro
    ├── styles/
    │   ├── tokens.css            # farger, typografi, spacing
    │   └── global.css
    ├── i18n/
    │   └── ui.ts                 # tekststrenger pr. språk
    ├── components/               # Header, Footer, Hero, CourseCard …
    ├── layouts/
    │   ├── BaseLayout.astro      # felles portal-ramme
    │   └── CourseLayout.astro    # ramme for kursinnhold
    ├── content/
    │   ├── config.ts             # schema for kurs (content collections)
    │   └── courses/              # ett underkatalog/innslag pr. kurs
    └── pages/
        ├── index.astro           # portal-forside (norsk)
        └── en/index.astro        # portal-forside (engelsk)
```

## 5. Språk (i18n)

- **To språk: norsk (bokmål, standard) og engelsk.**
- Norsk er default på rot (`/`), engelsk under `/en/`.
- All synlig UI-tekst hentes fra `src/i18n/ui.ts` — ingen hardkodede strenger i
  komponenter.
- Hvert kurs kan finnes på begge språk; marker språk i kursets frontmatter.

## 6. Slik legger du til et nytt kurs

Et kurs er **selvstendig innhold som plugges inn i portalen**:

1. Opprett en mappe under `src/content/courses/<kurs-slug>/`.
2. Legg til frontmatter (se schema i `src/content/config.ts`) med minst:
   - `title`, `summary`, `slug`, `lang`, `order`
   - `access`: `"free"` | `"paid"` (se §7), og `price` ved behov
   - `cover`: bilde for kurskortet
3. Skriv leksjonene som markdown/MDX i samme mappe.
4. Kurset dukker automatisk opp som et `CourseCard` på forsiden og får egen rute
   via `CourseLayout`. Ikke kopier portal-ramme inn i kurset — den arves.

Mål: å legge til et kurs skal være "ny mappe + frontmatter", ikke kopiering av
layout.

## 7. Betaling / tilgang (fremtidig fase)

**Nå:** alle kurs er gratis og åpne. **Men arkitekturen skal forberede betaling.**

Derfor:
- Hvert kurs har et `access`-felt (`"free"` / `"paid"`) i frontmatter fra dag én.
  Nå er alt `"free"`; ingen gating-logikk implementeres ennå.
- Hold **kursoversikt/metadata** adskilt fra **kursinnhold**, så innhold senere kan
  legges bak en tilgangssjekk uten å rive om portalen.
- GitHub Pages er rent statisk og kan ikke gate innhold alene. Når betaling skal
  innføres blir det en **egen fase** med en ekstern tjeneste (f.eks. betalings-/
  medlemskapsløsning + et lite tilgangslag). Ikke bygg dette nå — bare ikke male
  oss inn i et hjørne som gjør det vanskelig senere.

## 8. Retningslinjer for arbeid

- **Norsk** i brødtekst, UI og denne typen dokumentasjon. Engelsk kun der i18n
  krever det.
- Hold designet **konsekvent**: bruk tokens og felles komponenter; ikke
  introduser nye farger, fonter eller ad-hoc CSS uten grunn.
- **Eksklusivitet over travelhet** — heller mindre innhold med mer luft og
  presisjon enn tette, "salgsaktige" sider.
- Behold portalen rask og lett: statisk, få avhengigheter, optimaliserte bilder.
- Ikke commit/push uten at brukeren ber om det. Jobb på branch ved større endringer.
- Verifiser bygg (`npm run build`) før noe anses som ferdig.

## 9. Status (oppdater etter hvert)

- [x] GitHub Pages aktivt, custom domene + HTTPS-sertifikat + Enforce HTTPS på.
- [x] `images/hero.png` lagt til.
- [x] CLAUDE.md (dette dokumentet).
- [x] Astro scaffoldet, design-tokens (`src/styles/tokens.css`) og felles layout.
- [x] Portal-forside (norsk `/` + engelsk `/en/`) med hero, kurs-seksjon, footer.
- [x] Kurs-arkitektur: content collection + `CourseLayout` + dynamiske ruter.
- [x] GitHub Actions-deploy-workflow (`.github/workflows/deploy.yml`).
- [x] Pages-kilde byttet til "GitHub Actions" — portalen er LIVE på kurs.aogaa.no.
- [ ] Første kurs lagt inn: **Skjenkebevilgning** (kildemateriale ligger i
      `Skjenkebevilgning/kunnskapsbase/`: alkoholloven, alkoholforskriften,
      krav til skjenkebevilgning). Skal bygges som kurs under `src/content/courses/`.
