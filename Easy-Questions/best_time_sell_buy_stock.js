/**
 * 
 * @param {[]} prices 
 * @returns Number
 * - Initialize `minPrice` to a very large value (or prices[i])  and `maxProfit` to 0.
   - Iterate through the prices:
   - Update `minPrice` to the smaller of `minPrice` or the current price.
   - Compute the profit for the current price: `currentProfit = currentPrice - minPrice`.
   - Update `maxProfit` if `currentProfit` is greater than `maxProfit`.
   - Return `maxProfit`.

   Complexity 
   TC O(n) 
   with O(1) space, as it only uses two variables.
 * 
 */

function maxProfit(prices) {
  let len = prices.length;
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < len; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    let currentProfit = prices[i] - minPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
  }
  return maxProfit;
}

/** Explaination
 * 
 * Day 0: First price is 7, so we set minPrice to 7. No profit can be made yet.
Day 1: Price drops to 1, which is the lowest so far. Update minPrice to 1.
Day 2: Price increases to 5. The profit from buying at 1 and selling at 5 is 4, so update maxProfit to 4.
Day 3: Price drops to 3. Profit from buying at 1 and selling at 3 is 2. maxProfit remains 4 as this profit is smaller.
Day 4: Price increases to 6. The profit from buying at 1 and selling at 6 is 5, so update maxProfit to 5.
Day 5: Price decreases to 4. Profit from buying at 1 and selling at 4 is 3. maxProfit remains 5.
 */

/**
 * Day	prices[i]	minPrice	profit (prices[i] - minPrice)	maxProfit
 
    0	                7	        7	        0	                0
    1	                1	        1	        0	                0
    2	                5	        1	        4	                4
    3	                3	        1	        2	                4
    4	                6	        1	        5	                5
    5	                4	        1	        3	                5
 */