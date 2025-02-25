/**
 * BRute force approach 
 * tc - O(n*m)
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length < 0) return ""
    let len = strs.length;
    let resString = "";
    let firstWord = strs[0];

    for (let i = 0; i < firstWord.length; i++) {
        let first = firstWord[i]; // get the letters of the first words and use for comparing
        for (let j = 1; j < len; j++) {
            let word = strs[j]; // second letter from other words letters 
            if (i == word.length || word[i] !== first) {
                return resString;
            }
        }
        resString += first;
    }
    return resString;
};