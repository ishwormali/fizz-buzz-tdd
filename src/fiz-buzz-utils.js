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
    if (isFizz && isBuzz) {
      result.push(`${FIZZ}${BUZZ}`);
    } else if (isFizz) {
      result.push(FIZZ);
    } else if (isBuzz) {
      result.push(BUZZ);
    } else {
      result.push(i);
    }
  }

  return result.join(",");
};

module.exports = findFizzBuzz;
