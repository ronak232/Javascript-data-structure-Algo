var arr = [1, 0, 1, 2, 1,1];

function twoSumZero(arr) {
  let ans = new Set(arr);
  console.log(ans);
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

// Using Dutch National Flag Algo...

function twoSumZeroDNF(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

let result = twoSumZeroDNF(arr);
console.log(result);
