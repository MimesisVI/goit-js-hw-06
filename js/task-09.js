function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const nameOfColorEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");

changeColorBtnEl.addEventListener("click", changeColorFoo);

function changeColorFoo() {
  const color = getRandomHexColor();
  
  document.body.style.backgroundColor = color;

  nameOfColorEl.textContent = color;
}
