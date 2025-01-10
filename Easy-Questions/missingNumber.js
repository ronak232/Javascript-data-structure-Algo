var arr = [1, 2, 4, 5];

// Remeber point we are taking i = actual length of array
// j ---> arr.length - 1 hypothetical range

/**
 * @param arr[]
 * @returns missing number;
 *
 * Brute solution
 * Time complexity O(n^2) --> Worst case
 * Space complexity O(1)
 * Keeping the track of ith number exist in array with nested loop iteration i.e. arr[j] === i
 */

function missingNumberBrute(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] === i) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      return arr[i];
    }
  }
}
let res1 = missingNumberBrute(arr);
console.log(res1);

/**
 * 2nd Approach
 * @param arr[]
 * finding the missing number
 * using Sum of all natural number
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
// Explanation
// Uses the formula for the sum of the first n natural numbers:

// Sum =𝑛 × ( 𝑛  +1) / 2

// This works because n is the number of elements the array should have.

// Actual Sum:
// Iterates through the given array and calculates the sum of its elements.

// Difference:
// The missing number is the difference between the expected sum and the actual sum.

function missingNumber(arr) {
  let sum = 0;
  let n = arr.length + 1;
  let sumOfNum = (n * (n + 1)) / 2;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let res = sumOfNum - sum;
  return res;
}

let res = missingNumber(arr);
console.log(res);

let xor1 = 0;
let xor2 = 0;

for (let i = 0; i < arr.length; i++) {
  xor1 = xor1 ^ i; // i.e 1^2^3^4^5
}

for (let i = 0; i < arr.length - 1; i++) {
  xor2 = xor2 ^ i;
}

let missingNum = xor1 ^ xor2;
console.log(missingNum);
