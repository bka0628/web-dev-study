const defaultResult = 0;
let currentResult = defaultResult;

function calculate(event) {
  const operator = event.target.textContent;
  const userNumber = +userInput.value;
  const calcDescription = `${currentResult} ${operator} ${userNumber}`;

  if (operator === "+") {
    currentResult += userNumber;
  } else if (operator === "-") {
    currentResult -= userNumber;
  } else if (operator === "*") {
    currentResult *= userNumber;
  } else {
    currentResult /= userNumber;
  }

  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", calculate);
subtractBtn.addEventListener("click", calculate);
multiplyBtn.addEventListener("click", calculate);
divideBtn.addEventListener("click", calculate);
