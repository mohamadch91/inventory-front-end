import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(HttpApi)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    supportedLngs: ["en", "ar", "ru", "fa", "fr", "es"],
    backend: {
      loadPath: "http://5.182.47.38:8001/media/{{lng}}/{{ns}}.json",
      addPath: null,
      crossDomain: true,
      requestOptions: {
        cache: "no-store",
      },
    },
    debug: true,
  });

export default i18n;
