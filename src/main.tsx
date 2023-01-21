import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import esGlobal from "./translations/es/global.json";
import enGlobal from "./translations/en/global.json";

import Index from "./pages";
import About from "./pages/About";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

i18next.init({
  lng: localStorage.getItem("lang") || navigator.language.split("-")[0],
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
      <RouterProvider router={router} />
    </React.StrictMode>
  </I18nextProvider>
);
