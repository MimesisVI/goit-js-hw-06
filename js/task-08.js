/* const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);
formEl.addEventListener("input", storeInputData);

const user = {};

function storeInputData(event) {
  user[event.target.name] = event.target.value;
}

function onFormSubmit(event) {
  event.preventDefault();
  const pathToElements = event.currentTarget.elements;

  if (
    pathToElements.email.value === "" ||
    pathToElements.password.value === ""
  ) {
    return alert("Все поля должны быть заполнены");
  }

  event.currentTarget.reset();
  console.log(user);
}
 */

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const user = {};
  const formData = new FormData(event.currentTarget)
  const pathToElements = event.currentTarget.elements;

  if (
    pathToElements.email.value === "" ||
    pathToElements.password.value === ""
  ) {
    return alert("Все поля должны быть заполнены");
  }

  formData.forEach((value, name) => {
    user[name] = value;
  });

  console.log(user);
  event.currentTarget.reset();
}
