const mockOptions = {
  mockuppercase: true,
  mocklowercase: true,
  mocknumbers: true,
  mocksymbols: true,
};

import {
  renderButton,
  renderCheckbox,
  renderStrengthDisplay,
  renderPasswordDisplay,
  renderSlider,
} from "../components";
import { generatePassword } from "../lib/password";

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
  // resultContainer.appendChild(
  //   renderPasswordDisplay(generatePassword(5, mockOptions)),
  // );

  const formContainer = document.createElement("section");
  formContainer.className = "flex flex-col gap-8 pt-4 bg-fem-grey-800 mt-4 p-4";

  const passwordOptionsFieldset = document.createElement("fieldset");
  passwordOptionsFieldset.className = "flex flex-col gap-4";

  const upperCaseCheckbox = renderCheckbox("Include Uppercase Letters");
  const lowerCaseCheckbox = renderCheckbox("Include Lowercase Letters");
  const numbersCheckbox = renderCheckbox("Include Numbers Letters");
  const symbolsCheckbox = renderCheckbox("Include Symbols Letters");

  passwordOptionsFieldset.appendChild(upperCaseCheckbox);
  passwordOptionsFieldset.appendChild(lowerCaseCheckbox);
  passwordOptionsFieldset.appendChild(numbersCheckbox);
  passwordOptionsFieldset.appendChild(symbolsCheckbox);

  formContainer.appendChild(renderSlider());
  formContainer.appendChild(passwordOptionsFieldset);

  const footer = document.createElement("div");
  footer.className = "flex flex-col gap-4";

  footer.appendChild(renderStrengthDisplay("medium"));
  footer.appendChild(renderButton("Generate"));

  main.appendChild(h1);
  main.appendChild(resultContainer);
  main.appendChild(formContainer);
  formContainer.appendChild(footer);

  return main;
}
