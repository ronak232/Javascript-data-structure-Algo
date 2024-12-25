/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let hashMap1 = {};
  for (let key of t) {
    hashMap1[key] = (hashMap1[key] || 0) + 1;
  }
  for (let value of s) {
    if (!hashMap1[value]) {
      return false;
    }
    hashMap1[value]--;
  }
  return true;
}
const s1 = "aacc";
const s2 = "ccac";
const res = isAnagram(s1, s2);
console.log(res);
