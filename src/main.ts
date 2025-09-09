import "./style.css";
import "./components/index";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="bg-fem-grey-900">  
  <fem-button>Click me</fem-button>
    <div class="p-8">
      <fem-checkbox>Checkbox Active</fem-checkbox>
    </div>
</div>
`;
