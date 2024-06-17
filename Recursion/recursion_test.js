let counter = 0;
function abc() {
  if (counter > 3) {
    return "done"; // basecase return
  }
  counter++;
  console.log(abc());
  return abc(); // recursive case return
}

abc();

// 1. Identify base case
// 2. Indentify the recursive case
// 3. Get closer and closer and return when needed, usually you have 2 returns
