function largestAltitude(gain) {
  let prefix = [];
  let len = gain.length;

  prefix[0] = gain[0];
  for (let i = 1; i < len; i++) {
    prefix[i] = prefix[i - 1] + gain[i];
  }

  for (let i = 0; i < len; i++) {
    let maxVale = Math.max(...prefix);
    if (maxVale < 0) {
      return 0;
    }
    return maxVale;
  }
}

let arr = [-4,-3,-2,-1,4,3,2];
const res = largestAltitude(arr);
console.log(res);
