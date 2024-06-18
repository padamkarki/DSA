function quickSort(arr, left, right) {
  let pivot;
  let pivotIndex;

  if (left < right) {
    pivot = right;
    pivotIndex = partition(arr, pivot, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  let pivotValue = arr[pivot];
  let pivotIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, right, pivotIndex);
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
