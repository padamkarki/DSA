// fib nth val recursion
//O(2^n)
let calculationSlow = 0;
function fibonacci(n) {
  calculationSlow++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// fib nth val recursion + Memoriozation
//O(n)
let calculationFast = 0;
function fibMaster() {
  let cache = {};
  return function fib(n) {
    calculationFast++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

// fib sequence with iteration
function fibSeq(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  console.log("fibSeq Iter: ", result[n - 1]);
  return result;
}

console.log("Slow Fib: ", fibonacci(10));
console.log("we did " + calculationSlow + " caculation");

console.log("--------------------");

const fastFib = fibMaster();
console.log("Fast Fib: ", fastFib(10));
console.log("we did " + calculationFast + " caculation");

console.log("--------------------");

console.log("Fib Seq: ", fibSeq(11));
