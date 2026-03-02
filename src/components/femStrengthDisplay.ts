export function renderFemStrengthDisplay(
  strengthTitle: string,
  strengthLabel: string,
) {
  return `
    <div class="px-8 py-5 flex items-center justify-between gap-6">
      <p class="text-preset-3 text-fem-grey-600 uppercase">${strengthTitle}</p>
      <div class="flex gap-4">
        <p class="text-preset-2 text-fem-grey-200 uppercase">${strengthLabel}</p>
        <div class="flex gap-2">
          <div class="border-2 border-fem-grey-200 h-7 w-2.5"></div>
          <div class="border-2 border-fem-grey-200 h-7 w-2.5"></div>
          <div class="border-2 border-fem-grey-200 h-7 w-2.5"></div>
          <div class="border-2 border-fem-grey-200 h-7 w-2.5"></div>
          <div class="border-2 border-fem-grey-200 h-7 w-2.5"></div>
        </div>
      </div>
    </div>
  `;
}
