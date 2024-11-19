var arr = [-1, 2, -1, 3, 2];

function firstNonRepeating(arr) {
  // code here
  let hashMap = {};
  for (let key of arr) {
    hashMap[key] = (hashMap[key] || 0) + 1;
  }
  for (let i of arr) {
    if (hashMap[i] <= 1) {
      return i;
    }
  }
  return 0;
}

let res = firstNonRepeating(arr);
console.log(res);
