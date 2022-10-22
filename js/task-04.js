"use strict";

let counter = 0;

const buttonIncrementEl = document.querySelector(
  '#counter button[data-action="increment"]'
);
const buttonDecrementtEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const valueEl = document.querySelector("#value");

buttonIncrementEl.addEventListener("click", () => {
  counter += 1;
  valueEl.textContent = counter;
});

buttonDecrementtEl.addEventListener("click", () => {
  counter -= 1;
  valueEl.textContent = counter;
});
