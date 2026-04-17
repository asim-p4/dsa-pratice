// 238. Product of Array Except Self
// Difficulty: Medium
// Platform: LeetCode
// Frequently Asked In: Google, Goldman Sachs, Ola

// Given an integer array nums, return an array answer
// such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

//time O(n), space O(1)
function arrayProductExceptSelf(nums) {
  const n = nums.length;

  // Create result array and initialize all values to 1
  // We use 1 because it's the neutral value for multiplication
  const result = new Array(n).fill(1);

  // --------------------
  // STEP 1: LEFT PRODUCTS
  // --------------------

  let left = 1;
  // 'left' will store the product of all elements to the LEFT of current index

  for (let i = 0; i < n; i++) {
    // At index i, store product of all elements before i
    result[i] = left;

    // Update 'left' by multiplying current element
    // So next index gets product including this element
    left *= nums[i];
  }

  /*
After this loop:
result = [1, 1, 2, 6, 24]

Explanation:
i=0 → left=1 → result[0]=1 → left=1*1=1
i=1 → left=1 → result[1]=1 → left=1*2=2
i=2 → left=2 → result[2]=2 → left=2*3=6
i=3 → left=6 → result[3]=6 → left=6*4=24
i=4 → left=24 → result[4]=24 → left=24*5=120
*/

  // --------------------
  // STEP 2: RIGHT PRODUCTS
  // --------------------

  let right = 1;
  // 'right' will store the product of all elements to the RIGHT

  for (let i = n - 1; i >= 0; i--) {
    // Multiply current value (left product) with right product
    result[i] *= right;

    // Update 'right' by multiplying current element
    // So next iteration (moving left) includes this element
    right *= nums[i];
  }

  /*
Step-by-step:

Initial result = [1, 1, 2, 6, 24]
right = 1

i=4 → result[4] = 24 * 1 = 24 → right = 1*5 = 5
i=3 → result[3] = 6 * 5 = 30 → right = 5*4 = 20
i=2 → result[2] = 2 * 20 = 40 → right = 20*3 = 60
i=1 → result[1] = 1 * 60 = 60 → right = 60*2 = 120
i=0 → result[0] = 1 * 120 = 120 → right = 120*1 = 120

Final result = [120, 60, 40, 30, 24]
*/
  return result;
}

const nums = [1, 2, 3, 4];

const res = arrayProductExceptSelf(nums);
console.log(res);
