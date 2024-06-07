// first create empty array
// then if arr1 item < arr2 item then push arr1 to empty arr3 and arr index +1
// if arr2 item < arr1 item then push arr2 to arr3 and arr index +1

// BigO(n + m)

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

function mergeSorted(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  console.log(result);
  return result;
}

mergeSorted(array1, array2);
