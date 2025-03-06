/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Time complexity - O(logn)
 * space complexity - O(1)
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) /2);
        if(nums[mid] === target) {
            return mid;
        }
        else if(nums[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1
        }
    }
    return start;
};