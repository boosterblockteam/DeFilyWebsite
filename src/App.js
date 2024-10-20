import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./styles/index.scss";
import Layout from "./components/Layout";

// importaciones para el cambio de idioma
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import esTranslation from "./i18n/es.json";
import enTranslation from "./i18n/en.json";
import arTranslation from "./i18n/ar.json";
import ruTranslation from "./i18n/ru.json";
import zhTranslation from "./i18n/zh.json";


/** Configuracion del cambio de idioma */
let getLanguageStore = localStorage.getItem("language")

i18next.init({
  interpolation: { escapeValue: false },
  lng: getLanguageStore,
  fallbackLng: "es",
  resources: {
    es: {
      translation: esTranslation,
    },
    en: {
      translation: enTranslation,
    },
    ru: {
      translation: ruTranslation
    },
    zh: {
      translation: zhTranslation
    },
    ar: {
      translation: arTranslation
    }
  },
});

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18next}>
        <Layout />
      </I18nextProvider>
    </div>
  );
}

export default App;
