function fibonacciLoop(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr[n]);
  console.log(arr);
  return arr[n];
}

function fibonacciRecursion(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

fibonacciLoop(4);
fibonacciLoop(6);

console.log(fibonacciRecursion(4));
console.log(fibonacciRecursion(6));
