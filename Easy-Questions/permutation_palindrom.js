function palindrom_permutation(s) {
    let charMap = new Map();
    for(let char of s) {
        charMap.set(char,  (charMap.get(char) || 0) + 1);
    }
    let oddCount = 0;
    for(let counts of charMap.values()) {
        if(counts % 2 !== 0 ){
            oddCount++;
        }
    }
    return oddCount > 1 ? false : true
}

let arr1 = "abcd";
const res = palindrom_permutation(arr1);
console.log("result ", res)

// "level" true
// "ab" false  because at most only one character can be odd number time to 