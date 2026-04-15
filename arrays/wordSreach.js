// 79. Word Search
// Difficulty: Medium
// Platform: LeetCode
// Asked in: Google, Ola, Goldman Sachs

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells
// where adjacent cells are horizontally or vertically neighboring
// The same letter cell may not be used more than once.

// Recursive function to search the word in the board
function wordSreach(board, word, a, b, tracker, array) {
  // ✅ Base case:
  // If we have matched all characters of the word
  if (tracker === word.length) return true;

  // ❌ Out of bounds check (invalid cell)
  if (a < 0 || b < 0 || a >= board.length || b >= board[0].length) {
    return false;
  }

  // ✅ Check:
  // 1. Current cell matches the current character of the word
  // 2. Cell is not already visited
  if (board[a][b] === word[tracker] && !array[a][b]) {
    // 🔹 Mark this cell as visited
    array[a][b] = true;

    // 🔹 Explore all 4 directions
    // Move Down
    const rowPlus = wordSreach(board, word, a + 1, b, tracker + 1, array);

    // Move Right
    const colPlus = wordSreach(board, word, a, b + 1, tracker + 1, array);

    // Move Up
    const rowMinus = wordSreach(board, word, a - 1, b, tracker + 1, array);

    // Move Left
    const colMinus = wordSreach(board, word, a, b - 1, tracker + 1, array);

    // 🔹 Backtracking step:
    // Unmark the cell so it can be used in another path
    array[a][b] = false;

    // If any direction returns true → word is found
    return rowPlus || colPlus || rowMinus || colMinus;
  }

  // ❌ If character doesn't match or already visited
  return false;
}

// time O(m × n × 4^L), space O(m × n),
function wordSearchLoop(board, word) {
  // Create a visited matrix (same size as board)
  // to track visited cells during DFS
  const array = Array.from({ length: board.length }, () =>
    Array.from({ length: board[0].length }).fill(false),
  );

  // 🔹 Try starting from every cell
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // Only start DFS if first character matches
      if (board[i][j] === word[0]) {
        // Call recursive search
        if (wordSreach(board, word, i, j, 0, array)) {
          return true; // Word found
        }
      }
    }
  }

  // If no path found
  return false;
}

// Example input
const board = [
  ["C", "A", "A"],
  ["A", "A", "A"],
  ["B", "C", "D"],
];

const word = "AAB";

// Run
const res = wordSearchLoop(board, word);
console.log(res);
