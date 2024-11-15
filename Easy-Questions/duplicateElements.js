var arr = [
  15, 13, 13, 3, 2, 1, 0, 16, 4, 12, 14, 5, 11, 6, 16, 7, 9, 3, 10, 2, 14, 8,
];

function findDuplicateElements(arr) {
  arr.sort((a, b) => a - b);

  let duplicate = [];
  let len = arr.length;

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

const res1 = findDuplicateElements(arr);
console.log(res1);

function findDuplicateHash(arr) {
  let duplicate = [];
  let hashDup = {};

  for (let i of arr) {
    if (hashDup[i]) {
      duplicate.push(i);
    } else {
      hashDup[i] = true;
    }
  }
  return duplicate;
}

const res2 = findDuplicateHash(arr);
console.log(res2);
