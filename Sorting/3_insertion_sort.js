//BigO(n^2)
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const len = array.length; // Get the length of the array
  for (let i = 1; i < len; i++) {
    // Start from the second element (index 1)
    let temp = array[i]; // Store the current element in temp
    let j = i - 1; // Initialize j to the index of the element before the current element

    // Shift elements of the sorted segment that are greater than temp to the right
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]; // Move the element one position to the right
      j--; // Move to the next element on the left
    }
    array[j + 1] = temp; // Insert the temp element in its correct position
  }
  return array; // Return the sorted array
}

console.log(insertionSort(numbers));

//other way
function insertionSort2(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // Move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
}

console.log(insertionSort2(numbers));
