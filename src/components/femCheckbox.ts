export function renderFemCheckbox(label: string) {
  return `
    <label class="flex items-center gap-6 cursor-pointer">
      <input
        type="checkbox"
        name="checkbox"
        class="sr-only peer"
      >
      <div
        class=" size-5 border-2 border-fem-white bg-no-repeat bg-center transition-colors peer-checked:bg-fem-green-200 peer-checked:border-fem-green-200 peer-checked:bg-[url('/assets/images/icon-check.svg')]
        "
      >
      </div>
      <p class="text-preset-3 text-fem-white">
        ${label}
      </p>
    </label>
  `;
}
