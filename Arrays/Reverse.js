// I am Padam to madaP ma I

function reverse(str) {
  // if empty
  if (!str || str.length < 2) {
    return str;
  }

  //loop from backwards and push to array
  let array = [];
  for (let i = str.length - 1; i >= 0; i--) {
    array.push(str[i]);
  }

  // array to string
  result = array.join("");
  result2 = array.toString();

  console.log(result, "Result");
  console.log(result, "Result2");
  return result;
}
let word = "Padam me";
reverse(word);

// javascript specific-------------------------------------------------------------------

function rev(str) {
  // split for converting to array
  // reverse
  // join for converting to string
  result = str.split("").reverse().join("");
  console.log(result, "JS");
  return result;
}

rev(word);
