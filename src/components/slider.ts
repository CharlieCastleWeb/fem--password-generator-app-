import "../styles/components/_slider.css";
import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from "../lib/password";

type SliderValueChangeHandler = (value: number) => void;

export function renderSlider(
  initialValue: number,
  onValueChange: SliderValueChangeHandler,
): HTMLElement {
  let sliderValue = initialValue;
  const SLIDER_ID = "character-length";

  const sliderComponent = document.createElement("section");

  const sliderComponentHeader = document.createElement("div");
  sliderComponentHeader.className =
    "w-full flex justify-between items-center mb-2";

  const sliderComponentLabel = document.createElement("label");
  sliderComponentLabel.className = "text-preset-4 text-fem-grey-200";
  sliderComponentLabel.htmlFor = SLIDER_ID;
  sliderComponentLabel.textContent = "Character Length";

  const sliderComponentOutput = document.createElement("output");
  sliderComponentOutput.className =
    "text-preset-2 text-fem-green-200 font-normal";
  sliderComponentOutput.setAttribute("for", SLIDER_ID);
  sliderComponentOutput.id = "character-length-value";
  sliderComponentOutput.value = String(sliderValue);

  sliderComponentHeader.appendChild(sliderComponentLabel);
  sliderComponentHeader.appendChild(sliderComponentOutput);

  const sliderComponentInput = document.createElement("input");
  sliderComponentInput.className = "password-generator__slider";
  sliderComponentInput.type = "range";
  sliderComponentInput.min = String(MIN_PASSWORD_LENGTH);
  sliderComponentInput.max = String(MAX_PASSWORD_LENGTH);
  sliderComponentInput.value = String(sliderValue);

  function updateSlider(): number {
    const min = Number(sliderComponentInput.min);
    const max = Number(sliderComponentInput.max);
    const value = sliderComponentInput.valueAsNumber;

    const progress = ((value - min) / (max - min)) * 100;

    sliderComponentOutput.value = String(value);
    sliderComponentInput.style.setProperty("--slider-progress", `${progress}%`);

    return value;
  }

  sliderComponentInput.addEventListener("input", () => {
    const value = updateSlider();
    onValueChange(value);
  });

  updateSlider();

  sliderComponent.appendChild(sliderComponentHeader);
  sliderComponent.appendChild(sliderComponentInput);

  return sliderComponent;
}
