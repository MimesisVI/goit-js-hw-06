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



// const controlsEl = document.querySelector("#controls");
// const inputEl = controlsEl.firstElementChild;
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxesEl = document.querySelector("#boxes");

// createBtn.addEventListener("click", onAddBox);
// destroyBtn.addEventListener("click", onDestroyBoxes);

// function onAddBox() {
//   let amount = Number(inputEl.value);
//   onCreateBoxes(amount);
// }

// let boxSize = 30;

// function onCreateBoxes(amount) {
//   for (let i = 0; i < amount; i += 1) {
//     let newBox = document.createElement("div");
//     newBox.style.backgroundColor = getRandomHexColor();
//     newBox.style.width = ${boxSize}px;
//     newBox.style.height = ${boxSize}px;
//     newBox.style.marginTop = "20px";
//     boxSize += 10;
//     boxesEl.append(newBox);
//   }
// }

// function onDestroyBoxes() {
//   boxesEl.innerHTML = "";
// }


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
