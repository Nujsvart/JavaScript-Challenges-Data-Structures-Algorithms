const countVowels = str =>
  str
    .toLowerCase()
    .split("")
    .reduce((acc, curr) => ("aeiou".includes(curr) ? acc + 1 : acc), 0);

module.exports = countVowels;
