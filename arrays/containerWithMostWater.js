// 11. Container With Most Water
// Difficulty: Medium
// Platform: LeetCode
// Asked in: Flipkart, Dunzo

// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

//time O(n^2), space O(1), TLE
function maxWater(height) {
  let max = 0;

  // Outer loop picks first line
  for (let i = 0; i < height.length - 1; i++) {
    // Inner loop picks second line
    for (let j = i + 1; j < height.length; j++) {
      // Height of water is limited by smaller line
      const minHeight = Math.min(height[i], height[j]);

      // Width between the two lines
      const width = j - i;

      // Area formed
      const area = minHeight * width;

      // Update maximum
      max = Math.max(max, area);
    }
  }

  return max;
}

//time O(n), space O(1), TLE
function maxWater(height) {
  let max = 0;

  // Two pointers:
  // start at leftmost line
  let start = 0;

  // end at rightmost line
  let end = height.length - 1;

  // Continue until pointers meet
  while (start < end) {
    // Water height is limited by shorter line
    const minHeight = Math.min(height[start], height[end]);

    // Width between lines
    const width = end - start;

    // Calculate area
    const area = minHeight * width;

    // Update maximum area
    max = Math.max(max, area);

    // Move pointer of smaller height
    // Because moving taller one cannot increase area
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return max;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxWater(height));
