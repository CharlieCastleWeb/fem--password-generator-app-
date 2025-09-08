import css from "../style.css?inline";

export const twCssText = css;
const sheet = new CSSStyleSheet();
sheet.replaceSync(css);

export default sheet;
