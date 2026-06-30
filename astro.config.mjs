// @ts-check
import { defineConfig } from "astro/config";

// Andresen & Aas kursportal — https://kurs.aogaa.no
export default defineConfig({
  site: "https://kurs.aogaa.no",
  i18n: {
    locales: ["nb", "en"],
    defaultLocale: "nb",
    routing: {
      // Norsk ligger på rot (/), engelsk under /en/
      prefixDefaultLocale: false,
    },
  },
});
