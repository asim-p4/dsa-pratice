// 53. Maximum Subarray
// Difficulty: Medium
// Platform: LeetCode
// Asked in: Google, Microsoft

//time O(n^2), space O(1), TLE
function maxSumSubarray(nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(max, sum);
    }
  }

  return max;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

maxSumSubarray(nums);
