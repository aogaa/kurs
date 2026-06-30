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
      "Det du må lære, gjort enkelt. Vi tar komplekse og nødvendige tema og gjør dem klare, lette og behagelige å forstå.",
    "hero.cta": "Se kursene",
    "courses.eyebrow": "Vårt utvalg",
    "courses.title": "Kurs",
    "courses.empty": "Nye kurs er på vei. Kom tilbake snart.",
    "courses.free": "Gratis",
    "footer.rights": "Alle rettigheter forbeholdt.",
    "course.contents": "Innhold",
    "course.lessons": "Leksjoner",
    "course.lesson": "Leksjon",
    "course.pretest": "Førtest",
    "course.exam": "Prøvesimulering",
    "course.startPretest": "Ta førtesten",
    "course.startExam": "Til prøvesimulering",
    "course.backToCourse": "Til kursoversikt",
    "course.nextLesson": "Neste leksjon",
    "course.prevLesson": "Forrige leksjon",
    "course.miniquiz": "Kontrollspørsmål",
    "course.pretestIntro":
      "En kort test som viser hvor du står. Den teller ikke – den hjelper deg å se hvilke tema du bør følge ekstra med på.",
    "course.examIntro":
      "Full prøvesimulering på tid. Spørsmålene varierer fra gang til gang, så du kan øve så mye du vil.",
    "course.startCourse": "Start kurset",
    "course.continueCourse": "Fortsett der du slapp",
    "course.reviewCourse": "Gå gjennom på nytt",
    "course.progress": "{done} av {total} leksjoner fullført",
    "course.completeNext": "Fullfør og fortsett →",
    "course.completeLast": "Fullfør leksjonen",
    "course.completed": "Fullført",
    "course.examLocked": "Låses opp når kurset er fullført",
    "course.examLockedLong":
      "Prøvesimuleringen åpnes når du har fullført alle leksjonene i kurset. Arbeid deg gjennom leksjonene først – så er du klar til å teste deg på tid.",
  },
  en: {
    "site.name": "Andresen & Aas",
    "site.tagline": "Courses",
    "nav.courses": "Courses",
    "nav.about": "About",
    "hero.eyebrow": "Andresen & Aas",
    "hero.title": "Knowledge, refined.",
    "hero.lead":
      "What you need to know, made simple. We take complex and essential subjects and make them clear, light, and easy to grasp.",
    "hero.cta": "View courses",
    "courses.eyebrow": "Our selection",
    "courses.title": "Courses",
    "courses.empty": "New courses are on their way. Check back soon.",
    "courses.free": "Free",
    "footer.rights": "All rights reserved.",
    "course.contents": "Contents",
    "course.lessons": "Lessons",
    "course.lesson": "Lesson",
    "course.pretest": "Pre-test",
    "course.exam": "Exam simulation",
    "course.startPretest": "Take the pre-test",
    "course.startExam": "Go to exam simulation",
    "course.backToCourse": "Course overview",
    "course.nextLesson": "Next lesson",
    "course.prevLesson": "Previous lesson",
    "course.miniquiz": "Check your understanding",
    "course.pretestIntro":
      "A short test to see where you stand. It does not count – it helps you spot the topics to focus on.",
    "course.examIntro":
      "A full timed exam simulation. The questions vary each time, so you can practise as much as you like.",
    "course.startCourse": "Start the course",
    "course.continueCourse": "Continue where you left off",
    "course.reviewCourse": "Review again",
    "course.progress": "{done} of {total} lessons completed",
    "course.completeNext": "Complete and continue →",
    "course.completeLast": "Complete the lesson",
    "course.completed": "Completed",
    "course.examLocked": "Unlocks when the course is completed",
    "course.examLockedLong":
      "The exam simulation opens once you have completed all lessons in the course. Work through the lessons first – then you are ready for a timed test.",
  },
} as const;

// Etiketter til quiz-/eksamensmotoren (Quiz.astro). Holdt separat fordi det er
// et objekt, ikke flate strenger.
export const quizUi = {
  nb: {
    start: "Start", startExam: "Start prøven", next: "Neste", prev: "Forrige",
    submit: "Lever", check: "Sjekk svar", retry: "Prøv på nytt",
    correct: "Riktig", wrong: "Feil", explanation: "Forklaring",
    question: "Spørsmål", of: "av", score: "Du fikk {n} av {total} riktige.",
    passed: "Bestått", failed: "Ikke bestått",
    passInfo: "{count} spørsmål · {minutes} min · {pass} riktige for å bestå",
    timeLeft: "Tid igjen", timeUp: "Tiden er ute.",
    focusOn: "Følg ekstra med på", reviewTitle: "Gjennomgang",
    unanswered: "Du har ubesvarte spørsmål.",
  },
  en: {
    start: "Start", startExam: "Start the exam", next: "Next", prev: "Previous",
    submit: "Submit", check: "Check answer", retry: "Try again",
    correct: "Correct", wrong: "Wrong", explanation: "Explanation",
    question: "Question", of: "of", score: "You got {n} of {total} correct.",
    passed: "Passed", failed: "Not passed",
    passInfo: "{count} questions · {minutes} min · {pass} correct to pass",
    timeLeft: "Time left", timeUp: "Time is up.",
    focusOn: "Focus on", reviewTitle: "Review",
    unanswered: "You have unanswered questions.",
  },
} as const;

export function quizLabels(lang: Lang) {
  return quizUi[lang] ?? quizUi[defaultLang];
}

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
