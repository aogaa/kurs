import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/ui";

// Leksjon-id-er har formen "<kurs>/leksjoner/<slug>".
export function lessonCourse(id: string): string {
  return id.split("/")[0];
}
export function lessonSlug(id: string): string {
  return id.split("/").pop() as string;
}

/** Sorterte leksjoner for ett kurs på ett språk. */
export async function getCourseLessons(
  courseSlug: string,
  lang: Lang,
): Promise<CollectionEntry<"lessons">[]> {
  const all = await getCollection("lessons");
  return all
    .filter((l) => lessonCourse(l.id) === courseSlug && l.data.lang === lang)
    .sort((a, b) => a.data.order - b.data.order);
}
