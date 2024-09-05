import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en.json';
import fr from './assets/locales/fr.json';

// i18next initialization
i18n
  .use(initReactI18next) // Passes i18n to React
  .init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
    lng: navigator.language.startsWith('fr') ? 'fr' : 'en', // Detect browser language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
