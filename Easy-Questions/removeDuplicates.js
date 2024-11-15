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

var arr = [1, 1, 2, 4, 5, 5, 6];

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
console.log(res);

// using hashing

