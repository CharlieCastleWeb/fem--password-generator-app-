import twSheet from "../styles/tw-shadow";

const template = document.createElement("template");
template.innerHTML = `
  <button
    type="button"
    class="
      p-4 
      text-preset-3 
      uppercase 
      bg-fem-green-200 
      border-2 
      border-transparent
      cursor-pointer
      transition-colors
      hover:bg-fem-grey-800 
      hover:border-fem-green-200
      hover:text-fem-green-200
    "
  >
    <slot></slot>
  </button>
`;

export class FemButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.adoptedStyleSheets = [twSheet];
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("fem-button", FemButton);
