var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");
var box5 = document.getElementById("5");
var box6 = document.getElementById("6");
var box7 = document.getElementById("7");
var box8 = document.getElementById("8");
var box9 = document.getElementById("9");

var count = 1;

function displayChar() {
  var charX = "X";
  var charO = "O";
  if (count % 2 === 0) {
    return charO;
  } else {
    return charX;
  }
}

function resetGame() {
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  box5.innerHTML = "";
  box6.innerHTML = "";
  box7.innerHTML = "";
  box8.innerHTML = "";
  box9.innerHTML = "";
  count = 1;
}

function mainGame(number) {
  var display = displayChar();
  if (number === 1 && box1.innerHTML === "") {
    box1.innerHTML = display;
    count++;
  } else if (number === 2 && box2.innerHTML === "") {
    box2.innerHTML = display;
    count++;
  } else if (number === 3 && box3.innerHTML === "") {
    box3.innerHTML = display;
    count++;
  } else if (number === 4 && box4.innerHTML === "") {
    box4.innerHTML = display;
    count++;
  } else if (number === 5 && box5.innerHTML === "") {
    box5.innerHTML = display;
    count++;
  } else if (number === 6 && box6.innerHTML === "") {
    box6.innerHTML = display;
    count++;
  } else if (number === 7 && box7.innerHTML === "") {
    box7.innerHTML = display;
    count++;
  } else if (number === 8 && box8.innerHTML === "") {
    box8.innerHTML = display;
    count++;
  } else if (number === 9 && box9.innerHTML === "") {
    box9.innerHTML = display;
    count++;
  }

  updatePlayerClass();

  winner();

  if (count === 10) {
    alert("Game draw!");
    resetGame();
  }
}

function winningMsg() {
  if (count % 2 === 0) {
    alert("X wins");
  } else {
    alert("O wins");
  }
  player1.classList.remove("no-turn");
  player2.classList.add("no-turn");
}

function winner() {
  var container1 = box1.innerHTML;
  var container2 = box2.innerHTML;
  var container3 = box3.innerHTML;
  var container4 = box4.innerHTML;
  var container5 = box5.innerHTML;
  var container6 = box6.innerHTML;
  var container7 = box7.innerHTML;
  var container8 = box8.innerHTML;
  var container9 = box9.innerHTML;

  if (
    (container1 === "O" && container2 === "O" && container3 === "O") ||
    (container1 === "X" && container2 === "X" && container3 === "X")
  ) {
    winningMsg();
    resetGame();
  } else if (
    (container4 === "O" && container5 === "O" && container6 === "O") ||
    (container4 === "X" && container5 === "X" && container6 === "X")
  ) {
    winningMsg();
    resetGame();
  } else if (
    (container7 === "O" && container8 === "O" && container8 === "O") ||
    (container7 === "X" && container8 === "X" && container8 === "X")
  ) {
    winningMsg();
    resetGame();
  } else if (
    (container1 === "O" && container4 === "O" && container7 === "O") ||
    (container1 === "X" && container4 === "X" && container7 === "X")
  ) {
    winningMsg();
    resetGame();
  } else if (
    (container2 === "O" && container5 === "O" && container8 === "O") ||
    (container2 === "X" && container5 === "X" && container8 === "X")
  ) {
    winningMsg();
    resetGame();
  } else if (
    (container3 === "O" && container6 === "O" && container9 === "O") ||
    (container3 === "X" && container6 === "X" && container9 === "X")
  ) {
    winningMsg();
    resetGame();
  } else if (
    (container3 === "O" && container5 === "O" && container7 === "O") ||
    (container3 === "X" && container5 === "X" && container7 === "X")
  ) {
    winningMsg();
    resetGame();
  } else if (
    (container1 === "O" && container5 === "O" && container9 === "O") ||
    (container1 === "X" && container5 === "X" && container9 === "X")
  ) {
    winningMsg();
    resetGame();
  }
}

var player1 = document.getElementById("player-1");
var player2 = document.getElementById("player-2");

player2.classList.add("no-turn");

function updatePlayerClass() {
  if (count % 2 === 0) {
    player1.classList.add("no-turn");
    player2.classList.remove("no-turn");
  } else {
    player1.classList.remove("no-turn");
    player2.classList.add("no-turn");
  }
}
