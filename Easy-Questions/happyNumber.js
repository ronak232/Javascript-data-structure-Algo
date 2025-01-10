/**
 * @param {number} n
 * @return {boolean}
 * 
 * why n < 10 and n = 1 or n = 7
 * for n = 1 or n = 7 ---> 1 square is 1 and 7 → 49 → 97 → 130 → 10 → 1
 * Input: n = 4
    First iteration:
    4 → 4² = 16.
    Second iteration:
    16 → 1² + 6² = 37.
    Third iteration:
    37 → 3² + 7² = 58.
    Infinite loop:
    The sequence 58 → 89 → 145 → 42 → 20 → 4 repeats indefinitely.
 * All other single-digit numbers (2, 3, 4, ..., 9) lead to infinite cycles, not 1.
    recursivly calling the isHappy(n=1) only calls when n = 1 or n= 7 else it goes to false 
 */
var isHappy = function (n) {
    // base case for n < 10
    if (n < 10) {
        if (n === 1 || n === 7) { // always true for n value --> 1 and 7 
            return true;
        }
        return false;
    }
    let res = 0;
    while (n > 0) {
        let digit = n % 10;
        res = res + Math.pow(digit, 2);
        n = Math.floor(n / 10)
    }
    return isHappy(res)
};


