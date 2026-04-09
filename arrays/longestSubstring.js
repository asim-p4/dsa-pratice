// 3. Longest Substring Without Repeating Characters
// Difficulty: Medium
// Platform: LeetCode
// Asked in: Morgan Stanley, Amazon

//time O(n), space O(n)
function longestSubstring(s) {
  // Map to store each character and its last seen index
  const map = new Map();

  // 'first' is the start of our sliding window
  let first = 0;

  // 'max' stores the maximum length found so far
  let max = 0;

  // 'sec' is the end of the sliding window (right pointer)
  for (let sec = 0; sec < s.length; sec++) {
    const char = s[sec]; // current character

    // If character already exists in map AND
    // its last occurrence is inside the current window
    if (map.get(char) >= first) {
      // Move the start of window right after the duplicate
      first = map.get(char) + 1;
    }

    // Update the last seen index of the character
    map.set(char, sec);

    // Calculate current window length and update max if needed
    max = Math.max(max, sec - first + 1);
  }

  // Return the maximum length of substring without repeating characters
  return max;
}

const str = "tmmzuxt";
const res = longestSubstring(str);
console.log(res);
