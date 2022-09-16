import { initReactI18next } from 'react-i18next';
import translationEN from "./Languages/en/translation.json";
import translationAr from "./Languages/ar/translation.json";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';

const languages=['en','ar'];

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAr
  }
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    whitelist:languages,
    interpolation: {
      escapeValue: false, 
    }
  });
export default i18n;