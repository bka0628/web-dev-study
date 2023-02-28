let inputElement = document.querySelector("input");
let newPElement = document.createElement("p");
newPElement.textContent = "0/60";

inputElement.parentElement.append(newPElement);

function inputlength(event) {
  let inputText = event.target.value;
  let inputTextLength = inputText.length;

  let maxLength = 60;
  newPElement.textContent = inputTextLength + "/" + maxLength;
}

inputElement.addEventListener("input", inputlength);
