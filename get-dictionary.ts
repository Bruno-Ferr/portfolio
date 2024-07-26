import type { Locale } from "./i18n.config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./messages/en.json").then((module) => module.default),
  EN: () => import("./messages/en.json").then((module) => module.default),
  es: () => import("./messages/es.json").then((module) => module.default),
  ES: () => import("./messages/es.json").then((module) => module.default),
  pt: () => import("./messages/pt.json").then((module) => module.default),
  PT: () => import("./messages/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
 dictionaries[locale]?.() ?? dictionaries.en();