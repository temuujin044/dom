let nums = [1, 2, 3, 4, 5];

function test(abc) {
  abc[0] = 10;

  console.log("Local:", abc);
}

test(nums);

console.log("global:", nums);

// example2
let x = 15;

function changeX(x) {
  x = 20;

  console.log("local: ", x);
}

changeX(x);

console.log("global: ", x);
