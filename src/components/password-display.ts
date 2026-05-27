import copyIcon from "../../public/assets/icons/icon-copy.svg?raw";

function showCopiedMessage(copiedMessage: HTMLSpanElement): void {
  copiedMessage.classList.remove("opacity-0");
  copiedMessage.classList.add("opacity-100");
}

function removeCopiedMessage(copiedMessage: HTMLSpanElement): void {
  copiedMessage.classList.add("opacity-0");
  copiedMessage.classList.remove("opacity-100");
}

function createCopyBtn(getPassword: () => string): HTMLButtonElement {
  const copiedMessage = document.createElement("span");
  copiedMessage.className =
    "text-preset-4 opacity-0 transition-opacity duration-300 ease-in-out";
  copiedMessage.textContent = "copied".toUpperCase();

  const copyBtn = document.createElement("button");
  copyBtn.type = "button";
  copyBtn.setAttribute("aria-label", "Copy password");
  copyBtn.className =
    "cursor-pointer text-fem-green-200 hover:text-fem-white data-[copied=true]:text-fem-green-200 data-[copied=true]:hover:text-fem-green-200 flex items-center gap-2 transition-all duration-300 ease-in-out";
  copyBtn.innerHTML = copyIcon;
  copyBtn.prepend(copiedMessage);

  let copiedMessageTimeout: number | undefined;

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(getPassword());
      showCopiedMessage(copiedMessage);
      copyBtn.dataset.copied = "true";

      if (copiedMessageTimeout) {
        window.clearTimeout(copiedMessageTimeout);
      }
      copiedMessageTimeout = window.setTimeout(() => {
        removeCopiedMessage(copiedMessage);
        copyBtn.dataset.copied = "false";
      }, 1500);
    } catch (error) {
      console.error("No se pudo copiar al portapapeles", error);
    }
  });
  return copyBtn;
}

export function renderPasswordDisplay(password: string): HTMLElement {
  const passwordDisplay = document.createElement("div");
  passwordDisplay.className =
    "bg-fem-grey-800 p-4 flex items-center justify-between @container";

  const passwordField = document.createElement("p");
  passwordField.className = "text-preset-3 @sm:text-preset-2 text-fem-grey-700";
  passwordField.textContent = password;

  const copyBtn = createCopyBtn(() => passwordField.textContent ?? "");

  passwordDisplay.appendChild(passwordField);
  passwordDisplay.appendChild(copyBtn);

  return passwordDisplay;
}
