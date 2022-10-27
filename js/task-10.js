function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.firstElementChild;
const createBtnEl = controlsEl.firstElementChild.nextElementSibling;
const destroyBtn = controlsEl.lastElementChild;
const boxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", () => createBoxes(inputEl.value));
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const arr = [];
  if (inputEl.value && boxesEl.childElementCount !== 0) {
    return;
  }

  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.height = 30 + i * 10 + "px";
    divEl.style.width = 30 + i * 10 + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    arr.push(divEl);
  }

  boxesEl.append(...arr)
  console.log(boxesEl);
} 

function destroyBoxes() {
  boxesEl.innerHTML = ``;
  console.log(boxesEl);
}



/* 
  if (amount > 0) {
    const divEl = document.createElement("div");
    divEl.style.height = 30 + "px";
    divEl.style.width = 30 + "px";
    boxesEl.append(divEl);
  }
  if (amount >= 2) {
    [...Array(amount)].forEach((element) => {
      const divEl = document.createElement("div");
      divEl.style.height = 30 + element * 10 - 10 + "px";
      divEl.style.width = 30 + element * 10 - 10 + "px";
      boxesEl.append(divEl);
    });
  }
 */
