/**
 * take res = [words[0]] ( :) cause we need to check if strings are anagram or not so assume first item from words and check each string of words is anagram or not...

we created a function isAnagram(str1, str2) or not...

*we iterate over the words of array but till words.length
*from i = 1
*inside the loop we check if last word of res array is anagram with next word -
* if it is continue (i.e. skip current word)
			* ["abba","baba"] both are anagrma (true) skip this 
			* ["abba","bbaa"] both are anagram skip this also 
			* ["abba", "cd"] check both not a anagram we push into res array... ["abba", "cd"]
			* ["cd, "cd"] both are anagram skip

return res 

we have res = ["abba", "cd"]

  Time complexity - O(m * nlogn)
  space complexity - O(n + m)

 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    let res = [words[0]] // assume first words is anagram for checking

    function isAnagram(word1, word2) {
        let sorted1 = word1.split("").sort().join("");
        let sorted2 = word2.split("").sort().join("");

        return sorted1 === sorted2
    }
    let len = words.length;
    for (let i = 1; i < len; i++) {
        if (isAnagram(res[res.length - 1], words[i])) { // last word and current word are anagram or not
            continue;
        } else {
            res.push(words[i])
        }
    }
    return res
};
