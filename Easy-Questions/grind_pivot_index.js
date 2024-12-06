function pivotIndex(nums) {
  let sum = 0;
  let leftPivot = 0;
  let rightPivot = 0;
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < len; i++) {
    rightPivot = sum - leftPivot - nums[i];
    if (rightPivot === leftPivot) {
      return i;
    }
    leftPivot += nums[i];
  }
  return -1;
}

let arr = [1, 7, 3, 6, 5, 6];
let res = pivotIndex(arr);
console.log(res);
