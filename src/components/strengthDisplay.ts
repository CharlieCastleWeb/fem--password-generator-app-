function renderStrengthBars() {
  let bars: string[] = [];
  for (let i = 1; i <= 4; i++) {
    bars.push(`<div class="border-2 border-fem-grey-200 h-7 w-2.5"></div>`);
  }
  return bars.join("");
}

function semanticStrengthLevel(strengthLevel: number): string {
  if (strengthLevel === 1) {
    return "too weak!";
  }
  if (strengthLevel === 2) {
    return "weak";
  }
  if (strengthLevel === 3) {
    return "medium";
  }
  if (strengthLevel === 4) {
    return "strong";
  } else {
    return "";
  }
}

export function renderStrengthDisplay(initialStrengthLevel: number) {
  const strengthLevel = initialStrengthLevel;
  const container = document.createElement("div");
  container.className =
    "px-4 py-3.5 flex items-center justify-between gap-6 bg-fem-grey-850";

  const title = document.createElement("p");
  title.className = "text-preset-4 text-fem-grey-600 uppercase";
  title.textContent = "Strength";

  const content = document.createElement("div");
  content.className = "flex gap-4 items-center";

  //TODO implement function to calculate passwordStrength

  const label = document.createElement("p");
  label.className = "text-preset-3 text-fem-grey-200 uppercase";
  label.textContent = semanticStrengthLevel(strengthLevel);

  const bars = document.createElement("div");
  bars.className = "flex gap-2";
  bars.innerHTML = renderStrengthBars();

  content.appendChild(title);
  content.appendChild(label);
  content.appendChild(bars);
  container.appendChild(title);
  container.appendChild(content);

  return container;
}
