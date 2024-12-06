/**
 *
 * @param flowerbed[]
 * @param n
 * @returns true or false
 *
 * Complexity
 * TC - O(n)
 * SC - O(1)
 *
 * iterate over the array and check ->
 * 1. if current index == 0 & left and right items are->
 * unplanted i.e. flowerbed[i] == 0
 * 2. Chech if this condition is true place or planted flower i.e. flowerbed[i] = 1;
 * 3. return true if n <= 0;
 * 
 * note -  (i === 0 || flowerbed[i - 1] === 0) --> check for first index = 0 or previous index value is 0
      (i === len - 1 || flowerbed[i + 1] === 0) --> - check for last index = 0 or previous index value is 0
 */

function canPlaceFlowers(flowerbed, n = 2) {
  let len = flowerbed.length;

  for (let i = 0; i < len; i++) {
    if (
      flowerbed[i] == 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === len - 1 || flowerbed[i + 1] === 0) &&
      n !== 0
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }
  console.log(flowerbed)
  return n <= 0;
}

let arr = [0, 0, 1, 0, 0];
let res = canPlaceFlowers(arr);
console.log(res);

/**
 * Dry Run
 * Iteration 1 (i = 0):
flowerbed[0] == 0 (empty spot).
(i === 0 || flowerbed[i - 1] === 0) is true (first spot).
(i === len - 1 || flowerbed[i + 1] === 0) is true (flowerbed[1] == 0).
n !== 0 is true (n = 2).
Plant a flower: flowerbed = [1, 0, 1, 0, 0], n = 1.

Iteration 2 (i = 1):
flowerbed[1] == 0 but flowerbed[0] == 1, so skip.

Iteration 3 (i = 2):
flowerbed[2] == 1, so skip.

Iteration 4 (i = 3):
flowerbed[3] == 0 (empty spot).
(i === 0 || flowerbed[i - 1] === 0) is false (flowerbed[2] == 1).
(i === len - 1 || flowerbed[i + 1] === 0) is true (flowerbed[4] == 0).
Cannot plant a flower, so skip.

Iteration 5 (i = 4):
flowerbed[4] == 0 (empty spot).
(i === 0 || flowerbed[i - 1] === 0) is true (flowerbed[3] == 0).
(i === len - 1 || flowerbed[i + 1] === 0) is true (last spot).
n !== 0 is true (n = 1).
Plant a flower: flowerbed = [1, 0, 1, 0, 1], n = 0.
 */