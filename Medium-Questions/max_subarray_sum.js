/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Optimized version with O(n)
 * Space Complexity O(1)
 */
var maxSubArray = function (nums) {
  let len = nums.length;
  let maxSum = nums[0]; // track the actually resultant sum..
  let currSum = 0; // keep the track of current subarray sum till the current index
  for (let i = 0; i < len; i++) {
    currSum += nums[i];

    if (currSum > maxSum) {
      maxSum = currSum;
    }

    if (currSum < 0) {
      currSum = 0; // reset current sum to 0 if anytime we have negative sum...
    }
  }
  return maxSum; // return maxSum value..
};

/**
 * Dry Run 
 * Iteration 1: i = 0
Current Element: nums = 2
Update currSum:
currSum = currSum + nums = 0 + 2 = 2
Update maxSum:
maxSum = Math.max(maxSum, currSum) = Math.max(2, 2) = 2 (no change)
Check if currSum < 0:
currSum is not less than 0, so no reset.
Iteration 2: i = 1
Current Element: nums = 0
Update currSum:
currSum = currSum + nums = 2 + 0 = 2
Update maxSum:
maxSum = Math.max(maxSum, currSum) = Math.max(2, 2) = 2 (no change)
Check if currSum < 0:
Again, currSum is not less than 0, so no reset.
Iteration 3: i = 2
Current Element: nums = 8
Update currSum:
currSum = currSum + nums = 2 + 8 = 10
Update maxSum:
maxSum = Math.max(maxSum, currSum) = Math.max(2, 10) = 10 (updated)
Check if currSum < 0:
Still not less than zero, so no reset.
Iteration 4: i = 3
Current Element: nums = -2
Update currSum:
currSum = currSum + nums = 10 + (-2) = 8
Update maxSum:
maxSum = Math.max(maxSum, currSum) = Math.max(10, 8) = 10 (no change)
Check if currSum < 0:
Again, not less than zero, so no reset.
Iteration 5: i = 4
Current Element: nums = -1
Update currSum:
currSum = currSum + nums = 8 + (-1) = 7
Update maxSum:
maxSum = Math.max(maxSum, currSum) = Math.max(10, 7) = 10 (no change)
Check if currSum < 0:
Not less than zero again, so no reset.
    maxSum = 10;

 */



/**
 * Brute force solution
 * O(n^2) time complexity
 * O(1) space complexity
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let len = nums.length;
  let maxSum = nums[0];
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};
