/**
 * 
 * @param arr[]
 * Complexity 
 * TC - O(n)
 * SC - O(n) --> extra space 
 */

// var uniqueOccurrences = function(arr) {
//     let hashMap = {};
//   let storeFrequencies = new Set();

//   for (let key of arr) {
//     hashMap[key] = (hashMap[key] || 0) + 1;
//   }
//   for (let i in hashMap) {
//     storeFrequencies.add(hashMap[i]);
//     if(storeFrequencies.size === Object.keys(hashMap).length){
//         return true;
//     }
//   }
//   return false;

function uniqueNumberOccurences(arr) {
  let hashMap = {};
  let storeFrequencies = new Set(); // Use a Set to store the unique frequencies from hashMap

  for (let key of arr) {
    hashMap[key] = (hashMap[key] || 0) + 1;
  }
  let uniqueSize = storeFrequencies.size;
  for (let i in hashMap) {
    storeFrequencies.add(hashMap[i]);
    //Compare the size of the Set (unique frequencies) with the number of keys in hashMap
    // If the sizes are equal, return true (all frequencies are unique).
    // Otherwise, return false.

    if (uniqueSize === Object.keys(hashMap).length) {
      return true;
    }
  }
  return false;
}

let arr = [3, 5, -2, -3, -6, -6];
const res = uniqueNumberOccurences(arr);
console.log(res);

/**
 * Sample Process:
 * Input: [3, 5, -2, -3, -6, -6]
    Step 1: Frequency map → { 3: 1, 5: 1, -2: 1, -3: 1, -6: 2 }
    Step 2: Unique frequencies → Set { 1, 2 }
    Step 3: Compare sizes → storeFrequencies.size (2) !== Object.keys(hashMap).length (5)
    Output: false
 * 
 * 
 */
