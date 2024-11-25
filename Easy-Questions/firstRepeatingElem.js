/*
Time complexity O(n)
Space complexity O(n) extra space (with hashMap...)
*/
var arr = [1, 2, 3, 4];
function firstRepeated(arr) {

  let hashMap = {};
  for (let key of arr) {  // simple iteration over values.
    hashMap[key] = (hashMap[key] || 0) + 1; // track the repeatative values
  }
  for (let i of arr) {
    if (hashMap[arr[i]] >= 2) {
      return i + 1;
    }
  }
  return -1;
}
let res = firstRepeated(arr);
console.log(res);

// Better to avoid for...in for arrays.