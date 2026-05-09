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
import { getPasswordStrengthLevel } from "../components/strengthDisplay";
import { generatePassword, validatePasswordConfig } from "../lib/password";

import {
  getPasswordGeneratorState,
  updatePasswordGeneratorState,
} from "./password-generator-state";

let passwordGeneratorState = getPasswordGeneratorState();

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

  resultContainer.appendChild(
    renderPasswordDisplay(generatePassword(passwordGeneratorState)),
  );

  const formContainer = document.createElement("section");
  formContainer.className = "flex flex-col gap-8 pt-4 bg-fem-grey-800 mt-4 p-4";

  const passwordOptionsFieldset = document.createElement("fieldset");
  passwordOptionsFieldset.className = "flex flex-col gap-4";

  const characterLengthSlider = renderSlider(
    passwordGeneratorState.characterLength,
    (value) => {
      updatePasswordGeneratorState({
        characterLength: value,
      });
      passwordGeneratorState = getPasswordGeneratorState();
      console.log(passwordGeneratorState);
    },
  );

  formContainer.appendChild(characterLengthSlider);

  const upperCaseCheckbox = renderCheckbox(
    passwordGeneratorState.includeUppercase,
    "Include Uppercase Letters",
    (checked) => {
      updatePasswordGeneratorState({
        includeUppercase: checked,
      });
      passwordGeneratorState = getPasswordGeneratorState();
      updateGenerateButtonState();
      console.log(passwordGeneratorState);
    },
  );
  const lowerCaseCheckbox = renderCheckbox(
    passwordGeneratorState.includeLowercase,
    "Include Lowercase Letters",
    (checked) => {
      updatePasswordGeneratorState({
        includeLowercase: checked,
      });
      passwordGeneratorState = getPasswordGeneratorState();
      updateGenerateButtonState();
      console.log(passwordGeneratorState);
    },
  );
  const numbersCheckbox = renderCheckbox(
    passwordGeneratorState.includeNumbers,
    "Include Numbers",
    (checked) => {
      updatePasswordGeneratorState({
        includeNumbers: checked,
      });
      passwordGeneratorState = getPasswordGeneratorState();
      updateGenerateButtonState();
      console.log(passwordGeneratorState);
    },
  );
  const symbolsCheckbox = renderCheckbox(
    passwordGeneratorState.includeSymbols,
    "Include Symbols",
    (checked) => {
      updatePasswordGeneratorState({
        includeSymbols: checked,
      });
      passwordGeneratorState = getPasswordGeneratorState();
      updateGenerateButtonState();
      console.log(passwordGeneratorState);
    },
  );

  passwordOptionsFieldset.appendChild(upperCaseCheckbox);
  passwordOptionsFieldset.appendChild(lowerCaseCheckbox);
  passwordOptionsFieldset.appendChild(numbersCheckbox);
  passwordOptionsFieldset.appendChild(symbolsCheckbox);

  formContainer.appendChild(passwordOptionsFieldset);

  const footer = document.createElement("div");
  footer.className = "flex flex-col gap-4";

  const passwordStrength = getPasswordStrengthLevel(
    getPasswordGeneratorState(),
  );

  const strengthDisplayContainer = document.createElement("div");
  strengthDisplayContainer.appendChild(renderStrengthDisplay(passwordStrength));
  footer.appendChild(strengthDisplayContainer);

  const generateButton = renderButton("Generate");

  function updateGenerateButtonState(): void {
    const currentState = getPasswordGeneratorState();
    const disabled = validatePasswordConfig(currentState);
    console.log(!disabled);

    generateButton.disabled = !disabled;
  }

  generateButton.addEventListener("click", () => {
    const newPassword = renderPasswordDisplay(
      generatePassword(passwordGeneratorState),
    );
    resultContainer.replaceChildren(newPassword);
    const newStrengthDisplay = renderStrengthDisplay(
      getPasswordStrengthLevel(passwordGeneratorState),
    );
    strengthDisplayContainer.replaceChildren(newStrengthDisplay);
  });
  footer.appendChild(generateButton);

  main.appendChild(h1);
  main.appendChild(resultContainer);
  main.appendChild(formContainer);
  formContainer.appendChild(footer);

  return main;
}
