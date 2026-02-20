// 169. Majority Element
// Difficulty: Easy
// Platform: LeetCode
// Frequently Asked In: Google, Amazon

//  Problem Statement:-
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

//time O(n), space O(1)
function majorityElement(nums) {
  // Candidate for majority element
  let candidate = null;

  // Counter to track dominance
  let count = 0;

  for (const num of nums) {
    // If count drops to 0,
    // choose current number as new candidate
    if (count === 0) {
      candidate = num;
    }

    // If current number matches candidate,
    // increment count, otherwise decrement
    count += num === candidate ? 1 : -1;
  }

  // Since problem guarantees majority exists,
  // candidate will be the majority element
  return candidate;
}

//time O(n), space O(n)
function majorityElement(nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);

    if (map.get(num) > nums.length / 2) {
      return num;
    }
  }
}

//time O(nlogn), space O(1)
function majorityElement(nums) {
  nums.sort((a, b) => a - b);
  // Majority element must occupy middle index of sorted array
  return nums[Math.floor(nums.length / 2)];
}

const nums = [6, 5, 5];
console.log(majorityElement(nums));


