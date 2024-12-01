const playerOne = document.querySelector("#player-1");
const playerTwo = document.querySelector("#player-2");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newBtn = document.querySelector("#new-btn");
const mainContainer = document.querySelector(".main-container");
const drawMsg = document.querySelector(".draw-msg");
const endMsg = document.querySelector(".end-msg");

let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnX = true;

playerTwo.classList.add("no-turn");

function updatePlayerTurn() {
  if (turnX) {
    playerOne.classList.remove("no-turn");
    playerTwo.classList.add("no-turn");
  } else {
    playerOne.classList.add("no-turn");
    playerTwo.classList.remove("no-turn");
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("clicked")) return;
    box.innerText = turnX ? "X" : "O";
    box.classList.add("clicked");
    turnX = !turnX;
    updatePlayerTurn();
    box.disabled = true;
    checkWinner();
  });
});

function disableBoxes() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function enableBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("clicked");
  });
  resetBtn.classList.remove("hide");
  playerOne.classList.remove("no-turn");
  playerTwo.classList.add("no-turn");
}

function showWinner(winner) {
  endMsg.innerText = `Congratulations, winner is ${winner}.`;
  endMsg.classList.remove("hide");
  mainContainer.classList.add("hide");
  newBtn.classList.remove("hide");
  resetBtn.classList.add("hide");
  disableBoxes();
}

function showDraw() {
  drawMsg.innerText = `Game was draw! Play again.`;
  mainContainer.classList.add("hide");
  drawMsg.classList.remove("hide");
  disableBoxes();
}

function checkWinner() {
  for (pattern of winningPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos1Val === pos2Val && pos2Val === pos3Val) {
      showWinner(pos1Val);
      playerOne.classList.remove("no-turn");
      playerTwo.classList.add("no-turn");
      return;
    }
  }
  if ([...boxes].every((box) => box.innerText !== "")) {
    playerOne.classList.remove("no-turn");
    playerTwo.classList.add("no-turn");
    showDraw();
  }
}

function resetGame() {
  turnX = true;
  enableBoxes();
  newBtn.classList.add("hide");
  mainContainer.classList.remove("hide");
  endMsg.classList.add("hide");
  drawMsg.classList.add("hide");
  playerOne.classList.remove("no-turn");
  playerTwo.classList.add("no-turn");
  resetBtn.classList.remove("hide");
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
