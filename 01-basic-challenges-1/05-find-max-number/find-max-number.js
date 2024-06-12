const findMaxNumber = arr =>
  arr.reduce((acc, curr) => (curr > acc ? curr : acc), -Infinity);
module.exports = findMaxNumber;

//  Number(arr.sort((a, b) => a - b).slice(arr.length - 1))
