export function renderButton(
  label: string,
  icon?: HTMLElement,
): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `p-4 text-preset-4 text-fem-grey-800 uppercase bg-fem-green-200 b
    order-2 border-transparent cursor-pointer transition-colors 
    hover:bg-transparent hover:border-fem-green-200 hover:text-fem-green-200
    disabled:opacity-40 transition-all duration-300 ease-in-out`;
  const labelContainer = document.createElement("span");
  labelContainer.className = "flex justify-center items-center gap-4";
  const labelText = document.createElement("span");
  labelText.textContent = label;

  labelContainer.appendChild(labelText);
  if (icon) {
    icon.className = "size-3";
    labelContainer.appendChild(icon);
  }

  btn.appendChild(labelContainer);
  return btn;
}
