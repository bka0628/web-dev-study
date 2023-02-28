let inputElement = document.querySelector("input");
let remainingElement = document.getElementById("remaining-chars");

let inputMaxLength = inputElement.maxLength;

function inputlength(event) {
  let inputText = event.target.value;
  let inputTextLength = inputText.length;

  let remainingCharacters = inputMaxLength - inputTextLength;

  remainingElement.textContent = remainingCharacters;
}

inputElement.addEventListener("input", inputlength);
