# Overleveringsnotat – skjenkebevilgning

Dato: 30. juni 2026  
Branch: `kurs-skjenkebevilgning`  
Siste innholdscommit før dette notatet: `a85ad0f Fullfor skjenkebevilgning fase 2`

Dette notatet er laget for at både Codex og Claude Code raskt skal forstå hva som
er gjort, hva som er kvalitetssikret, og hva som er neste naturlige steg.

## Kort status

Kurset **Kunnskapsprøven i alkoholloven – skjenkebevilling** er bygget videre på
egen branch. Det er ikke merget til `main`, og er derfor ikke publisert live via
GitHub Pages ennå.

Status nå:

- Fase 1: ferdig.
- Fase 2: ferdig – alle ni leksjoner er skrevet.
- Fase 2B: ferdig – alle ni leksjoner er fordypet etter gjennomgang av pensum og
  lov-/forskriftskildene.
- Fase 3: ikke startet – full spørsmålsbank på ca. 120–150 spørsmål gjenstår.
- Fase 4: ikke startet – sluttfinpuss, kurskort/cover og endelig kontroll.

## Viktigste filer som er lagt til eller endret

- `src/content/courses/skjenkebevilgning/leksjoner/01-grunnbegreper-og-alkoholgrupper.md`
- `src/content/courses/skjenkebevilgning/leksjoner/02-bevilling-roller-og-ansvar.md`
- `src/content/courses/skjenkebevilgning/leksjoner/03-skjenking-i-praksis.md`
- `src/content/courses/skjenkebevilgning/leksjoner/04-alder-legitimasjon-mindrearige.md`
- `src/content/courses/skjenkebevilgning/leksjoner/05-apenbart-pavirkede.md`
- `src/content/courses/skjenkebevilgning/leksjoner/06-skjenketider-og-arrangementer.md`
- `src/content/courses/skjenkebevilgning/leksjoner/07-internkontroll.md`
- `src/content/courses/skjenkebevilgning/leksjoner/08-kontroll-prikker-inndragning.md`
- `src/content/courses/skjenkebevilgning/leksjoner/09-reklame-og-saerforbud.md`
- `src/content/courses/skjenkebevilgning/questions.ts`
- `src/layouts/CourseLayout.astro`
- `AGENTS.md`
- `CLAUDE.md`

## Hva som er gjort

### Leksjonene

Alle ni leksjoner finnes nå i `src/content/courses/skjenkebevilgning/leksjoner/`.
Leksjonene følger samme struktur:

- frontmatter med `title`, `order`, `module`, `lang` og `summary`
- `## Læringsmål`
- kjerneinnhold
- `## Fordypning før prøven`
- kort case der det passer
- `## Typiske feil`
- `## Test deg selv`

Fase 2B ble lagt inn fordi første versjon av leksjonene var riktig strukturert,
men for tynn som eksamensforberedelse. Fordypningen dekker blant annet:

- pensumomfanget i alkoholforskriften § 5-4
- alkoholgrupper og grenseverdier
- bevillingshaver, styrer, stedfortreder og kommunens skjønn
- skjenkeareal, medbrakt alkohol og alkohol ut av lokalet
- alderskontroll, legitimasjon og mindreårige
- åpenbart påvirkede personer og bistandsplikt
- skjenketider, enkeltanledning og ambulerende bevilling
- internkontroll, opplæring, avvik og risikokartlegging
- kommunal kontroll, prikker og inndragning
- reklameforbud, nøktern informasjon og særforbud

### Juridisk kvalitetssikring

All juridisk informasjon som ble lagt inn i Fase 2 og Fase 2B er kontrollert mot:

- `Skjenkebevilgning/kunnskapsbase/alkoholloven.md`
- `Skjenkebevilgning/kunnskapsbase/alkoholforskriften.md`

Viktige kontroller som er gjort:

- alkoholgruppene og prosentgrensene er sjekket mot alkoholloven § 1-3
- aldersgrenser er sjekket mot alkoholloven § 1-5 og alkoholforskriften § 2-4
- ansattes alderskrav og opplæringsunntak er sjekket mot alkoholforskriften § 2-3
- skjenketider er sjekket mot alkoholloven § 4-4
- ambulerende bevilling er sjekket mot alkoholloven § 4-5
- skjenkemengde for brennevin er sjekket mot alkoholforskriften § 4-5
- internkontroll er sjekket mot alkoholforskriften kapittel 8
- kontroll og prikksystem er sjekket mot alkoholforskriften kapittel 9 og 10
- reklameforbud og unntak er sjekket mot alkoholloven kapittel 9 og
  alkoholforskriften kapittel 14
- alkohol som premie/gevinst er sjekket mot alkoholloven § 8-6

### Rettede konkrete feil

Det ble rettet en tidligere uklarhet om ambulerende skjenkebevilling:

- Ambulerende bevilling er knyttet til **sluttet selskap**, for eksempel bryllup
  eller jubileum.
- Åpne festivaler passer normalt bedre med bevilling for **en enkelt bestemt
  anledning**, ikke ambulerende bevilling.

Det ble også rettet en uklarhet om alkohol som premie eller gevinst:

- Hovedregelen er at alkohol ikke kan brukes som premie eller gevinst.
- Alkoholloven § 8-6 har et unntak for privat sammenheng.
- Spørsmål og forklaring er justert slik at dette ikke fremstår som selvmotsigende.

### Visuell/teknisk justering

`src/layouts/CourseLayout.astro` er oppdatert med bedre tabellstil for markdown-
tabeller i leksjonene. Dette ble gjort fordi tabeller med to kolonner fikk ujevn
avstand og ble vanskelige å lese.

## Verifisering

`npm run build` er kjørt etter endringene og går grønt.

Under et bygg kom det en gang duplikatvarsler fra Astro content cache. Filsystemet
hadde bare én fil per leksjon. `.astro`-cachen ble slettet og nytt bygg ble kjørt
uten duplikatvarsler.

## Viktige føringer videre

- Ikke merge `kurs-skjenkebevilgning` til `main` før kurset er ferdig.
- All ny juridisk informasjon må fortsatt kontrolleres mot:
  - `Skjenkebevilgning/kunnskapsbase/alkoholloven.md`
  - `Skjenkebevilgning/kunnskapsbase/alkoholforskriften.md`
- Ikke bruk `citeturn...`-artefakter fra researchnotatet i publisert innhold.
- Kursinnholdet skal fortsatt være norsk, rolig og eksklusivt i tonen.
- Modul 10 skal ikke være egen leksjon. Eksamenstrening dekkes av prøvesimulatoren.

## Neste anbefalte oppgave

Neste fase er **Fase 3 – full spørsmålsbank**.

Anbefalt arbeidsmåte:

1. Lag spørsmål i godkjenningsbolker, for eksempel 20–30 spørsmål av gangen.
2. Merk hvert spørsmål med modul, vanskelighetsgrad og vekt.
3. Kontroller alle fasiter og forklaringer mot `alkoholloven.md` og
   `alkoholforskriften.md`.
4. Hold ekstra vekt på temaer som ofte gir feil:
   - alkoholgrupper og aldersgrenser
   - åpenbart påvirkede personer
   - skjenketider
   - ambulerende bevilling vs. enkeltanledning
   - internkontroll
   - prikker og inndragning
   - reklameforbud og særforbud

Målet for Fase 3 er ca. 120–150 flervalgsspørsmål. Eksamen skal trekke 30
spørsmål tema-vektet når banken er stor nok.
