/**
 * @param {number[]} citations
 * @return {number}
 * 
 * The function sorts the citations and initializes necessary variables.
It iterates through the sorted list and checks for the condition that determines the h-index.
For each valid condition met (where a paper has enough citations), it increments the h-index.
Finally, it returns the calculated h-index.

TC - O(nlogn)
SC - O(n) in worst case
  @arr - [3,0,1,6,5]
 */
var hIndex = function (citations) {
    let len = citations.length;
    let hIndex = 0;
    citations = citations.sort((a, b) => a - b)      // [0,1,3,5,6]
    for (let i = 0; i < len; i++) {
        if (citations[i] >= len - i) {    //   0 >= 4 not increment
            hIndex++;
        }
    }
    return hIndex;
};

