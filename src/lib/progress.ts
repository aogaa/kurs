// Lokal fremdrift i nettleseren (localStorage). Ingen innlogging – dette er
// bevisst lett og kan byttes ut med en konto-/serverløsning i en senere fase.

const key = (courseSlug: string) => `aa:course:${courseSlug}:completed`;

export function getCompleted(courseSlug: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(key(courseSlug)) || "[]");
  } catch {
    return [];
  }
}

export function markCompleted(courseSlug: string, lesson: string): void {
  try {
    const set = new Set(getCompleted(courseSlug));
    set.add(lesson);
    localStorage.setItem(key(courseSlug), JSON.stringify([...set]));
  } catch {
    /* localStorage utilgjengelig – fremdrift spores bare ikke */
  }
}

export function allCompleted(courseSlug: string, lessons: string[]): boolean {
  if (!lessons.length) return false;
  const done = new Set(getCompleted(courseSlug));
  return lessons.every((l) => done.has(l));
}
