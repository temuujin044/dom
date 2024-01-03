const calculator = document.createElement("div");
calculator.id = "calculator";

const display = document.createElement("div");
display.classList.add("display");
calculator.appendChild(display);

const buttons = document.createElement("div");
buttons.classList.add("buttons");
calculator.appendChild(buttons);

const buttonValues = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

buttonValues.forEach((value) => {
  const button = document.createElement("button");
  button.textContent = value;
  button.addEventListener("click", () => {
    if (value === "AC") {
      display.textContent = "";
    } else if (value === "=") {
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = "Error";
      }
    } else {
      display.textContent += value;
    }
  });
  if (isNaN(value)) {
    button.classList.add("operator");
    if (value === "=") {
      button.classList.add("equal");
    } else if (value === "C") {
      button.classList.add("clear");
    }
  }
  buttons.appendChild(button);
});

document.getElementById("root").appendChild(calculator);
