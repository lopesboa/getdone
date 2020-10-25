import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import backendI18n from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { about, home } from './src/translations';

const option = {
  resources: {
    pt: {
      translation: {},
      about,
      home
    },
  },
  fallbackLng: 'pt',
  lng: 'pt',
  debug: false, //if u want see output error, info or worn in console set it to true
  load: 'languageOnly',
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
};

i18n.use(initReactI18next).use(LanguageDetector).use(backendI18n).init(option);


export default i18n;
