const fs = require("fs");

// create an array after a break line
const array = fs.readFileSync("day01.txt", { encoding: "utf-8" }).split("\n\n");

const myFunction = (array) => {
  const sumArray = array.map((element) => {
    const elementArray = element.split("\n").map(Number);

    return elementArray.reduce((a, b) => a + b, 0);
  });

  const biggestSum = Math.max(...sumArray);

  return biggestSum;
};

const value = myFunction(array);

console.log(value);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const myFunction2 = (array) => {
  const sumArray = array.map((element) => {
    const elementArray = element.split("\n").map(Number);

    return elementArray.reduce((a, b) => a + b, 0);
  });

  sumArray.sort((a, b) => a - b);

  const sumTop3 = sumArray.slice(-3).reduce((a, b) => a + b, 0);

  return sumTop3;
};

const value2 = myFunction2(array);

console.log(value2);
