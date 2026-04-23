import {
  renderButton,
  renderCheckbox,
  renderStrengthDisplay,
  renderPasswordDisplay,
} from "../components";

export function renderPasswordGeneratorPage(): HTMLElement {
  const app = document.getElementById("app");
  app!.className =
    "bg-fem-grey-950 p-4 flex items-center justtify-center h-screen";

  const main = document.createElement("main");
  main.className = "w-full";

  const h1 = document.createElement("h1");
  h1.className = "text-preset-4 text-fem-grey-600 text-center";
  h1.textContent = "Password Generator";

  const panelsContainer = document.createElement("section");
  panelsContainer.className = "flex flex-col gap-4 pt-4";
  panelsContainer.appendChild(renderPasswordDisplay("Prueba"));

  main.appendChild(h1);
  main.appendChild(panelsContainer);

  return main;
}
