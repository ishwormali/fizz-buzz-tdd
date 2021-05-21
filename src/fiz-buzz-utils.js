/**
 * Finds fizz buzz strings.
 * @returns FIzz buzz string
 */
const FIZZ = "Fizz";
const BUZZ = "Buzz";
const findFizzBuzz = () => {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;
    const fizzBuzzStr = (isFizz ? FIZZ : "") + (isBuzz ? BUZZ : "") || i;
    result.push(fizzBuzzStr);
  }

  return result.join(",");
};

module.exports = findFizzBuzz;
