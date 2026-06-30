import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Hvert kurs er selvstendig innhold som plugges inn i portalen.
// `access` finnes fra dag én for å forberede betaling senere (nå: alltid "free").
//
// Et kurs består av:
//   src/content/courses/<slug>/index.md          -> kursets metadata + intro (denne collection)
//   src/content/courses/<slug>/leksjoner/*.md     -> leksjonene (lessons-collection)
//   src/content/courses/<slug>/questions.ts       -> spørsmålsbank (importeres, ikke en collection)
const courses = defineCollection({
  loader: glob({
    pattern: "*/index.md",
    base: "./src/content/courses",
    // Gjør id-en til ren kurs-slug: "skjenkebevilgning/index" -> "skjenkebevilgning"
    generateId: ({ entry }) => entry.replace(/\/index\.mdx?$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      lang: z.enum(["nb", "en"]).default("nb"),
      order: z.number().default(0),
      access: z.enum(["free", "paid"]).default("free"),
      price: z.number().optional(),
      cover: image().optional(),
      draft: z.boolean().default(false),

      // Valgfri kurs-metadata (vises på kursforsiden)
      level: z.string().optional(),
      duration: z.string().optional(),

      // Interaktive elementer — slått av som standard, slås på per kurs.
      hasPretest: z.boolean().default(false),
      hasExam: z.boolean().default(false),

      // Eksamenskonfigurasjon (brukes når hasExam = true)
      examCount: z.number().default(30),
      examPassMark: z.number().default(24),
      examMinutes: z.number().default(60),
      pretestCount: z.number().default(15),

      // Liten ansvarsfraskrivelse vises nederst (f.eks. "øvelse, ikke offisiell prøve").
      disclaimer: z.string().optional(),
    }),
});

// Leksjoner ligger under hvert kurs i en leksjoner/-mappe.
// id blir f.eks. "skjenkebevilgning/leksjoner/01-grunnbegreper".
const lessons = defineCollection({
  loader: glob({
    pattern: "*/leksjoner/*.{md,mdx}",
    base: "./src/content/courses",
  }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
    lang: z.enum(["nb", "en"]).default("nb"),
    summary: z.string().optional(),
    // Hvilken modul i pensum denne leksjonen dekker (brukes til å hente mini-quiz).
    module: z.number().optional(),
  }),
});

export const collections = { courses, lessons };
