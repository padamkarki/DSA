function factorialLoop(number) {
  if (number === 0 || number === 1) {
    console.log(1, ": Loop");
    return 1;
  }
  let result = 1;
  for (let i = number; i > 1; i--) {
    result *= i;
  }
  console.log(result, ": Loop");
  return result;
}

function factorialRecursion(number) {
  // Base cases: 0! = 1 and 1! = 1
  if (number === 0 || number === 1) {
    return 1;
  }

  // Recursive case: number! = number * (number-1)!
  return number * factorialRecursion(number - 1);
}

factorialLoop(5);
factorialLoop(6);
factorialLoop(0);
factorialLoop(1);

console.log(factorialRecursion(5), ": Recursion"); // Output: 120
console.log(factorialRecursion(0), ": Recursion"); // Output: 1
console.log(factorialRecursion(1), ": Recursion"); // Output: 1
