var arr = [1,8,6,2,5,4,8,3,7];
/**
 * 
 * @param {} arr[]
 * @returns maxWaterArea
 * 
 * First Brute force
 * Time complexity - O(n*n);
 * Space Complexity - O(1)
 */

function containerWaterBrute(arr) {
  let maxArea = 0;
  let width, height,area;
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
        width = j - i;
        height = Math.min(arr[i], arr[j]); // taking height min so that water does not get overflow from container...
        area = width * height; // container height and width...
        maxArea =Math.max(maxArea, area);
    }
    }
    return maxArea;
}

let res = containerWaterBrute(arr);
console.log(res);

/**
 * @param arr[]
 * Two Pointer Approach 
 * Time Complexity - O(n);
 * Space Complexity - O(1);
 */

function containerWaterOptimal(arr) {
   let i = 0; 
   let j = arr.length - 1; 
   let maxArea = 0; // keeps track of the maximum water that can be trapped as we iterate.

   while (i < j) {
     let width = j - i;  // left - right to get width size...
     let height = Math.min(arr[i], arr[j]); // find min height 
     // height min -- because water is constrained by the shorter wall.
     // The height is determined by the shorter wall to avoid overflow of water.
     let area = width * height
     maxArea = Math.max(maxArea, area)
     if(arr[i] < arr[j]) {
          i++;
        }
        else {
          j--;
        }
   }
   return maxArea; //holds the maximum water area
}

let res1 = containerWaterOptimal(arr);
console.log(res1);