var arr = [1, 2, 3, 4, 5];

/**
 *
 * @param arr[]
 * Complexity --
 * TC - O(n)
 * SC - O(1)
 *
 * Wave Array Problem ---> nums[1] >= nums[2] <= nums[3] >= nums[4].....
 *
 */

function waveArray(arr) {
  for (let i = 1; i < arr.length - 1; i += 2) {
    if (arr.length > 0) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
  }
  // console.log(arr)
  return arr;
}

let res = waveArray(arr);
console.log(res); //  [2, 1, 4, 3, 5]
