import "./style.css";
import "./components/femButton";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <fem-button>Click me</fem-button>
`;
