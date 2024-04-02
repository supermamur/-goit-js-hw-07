const buttonSwitchColor = document.querySelector(".change-color");
const spanText = document.querySelector(".color");
const body = document.querySelector("body");

buttonSwitchColor.addEventListener("click", clickHandler);

function clickHandler() {
  const generateColor = getRandomHexColor();
  body.style.backgroundColor = generateColor;
  spanText.textContent = generateColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
