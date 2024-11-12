function findDuplicateElements(arr) {
  let duplicate = [];
  let len = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (
      arr[i] === arr[i + 1] &&
      (duplicate.length === 0 || duplicate[duplicate.length - 1] !== arr[i])
    ) {
      duplicate.push(arr[i]);
    }
  }
  return duplicate;
}

let arr = [
  15, 13, 13, 3, 2, 1, 0, 16, 4, 12, 14, 5, 11, 6, 16, 7, 9, 3, 10, 2, 14, 8,
];

const res = findDuplicateElements(arr);
console.log(res);
