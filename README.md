# Fizz Buzz solution

This project is to demonstrate the Fizz Buzz solution using Test Driven Development(TDD) approach. It uses Javascript as the programming language and jest as the testing tool.

## Run the test

```
npm i
npm run test
```

# Fizz Buzz solution TDD approach

The following shows how the code was developed with TDD approach with multiple tests and refactoring.


1) Created a test file and added a simple test “should return fizz buzz solution” for utility function to test the output with the Fizz buzz pattern. The test is failing at this point
2) Created the utility function named “findFizzBuzz” that does not take any parameters and returns fizz buzz patterns. 
    * This function uses simple loop to loop from 1 to 100 and check for division by 3 and 5 for FizzBuzz or 3 for Fizz and 5 for Buzz and stores them in an array and returns the string by using array.join method with “,” as the separator. The commit for the code is 35d3278050031ccc797186dad40d4587c01e1098. 
    * Import the function in the test file.
    * The test are green at this point.
3) The function “findFizzBuzz” has been refactored to use constants for string Fizz and Buzz. The tests are green. The commit hash for the code is cfd1ea61baade27350ca907c1f28cd46edc89a0c
4) Refactored the function to use a ternary operator to simplify the if else condition. The tests are all green. The commit hash is 57408cbb28810dab7c11c4e397fe16e3fb60aaec
5) The next refactoring is to allow the function to take the values that need to be tested instead of hard coding 3 and 5 as this function can be used to take other values such as 2 and 3, or 2 and 5.
6) Added a new test code “should return fizz buzz solution for 2 and 3” to call the utility function with two parameters 2 and 3 and tested the output with the corresponding Fizz Buzz string pattern. At this point the test is failing.
7) Refactored the utility code “findFizzBuzz” to accept two parameters fizz and buzz and use them instead of hardcoded 3 and 5. The second test now passes but the first test is still failing.
8) Change the first test to pass on parameters 3 and 5. Both tests are passing at this point. The commit hash 3446bd81a60fcbf426213afd4d61584a46b1855f.
9) Added new test “should return fizz buzz solution for 2 and 5” to test for 2 and 5. The tests are all green at this point. The commit hash is 075399580a11dfee65054aeb8c9094a8a879a06f
10) Added a new test “should not return the wrong fizz buzz solution for 2 and 5” to test if the output of the utility function is not equal to the wrong expected value. The tests are all passing at this point. The commit hash is 21d408b5dfe61465767edae86b8a4dfa55c52a15.
11) Further improvement can be made to not hard code 100 and provide the caller the flexibility to supply how many number patterns it requires. For this I am going to use closure as it allows the caller to get a callable function that can print any N for given fizz and buzz number multiple times without having to supply fizz and buzz numbers all the time.
12) Added a test “should only return 20 values pattern when 20 is supplied as the required number of values” to test the functionality. At this point the test is failing.
13) Refactored the function to return a closure function which can be called with dynamic and to return the number of patterns. At this point the 2 tests pass and 3 fails. This will require refactoring/adjusting the tests. 
14) Fixed the tests to use the callable function returned by findFizzBuzz and supply 100 as the n. The tests are now green. The commit hash is 0bb0d789a06ff3c558db7ed3668fdd2b35da4ac8
15) Added new test “should return 120 fizz buzz values pattern when 120 is supplied as the required number of values”to see if the n is accepted beyond 100. All tests are green at this point. The commit hash is 51316c9f8792b07162f0738cd25afc9c452bf4b3
16) Refactor the function name from “findFizzBuzz” to a more suitable name “getFizzBuzzGenerator”. The tests are all passing. The commit hash is 5fe94b9761544e14ab13d965644fa286ca5d05a7.
17) Write a test to demonstrate how same fizz buzz parameters can be utilized to call multiple times for different number of fizz buzz patterns. The commit hash is 6c0a5bdb9f832efadcaac1aa3252d6457eaa9cde