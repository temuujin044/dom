let root = document.getElementById("root");

function initial() {
  let startDiv = document.createElement("div");
  let tutorial = document.createElement("p");
  let startButton = document.createElement("button");
  startButton.innerHTML = "Start";
  tutorial.innerText =
    " Ungunvvdees sondgoi ungiig oloh yostoi.\n\nStart darj togloomiig ehlvvlene vv!";
  startDiv.setAttribute("class", "initialPage");
  startButton.addEventListener("click", start);
  startDiv.appendChild(tutorial);
  startDiv.appendChild(startButton);
  root.appendChild(startDiv);
}
initial();

function start() {
  root.innerHTML = "";
  root.setAttribute("class", "gamePage");

  let gameInfoDiv = document.createElement("div");
  gameInfoDiv.setAttribute("class", "gameInfodiv");

  let levelNum = 1;
  let levelShow = document.createElement("input");
  levelShow.innerText = `Level: ${levelNum}`;

  currentScore = 0;
  currentScoreShow = document.createElement("input");
  currentScore.innerText = `Score: ${currentScore}`;

  chance = 3;
  chanceShow.document.createElement("input");
  chanceShow.innerText = `Chance: ${chance}`;

  gameInfoDiv.appendChild(levelShow);
  gameInfoDiv.appendChild(currentScore);
  gameInfoDiv.appendChild(chance);
  root.appendChild(gameInfoDiv);
}
