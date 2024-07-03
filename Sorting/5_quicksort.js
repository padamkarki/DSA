function quickSort(arr, left, right) {
  let pivot; // The pivot element's index
  let pivotIndex; // The final position of the pivot element after partition

  if (left < right) {
    pivot = right; // Choose the rightmost element as pivot
    pivotIndex = partition(arr, pivot, left, right); // Partition the array and get the pivot's final position

    quickSort(arr, left, pivotIndex - 1); // Recursively apply to the left subarray
    quickSort(arr, pivotIndex + 1, right); // Recursively apply to the right subarray
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  let pivotValue = arr[pivot]; // Value of the pivot element
  let pivotIndex = left; // Start pivot index at the left boundary

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex); // Swap elements smaller than pivot to the left
      pivotIndex++; // Move the pivot index to the right
    }
  }
  swap(arr, right, pivotIndex); // Move the pivot element to its final place
  return pivotIndex;
}

function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
