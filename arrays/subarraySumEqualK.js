// 560. Subarray Sum Equals K
// Difficulty: Medium
// Platform: LeetCode
// Frequently Asked In: Microsoft, Snapdeal

// Given an array of integers nums and an integer k,
// return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array

// time O(n), space O(n)
function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;

  // Map to store val and frequency of prefix sums(sum from start to cur position)
  const map = new Map();

  // base case: prefix sum = 0 has occurred once
  // bcuz when sum-k = 0
  // then it mean sum has found since 0 is naturally an valid answer for this case
  map.set(0, 1);

  for (let num of nums) {
    sum += num; // running prefix sum

    // Check if there exists a prefix sum = (sum - k)
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    // Store current prefix sum in map
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

const nums = [1, 2, 3];
const k = 3;

const res = subarraySumEqualK(nums, k);
console.log(res);
