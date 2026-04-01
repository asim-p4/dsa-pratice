// 74. Search a 2D Matrix
// Difficulty: Medium
// Platform: LeetCode
// Asked in: Meta, Cisco, Goldman Sachs, Amazon, Visa, Uber

// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

// time O(n^2), space O(1) TLE
function search2DArray(mat, tar) {
  for (let ary of mat) {
    for (let el of ary) {
      if (el === tar) return true;
    }
  }

  return false;
}

// time O(log m + log n), space O(1)
function search2DArray(matrix, target) {
  // m = number of rows
  const m = matrix.length;

  // n = number of columns
  const n = matrix[0].length;

  // We will first find the correct row using binary search
  let matStart = 0; // start index of rows
  let matEnd = m - 1; // end index of rows

  // Binary search on rows
  while (matStart < matEnd) {
    // Find middle row
    let matMid = Math.floor((matStart + matEnd) / 2);

    // If target is greater than the LAST element of mid row,
    // it must be in rows BELOW
    if (target > matrix[matMid][n - 1]) {
      matStart = matMid + 1;

      // If target is smaller than the FIRST element of mid row,
      // it must be in rows ABOVE
    } else if (target < matrix[matMid][0]) {
      matEnd = matMid - 1;

      // Otherwise, target lies within this row's range
    } else {
      // We found the correct row
      matStart = matMid;
      break;
    }
  }

  // Now we assume matStart is the correct row index
  const ary = matrix[matStart];

  // Before searching, check if target is within this row's range
  if (target >= ary[0] && target <= ary[n - 1]) {
    // Now perform binary search inside the row
    let start = 0; // start index of columns
    let end = n - 1; // end index of columns

    while (start <= end) {
      // Find middle element in row
      let mid = Math.floor((start + end) / 2);

      // If target is greater, search right half
      if (target > ary[mid]) {
        start = mid + 1;

        // If target is smaller, search left half
      } else if (target < ary[mid]) {
        end = mid - 1;

        // If target is found
      } else if (target === ary[mid]) {
        return true;
      }
    }
  }

  // If not found in row, return false
  return false;
}

const matrix = Array.from({ length: 10 }, (_, row) => {
  return Array.from({ length: 10 }, (_, col) => row * 10 + col + 1);
});
const result = search2DArray(matrix, 12);
console.log(result);

// [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
//   [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//   [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
//   [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
//   [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
//   [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
//   [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
// ];
