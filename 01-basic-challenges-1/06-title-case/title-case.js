const titleCase = str =>
  str
    .toLowerCase()
    .split(" ")
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(" ");
module.exports = titleCase;
