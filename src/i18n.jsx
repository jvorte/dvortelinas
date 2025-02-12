import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from '@locales/en/translation.json';
import deTranslation from '@locales/de/translation.json';


i18n
  .use(LanguageDetector) // Για ανίχνευση γλώσσας του χρήστη
  .use(initReactI18next) // Για την ενσωμάτωση με React
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      de: {
        translation: deTranslation
      }
    },
    fallbackLng: 'en', // Αν η γλώσσα δεν υποστηρίζεται, να επιστρέφει στα Αγγλικά
    interpolation: {
      escapeValue: false // Αν δεν χρειάζεται να αποφεύγεις XSS
    }
  });

export default i18n;
