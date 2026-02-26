// 75. Sort Color
// Difficulty: Medium
// Platform: LeetCode
// Asked in: MicroSoft Amazon, MakeMyTrip


//time O(n^2), space O(1)
function sort(nums) {
  for (let i = 0; i < nums.length-1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        [nums[i], nums[j]] = [nums[j] , nums[i]];
      }
    }
  }
}


//time O(n), space O(1)
function dutchNationalFlagAlg(nums) {
  let low = 0;                 // next position for 0
  let mid = 0;                 // current index
  let high = nums.length - 1;  // next position for 2

  while (mid <= high) {

    if (nums[mid] === 0) {
      // Swap 0 to the front
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    }

    else if (nums[mid] === 1) {
      // 1 is already in correct middle region
      mid++;
    }

    else { // nums[mid] === 2
      // Swap 2 to the end
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

const nums = [2, 0, 2, 1, 1, 0];
sort(nums);