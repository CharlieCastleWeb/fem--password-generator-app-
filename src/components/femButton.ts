import twSheet, { twCssText } from "../styles/tw-shadow";

const template = document.createElement("template");
template.innerHTML = `
  <button
    class="bg-fem-green-200 p-4 text-preset-3 uppercase hover:bg-fem-grey-800 hover:border-2 hover:border-fem-green-200"
  >
    <slot></slot>
  </button>
`;

export class femButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.adoptedStyleSheets = [twSheet];
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("fem-button", femButton);
