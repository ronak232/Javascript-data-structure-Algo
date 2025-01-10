/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false; // Impossible to construct
  }

  const magazineFreq = {};

  // Step 2: Populate frequency map for magazine
  for (let char of magazine) {
    magazineFreq[char] = (magazineFreq[char] || 0) + 1;
  }

  // Step 3: Check if ransomNote can be constructed
  for (let char of ransomNote) {
    if (!magazineFreq[char] || magazineFreq[char] === 0) {
      return false; // Not enough letters
    }
    magazineFreq[char]--; // Use one occurrence of the letter
  }

  return true;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  let hashMap1 = {};
  let hashMap2 = {};

  let itemsS1 = ransomNote.split(" ").join("");
  let itemsS2 = magazine.split(" ").join("");

  for (let item of itemsS1) {
    hashMap1[item] = (hashMap1[item] || 0) + 1;
  }
  for (let item of itemsS2) {
    hashMap2[item] = (hashMap2[item] || 0) + 1;
  }

  for (let value in hashMap1) {
    if (!hashMap2[value] || hashMap1[value] > hashMap2[value]) {
      return false; // Not enough letters in magazine
    }
  }
  return true;
};

/**
 * Total Time Complexity:O(n+m)
Where n is the length of ransomNote and 
      m is the length of magazine.

* Space Complexity:
Overall: O(n+m)
Space used by frequency maps for both strings.
 */
