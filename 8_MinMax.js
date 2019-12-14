/*
given five positive integers, find the minimum 
and maximum values that can be calculated by summing 
exactly four of the five integers. 

-
Complete the miniMaxSum function in the editor below.
 It should print two space-separated integers on one line:
  the minimum sum and the maximum sum of  of  elements.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Input Format

A single line of five space-separated integers.

Print two space-separated long integers denoting the 
respective minimum and maximum values that can 
be calculated by summing exactly four of the five integers.
 (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14

*/
let arr = [1, 3, 5, 7, 9];

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let newArr = [...arr].sort();
  let sum = 0;

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  let min = sum - newArr[0];
  let max = sum - newArr[newArr.length - 1];

  console.log(max, min);
}

miniMaxSum(arr);
