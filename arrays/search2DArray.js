// 74. Search a 2D Matrix
// Difficulty: Medium
// Platform: LeetCode
// Asked in: Meta, Cisco, Goldman Sachs, Amazon, Visa, Uber

// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

// time (n^2), space(1) TLE
function search2DArray(mat, tar) {
  for (let ary of mat) {
    for (let el of ary) {
      if (el === tar) return true;
    }
  }

  return false;
}
