import i18n from "i18next";
import Fetch from "i18next-fetch-backend";
import { initReactI18next } from "react-i18next";

//import { resources } from "./resources.js";
// the translations
// (tip move them in a JSON file and import them)
/* i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "tr",
    //keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  }); */
i18n
  .use(Fetch)
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    lng: "tr",
    //keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      useSuspense: true
    },
    backend: {
      loadPath: "/locales/{{lng}}.json",
      addPath: "/locales/{{lng}}",
      init: {
        mode: "no-cors",
        credentials: "include",
        cache: "default"
      }
    }
  });
export default i18n;
