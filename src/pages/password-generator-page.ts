import {
  renderButton,
  renderCheckbox,
  renderStrengthDisplay,
  renderPasswordDisplay,
  renderSlider,
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

  const resultContainer = document.createElement("section");
  resultContainer.className = "flex flex-col gap-4 pt-4";
  resultContainer.appendChild(renderPasswordDisplay("Prueba"));

  const formContainer = document.createElement("section");
  formContainer.className = "flex flex-col gap-4 pt-4 bg-fem-grey-800 mt-4";
  formContainer.appendChild(renderSlider());

  main.appendChild(h1);
  main.appendChild(resultContainer);
  main.appendChild(formContainer);

  return main;
}
