import twSheet from "../styles/tw-shadow";

const template = document.createElement("template");
template.innerHTML = `
  <label class="flex items-center gap-6 cursor-pointer">
    <input 
      type="checkbox"
      name="checkbox" 
      class="sr-only peer"
    >
    <div 
      class="
        size-5
        border-2 border-fem-white 
        bg-no-repeat bg-center
        transition-colors
        peer-checked:bg-fem-green-200
        peer-checked:border-fem-green-200
        peer-checked:bg-[url('assets/images/icon-check.svg')]
      "
    >
    </div>
    <div class="text-preset-3 text-fem-white">
      <slot></slot>
    </div>
  </label>
`;

export class FemCheckbox extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.adoptedStyleSheets = [twSheet];
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("fem-checkbox", FemCheckbox);
