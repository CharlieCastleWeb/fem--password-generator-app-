type StrengthLevel = "too-weak" | "weak" | "medium" | "strong";

// const STRENGTH_LEVEL_CONFIG: Record<StrengthLevel, { label: string }> = {
//   "too-weak": { label: "too weak!" },
//   weak: { label: "weak" },
//   medium: { label: "medium" },
//   strong: { label: "strong" },
// };

function renderStrengthBars() {
  let bars: string[] = [];
  for (let i = 1; i <= 4; i++) {
    bars.push(`<div class="border-2 border-fem-grey-200 h-7 w-2.5"></div>`);
  }
  return bars.join("");
}

// export function renderStrengthDisplay(strengthLevel: StrengthLevel) {
//   const { label } = STRENGTH_LEVEL_CONFIG[strengthLevel];
//   return `
//     <div class="px-8 py-5 flex items-center justify-between gap-6">
//       <p class="text-preset-3 text-fem-grey-600 uppercase">Strength Title</p>
//       <div class="flex gap-4">
//         <p class="text-preset-2 text-fem-grey-200 uppercase">${label}</p>
//         <div class="flex gap-2">
//           ${renderStrengthBars()}
//         </div>
//       </div>
//     </div>
//   `;
// }

export function renderStrengthDisplay(level: StrengthLevel) {
  const container = document.createElement("div");
  container.className = "px-8 py-5 flex items-center justify-between gap-6";

  const title = document.createElement("p");
  title.className = "text-preset-3 text-fem-grey-600 uppercase";
  title.textContent = "Strength";

  const content = document.createElement("div");
  content.className = "flex gap-4";

  const label = document.createElement("p");
  label.className = "text-preset-2 text-fem-grey-200 uppercase";
  label.textContent = level;

  const bars = document.createElement("div");
  bars.className = "flex gap-2";
  bars.innerHTML = renderStrengthBars();

  content.appendChild(title);
  content.appendChild(bars);
  container.appendChild(title);
  container.appendChild(content);

  return container;
}
