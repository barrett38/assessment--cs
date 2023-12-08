const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// DRAFT CODE
function timeFunctions(array, func1, func2) {
  perf.start();
  func1(array);
  let result1 = perf.stop();

  perf.start();
  func2(array);
  let result2 = perf.stop();

  return {
    func1: result1.preciseWords,
    func2: result2.preciseWords,
  };
}

let resultsTiny = timeFunctions(tinyArray, doublerAppend, doublerInsert);
let resultsSmall = timeFunctions(smallArray, doublerAppend, doublerInsert);
let resultsMedium = timeFunctions(mediumArray, doublerAppend, doublerInsert);
let resultsLarge = timeFunctions(largeArray, doublerAppend, doublerInsert);
let resultsExtraLarge = timeFunctions(extraLargeArray, doublerAppend, doublerInsert);

console.table({
  tiny: resultsTiny,
  small: resultsSmall,
  medium: resultsMedium,
  large: resultsLarge,
  extraLarge: resultsExtraLarge,
});
// DRAFT CODE

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

console.log(`func1 = doubleAppend`);
console.log(`func2 = doubleInsert`);

console.log("Results for the extraLargeArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
