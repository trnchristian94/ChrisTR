import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import common_es from "src/i18n/es/common.json";
import common_en from "src/i18n/en/common.json";
import common_fr from "src/i18n/fr/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: common_en
      },
      es: {
        translation: common_es
      },
      fr: {
        translation: common_fr
      }
    },
    lng: "es",
    fallbackLng: "es",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
