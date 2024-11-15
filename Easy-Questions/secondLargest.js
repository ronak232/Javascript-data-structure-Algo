function getSecondLargest(arr) {
  // Code Here
  let largestNum = arr[0];
  let secondLargest = -1; //commonly used as a placeholder to indicate that the second-largest element hasn't been found yet
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  for (let i = 0; i < len; i++) {
    if (arr[i] > secondLargest && arr[i] !== largestNum) secondLargest = arr[i];
  }
  return secondLargest;
}
let arr = [12, 35, 1, 10, 34, 1];
console.log(getSecondLargest(arr));
/* 
Time Complexity: O(2*n) = O(n), as we are traversing the array only once.
Auxiliary space: O(1), as no extra space is required.
*/
