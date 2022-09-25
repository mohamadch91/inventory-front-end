import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import axios from "axios";

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
    localePath: "http://127.0.0.1:8000/media/{{lng}}/{{ns}}.json",
    backend: {
      loadPath: "http://127.0.0.1:8000/languages/{{ns}}?name={{lng}}",
      addPath: null,
      // request: async (options, url, payload, callback) => {
      //   try {
      //     const translation = await axios.get(url);
      //     console.log(translation);
      //     callback({
      //       status: 200,
      //       data: JSON.stringify(translation.data),
      //     });
      //   } catch (e) {
      //     callback(e);
      //   }
      // },
      crossDomain: true,
      withCredentials: true,
      requestOptions: {
        cache: "no-store",
      },
    },
  });

export default i18n;
