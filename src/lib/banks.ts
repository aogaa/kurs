import type { Question } from "./quiz";
import { questions as skjenkebevilgning } from "../content/courses/skjenkebevilgning/questions";

// Register hvert kurs som har en spørsmålsbank her, keyet på kurs-slug.
// Nytt kurs med quiz = legg til én linje.
export const banks: Record<string, Question[]> = {
  skjenkebevilgning,
};

export function getBank(courseSlug: string): Question[] {
  return banks[courseSlug] ?? [];
}

/** Spørsmål for én modul (mini-quiz på leksjonssiden). */
export function getModuleQuestions(courseSlug: string, module: number): Question[] {
  return getBank(courseSlug).filter((q) => q.module === module);
}
