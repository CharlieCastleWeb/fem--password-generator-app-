export function renderButton(label: string) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className =
    "p-4 text-preset-3 uppercase bg-fem-green-200 border-2 border-transparent cursor-pointer transition-colors hover:bg-transparent hover:border-fem-green-200 hover:text-fem-green-200";
  btn.textContent = label;
  return btn;
}
