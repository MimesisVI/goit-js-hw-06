function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.firstElementChild;
const createBtnEl = controlsEl.firstElementChild.nextElementSibling;
const destroyBtn = controlsEl.lastElementChild;
const boxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", createBoxes);

function createBoxes(amount) {
  const divEl = document.createElement('div');
  divEl.style.height = 30 + "px"
  divEl.style.width = 30 + "px";
  boxesEl.append(divEl);

  console.log(boxesEl);
} 