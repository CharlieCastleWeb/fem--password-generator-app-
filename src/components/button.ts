export function renderButton(label: string): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `p-4 text-preset-4 text-fem-grey-800 uppercase bg-fem-green-200 b
    order-2 border-transparent cursor-pointer transition-colors 
    hover:bg-transparent hover:border-fem-green-200 hover:text-fem-green-200
    disabled:bg-red-500`;
  btn.textContent = label;
  return btn;
}
