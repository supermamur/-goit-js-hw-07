const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", inputHandler);

function inputHandler(event) {
  const inputNameValue = event.currentTarget.value.trim();
  if (inputNameValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputNameValue;
  }
}
