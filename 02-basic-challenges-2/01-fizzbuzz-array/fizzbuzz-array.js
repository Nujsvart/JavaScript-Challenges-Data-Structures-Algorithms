const fizzBuzzArray = n => {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  return numbers.map(n =>
    n % 3 === 0 && n % 5 === 0
      ? "FizzBuzz"
      : n % 3 === 0
      ? "Fizz"
      : n % 5 === 0
      ? "Buzz"
      : n
  );
};

module.exports = fizzBuzzArray;
