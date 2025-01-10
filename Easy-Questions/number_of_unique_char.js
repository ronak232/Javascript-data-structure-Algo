/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr = Array(26).fill(0); // Initialize an array of size 26 with 0
    for (let ch of s) {
        arr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++; // Increment the count for the character
    }
    for (let i = 0; i < s.length; i++) {
        if (arr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
            return i; // Return the index of the first unique character
        }
    }
    return -1; // Return -1 if no unique character exists
};
