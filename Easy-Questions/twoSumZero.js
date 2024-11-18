var arr = [-1, 0, 1, 2, 1 ,-1, -4];

function twoSumZero(arr) {
    let ans = new Set(arr);
    console.log(ans)
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }
  return arr;
}

let res = twoSumZero(arr);
console.log(res);
