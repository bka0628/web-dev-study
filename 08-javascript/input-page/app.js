const inputElement = document.querySelector("input");
const remainingElement = document.getElementById("remaining-chars");

const inputMaxLength = inputElement.maxLength;

function inputlength(event) {
  const inputText = event.target.value;
  const inputTextLength = inputText.length;

  const remainingCharacters = inputMaxLength - inputTextLength;

  remainingElement.textContent = remainingCharacters;
}

inputElement.addEventListener("input", inputlength);
