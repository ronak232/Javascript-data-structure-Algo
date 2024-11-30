let arr = [1, 2, 3, 4];
/**
 *
 * @param nums[]
 * @returns product of element;
 *
 * brute force solution
 * time complexity O(n^2);
 * space complexity O(n) extra array space;
 * tle error exist in this solution
 *
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
      console.log("Before product value ", product);
    }
    console.log("Product --> ", product);
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
 * time complexity O(2n);
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
  }
  rightsuffix[len - 1] = 1;
  for (let i = len - 2; i >= 0; i--) {
    rightsuffix[i] = rightsuffix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < len; i++) {
    answer[i] = leftPrefix[i] * rightsuffix[i];
  }
  return answer;
}

let res1 = productExceptSelfPS(arr);
console.log(res1);

// more optimized
function productExceptSelfOptimized(nums) {
  let len = nums.length;
  let result = [];
  let prefix = 1;
  for (let i = 0; i < len; i++) {
    result[i] = prefix;
    prefix *= nums[i]
  }
  let postfix = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}

let res2 = productExceptSelfOptimized(arr);
console.log(res2);
