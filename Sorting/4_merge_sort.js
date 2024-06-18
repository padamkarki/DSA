//BigO(n log n)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(arr) {
  if (arr.length <= 1) {
    // if the array has one or zero elements, it is already sorted
    return arr;
  }

  //midle
  const mid = math.floor(arr.length / 2);
  const left = arr.slice(0, mid); // 0 = start, mid = end, end not included in slice
  const right = arr.slice(mid); // mid to end

  return merge(mergeSort(left), mergeSort(right)); //recursively sort both halves and merge them
}

function merge(left, right) {
  let result = []; // final array for ouput
  let leftIndex = 0; // pointer for left array
  let rightIndex = 0;

  // while elements in both array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      // if el in left is small , pust to left el to result
      result.push(left[leftIndex]);
      leftIndex++; // pointer increase
    } else {
      result.push(right[rightIndex]); // if el in left is big , pust right el to result
      rightIndex++; // pointer increase
    }
  }

  result = result.concat(left.slice[leftIndex]); // Concatenate the remaining elements of the left array (if any)
  result = result.concat(right.slice[rightIndex]); // Concatenate the remaining elements of the right array (if any)

  return result;
}
