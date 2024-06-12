const countOccurrences = (str, char) =>
  str
    .toLowerCase()
    .split("")
    .filter(c => c === char.toLowerCase())
    .join("").length;

module.exports = countOccurrences;
