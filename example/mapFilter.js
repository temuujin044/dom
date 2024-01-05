// filter
let nums = [1, 2, 3, 4, 5, 1, 3, 1, 3];
let newNums = nums.map((a) => {
  if (a % 2 == 0) {
    return { name: "hosoo", age: 18 };
  }
});
console.log(newNums);
console.log(nums);

// Map
let evenArr = nums.filter((a) => {
  return a % 2 == 0;
});
console.log("evenArr: ", evenArr);
