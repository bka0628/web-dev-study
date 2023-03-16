let result = 0;
let text = `${result}`;

function calculate(event) {
  const operator = event.target.textContent;
  const userNumber = +userInput.value;
  text += ` ${operator} ${userNumber}`;

  if (operator === "+") {
    result += userNumber;
  } else if (operator === "-") {
    result -= userNumber;
  } else if (operator === "*") {
    result *= userNumber;
  } else {
    result /= userNumber;
  }

  outputResult(result, text);
}

addBtn.addEventListener("click", calculate);
subtractBtn.addEventListener("click", calculate);
multiplyBtn.addEventListener("click", calculate);
divideBtn.addEventListener("click", calculate);
