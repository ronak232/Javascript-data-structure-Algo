function mergeTwoArray(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      // Copy Remaining Elements
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  // this will track the value of first highest value than next eg. [2, 1 2 ,3, 5, 6]
  while (j >= 0) {
    nums1[k] = nums2[j];
    j -= 1;
    k -= 1;
  }
};

let nums1 = [1, 2, 4, 5];
let nums2 = [2,5, 6, 7]

const res = mergeTwoArray(nums1, m=4, nums2, n=4)
console.log(res);

/**
 * TC - O(n)
 * SC - O(1)
 */