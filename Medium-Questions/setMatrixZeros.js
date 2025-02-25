/**
 * Time complexity ---> O(n*n)
 * Time complexity ---> O(1)
 */

var setZeroes = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let firstRow = false;  // act as marker 
  let firstCol = false;

  //set first row and first columns as a marker for zeros...
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        if (i == 0) firstRow = true;  // for first row
        if (j == 0) firstCol = true;  // for first column
        matrix[i][0] = 0; // turn cell(i,j) --> to zeros
        matrix[0][j] = 0;
      }
    }
  }

  // set zeros for the remaining matrix rows and columns
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // loop sets every element in the first row to 0
  if (firstRow) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  // loop sets every element in the first column to 0
  if (firstCol) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix
};
