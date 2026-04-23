export function renderCheckbox(label: string) {
  const checkboxComponent = document.createElement("label");
  checkboxComponent.className = "flex items-center gap-6 cursor-pointer";

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.name = "checkbox";
  checkboxInput.className = "sr-only peer";

  const checkboxBox = document.createElement("div");
  checkboxBox.className =
    "size-5 border-2 border-fem-white bg-no-repeat bg-center transition-colors peer-checked:bg-fem-green-200 peer-checked:border-fem-green-200 peer-checked:bg-[url('/assets/images/icon-check.svg')]";

  const checkboxText = document.createElement("p");
  checkboxText.className = "text-preset-3 text-fem-white";
  checkboxText.textContent = label;

  checkboxComponent.appendChild(checkboxInput);
  checkboxComponent.appendChild(checkboxBox);
  checkboxComponent.appendChild(checkboxText);

  return checkboxComponent;
}
