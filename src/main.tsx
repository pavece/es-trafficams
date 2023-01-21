import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import esGlobal from "./translations/es/global.json";
import enGlobal from "./translations/en/global.json";

i18next.init({
  lng: "es",
  resources: {
    en: {
      global: enGlobal,
    },
    es: {
      global: esGlobal,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
