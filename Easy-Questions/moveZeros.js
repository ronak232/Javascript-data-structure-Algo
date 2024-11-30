/**
 * time complexity - O(n);
 * space complexity - O(1);
 * 
 * dry run 
 * n = 5
  arr = [3, 5, 0, 0, 4, 4, 5];
  Initially, pos = 0
  First loop (i=0):
    - arr[0] = 3
    - pos = 0
  Second loop (i=1):
    - array[1] = 5
    - pos = 1
  Third loop (i=2):
    - arr[2] = 0 (zero, so skip)
  Fourth loop (i=3):
    - arr[3] = 0 (zero, so skip)
  Fifth loop (i=4):
    - arr[4] = 4
    - pos = 3
    - arr[3], arr[4] = arr[4], arr[3]
 */

var nums = [3, 5, 0, 0, 4, 4, 5, 0 ,0 ,0 ,0 ,0, 10];
function moveZeros(nums) {
  let i = 0;
  let j = 0; // `j` tracks the position of the last non-zero element
  while (i < nums.length) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap non-zero element with zero elements...
      j++; // Move the pointer for the next non-zero element
    }
    i++;

    // console.log("J" ,j)
    // console.log("I", i)
  }
  return nums;
}

let res = moveZeros(nums);
console.log(res);

let len = arr.length;
let j = 0;

for (let i = 0; i < len; i++) {
  if (arr[i] !== 0) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
    j++;
  }
}
