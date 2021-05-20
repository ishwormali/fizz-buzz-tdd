/**
 * Finds fizz buzz strings.
 * @returns FIzz buzz string
 */
const findFizzBuzz = () => {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;
    if (isFizz && isBuzz) {
      result.push("FizzBuzz");
    } else if (isFizz) {
      result.push("Fizz");
    } else if (isBuzz) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result.join(",");
};

module.exports = findFizzBuzz;
