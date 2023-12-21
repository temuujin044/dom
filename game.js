let root = document.getElementById("root");

function initial() {
  let startDiv = document.createElement("div");
  let tutorial = document.createElement("p");
  let startButton = document.createElement("button");
  startButton.innerHTML = "Start";
  tutorial.innerText =
    "start darhad togloom ehlene \n\n ongonuud garch irne tednees neg ondoog ni songoj darna \n\n 60 secondiin hugatsaand ali boloh olon onoo tsugluulah heregtei";
  startDiv.setAttribute("initialPage");
  startButton.addEventListener("click", start);
  startDiv.appendChild(startButton);
  root.appendChild(startDiv);
}
initial();

function start() {}
