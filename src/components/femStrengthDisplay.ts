import twSheet from "../styles/tw-shadow";

const template = document.createElement("template");
template.innerHTML = `
  <div class="border border-red-500 px-8 py-5 gap-4 flex items-center justify-between gap-6">
    <p class="text-preset-3 text-fem-grey-600 uppercase">Strength</p>
    <div class="flex gap-4">
      <p class="text-preset-2 text-fem-grey-200 uppercase">Too Weak!</p>
      <div class="flex gap-2">
        <div class="border-2 border-fem-grey-200 h-7 w-2.5"></div>
        <div class="border-2 border-fem-grey-200 h-7 w-2.5"></div>
        <div class="border-2 border-fem-grey-200 h-7 w-2.5"></div>
        <div class="border-2 border-fem-grey-200 h-7 w-2.5"></div>
      </div>
    </div>
  </div>
`;

export class FemStrengthDisplay extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.adoptedStyleSheets = [twSheet];
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("fem-strength-display", FemStrengthDisplay);
