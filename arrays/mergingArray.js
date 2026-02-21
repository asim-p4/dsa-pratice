// 88. Merge Sorted Array

// Difficulty: Easy
// Platform: LeetCode
// Frequently Asked In: Adobe, Microsoft, Goldman Sachs, LinkedIn, Zoho, Juniper Networks

// Time O(m + n), Space O(m + n)
function mergingArray(nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }
  while (i < m) {
    result.push(nums1[i]);
    i++;
  }
  while (j < n) {
    result.push(nums2[j]);
    j++;
  }
  for (let k = 0; k < result.length; k++) {
    nums1[k] = result[k];
  }
}

const nums1 = [1, 3, 5, 7];
const nums2 = [2, 4, 6, 8];
mergingArray(nums1, nums1.length, nums2, nums2.length);
console.log(nums1);
