/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.

 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 * 
 * 
 */

function diagonalDifference(arr) {
  // Write your code here
  const dim = arr[0].length;
  let first_diagonal_sum = 0; //length of the square metrix
  let second_diagonal_sum = 0;
  let diff = 0;

  /* 
   i = raw of the integers in the scond diagnol
   j = colum of the integrs in the second diagnol
  */

  for (let i = 0, j = dim - 1; i < dim, j > -1; i++, j--) {
    first_diagonal_sum += arr[i][i];
    second_diagonal_sum += arr[i][j];
  }

  diff = first_diagonal_sum - second_diagonal_sum;

  // absolute number
  if (diff > 0) {
    return diff;
  } else if (diff < 0) {
    return diff * -1; // changes minus to +number
  } else {
    return 0;
  }
}
