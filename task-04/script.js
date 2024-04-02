const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const emailValue = elements.email.value.trim();
  const passwordValue = elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("'All form fields must be filled in'");
    return;
  }

  const inputData = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  console.log(inputData);
  event.currentTarget.reset();
}
