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
          ans.includes([nums[i], nums[j], nums[k]].sort().toString()) ||
            ans.push([nums[i], nums[j], nums[k]].sort().toString());
        }
      }
    }
  }

  return ans.map((str) => str.split(",").map(Number));
}

// time(n^2), space(1),
function threeSum(nums) {

  // Step 1: Sort the array
  // Sorting helps:
  // - Use two pointer approach
  // - Easily skip duplicates
  nums.sort((a, b) => a - b);

  const ans = [];

  // Step 2: Fix one element at index i
  for (let i = 0; i < nums.length - 2; i++) {

    // Skip duplicate values for i
    // Prevents duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Two pointers for remaining part
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {

      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {

        // Found valid triplet
        ans.push([nums[i], nums[left], nums[right]]);

        // Move both pointers
        left++;
        right--;

        // Skip duplicates for left pointer
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        // Skip duplicates for right pointer
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }

      } 
      else if (sum > 0) {
        // Sum too large → decrease it
        right--;
      } 
      else {
        // Sum too small → increase it
        left++;
      }
    }
  }

  return ans;
}

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
