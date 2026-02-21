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

// Time O(m + n), Space O(1)
function mergingArray(nums1, m, nums2, n) {
  // i → points to the last valid element in nums1
  // (ignore the extra 0s at the end)
  let i = m - 1;

  // j → points to the last element in nums2
  let j = n - 1;

  // k → points to the last position of nums1
  // where we will place the largest element
  let k = m + n - 1;

  // Compare elements from the END of both arrays
  // and place the larger one at position k
  while (i >= 0 && j >= 0) {

    // If current element of nums1 is bigger
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];  // Place it at the back
      i--;                  // Move nums1 pointer left
    } else {
      nums1[k] = nums2[j];  // Otherwise place nums2 element
      j--;                  // Move nums2 pointer left
    }

    // Move the placement pointer left
    k--;
  }

  // If nums2 still has elements left,
  // copy them into nums1
  // (No need to copy remaining nums1 elements
  // because they are already in correct position)
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
}

const nums1 = [1, 3, 5, 7];
const nums2 = [2, 4, 6, 8];
mergingArray(nums1, nums1.length, nums2, nums2.length);
console.log(nums1);
