/*
Xor the elements 
*/

var singleNumber = function (nums) {
  let res = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    res = res ^ i;
  }
  return res;
};
let arr = [2, 2, 1];
singleNumber(arr);
