import type { Question } from "../../../lib/quiz";

// Spørsmålsbank for «Kunnskapsprøven i alkoholloven – skjenkebevilling».
//
// FASE 1: representativt utvalg for å verifisere quiz-/eksamensmotoren.
// FASE 3: utvides til ~120–150 spørsmål, tema-vektet, til godkjenning.
//
// Felt: module (1–9), weight (high|med|low = pensumvekt), correct = indeks i options.
// Øvingsspørsmål — ikke gjengivelse av den offisielle prøven.

export const questions: Question[] = [
  // --- Modul 1: Formål, alkoholgrupper og grunnbegreper ---
  {
    id: "m1-grupper-ol47",
    module: 1,
    topic: "Alkoholgrupper",
    weight: "high",
    question: "Hvilken alkoholgruppe tilhører en øl på 4,7 volumprosent?",
    options: ["Alkoholsvak drikk", "Gruppe 1", "Gruppe 2", "Gruppe 3"],
    correct: 1,
    explanation:
      "Gruppe 1 er drikk over 2,5 og til og med 4,7 volumprosent. 4,7 % ligger akkurat på den øvre grensen og er derfor gruppe 1.",
    ref: "Alkoholloven § 1-3",
  },
  {
    id: "m1-grupper-likor22",
    module: 1,
    topic: "Alkoholgrupper",
    weight: "high",
    question: "En likør har nøyaktig 22 volumprosent. Hvilken gruppe er dette?",
    options: ["Gruppe 1", "Gruppe 2", "Gruppe 3"],
    correct: 2,
    explanation:
      "Gruppe 3 er fra og med 22 til og med 60 volumprosent. 22 % regnes med i gruppe 3, ikke gruppe 2 (som er under 22 %).",
    ref: "Alkoholloven § 1-3",
  },
  {
    id: "m1-salg-vs-skjenking",
    module: 1,
    topic: "Salg vs. skjenking",
    weight: "high",
    question: "Hva er forskjellen på salg og skjenking?",
    options: [
      "Salg er til mindreårige, skjenking er til voksne",
      "Salg er for drikking utenfor stedet, skjenking er for drikking på stedet",
      "Salg gjelder bare butikk, skjenking gjelder bare Vinmonopolet",
      "Det er ingen rettslig forskjell",
    ],
    correct: 1,
    explanation:
      "Salg er overdragelse for drikking utenfor salgsstedet. Skjenking er salg for drikking på stedet. Skillet avgjør hvilke regler som gjelder.",
    ref: "Alkoholloven § 1-4",
  },

  // --- Modul 2: Bevillingssystemet, roller og ansvar ---
  {
    id: "m2-prove-ikke-rett",
    module: 2,
    topic: "Bevilling",
    weight: "med",
    question: "Gir bestått kunnskapsprøve alene rett til skjenkebevilling?",
    options: [
      "Ja, prøven er det eneste vilkåret",
      "Nei, kommunen kan likevel avslå etter en skjønnsmessig vurdering",
      "Ja, så lenge lokalet er godkjent",
    ],
    correct: 1,
    explanation:
      "Bestått prøve er et krav, men ikke tilstrekkelig. Kommunen kan blant annet legge vekt på beliggenhet, ordensforhold og vandel og kan avslå selv om formkravene er oppfylt.",
    ref: "Alkoholloven §§ 1-7, 1-7a",
  },
  {
    id: "m2-styrer-fravaer",
    module: 2,
    topic: "Styrer og stedfortreder",
    weight: "med",
    question: "Hvem har ansvaret for skjenkingen når styrer ikke er til stede?",
    options: ["Bevillingshaver personlig", "Stedfortrederen", "En hvilken som helst ansatt over 18 år"],
    correct: 1,
    explanation:
      "Stedfortrederen trer inn og har samme plikter som styrer når styrer er fraværende. Derfor må også stedfortreder ha bestått kunnskapsprøven.",
    ref: "Alkoholloven § 1-7c",
  },

  // --- Modul 3: Skjenking i praksis ---
  {
    id: "m3-ta-med-ut",
    module: 3,
    topic: "Alkohol ut av lokalet",
    weight: "high",
    question: "Kan en gjest ta med seg et glass skjenket vin ut av det godkjente skjenkearealet?",
    options: [
      "Ja, så lenge gjesten har betalt for det",
      "Nei, skjenket alkohol kan ikke tas med ut av skjenkeområdet",
      "Ja, hvis gjesten bare skal røyke",
    ],
    correct: 1,
    explanation:
      "Gjester kan bare nyte skjenket alkohol innenfor det godkjente skjenkearealet. Å ta den med ut er ikke tillatt, uavhengig av betaling.",
    ref: "Alkoholforskriften § 4-1",
  },
  {
    id: "m3-brennevin-mengde",
    module: 3,
    topic: "Skjenkemengde",
    weight: "low",
    question: "I hvilke mengder kan brennevin skjenkes?",
    options: ["Kun 2 cl", "2 cl og 4 cl, med unntak for cocktails", "Fritt valgfri mengde"],
    correct: 1,
    explanation:
      "Brennevin kan bare skjenkes i mengder på 2 cl og 4 cl. Unntaket er cocktails, der mengden følger av oppskriften.",
    ref: "Alkoholforskriften § 4-5",
  },

  // --- Modul 4: Alder, legitimasjon og mindreårige ---
  {
    id: "m4-19-gruppe3",
    module: 4,
    topic: "Aldersgrenser",
    weight: "high",
    question: "Kan en 19-åring få servert brennevin (gruppe 3)?",
    options: ["Ja, aldersgrensen er 18 år", "Nei, gruppe 3 krever 20 år", "Ja, hvis en voksen bestiller"],
    correct: 1,
    explanation:
      "Aldersgrensen for gruppe 3 er 20 år. En 19-åring kan få gruppe 1 og 2, men ikke gruppe 3 — heller ikke om en annen bestiller.",
    ref: "Alkoholloven § 1-5",
  },
  {
    id: "m4-foreldre-samtykke",
    module: 4,
    topic: "Mindreårige",
    weight: "high",
    question:
      "En 17-åring sitter med foreldrene. Faren sier det er greit at sønnen smaker på ølen hans. Hva gjelder?",
    options: [
      "Det er greit fordi foreldrene samtykker",
      "Det er ikke lov; personalet må gripe inn selv om foreldrene samtykker",
      "Det er greit så lenge det bare er smaksprøver",
    ],
    correct: 1,
    explanation:
      "Foreldres samtykke gjør det ikke lovlig. Skjenkestedet må påse at mindreårige ikke drikker alkohol som er skjenket til andre.",
    ref: "Alkoholloven §§ 1-5, 8-11",
  },

  // --- Modul 5: Åpenbart påvirkede personer ---
  {
    id: "m5-bord-en-pavirket",
    module: 5,
    topic: "Åpenbart påvirket",
    weight: "high",
    question:
      "Fire personer sitter sammen. Én er åpenbart påvirket. De tre andre bestiller mer øl. Hva er riktig?",
    options: [
      "De tre andre kan få øl, bare ikke den påvirkede",
      "Ingen ved bordet kan få servering før den påvirkede personen har forlatt stedet",
      "Alle fire kan få øl så lenge den påvirkede ikke drikker mer",
    ],
    correct: 1,
    explanation:
      "Når én ved bordet er åpenbart påvirket, skal det ikke serveres alkohol til noen i følget før den påvirkede er fjernet. Det er en klassisk eksamensfelle.",
    ref: "Alkoholloven § 8-11",
  },
  {
    id: "m5-adgang",
    module: 5,
    topic: "Åpenbart påvirket",
    weight: "med",
    question: "Skal en åpenbart påvirket person gis adgang til skjenkestedet?",
    options: [
      "Ja, hvis personen lover å ikke drikke mer",
      "Nei, og er personen allerede inne skal bevillingshaver sørge for at vedkommende forlater stedet",
      "Ja, men bare i følge med edru personer",
    ],
    correct: 1,
    explanation:
      "Åpenbart påvirkede personer skal ikke gis adgang. Er de allerede inne, skal de forlate stedet og få nødvendig bistand (bistandsplikt).",
    ref: "Alkoholloven § 8-11",
  },

  // --- Modul 6: Skjenketider, steder og arrangementer ---
  {
    id: "m6-30-min",
    module: 6,
    topic: "Skjenketider",
    weight: "high",
    question: "Skjenketiden er over kl. 02.00. Hvor lenge kan gjestene konsumere alkoholen sin?",
    options: [
      "Så lenge de vil, så lenge den ble skjenket før 02.00",
      "Konsum må opphøre senest 30 minutter etter skjenketidens utløp",
      "I inntil to timer etter skjenketid",
    ],
    correct: 1,
    explanation:
      "Konsum av utskjenket alkohol må opphøre senest 30 minutter etter skjenketidens slutt — her altså kl. 02.30.",
    ref: "Alkoholloven § 4-4",
  },
  {
    id: "m6-ambulerende",
    module: 6,
    topic: "Arrangementer",
    weight: "low",
    question: "Hvilken situasjon passer best med en ambulerende skjenkebevilling?",
    options: [
      "Et åpent festivalarrangement",
      "Skjenking til deltakere i sluttet selskap, som bryllup eller jubileum",
      "Fast restaurantdrift på et ordinært skjenkested",
    ],
    correct: 1,
    explanation:
      "Ambulerende bevilling kan brukes for skjenking til deltakere i sluttet selskap. Åpne festivalarrangementer bruker normalt bevilling for en enkelt bestemt anledning, ikke ambulerende bevilling.",
    ref: "Alkoholloven § 4-5",
  },

  // --- Modul 7: Internkontroll ---
  {
    id: "m7-hva-er",
    module: 7,
    topic: "Internkontroll",
    weight: "med",
    question: "Hva er internkontroll etter alkoholregelverket?",
    options: [
      "Kommunens kontroll av skjenkestedet",
      "Systematiske tiltak som sikrer at driften skjer i samsvar med bevilling, lov og forskrift",
      "Politiets tilsyn med ro og orden",
    ],
    correct: 1,
    explanation:
      "Internkontroll er virksomhetens egne systematiske tiltak, tilpasset stedet, og skal være dokumentert og tilgjengelig for kontrollmyndigheten.",
    ref: "Alkoholforskriften kap. 8",
  },

  // --- Modul 8: Kontroll, prikker og inndragning ---
  {
    id: "m8-12-prikker",
    module: 8,
    topic: "Prikksystemet",
    weight: "high",
    question: "Hva skjer som hovedregel når en bevillingshaver får 12 prikker i løpet av to år?",
    options: [
      "Advarsel uten reaksjon",
      "Bevillingen inndras i én uke",
      "Bevillingen inndras permanent",
    ],
    correct: 1,
    explanation:
      "12 prikker innenfor to år gir som standard inndragning i én uke. Flere prikker gir lengre inndragning.",
    ref: "Alkoholforskriften § 10-3",
  },
  {
    id: "m8-kontrollorer",
    module: 8,
    topic: "Kommunal kontroll",
    weight: "med",
    question: "Hvor mange kontrollører skal som hovedregel gjennomføre en kontroll av et skjenkested?",
    options: ["Minst én", "Minst to", "Minst tre"],
    correct: 1,
    explanation:
      "Kontroll av skjenkesteder skal gjennomføres av minst to kontrollører. Kontrollen kan være åpen eller anonym.",
    ref: "Alkoholforskriften § 9-5",
  },

  // --- Modul 9: Reklameforbud og særskilte forbud ---
  {
    id: "m9-hovedregel",
    module: 9,
    topic: "Reklameforbud",
    weight: "med",
    question: "Hva er hovedregelen om reklame for alkoholholdig drikk?",
    options: [
      "Reklame er tillatt så lenge prisen ikke nevnes",
      "Reklame for alkoholholdig drikk er forbudt",
      "Reklame er tillatt i sosiale medier",
    ],
    correct: 1,
    explanation:
      "Hovedregelen er at reklame for alkoholholdig drikk er forbudt. Forbudet er vidt og medienøytralt, også for sosiale medier.",
    ref: "Alkoholloven § 9-2",
  },
  {
    id: "m9-premie",
    module: 9,
    topic: "Særskilte forbud",
    weight: "low",
    question: "Hva er hovedregelen om alkohol som premie eller gevinst utenfor privat sammenheng?",
    options: [
      "Det er tillatt hvis premien ikke selges",
      "Det er forbudt å bruke alkohol som premie eller gevinst",
      "Det er alltid tillatt når arrangementet er lukket",
    ],
    correct: 1,
    explanation:
      "Hovedregelen er at alkohol ikke kan brukes som premie eller gevinst. Alkoholloven gjør unntak for bruk i privat sammenheng, men at premien ikke selges er ikke nok i seg selv.",
    ref: "Alkoholloven § 8-6",
  },
];

export default questions;
