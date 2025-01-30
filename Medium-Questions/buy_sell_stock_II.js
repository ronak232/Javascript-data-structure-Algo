/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let len = prices.length;
    if (len === 0) return 0;
    let maxProfit = 0;
    for (let i = 0; i < len; i++) {
        if (prices[i - 1] < prices[i]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit
};

/**
 * 
 * #### my understanding

1. if current price is less than next day price we can buy and sell the stock and make the total profit eg -> 5 > 1 --> we get profit 5 - 1 = 4
2. if current price is great than the next price we don't buy the stock and sell the stock on that price  3 < 1 no we get profit in negative 1 - 3  = -2
3. So we buy on lowest price i.e on 1 if next price is 2 or 3 or any value of stock we sell it and this keep going until the input array length 
 */