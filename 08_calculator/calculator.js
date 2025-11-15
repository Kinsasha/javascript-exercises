const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((sum, current) => sum * current, 1);
};
// console.log(multiply(2, 4));
const power = function (num, pow) {
  return num ** pow;
};
// console.log(power(2, 3));
const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
