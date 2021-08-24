import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_ES } from "./es/translation";
import { TRANSLATIONS_ARAB } from "./arab/translation";
import { TRANSLATIONS_ZH } from "./zh/translation";
import { TRANSLATIONS_EN } from "./en/translation";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: TRANSLATIONS_ES
      },
      arab: {
        translation: TRANSLATIONS_ARAB
      },
      en: {
        translation: TRANSLATIONS_EN
      },
      zh: {
        translation: TRANSLATIONS_ZH
      }
    }
  });


