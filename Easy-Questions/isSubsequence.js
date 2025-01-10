/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * using two pointer approach
 * Traverse through t while keeping track of a pointer j for s.
   For every character in t, if the character matches s[j], move the pointer j forward.
   If j equals s.length, it means all characters in s are matched in t in order.
 */
var isSubsequence = function (s, t) {
    let len = s.length;
    if(len === 0) return true;
    let j = 0;
    for(let i = 0; i<t.length; i++) {
        if(s[j] === t[i]) {
            j++;
        }
        if(j === len) return true;
    }
    return false;
};