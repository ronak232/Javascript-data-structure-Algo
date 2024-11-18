function alternativeSum(n) {
  let sign = 1;
  let ans = 0;
  let res = 0;
  let digitsArr = String(n).split("");
  for (let i = 0; i < digitsArr.length; i++) {
    if (digitsArr.length > 0) {
      ans = sign * digitsArr[i];
      sign = sign * -1;
      res += ans;
    }
  }
  return res;
}

let res = alternativeSum(521);
console.log(res);
