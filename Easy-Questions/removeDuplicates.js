function removeDuplicatesEleme(arr) {
  // Code Here
  let firstIndex = 0;
  let nextIndex = 1;

  while (nextIndex < arr.length) {
    if (arr[nextIndex] !== arr[firstIndex]) {
      firstIndex++;
      arr[firstIndex] = arr[nextIndex];
    }
    nextIndex++;
  }
  console.log(firstIndex)
  return firstIndex + 1; // firstIndex checck the unique index elements...
}

let arr = [1, 1, 2, 4, 5, 5, 6];
let res = removeDuplicatesEleme(arr);
console.log(res);

/* 
Two-pointers approach
step - 1 define the initial index firstIndex and nextIndex i.e. firstIndex = 0, nextIndex = 1

step - 2 check if array is empty or not...

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