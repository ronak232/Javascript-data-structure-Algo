/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let hashMap = new Map();
  for (let char of s) {
    hashMap.set(char, (hashMap.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!hashMap.has(char) || hashMap.get(char) === 0) {
      return char;
    }
    hashMap.set(char, hashMap.get(char) - 1); // decrement the count
  }
  return null;
};

/**
 * time complexity is O(m+n) where m is the length of s and n is the length of t
 * space complexity is O(n) in worst case due to hashmap
 */
