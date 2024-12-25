/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let len = s.length
    s = s.split("");
    let romanToNumber = 0;
    let romanMap = {
        'I': 1, 
        'V': 5, 
        'X': 10, 
        'L': 50, 
        'C': 100, 
        'D': 500, 
        'M': 1000
    }

    for (let i = 0; i < len; i++) {
         // Check if there is a next numeral and compare values
        if (romanMap[s[i]] < romanMap[s[i + 1]] && i < len) {
            romanToNumber -= romanMap[s[i]] // Subtract if current is less than next
        }
        else {
            romanToNumber += romanMap[s[i]] // Add otherwise
        }
    }
    return romanToNumber
};