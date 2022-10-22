"use strict";

const listEl = document.querySelector("#categories");
console.log(`Number of categories: ${listEl.children.length}`);

const itemsEl = document.querySelectorAll(".item");
itemsEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
})