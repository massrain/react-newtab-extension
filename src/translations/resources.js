import locales_en from "./locales/en.json";
import locales_tr from './locales/tr.json';

/* fetch("/locales/tr.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    trdata = data;
  });
 */
export const resources = {
  en: {
    translation: locales_en
  },

  tr: {
    translation: locales_tr
  }
};
