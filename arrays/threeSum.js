// 15. 3Sum
// Difficulty: Medium
// Platform: LeetCode
// Asked in: Adobe, Amazon, Times Internet, Snapdeal, Samsung, Microsoft, Morgan Stanley

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// time(n^3), space(1), TLE
function threeSum(nums) {
  const ans = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          ans.push([nums[i], nums[j], nums[k]].sort().stringify());
        }
      }
    }
  }

  return ans;
}
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
