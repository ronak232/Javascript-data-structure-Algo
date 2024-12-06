function intersection(nums1, nums2) {
  let set = new Set(nums2);
  let ans = [];
  for (let key of nums1) {
    if (set.has(key)) {
      ans.push(key);
    }
  }
  return [...new Set(ans)];
}

let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];

const res = intersection(nums1, nums2);
console.log(res);

// more optimized
// hashMap and Set
/**
 * Complexity 
 * TC - O(m+n+k)
 * SC - O(n+k)
 */
function intersection() {
  let hashMap = {};
  let len = nums1.length;
  let res = [];

  for (let i of nums2) { // searching time O(1) and TC O(m)
    hashMap[i] = (hashMap[i] || 0) + 1; 
  }
  for (let i = 0; i < len; i++) { // pushing into res TC O(n)
    if (hashMap.hasOwnProperty(nums1[i])) {
      res.push(nums1[i]);
    }
  }
  return [...new Set(res)];
}
let nums11 = [1, 2, 2, 1];
let nums22 = [2, 2];
const result = intersection(nums11, nums22);
console.log(result);
