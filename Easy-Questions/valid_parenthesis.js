/**
 * @param {string} s
 * @return {boolean}
 * Time complexity --> O(N + M) 
 * Space complexity --> O(N) or in worst case empty stack O(1)
 */
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        }
        else if ((s[i] === ")" && stack[stack.length - 1] === "(") ||
            (s[i] === "}" && stack[stack.length - 1] === "{") ||
            (s[i] === "]" && stack[stack.length - 1] === "[")) {
            stack.pop();
        }
        else {
            return false;
        }
    }
    return stack.length > 0 ? false : true // we have iterate over whole stack 
    // if stack.length == 0 we return true 
    // if stack.length < 0 we return false (i.e., stack still hold some closing brackets whch does not have corresponsding opening brackets)
};
