import type { PasswordGeneratorState } from "../pages/password-generator-state";

export type PasswordStrengthLevel = 1 | 2 | 3 | 4;

export function getSelectedCharacterTypesCount(
  passwordState: PasswordGeneratorState,
): number {
  return [
    passwordState.includeUppercase,
    passwordState.includeLowercase,
    passwordState.includeNumbers,
    passwordState.includeSymbols,
  ].filter(Boolean).length;
}

export function getPasswordStrengthLevel(
  passwordState: PasswordGeneratorState,
): PasswordStrengthLevel {
  const { characterLength } = passwordState;
  const selectedTypesCount = getSelectedCharacterTypesCount(passwordState);

  if (selectedTypesCount === 0) return 1;
  if (characterLength <= 4) return 1;
  if (characterLength <= 7) {
    if (selectedTypesCount === 1) return 1;
    return 2;
  }
  if (characterLength <= 11) {
    if (selectedTypesCount <= 2) return 2;
    return 3;
  }
  if (characterLength <= 15) {
    if (selectedTypesCount === 1) return 2;
    if (selectedTypesCount <= 3) return 3;
    return 4;
  }

  if (selectedTypesCount === 1) return 2;
  if (selectedTypesCount === 2) return 3;

  return 4;
}

function semanticStrengthLevel(strengthLevel: PasswordStrengthLevel): string {
  const labels: Record<PasswordStrengthLevel, string> = {
    1: "too weak!",
    2: "weak",
    3: "medium",
    4: "strong",
  };

  return labels[strengthLevel];
}

function getStrengthColorClass(strengthLevel: PasswordStrengthLevel): string {
  const colors: Record<PasswordStrengthLevel, string> = {
    1: "bg-fem-red-500 border-fem-red-500",
    2: "bg-fem-orange-400 border-fem-orange-400",
    3: "bg-fem-yellow-300 border-fem-yellow-300",
    4: "bg-fem-green-200 border-fem-green-200",
  };

  return colors[strengthLevel];
}

function renderStrengthBars(passwordStrength: PasswordStrengthLevel) {
  const barsContainer = document.createElement("div");
  barsContainer.className = "flex gap-2";
  for (let i = 1; i <= 4; i++) {
    const bar = document.createElement("div");
    if (i <= passwordStrength) {
      bar.className = `border-2 h-7 w-2.5 ${getStrengthColorClass(passwordStrength)}`;
    } else {
      bar.className = "border-2 h-7 w-2.5 border-fem-grey-200";
    }
    barsContainer.appendChild(bar);
  }
  return barsContainer;
}

export function renderStrengthDisplay(passwordStrength: PasswordStrengthLevel) {
  const strengthLevel = passwordStrength;
  const container = document.createElement("div");
  container.className =
    "px-4 py-3.5 flex items-center justify-between gap-6 bg-fem-grey-850";

  const title = document.createElement("p");
  title.className = "text-preset-4 text-fem-grey-600 uppercase";
  title.textContent = "Strength";

  const content = document.createElement("div");
  content.className = "flex gap-4 items-center";

  const label = document.createElement("p");
  label.className = "text-preset-3 text-fem-grey-200 uppercase";
  console.log(passwordStrength, semanticStrengthLevel(strengthLevel));

  label.textContent = semanticStrengthLevel(strengthLevel);

  content.appendChild(title);
  content.appendChild(label);
  content.appendChild(renderStrengthBars(strengthLevel));
  container.appendChild(title);
  container.appendChild(content);

  console.log(container);
  return container;
}
