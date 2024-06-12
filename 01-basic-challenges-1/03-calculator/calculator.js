/* const calculator = (n1, n2, op) =>
  ({
    "+": n1 + n2,
    "-": n1 - n2,
    "*": n1 * n2,
    "/": n1 / n2,
  }[op] || "wrong operator"); */

//* gelen op objedeki keylerden biriyse {}[op], value'deki islemi return et, degilse "wrong operator yazdir".

const calculator = (n1, n2, op) =>
  op === "+"
    ? n1 + n2
    : op === "-"
    ? n1 - n2
    : op === "*"
    ? n1 * n2
    : op === "/"
    ? n1 / n2
    : "wrong operator!";

module.exports = calculator;
