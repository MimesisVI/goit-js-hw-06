
const inputEl = document.querySelector("#validation-input");
const atributEl = inputEl.getAttribute("data-length");


inputEl.addEventListener("blur", onCorrectNumOfSimbols);

function onCorrectNumOfSimbols() {

    if (Number(inputEl.value.length) === Number(atributEl)) {
      inputEl.classList.add("valid");
      inputEl.classList.remove("invalid");
    } else {
      inputEl.classList.add("invalid");
      inputEl.classList.remove("valid");
    }
}
