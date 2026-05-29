type CheckboxChangeHandler = (checked: boolean) => void;

export function renderCheckbox(
  initialValue: boolean,
  label: string,
  onCheckedChange: CheckboxChangeHandler,
  name?: string,
): HTMLElement {
  const checkboxComponent = document.createElement("label");
  checkboxComponent.className = "flex items-center gap-6 cursor-pointer";

  const checkboxInput = document.createElement("input");
  checkboxInput.checked = initialValue;
  checkboxInput.type = "checkbox";
  if (name) checkboxInput.name = name;
  checkboxInput.className = "sr-only peer";

  checkboxInput.addEventListener("change", () => {
    onCheckedChange(checkboxInput.checked);
  });

  const checkboxBox = document.createElement("div");
  checkboxBox.className =
    "size-5 border-2 border-fem-grey-200 hover:border-fem-green-200 bg-no-repeat bg-center transition-colors peer-checked:bg-fem-green-200 peer-checked:border-fem-green-200 peer-checked:bg-[url('/assets/icons/icon-check.svg')]";

  const checkboxText = document.createElement("p");
  checkboxText.className = "text-preset-4 text-fem-grey-200";
  checkboxText.textContent = label;

  checkboxComponent.appendChild(checkboxInput);
  checkboxComponent.appendChild(checkboxBox);
  checkboxComponent.appendChild(checkboxText);

  return checkboxComponent;
}
