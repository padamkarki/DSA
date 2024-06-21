let cache = {};
function memorizedAddTo80(n) {
  if (n in cache) {
    return cache[n]; // if exists return
  } else {
    // if not caclulate
    console.log("Long time");
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log("1", memorizedAddTo80(5));
console.log("2", memorizedAddTo80(5)); // no recalculation for this, its memorised
console.log("3", memorizedAddTo80(6)); // new calculations

// JS closure - for moving cache obj from global var
function memorizdAddTo80() {
  let cache = {}; // now not in global var
  return function (n) {
    if (n in cache) {
      return cache[n]; // if exists return
    } else {
      // if not caclulate
      console.log("Long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

console.log("1.", memorizdAddTo80(5));
console.log("2.", memorizdAddTo80(5)); // no recalculation for this, its memorised
console.log("3.", memorizdAddTo80(6)); // new calculations
