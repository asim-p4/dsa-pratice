// 136. Single Number

// Difficulty: Easy
// Platform: LeetCode

// Frequently Asked In: Meta, Apple, Uber, Qualcomm, Airbnb, Zoho, Adobe, Amazon, Microsoft, Google

//time O(n), space O(1)
function singleDight(nums) {
  let sum = 0;
  for (let j = 0; j < nums.length; j++) {
    sum = sum ^ nums[j];
  }
  return sum;
}

//time O(n^2), space O(1)
function singleDight(nums) {
  for (let j = 0; j < nums.length ; j++) {
    let status = false;
    for (let i = 0; i < nums.length; i++) {
      if (i === j) continue;
      if (nums[i] === nums[j]) {
        status = true;
        break;
      }
    }
    if (!status) return nums[j];
  }
}

const array = [1, 2, 3, 4, 5, 5, 4, 1, 3];

const res = singleDight(array);
console.log(res);
