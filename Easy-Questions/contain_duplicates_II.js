function containsNearbyDuplicate(nums, k = 2) {
  let hashMap = {};
  let len = nums.lemgth;

  for (let i = 0; i < len; i++) {
    if (
      hashMap.hasOwnProperty(nums[i]) &&
      Math.abs(i - hashMap[nums[i]]) <= k
    ) {
      return true;
    }
    hashMap[nums[i]] = i;
  }
  return false;
}
let arr = [1, 2, 3, 1, 2, 3];
const res = containsNearbyDuplicate(arr);
console.log(res);
