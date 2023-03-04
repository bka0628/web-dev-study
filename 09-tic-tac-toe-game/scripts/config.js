function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // 문자열 앞에 +를 붙이면 숫자로 변함
  configOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  configOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const playerName = formData.get("playername").trim(); // trim : 공백 제거

  // playerName === ""
  if (!playerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = playerName;
  players[editedPlayer - 1].name = playerName;

  closePlayerConfig();
}
