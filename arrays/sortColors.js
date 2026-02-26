// 75. Sort Color
// Difficulty: Medium
// Platform: LeetCode
// Asked in: MicroSoft Amazon, MakeMyTrip


//time O(n^2), space O(1)
function sort(nums) {
  for (let i = 0; i < nums.length-1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        [nums[i], nums[j]] = [nums[j] , nums[i]];
      }
    }
  }
}

const nums = [2, 0, 2, 1, 1, 0];
sort(nums);