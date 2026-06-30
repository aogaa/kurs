import { defineCollection, z } from "astro:content";

// Hvert kurs er selvstendig innhold som plugges inn i portalen.
// `access` finnes fra dag én for å forberede betaling senere (nå: alltid "free").
const courses = defineCollection({
  type: "content",
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
    }),
});

export const collections = { courses };
