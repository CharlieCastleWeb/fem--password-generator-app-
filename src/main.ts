import "./style.css";
import "./components/index";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="bg-fem-grey-850">  
  <fem-button>Click me</fem-button>
  <div class="w-[476px] ml-8">
    <fem-strength-display></fem-strength-display>
  </div>
</div>
`;
