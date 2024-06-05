const boxes = ["a", "b", "c", "d"];

function pairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

pairs(boxes);
