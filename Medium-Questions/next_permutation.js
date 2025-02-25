/**
 * ->Find the rightmost decreasing element (pivot).
   ->Find the smallest element larger than pivot from the right.
   ->Swap them.
   ->Reverse the elements after pivotIdx to get the next permutation.
 */

// brute force solution
/**
 * steps 
 * 1. find the pivot index;
 * 2. swap the pivot element with the next largest element;
 * 3. reverse the elements after the pivot index;
 * time complexity: O(!n * n);
 * space complexity: O(1);
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time complexity: O(n);
 * Space complexity: O(1);
 */
var nextPermutation = function (nums) {
  let len = nums.length;
  let pivotIdx = -1;

  // find the largest pivot index (nums[i] < nums[i+1])
  for (let i = len; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivotIdx = i;
      break;
    }
  }

  // find the next largest element and swap it with the pivot element if any pivotIdx found
  for (let i = len; i > pivotIdx; i--) {
    if (nums[pivotIdx] < nums[i]) {
      [nums[pivotIdx], nums[i]] = [nums[i], nums[pivotIdx]];
      break;
    }
  }

  // if no pivot index
  if (pivotIdx == -1) {
    nums.reverse();
    return;
  }

  // reverse the elements after the pivot index
  let i = pivotIdx + 1,
    j = len - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  return nums;
};

// dry run 
// arr [1, 2, 3, 5, 6, 4] ==> [1,2,4,3,5,6];
// pivotIdx = 2;
// swap arr[1,2,3,5,6,4] ==> [1,2,4,5,6,3];
// reverse the elements from pivotIdx element + 1 till the end of the array;
// final resultant array --> [1,2,4,3,5,6]