// using dynamic programming (tabulation or iterative approach) bottom-up

// #### base case 
// 1. when we only have 0-th stair or 1-th stair in this case 
// we only have 1 choice to climb stairs dp[0] - 1 or dp[1] = 0
// so the answer we got is only 1 ways can we climb to the top...

// 2. When we have case for  (n >=2)
// we iterate through the for i = 2 till n  (i.e. i = 2 to i <= n)
// * The number of ways to climb to step i is the sum of:
// 	* dp[i - 1] (ways to climb to the previous step and take 1 step).
// 	* dp[i - 2] (ways to climb to the step before last and take 2 steps).

// using this formula 
// **dp[i]=dp[i−1]+dp[i−2]** we get the total number of ways to climb stairs

// while returing dp[n] where n --> n-th number of stair

// Brute force solution 

// TC - O(2^n)
// Recursion based 
var climbStairs = function (n) {
    if (n === 0 || n === 1) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
};


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 0 || n === 1) return 1;
    let dp = [1, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};



// Dry run with n = 5

// Initialization:

// n = 5.
// dp = [1, 1] (base cases).
// Iterative Loop:

// Step 2 (i = 2):

// dp[2] = dp[1] + dp[0] = 1 + 1 = 2.
// dp = [1, 1, 2].
// Step 3 (i = 3):

// dp[3] = dp[2] + dp[1] = 2 + 1 = 3.
// dp = [1, 1, 2, 3].
// Step 4 (i = 4):

// dp[4] = dp[3] + dp[2] = 3 + 2 = 5.
// dp = [1, 1, 2, 3, 5].
// Step 5 (i = 5):

// dp[5] = dp[4] + dp[3] = 5 + 3 = 8.
// dp = [1, 1, 2, 3, 5, 8].
// Result:

// Return dp[5] = 8.

