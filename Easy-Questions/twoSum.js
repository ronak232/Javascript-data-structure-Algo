let arr = [3, 5, 3, 5, 5, [4, 6]];
let target = 13;
let res = twoSum(arr, target);

// brute force solution
/*
The brute-force solution has:

Time Complexity: O(n²) – We have to check each pair of elements in nums, which requires a nested loop. This is inefficient for large arrays.

Space Complexity: O(1) – Apart from the input array and the output array, we’re not using any extra space, so this solution is space-efficient.
 */

function twoSum(arr, target) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log("Target Value ---> ", res);

// optimal solution using Hash Map

// Time Complexity: O(N), where N = size of the array.
// Reason: The loop runs N times in the worst case and searching in a hashmap takes O(1) generally. So the time complexity is O(N).
// Space Complexity: O(N) as we use the map data structure.

// step - 1 --> declare the empty object {}

// step - 2 --> loop over the given array to check if we already have the value with respect to the index in the hash map.. then check if the other required element(i.e. target-arr[i]) exists in the hashMap

// step - 3 --> track the complement value from every iteration to get target value...

// step - 4 --> storing the complement value in object

console.log("Hashing approach...");

function twoSumHash(arr, target) {
  let targetObj = {};
  for (let key = 0; key < arr.length; key++) {
    let complement = target - arr[key]; // cal the complement
    if (targetObj.hasOwnProperty(complement)) {
      return [targetObj[complement], key];
    }
    targetObj[arr[key]] = key; // eg = (3, 0) // actual storing the value as a key and key as value to use it again.
  }
  return []; // return empty return
}

let hashRes = twoSumHash(arr, target);
console.log(hashRes);

/* 
Interview Insights and Edge Cases
Why use a hash map? 
It enables O(1) lookups, which allows us to check if a complement exists in constant time, making this solution very efficient.

What if there are duplicates in nums? The problem guarantees only one solution, so we won’t need to worry about multiple pairs causing ambiguity.

Edge Case – Single Element Array:

If nums contains less than two elements, the solution won’t work as we need two distinct indices for a valid sum.
Negative Numbers:

If nums or target has negative values, the algorithm still works correctly because the calculation of complement = target - nums[i] doesn’t assume positive numbers.
*/
