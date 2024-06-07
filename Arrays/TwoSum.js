// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        console.log([i, j], "Map");
        return [i, j];
      }
    }
  }
}

// mapping used - BigO(n)
function twoSum(nums, target) {
  // creating map
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  // finding target - current is in map or not
  for (let i = 0; i < nums.length; i++) {
    const balance = target - nums[i];
    if (map.has(balance) && map.get(balance) !== i) {
      console.log([i, map.get(balance)], "Efficient");
      return [i, map.get(balance)];
    }
  }
  return null;
}

let num = [2, 7, 11, 15];
let tar = 26;
twoSumBrute(num, tar);
twoSum(num, tar);
