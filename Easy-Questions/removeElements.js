/* 
Two pointer approach 
complexity ->> time - O(n)
           ->> space - 0(1)
*/

function removeElements(nums, val) {
  let len = nums.length;
  let j = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      // check if current pointer element is not equal val
      nums[j] = nums[i];
      j++;
    }
  }
  return j; // remove the target value.
}
