// 53. Maximum Subarray

// Given an integer array nums, find the subarray
//  with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]

// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

function MaxSubarray(nums) {
  let sumMax = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(current + nums[i], nums[i]);
    sumMax = Math.max(current, sumMax);
  }

  console.log(sumMax);
  return sumMax;
}

let num = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let num2 = [5, 4, -1, 7, 8];

MaxSubarray(num);
MaxSubarray(num2);
