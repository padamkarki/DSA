const letters = ["a", "x", "z", "r"];
const no = [3, 52, 1, 6, 7];

console.log(letters.sort());
console.log(no.sort()); // sort methd converts it to string and sort as per 0th index
console.log(
  no.sort(function (a, b) {
    return a - b;
  })
);
