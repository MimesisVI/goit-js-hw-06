const refs = {
    inputEl: document.querySelector("#name-input"),
    spanEl: document.querySelector("#name-output"),
}

refs.inputEl.addEventListener("input", onInputeChange);

function onInputeChange(event) {
  refs.spanEl.textContent = event.currentTarget.value;
}