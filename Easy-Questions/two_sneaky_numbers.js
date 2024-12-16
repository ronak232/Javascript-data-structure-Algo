/**
 * 
 * @param {[]} nums 
 * Complexity - TC - O(n), SC - O(n)
 */

function getSneakyNumbers(nums) {
    let hashMap = {};
    let ans = [];

    for(let key of nums) {
        hashMap[key] = (hashMap[key] || 0) + 1;
    }
    for(let i in hashMap) {
        if(hashMap[i] >= 2 ){
            ans.push(parseInt(i));
        }
    }
    return ans;
}

let nums = [7,1,5,4,3,4,6,0,9,5,8,2];
const result = getSneakyNumbers(nums);
console.log(result);

