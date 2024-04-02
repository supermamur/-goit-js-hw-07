const inputForm = document.querySelector("input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const box = document.querySelector("div#boxes");

createBtn.addEventListener("click", clickHandler);
destroyBtn.addEventListener("click", destroyBoxes);

function clickHandler() {
  const amount = inputForm.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
}

function createBoxes(amount) {
  box.innerHTML = "";
  const size = 30;

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    box.append(newDiv);
    size += 10;
  }
}

function destroyBoxes() {
  box.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
