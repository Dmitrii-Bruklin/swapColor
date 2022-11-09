import { getRandomColor } from "./utils";

export default function initApp() {
    
    const swapColorButton = document.createElement("button");
    swapColorButton.className = "button";
    swapColorButton.textContent = "Изменить цвет страницы";
    document.body.append(swapColorButton);

    swapColorButton.addEventListener("click", () => {
        document.body.style.backgroundColor = getRandomColor();
      });
  } 