function rotateArray(nums) {
  if (nums.length < 1 && k === 0) return nums;

  let j = nums.length - 1;
  k = k % nums.length;

  function reverseArray(i, j) {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }

  reverseArray(0, j);
  reverseArray(0, k - 1); // reverse elements from 0 value to k value
  reverseArray(k, j);
}

/**
 * Short Notes for Key Concepts:
   -Reverse Approach:
   -
   -Rotate the array by reversing parts of it in three steps:
   -Reverse the entire array.
   -Reverse the first k elements.
   -Reverse the remaining elements.
   -Key Observations:
   -
   -Reversing the entire array moves the k largest elements to the front.
   -Reversing the first k elements reorders them correctly.
   -Reversing the rest restores their original order.
   -Time Complexity:
   -
   -Each reversal operation takes O(n) time.
   -Total complexity: O(n).
   -Space Complexity:
   -
   -No additional space is used for another array.
   -Space complexity: O(1).
   -Edge Case Handling:
   -
   -Normalizing k (k = k % nums.length) ensures we avoid redundant rotations (e.g., k > nums.   -length).
 * 
 * Time Complexity:

Each reversal operation takes O(n) time.
Total complexity: O(n).
Space Complexity:

No additional space is used for another array.
Space complexity: O(1).
 * 
Dry Run for [1, 2, 3, 4, 5, 6, 7], k = 3:
Reverse entire array: [7, 6, 5, 4, 3, 2, 1].
Reverse first k=3 elements: [5, 6, 7, 4, 3, 2, 1].
Reverse the remaining n-k=4 elements: [5, 6, 7, 1, 2, 3, 4].

 */