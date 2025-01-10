function maxFrequencyElements(nums) {
    let hashMap = new Map();
    let maxFreq = 0;
    
    for(let value of nums) {
        hashMap.set(value, (hashMap.get(value) || 0 ) + 1);
        maxFreq = Math.max(maxFreq, hashMap.get(value));
    }
    let totalFreq = 0;
    for(let value of hashMap.values()) {
        if(value === maxFreq) {
            totalFreq += maxFreq;
        }
    }   
    return totalFreq;
};

let arr = [1, 2, 2, 3, 1, 4];
const res = maxFrequencyElements(arr);
console.log(res);


/**
 * Test Case 1: Normal Input
    Input: nums = [1, 2, 2, 3, 1, 4]

    Step-by-Step Execution:

    Frequency Calculation:

    Initialize hashMap = new Map().
    Loop through nums:
    1 → hashMap = {1: 1}
    2 → hashMap = {1: 1, 2: 1}
    2 → hashMap = {1: 1, 2: 2}
    3 → hashMap = {1: 1, 2: 2, 3: 1}
    1 → hashMap = {1: 2, 2: 2, 3: 1}
    4 → hashMap = {1: 2, 2: 2, 3: 1, 4: 1}
    Find Maximum Frequency:

    Loop through hashMap.values(hashMap) = [2, 2, 1, 1].
    Compare each value with maxFreq:
    maxFreq = max(0, 2) = 2
    maxFreq = max(2, 2) = 2
    maxFreq = max(2, 1) = 2
    maxFreq = max(2, 1) = 2
    Sum Frequencies with maxFreq:

    Initialize totalFreq = 0.
    Loop through hashMap.values(hashMap) = [2, 2, 1, 1]:
    2 === maxFreq → totalFreq += 2 → totalFreq = 2
    2 === maxFreq → totalFreq += 2 → totalFreq = 4
    1 !== maxFreq → skip
    1 !== maxFreq → skip
    Output: 4

Test Case 2: Single Element Array
    Input: nums = [7]

    Step-by-Step Execution:

    Frequency Calculation:

    Initialize hashMap = new Map().
    Loop through nums:
    7 → hashMap = {7: 1}
    Find Maximum Frequency:

    Loop through hashMap.values(hashMap) = [1].
    Compare each value with maxFreq:
    maxFreq = max(0, 1) = 1
    Sum Frequencies with maxFreq:

    Initialize totalFreq = 0.
    Loop through hashMap.values(hashMap) = [1]:
    1 === maxFreq → totalFreq += 1 → totalFreq = 1
    Output: 1
 */