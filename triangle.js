// https://leetcode.com/problems/triangle/

function minimumTotal1(triangle) {
  // create a new array with the last array being 0
  // answer reference: https://www.youtube.com/watch?v=iNDXLhmV0iU
  // ta = table
  let ta = []; //
  for (let row of triangle) ta.push(new Array(row.length).fill(0));
  console.log(ta);
  ta[0] = triangle[0];
  // i: row
  // j: column
  for (i = 1; i < ta.length; i++) {
    for (j = 0; j < ta[i].length; j++) {
      // if in first col
      if (j === 0) {
        ta[i][j] = ta[i - 1][j] + triangle[i][j];
      } else if (j === ta[i].length - 1) {
        // if in last column
        console.log(ta[i - 1][ta[i - 1].length - 1] + triangle[i][j]);
        ta[i][j] = ta[i - 1][ta[i - 1].length - 1] + triangle[i][j];
      } else {
        ta[i][j] = Math.min(ta[i - 1][j], ta[i - 1][j - 1]) + triangle[i][j]; // minimum
      }
    }
  }
  return Math.min(...ta[ta.length - 1]);
}

// [[-1], [2, 3], [1, -1, -3]];

//     [ -1 ]
//    [ 2, 3 ]
//  [ 1, -1, -3 ]
//G[ 0, 0, 0, 0 ]
//   -1 + 3 + -3

console.log(minimumTotal1([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // 11
