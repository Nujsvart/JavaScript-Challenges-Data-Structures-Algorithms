const removeDuplicates = arr =>
  arr.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), []);

// const removeDuplicates = arr => [...new Set(arr)];
module.exports = removeDuplicates;
