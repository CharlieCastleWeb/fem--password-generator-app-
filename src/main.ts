import "./style.css";

import {
  renderFemButton,
  renderFemCheckbox,
  renderFemStrengthDisplay,
} from "./components";

function renderApp() {
  return `
    <main class="bg-fem-grey-850 h-screen">
      ${renderFemButton("Click me!")}
      ${renderFemCheckbox("prueba")}
      ${renderFemStrengthDisplay("strengthh", "wakkk")}
    </main>
  `;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = renderApp();
