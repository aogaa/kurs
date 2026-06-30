// Delt type og hjelpefunksjoner for quiz/eksamen.
// Spørsmålsbanken for hvert kurs ligger i kursets egen mappe (questions.ts)
// og registreres i `banks` nedenfor.

export type Weight = "high" | "med" | "low";

export interface Question {
  /** Unik, stabil id (brukes til nøkler og sporing). */
  id: string;
  /** Modulnummer (1–9). Knytter spørsmålet til en leksjon for mini-quiz. */
  module: number;
  /** Kort emne-tag, vises i tilbakemelding/oppsummering. */
  topic: string;
  /** Pensumvekt — styrer hvor ofte spørsmålet trekkes til eksamen. */
  weight: Weight;
  /** Selve spørsmålet. */
  question: string;
  /** 3–4 svaralternativer. */
  options: string[];
  /** Indeks (0-basert) til riktig alternativ i `options`. */
  correct: number;
  /** Kort forklaring som vises etter svar. */
  explanation: string;
  /** Hjemmel, f.eks. "Alkoholloven § 1-3". */
  ref?: string;
}

export type QuizMode = "exam" | "practice" | "pretest";
