/**
 * Finds fizz buzz strings.
 * @returns FIzz buzz string
 */
const FIZZ = "Fizz";
const BUZZ = "Buzz";
const getFizzBuzzGenerator = (fizz, buzz) => (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    const isFizz = i % fizz === 0;
    const isBuzz = i % buzz === 0;
    const fizzBuzzStr = (isFizz ? FIZZ : "") + (isBuzz ? BUZZ : "") || i;
    result.push(fizzBuzzStr);
  }

  return result.join(",");
};

module.exports = getFizzBuzzGenerator;
