import "./style.css";

import { renderPasswordGeneratorPage } from "./pages/password-generator-page";

function renderApp() {
  return renderPasswordGeneratorPage();
}

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.replaceChildren(renderApp());
}
