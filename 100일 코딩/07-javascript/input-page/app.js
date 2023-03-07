const inputElement = document.querySelector("input");
const remainingElement = document.getElementById("remaining-chars");

const inputMaxLength = inputElement.maxLength;

function inputlength(event) {
  const inputText = event.target.value;
  const inputTextLength = inputText.length;

  const remainingCharacters = inputMaxLength - inputTextLength;

  remainingElement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingElement.classList.add("error");
    inputElement.classList.add("error");
  } else if (remainingCharacters <= 10) {
    remainingElement.classList.add("warning");
    inputElement.classList.add("warning");
    remainingElement.classList.remove("error");
    inputElement.classList.remove("error");
  } else {
    remainingElement.classList.remove("warning");
    inputElement.classList.remove("warning");
  }
}

inputElement.addEventListener("input", inputlength);
