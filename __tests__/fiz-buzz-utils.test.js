const getFizzBuzzGenerator = require("../src/fiz-buzz-utils");

describe("Fizz buzz utils tests", () => {
  it("should return fizz buzz solution", () => {
    const fizzBuzzSolution =
      "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,FizzBuzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,FizzBuzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,FizzBuzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz";
    const fn = getFizzBuzzGenerator(3, 5);
    const result = fn(100);
    expect(fizzBuzzSolution).toBe(result);
  });

  describe("Support dynamic values", () => {
    it("should return fizz buzz solution for 2 and 3", () => {
      const fizzBuzzSolution =
        "1,Fizz,Buzz,Fizz,5,FizzBuzz,7,Fizz,Buzz,Fizz,11,FizzBuzz,13,Fizz,Buzz,Fizz,17,FizzBuzz,19,Fizz,Buzz,Fizz,23,FizzBuzz,25,Fizz,Buzz,Fizz,29,FizzBuzz,31,Fizz,Buzz,Fizz,35,FizzBuzz,37,Fizz,Buzz,Fizz,41,FizzBuzz,43,Fizz,Buzz,Fizz,47,FizzBuzz,49,Fizz,Buzz,Fizz,53,FizzBuzz,55,Fizz,Buzz,Fizz,59,FizzBuzz,61,Fizz,Buzz,Fizz,65,FizzBuzz,67,Fizz,Buzz,Fizz,71,FizzBuzz,73,Fizz,Buzz,Fizz,77,FizzBuzz,79,Fizz,Buzz,Fizz,83,FizzBuzz,85,Fizz,Buzz,Fizz,89,FizzBuzz,91,Fizz,Buzz,Fizz,95,FizzBuzz,97,Fizz,Buzz,Fizz";
      const fn = getFizzBuzzGenerator(2, 3);
      const result = fn(100);
      expect(fizzBuzzSolution).toBe(result);
    });

    it("should return fizz buzz solution for 2 and 5", () => {
      const fizzBuzzSolution =
        "1,Fizz,3,Fizz,Buzz,Fizz,7,Fizz,9,FizzBuzz,11,Fizz,13,Fizz,Buzz,Fizz,17,Fizz,19,FizzBuzz,21,Fizz,23,Fizz,Buzz,Fizz,27,Fizz,29,FizzBuzz,31,Fizz,33,Fizz,Buzz,Fizz,37,Fizz,39,FizzBuzz,41,Fizz,43,Fizz,Buzz,Fizz,47,Fizz,49,FizzBuzz,51,Fizz,53,Fizz,Buzz,Fizz,57,Fizz,59,FizzBuzz,61,Fizz,63,Fizz,Buzz,Fizz,67,Fizz,69,FizzBuzz,71,Fizz,73,Fizz,Buzz,Fizz,77,Fizz,79,FizzBuzz,81,Fizz,83,Fizz,Buzz,Fizz,87,Fizz,89,FizzBuzz,91,Fizz,93,Fizz,Buzz,Fizz,97,Fizz,99,FizzBuzz";
      const fn = getFizzBuzzGenerator(2, 5);
      const result = fn(100);
      expect(fizzBuzzSolution).toBe(result);
    });

    it("should not return wrong fizz buzz solution for 2 and 5", () => {
      const fizzBuzzSolution =
        "1,Fizz,3,Fizz,Buzz,Fizz,7,Fizz,9,10,11,Fizz,13,Fizz,Buzz,Fizz,17,FizzBuzz,19,FizzBuzz,21,Fizz,23,Fizz,Buzz,Fizz,27,Fizz,29,FizzBuzz,31,Fizz,33,Fizz,Buzz,Fizz,37,Fizz,39,FizzBuzz,41,Fizz,43,Fizz,Buzz,Fizz,47,Fizz,49,FizzBuzz,51,Fizz,53,Fizz,Buzz,Fizz,57,Fizz,59,FizzBuzz,61,Fizz,63,Fizz,Buzz,Fizz,67,Fizz,69,FizzBuzz,71,Fizz,73,Fizz,Buzz,Fizz,77,Fizz,79,FizzBuzz,81,Fizz,83,Fizz,Buzz,Fizz,87,Fizz,89,FizzBuzz,91,Fizz,93,Fizz,Buzz,Fizz,97,Fizz,99,FizzBuzz";
      const fn = getFizzBuzzGenerator(2, 5);
      const result = fn(100);
      expect(fizzBuzzSolution).not.toBe(result);
    });
  });

  describe("Support number of values", () => {
    const fizzBuzzFn = getFizzBuzzGenerator(3, 5);
    it("should only return 20 values pattern when 20 is supplied as the required number of values", () => {
      const fizzBuzzSolution =
        "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz";
      const result = fizzBuzzFn(20);
      expect(fizzBuzzSolution).toBe(result);
    });

    it("should return 120 fizz buzz values pattern when 120 is supplied as the required number of values", () => {
      const fizzBuzzSolution =
        "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,FizzBuzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,FizzBuzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,FizzBuzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz,101,Fizz,103,104,FizzBuzz,106,107,Fizz,109,Buzz,Fizz,112,113,Fizz,Buzz,116,Fizz,118,119,FizzBuzz";
      const result = fizzBuzzFn(120);
      expect(fizzBuzzSolution).toBe(result);
    });

    it("should be able to call the same curried function multiple times for n = 20 and n = 20 for the same fizz buzz parameters", () => {
      let fizzBuzzSolution =
        "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz";
      let result = fizzBuzzFn(20);
      expect(fizzBuzzSolution).toBe(result);

      fizzBuzzSolution =
        "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,FizzBuzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,FizzBuzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,FizzBuzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz";
      result = fizzBuzzFn(100);
      expect(fizzBuzzSolution).toBe(result);
    });
  });
});
