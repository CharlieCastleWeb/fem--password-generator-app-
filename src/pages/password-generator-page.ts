import {
  renderButton,
  renderCheckbox,
  renderStrengthDisplay,
  renderPasswordDisplay,
  renderSlider,
} from "../components";
import {
  getPasswordStrengthLevel,
  type PasswordStrengthLevel,
} from "../components/strengthDisplay";
import { generatePassword, validatePasswordConfig } from "../lib/password";
import iconArrowRight from "/assets/icons/icon-arrow-right.svg?raw";
import {
  getPasswordGeneratorState,
  updatePasswordGeneratorState,
} from "./password-generator-state";

export function renderPasswordGeneratorPage(): HTMLElement {
  const main = document.createElement("main");
  main.className = "w-full max-w-135";

  const h1 = document.createElement("h1");
  h1.className = "text-preset-4 text-fem-grey-600 text-center";
  h1.textContent = "Password Generator";

  const resultContainer = document.createElement("section");
  resultContainer.className = "flex flex-col gap-4 pt-4";

  resetPasswordDisplay();

  const formContainer = document.createElement("form");
  formContainer.className = "flex flex-col gap-8 pt-4 bg-fem-grey-800 mt-4 p-4";

  const passwordOptionsFieldset = document.createElement("fieldset");
  passwordOptionsFieldset.className = "flex flex-col gap-4";

  const passwordOptionsFieldsetLegend = document.createElement("legend");
  passwordOptionsFieldsetLegend.textContent = "Password Options";
  passwordOptionsFieldsetLegend.className = "sr-only";
  passwordOptionsFieldset.appendChild(passwordOptionsFieldsetLegend);

  const characterLengthSlider = renderSlider(
    getPasswordGeneratorState().characterLength,
    (value) => {
      updatePasswordGeneratorState({
        characterLength: value,
      });
      updateSettings();
    },
  );

  formContainer.appendChild(characterLengthSlider);

  const checkboxOptions = [
    { key: "includeUppercase", label: "Include Uppercase Letters" },
    { key: "includeLowercase", label: "Include Lowercase Letters" },
    { key: "includeNumbers", label: "Include Numbers" },
    { key: "includeSymbols", label: "Include Symbols" },
  ] as const;

  checkboxOptions.forEach((option) => {
    const checkbox = renderCheckbox(
      getPasswordGeneratorState()[option.key],
      option.label,
      (checked) => {
        updatePasswordGeneratorState({
          [option.key]: checked,
        });
        updateSettings();
      },
    );
    passwordOptionsFieldset.appendChild(checkbox);
  });

  formContainer.appendChild(passwordOptionsFieldset);

  const footer = document.createElement("div");
  footer.className = "flex flex-col gap-4";

  const passwordStrength = getPasswordStrengthLevel(
    getPasswordGeneratorState(),
  );

  const strengthDisplayContainer = document.createElement("div");
  strengthDisplayContainer.appendChild(renderStrengthDisplay(passwordStrength));
  footer.appendChild(strengthDisplayContainer);

  const arrowIcon = document.createElement("span");
  arrowIcon.innerHTML = iconArrowRight;
  const generateButton = renderButton("Generate", arrowIcon);

  function updateGenerateButtonState(): void {
    const currentState = getPasswordGeneratorState();
    generateButton.disabled = !validatePasswordConfig(currentState);
  }

  function updateStrengthDisplay(strengthLevel: PasswordStrengthLevel): void {
    strengthDisplayContainer.replaceChildren(
      renderStrengthDisplay(strengthLevel),
    );
  }

  function resetPasswordDisplay(): void {
    resultContainer.replaceChildren(
      renderPasswordDisplay("Check options and generate"),
    );
  }

  function updateSettings(): void {
    resetPasswordDisplay();
    updateGenerateButtonState();
    updateStrengthDisplay(
      getPasswordStrengthLevel(getPasswordGeneratorState()),
    );
  }

  function generateAndRenderPassword(): void {
    const currentState = getPasswordGeneratorState();
    if (!validatePasswordConfig(currentState)) {
      resetPasswordDisplay();
      return;
    }
    const newPassword = renderPasswordDisplay(generatePassword(currentState));
    resultContainer.replaceChildren(newPassword);
  }

  generateButton.addEventListener("click", () => {
    generateAndRenderPassword();
  });
  footer.appendChild(generateButton);

  main.appendChild(h1);
  main.appendChild(resultContainer);
  main.appendChild(formContainer);
  formContainer.appendChild(footer);

  return main;
}
