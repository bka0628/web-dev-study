// 첫번쩨 연습 (for)
const numberInputElement = document.getElementById("user-number");
const calculateSumBtnElement = document.querySelector("#calculator button");
const calculatedOutPutElement = document.getElementById("calculated-sum");

function calculateSum() {
  const userNumber = numberInputElement.valueAsNumber;
  let sumNumber = 0;

  for (let i = 0; i <= userNumber; i++) {
    sumNumber += i;
  }

  calculatedOutPutElement.style.display = "block";
  calculatedOutPutElement.textContent = sumNumber;
}

calculateSumBtnElement.addEventListener("click", calculateSum);

// 두번쩨 연습 (for-of)
const highlightBtnElement = document.querySelector("#highlight-links Button");

function anchorHighlight() {
  const anchorListElement = document.querySelectorAll("#highlight-links a");

  for (const anchor of anchorListElement) {
    anchor.classList.add("highlight");
  }
}

highlightBtnElement.addEventListener("click", anchorHighlight);

// 세번째 연습 (for-in)
const dummyUserData = {
  firstName: "Bang",
  lastName: "Seungyeon",
  age: 28,
};

const userDataBtnElement = document.querySelector("#user-data button");

function displayUserData() {
  const outputUserDataElement = document.getElementById("output-user-data");

  // 전에 남아 있는 리스트 삭제
  outputUserDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];

    newUserDataListElement.textContent = outputText;
    outputUserDataElement.append(newUserDataListElement);
  }
}

userDataBtnElement.addEventListener("click", displayUserData);

// 네번째 연습 (while)
const rollDiceBtnElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement = document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const userTargetNumber = targetNumberInputElement.valueAsNumber;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNuumber = rollDice();

    // if (rolledNuumber == userTargetNumber) {
    //     hasRolledTargetNumber = true;
    // }
    numberOfRolls++;

    const newRollListItemElement = document.createElement("li");
    const outputText = "Roll " + numberOfRolls + ": " + rolledNuumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);

    hasRolledTargetNumber = rolledNuumber == userTargetNumber;
  }

  const outputTatalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById("output-target-number");

  outputTargetNumberElement.textContent = userTargetNumber;
  outputTatalRollsElement.textContent = numberOfRolls;
}

rollDiceBtnElement.addEventListener("click", deriveNumberOfDiceRolls);
