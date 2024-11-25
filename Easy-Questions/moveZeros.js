/**
 * time complexity - O(n);
 * space complexity - O(1);
 */

var nums = [0, 1, 0, 3, 12];
function moveZeros(nums) {
  let len = nums.length;
  let j = 0; // `j` tracks the position of the last non-zero element
  while (j < len) {
    if (nums[i] !== 0) {
      [nums[i], (nums[j] = nums[j]), nums[i]]; // swap non-zero element with zero elements...
      j += 1; // Move the pointer for the next non-zero element
    }
    i++
  }
  return nums;
}

let res = moveZeros(arr);
console.log(res);