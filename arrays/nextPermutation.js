// 31. Next Permutation
// Difficulty: Medium
// Platform: LeetCode
// Asked in: Adobe, Goldman Sachs, Uber

// 1) Scan from right → find first decreasing point
// Find index i such that
// nums[i] < nums[i + 1]
// This is the pivot
// 2) If no such index exists
// Array is in descending order
// 👉 Just reverse the whole array
// 3) From right → find smallest element greater than pivot
// Find j such that
// nums[j] > nums[i]
// Choose the closest greater (not just any)
// 4) Swap pivot and that element
// Swap nums[i] and nums[j]
// 5) Reverse everything after index i
// This makes the suffix smallest possible

function nextPermutation(nums) {
  let i = nums.length - 2;

  // Step 1: find first decreasing element
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;

    // Step 2: find just larger element
    while (nums[j] <= nums[i]) {
      j--;
    }

    // Step 3: swap
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Step 4: reverse right side
  let left = i + 1,
    right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

const nums = [4, 2, 0, 2, 3, 2, 0];
nextPermutation(nums);
