let arr = [1, 2, 3, 4, 5];
/**
 *
 * @param nums[]
 * @returns product of element;
 *
 * brute force solution
 * time complexity O(n^2);
 * space complexity O(n) extra array space;
 * tle error exist in this solution
 * cannot use by division because 0/nums[i] is will error;
 */
function productExceptSelf(nums) {
  let len = nums.length;
  let answer = [];
  for (let i = 0; i < len; i++) {
    let product = 1; // Reset product for each index i.
    for (let j = 0; j < nums.length; j++) {
      if (i == j) {
        // Skip multiplying the current element nums[i]
        continue;
      } else {
        product *= nums[j];
      }
    }
    answer.push(product);
  }
  return answer;
}

const res = productExceptSelf(arr);
console.log(res);

/**
 * @param nums[]
 * @returns product of element;
 * @var leftPrefix[]
 * @var rightsuffix[]
 *
 * time complexity O(2n) ~ O(n);
 * space complexity O(1) extra array space;
 * tle error exist in this solution
 */

function productExceptSelfPS(nums) {
  let len = nums.length;
  let leftPrefix = [],
    rightsuffix = [];
  let answer = [];

  leftPrefix[0] = 1;
  for (let i = 1; i < len; i++) {
    leftPrefix[i] = leftPrefix[i - 1] * nums[i - 1];
    console.log(leftPrefix);
  }

  rightsuffix[len - 1] = 1;
  for (let i = len - 2; i >= 0; i--) {
    rightsuffix[i] = rightsuffix[i + 1] * nums[i + 1];
    console.log(rightsuffix);
  }

  for (let i = 0; i < len; i++) {
    answer[i] = leftPrefix[i] * rightsuffix[i];
  }
  return answer;
}

let res1 = productExceptSelfPS(arr);
console.log(res1);

/**
 // more optimized
 *
 * @param nums[]
 * Complexity
 * TC - O(n)
 * SC - O(1)
 */
function productExceptSelfOptimized(nums) {
  let len = nums.length;
  let result = [];
  let prefix = [];
  prefix[0] = 1
  for (let i = 0; i < len; i++) {
    result[i] = prefix[i-1] * nums[i-1];
  }
  let postfix = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] = result[i] * postfix;
    postfix = postfix * nums[i];
  }
  
  console.log("Before --> " , result)
  return result;
}

let res2 = productExceptSelfOptimized(arr);
console.log(res2);


/**
 * Dry Run code...
 * Input: nums = [1, 2, 3, 4]
Initialization:

result = []
prefix = 1, postfix = 1
Prefix Pass:

when i = 0: result[0] = prefix = 1, prefix *= nums[0] = 1
when i = 1: result[1] = prefix = 1, prefix *= nums[1] = 2
when i = 2: result[2] = prefix = 2, prefix *= nums[2] = 6
when i = 3: result[3] = prefix = 6, prefix *= nums[3] = 24
After prefix pass: result = [1, 1, 2, 6]

Postfix Pass:

when i = 3: result[3] *= postfix = 6, postfix *= nums[3] = 4
when i = 2: result[2] *= postfix = 8, postfix *= nums[2] = 12
when i = 1: result[1] *= postfix = 12, postfix *= nums[1] = 24
when i = 0: result[0] *= postfix = 24, postfix *= nums[0] = 24
After postfix pass: result = [24, 12, 8, 6]
Output: [24, 12, 8, 6]
 */