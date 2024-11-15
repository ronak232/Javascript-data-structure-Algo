function containDuplicate(nums) {
  let hashMap = {};
  let len = nums.length - 1;
  let duplicate = 0;
  for (let i of nums) {
    hashMap[i] = (hashMap[i] || 0) + 1; // If the element exists in the HashMap, increment its count.
  }

  for (let i = 0; i < len; i++) {
    if (hashMap[i] > 1) {
      return true;
    }
    duplicate++;
  }
  return false;
}

let arr = [1, 2, 3, 4];
let res = containDuplicate(arr);
console.log(res);
