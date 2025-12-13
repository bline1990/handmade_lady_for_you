import en from "../../locales/en.json";
import hr from "../../locales/hr.json";

export const translations = { en, hr };

export function getTranslations(lang) {
  return translations[lang] || translations.en;
}
