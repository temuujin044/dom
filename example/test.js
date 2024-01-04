let root = document.getElementById("root");
let currentScore = 0;
let currentScoreShow;
let chance = 3;
let chanceShow;

function initial() {
  root.setAttribute("class", "initialPage");
  let startDiv = document.createElement("div");
  let tutorial = document.createElement("p");
  let startButton = document.createElement("button");
  startButton.innerHTML = "Start";
  tutorial.innerText =
    "start darhad togloom ehlene \n\n ongonuud garch irne tednees neg ondoog ni songoj darna \n\n 60 secondiin hugatsaand ali boloh olon onoo tsugluulah heregtei";
  startDiv.setAttribute("class", "initialPage");
  startButton.setAttribute("onclick", "start()");
  startDiv.append(tutorial);
  startDiv.append(startButton);
  root.appendChild(startDiv);
}

// initial tsonh achaallalaa
initial();

// initial -> lvl 1 tsonh shiljhed ajillana

function start() {
  root.innerHTML = "";
  root.setAttribute("class", "gamePage");

  let gameDiv = document.createElement("div");
  let gameInfoDiv = document.createElement("div");

  // game information division start from here

  let levelNum = 1;
  let levelShow = document.createElement("p");
  levelShow.innerText = `Level: ${levelNum}`;

  currentScore = 0;
  currentScoreShow = document.createElement("p");
  currentScoreShow.innerText = `Score: ${currentScore}`;

  let timer = "00:59";
  let timerShow = document.createElement("p");
  timerShow.innerHTML = `Timer: ${timer}`;

  gameInfoDiv.setAttribute("class", "gameInfodiv");

  chance = 3;
  chanceShow = document.createElement("p");
  chanceShow.innerText = `Chance: ${chance}`;

  gameInfoDiv.appendChild(levelShow);
  gameInfoDiv.appendChild(chanceShow);
  gameInfoDiv.appendChild(currentScoreShow);
  gameInfoDiv.appendChild(timerShow);
  root.appendChild(gameInfoDiv);
  makeCells();
  fillColor();
}

let gameTableDiv = document.createElement("div");
function makeCells() {
  gameTableDiv.setAttribute("class", "gameTableDiv");
  for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    gameTableDiv.appendChild(cell);
    root.appendChild(gameTableDiv);
  }
}

function fillColor() {
  let red = Math.floor(Math.random() * 305);
  let green = Math.floor(Math.random() * 305);
  let blue = Math.floor(Math.random() * 255);
  let colorAll = `rgb(${red},${green},${blue})`;
  let colorDiff = `rgb(${red - 50 + currentScore * 5},${
    green - 50 + currentScore * 5
  },${blue})`;
  let cells = document.getElementsByClassName("cell");

  let randCell = Math.floor(Math.random() * 9);

  for (let i = 0; i < 9; i++) {
    if (i == randCell) {
      cells[randCell].style.backgroundColor = colorDiff;
      cells[randCell].addEventListener("click", refreshColor);
      console.log("true");
    } else {
      cells[i].style.backgroundColor = colorAll;
      cells[i].addEventListener("click", wrongF);
      console.log("false");
    }
  }
}

function refreshColor() {
  gameTableDiv.innerHTML = "";
  currentScore += 1;
  if (currentScore == 5) {
    alert("Bayar hurgey  ta hojloo");
  } else {
    makeCells();
    fillColor();
    currentScoreShow.innerText = `Score: ${currentScore}`;
  }
}

function wrongF() {
  chance -= 1;
  chanceShow.innerText = `Chance: ${chance}`;
  if (chance == 0) {
    alert("Ta hojigdloo");
    gameTableDiv.innerHTML = "";
  }
}
