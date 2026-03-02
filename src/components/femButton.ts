export function renderFemButton(label: string) {
  return `
    <button
    type="button"
    class="p-4 text-preset-3 uppercase bg-fem-green-200 border-2 border-transparent cursor-pointer transition-colors hover:bg-transparent hover:border-fem-green-200 hover:text-fem-green-200"
    >
      ${label}
    </button>
  `;
}
