//Google Question - First recurring character
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array1 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 3, 4, 5];

//BigO(n) - Hashmap
function firstRecurringCharacterHashMap(input) {
  let map = {}; // map is empty - everything is undefined untill something added as added on else condition
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      // if map[2] !== undefined = false // it is undefined
      console.log("Hasmap mthd: ", input[i]);
      return input[i];
    } else {
      map[input[i]] = i; //its saving in obj as {2: 0} 2 being key and 0 being value which is index
    }
  }
  console.log("Hasmap mthd: ", undefined);
  return undefined;
}

firstRecurringCharacterHashMap(array);
firstRecurringCharacterHashMap(array1);
firstRecurringCharacterHashMap(array2);

//BigO(n) - Set
function firstRecurringCharacter(input) {
  const mySet = new Set();
  for (let i = 0; i < input.length; i++) {
    if (mySet.has(input[i])) {
      console.log("Set mthd: ", input[i]);

      return input[i];
    } else {
      mySet.add(input[i]);
    }
  }
  console.log("Set mthd: ", undefined);
  return undefined;
}

firstRecurringCharacter(array);
firstRecurringCharacter(array1);
firstRecurringCharacter(array2);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

//BigO(n^2) - Below is different solution doesn't work for array1 as other mthds
function firstRecurringCharacter2(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        console.log("loop mthd: ", input[i]);
        return input[i];
      }
    }
  }
  console.log("loop mthd: ", undefined);
  return undefined;
}

firstRecurringCharacter2(array);
firstRecurringCharacter2(array1);
firstRecurringCharacter2(array2);
