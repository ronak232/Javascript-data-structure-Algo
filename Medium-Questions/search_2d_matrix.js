/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let start = 0;
    let end = n * m - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2); // mid value
        let row = Math.floor(mid / m); // to find the mid element of row
        let col = mid % m; // 

        if (matrix[row][col] === target) {
            return true;
        }
        else if (target > matrix[row][col]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return false;
};