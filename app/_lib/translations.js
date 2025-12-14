import en from "../../locales/en.json";
import hr from "../../locales/hr.json";

export const translations = { hr, en };

export function getTranslations(lang) {
  return translations[lang] || translations.en;
}
