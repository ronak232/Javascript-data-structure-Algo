/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    if (s.length < 0) return s;
    let words = s.split(" ").filter(word => word !== ""); // split the string by space and filter out empty strings
    let i = 0;
    let j = words.length - 1;
    while (i < j) {
        [words[i], words[j]] = [words[j], words[i]];
        i++;
        j--;
    }
    return words.join(" ")
};