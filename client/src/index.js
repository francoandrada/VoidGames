import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";
import global_es from "./traslations/ES/global.json";
import global_en from "./traslations/EN/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>,
  document.getElementById("root")
);
