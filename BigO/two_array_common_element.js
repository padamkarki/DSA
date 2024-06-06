const m = ["a", "b", "c", "z"];
const n = ["n", "j", "a"];

function containsCommon(a, b) {
  //nested solution, compare 1st array elemnt to 2nd all element
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        console.log("True");
        return true;
      }
    }
  }
  console.log("false");
  return false;
}

// containsCommon(m, n);

function containsCommon2(a, b) {
  // store first array is set
  const setA = new Set(a);
  0;
  // check if 2nd array element exists in set - return
  for (let i = 0; i < b.length; i++) {
    if (setA.has(b[i])) {
      console.log("True");
      return true;
    }
  }
}
containsCommon2(m, n);
