// 73. Set Matrix Zeroes
// Difficulty: Medium
// Platform: LeetCode
// Frequently Asked In: Microsoft, Amazon

// Given an m x n integer matrix matrix, if an element is 0,
// set its entire row and column to 0's.
// You must do it in place.

// This function sets the entire row (i) and column (j) to 0
function alterPlace(i, j, m, n, matrix) {
  let row = 0;
  let col = 0;

  // Set all elements in row 'i' to 0
  // We iterate through all columns in row i
  while (col < n) {
    matrix[i][col] = 0;
    col++;
  }

  // Set all elements in column 'j' to 0
  // We iterate through all rows in column j
  while (row < m) {
    matrix[row][j] = 0;
    row++;
  }
}
//time O(m × n × (m + n)), space O(m * n)
function setMatricZero(matrix) {
  // Number of rows
  const m = matrix.length;

  // Number of columns
  const n = matrix[0].length;

  // Create a helper matrix (same size as original)
  // This will store which cells were originally 0
  // We use this to avoid modifying the matrix while scanning it
  const ary = Array.from({ length: m }, () => Array(n).fill(false));

  // First pass: find all zeros
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // If current element is 0
      if (!matrix[i][j]) {
        // Mark this position in helper matrix
        ary[i][j] = true;
      }
    }
  }

  // Second pass: update matrix
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // If this cell was originally 0
      if (ary[i][j]) {
        // Set entire row i and column j to 0
        alterPlace(i, j, m, n, matrix);
      }
    }
  }
}

// time O(m × n × (m + n)), space O(m * n), same as before
// Readability => Slightly better compared to above
// Memory usage	=> Slightly lower better compared to above
function setMatricZero(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const ary = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!matrix[i][j]) {
        ary.push([i, j]);
      }
    }
  }

  for (let [i, j] of ary) {
    let row = 0;
    let col = 0;
    while (col < n) {
      matrix[i][col] = 0;
      col++;
    }
    while (row < m) {
      matrix[row][j] = 0;
      row++;
    }
  }
}

//time O(m × n), space O(m + n)
function setMatricZero(matrix) {
  // Number of rows
  const m = matrix.length;

  // Number of columns
  const n = matrix[0].length;

  // Set to store row indices that must be zeroed
  let row = new Set();

  // Set to store column indices that must be zeroed
  let col = new Set();

  // First pass: find all zero positions
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // If current element is 0
      if (!matrix[i][j]) {
        // Store row index
        row.add(i);
        // Store column index
        col.add(j);
      }
    }
  }

  // Second step: zero out all marked rows
  row.forEach((el) => {
    let j = 0;

    // Traverse entire row
    while (j < n) {
      matrix[el][j] = 0;
      j++;
    }
  });

  // Third step: zero out all marked columns
  col.forEach((el) => {
    let i = 0;

    // Traverse entire column
    while (i < m) {
      matrix[i][el] = 0;
      i++;
    }
  });
}

// Example input matrix
const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

setMatricZero(matrix);
console.log(matrix);
