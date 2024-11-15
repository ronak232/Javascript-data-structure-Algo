function check(arr1, arr2) {
  // code here
  let hashMap1 = {};
  let hashMap2 = {};

  for (let key in arr1) {
    hashMap1[key] = (arr1[key] || 0) + 1;
  }

  for (let key in arr2) {
    hashMap2[key] = (arr2[key] || 0) + 1;
  }

  for (let key in hashMap1) {
    if (hashMap1[key] === hashMap2[key]) {
      return true;
    }
  }

  return false;
}

let arr1 = [1, 2, 4, 4, 0];
let arr2 = [2, 4, 5, 0, 1];

let res = check(arr1, arr2);
console.log(res);
