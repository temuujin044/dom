// function declaration
function doSomething(input) {
  return input * input;
}

//function calling
let result = doSomething(15);
console.log(result);

// example2
function printHello() {
  console.log("Hello World");
}

function getSomething(input) {
  console.log("Input: ", input);
}
function returnSomething() {
  return "Hello World";
}
console.log(returnSomething());

printHello();
printHello();
printHello();

getSomething("MY TEXT");

// example3
function getMultiInput(num1, num2) {
  console.log("num1 = ", num1);
  console.log("num2 = ", num2);
  let sum = num1 + num2;
  return sum;
}

let myDuu = getMultiInput(20, 30);
console.log("sum=", myDuu);

// example4
function findDay(num) {
  if (num == 1) {
    return "Monday";
  } else if (num == 2) {
    return "Tuesday";
  }
}

let dayInText = findDay(2);
console.log(dayInText);
