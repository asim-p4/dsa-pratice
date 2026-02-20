// 2965. Find Missing and Repeated Values

// Difficulty: Easy
// Platform: LeetCode
// Frequently Asked In: Amazon

// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2].
// Each integer appears exactly once except a which appears twice and b which is missing.
// The task is to find the repeating and missing numbers a and b.
// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.


//time O(n^2), space O(n^2)
function missingAndRepeated(n, grid) {
  const digits = new Set();
  const ans = [];

  // Step 1: Find the repeated number
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (digits.has(grid[i][j])) {
        ans.push(grid[i][j]); // repeated
      } else {
        digits.add(grid[i][j]);
      }
    }
  }

  // Step 2: Find the missing number
  for (let i = 1; i <= n * n; i++) {
    if (!digits.has(i)) {
      ans.push(i); // missing
      return ans;
    }
  }
}
const grid = [
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
];
console.log(missingAndRepeated(grid.length, grid));
