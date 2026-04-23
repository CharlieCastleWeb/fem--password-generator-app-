export function mount(node: HTMLElement) {
  const root = document.querySelector<HTMLDivElement>("#app");
  if (!root) throw new Error("No #app element found");
  root.innerHTML = "";
  root.appendChild(node);
}
