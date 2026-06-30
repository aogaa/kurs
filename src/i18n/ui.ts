// Sentrale tekststrenger pr. språk. Ingen hardkodede strenger i komponenter.

export const languages = {
  nb: "Norsk",
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "nb";

export const ui = {
  nb: {
    "site.name": "Andresen & Aas",
    "site.tagline": "Kurs",
    "nav.courses": "Kurs",
    "nav.about": "Om oss",
    "hero.eyebrow": "Andresen & Aas",
    "hero.title": "Kunnskap, foredlet.",
    "hero.lead":
      "En samling kurs utviklet med omhu — for deg som vil lære på dypet, ikke på overflaten.",
    "hero.cta": "Se kursene",
    "courses.eyebrow": "Vårt utvalg",
    "courses.title": "Kurs",
    "courses.empty": "Nye kurs er på vei. Kom tilbake snart.",
    "courses.free": "Gratis",
    "footer.rights": "Alle rettigheter forbeholdt.",
  },
  en: {
    "site.name": "Andresen & Aas",
    "site.tagline": "Courses",
    "nav.courses": "Courses",
    "nav.about": "About",
    "hero.eyebrow": "Andresen & Aas",
    "hero.title": "Knowledge, refined.",
    "hero.lead":
      "A collection of courses crafted with care — for those who want to learn in depth, not at the surface.",
    "hero.cta": "View courses",
    "courses.eyebrow": "Our selection",
    "courses.title": "Courses",
    "courses.empty": "New courses are on their way. Check back soon.",
    "courses.free": "Free",
    "footer.rights": "All rights reserved.",
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)["nb"]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// Bygg en språk-prefiks-sti: nb -> "", en -> "/en"
export function localePath(lang: Lang, path = ""): string {
  const clean = path.replace(/^\//, "");
  const base = lang === defaultLang ? "" : `/${lang}`;
  return `${base}/${clean}`.replace(/\/$/, "") || "/";
}
