/* 
Two-pointers approach
step - 1 check if array is empty or not...

step - 2 define the initial index firstIndex and nextIndex i.e. firstIndex = 0, nextIndex = 1

step - 3 iterate over the given array
      --> check if firstIndex and nextIndex values --> i.e. if they are same or not
      --> increment firstIndex value... if not 
      --> compare again with nextIndex

step 4 return the unique elements from array...
*/

/* 
Complexity Analysis
Time Complexity: 
𝑂(𝑛), where 𝑛 is the length of nums, because we traverse the array once.
Space Complexity: 
𝑂(1) as we modify nums in-place without using extra space.
*/

var arr = [0, 3, 1, 2, 2, 1];

function removeDuplicatesElement(arr) {
  // Code Here
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[j] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1; // firstIndex check the unique index elements...
}

let res = removeDuplicatesElement(arr);
// console.log(res);

// using hashing

function findDuplicates(arr) {
  let hashMap = {};
  let duplicate = [];

  for (let key of arr) {
    hashMap[key] = (hashMap[key] || 0) + 1;
  }

  for (let key in hashMap) {
    if (hashMap[key] > 1) {
      duplicate.push(key);
    }
  }
  return duplicate;
}

let result = findDuplicates(arr);
console.log(result);
